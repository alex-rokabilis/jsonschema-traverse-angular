const angular = require("angular");

import "./style.css";

import jsonSchemaRoot from "./directives/jsonSchemaRoot";
import jsonSchemaObject from "./directives/jsonSchemaObject";
import jsonSchemaArray from "./directives/jsonSchemaArray";
import jsonSchemaText from "./directives/jsonSchemaText";
import jsonSchemaCheckbox from "./directives/jsonSchemaCheckbox";

angular
  .module("app", [])
  .directive("jsonSchemaRoot", jsonSchemaRoot)
  .directive("jsonSchemaObject", jsonSchemaObject)
  .directive("jsonSchemaArray", jsonSchemaArray)
  .directive("jsonSchemaText", jsonSchemaText)
  .directive("jsonSchemaCheckbox", jsonSchemaCheckbox)

  .controller("mycontroller", function($scope) {
    $scope.about_us;

    // $scope.schema = {
    //   type: "boolean",
    //   title: "Na einai mple?",
    //   description: "Ta kanei ola mple"
    // };
    // $scope.schema = {
    //   type: "object",
    //   title: "Settings for original",
    //   properties: {
    //     active: { type: "boolean", title: "Active?" },
    //     aou: { type: "string", title: "Type your aou" },
    //     lol: {
    //       type: "object",
    //       title: "Settings for lol",
    //       properties: {
    //         active2: { type: "boolean", title: "Active2?" },
    //         names: {
    //           type: "array",
    //           title: "The names array",
    //           items: {
    //             type: "string",
    //             title: "Give me a name"
    //           }
    //         },
    //         lol2: {
    //           title: "Settings for lol2",
    //           type: "object",
    //           properties: {
    //             active3: { type: "boolean", title: "Active3?" }
    //           }
    //         }
    //       }
    //     }
    //   }
    // };
    $scope.schema = {
      $id: "about_us/component_1",
      type: "object",
      title: "About us configuration",
      properties: {
        active: { type: "boolean", title: "Active?" },
        data: {
          title: "The array containing the 'about us' elements",
          type: "array",
          items: {
            type: "object",
            properties: {
              title: { type: "string", title: "Titlos", minLength: 4 },
              sub_title: { type: "string", title: "Ypotitlos" },
              description: { type: "string", title: "Perigrafi" },
              image: { type: "string", format: "image", title: "Eikona" }
            },
            additionalProperties: false,
            required: ["title", "image"]
          },
          minItems: 1
        }
      },
      additionalProperties: false
    };
  });
