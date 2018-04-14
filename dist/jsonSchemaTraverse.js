(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else if(typeof exports === 'object')
		exports["jsonSchemaTraverse"] = factory(require("angular"));
	else
		root["jsonSchemaTraverse"] = factory(root["angular"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_angular__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/style.css":
/*!*************************************************!*\
  !*** ./node_modules/css-loader!./src/style.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"json-schema-root,\\njson-schema-text,\\njson-schema-checkbox,\\njson-schema-array,\\njson-schema-object {\\n  display: block;\\n}\\njson-schema-object > json-schema-object {\\n  margin-left: 1em;\\n}\\n\\njson-schema-array,\\njson-schema-object {\\n  padding-bottom: 0.5em;\\n  padding-left: 0.5em;\\n  border-left: 1px solid;\\n  border-bottom: 1px solid;\\n}\\ninput.ng-invalid.ng-dirty {\\n  border: 1px solid red;\\n  box-shadow: 0 0 8px 0px red;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack://jsonSchemaTraverse/./src/style.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack://jsonSchemaTraverse/./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/shortid/index.js":
/*!***************************************!*\
  !*** ./node_modules/shortid/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = __webpack_require__(/*! ./lib/index */ \"./node_modules/shortid/lib/index.js\");\n\n\n//# sourceURL=webpack://jsonSchemaTraverse/./node_modules/shortid/index.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/alphabet.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/alphabet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar randomFromSeed = __webpack_require__(/*! ./random/random-from-seed */ \"./node_modules/shortid/lib/random/random-from-seed.js\");\n\nvar ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';\nvar alphabet;\nvar previousSeed;\n\nvar shuffled;\n\nfunction reset() {\n    shuffled = false;\n}\n\nfunction setCharacters(_alphabet_) {\n    if (!_alphabet_) {\n        if (alphabet !== ORIGINAL) {\n            alphabet = ORIGINAL;\n            reset();\n        }\n        return;\n    }\n\n    if (_alphabet_ === alphabet) {\n        return;\n    }\n\n    if (_alphabet_.length !== ORIGINAL.length) {\n        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);\n    }\n\n    var unique = _alphabet_.split('').filter(function(item, ind, arr){\n       return ind !== arr.lastIndexOf(item);\n    });\n\n    if (unique.length) {\n        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));\n    }\n\n    alphabet = _alphabet_;\n    reset();\n}\n\nfunction characters(_alphabet_) {\n    setCharacters(_alphabet_);\n    return alphabet;\n}\n\nfunction setSeed(seed) {\n    randomFromSeed.seed(seed);\n    if (previousSeed !== seed) {\n        reset();\n        previousSeed = seed;\n    }\n}\n\nfunction shuffle() {\n    if (!alphabet) {\n        setCharacters(ORIGINAL);\n    }\n\n    var sourceArray = alphabet.split('');\n    var targetArray = [];\n    var r = randomFromSeed.nextValue();\n    var characterIndex;\n\n    while (sourceArray.length > 0) {\n        r = randomFromSeed.nextValue();\n        characterIndex = Math.floor(r * sourceArray.length);\n        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);\n    }\n    return targetArray.join('');\n}\n\nfunction getShuffled() {\n    if (shuffled) {\n        return shuffled;\n    }\n    shuffled = shuffle();\n    return shuffled;\n}\n\n/**\n * lookup shuffled letter\n * @param index\n * @returns {string}\n */\nfunction lookup(index) {\n    var alphabetShuffled = getShuffled();\n    return alphabetShuffled[index];\n}\n\nmodule.exports = {\n    characters: characters,\n    seed: setSeed,\n    lookup: lookup,\n    shuffled: getShuffled\n};\n\n\n//# sourceURL=webpack://jsonSchemaTraverse/./node_modules/shortid/lib/alphabet.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/build.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/build.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar encode = __webpack_require__(/*! ./encode */ \"./node_modules/shortid/lib/encode.js\");\nvar alphabet = __webpack_require__(/*! ./alphabet */ \"./node_modules/shortid/lib/alphabet.js\");\n\n// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.\n// This number should be updated every year or so to keep the generated id short.\n// To regenerate `new Date() - 0` and bump the version. Always bump the version!\nvar REDUCE_TIME = 1459707606518;\n\n// don't change unless we change the algos or REDUCE_TIME\n// must be an integer and less than 16\nvar version = 6;\n\n// Counter is used when shortid is called multiple times in one second.\nvar counter;\n\n// Remember the last time shortid was called in case counter is needed.\nvar previousSeconds;\n\n/**\n * Generate unique id\n * Returns string id\n */\nfunction build(clusterWorkerId) {\n\n    var str = '';\n\n    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);\n\n    if (seconds === previousSeconds) {\n        counter++;\n    } else {\n        counter = 0;\n        previousSeconds = seconds;\n    }\n\n    str = str + encode(alphabet.lookup, version);\n    str = str + encode(alphabet.lookup, clusterWorkerId);\n    if (counter > 0) {\n        str = str + encode(alphabet.lookup, counter);\n    }\n    str = str + encode(alphabet.lookup, seconds);\n\n    return str;\n}\n\nmodule.exports = build;\n\n\n//# sourceURL=webpack://jsonSchemaTraverse/./node_modules/shortid/lib/build.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/decode.js":
/*!********************************************!*\
  !*** ./node_modules/shortid/lib/decode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar alphabet = __webpack_require__(/*! ./alphabet */ \"./node_modules/shortid/lib/alphabet.js\");\n\n/**\n * Decode the id to get the version and worker\n * Mainly for debugging and testing.\n * @param id - the shortid-generated id.\n */\nfunction decode(id) {\n    var characters = alphabet.shuffled();\n    return {\n        version: characters.indexOf(id.substr(0, 1)) & 0x0f,\n        worker: characters.indexOf(id.substr(1, 1)) & 0x0f\n    };\n}\n\nmodule.exports = decode;\n\n\n//# sourceURL=webpack://jsonSchemaTraverse/./node_modules/shortid/lib/decode.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/encode.js":
/*!********************************************!*\
  !*** ./node_modules/shortid/lib/encode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar randomByte = __webpack_require__(/*! ./random/random-byte */ \"./node_modules/shortid/lib/random/random-byte-browser.js\");\n\nfunction encode(lookup, number) {\n    var loopCounter = 0;\n    var done;\n\n    var str = '';\n\n    while (!done) {\n        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );\n        done = number < (Math.pow(16, loopCounter + 1 ) );\n        loopCounter++;\n    }\n    return str;\n}\n\nmodule.exports = encode;\n\n\n//# sourceURL=webpack://jsonSchemaTraverse/./node_modules/shortid/lib/encode.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar alphabet = __webpack_require__(/*! ./alphabet */ \"./node_modules/shortid/lib/alphabet.js\");\nvar encode = __webpack_require__(/*! ./encode */ \"./node_modules/shortid/lib/encode.js\");\nvar decode = __webpack_require__(/*! ./decode */ \"./node_modules/shortid/lib/decode.js\");\nvar build = __webpack_require__(/*! ./build */ \"./node_modules/shortid/lib/build.js\");\nvar isValid = __webpack_require__(/*! ./is-valid */ \"./node_modules/shortid/lib/is-valid.js\");\n\n// if you are using cluster or multiple servers use this to make each instance\n// has a unique value for worker\n// Note: I don't know if this is automatically set when using third\n// party cluster solutions such as pm2.\nvar clusterWorkerId = __webpack_require__(/*! ./util/cluster-worker-id */ \"./node_modules/shortid/lib/util/cluster-worker-id-browser.js\") || 0;\n\n/**\n * Set the seed.\n * Highly recommended if you don't want people to try to figure out your id schema.\n * exposed as shortid.seed(int)\n * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.\n */\nfunction seed(seedValue) {\n    alphabet.seed(seedValue);\n    return module.exports;\n}\n\n/**\n * Set the cluster worker or machine id\n * exposed as shortid.worker(int)\n * @param workerId worker must be positive integer.  Number less than 16 is recommended.\n * returns shortid module so it can be chained.\n */\nfunction worker(workerId) {\n    clusterWorkerId = workerId;\n    return module.exports;\n}\n\n/**\n *\n * sets new characters to use in the alphabet\n * returns the shuffled alphabet\n */\nfunction characters(newCharacters) {\n    if (newCharacters !== undefined) {\n        alphabet.characters(newCharacters);\n    }\n\n    return alphabet.shuffled();\n}\n\n/**\n * Generate unique id\n * Returns string id\n */\nfunction generate() {\n  return build(clusterWorkerId);\n}\n\n// Export all other functions as properties of the generate function\nmodule.exports = generate;\nmodule.exports.generate = generate;\nmodule.exports.seed = seed;\nmodule.exports.worker = worker;\nmodule.exports.characters = characters;\nmodule.exports.decode = decode;\nmodule.exports.isValid = isValid;\n\n\n//# sourceURL=webpack://jsonSchemaTraverse/./node_modules/shortid/lib/index.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/is-valid.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/is-valid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar alphabet = __webpack_require__(/*! ./alphabet */ \"./node_modules/shortid/lib/alphabet.js\");\n\nfunction isShortId(id) {\n    if (!id || typeof id !== 'string' || id.length < 6 ) {\n        return false;\n    }\n\n    var characters = alphabet.characters();\n    var len = id.length;\n    for(var i = 0; i < len;i++) {\n        if (characters.indexOf(id[i]) === -1) {\n            return false;\n        }\n    }\n    return true;\n}\n\nmodule.exports = isShortId;\n\n\n//# sourceURL=webpack://jsonSchemaTraverse/./node_modules/shortid/lib/is-valid.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/random/random-byte-browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-byte-browser.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto\n\nfunction randomByte() {\n    if (!crypto || !crypto.getRandomValues) {\n        return Math.floor(Math.random() * 256) & 0x30;\n    }\n    var dest = new Uint8Array(1);\n    crypto.getRandomValues(dest);\n    return dest[0] & 0x30;\n}\n\nmodule.exports = randomByte;\n\n\n//# sourceURL=webpack://jsonSchemaTraverse/./node_modules/shortid/lib/random/random-byte-browser.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/random/random-from-seed.js":
/*!*************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-from-seed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Found this seed-based random generator somewhere\n// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)\n\nvar seed = 1;\n\n/**\n * return a random number based on a seed\n * @param seed\n * @returns {number}\n */\nfunction getNextValue() {\n    seed = (seed * 9301 + 49297) % 233280;\n    return seed/(233280.0);\n}\n\nfunction setSeed(_seed_) {\n    seed = _seed_;\n}\n\nmodule.exports = {\n    nextValue: getNextValue,\n    seed: setSeed\n};\n\n\n//# sourceURL=webpack://jsonSchemaTraverse/./node_modules/shortid/lib/random/random-from-seed.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js":
/*!********************************************************************!*\
  !*** ./node_modules/shortid/lib/util/cluster-worker-id-browser.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = 0;\n\n\n//# sourceURL=webpack://jsonSchemaTraverse/./node_modules/shortid/lib/util/cluster-worker-id-browser.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\toptions.attrs.type = \"text/css\";\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\toptions.attrs.type = \"text/css\";\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack://jsonSchemaTraverse/./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack://jsonSchemaTraverse/./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/directives/jsonSchemaArray.js":
/*!*******************************************!*\
  !*** ./src/directives/jsonSchemaArray.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/shortid */ \"./src/utils/shortid.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function($compile) {\n  return {\n    restrict: \"E\",\n    scope: { data: \"=\", schema: \"=\" },\n    template: `\n      <h5>{{schema.title}}</h5>\n      <button type=\"button\" ng-click=\"addNew()\">ADD</button>\n      `,\n    controller: function($scope, $element, $attrs) {\n      /* Start helper functions */\n\n      const initializeArray = () => {\n        if (!$scope.data.length && $scope.schema.minItems) {\n          for (let i = 0; i < $scope.schema.minItems; i++) {\n            $scope.addNew();\n          }\n        }\n      };\n\n      const ifObject = (schema, key) => {\n        let newSchema = Object(_utils_shortid__WEBPACK_IMPORTED_MODULE_0__[\"generateID\"])();\n        $scope.addNew = () => $scope.data.push({});\n        $scope[newSchema] = schema;\n        return $compile(`\n          <json-schema-object \n          ng-repeat=\"item in data track by $index\"\n          schema='${newSchema}' data='item'>\n            <button type=\"button\" ng-click=\"data.splice($index,1)\">X</button>\n          </json-schema-object>`)($scope);\n      };\n\n      const ifArray = (schema, key) => {\n        let newSchema = Object(_utils_shortid__WEBPACK_IMPORTED_MODULE_0__[\"generateID\"])();\n        $scope.addNew = () => $scope.data.push([]);\n        $scope[newSchema] = schema.items;\n        return $compile(`\n          <json-schema-array \n          ng-repeat=\"item in data track by $index\"\n          schema='${newSchema}' data='item'>\n            <button type=\"button\" ng-click=\"data.splice($index,1)\">X</button>\n          </json-schema-array>`)($scope);\n      };\n\n      const ifBoolean = (schema, key) => {\n        let newSchema = Object(_utils_shortid__WEBPACK_IMPORTED_MODULE_0__[\"generateID\"])();\n        $scope.addNew = () => $scope.data.push(false);\n        $scope[newSchema] = schema;\n        return $compile(`\n          <json-schema-checkbox \n          ng-repeat=\"item in data track by $index\"\n          schema='${newSchema}' data='data[$index]'>\n            <button type=\"button\" ng-click=\"data.splice($index,1)\">X</button>\n          </json-schema-checkbox>`)($scope);\n      };\n\n      const ifString = (schema, key) => {\n        let newSchema = Object(_utils_shortid__WEBPACK_IMPORTED_MODULE_0__[\"generateID\"])();\n        $scope.addNew = () => $scope.data.push(\"\");\n        $scope[newSchema] = schema;\n        return $compile(`\n          <json-schema-text \n          ng-repeat=\"item in data track by $index\"\n          schema='${newSchema}' data='data[$index]'>\n            <button type=\"button\" ng-click=\"data.splice($index,1)\">X</button>\n          </json-schema-text>`)($scope);\n      };\n\n      const ifNumber = (schema, key) => {\n        let newSchema = Object(_utils_shortid__WEBPACK_IMPORTED_MODULE_0__[\"generateID\"])();\n        $scope.addNew = () => $scope.data.push(0);\n        $scope[newSchema] = schema;\n        return $compile(\n          `<json-schema-number \n          ng-repeat=\"item in data track by $index\"\n          schema='${newSchema}' data='data[$index]'>\n            <button type=\"button\" ng-click=\"data.splice($index,1)\">X</button>\n          </json-schema-number>`\n        )($scope);\n      };\n\n      const handleSchema = (schema, key) => {\n        switch (schema.type) {\n          case \"object\":\n            return ifObject(schema, key);\n          case \"boolean\":\n            return ifBoolean(schema, key);\n          case \"array\":\n            return ifArray(schema, key);\n          case \"string\":\n            return ifString(schema, key);\n          case \"number\":\n            return ifNumber(schema, key);\n          default:\n            break;\n        }\n      };\n      /* End helper functions */\n\n      let schema = $scope.schema.items;\n      $element.append(handleSchema(schema));\n      initializeArray();\n    }\n  };\n});\n\n\n//# sourceURL=webpack://jsonSchemaTraverse/./src/directives/jsonSchemaArray.js?");

/***/ }),

