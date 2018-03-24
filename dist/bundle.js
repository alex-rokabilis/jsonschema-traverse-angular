/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/angular/angular.js":
/*!*****************************************!*\
  !*** ./node_modules/angular/angular.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./node_modules/angular/index.js":
/*!***************************************!*\
  !*** ./node_modules/angular/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./angular */ \"./node_modules/angular/angular.js\");\nmodule.exports = angular;\n\n\n//# sourceURL=webpack:///./node_modules/angular/index.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const angular = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n\nangular\n  .module(\"app\", [])\n  .controller(\"mycontroller\", function($scope) {\n    $scope.about_us;\n\n    // $scope.schema = {\n    //     type: \"boolean\",\n    //     title: \"Na einai mple?\",\n    //     description: \"Ta kanei ola mple\"\n    // }\n    $scope.schema = {\n      type: \"array\",\n      items: {\n        type: \"object\",\n        properties: {\n          active: {\n            title: \"Sas aresei o poures?\",\n            type: \"boolean\"\n          },\n          msg: {\n            title: \"Posa xronia?\",\n            type: \"string\"\n          }\n        }\n        // active: { type: \"boolean\" },\n        // aou: { type: \"string\" },\n        // lol: {\n        //   type: \"object\",\n        //   properties: {\n        //     active2: { type: \"boolean\" },\n        //     lol2: {\n        //       type: \"object\",\n        //       properties: {\n        //         active3: { type: \"boolean\" }\n        //       }\n        //     }\n        //   }\n        // }\n      }\n    };\n    // $scope.schema = {\n    //   $id: \"about_us/component_1\",\n    //   type: \"object\",\n    //   properties: {\n    //     active: { type: \"boolean\" },\n    //     data: {\n    //       title: \"The array containing the 'about us' elements\",\n    //       type: \"array\",\n    //       items: {\n    //         type: \"object\",\n    //         properties: {\n    //           title: { type: \"string\", title: \"Titlos\" },\n    //           sub_title: { type: \"string\" },\n    //           description: { type: \"string\" },\n    //           image: { type: \"string\", format: \"image\" }\n    //         },\n    //         additionalProperties: false,\n    //         required: [\"title\", \"image\"]\n    //       },\n    //       minItems: 1\n    //     }\n    //   },\n    //   additionalProperties: false\n    // };\n  })\n  .directive(\"jsonSchemaParent\", function($compile) {\n    return {\n      restrict: \"E\",\n      scope: { schema: \"=\", data: \"=\" },\n      template: \"<form></form>\",\n      controller: function($scope, $element, $attrs) {\n        var schema = $scope.schema;\n\n        function ifObject(schema, key) {\n          $scope.data = {};\n          $scope.newSchema = schema.properties;\n          return $compile(\n            `\n            <json-schema-object schema='newSchema' data='data'></json-schema-object>\n            `\n          )($scope);\n        }\n\n        function ifArray(schema, key) {\n          $scope.data = [];\n          $scope.newSchema = schema.items;\n          return $compile(\n            `\n            <json-schema-array schema='newSchema' data='data'></json-schema-array>\n            `\n          )($scope);\n        }\n\n        function ifBoolean(schema, key) {\n          console.log(schema);\n          $scope.data = false;\n          $scope.newSchema = schema;\n          return $compile(`<json-schema-checkbox schema='newSchema' data='data'></json-schema-checkbox>`)($scope);\n        }\n        function ifString(schema, key) {\n          console.log(schema, key);\n          $scope.data[key] = \"\";\n          return $compile(\n            `<json-schema-text id='${Math.random()}' name='${key}' data='data.${key}'></json-schema-text>`\n          )($scope);\n        }\n        function ifNumber(schema) {\n          return Number();\n        }\n\n        function handleSchema(schema, key) {\n          switch (schema.type) {\n            case \"object\":\n              return ifObject(schema, key);\n            case \"boolean\":\n              return ifBoolean(schema, key);\n            case \"array\":\n              return ifArray(schema, key);\n            case \"string\":\n              return ifString(schema, key);\n            case \"number\":\n              return ifNumber(schema, key);\n            default:\n              break;\n          }\n        }\n        let el = handleSchema(schema);\n        console.log(\"final\", el);\n        $element.find(\"form\").append(el);\n        // for (let key in el) {\n        //   $element.find(\"form\").append(el[key]);\n        // }\n\n        console.log($scope.data);\n        // for (let key in schema.properties) {\n        //   var el = $compile(\n        //     '<json-schema-text inp=\"result.' + key + '\" ></json-schema-text>'\n        //   )($scope);\n\n        //   $element.find(\"form\").append(el);\n        // }\n      }\n    };\n  })\n  .directive(\"jsonSchemaObject\", function($compile) {\n    return {\n      restrict: \"E\",\n      scope: { data: \"=\", name: \"@\", id: \"@\", schema: \"=\" },\n      template: ``,\n      controller: function($scope, $element, $attrs) {\n        console.log(\"jsonSchemaObject\", $scope.schema);\n        let schema = $scope.schema;\n        for (let key in schema) {\n          $element.append(handleSchema(schema[key], key));\n        }\n\n        function ifObject(schema, key) {\n          $scope.data[key] = {};\n          $scope.newSchema = schema.properties;\n          return $compile(\n            `\n              <json-schema-object schema='newSchema' data='data.${key}' ></json-schema-object>\n              `\n          )($scope);\n        }\n        function ifString(schema, key) {\n          $scope.newSchema = schema;\n          return $compile(`<json-schema-text schema='newSchema' data='data.${key}'></json-schema-text>`)($scope);\n        }\n        function ifBoolean(schema, key) {\n          $scope.newSchema2 = schema;\n          return $compile(`<json-schema-checkbox schema='newSchema2' data='data.${key}'></json-schema-checkbox>`)(\n            $scope\n          );\n        }\n        function handleSchema(schema, key) {\n          switch (schema.type) {\n            case \"object\":\n              return ifObject(schema, key);\n            case \"boolean\":\n              return ifBoolean(schema, key);\n            case \"array\":\n              return ifArray(schema, key);\n            case \"string\":\n              return ifString(schema, key);\n            case \"number\":\n              return ifNumber(schema, key);\n            default:\n              break;\n          }\n        }\n      }\n    };\n  })\n  .directive(\"jsonSchemaArray\", function($compile) {\n    return {\n      restrict: \"E\",\n      scope: { data: \"=\", name: \"@\", id: \"@\", schema: \"=\" },\n      template: `\n        <button ng-click=\"addNew()\">ADD</button>\n      `,\n      controller: function($scope, $element, $attrs) {\n        console.log(\"jsonSchemaArray\", $scope);\n        let schema = $scope.schema;\n        $element.append(handleSchema(schema));\n\n        function ifObject(schema, key) {\n          $scope.addNew = function() {\n            $scope.data.push({});\n          };\n          $scope.newSchema = schema.properties;\n          return $compile(\n            `\n              <json-schema-object \n              ng-repeat=\"item in data track by $index\"\n              schema='newSchema' data='item' ></json-schema-object>\n              `\n          )($scope);\n        }\n        function ifString(schema, key) {\n          $scope.addNew = function() {\n            $scope.data.push(\"\");\n          };\n          $scope.newSchema = schema;\n          return $compile(\n            `<json-schema-text \n            ng-repeat=\"item in data track by $index\"\n            schema='newSchema' data='data[$index]'></json-schema-text>`\n          )($scope);\n        }\n        function ifBoolean(schema, key) {\n          $scope.addNew = function() {\n            $scope.data.push(false);\n          };\n          $scope.newSchema = schema;\n\n          return $compile(\n            `<json-schema-checkbox \n                ng-repeat=\"item in data track by $index\"\n                schema='newSchema' data='data[$index]'></json-schema-checkbox>`\n          )($scope);\n        }\n        function handleSchema(schema, key) {\n          switch (schema.type) {\n            case \"object\":\n              return ifObject(schema, key);\n            case \"boolean\":\n              return ifBoolean(schema, key);\n            case \"array\":\n              return ifArray(schema, key);\n            case \"string\":\n              return ifString(schema, key);\n            case \"number\":\n              return ifNumber(schema, key);\n            default:\n              break;\n          }\n        }\n      }\n    };\n  })\n  .directive(\"jsonSchemaText\", function($compile) {\n    return {\n      restrict: \"E\",\n      scope: { data: \"=\", schema: \"=\" },\n      template: `\n      <div>\n        <label title=\"{{schema.description}}\" for=\"{{schema.title}}\">{{schema.title}}</label>\n        <input id=\"{{schema.title}}\" ng-model='data' type='text'>\n      </div>\n      `\n    };\n  })\n  .directive(\"jsonSchemaCheckbox\", function($compile) {\n    return {\n      restrict: \"E\",\n      scope: { data: \"=\", schema: \"=\" },\n      template: `\n      <div>\n        <label title=\"{{schema.description}}\" for=\"{{schema.title}}\">{{schema.title}}</label>\n        <input id=\"{{schema.title}}\" ng-model='data' type='checkbox'>\n      </div>\n      `\n    };\n  });\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });