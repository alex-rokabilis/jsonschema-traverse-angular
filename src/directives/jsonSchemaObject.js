import { generateID } from "../utils/shortid";

export default function($compile) {
  return {
    restrict: "E",
    scope: { data: "=", schema: "=" },
    template: `
      <h3>{{schema.title}}</h3>
    `,
    controller: function($scope, $element, $attrs) {
      /* Start helper functions */
      const ifObject = (schema, key) => {
        let newSchema = generateID();
        $scope.data[key] = $scope.data[key] || {};
        $scope[newSchema] = schema;
        return $compile(`<json-schema-object schema='${newSchema}' data='data.${key}'></json-schema-object>`)($scope);
      };

      const ifArray = (schema, key) => {
        let newSchema = generateID();
        $scope.data[key] = $scope.data[key] || [];
        $scope[newSchema] = schema;
        return $compile(`<json-schema-array schema='${newSchema}' data='data.${key}'></json-schema-array>`)($scope);
      };

      const ifBoolean = (schema, key) => {
        let newSchema = generateID();
        $scope.data[key] = $scope.data[key] || false;
        $scope[newSchema] = schema;
        return $compile(`<json-schema-checkbox schema='${newSchema}' data='data.${key}'></json-schema-checkbox>`)(
          $scope
        );
      };

      const ifString = (schema, key) => {
        let newSchema = generateID();
        $scope.data[key] = $scope.data[key] || "";
        $scope[newSchema] = schema;
        return $compile(`<json-schema-text schema='${newSchema}' data='data.${key}'></json-schema-text>`)($scope);
      };

      const ifNumber = (schema, key) => {
        //TODO
        return Number();
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

      let schema = $scope.schema.properties;
      for (let key in schema) {
        $element.append(handleSchema(schema[key], key));
      }
    }
  };
}