/***/ "./src/directives/jsonSchemaCheckbox.js":
/*!**********************************************!*\
  !*** ./src/directives/jsonSchemaCheckbox.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/shortid */ \"./src/utils/shortid.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function($compile) {\n  return {\n    restrict: \"E\",\n    scope: { data: \"=\", schema: \"=\" },\n    template: `\n      <div>\n        <label title=\"{{schema.description}}\" for=\"{{uniqueID}}\">{{schema.title}}</label>\n        <input id=\"{{uniqueID}}\" ng-model='data' type='checkbox'>\n      </div>`,\n    controller: function($scope) {\n      $scope.uniqueID = Object(_utils_shortid__WEBPACK_IMPORTED_MODULE_0__[\"generateID\"])();\n    }\n  };\n});\n\n\n//# sourceURL=webpack://jsonSchemaTraverse/./src/directives/jsonSchemaCheckbox.js?");

/***/ }),

/***/ "./src/directives/jsonSchemaNumber.js":
/*!********************************************!*\
  !*** ./src/directives/jsonSchemaNumber.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/shortid */ \"./src/utils/shortid.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function($compile) {\n  return {\n    restrict: \"E\",\n    scope: { data: \"=\", schema: \"=\" },\n    transclude: true,\n    template: `\n      <div>\n        <label title=\"{{schema.description}}\" for=\"{{uniqueID}}\">{{schema.title}}</label>\n        <input id=\"{{uniqueID}}\" ng-model='data' type='number' \n        ng-required=\"schema.required\"\n        ng-min=\"schema.minLength\"\n        ng-max=\"schema.maxLength\"\n        >\n        <ng-transclude></ng-transclude>\n      </div>\n      `,\n    controller: function($scope) {\n      $scope.uniqueID = Object(_utils_shortid__WEBPACK_IMPORTED_MODULE_0__[\"generateID\"])();\n    }\n  };\n});\n\n\n//# sourceURL=webpack://jsonSchemaTraverse/./src/directives/jsonSchemaNumber.js?");

