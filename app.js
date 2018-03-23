angular
  .module("app", [])
  .controller("mycontroller", function($scope) {
    $scope.about_us;

    // $scope.schema = {
    //     type: "boolean",
    //     title: "Na einai mple?",
    //     description: "Ta kanei ola mple"
    // }
    $scope.schema = {
      type: "array",
      items: {
        type: "object",
        properties: {
            active: { 
                title: "Sas aresei o poures?",
                type: "boolean" 
            },
            msg: { 
                title: "Posa xronia?",
                type: "string"
             },
        }
        // active: { type: "boolean" },
        // aou: { type: "string" },
        // lol: {
        //   type: "object",
        //   properties: {
        //     active2: { type: "boolean" },
        //     lol2: {
        //       type: "object",
        //       properties: {
        //         active3: { type: "boolean" }
        //       }
        //     }
        //   }
        // }
      }
    };
    // $scope.schema = {
    //   $id: "about_us/component_1",
    //   type: "object",
    //   properties: {
    //     active: { type: "boolean" },
    //     data: {
    //       title: "The array containing the 'about us' elements",
    //       type: "array",
    //       items: {
    //         type: "object",
    //         properties: {
    //           title: { type: "string", title: "Titlos" },
    //           sub_title: { type: "string" },
    //           description: { type: "string" },
    //           image: { type: "string", format: "image" }
    //         },
    //         additionalProperties: false,
    //         required: ["title", "image"]
    //       },
    //       minItems: 1
    //     }
    //   },
    //   additionalProperties: false
    // };
  })
  .directive("jsonSchemaParent", function($compile) {
    return {
      restrict: "E",
      scope: { schema: "=", data: "=" },
      template: "<form></form>",
      controller: function($scope, $element, $attrs) {
        var schema = $scope.schema;

        function ifObject(schema, key) {
          $scope.data = {};
          $scope.newSchema = schema.properties;
          return $compile(
            `
            <json-schema-object schema='newSchema' data='data'></json-schema-object>
            `
          )($scope);
        }

        function ifArray(schema, key) {
          $scope.data = [];
          $scope.newSchema = schema.items;
          return $compile(
            `
            <json-schema-array schema='newSchema' data='data'></json-schema-array>
            `
          )($scope);
        }

        function ifBoolean(schema, key) {
          console.log(schema);
          $scope.data = false;
          $scope.newSchema = schema;
          return $compile(
            `<json-schema-checkbox schema='newSchema' data='data'></json-schema-checkbox>`
          )($scope);
        }
        function ifString(schema, key) {
          console.log(schema, key);
          $scope.data[key] = "";
          return $compile(
            `<json-schema-text id='${Math.random()}' name='${key}' data='data.${key}'></json-schema-text>`
          )($scope);
        }
        function ifNumber(schema) {
          return Number();
        }

        function handleSchema(schema, key) {
          switch (schema.type) {
            case "object":
              return ifObject(schema, key);
            case "boolean":
              return ifBoolean(schema, key);
            case "array":
              return ifArray(schema, key);
            case "string":
              return ifString(schema, key);
            case "number":
              return ifNumber(schema, key);
            default:
              break;
          }
        }
        let el = handleSchema(schema);
        console.log("final", el);
        $element.find("form").append(el);
        // for (let key in el) {
        //   $element.find("form").append(el[key]);
        // }

        console.log($scope.data);
        // for (let key in schema.properties) {
        //   var el = $compile(
        //     '<json-schema-text inp="result.' + key + '" ></json-schema-text>'
        //   )($scope);

        //   $element.find("form").append(el);
        // }
      }
    };
  })
  .directive("jsonSchemaObject", function($compile) {
    return {
      restrict: "E",
      scope: { data: "=", name: "@", id: "@", schema: "=" },
      template: ``,
      controller: function($scope, $element, $attrs) {
        console.log("jsonSchemaObject", $scope.schema);
        let schema = $scope.schema;
        for (let key in schema) {
          $element.append(handleSchema(schema[key], key));
        }

        function ifObject(schema, key) {
          $scope.data[key] = {};
          $scope.newSchema = schema.properties;
          return $compile(
            `
              <json-schema-object schema='newSchema' data='data.${key}' ></json-schema-object>
              `
          )($scope);
        }
        function ifString(schema, key) {
            $scope.newSchema = schema;
          return $compile(
            `<json-schema-text schema='newSchema' data='data.${key}'></json-schema-text>`
          )($scope);
        }
        function ifBoolean(schema, key) {
            $scope.newSchema2 = schema;
          return $compile(
            `<json-schema-checkbox schema='newSchema2' data='data.${key}'></json-schema-checkbox>`
          )($scope);
        }
        function handleSchema(schema, key) {
          switch (schema.type) {
            case "object":
              return ifObject(schema, key);
            case "boolean":
              return ifBoolean(schema, key);
            case "array":
              return ifArray(schema, key);
            case "string":
              return ifString(schema, key);
            case "number":
              return ifNumber(schema, key);
            default:
              break;
          }
        }
      }
    };
  })
  .directive("jsonSchemaArray", function($compile) {
    return {
      restrict: "E",
      scope: { data: "=", name: "@", id: "@", schema: "=" },
      template: `
        <button ng-click="addNew()">ADD</button>
      `,
      controller: function($scope, $element, $attrs) {
        console.log("jsonSchemaArray", $scope);
        let schema = $scope.schema;
        $element.append(handleSchema(schema));

        function ifObject(schema, key) {
            $scope.addNew = function() {
                $scope.data.push({});
              };
          $scope.newSchema = schema.properties;
          return $compile(
            `
              <json-schema-object 
              ng-repeat="item in data track by $index"
              schema='newSchema' data='item' ></json-schema-object>
              `
          )($scope);
        }
        function ifString(schema, key) {
          $scope.addNew = function() {
            $scope.data.push("");
          };
          $scope.newSchema = schema;
          return $compile(
            `<json-schema-text 
            ng-repeat="item in data track by $index"
            schema='newSchema' data='data[$index]'></json-schema-text>`
          )($scope);
        }
        function ifBoolean(schema, key) {
          $scope.addNew = function() {
            $scope.data.push(false);
          };
          $scope.newSchema = schema;

          return $compile(
            `<json-schema-checkbox 
                ng-repeat="item in data track by $index"
                schema='newSchema' data='data[$index]'></json-schema-checkbox>`
          )($scope);
        }
        function handleSchema(schema, key) {
          switch (schema.type) {
            case "object":
              return ifObject(schema, key);
            case "boolean":
              return ifBoolean(schema, key);
            case "array":
              return ifArray(schema, key);
            case "string":
              return ifString(schema, key);
            case "number":
              return ifNumber(schema, key);
            default:
              break;
          }
        }
      }
    };
  })
  .directive("jsonSchemaText", function($compile) {
    return {
      restrict: "E",
      scope: { data: "=", schema: "=" },
      template: `
      <div>
        <label title="{{schema.description}}" for="{{schema.title}}">{{schema.title}}</label>
        <input id="{{schema.title}}" ng-model='data' type='text'>
      </div>
      `
    };
  })
  .directive("jsonSchemaCheckbox", function($compile) {
    return {
      restrict: "E",
      scope: { data: "=", schema: "=" },
      template: `
      <div>
        <label title="{{schema.description}}" for="{{schema.title}}">{{schema.title}}</label>
        <input id="{{schema.title}}" ng-model='data' type='checkbox'>
      </div>
      `
    };
  });
