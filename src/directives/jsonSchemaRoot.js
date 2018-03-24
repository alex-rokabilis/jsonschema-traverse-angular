import { generateID } from "../utils/shortid";

export default function($compile) {
  return {
    restrict: "E",
    scope: { schema: "=", data: "=" },
    template: "<form></form>",
    controller: function($scope, $element, $attrs) {
      /* Start helper functions */
      const ifObject = (schema, key) => {
        let newSchema = generateID();
        $scope.data = $scope.data || {};
        $scope[newSchema] = schema;
        return $compile(`<json-schema-object schema='${newSchema}' data='data'></json-schema-object>`)($scope);
      };

      const ifArray = (schema, key) => {
        let newSchema = generateID();
        $scope.data = $scope.data || [];
        $scope[newSchema] = schema.items;
        return $compile(`<json-schema-array schema='${newSchema}' data='data'></json-schema-array>`)($scope);
      };

      const ifBoolean = (schema, key) => {
        let newSchema = generateID();
        $scope.data = $scope.data || false;
        $scope[newSchema] = schema;
        return $compile(`<json-schema-checkbox schema='${newSchema}' data='data'></json-schema-checkbox>`)($scope);
      };

      const ifString = (schema, key) => {
        let newSchema = generateID();
        $scope.data = $scope.data || "";
        $scope[newSchema] = schema;
        return $compile(`<json-schema-text schema='${newSchema}' data='data'></json-schema-text>`)($scope);
      };

      const ifNumber = (schema, key) => {
        let newSchema = generateID();
        $scope.data = $scope.data || 0;
        $scope[newSchema] = schema;
        return $compile(`<json-schema-number schema='${newSchema}' data='data'></json-schema-number>`)($scope);
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

      let schema = $scope.schema;
      $element.find("form").append(handleSchema(schema));
    }
  };
}