/***/ }),

/***/ "./src/directives/jsonSchemaObject.js":
/*!********************************************!*\
  !*** ./src/directives/jsonSchemaObject.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/shortid */ \"./src/utils/shortid.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function($compile) {\n  return {\n    restrict: \"E\",\n    scope: { data: \"=\", schema: \"=\" },\n    transclude: true,\n    template: `\n      <ng-transclude></ng-transclude>\n      <h3>{{schema.title}}</h3>\n    `,\n    controller: function($scope, $element, $attrs) {\n      /* Start helper functions */\n      const ifObject = (schema, key) => {\n        let newSchema = Object(_utils_shortid__WEBPACK_IMPORTED_MODULE_0__[\"generateID\"])();\n        $scope.data[key] = $scope.data[key] || {};\n        $scope[newSchema] = schema;\n        return $compile(`<json-schema-object schema='${newSchema}' data='data.${key}'></json-schema-object>`)($scope);\n      };\n\n      const ifArray = (schema, key) => {\n        let newSchema = Object(_utils_shortid__WEBPACK_IMPORTED_MODULE_0__[\"generateID\"])();\n        $scope.data[key] = $scope.data[key] || [];\n        $scope[newSchema] = schema;\n        return $compile(`<json-schema-array schema='${newSchema}' data='data.${key}'></json-schema-array>`)($scope);\n      };\n\n      const ifBoolean = (schema, key) => {\n        let newSchema = Object(_utils_shortid__WEBPACK_IMPORTED_MODULE_0__[\"generateID\"])();\n        $scope.data[key] = $scope.data[key] || false;\n        $scope[newSchema] = schema;\n        $scope[newSchema].required = $scope.schema.required && $scope.schema.required.includes(key);\n\n        return $compile(`<json-schema-checkbox schema='${newSchema}' data='data.${key}'></json-schema-checkbox>`)(\n          $scope\n        );\n      };\n\n      const ifString = (schema, key) => {\n        let newSchema = Object(_utils_shortid__WEBPACK_IMPORTED_MODULE_0__[\"generateID\"])();\n        $scope.data[key] = $scope.data[key] || \"\";\n        $scope[newSchema] = schema;\n        $scope[newSchema].required = $scope.schema.required && $scope.schema.required.includes(key);\n\n        return $compile(`<json-schema-text schema='${newSchema}' data='data.${key}'></json-schema-text>`)($scope);\n      };\n\n      const ifNumber = (schema, key) => {\n        let newSchema = Object(_utils_shortid__WEBPACK_IMPORTED_MODULE_0__[\"generateID\"])();\n        $scope.data[key] = $scope.data[key] || 0;\n        $scope[newSchema] = schema;\n        $scope[newSchema].required = $scope.schema.required && $scope.schema.required.includes(key);\n        return $compile(`<json-schema-number schema='${newSchema}' data='data.${key}'></json-schema-number>`)($scope);\n      };\n\n      const handleSchema = (schema, key) => {\n        switch (schema.type) {\n          case \"object\":\n            return ifObject(schema, key);\n          case \"boolean\":\n            return ifBoolean(schema, key);\n          case \"array\":\n            return ifArray(schema, key);\n          case \"string\":\n            return ifString(schema, key);\n          case \"number\":\n            return ifNumber(schema, key);\n          default:\n            break;\n        }\n      };\n      /* End helper functions */\n\n      let schema = $scope.schema.properties;\n      for (let key in schema) {\n        $element.append(handleSchema(schema[key], key));\n      }\n    }\n  };\n});\n\n\n//# sourceURL=webpack://jsonSchemaTraverse/./src/directives/jsonSchemaObject.js?");

