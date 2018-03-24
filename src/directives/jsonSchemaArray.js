import { generateID } from "../utils/shortid";

export default function($compile) {
  return {
    restrict: "E",
    scope: { data: "=", schema: "=" },
    template: `
      <h5>{{schema.title}}</h5>
      <button ng-click="addNew()">ADD</button>
      `,
    controller: function($scope, $element, $attrs) {
      /* Start helper functions */

      const initializeArray = () => {
        if (!$scope.data.length && $scope.schema.minItems) {
          for (let i = 0; i < $scope.schema.minItems; i++) {
            $scope.addNew();
          }
        }
      };

      const ifObject = (schema, key) => {
        let newSchema = generateID();
        $scope.addNew = () => $scope.data.push({});
        $scope[newSchema] = schema;
        initializeArray();

        return $compile(`
          <json-schema-object 
          ng-repeat="item in data track by $index"
          schema='${newSchema}' data='item' ></json-schema-object>`)($scope);
      };

      const ifArray = (schema, key) => {
        let newSchema = generateID();
        $scope.addNew = () => $scope.data.push([]);
        $scope[newSchema] = schema.items;
        return $compile(`
          <json-schema-array 
          ng-repeat="item in data track by $index"
          schema='${newSchema}' data='item'></json-schema-array>`)($scope);
      };

      const ifBoolean = (schema, key) => {
        let newSchema = generateID();
        $scope.addNew = () => $scope.data.push(false);
        $scope[newSchema] = schema;
        return $compile(`
          <json-schema-checkbox 
          ng-repeat="item in data track by $index"
          schema='${newSchema}' data='item'></json-schema-checkbox>`)($scope);
      };

      const ifString = (schema, key) => {
        let newSchema = generateID();
        $scope.addNew = () => $scope.data.push("");
        $scope.removeItem = index => $scope.data.splice(index, 1);
        $scope[newSchema] = schema;
        return $compile(`
          <json-schema-text 
          ng-repeat="item in data track by $index"
          schema='${newSchema}' data='data[$index]'>
            <button ng-click="data.splice($index,1)">X</button>
          </json-schema-text>`)($scope);
      };

      const handleSchema = (schema, key) => {
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
      };
      /* End helper functions */

      let schema = $scope.schema.items;
      $element.append(handleSchema(schema));
    }
  };
}