/***/ }),

/***/ "./src/directives/jsonSchemaRoot.js":
/*!******************************************!*\
  !*** ./src/directives/jsonSchemaRoot.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/shortid */ \"./src/utils/shortid.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function($compile) {\n  return {\n    restrict: \"E\",\n    scope: { schema: \"=\", data: \"=\" },\n    template: \"<form></form>\",\n    controller: function($scope, $element, $attrs) {\n      /* Start helper functions */\n      const ifObject = (schema, key) => {\n        let newSchema = Object(_utils_shortid__WEBPACK_IMPORTED_MODULE_0__[\"generateID\"])();\n        $scope.data = $scope.data || {};\n        $scope[newSchema] = schema;\n        return $compile(`<json-schema-object schema='${newSchema}' data='data'></json-schema-object>`)($scope);\n      };\n\n      const ifArray = (schema, key) => {\n        let newSchema = Object(_utils_shortid__WEBPACK_IMPORTED_MODULE_0__[\"generateID\"])();\n        $scope.data = $scope.data || [];\n        $scope[newSchema] = schema.items;\n        return $compile(`<json-schema-array schema='${newSchema}' data='data'></json-schema-array>`)($scope);\n      };\n\n      const ifBoolean = (schema, key) => {\n        let newSchema = Object(_utils_shortid__WEBPACK_IMPORTED_MODULE_0__[\"generateID\"])();\n        $scope.data = $scope.data || false;\n        $scope[newSchema] = schema;\n        return $compile(`<json-schema-checkbox schema='${newSchema}' data='data'></json-schema-checkbox>`)($scope);\n      };\n\n      const ifString = (schema, key) => {\n        let newSchema = Object(_utils_shortid__WEBPACK_IMPORTED_MODULE_0__[\"generateID\"])();\n        $scope.data = $scope.data || \"\";\n        $scope[newSchema] = schema;\n        return $compile(`<json-schema-text schema='${newSchema}' data='data'></json-schema-text>`)($scope);\n      };\n\n      const ifNumber = (schema, key) => {\n        let newSchema = Object(_utils_shortid__WEBPACK_IMPORTED_MODULE_0__[\"generateID\"])();\n        $scope.data = $scope.data || 0;\n        $scope[newSchema] = schema;\n        return $compile(`<json-schema-number schema='${newSchema}' data='data'></json-schema-number>`)($scope);\n      };\n\n      const handleSchema = (schema, key) => {\n        switch (schema.type) {\n          case \"object\":\n            return ifObject(schema, key);\n          case \"boolean\":\n            return ifBoolean(schema, key);\n          case \"array\":\n            return ifArray(schema, key);\n          case \"string\":\n            return ifString(schema, key);\n          case \"number\":\n            return ifNumber(schema, key);\n          default:\n            break;\n        }\n      };\n      /* End helper functions */\n\n      let schema = $scope.schema;\n      $element.find(\"form\").append(handleSchema(schema));\n    }\n  };\n});\n\n\n//# sourceURL=webpack://jsonSchemaTraverse/./src/directives/jsonSchemaRoot.js?");

/***/ }),

/***/ "./src/directives/jsonSchemaText.js":
/*!******************************************!*\
  !*** ./src/directives/jsonSchemaText.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/shortid */ \"./src/utils/shortid.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function($compile) {\n  return {\n    restrict: \"E\",\n    scope: { data: \"=\", schema: \"=\" },\n    transclude: true,\n    template: `\n      <div>\n        <label title=\"{{schema.description}}\" for=\"{{uniqueID}}\">{{schema.title}}</label>\n        <input id=\"{{uniqueID}}\" ng-model='data' type='text' \n        ng-required=\"schema.required\"\n        ng-minlength=\"schema.minLength\"\n        ng-maxlength=\"schema.maxLength\"\n        ng-pattern=\"schema.pattern\"\n        >\n        <ng-transclude></ng-transclude>\n      </div>\n      `,\n    controller: function($scope) {\n      $scope.uniqueID = Object(_utils_shortid__WEBPACK_IMPORTED_MODULE_0__[\"generateID\"])();\n    }\n  };\n});\n\n\n//# sourceURL=webpack://jsonSchemaTraverse/./src/directives/jsonSchemaText.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _directives_jsonSchemaRoot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/jsonSchemaRoot */ \"./src/directives/jsonSchemaRoot.js\");\n/* harmony import */ var _directives_jsonSchemaObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/jsonSchemaObject */ \"./src/directives/jsonSchemaObject.js\");\n/* harmony import */ var _directives_jsonSchemaArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/jsonSchemaArray */ \"./src/directives/jsonSchemaArray.js\");\n/* harmony import */ var _directives_jsonSchemaText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/jsonSchemaText */ \"./src/directives/jsonSchemaText.js\");\n/* harmony import */ var _directives_jsonSchemaCheckbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/jsonSchemaCheckbox */ \"./src/directives/jsonSchemaCheckbox.js\");\n/* harmony import */ var _directives_jsonSchemaNumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/jsonSchemaNumber */ \"./src/directives/jsonSchemaNumber.js\");\nconst angular = __webpack_require__(/*! angular */ \"angular\");\n\n\n\n\n\n\n\n\n\n\nangular\n  .module(\"jsonSchemaTraverse\", [])\n  .directive(\"jsonSchemaRoot\", _directives_jsonSchemaRoot__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n  .directive(\"jsonSchemaObject\", _directives_jsonSchemaObject__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n  .directive(\"jsonSchemaArray\", _directives_jsonSchemaArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n  .directive(\"jsonSchemaText\", _directives_jsonSchemaText__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n  .directive(\"jsonSchemaCheckbox\", _directives_jsonSchemaCheckbox__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\n  .directive(\"jsonSchemaNumber\", _directives_jsonSchemaNumber__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n\n// .controller(\"mycontroller\", function($scope) {\n//   $scope.about_us;\n\n//   // $scope.schema = {\n//   //   type: \"boolean\",\n//   //   title: \"Na einai mple?\",\n//   //   description: \"Ta kanei ola mple\"\n//   // };\n//   // $scope.schema = {\n//   //   type: \"object\",\n//   //   title: \"Settings for original\",\n//   //   properties: {\n//   //     active: { type: \"boolean\", title: \"Active?\" },\n//   //     aou: { type: \"string\", title: \"Type your aou\" },\n//   //     lol: {\n//   //       type: \"object\",\n//   //       title: \"Settings for lol\",\n//   //       properties: {\n//   //         active2: { type: \"boolean\", title: \"Active2?\" },\n//   //         names: {\n//   //           type: \"array\",\n//   //           title: \"The names array\",\n//   //           items: {\n//   //             type: \"string\",\n//   //             title: \"Give me a name\"\n//   //           }\n//   //         },\n//   //         lol2: {\n//   //           title: \"Settings for lol2\",\n//   //           type: \"object\",\n//   //           properties: {\n//   //             active3: { type: \"boolean\", title: \"Active3?\" }\n//   //           }\n//   //         }\n//   //       }\n//   //     }\n//   //   }\n//   // };\n//   $scope.schema = {\n//     $id: \"about_us/component_1\",\n//     type: \"object\",\n//     title: \"About us configuration\",\n//     properties: {\n//       active: { type: \"boolean\", title: \"Active?\" },\n//       data: {\n//         title: \"The array containing the 'about us' elements\",\n//         type: \"array\",\n//         items: {\n//           type: \"object\",\n//           // title: \"An item containing configuration for this 'about us' element\",\n//           properties: {\n//             title: { type: \"string\", title: \"Titlos\", minLength: 4 },\n//             sub_title: { type: \"string\", title: \"Ypotitlos\" },\n//             description: { type: \"string\", title: \"Perigrafi\" },\n//             count: { type: \"number\", title: \"count\" },\n//             image: { type: \"string\", format: \"image\", title: \"Eikona\" }\n//           },\n//           additionalProperties: false,\n//           required: [\"title\", \"image\"]\n//         },\n//         minItems: 1\n//       },\n//       required: [\"active\", \"data\"]\n//     },\n//     additionalProperties: false\n//   };\n// });\n\n\n//# sourceURL=webpack://jsonSchemaTraverse/./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader!./style.css */ \"./node_modules/css-loader/index.js!./src/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack://jsonSchemaTraverse/./src/style.css?");

/***/ }),

/***/ "./src/utils/shortid.js":
/*!******************************!*\
  !*** ./src/utils/shortid.js ***!
  \******************************/
/*! exports provided: generateID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateID\", function() { return generateID; });\nconst shortid = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\nshortid.characters(\"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$\");\nconst generateID = shortid.generate;\n\n\n//# sourceURL=webpack://jsonSchemaTraverse/./src/utils/shortid.js?");

/***/ }),

/***/ "angular":
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_angular__;\n\n//# sourceURL=webpack://jsonSchemaTraverse/external_%22angular%22?");

/***/ })

/******/ });
});