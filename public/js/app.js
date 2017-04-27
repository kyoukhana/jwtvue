/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		6: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunks[chunkId][2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".app.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "http://www.kevinyoukhana.com/js/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(7);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof document.createElement === 'function'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(35);

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(3);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(3);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(55)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(27);
var buildURL = __webpack_require__(30);
var parseHeaders = __webpack_require__(36);
var isURLSameOrigin = __webpack_require__(34);
var createError = __webpack_require__(6);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(29);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("production" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(32);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(26);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vue = __webpack_require__(53);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(52);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _vueAuth = __webpack_require__(16);

var _vueAuth2 = _interopRequireDefault(_vueAuth);

var _app = __webpack_require__(46);

var _app2 = _interopRequireDefault(_app);

var _materialDesignLite = __webpack_require__(44);

var _materialDesignLite2 = _interopRequireDefault(_materialDesignLite);

var _vueMdl = __webpack_require__(50);

var _vueMdl2 = _interopRequireDefault(_vueMdl);

var _axios = __webpack_require__(20);

var _axios2 = _interopRequireDefault(_axios);

var _vueAxios = __webpack_require__(45);

var _vueAxios2 = _interopRequireDefault(_vueAxios);

var _vueResource = __webpack_require__(51);

var _vueResource2 = _interopRequireDefault(_vueResource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);
_vue2.default.use(_vueMdl2.default);
_vue2.default.use(_vueAxios2.default, _axios2.default);
_vue2.default.use(_vueResource2.default);

var router = new _vueRouter2.default({
    hashbang: false,
    linkActiveClass: 'active',
    mode: 'history',
    routes: [{ path: '/', component: function component(resolve) {
            __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(62)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        } }, { path: '/403', component: function component(resolve) {
            __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(11)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        } }, { path: '/404', component: function component(resolve) {
            __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(11)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        } }, { path: '/dashboard', component: function component(resolve) {
            __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(58)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        children: [{ path: '', meta: { auth: ['admin'] }, component: function component(resolve) {
                __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(59)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
            } }, { path: 'login', component: function component(resolve) {
                __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(60)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
            },
            children: [{ path: '', component: function component(resolve) {
                    __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(61)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
                } }]
        }]
    }]
});

/*Set VUE ROUTER */
_vue2.default.router = router;

//Vue.axios.defaults.baseURL = domainUrl;
//Vue.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('content');
_vue2.default.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('content');
_vue2.default.http.options.root = "";

_vue2.default.use(_vueAuth2.default, {
    authRedirect: '/',
    auth: __webpack_require__(12),
    http: __webpack_require__(13),
    router: __webpack_require__(14),
    token: [{ request: 'token', response: 'token', authType: 'bearer', foundIn: 'header' }],
    tokenName: 'token',
    loginData: { url: '/api/auth', method: 'POST', redirect: 'dashboard' },
    logoutData: { url: '/api/logout', method: 'POST', redirect: 'login', makeRequest: false },
    fetchData: { url: '/api/account', method: 'GET', enabled: true },
    rolesVar: 'role',
    refreshData: { enabled: false }
});

var app = new _vue2.default(_extends({
    router: router
}, _app2.default));

app.$mount('#app');

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(49)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

module.exports = {
    
    request: function (req, token) {
        this.options.http._setHeaders.call(this, req, {Authorization: 'Bearer ' + token});
    },
    
    response: function (res) {
        var headers = this.options.http._getHeaders.call(this, res),
            token = headers.Authorization || headers.authorization;

        if (token) {
            token = token.split(/Bearer\:?\s?/i);
            
            return token[token.length > 1 ? 1 : 0].trim();
        }
    }
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {

    _init: function () {
        if ( ! this.options.Vue.http) {
            return 'vue-resource.1.x.js : Vue.http must be set.';
        }
    },
    
    _interceptor: function (req, res) {
        var _this = this;

        this.options.Vue.http.interceptors.push(function (request, next) {
            if (req) { req.call(_this, request); }
            
            next(function (response) {
                if (res) { res.call(_this, response); }
            });
        });
    },

    _invalidToken: function (res) {
        if (res.status === 401) {
            this.options.logoutProcess.call(this, res, {redirect: this.options.authRedirect});
        }
    },

    _httpData: function (res) {
        return res.data || {};
    },

    _http: function (data) {
        this.options.Vue.http(data).then(data.success, data.error);
    },

    _getHeaders: function (res) {
        var i,
            data = {},
            headers = res.headers.map;

        for (i in headers) {
            data[i] = headers[i][0];
        }

        return data;
    },

    _setHeaders: function (req, headers) {
        var i;

        for (i in headers) {
            req.headers.set(i, headers[i]);
        }
    }
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {

    _init: function () {
        if ( ! this.options.Vue.router) {
            return 'vue-router.2.x.js : Vue.router must be set.';
        }
    },

    _bindData: function (data, ctx) {
        var error, success;

        data = data || {};

        error = data.error;
        success = data.success;

        data.query = ctx.$route.query || {};

        if (data.success) { data.success = function (res) { success.call(ctx, res); } }
        if (data.error) { data.error = function (res) { error.call(ctx, res); } }

        return data;
    },

    _beforeEach: function (routerBeforeEach, transitionEach) {
        var _this = this;

        this.options.Vue.router.beforeEach(function (transition, location, next) {
            routerBeforeEach.call(_this, function () {
                var auth;

                if (transition.to) {
                    auth = transition.to.auth;
                } else {
                    var authRoutes = transition.matched.filter(function (route) {
                        return route.meta.hasOwnProperty('auth');
                    });

                    // matches the nested route, the last one in the list
                    if (authRoutes.length) {
                        auth = authRoutes[authRoutes.length - 1].meta.auth;
                    }
                }

                transitionEach.call(_this, transition, auth, function (redirect) {
                    if (!redirect) {
                        (next || transition.next)();
                        return;
                    }

                    // router v2.x
                    if (next) {
                        next(redirect);
                    } else {
                        this.options.router._routerReplace.call(this, redirect);
                    }
                });
            });
        })
    },

    _routerReplace: function (data) {
        var router = this.options.Vue.router;

        router.replace.call(router, data);
    },

    _routerGo: function (data) {
        var router = this.options.Vue.router;

        (router.push || router.go).call(router, data);
    }

};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __utils  = __webpack_require__(19),
    __token  = __webpack_require__(18),
    __cookie = __webpack_require__(17)

module.exports = function () {

    // Private (used double underscore __).

    var __transitionPrev = null,
        __transitionThis = null,
        __transitionRedirecType = null;

    function __duckPunch(methodName, data) {
        var _this = this,
            success = data.success;

        data = __utils.extend(this.options[methodName + 'Data'], [data]);

        data.success = function (res) {
            data.success = success;

            _this.options[methodName + 'Process'].call(_this, res, data);
        };

        this.options.http._http.call(this, data);
    }

    function __bindContext(methodName, data) {
        var _auth = this.$auth;

        _auth.options[methodName + 'Perform'].call(_auth, _auth.options.router._bindData.call(_auth, data, this));
    }

    // Overrideable

    function _checkAuthenticated(cb) {
        if (this.watch.authenticated === null && __token.get.call(this)) {
            if ( ! __cookie.exists.call(this)) {
                this.options.logoutProcess.call(this, null, {});

                this.watch.loaded = true;

                return cb.call(this);
            }

            this.watch.authenticated = false;

            if (this.options.fetchData.enabled) {
                this.options.fetchPerform.call(this, {
                    success: cb,
                    error: cb,
                    enabled: true
                });
            }
        } else {
            this.watch.loaded = true;
            return cb.call(this);
        }
    }

    function _routerBeforeEach(cb) {
        var _this = this;

        if (this.watch.authenticated && !__token.get.call(this)) {
            this.options.logoutProcess.call(this, null, {});
        }

        if (this.options.refreshData.enabled && this.options.tokenExpired.call(this)) {
            this.options.refreshPerform.call(this, {
                success: function () {
                    this.options.checkAuthenticated.call(_this, cb);
                }
            });

            return;
        }

        _checkAuthenticated.call(this, cb);
    }

    function _transitionEach(transition, routeAuth, cb) {
        routeAuth = __utils.toArray(routeAuth);
        
        __transitionPrev = __transitionThis;
        __transitionThis = transition;
        
        if (routeAuth && (routeAuth === true || routeAuth.constructor === Array)) {
            if ( ! this.check()) {
                __transitionRedirecType = 401;
                cb.call(this, this.options.authRedirect);
            }
            else if (routeAuth.constructor === Array && ! __utils.compare(routeAuth, this.watch.data[this.options.rolesVar])) {
                __transitionRedirecType = 403;
                cb.call(this, this.options.forbiddenRedirect);
            }
            else {
                this.watch.redirect = __transitionRedirecType ? {type: __transitionRedirecType, from: __transitionPrev, to: __transitionThis} : null;
                __transitionRedirecType = null;

                return cb();
            }
        }
        else if (routeAuth === false && this.check()) {
            __transitionRedirecType = 404;
            cb.call(this, this.options.notFoundRedirect);
        }
        else {
            this.watch.redirect = __transitionRedirecType ? {type: __transitionRedirecType, from: __transitionPrev, to: __transitionThis} : null;
            __transitionRedirecType = null;

            return cb();
        }
    }

    function _requestIntercept(req) {
        var token = __token.get.call(this);

        if (token) {
            this.options.auth.request.call(this, req, token);
        }

        return req;
    }

    function _responseIntercept(res) {
        var token;

        if (this.watch.authenticated && this.options.http._invalidToken) {
            this.options.http._invalidToken.call(this, res);
        }

        token = this.options.auth.response.call(this, res);

        if (token) {
            __token.set.call(this, null, token);
        }
    }

    function _parseUserData(data) {
        return data.data || {};
    }

    function _parseOauthState(data) {
        return JSON.parse(decodeURIComponent(data));
    }

    function _check(role) {
        if (this.watch.authenticated === true) {
            if (role) {
                return __utils.compare(role, this.watch.data[this.options.rolesVar]);
            }

            return true;
        }

        return false;
    }

    function _tokenExpired () {
        return ! this.watch.loaded && __token.get.call(this);
    }

    function _cookieDomain () {
        return window.location.hostname;
    }

    function _getUrl () {
        var port = window.location.port

        return window.location.protocol + '//' + window.location.hostname + (port ? ':' + port : '')
    }

    function _fetchPerform(data) {
        var _this = this,
            error = data.error;

        data.error = function (res) {
            _this.watch.loaded = true;

            if (error) { error.call(_this, res); }
        };

        if (this.watch.authenticated !== true && !data.enabled) {
            _fetchProcess.call(this, {}, data);
        }
        else {
            __duckPunch.call(this, 'fetch', data);
        }
    }

    function _fetchProcess(res, data) {
        this.watch.authenticated = true;
        this.watch.data = this.options.parseUserData.call(this, this.options.http._httpData.call(this, res));
        
        this.watch.loaded = true;

        if (data.success) { data.success.call(this, res); }
    }

    function _refreshPerform(data) {
        __duckPunch.call(this, 'refresh', data);
    }

    function _refreshProcess(res, data) {
        if (data.success) { data.success.call(this, res); }
    }

    function _registerPerform(data) {
        __duckPunch.call(this, 'register', data);
    }

    function _registerProcess(res, data) {
        if (data.autoLogin === true) {
            data = __utils.extend(data, [this.options.loginData]);

            this.options.loginPerform.call(this, data);
        }
        else {
            if (data.success) { data.success.call(this, res); }

            if (data.redirect) {
                this.options.router._routerGo.call(this, data.redirect);
            }
        }
    }

    function _loginPerform(data) {
        __duckPunch.call(this, 'login', data);
    }

    function _loginProcess(res, data) {
        var _this = this;

        __cookie.set.call(this, data.rememberMe);

        this.authenticated = null;

        this.options.fetchPerform.call(this, {
            enabled: data.fetchUser,
            success: function () {
                if (data.success) { data.success.call(this, res); }

                if (data.redirect && _this.options.check.call(_this)) {
                    _this.options.router._routerGo.call(_this, data.redirect);
                }
            }
        });
    }

    function _logoutPerform(data) {
        data = __utils.extend(this.options.logoutData, [data || {}]);

        if (data.makeRequest) {
            __duckPunch.call(this, 'logout', data);
        }
        else {
            this.options.logoutProcess.call(this, null, data);
        }
    }

    function _logoutProcess(res, data) {
        __cookie.delete.call(this);

        __token.delete.call(this, 'other');
        __token.delete.call(this, 'default');

        this.watch.authenticated = false;
        this.watch.data = null;

        if (data.success) { data.success.call(this, res, data); }

        if (data.redirect) {
            this.options.router._routerGo.call(this, data.redirect);
        }
    }

    function _loginOtherPerform(data) {
        var success,
            token = this.token.call(this); // (admin) token

        data = data || {};

        success = data.success;

        data.success = function () {

            // Reshuffle tokens here...
            __token.set.call(this, 'other', this.token.call(this));
            __token.set.call(this, 'default', token);

            if (success) { success.call(this); }
        };

        __duckPunch.call(this, 'loginOther', data);
    }

    function _loginOtherProcess(res, data) {
        var _this = this;

        this.options.fetchPerform.call(this, {
            enabled: true,
            success: function () {
                if (data.success) { data.success.call(this, res); }

                if (data.redirect && _this.options.check.call(_this)) {
                    _this.options.router._routerGo.call(_this, data.redirect);
                }
            }
        });
    }

    function _logoutOtherPerform(data) {
        data = __utils.extend(this.options.logoutOtherData, [data || {}]);

        if (data.makeRequest) {
            __duckPunch.call(this, 'logoutOther', data);
        }
        else {
            this.options.logoutOtherProcess.call(this, null, data);
        }
    }

    function _logoutOtherProcess(res, data) {
        __token.delete.call(this, 'other');

        this.options.fetchPerform.call(this, {
            enabled: true,
            success: function () {
                if (data.success) { data.success.call(this, res, data); }

                if (data.redirect) {
                    this.options.router._routerGo.call(this, data.redirect);
                }
            }
        });
    }

    function _oauth2Perform(data) {
        var state = {},
            params = '',
            query = {};

        if (data.code === true) {
            data = __utils.extend(this.options[data.provider + 'Data'], [data]);

            try {
                if (data.query.state) {
                    state = this.options.parseOauthState(data.query.state);
                }
            }
            catch (e) {
                console.error('vue-auth:error There was an issue retrieving the state data.');
                state = {};
            }

            data.rememberMe = state.rememberMe === true;
            data.state = state;

            this.options.loginPerform.call(this, data);
        } else {
            data = __utils.extend(this.options[data.provider + 'Oauth2Data'], [data]);

            data.redirect = data.redirect.call(this);

            data.state = data.state || {};
            data.state.rememberMe = data.rememberMe === true;

            params = '?client_id=' + data.clientId + '&redirect_uri=' + data.redirect + '&scope=' + data.scope + '&response_type=code&state=' + encodeURIComponent(JSON.stringify(data.state));

            window.location = data.url + params;
        }
    }

    var defaultOptions = {

        // Variables

        rolesVar:          'roles',
        tokenName:         'auth-token',

        // Objects

        authRedirect:       {path: '/login'},
        forbiddenRedirect:  {path: '/403'},
        notFoundRedirect:   {path: '/404'},

        registerData:       {url: 'auth/register',     method: 'POST', redirect: '/login'},
        loginData:          {url: 'auth/login',        method: 'POST', redirect: '/', fetchUser: true},
        logoutData:         {url: 'auth/logout',       method: 'POST', redirect: '/', makeRequest: false},
        oauth1Data:         {url: 'auth/login',        method: 'POST'},
        fetchData:          {url: 'auth/user',         method: 'GET', enabled: true},
        refreshData:        {url: 'auth/refresh',      method: 'GET', enabled: true, interval: 30},
        loginOtherData:     {url: 'auth/login-other',  method: 'POST', redirect: '/'},
        logoutOtherData:    {url: 'auth/logout-other', method: 'POST', redirect: '/admin', makeRequest: false},

        facebookData:       {url: 'auth/facebook',     method: 'POST', redirect: '/'},
        googleData:         {url: 'auth/google',       method: 'POST', redirect: '/'},

        facebookOauth2Data: {
            url: 'https://www.facebook.com/v2.5/dialog/oauth',
            redirect: function () { return this.options.getUrl() + '/login/facebook'; },
            clientId: '',
            scope: 'email'
        },
        googleOauth2Data: {
            url: 'https://accounts.google.com/o/oauth2/auth',
            redirect: function () { return this.options.getUrl() + '/login/google'; },
            clientId: '',
            scope: 'https://www.googleapis.com/auth/plus.me https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
        },

        // Internal

        getUrl:             _getUrl,
        cookieDomain:       _cookieDomain,
        parseUserData:      _parseUserData,
        parseOauthState:    _parseOauthState,
        tokenExpired:       _tokenExpired,
        check:              _check,
        checkAuthenticated: _checkAuthenticated,

        transitionEach:     _transitionEach,
        routerBeforeEach:   _routerBeforeEach,
        requestIntercept:   _requestIntercept,
        responseIntercept:  _responseIntercept,

        // Contextual

        registerPerform:    _registerPerform,
        registerProcess:    _registerProcess,

        loginPerform:       _loginPerform,
        loginProcess:       _loginProcess,

        logoutPerform:      _logoutPerform,
        logoutProcess:      _logoutProcess,

        fetchPerform:       _fetchPerform,
        fetchProcess:       _fetchProcess,

        refreshPerform:     _refreshPerform,
        refreshProcess:     _refreshProcess,

        loginOtherPerform:  _loginOtherPerform,
        loginOtherProcess:  _loginOtherProcess,

        logoutOtherPerform: _logoutOtherPerform,
        logoutOtherProcess: _logoutOtherProcess,

        oauth2Perform:      _oauth2Perform
    };

    function Auth(Vue, options) {
        var i, ii, msg, drivers = ['auth', 'http', 'router'];
        
        this.currentToken = null;

        this.options = __utils.extend(defaultOptions, [options || {}]);
        this.options.Vue = Vue;

        this.watch = new this.options.Vue({
            data: function () {
                return {
                    data: null,
                    loaded: false,
                    redirect: null,
                    authenticated: null
                };
            }
        });

        // Check drivers.
        for (i = 0, ii = drivers.length; i < ii; i++) {
            if ( ! this.options[drivers[i]]) {
                console.error('Error (@websanova/vue-auth): "' + drivers[i] + '" driver must be set.');
                return;
            }

            if (this.options[drivers[i]]._init) {
                msg = this.options[drivers[i]]._init.call(this);

                if (msg) {
                    console.error('Error (@websanova/vue-auth): ' + msg);
                    return;
                }
            }
        }

        // Set refresh interval.
        if (this.options.refreshData.interval && this.options.refreshData.interval > 0) {
            setInterval(function () {
                if (this.options.refreshData.enabled && !this.options.tokenExpired.call(this)) {
                    this.options.refreshPerform.call(this, {});
                }
            }.bind(this), this.options.refreshData.interval * 1000 * 60); // In minutes.
        }

        // Init interceptors.
        this.options.router._beforeEach.call(this, this.options.routerBeforeEach, this.options.transitionEach);
        this.options.http._interceptor.call(this, this.options.requestIntercept, this.options.responseIntercept);
    }

    Auth.prototype.ready = function (cb) {
        return this.watch.loaded;
    };

    Auth.prototype.redirect = function () {
        return this.watch.redirect;
    };

    Auth.prototype.user = function (data) {
        if (data) {
            this.watch.data = data;
        }

        return this.watch.data || {};
    };

    Auth.prototype.check = function (role) {
        return this.options.check.call(this, role);
    };

    Auth.prototype.other = function () {
        this.watch.data; // To fire watch

        return __token.get.call(this, 'other') ? true : false;
    };

    Auth.prototype.enableOther = function (data) {
        if (this.other()) {
            this.currentToken = null;
        }
    };

    Auth.prototype.disableOther = function (data) {
        if (this.other()) {
            this.currentToken = 'default';
        }
    };

    Auth.prototype.token = function (name) {
        return __token.get.call(this, name);
    };

    Auth.prototype.fetch = function (data) {
        __bindContext.call(this, 'fetch', data);
    };

    Auth.prototype.refresh = function (data) {
        __bindContext.call(this, 'refresh', data);
    };

    Auth.prototype.register = function (data) {
        __bindContext.call(this, 'register', data);
    };

    Auth.prototype.login = function (data) {
        __bindContext.call(this, 'login', data);
    };

    Auth.prototype.logout = function (data) {
        __bindContext.call(this, 'logout', data);
    };

    Auth.prototype.loginOther = function (data) {
        __bindContext.call(this, 'loginOther', data);
    };

    Auth.prototype.logoutOther = function (data) {
        __bindContext.call(this, 'logoutOther', data);
    };

    Auth.prototype.oauth2 = function (data) {
        __bindContext.call(this, 'oauth2', data);
    }    

    return Auth;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var Auth = __webpack_require__(15)();

module.exports = (function () {

    return function install(Vue, options) {
        
        var auth = new Auth(Vue, options);

        var login = auth.login;
        var fetch = auth.fetch;
        var logout = auth.logout;
        var oauth2 = auth.oauth2;
        var refresh = auth.refresh;
        var register = auth.register;
        var loginOther = auth.loginOther;
        var logoutOther = auth.logoutOther;

        Object.defineProperties(Vue.prototype, {
            $auth: {
                get: function () {
                    auth.login = login.bind(this);
                    auth.fetch = fetch.bind(this);
                    auth.logout = logout.bind(this);
                    auth.oauth2 = oauth2.bind(this);
                    auth.refresh = refresh.bind(this);
                    auth.register = register.bind(this);
                    auth.loginOther = loginOther.bind(this);
                    auth.logoutOther = logoutOther.bind(this);

                    return auth;
                }
            }
        });
    }
})();

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = (function () {

    function setCookie (name, value, timeOffset) {
        var domain = this.options.cookieDomain(),
            expires = (new Date((new Date()).getTime() + timeOffset)).toUTCString();

        document.cookie = (name + '=' + value + '; domain=' + domain + '; path=/;' + (timeOffset ? ' expires=' + expires + ';' : ''));
    }

    return {
        set: function(rememberMe) {
            setCookie.call(this,
                'rememberMe',
                rememberMe === true ? 'true' : 'false',
                rememberMe === true ? 12096e5 : undefined
            );
        },

        exists: function(name) {
            return document.cookie.match(/rememberMe/);
        },

        delete: function(name) {
            setCookie.call(this, 'rememberMe', 'false', -12096e5);
        }
    };

})();

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = (function () {

    function tokenName(name) {
        name = name || this.currentToken;

        if ( ! name && this.other.call(this)) { name = 'other'; }
        else if ( ! name || name === 'default') { name = 'default'; }

        return name + '-' + this.options.tokenName;
    }

    return {
        get: function (name) {
            name = tokenName.call(this, name);

            return localStorage.getItem(name);
        },

        set: function (name, token) {
            name = tokenName.call(this, name);

            if (token) {
                localStorage.setItem(name, token);
            }
        },

        delete: function (name) {
            name = tokenName.call(this, name);

            localStorage.removeItem(name);
        },

        expiring: function () {
            return false;
        }
    }

})();

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = (function (){

    function isObject(val) {
        if (val !== null && typeof val === 'object' && val.constructor !== Array ) {
            return true;
        }

        return false;
    }

    function toArray(val) {
        return (typeof val) === 'string' || (typeof val) === 'number' ? [val] : val;
    }

    function extend(mainObj, appendObj) {
        var i, ii, key, data = {};

        for (key in mainObj) {
            if (isObject(mainObj[key]) && mainObj[key].constructor.name !== 'FormData') {
                data[key] = extend(mainObj[key], {});
            }
            else {
                data[key] = mainObj[key];
            }
        }

        for (i = 0, ii = appendObj.length; i < ii; i++) {
            for (key in appendObj[i]) {
                if (isObject(appendObj[i][key]) && appendObj[i][key].constructor.name !== 'FormData') {
                    data[key] = extend(mainObj[key] || {}, [appendObj[i][key]]);
                }
                else  {
                    data[key] = appendObj[i][key];
                }
            }
        }

        return data;
    }

    function compare(one, two) {
        var i, ii, key;

        if (Object.prototype.toString.call(one) === '[object Object]' && Object.prototype.toString.call(two) === '[object Object]') {
            for (key in one) {
                if (compare(one[key], two[key])) {
                    return true;
                }
            }

            return false;
        }

        one = toArray(one);
        two = toArray(two);

        if (!one || !two || one.constructor !== Array || two.constructor !== Array) {
            return false;
        }

        for (i = 0, ii = one.length; i < ii; i++) {
            if (two.indexOf(one[i]) >= 0) {
                return true;
            }
        }

        return false;
    }

    return {
        extend: extend,
        toArray: toArray,
        compare: compare
    };
})();


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(7);
var Axios = __webpack_require__(23);
var defaults = __webpack_require__(2);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(4);
axios.CancelToken = __webpack_require__(22);
axios.isCancel = __webpack_require__(5);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(37);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(4);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(2);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(24);
var dispatchRequest = __webpack_require__(25);
var isAbsoluteURL = __webpack_require__(33);
var combineURLs = __webpack_require__(31);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(28);
var isCancel = __webpack_require__(5);
var defaults = __webpack_require__(2);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(6);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response
    ));
  }
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    components: {}
});


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports
exports.i(__webpack_require__(41), "");

// module
exports.push([module.i, "\nbody{\n    height:100%;\n}\n", ""]);

// exports


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\nhtml, body {\n    font-family: 'Roboto', 'Helvetica', sans-serif;\n}\n.app-avatar {\n    width: 48px;\n    height: 48px;\n    border-radius: 24px;\n}\n.app-layout .app-header .mdl-textfield {\n    padding: 0px;\n    margin-top: 41px;\n}\n.app-layout .app-header .mdl-textfield .mdl-textfield__expandable-holder {\n    bottom: 19px;\n}\n.app-layout .mdl-layout__header .mdl-layout__drawer-button {\n    color: rgba(0, 0, 0, 0.54);\n}\n.mdl-layout__drawer .avatar {\n    margin-bottom: 16px;\n}\n.app-drawer {\n    border: none;\n}\n/* iOS Safari specific workaround */\n.app-drawer .mdl-menu__container {\n    z-index: -1;\n}\n.app-drawer .app-navigation {\n    z-index: -2;\n}\n/* END iOS Safari specific workaround */\n.app-drawer .mdl-menu .mdl-menu__item {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n}\n.app-drawer-header {\n    box-sizing: border-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-justify-content: flex-end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    padding: 16px;\n    height: 151px;\n}\n.app-avatar-dropdown {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    position: relative;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    width: 100%;\n}\n\n.app-navigation {\n    -webkit-flex-grow: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n}\n.app-layout .app-navigation .mdl-navigation__link {\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    color: rgba(255, 255, 255, 0.56);\n    font-weight: 500;\n}\n.app-layout .app-navigation .mdl-navigation__link:hover {\n    background-color: #00BCD4;\n    color: #37474F;\n}\n.app-navigation .mdl-navigation__link .material-icons {\n    font-size: 24px;\n    color: rgba(255, 255, 255, 0.56);\n    margin-right: 32px;\n}\n\n.app-content {\n    max-width: 1080px;\n}\n\n.app-charts {\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    -ms-grid-row-align: center;\n    align-items: center;\n}\n.app-chart:nth-child(1) {\n    color: #ACEC00;\n}\n.app-chart:nth-child(2) {\n    color: #00BBD6;\n}\n.app-chart:nth-child(3) {\n    color: #BA65C9;\n}\n.app-chart:nth-child(4) {\n    color: #EF3C79;\n}\n.app-graphs {\n    padding: 16px 32px;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-align-items: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n}\n/* TODO: Find a proper solution to have the graphs\n * not float around outside their container in IE10/11.\n * Using a browserhacks.com solution for now.\n */\n_:-ms-input-placeholder, :root .app-graphs {\n    min-height: 664px;\n}\n_:-ms-input-placeholder, :root .app-graph {\n    max-height: 300px;\n}\n/* TODO end */\n.app-graph:nth-child(1) {\n    color: #00b9d8;\n}\n.app-graph:nth-child(2) {\n    color: #d9006e;\n}\n\n.app-cards {\n    -webkit-align-items: flex-start;\n    -ms-flex-align: start;\n    -ms-grid-row-align: flex-start;\n    align-items: flex-start;\n    -webkit-align-content: flex-start;\n    -ms-flex-line-pack: start;\n    align-content: flex-start;\n}\n.app-cards .app-separator {\n    height: 32px;\n}\n.app-cards .mdl-card__title.mdl-card__title {\n    color: white;\n    font-size: 24px;\n    font-weight: 400;\n}\n.app-cards ul {\n    padding: 0;\n}\n.app-cards h3 {\n    font-size: 1em;\n}\n.app-updates .mdl-card__title {\n    min-height: 200px;\n    background-position: 90% 100%;\n    background-repeat: no-repeat;\n}\n.app-cards .mdl-card__actions a {\n    color: #00BCD4;\n    text-decoration: none;\n}\n\n.app-options h3 {\n    margin: 0;\n}\n.app-options .mdl-checkbox__box-outline {\n    border-color: rgba(255, 255, 255, 0.89);\n}\n.app-options ul {\n    margin: 0;\n    list-style-type: none;\n}\n.app-options li {\n    margin: 4px 0;\n}\n.app-options .material-icons {\n    color: rgba(255, 255, 255, 0.89);\n}\n.app-options .mdl-card__actions {\n    height: 64px;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    box-sizing: border-box;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n}\n\n\n", ""]);

// exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);
exports.i(__webpack_require__(43), "");
exports.i(__webpack_require__(40), "");
exports.i(__webpack_require__(42), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "/*Text decoration */\na{text-decoration: none;}\n\n.mdl-card__users{\n    min-height: 200px;\n    background-image: none;\n    background: url('data:image/svg+xml;utf8,<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"684.1 -6 121.9 120.9\" enable-background=\"new 684.1 -6 121.9 120.9\" xml:space=\"preserve\"><path d=\"M723.3 70.1c7.9-1.9 15.1-2.8 21.7-2.8 6.6 0 13.9 0.9 21.7 2.8 7.9 1.9 15.1 5 21.6 9.3 6.5 4.3 9.8 9.2 9.8 14.6v19.9H691.9V94c0-5.4 3.3-10.2 9.8-14.6C708.3 75.1 715.4 72 723.3 70.1zM772.1 85.2c-8.9-3.4-17.9-5.1-27-5.1 -9.1 0-18.1 1.7-27 5.1 -8.9 3.4-13.4 6.4-13.4 8.9v7.1h80.8V94C785.4 91.5 781 88.6 772.1 85.2zM726.4 15.6c5.2-5.3 11.4-7.9 18.6-7.9 7.2 0 13.5 2.6 18.6 7.9 5.2 5.3 7.8 11.5 7.8 18.8 0 7.3-2.6 13.5-7.8 18.6 -5.2 5.2-11.4 7.8-18.6 7.8 -7.3 0-13.5-2.6-18.6-7.8 -5.2-5.2-7.8-11.4-7.8-18.6C718.7 27.1 721.2 20.9 726.4 15.6zM755 24.4c-2.7-2.7-6-4-9.9-4 -3.9 0-7.3 1.3-9.9 4 -2.7 2.7-4 6-4 9.9 0 3.9 1.3 7.2 4 9.8 2.7 2.6 6 3.9 9.9 3.9 3.9 0 7.2-1.3 9.9-3.9 2.7-2.6 4-5.8 4-9.8C759 30.4 757.7 27.1 755 24.4z\" fill=\"white\"/></svg>') no-repeat bottom right;\n    background-position: 90% 100%;\n    background-size: 35%;\n    background-color:#59717A !important;\n}\n\n\n.mdl-card__users.addTracks{\n    background: url('data:image/svg+xml;utf8,<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"684.1 -6 121.9 120.9\" enable-background=\"new 684.1 -6 121.9 120.9\" xml:space=\"preserve\"><path d=\"M795.9 69.8h-43.6v43.6h-14.3V69.8h-43.6V55.5h43.6V11.8h14.3v43.6h43.6V69.8z\" fill=\"white\"/></svg> ') no-repeat bottom right;\n    background-color: #6899a1 !important;\n}\n\n\n\n\n.mdl-card__blank{\n    background-image: none;\n    padding:20px;\n    color:#000;\n    background-color:#fff !important;\n}\n\n\n.mdl-card__tracks{\n    min-height: 200px;\n    background-image: none;\n    background: url('data:image/svg+xml;utf8,<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"684.1 -6 121.9 120.9\" enable-background=\"new 684.1 -6 121.9 120.9\" xml:space=\"preserve\"><path d=\"M690.7 66.6V42.3h12.2v24.3H690.7zM714.8 90.7V18.2H727v72.4H714.8zM739.1 114.7V-5.8H751v120.5H739.1zM763.2 90.7V18.2h12.2v72.4H763.2zM787.2 42.3h12.2v24.3h-12.2V42.3z\" fill=\"white\"/></svg>') no-repeat bottom right;\n    background-size: 35%;\n    color:#fff;\n    background-color:#FF5722 !important;\n}\n\n.mdl-card__reporting{\n    min-height: 200px;\n    background-image: none;\n    background: url('data:image/svg+xml;utf8,<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"684.1 -6 121.9 120.9\" enable-background=\"new 684.1 -6 121.9 120.9\" xml:space=\"preserve\"><path d=\"M691.6 7.5h105.9v14.9H691.6V7.5zM797.5 37.6v15.2H691.6V37.6H797.5zM691.6 82.9V67.6h105.9v15.2H691.6zM757.9 98.1v14.9h-66.2V98.1H757.9z\" fill=\"white\"/></svg>') no-repeat bottom right;\n    background-size: 35%;\n    color:#fff;\n    background-color:#4DB6AC !important;\n}\n\n\n.mdl-card__blank{\n    min-height: 200px;\n    background-image: none;\n    color:#fff;\n    background-color:#FFF !important;\n}\n\n\n\n\n.mdl-card__title,.mdl-card__tracks,.mdl-card__users,.mdl-card__reporting {\n    -webkit-align-items:center;\n    -ms-flex-align:center;\n    align-items:center;\n    color:#000;\n    display:block;\n    display:-webkit-flex;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-justify-content:stretch;\n    -ms-flex-pack:stretch;\n    justify-content:stretch;\n    line-height:normal;\n    padding:16px;\n    -webkit-perspective-origin:165px 56px;\n    perspective-origin:165px 56px;\n    -webkit-transform-origin:165px 56px;\n    transform-origin:165px 56px;\n    box-sizing:border-box;\n    color:#fff;\n}\n\n.mdl-data-table {\n    position: relative;\n    border: none;\n    border-collapse: collapse;\n    white-space: nowrap;\n    font-size: 13px;\n    background-color: transparent;\n}\n\n/*Clear Shadow */\n.box-shadow-clear{box-shadow: none}\n\n/*Select Boxes */\n/* Style Select Field */\nselect {\n    font-family: inherit;\n    background-color: transparent;\n    width: 100%;\n    padding: 4px 0;\n    font-size: 16px;\n    color: rgba(0,0,0, 0.26);\n    border: none;\n    border-bottom: 1px solid rgba(0,0,0, 0.12);\n}\n\n/* Remove focus */\nselect:focus {\n    outline: none;\n}\n\n/* Hide label */\n.mdl-selectfield label {\n    display: none;\n}\n\n/* Use custom arrow */\n.mdl-selectfield select {\n    appearance: none;\n}\n\n.mdl-selectfield {\n    font-family: 'Roboto','Helvetica','Arial',sans-serif;\n    position: relative;\n}\n.mdl-selectfield:after {\n    position: absolute;\n    top: 0.75em;\n    right: 0.5em;\n    /* Styling the down arrow */\n    width: 0;\n    height: 0;\n    padding: 0;\n    content: '';\n    border-left: .25em solid transparent;\n    border-right: .25em solid transparent;\n    border-top: 0.375em solid rgba(0,0,0, 0.12);\n    pointer-events: none;\n}\n\nh3{font-size: 20px}\n\n\n/*Player Stuff */\n#audioplayer{\n    width: 480px;\n    height: 60px;\n    margin: 50px auto auto auto;\n    border: solid;\n}\n\n#pButton{\n    height:60px;\n    width: 60px;\n    border: none;\n    background-size: 50% 50%;\n    background-repeat: no-repeat;\n    background-position: center;\n    float:left;\n    outline:none;\n}\n\n\n\n\n#timeline{\n    width: 400px;\n    height: 20px;\n    margin-top: 20px;\n    float: left;\n    border-radius: 15px;\n    background: rgba(0,0,0,.3);\n    display:none;\n\n}\n#playhead{\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    margin-top: 1px;\n    background: rgba(0, 0, 0,1);\n\n}\n#DurationLeft,#ElapsedTime\n{\n    cursor:pointer;\n    height: 20px;\n    margin-top: 20px;\n    float:left;\n}\n\n\n/*image radius rotate */\n\n.rotateimage {\n    -webkit-animation-name: spin;\n    -webkit-animation-duration: 4000ms;\n    -webkit-animation-iteration-count: infinite;\n    -webkit-animation-timing-function: linear;\n    -moz-animation-name: spin;\n    -moz-animation-duration: 4000ms;\n    -moz-animation-iteration-count: infinite;\n    -moz-animation-timing-function: linear;\n    -ms-animation-name: spin;\n    -ms-animation-duration: 4000ms;\n    -ms-animation-iteration-count: infinite;\n    -ms-animation-timing-function: linear;\n\n    animation-name: spin;\n    animation-duration: 4000ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n}\n@-ms-keyframes spin {\n    from { -ms-transform: rotate(0deg); }\n    to { -ms-transform: rotate(360deg); }\n}\n@-moz-keyframes spin {\n    from { -moz-transform: rotate(0deg); }\n    to { -moz-transform: rotate(360deg); }\n}\n@-webkit-keyframes spin {\n    from { -webkit-transform: rotate(0deg); }\n    to { -webkit-transform: rotate(360deg); }\n}\n@keyframes spin {\n    from {\n        transform:rotate(0deg);\n    }\n    to {\n        transform:rotate(360deg);\n    }\n}\n\n/*Custom MDL */\n.mdl-checkbox.is-checked .mdl-checkbox__tick-outline {\n    background: #009688 url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K);\n}\n\n\n/*Submit blur */\n.submitted {\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    -webkit-filter: blur(5px);\n    -moz-filter: blur(5px);\n    -o-filter: blur(5px);\n    -ms-filter: blur(5px);\n    filter: blur(5px);\n}\n\n.strikeOutText{\n    text-decoration: line-through;\n}\n\n", ""]);

// exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "/**\n * material-design-lite - Material Design Components in CSS, JS and HTML\n * @version v1.3.0\n * @license Apache-2.0\n * @copyright 2015 Google, Inc.\n * @link https://github.com/google/material-design-lite\n */\n@charset \"UTF-8\";html{color:rgba(0,0,0,.87)}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}.hidden{display:none!important}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.visuallyhidden.focusable:active,.visuallyhidden.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.invisible{visibility:hidden}.clearfix:before,.clearfix:after{content:\" \";display:table}.clearfix:after{clear:both}@media print{*,*:before,*:after,*:first-letter{background:transparent!important;color:#000!important;box-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href)\")\"}abbr[title]:after{content:\" (\" attr(title)\")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}pre,blockquote{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}tr,img{page-break-inside:avoid}img{max-width:100%!important}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}}a,.mdl-accordion,.mdl-button,.mdl-card,.mdl-checkbox,.mdl-dropdown-menu,.mdl-icon-toggle,.mdl-item,.mdl-radio,.mdl-slider,.mdl-switch,.mdl-tabs__tab{-webkit-tap-highlight-color:transparent;-webkit-tap-highlight-color:rgba(255,255,255,0)}html{width:100%;height:100%;-ms-touch-action:manipulation;touch-action:manipulation}body{width:100%;min-height:100%}main{display:block}*[hidden]{display:none!important}html,body{font-family:\"Helvetica\",\"Arial\",sans-serif;font-size:14px;font-weight:400;line-height:20px}h1,h2,h3,h4,h5,h6,p{padding:0}h1 small,h2 small,h3 small,h4 small,h5 small,h6 small{font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;font-weight:400;line-height:1.35;letter-spacing:-.02em;opacity:.54;font-size:.6em}h1{font-size:56px;line-height:1.35;letter-spacing:-.02em;margin:24px 0}h1,h2{font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;font-weight:400}h2{font-size:45px;line-height:48px}h2,h3{margin:24px 0}h3{font-size:34px;line-height:40px}h3,h4{font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;font-weight:400}h4{font-size:24px;line-height:32px;-moz-osx-font-smoothing:grayscale;margin:24px 0 16px}h5{font-size:20px;font-weight:500;line-height:1;letter-spacing:.02em}h5,h6{font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;margin:24px 0 16px}h6{font-size:16px;letter-spacing:.04em}h6,p{font-weight:400;line-height:24px}p{font-size:14px;letter-spacing:0;margin:0 0 16px}a{color:rgb(255,110,64);font-weight:500}blockquote{font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;position:relative;font-size:24px;font-weight:300;font-style:italic;line-height:1.35;letter-spacing:.08em}blockquote:before{position:absolute;left:-.5em;content:'\\E2\\20AC\\153'}blockquote:after{content:'\\E2\\20AC\\9D';margin-left:-.05em}mark{background-color:#f4ff81}dt{font-weight:700}address{font-size:12px;line-height:1;font-style:normal}address,ul,ol{font-weight:400;letter-spacing:0}ul,ol{font-size:14px;line-height:24px}.mdl-typography--display-4,.mdl-typography--display-4-color-contrast{font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;font-size:112px;font-weight:300;line-height:1;letter-spacing:-.04em}.mdl-typography--display-4-color-contrast{opacity:.54}.mdl-typography--display-3,.mdl-typography--display-3-color-contrast{font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;font-size:56px;font-weight:400;line-height:1.35;letter-spacing:-.02em}.mdl-typography--display-3-color-contrast{opacity:.54}.mdl-typography--display-2,.mdl-typography--display-2-color-contrast{font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;font-size:45px;font-weight:400;line-height:48px}.mdl-typography--display-2-color-contrast{opacity:.54}.mdl-typography--display-1,.mdl-typography--display-1-color-contrast{font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;font-size:34px;font-weight:400;line-height:40px}.mdl-typography--display-1-color-contrast{opacity:.54}.mdl-typography--headline,.mdl-typography--headline-color-contrast{font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;font-size:24px;font-weight:400;line-height:32px;-moz-osx-font-smoothing:grayscale}.mdl-typography--headline-color-contrast{opacity:.87}.mdl-typography--title,.mdl-typography--title-color-contrast{font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;font-size:20px;font-weight:500;line-height:1;letter-spacing:.02em}.mdl-typography--title-color-contrast{opacity:.87}.mdl-typography--subhead,.mdl-typography--subhead-color-contrast{font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;font-size:16px;font-weight:400;line-height:24px;letter-spacing:.04em}.mdl-typography--subhead-color-contrast{opacity:.87}.mdl-typography--body-2,.mdl-typography--body-2-color-contrast{font-size:14px;font-weight:700;line-height:24px;letter-spacing:0}.mdl-typography--body-2-color-contrast{opacity:.87}.mdl-typography--body-1,.mdl-typography--body-1-color-contrast{font-size:14px;font-weight:400;line-height:24px;letter-spacing:0}.mdl-typography--body-1-color-contrast{opacity:.87}.mdl-typography--body-2-force-preferred-font,.mdl-typography--body-2-force-preferred-font-color-contrast{font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;font-size:14px;font-weight:500;line-height:24px;letter-spacing:0}.mdl-typography--body-2-force-preferred-font-color-contrast{opacity:.87}.mdl-typography--body-1-force-preferred-font,.mdl-typography--body-1-force-preferred-font-color-contrast{font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;font-size:14px;font-weight:400;line-height:24px;letter-spacing:0}.mdl-typography--body-1-force-preferred-font-color-contrast{opacity:.87}.mdl-typography--caption,.mdl-typography--caption-force-preferred-font{font-size:12px;font-weight:400;line-height:1;letter-spacing:0}.mdl-typography--caption-force-preferred-font{font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif}.mdl-typography--caption-color-contrast,.mdl-typography--caption-force-preferred-font-color-contrast{font-size:12px;font-weight:400;line-height:1;letter-spacing:0;opacity:.54}.mdl-typography--caption-force-preferred-font-color-contrast,.mdl-typography--menu{font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif}.mdl-typography--menu{font-size:14px;font-weight:500;line-height:1;letter-spacing:0}.mdl-typography--menu-color-contrast{opacity:.87}.mdl-typography--menu-color-contrast,.mdl-typography--button,.mdl-typography--button-color-contrast{font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;font-size:14px;font-weight:500;line-height:1;letter-spacing:0}.mdl-typography--button,.mdl-typography--button-color-contrast{text-transform:uppercase}.mdl-typography--button-color-contrast{opacity:.87}.mdl-typography--text-left{text-align:left}.mdl-typography--text-right{text-align:right}.mdl-typography--text-center{text-align:center}.mdl-typography--text-justify{text-align:justify}.mdl-typography--text-nowrap{white-space:nowrap}.mdl-typography--text-lowercase{text-transform:lowercase}.mdl-typography--text-uppercase{text-transform:uppercase}.mdl-typography--text-capitalize{text-transform:capitalize}.mdl-typography--font-thin{font-weight:200!important}.mdl-typography--font-light{font-weight:300!important}.mdl-typography--font-regular{font-weight:400!important}.mdl-typography--font-medium{font-weight:500!important}.mdl-typography--font-bold{font-weight:700!important}.mdl-typography--font-black{font-weight:900!important}.material-icons{font-family:'Material Icons';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;word-wrap:normal;-moz-font-feature-settings:'liga';font-feature-settings:'liga';-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}.mdl-color-text--red{color:#f44336 !important}.mdl-color--red{background-color:#f44336 !important}.mdl-color-text--red-50{color:#ffebee !important}.mdl-color--red-50{background-color:#ffebee !important}.mdl-color-text--red-100{color:#ffcdd2 !important}.mdl-color--red-100{background-color:#ffcdd2 !important}.mdl-color-text--red-200{color:#ef9a9a !important}.mdl-color--red-200{background-color:#ef9a9a !important}.mdl-color-text--red-300{color:#e57373 !important}.mdl-color--red-300{background-color:#e57373 !important}.mdl-color-text--red-400{color:#ef5350 !important}.mdl-color--red-400{background-color:#ef5350 !important}.mdl-color-text--red-500{color:#f44336 !important}.mdl-color--red-500{background-color:#f44336 !important}.mdl-color-text--red-600{color:#e53935 !important}.mdl-color--red-600{background-color:#e53935 !important}.mdl-color-text--red-700{color:#d32f2f !important}.mdl-color--red-700{background-color:#d32f2f !important}.mdl-color-text--red-800{color:#c62828 !important}.mdl-color--red-800{background-color:#c62828 !important}.mdl-color-text--red-900{color:#b71c1c !important}.mdl-color--red-900{background-color:#b71c1c !important}.mdl-color-text--red-A100{color:#ff8a80 !important}.mdl-color--red-A100{background-color:#ff8a80 !important}.mdl-color-text--red-A200{color:#ff5252 !important}.mdl-color--red-A200{background-color:#ff5252 !important}.mdl-color-text--red-A400{color:#ff1744 !important}.mdl-color--red-A400{background-color:#ff1744 !important}.mdl-color-text--red-A700{color:#d50000 !important}.mdl-color--red-A700{background-color:#d50000 !important}.mdl-color-text--pink{color:#e91e63 !important}.mdl-color--pink{background-color:#e91e63 !important}.mdl-color-text--pink-50{color:#fce4ec !important}.mdl-color--pink-50{background-color:#fce4ec !important}.mdl-color-text--pink-100{color:#f8bbd0 !important}.mdl-color--pink-100{background-color:#f8bbd0 !important}.mdl-color-text--pink-200{color:#f48fb1 !important}.mdl-color--pink-200{background-color:#f48fb1 !important}.mdl-color-text--pink-300{color:#f06292 !important}.mdl-color--pink-300{background-color:#f06292 !important}.mdl-color-text--pink-400{color:#ec407a !important}.mdl-color--pink-400{background-color:#ec407a !important}.mdl-color-text--pink-500{color:#e91e63 !important}.mdl-color--pink-500{background-color:#e91e63 !important}.mdl-color-text--pink-600{color:#d81b60 !important}.mdl-color--pink-600{background-color:#d81b60 !important}.mdl-color-text--pink-700{color:#c2185b !important}.mdl-color--pink-700{background-color:#c2185b !important}.mdl-color-text--pink-800{color:#ad1457 !important}.mdl-color--pink-800{background-color:#ad1457 !important}.mdl-color-text--pink-900{color:#880e4f !important}.mdl-color--pink-900{background-color:#880e4f !important}.mdl-color-text--pink-A100{color:#ff80ab !important}.mdl-color--pink-A100{background-color:#ff80ab !important}.mdl-color-text--pink-A200{color:#ff4081 !important}.mdl-color--pink-A200{background-color:#ff4081 !important}.mdl-color-text--pink-A400{color:#f50057 !important}.mdl-color--pink-A400{background-color:#f50057 !important}.mdl-color-text--pink-A700{color:#c51162 !important}.mdl-color--pink-A700{background-color:#c51162 !important}.mdl-color-text--purple{color:#9c27b0 !important}.mdl-color--purple{background-color:#9c27b0 !important}.mdl-color-text--purple-50{color:#f3e5f5 !important}.mdl-color--purple-50{background-color:#f3e5f5 !important}.mdl-color-text--purple-100{color:#e1bee7 !important}.mdl-color--purple-100{background-color:#e1bee7 !important}.mdl-color-text--purple-200{color:#ce93d8 !important}.mdl-color--purple-200{background-color:#ce93d8 !important}.mdl-color-text--purple-300{color:#ba68c8 !important}.mdl-color--purple-300{background-color:#ba68c8 !important}.mdl-color-text--purple-400{color:#ab47bc !important}.mdl-color--purple-400{background-color:#ab47bc !important}.mdl-color-text--purple-500{color:#9c27b0 !important}.mdl-color--purple-500{background-color:#9c27b0 !important}.mdl-color-text--purple-600{color:#8e24aa !important}.mdl-color--purple-600{background-color:#8e24aa !important}.mdl-color-text--purple-700{color:#7b1fa2 !important}.mdl-color--purple-700{background-color:#7b1fa2 !important}.mdl-color-text--purple-800{color:#6a1b9a !important}.mdl-color--purple-800{background-color:#6a1b9a !important}.mdl-color-text--purple-900{color:#4a148c !important}.mdl-color--purple-900{background-color:#4a148c !important}.mdl-color-text--purple-A100{color:#ea80fc !important}.mdl-color--purple-A100{background-color:#ea80fc !important}.mdl-color-text--purple-A200{color:#e040fb !important}.mdl-color--purple-A200{background-color:#e040fb !important}.mdl-color-text--purple-A400{color:#d500f9 !important}.mdl-color--purple-A400{background-color:#d500f9 !important}.mdl-color-text--purple-A700{color:#a0f !important}.mdl-color--purple-A700{background-color:#a0f !important}.mdl-color-text--deep-purple{color:#673ab7 !important}.mdl-color--deep-purple{background-color:#673ab7 !important}.mdl-color-text--deep-purple-50{color:#ede7f6 !important}.mdl-color--deep-purple-50{background-color:#ede7f6 !important}.mdl-color-text--deep-purple-100{color:#d1c4e9 !important}.mdl-color--deep-purple-100{background-color:#d1c4e9 !important}.mdl-color-text--deep-purple-200{color:#b39ddb !important}.mdl-color--deep-purple-200{background-color:#b39ddb !important}.mdl-color-text--deep-purple-300{color:#9575cd !important}.mdl-color--deep-purple-300{background-color:#9575cd !important}.mdl-color-text--deep-purple-400{color:#7e57c2 !important}.mdl-color--deep-purple-400{background-color:#7e57c2 !important}.mdl-color-text--deep-purple-500{color:#673ab7 !important}.mdl-color--deep-purple-500{background-color:#673ab7 !important}.mdl-color-text--deep-purple-600{color:#5e35b1 !important}.mdl-color--deep-purple-600{background-color:#5e35b1 !important}.mdl-color-text--deep-purple-700{color:#512da8 !important}.mdl-color--deep-purple-700{background-color:#512da8 !important}.mdl-color-text--deep-purple-800{color:#4527a0 !important}.mdl-color--deep-purple-800{background-color:#4527a0 !important}.mdl-color-text--deep-purple-900{color:#311b92 !important}.mdl-color--deep-purple-900{background-color:#311b92 !important}.mdl-color-text--deep-purple-A100{color:#b388ff !important}.mdl-color--deep-purple-A100{background-color:#b388ff !important}.mdl-color-text--deep-purple-A200{color:#7c4dff !important}.mdl-color--deep-purple-A200{background-color:#7c4dff !important}.mdl-color-text--deep-purple-A400{color:#651fff !important}.mdl-color--deep-purple-A400{background-color:#651fff !important}.mdl-color-text--deep-purple-A700{color:#6200ea !important}.mdl-color--deep-purple-A700{background-color:#6200ea !important}.mdl-color-text--indigo{color:#3f51b5 !important}.mdl-color--indigo{background-color:#3f51b5 !important}.mdl-color-text--indigo-50{color:#e8eaf6 !important}.mdl-color--indigo-50{background-color:#e8eaf6 !important}.mdl-color-text--indigo-100{color:#c5cae9 !important}.mdl-color--indigo-100{background-color:#c5cae9 !important}.mdl-color-text--indigo-200{color:#9fa8da !important}.mdl-color--indigo-200{background-color:#9fa8da !important}.mdl-color-text--indigo-300{color:#7986cb !important}.mdl-color--indigo-300{background-color:#7986cb !important}.mdl-color-text--indigo-400{color:#5c6bc0 !important}.mdl-color--indigo-400{background-color:#5c6bc0 !important}.mdl-color-text--indigo-500{color:#3f51b5 !important}.mdl-color--indigo-500{background-color:#3f51b5 !important}.mdl-color-text--indigo-600{color:#3949ab !important}.mdl-color--indigo-600{background-color:#3949ab !important}.mdl-color-text--indigo-700{color:#303f9f !important}.mdl-color--indigo-700{background-color:#303f9f !important}.mdl-color-text--indigo-800{color:#283593 !important}.mdl-color--indigo-800{background-color:#283593 !important}.mdl-color-text--indigo-900{color:#1a237e !important}.mdl-color--indigo-900{background-color:#1a237e !important}.mdl-color-text--indigo-A100{color:#8c9eff !important}.mdl-color--indigo-A100{background-color:#8c9eff !important}.mdl-color-text--indigo-A200{color:#536dfe !important}.mdl-color--indigo-A200{background-color:#536dfe !important}.mdl-color-text--indigo-A400{color:#3d5afe !important}.mdl-color--indigo-A400{background-color:#3d5afe !important}.mdl-color-text--indigo-A700{color:#304ffe !important}.mdl-color--indigo-A700{background-color:#304ffe !important}.mdl-color-text--blue{color:#2196f3 !important}.mdl-color--blue{background-color:#2196f3 !important}.mdl-color-text--blue-50{color:#e3f2fd !important}.mdl-color--blue-50{background-color:#e3f2fd !important}.mdl-color-text--blue-100{color:#bbdefb !important}.mdl-color--blue-100{background-color:#bbdefb !important}.mdl-color-text--blue-200{color:#90caf9 !important}.mdl-color--blue-200{background-color:#90caf9 !important}.mdl-color-text--blue-300{color:#64b5f6 !important}.mdl-color--blue-300{background-color:#64b5f6 !important}.mdl-color-text--blue-400{color:#42a5f5 !important}.mdl-color--blue-400{background-color:#42a5f5 !important}.mdl-color-text--blue-500{color:#2196f3 !important}.mdl-color--blue-500{background-color:#2196f3 !important}.mdl-color-text--blue-600{color:#1e88e5 !important}.mdl-color--blue-600{background-color:#1e88e5 !important}.mdl-color-text--blue-700{color:#1976d2 !important}.mdl-color--blue-700{background-color:#1976d2 !important}.mdl-color-text--blue-800{color:#1565c0 !important}.mdl-color--blue-800{background-color:#1565c0 !important}.mdl-color-text--blue-900{color:#0d47a1 !important}.mdl-color--blue-900{background-color:#0d47a1 !important}.mdl-color-text--blue-A100{color:#82b1ff !important}.mdl-color--blue-A100{background-color:#82b1ff !important}.mdl-color-text--blue-A200{color:#448aff !important}.mdl-color--blue-A200{background-color:#448aff !important}.mdl-color-text--blue-A400{color:#2979ff !important}.mdl-color--blue-A400{background-color:#2979ff !important}.mdl-color-text--blue-A700{color:#2962ff !important}.mdl-color--blue-A700{background-color:#2962ff !important}.mdl-color-text--light-blue{color:#03a9f4 !important}.mdl-color--light-blue{background-color:#03a9f4 !important}.mdl-color-text--light-blue-50{color:#e1f5fe !important}.mdl-color--light-blue-50{background-color:#e1f5fe !important}.mdl-color-text--light-blue-100{color:#b3e5fc !important}.mdl-color--light-blue-100{background-color:#b3e5fc !important}.mdl-color-text--light-blue-200{color:#81d4fa !important}.mdl-color--light-blue-200{background-color:#81d4fa !important}.mdl-color-text--light-blue-300{color:#4fc3f7 !important}.mdl-color--light-blue-300{background-color:#4fc3f7 !important}.mdl-color-text--light-blue-400{color:#29b6f6 !important}.mdl-color--light-blue-400{background-color:#29b6f6 !important}.mdl-color-text--light-blue-500{color:#03a9f4 !important}.mdl-color--light-blue-500{background-color:#03a9f4 !important}.mdl-color-text--light-blue-600{color:#039be5 !important}.mdl-color--light-blue-600{background-color:#039be5 !important}.mdl-color-text--light-blue-700{color:#0288d1 !important}.mdl-color--light-blue-700{background-color:#0288d1 !important}.mdl-color-text--light-blue-800{color:#0277bd !important}.mdl-color--light-blue-800{background-color:#0277bd !important}.mdl-color-text--light-blue-900{color:#01579b !important}.mdl-color--light-blue-900{background-color:#01579b !important}.mdl-color-text--light-blue-A100{color:#80d8ff !important}.mdl-color--light-blue-A100{background-color:#80d8ff !important}.mdl-color-text--light-blue-A200{color:#40c4ff !important}.mdl-color--light-blue-A200{background-color:#40c4ff !important}.mdl-color-text--light-blue-A400{color:#00b0ff !important}.mdl-color--light-blue-A400{background-color:#00b0ff !important}.mdl-color-text--light-blue-A700{color:#0091ea !important}.mdl-color--light-blue-A700{background-color:#0091ea !important}.mdl-color-text--cyan{color:#00bcd4 !important}.mdl-color--cyan{background-color:#00bcd4 !important}.mdl-color-text--cyan-50{color:#e0f7fa !important}.mdl-color--cyan-50{background-color:#e0f7fa !important}.mdl-color-text--cyan-100{color:#b2ebf2 !important}.mdl-color--cyan-100{background-color:#b2ebf2 !important}.mdl-color-text--cyan-200{color:#80deea !important}.mdl-color--cyan-200{background-color:#80deea !important}.mdl-color-text--cyan-300{color:#4dd0e1 !important}.mdl-color--cyan-300{background-color:#4dd0e1 !important}.mdl-color-text--cyan-400{color:#26c6da !important}.mdl-color--cyan-400{background-color:#26c6da !important}.mdl-color-text--cyan-500{color:#00bcd4 !important}.mdl-color--cyan-500{background-color:#00bcd4 !important}.mdl-color-text--cyan-600{color:#00acc1 !important}.mdl-color--cyan-600{background-color:#00acc1 !important}.mdl-color-text--cyan-700{color:#0097a7 !important}.mdl-color--cyan-700{background-color:#0097a7 !important}.mdl-color-text--cyan-800{color:#00838f !important}.mdl-color--cyan-800{background-color:#00838f !important}.mdl-color-text--cyan-900{color:#006064 !important}.mdl-color--cyan-900{background-color:#006064 !important}.mdl-color-text--cyan-A100{color:#84ffff !important}.mdl-color--cyan-A100{background-color:#84ffff !important}.mdl-color-text--cyan-A200{color:#18ffff !important}.mdl-color--cyan-A200{background-color:#18ffff !important}.mdl-color-text--cyan-A400{color:#00e5ff !important}.mdl-color--cyan-A400{background-color:#00e5ff !important}.mdl-color-text--cyan-A700{color:#00b8d4 !important}.mdl-color--cyan-A700{background-color:#00b8d4 !important}.mdl-color-text--teal{color:#009688 !important}.mdl-color--teal{background-color:#009688 !important}.mdl-color-text--teal-50{color:#e0f2f1 !important}.mdl-color--teal-50{background-color:#e0f2f1 !important}.mdl-color-text--teal-100{color:#b2dfdb !important}.mdl-color--teal-100{background-color:#b2dfdb !important}.mdl-color-text--teal-200{color:#80cbc4 !important}.mdl-color--teal-200{background-color:#80cbc4 !important}.mdl-color-text--teal-300{color:#4db6ac !important}.mdl-color--teal-300{background-color:#4db6ac !important}.mdl-color-text--teal-400{color:#26a69a !important}.mdl-color--teal-400{background-color:#26a69a !important}.mdl-color-text--teal-500{color:#009688 !important}.mdl-color--teal-500{background-color:#009688 !important}.mdl-color-text--teal-600{color:#00897b !important}.mdl-color--teal-600{background-color:#00897b !important}.mdl-color-text--teal-700{color:#00796b !important}.mdl-color--teal-700{background-color:#00796b !important}.mdl-color-text--teal-800{color:#00695c !important}.mdl-color--teal-800{background-color:#00695c !important}.mdl-color-text--teal-900{color:#004d40 !important}.mdl-color--teal-900{background-color:#004d40 !important}.mdl-color-text--teal-A100{color:#a7ffeb !important}.mdl-color--teal-A100{background-color:#a7ffeb !important}.mdl-color-text--teal-A200{color:#64ffda !important}.mdl-color--teal-A200{background-color:#64ffda !important}.mdl-color-text--teal-A400{color:#1de9b6 !important}.mdl-color--teal-A400{background-color:#1de9b6 !important}.mdl-color-text--teal-A700{color:#00bfa5 !important}.mdl-color--teal-A700{background-color:#00bfa5 !important}.mdl-color-text--green{color:#4caf50 !important}.mdl-color--green{background-color:#4caf50 !important}.mdl-color-text--green-50{color:#e8f5e9 !important}.mdl-color--green-50{background-color:#e8f5e9 !important}.mdl-color-text--green-100{color:#c8e6c9 !important}.mdl-color--green-100{background-color:#c8e6c9 !important}.mdl-color-text--green-200{color:#a5d6a7 !important}.mdl-color--green-200{background-color:#a5d6a7 !important}.mdl-color-text--green-300{color:#81c784 !important}.mdl-color--green-300{background-color:#81c784 !important}.mdl-color-text--green-400{color:#66bb6a !important}.mdl-color--green-400{background-color:#66bb6a !important}.mdl-color-text--green-500{color:#4caf50 !important}.mdl-color--green-500{background-color:#4caf50 !important}.mdl-color-text--green-600{color:#43a047 !important}.mdl-color--green-600{background-color:#43a047 !important}.mdl-color-text--green-700{color:#388e3c !important}.mdl-color--green-700{background-color:#388e3c !important}.mdl-color-text--green-800{color:#2e7d32 !important}.mdl-color--green-800{background-color:#2e7d32 !important}.mdl-color-text--green-900{color:#1b5e20 !important}.mdl-color--green-900{background-color:#1b5e20 !important}.mdl-color-text--green-A100{color:#b9f6ca !important}.mdl-color--green-A100{background-color:#b9f6ca !important}.mdl-color-text--green-A200{color:#69f0ae !important}.mdl-color--green-A200{background-color:#69f0ae !important}.mdl-color-text--green-A400{color:#00e676 !important}.mdl-color--green-A400{background-color:#00e676 !important}.mdl-color-text--green-A700{color:#00c853 !important}.mdl-color--green-A700{background-color:#00c853 !important}.mdl-color-text--light-green{color:#8bc34a !important}.mdl-color--light-green{background-color:#8bc34a !important}.mdl-color-text--light-green-50{color:#f1f8e9 !important}.mdl-color--light-green-50{background-color:#f1f8e9 !important}.mdl-color-text--light-green-100{color:#dcedc8 !important}.mdl-color--light-green-100{background-color:#dcedc8 !important}.mdl-color-text--light-green-200{color:#c5e1a5 !important}.mdl-color--light-green-200{background-color:#c5e1a5 !important}.mdl-color-text--light-green-300{color:#aed581 !important}.mdl-color--light-green-300{background-color:#aed581 !important}.mdl-color-text--light-green-400{color:#9ccc65 !important}.mdl-color--light-green-400{background-color:#9ccc65 !important}.mdl-color-text--light-green-500{color:#8bc34a !important}.mdl-color--light-green-500{background-color:#8bc34a !important}.mdl-color-text--light-green-600{color:#7cb342 !important}.mdl-color--light-green-600{background-color:#7cb342 !important}.mdl-color-text--light-green-700{color:#689f38 !important}.mdl-color--light-green-700{background-color:#689f38 !important}.mdl-color-text--light-green-800{color:#558b2f !important}.mdl-color--light-green-800{background-color:#558b2f !important}.mdl-color-text--light-green-900{color:#33691e !important}.mdl-color--light-green-900{background-color:#33691e !important}.mdl-color-text--light-green-A100{color:#ccff90 !important}.mdl-color--light-green-A100{background-color:#ccff90 !important}.mdl-color-text--light-green-A200{color:#b2ff59 !important}.mdl-color--light-green-A200{background-color:#b2ff59 !important}.mdl-color-text--light-green-A400{color:#76ff03 !important}.mdl-color--light-green-A400{background-color:#76ff03 !important}.mdl-color-text--light-green-A700{color:#64dd17 !important}.mdl-color--light-green-A700{background-color:#64dd17 !important}.mdl-color-text--lime{color:#cddc39 !important}.mdl-color--lime{background-color:#cddc39 !important}.mdl-color-text--lime-50{color:#f9fbe7 !important}.mdl-color--lime-50{background-color:#f9fbe7 !important}.mdl-color-text--lime-100{color:#f0f4c3 !important}.mdl-color--lime-100{background-color:#f0f4c3 !important}.mdl-color-text--lime-200{color:#e6ee9c !important}.mdl-color--lime-200{background-color:#e6ee9c !important}.mdl-color-text--lime-300{color:#dce775 !important}.mdl-color--lime-300{background-color:#dce775 !important}.mdl-color-text--lime-400{color:#d4e157 !important}.mdl-color--lime-400{background-color:#d4e157 !important}.mdl-color-text--lime-500{color:#cddc39 !important}.mdl-color--lime-500{background-color:#cddc39 !important}.mdl-color-text--lime-600{color:#c0ca33 !important}.mdl-color--lime-600{background-color:#c0ca33 !important}.mdl-color-text--lime-700{color:#afb42b !important}.mdl-color--lime-700{background-color:#afb42b !important}.mdl-color-text--lime-800{color:#9e9d24 !important}.mdl-color--lime-800{background-color:#9e9d24 !important}.mdl-color-text--lime-900{color:#827717 !important}.mdl-color--lime-900{background-color:#827717 !important}.mdl-color-text--lime-A100{color:#f4ff81 !important}.mdl-color--lime-A100{background-color:#f4ff81 !important}.mdl-color-text--lime-A200{color:#eeff41 !important}.mdl-color--lime-A200{background-color:#eeff41 !important}.mdl-color-text--lime-A400{color:#c6ff00 !important}.mdl-color--lime-A400{background-color:#c6ff00 !important}.mdl-color-text--lime-A700{color:#aeea00 !important}.mdl-color--lime-A700{background-color:#aeea00 !important}.mdl-color-text--yellow{color:#ffeb3b !important}.mdl-color--yellow{background-color:#ffeb3b !important}.mdl-color-text--yellow-50{color:#fffde7 !important}.mdl-color--yellow-50{background-color:#fffde7 !important}.mdl-color-text--yellow-100{color:#fff9c4 !important}.mdl-color--yellow-100{background-color:#fff9c4 !important}.mdl-color-text--yellow-200{color:#fff59d !important}.mdl-color--yellow-200{background-color:#fff59d !important}.mdl-color-text--yellow-300{color:#fff176 !important}.mdl-color--yellow-300{background-color:#fff176 !important}.mdl-color-text--yellow-400{color:#ffee58 !important}.mdl-color--yellow-400{background-color:#ffee58 !important}.mdl-color-text--yellow-500{color:#ffeb3b !important}.mdl-color--yellow-500{background-color:#ffeb3b !important}.mdl-color-text--yellow-600{color:#fdd835 !important}.mdl-color--yellow-600{background-color:#fdd835 !important}.mdl-color-text--yellow-700{color:#fbc02d !important}.mdl-color--yellow-700{background-color:#fbc02d !important}.mdl-color-text--yellow-800{color:#f9a825 !important}.mdl-color--yellow-800{background-color:#f9a825 !important}.mdl-color-text--yellow-900{color:#f57f17 !important}.mdl-color--yellow-900{background-color:#f57f17 !important}.mdl-color-text--yellow-A100{color:#ffff8d !important}.mdl-color--yellow-A100{background-color:#ffff8d !important}.mdl-color-text--yellow-A200{color:#ff0 !important}.mdl-color--yellow-A200{background-color:#ff0 !important}.mdl-color-text--yellow-A400{color:#ffea00 !important}.mdl-color--yellow-A400{background-color:#ffea00 !important}.mdl-color-text--yellow-A700{color:#ffd600 !important}.mdl-color--yellow-A700{background-color:#ffd600 !important}.mdl-color-text--amber{color:#ffc107 !important}.mdl-color--amber{background-color:#ffc107 !important}.mdl-color-text--amber-50{color:#fff8e1 !important}.mdl-color--amber-50{background-color:#fff8e1 !important}.mdl-color-text--amber-100{color:#ffecb3 !important}.mdl-color--amber-100{background-color:#ffecb3 !important}.mdl-color-text--amber-200{color:#ffe082 !important}.mdl-color--amber-200{background-color:#ffe082 !important}.mdl-color-text--amber-300{color:#ffd54f !important}.mdl-color--amber-300{background-color:#ffd54f !important}.mdl-color-text--amber-400{color:#ffca28 !important}.mdl-color--amber-400{background-color:#ffca28 !important}.mdl-color-text--amber-500{color:#ffc107 !important}.mdl-color--amber-500{background-color:#ffc107 !important}.mdl-color-text--amber-600{color:#ffb300 !important}.mdl-color--amber-600{background-color:#ffb300 !important}.mdl-color-text--amber-700{color:#ffa000 !important}.mdl-color--amber-700{background-color:#ffa000 !important}.mdl-color-text--amber-800{color:#ff8f00 !important}.mdl-color--amber-800{background-color:#ff8f00 !important}.mdl-color-text--amber-900{color:#ff6f00 !important}.mdl-color--amber-900{background-color:#ff6f00 !important}.mdl-color-text--amber-A100{color:#ffe57f !important}.mdl-color--amber-A100{background-color:#ffe57f !important}.mdl-color-text--amber-A200{color:#ffd740 !important}.mdl-color--amber-A200{background-color:#ffd740 !important}.mdl-color-text--amber-A400{color:#ffc400 !important}.mdl-color--amber-A400{background-color:#ffc400 !important}.mdl-color-text--amber-A700{color:#ffab00 !important}.mdl-color--amber-A700{background-color:#ffab00 !important}.mdl-color-text--orange{color:#ff9800 !important}.mdl-color--orange{background-color:#ff9800 !important}.mdl-color-text--orange-50{color:#fff3e0 !important}.mdl-color--orange-50{background-color:#fff3e0 !important}.mdl-color-text--orange-100{color:#ffe0b2 !important}.mdl-color--orange-100{background-color:#ffe0b2 !important}.mdl-color-text--orange-200{color:#ffcc80 !important}.mdl-color--orange-200{background-color:#ffcc80 !important}.mdl-color-text--orange-300{color:#ffb74d !important}.mdl-color--orange-300{background-color:#ffb74d !important}.mdl-color-text--orange-400{color:#ffa726 !important}.mdl-color--orange-400{background-color:#ffa726 !important}.mdl-color-text--orange-500{color:#ff9800 !important}.mdl-color--orange-500{background-color:#ff9800 !important}.mdl-color-text--orange-600{color:#fb8c00 !important}.mdl-color--orange-600{background-color:#fb8c00 !important}.mdl-color-text--orange-700{color:#f57c00 !important}.mdl-color--orange-700{background-color:#f57c00 !important}.mdl-color-text--orange-800{color:#ef6c00 !important}.mdl-color--orange-800{background-color:#ef6c00 !important}.mdl-color-text--orange-900{color:#e65100 !important}.mdl-color--orange-900{background-color:#e65100 !important}.mdl-color-text--orange-A100{color:#ffd180 !important}.mdl-color--orange-A100{background-color:#ffd180 !important}.mdl-color-text--orange-A200{color:#ffab40 !important}.mdl-color--orange-A200{background-color:#ffab40 !important}.mdl-color-text--orange-A400{color:#ff9100 !important}.mdl-color--orange-A400{background-color:#ff9100 !important}.mdl-color-text--orange-A700{color:#ff6d00 !important}.mdl-color--orange-A700{background-color:#ff6d00 !important}.mdl-color-text--deep-orange{color:#ff5722 !important}.mdl-color--deep-orange{background-color:#ff5722 !important}.mdl-color-text--deep-orange-50{color:#fbe9e7 !important}.mdl-color--deep-orange-50{background-color:#fbe9e7 !important}.mdl-color-text--deep-orange-100{color:#ffccbc !important}.mdl-color--deep-orange-100{background-color:#ffccbc !important}.mdl-color-text--deep-orange-200{color:#ffab91 !important}.mdl-color--deep-orange-200{background-color:#ffab91 !important}.mdl-color-text--deep-orange-300{color:#ff8a65 !important}.mdl-color--deep-orange-300{background-color:#ff8a65 !important}.mdl-color-text--deep-orange-400{color:#ff7043 !important}.mdl-color--deep-orange-400{background-color:#ff7043 !important}.mdl-color-text--deep-orange-500{color:#ff5722 !important}.mdl-color--deep-orange-500{background-color:#ff5722 !important}.mdl-color-text--deep-orange-600{color:#f4511e !important}.mdl-color--deep-orange-600{background-color:#f4511e !important}.mdl-color-text--deep-orange-700{color:#e64a19 !important}.mdl-color--deep-orange-700{background-color:#e64a19 !important}.mdl-color-text--deep-orange-800{color:#d84315 !important}.mdl-color--deep-orange-800{background-color:#d84315 !important}.mdl-color-text--deep-orange-900{color:#bf360c !important}.mdl-color--deep-orange-900{background-color:#bf360c !important}.mdl-color-text--deep-orange-A100{color:#ff9e80 !important}.mdl-color--deep-orange-A100{background-color:#ff9e80 !important}.mdl-color-text--deep-orange-A200{color:#ff6e40 !important}.mdl-color--deep-orange-A200{background-color:#ff6e40 !important}.mdl-color-text--deep-orange-A400{color:#ff3d00 !important}.mdl-color--deep-orange-A400{background-color:#ff3d00 !important}.mdl-color-text--deep-orange-A700{color:#dd2c00 !important}.mdl-color--deep-orange-A700{background-color:#dd2c00 !important}.mdl-color-text--brown{color:#795548 !important}.mdl-color--brown{background-color:#795548 !important}.mdl-color-text--brown-50{color:#efebe9 !important}.mdl-color--brown-50{background-color:#efebe9 !important}.mdl-color-text--brown-100{color:#d7ccc8 !important}.mdl-color--brown-100{background-color:#d7ccc8 !important}.mdl-color-text--brown-200{color:#bcaaa4 !important}.mdl-color--brown-200{background-color:#bcaaa4 !important}.mdl-color-text--brown-300{color:#a1887f !important}.mdl-color--brown-300{background-color:#a1887f !important}.mdl-color-text--brown-400{color:#8d6e63 !important}.mdl-color--brown-400{background-color:#8d6e63 !important}.mdl-color-text--brown-500{color:#795548 !important}.mdl-color--brown-500{background-color:#795548 !important}.mdl-color-text--brown-600{color:#6d4c41 !important}.mdl-color--brown-600{background-color:#6d4c41 !important}.mdl-color-text--brown-700{color:#5d4037 !important}.mdl-color--brown-700{background-color:#5d4037 !important}.mdl-color-text--brown-800{color:#4e342e !important}.mdl-color--brown-800{background-color:#4e342e !important}.mdl-color-text--brown-900{color:#3e2723 !important}.mdl-color--brown-900{background-color:#3e2723 !important}.mdl-color-text--grey{color:#9e9e9e !important}.mdl-color--grey{background-color:#9e9e9e !important}.mdl-color-text--grey-50{color:#fafafa !important}.mdl-color--grey-50{background-color:#fafafa !important}.mdl-color-text--grey-100{color:#f5f5f5 !important}.mdl-color--grey-100{background-color:#f5f5f5 !important}.mdl-color-text--grey-200{color:#eee !important}.mdl-color--grey-200{background-color:#eee !important}.mdl-color-text--grey-300{color:#e0e0e0 !important}.mdl-color--grey-300{background-color:#e0e0e0 !important}.mdl-color-text--grey-400{color:#bdbdbd !important}.mdl-color--grey-400{background-color:#bdbdbd !important}.mdl-color-text--grey-500{color:#9e9e9e !important}.mdl-color--grey-500{background-color:#9e9e9e !important}.mdl-color-text--grey-600{color:#757575 !important}.mdl-color--grey-600{background-color:#757575 !important}.mdl-color-text--grey-700{color:#616161 !important}.mdl-color--grey-700{background-color:#616161 !important}.mdl-color-text--grey-800{color:#424242 !important}.mdl-color--grey-800{background-color:#424242 !important}.mdl-color-text--grey-900{color:#212121 !important}.mdl-color--grey-900{background-color:#212121 !important}.mdl-color-text--blue-grey{color:#607d8b !important}.mdl-color--blue-grey{background-color:#607d8b !important}.mdl-color-text--blue-grey-50{color:#eceff1 !important}.mdl-color--blue-grey-50{background-color:#eceff1 !important}.mdl-color-text--blue-grey-100{color:#cfd8dc !important}.mdl-color--blue-grey-100{background-color:#cfd8dc !important}.mdl-color-text--blue-grey-200{color:#b0bec5 !important}.mdl-color--blue-grey-200{background-color:#b0bec5 !important}.mdl-color-text--blue-grey-300{color:#90a4ae !important}.mdl-color--blue-grey-300{background-color:#90a4ae !important}.mdl-color-text--blue-grey-400{color:#78909c !important}.mdl-color--blue-grey-400{background-color:#78909c !important}.mdl-color-text--blue-grey-500{color:#607d8b !important}.mdl-color--blue-grey-500{background-color:#607d8b !important}.mdl-color-text--blue-grey-600{color:#546e7a !important}.mdl-color--blue-grey-600{background-color:#546e7a !important}.mdl-color-text--blue-grey-700{color:#455a64 !important}.mdl-color--blue-grey-700{background-color:#455a64 !important}.mdl-color-text--blue-grey-800{color:#37474f !important}.mdl-color--blue-grey-800{background-color:#37474f !important}.mdl-color-text--blue-grey-900{color:#263238 !important}.mdl-color--blue-grey-900{background-color:#263238 !important}.mdl-color--black{background-color:#000 !important}.mdl-color-text--black{color:#000 !important}.mdl-color--white{background-color:#fff !important}.mdl-color-text--white{color:#fff !important}.mdl-color--primary{background-color:rgb(96,125,139)!important}.mdl-color--primary-contrast{background-color:rgb(255,255,255)!important}.mdl-color--primary-dark{background-color:rgb(69,90,100)!important}.mdl-color--accent{background-color:rgb(255,110,64)!important}.mdl-color--accent-contrast{background-color:rgb(66,66,66)!important}.mdl-color-text--primary{color:rgb(96,125,139)!important}.mdl-color-text--primary-contrast{color:rgb(255,255,255)!important}.mdl-color-text--primary-dark{color:rgb(69,90,100)!important}.mdl-color-text--accent{color:rgb(255,110,64)!important}.mdl-color-text--accent-contrast{color:rgb(66,66,66)!important}.mdl-ripple{background:#000;border-radius:50%;height:50px;left:0;opacity:0;pointer-events:none;position:absolute;top:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:50px;overflow:hidden}.mdl-ripple.is-animating{transition:transform .3s cubic-bezier(0,0,.2,1),width .3s cubic-bezier(0,0,.2,1),height .3s cubic-bezier(0,0,.2,1),opacity .6s cubic-bezier(0,0,.2,1);transition:transform .3s cubic-bezier(0,0,.2,1),width .3s cubic-bezier(0,0,.2,1),height .3s cubic-bezier(0,0,.2,1),opacity .6s cubic-bezier(0,0,.2,1),-webkit-transform .3s cubic-bezier(0,0,.2,1)}.mdl-ripple.is-visible{opacity:.3}.mdl-animation--default,.mdl-animation--fast-out-slow-in{transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdl-animation--linear-out-slow-in{transition-timing-function:cubic-bezier(0,0,.2,1)}.mdl-animation--fast-out-linear-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.mdl-badge{position:relative;white-space:nowrap;margin-right:24px}.mdl-badge:not([data-badge]){margin-right:auto}.mdl-badge[data-badge]:after{content:attr(data-badge);display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:absolute;top:-11px;right:-24px;font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;font-weight:600;font-size:12px;width:22px;height:22px;border-radius:50%;background:rgb(255,110,64);color:rgb(66,66,66)}.mdl-button .mdl-badge[data-badge]:after{top:-10px;right:-5px}.mdl-badge.mdl-badge--no-background[data-badge]:after{color:rgb(255,110,64);background:rgba(66,66,66,.2);box-shadow:0 0 1px gray}.mdl-badge.mdl-badge--overlap{margin-right:10px}.mdl-badge.mdl-badge--overlap:after{right:-10px}.mdl-button{background:0 0;border:none;border-radius:2px;color:#000;position:relative;height:36px;margin:0;min-width:64px;padding:0 16px;display:inline-block;font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;font-size:14px;font-weight:500;text-transform:uppercase;letter-spacing:0;overflow:hidden;will-change:box-shadow;transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);outline:none;cursor:pointer;text-decoration:none;text-align:center;line-height:36px;vertical-align:middle}.mdl-button::-moz-focus-inner{border:0}.mdl-button:hover{background-color:rgba(158,158,158,.2)}.mdl-button:focus:not(:active){background-color:rgba(0,0,0,.12)}.mdl-button:active{background-color:rgba(158,158,158,.4)}.mdl-button.mdl-button--colored{color:rgb(96,125,139)}.mdl-button.mdl-button--colored:focus:not(:active){background-color:rgba(0,0,0,.12)}input.mdl-button[type=\"submit\"]{-webkit-appearance:none}.mdl-button--raised{background:rgba(158,158,158,.2);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-button--raised:active{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);background-color:rgba(158,158,158,.4)}.mdl-button--raised:focus:not(:active){box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36);background-color:rgba(158,158,158,.4)}.mdl-button--raised.mdl-button--colored{background:rgb(96,125,139);color:rgb(255,255,255)}.mdl-button--raised.mdl-button--colored:hover{background-color:rgb(96,125,139)}.mdl-button--raised.mdl-button--colored:active{background-color:rgb(96,125,139)}.mdl-button--raised.mdl-button--colored:focus:not(:active){background-color:rgb(96,125,139)}.mdl-button--raised.mdl-button--colored .mdl-ripple{background:rgb(255,255,255)}.mdl-button--fab{border-radius:50%;font-size:24px;height:56px;margin:auto;min-width:56px;width:56px;padding:0;overflow:hidden;background:rgba(158,158,158,.2);box-shadow:0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);position:relative;line-height:normal}.mdl-button--fab .material-icons{position:absolute;top:50%;left:50%;-webkit-transform:translate(-12px,-12px);transform:translate(-12px,-12px);line-height:24px;width:24px}.mdl-button--fab.mdl-button--mini-fab{height:40px;min-width:40px;width:40px}.mdl-button--fab .mdl-button__ripple-container{border-radius:50%;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.mdl-button--fab:active{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);background-color:rgba(158,158,158,.4)}.mdl-button--fab:focus:not(:active){box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36);background-color:rgba(158,158,158,.4)}.mdl-button--fab.mdl-button--colored{background:rgb(255,110,64);color:rgb(66,66,66)}.mdl-button--fab.mdl-button--colored:hover{background-color:rgb(255,110,64)}.mdl-button--fab.mdl-button--colored:focus:not(:active){background-color:rgb(255,110,64)}.mdl-button--fab.mdl-button--colored:active{background-color:rgb(255,110,64)}.mdl-button--fab.mdl-button--colored .mdl-ripple{background:rgb(66,66,66)}.mdl-button--icon{border-radius:50%;font-size:24px;height:32px;margin-left:0;margin-right:0;min-width:32px;width:32px;padding:0;overflow:hidden;color:inherit;line-height:normal}.mdl-button--icon .material-icons{position:absolute;top:50%;left:50%;-webkit-transform:translate(-12px,-12px);transform:translate(-12px,-12px);line-height:24px;width:24px}.mdl-button--icon.mdl-button--mini-icon{height:24px;min-width:24px;width:24px}.mdl-button--icon.mdl-button--mini-icon .material-icons{top:0;left:0}.mdl-button--icon .mdl-button__ripple-container{border-radius:50%;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.mdl-button__ripple-container{display:block;height:100%;left:0;position:absolute;top:0;width:100%;z-index:0;overflow:hidden}.mdl-button[disabled] .mdl-button__ripple-container .mdl-ripple,.mdl-button.mdl-button--disabled .mdl-button__ripple-container .mdl-ripple{background-color:transparent}.mdl-button--primary.mdl-button--primary{color:rgb(96,125,139)}.mdl-button--primary.mdl-button--primary .mdl-ripple{background:rgb(255,255,255)}.mdl-button--primary.mdl-button--primary.mdl-button--raised,.mdl-button--primary.mdl-button--primary.mdl-button--fab{color:rgb(255,255,255);background-color:rgb(96,125,139)}.mdl-button--accent.mdl-button--accent{color:rgb(255,110,64)}.mdl-button--accent.mdl-button--accent .mdl-ripple{background:rgb(66,66,66)}.mdl-button--accent.mdl-button--accent.mdl-button--raised,.mdl-button--accent.mdl-button--accent.mdl-button--fab{color:rgb(66,66,66);background-color:rgb(255,110,64)}.mdl-button[disabled][disabled],.mdl-button.mdl-button--disabled.mdl-button--disabled{color:rgba(0,0,0,.26);cursor:default;background-color:transparent}.mdl-button--fab[disabled][disabled],.mdl-button--fab.mdl-button--disabled.mdl-button--disabled{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.26)}.mdl-button--raised[disabled][disabled],.mdl-button--raised.mdl-button--disabled.mdl-button--disabled{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.26);box-shadow:none}.mdl-button--colored[disabled][disabled],.mdl-button--colored.mdl-button--disabled.mdl-button--disabled{color:rgba(0,0,0,.26)}.mdl-button .material-icons{vertical-align:middle}.mdl-card{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:16px;font-weight:400;min-height:200px;overflow:hidden;width:330px;z-index:1;position:relative;background:#fff;border-radius:2px;box-sizing:border-box}.mdl-card__media{background-color:rgb(255,110,64);background-repeat:repeat;background-position:50% 50%;background-size:cover;background-origin:padding-box;background-attachment:scroll;box-sizing:border-box}.mdl-card__title{-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#000;display:block;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;line-height:normal;padding:16px;-webkit-perspective-origin:165px 56px;perspective-origin:165px 56px;-webkit-transform-origin:165px 56px;transform-origin:165px 56px;box-sizing:border-box}.mdl-card__title.mdl-card--border{border-bottom:1px solid rgba(0,0,0,.1)}.mdl-card__title-text{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;color:inherit;display:block;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:24px;font-weight:300;line-height:normal;overflow:hidden;-webkit-transform-origin:149px 48px;transform-origin:149px 48px;margin:0}.mdl-card__subtitle-text{font-size:14px;color:rgba(0,0,0,.54);margin:0}.mdl-card__supporting-text{color:rgba(0,0,0,.54);font-size:1rem;line-height:18px;overflow:hidden;padding:16px;width:90%}.mdl-card__supporting-text.mdl-card--border{border-bottom:1px solid rgba(0,0,0,.1)}.mdl-card__actions{font-size:16px;line-height:normal;width:100%;background-color:transparent;padding:8px;box-sizing:border-box}.mdl-card__actions.mdl-card--border{border-top:1px solid rgba(0,0,0,.1)}.mdl-card--expand{-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.mdl-card__menu{position:absolute;right:16px;top:16px}.mdl-checkbox{position:relative;z-index:1;vertical-align:middle;display:inline-block;box-sizing:border-box;width:100%;height:24px;margin:0;padding:0}.mdl-checkbox.is-upgraded{padding-left:24px}.mdl-checkbox__input{line-height:24px}.mdl-checkbox.is-upgraded .mdl-checkbox__input{position:absolute;width:0;height:0;margin:0;padding:0;opacity:0;-ms-appearance:none;-moz-appearance:none;-webkit-appearance:none;appearance:none;border:none}.mdl-checkbox__box-outline{position:absolute;top:3px;left:0;display:inline-block;box-sizing:border-box;width:16px;height:16px;margin:0;cursor:pointer;overflow:hidden;border:2px solid rgba(0,0,0,.54);border-radius:2px;z-index:2}.mdl-checkbox.is-checked .mdl-checkbox__box-outline{border:2px solid rgb(96,125,139)}fieldset[disabled] .mdl-checkbox .mdl-checkbox__box-outline,.mdl-checkbox.is-disabled .mdl-checkbox__box-outline{border:2px solid rgba(0,0,0,.26);cursor:auto}.mdl-checkbox__focus-helper{position:absolute;top:3px;left:0;display:inline-block;box-sizing:border-box;width:16px;height:16px;border-radius:50%;background-color:transparent}.mdl-checkbox.is-focused .mdl-checkbox__focus-helper{box-shadow:0 0 0 8px rgba(0,0,0,.1);background-color:rgba(0,0,0,.1)}.mdl-checkbox.is-focused.is-checked .mdl-checkbox__focus-helper{box-shadow:0 0 0 8px rgba(96,125,139,.26);background-color:rgba(96,125,139,.26)}.mdl-checkbox__tick-outline{position:absolute;top:0;left:0;height:100%;width:100%;-webkit-mask:url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMCwwIDAsMSAxLDEgMSwwIDAsMCB6IE0gMC44NTM0Mzc1LDAuMTY3MTg3NSAwLjk1OTY4NzUsMC4yNzMxMjUgMC40MjkzNzUsMC44MDM0Mzc1IDAuMzIzMTI1LDAuOTA5Njg3NSAwLjIxNzE4NzUsMC44MDM0Mzc1IDAuMDQwMzEyNSwwLjYyNjg3NSAwLjE0NjU2MjUsMC41MjA2MjUgMC4zMjMxMjUsMC42OTc1IDAuODUzNDM3NSwwLjE2NzE4NzUgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bWFzayBpZD0ibWFzayIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgbWFza0NvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMCAwLDEgMSwxIDEsMCAwLDAgeiBNIDAuODUzNDM3NSwwLjE2NzE4NzUgMC45NTk2ODc1LDAuMjczMTI1IDAuNDI5Mzc1LDAuODAzNDM3NSAwLjMyMzEyNSwwLjkwOTY4NzUgMC4yMTcxODc1LDAuODAzNDM3NSAwLjA0MDMxMjUsMC42MjY4NzUgMC4xNDY1NjI1LDAuNTIwNjI1IDAuMzIzMTI1LDAuNjk3NSAwLjg1MzQzNzUsMC4xNjcxODc1IHoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L21hc2s+CiAgPC9kZWZzPgogIDxyZWN0CiAgICAgd2lkdGg9IjEiCiAgICAgaGVpZ2h0PSIxIgogICAgIHg9IjAiCiAgICAgeT0iMCIKICAgICBjbGlwLXBhdGg9InVybCgjY2xpcCkiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KPC9zdmc+Cg==\");mask:url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMCwwIDAsMSAxLDEgMSwwIDAsMCB6IE0gMC44NTM0Mzc1LDAuMTY3MTg3NSAwLjk1OTY4NzUsMC4yNzMxMjUgMC40MjkzNzUsMC44MDM0Mzc1IDAuMzIzMTI1LDAuOTA5Njg3NSAwLjIxNzE4NzUsMC44MDM0Mzc1IDAuMDQwMzEyNSwwLjYyNjg3NSAwLjE0NjU2MjUsMC41MjA2MjUgMC4zMjMxMjUsMC42OTc1IDAuODUzNDM3NSwwLjE2NzE4NzUgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bWFzayBpZD0ibWFzayIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgbWFza0NvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMCAwLDEgMSwxIDEsMCAwLDAgeiBNIDAuODUzNDM3NSwwLjE2NzE4NzUgMC45NTk2ODc1LDAuMjczMTI1IDAuNDI5Mzc1LDAuODAzNDM3NSAwLjMyMzEyNSwwLjkwOTY4NzUgMC4yMTcxODc1LDAuODAzNDM3NSAwLjA0MDMxMjUsMC42MjY4NzUgMC4xNDY1NjI1LDAuNTIwNjI1IDAuMzIzMTI1LDAuNjk3NSAwLjg1MzQzNzUsMC4xNjcxODc1IHoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L21hc2s+CiAgPC9kZWZzPgogIDxyZWN0CiAgICAgd2lkdGg9IjEiCiAgICAgaGVpZ2h0PSIxIgogICAgIHg9IjAiCiAgICAgeT0iMCIKICAgICBjbGlwLXBhdGg9InVybCgjY2xpcCkiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KPC9zdmc+Cg==\");background:0 0;transition-duration:.28s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-property:background}.mdl-checkbox.is-checked .mdl-checkbox__tick-outline{background:rgb(96,125,139)url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K\")}fieldset[disabled] .mdl-checkbox.is-checked .mdl-checkbox__tick-outline,.mdl-checkbox.is-checked.is-disabled .mdl-checkbox__tick-outline{background:rgba(0,0,0,.26)url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K\")}.mdl-checkbox__label{position:relative;cursor:pointer;font-size:16px;line-height:24px;margin:0}fieldset[disabled] .mdl-checkbox .mdl-checkbox__label,.mdl-checkbox.is-disabled .mdl-checkbox__label{color:rgba(0,0,0,.26);cursor:auto}.mdl-checkbox__ripple-container{position:absolute;z-index:2;top:-6px;left:-10px;box-sizing:border-box;width:36px;height:36px;border-radius:50%;cursor:pointer;overflow:hidden;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.mdl-checkbox__ripple-container .mdl-ripple{background:rgb(96,125,139)}fieldset[disabled] .mdl-checkbox .mdl-checkbox__ripple-container,.mdl-checkbox.is-disabled .mdl-checkbox__ripple-container{cursor:auto}fieldset[disabled] .mdl-checkbox .mdl-checkbox__ripple-container .mdl-ripple,.mdl-checkbox.is-disabled .mdl-checkbox__ripple-container .mdl-ripple{background:0 0}.mdl-chip{height:32px;font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;line-height:32px;padding:0 12px;border:0;border-radius:16px;background-color:#dedede;display:inline-block;color:rgba(0,0,0,.87);margin:2px 0;font-size:0;white-space:nowrap}.mdl-chip__text{font-size:13px;vertical-align:middle;display:inline-block}.mdl-chip__action{height:24px;width:24px;background:0 0;opacity:.54;cursor:pointer;padding:0;margin:0 0 0 4px;font-size:13px;text-decoration:none;color:rgba(0,0,0,.87);border:none;outline:none}.mdl-chip__action,.mdl-chip__contact{display:inline-block;vertical-align:middle;overflow:hidden;text-align:center}.mdl-chip__contact{height:32px;width:32px;border-radius:16px;margin-right:8px;font-size:18px;line-height:32px}.mdl-chip:focus{outline:0;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-chip:active{background-color:#d6d6d6}.mdl-chip--deletable{padding-right:4px}.mdl-chip--contact{padding-left:0}.mdl-data-table{position:relative;border:1px solid rgba(0,0,0,.12);border-collapse:collapse;white-space:nowrap;font-size:13px;background-color:#fff}.mdl-data-table thead{padding-bottom:3px}.mdl-data-table thead .mdl-data-table__select{margin-top:0}.mdl-data-table tbody tr{position:relative;height:48px;transition-duration:.28s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-property:background-color}.mdl-data-table tbody tr.is-selected{background-color:#e0e0e0}.mdl-data-table tbody tr:hover{background-color:#eee}.mdl-data-table td{text-align:right}.mdl-data-table th{padding:0 18px 12px 18px;text-align:right}.mdl-data-table td:first-of-type,.mdl-data-table th:first-of-type{padding-left:24px}.mdl-data-table td:last-of-type,.mdl-data-table th:last-of-type{padding-right:24px}.mdl-data-table td{position:relative;height:48px;border-top:1px solid rgba(0,0,0,.12);border-bottom:1px solid rgba(0,0,0,.12);padding:12px 18px;box-sizing:border-box}.mdl-data-table td,.mdl-data-table td .mdl-data-table__select{vertical-align:middle}.mdl-data-table th{position:relative;vertical-align:bottom;text-overflow:ellipsis;font-weight:700;line-height:24px;letter-spacing:0;height:48px;font-size:12px;color:rgba(0,0,0,.54);padding-bottom:8px;box-sizing:border-box}.mdl-data-table th.mdl-data-table__header--sorted-ascending,.mdl-data-table th.mdl-data-table__header--sorted-descending{color:rgba(0,0,0,.87)}.mdl-data-table th.mdl-data-table__header--sorted-ascending:before,.mdl-data-table th.mdl-data-table__header--sorted-descending:before{font-family:'Material Icons';font-weight:400;font-style:normal;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;word-wrap:normal;-moz-font-feature-settings:'liga';font-feature-settings:'liga';-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased;font-size:16px;content:\"\\E5D8\";margin-right:5px;vertical-align:sub}.mdl-data-table th.mdl-data-table__header--sorted-ascending:hover,.mdl-data-table th.mdl-data-table__header--sorted-descending:hover{cursor:pointer}.mdl-data-table th.mdl-data-table__header--sorted-ascending:hover:before,.mdl-data-table th.mdl-data-table__header--sorted-descending:hover:before{color:rgba(0,0,0,.26)}.mdl-data-table th.mdl-data-table__header--sorted-descending:before{content:\"\\E5DB\"}.mdl-data-table__select{width:16px}.mdl-data-table__cell--non-numeric.mdl-data-table__cell--non-numeric{text-align:left}.mdl-dialog{border:none;box-shadow:0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2);width:280px}.mdl-dialog__title{padding:24px 24px 0;margin:0;font-size:2.5rem}.mdl-dialog__actions{padding:8px 8px 8px 24px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.mdl-dialog__actions>*{margin-right:8px;height:36px}.mdl-dialog__actions>*:first-child{margin-right:0}.mdl-dialog__actions--full-width{padding:0 0 8px}.mdl-dialog__actions--full-width>*{height:48px;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;padding-right:16px;margin-right:0;text-align:right}.mdl-dialog__content{padding:20px 24px 24px;color:rgba(0,0,0,.54)}.mdl-mega-footer{padding:16px 40px;color:#9e9e9e;background-color:#424242}.mdl-mega-footer--top-section:after,.mdl-mega-footer--middle-section:after,.mdl-mega-footer--bottom-section:after,.mdl-mega-footer__top-section:after,.mdl-mega-footer__middle-section:after,.mdl-mega-footer__bottom-section:after{content:'';display:block;clear:both}.mdl-mega-footer--left-section,.mdl-mega-footer__left-section,.mdl-mega-footer--right-section,.mdl-mega-footer__right-section{margin-bottom:16px}.mdl-mega-footer--right-section a,.mdl-mega-footer__right-section a{display:block;margin-bottom:16px;color:inherit;text-decoration:none}@media screen and (min-width:760px){.mdl-mega-footer--left-section,.mdl-mega-footer__left-section{float:left}.mdl-mega-footer--right-section,.mdl-mega-footer__right-section{float:right}.mdl-mega-footer--right-section a,.mdl-mega-footer__right-section a{display:inline-block;margin-left:16px;line-height:36px;vertical-align:middle}}.mdl-mega-footer--social-btn,.mdl-mega-footer__social-btn{width:36px;height:36px;padding:0;margin:0;background-color:#9e9e9e;border:none}.mdl-mega-footer--drop-down-section,.mdl-mega-footer__drop-down-section{display:block;position:relative}@media screen and (min-width:760px){.mdl-mega-footer--drop-down-section,.mdl-mega-footer__drop-down-section{width:33%}.mdl-mega-footer--drop-down-section:nth-child(1),.mdl-mega-footer--drop-down-section:nth-child(2),.mdl-mega-footer__drop-down-section:nth-child(1),.mdl-mega-footer__drop-down-section:nth-child(2){float:left}.mdl-mega-footer--drop-down-section:nth-child(3),.mdl-mega-footer__drop-down-section:nth-child(3){float:right}.mdl-mega-footer--drop-down-section:nth-child(3):after,.mdl-mega-footer__drop-down-section:nth-child(3):after{clear:right}.mdl-mega-footer--drop-down-section:nth-child(4),.mdl-mega-footer__drop-down-section:nth-child(4){clear:right;float:right}.mdl-mega-footer--middle-section:after,.mdl-mega-footer__middle-section:after{content:'';display:block;clear:both}.mdl-mega-footer--bottom-section,.mdl-mega-footer__bottom-section{padding-top:0}}@media screen and (min-width:1024px){.mdl-mega-footer--drop-down-section,.mdl-mega-footer--drop-down-section:nth-child(3),.mdl-mega-footer--drop-down-section:nth-child(4),.mdl-mega-footer__drop-down-section,.mdl-mega-footer__drop-down-section:nth-child(3),.mdl-mega-footer__drop-down-section:nth-child(4){width:24%;float:left}}.mdl-mega-footer--heading-checkbox,.mdl-mega-footer__heading-checkbox{position:absolute;width:100%;height:55.8px;padding:32px;margin:-16px 0 0;cursor:pointer;z-index:1;opacity:0}.mdl-mega-footer--heading-checkbox+.mdl-mega-footer--heading:after,.mdl-mega-footer--heading-checkbox+.mdl-mega-footer__heading:after,.mdl-mega-footer__heading-checkbox+.mdl-mega-footer--heading:after,.mdl-mega-footer__heading-checkbox+.mdl-mega-footer__heading:after{font-family:'Material Icons';content:'\\E5CE'}.mdl-mega-footer--heading-checkbox:checked~.mdl-mega-footer--link-list,.mdl-mega-footer--heading-checkbox:checked~.mdl-mega-footer__link-list,.mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer--heading+.mdl-mega-footer--link-list,.mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer__heading+.mdl-mega-footer__link-list,.mdl-mega-footer__heading-checkbox:checked~.mdl-mega-footer--link-list,.mdl-mega-footer__heading-checkbox:checked~.mdl-mega-footer__link-list,.mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer--heading+.mdl-mega-footer--link-list,.mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer__heading+.mdl-mega-footer__link-list{display:none}.mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer--heading:after,.mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer__heading:after,.mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer--heading:after,.mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer__heading:after{font-family:'Material Icons';content:'\\E5CF'}.mdl-mega-footer--heading,.mdl-mega-footer__heading{position:relative;width:100%;padding-right:39.8px;margin-bottom:16px;box-sizing:border-box;font-size:14px;line-height:23.8px;font-weight:500;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;color:#e0e0e0}.mdl-mega-footer--heading:after,.mdl-mega-footer__heading:after{content:'';position:absolute;top:0;right:0;display:block;width:23.8px;height:23.8px;background-size:cover}.mdl-mega-footer--link-list,.mdl-mega-footer__link-list{list-style:none;padding:0;margin:0 0 32px}.mdl-mega-footer--link-list:after,.mdl-mega-footer__link-list:after{clear:both;display:block;content:''}.mdl-mega-footer--link-list li,.mdl-mega-footer__link-list li{font-size:14px;font-weight:400;letter-spacing:0;line-height:20px}.mdl-mega-footer--link-list a,.mdl-mega-footer__link-list a{color:inherit;text-decoration:none;white-space:nowrap}@media screen and (min-width:760px){.mdl-mega-footer--heading-checkbox,.mdl-mega-footer__heading-checkbox{display:none}.mdl-mega-footer--heading-checkbox+.mdl-mega-footer--heading:after,.mdl-mega-footer--heading-checkbox+.mdl-mega-footer__heading:after,.mdl-mega-footer__heading-checkbox+.mdl-mega-footer--heading:after,.mdl-mega-footer__heading-checkbox+.mdl-mega-footer__heading:after{content:''}.mdl-mega-footer--heading-checkbox:checked~.mdl-mega-footer--link-list,.mdl-mega-footer--heading-checkbox:checked~.mdl-mega-footer__link-list,.mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer__heading+.mdl-mega-footer__link-list,.mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer--heading+.mdl-mega-footer--link-list,.mdl-mega-footer__heading-checkbox:checked~.mdl-mega-footer--link-list,.mdl-mega-footer__heading-checkbox:checked~.mdl-mega-footer__link-list,.mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer__heading+.mdl-mega-footer__link-list,.mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer--heading+.mdl-mega-footer--link-list{display:block}.mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer--heading:after,.mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer__heading:after,.mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer--heading:after,.mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer__heading:after{content:''}}.mdl-mega-footer--bottom-section,.mdl-mega-footer__bottom-section{padding-top:16px;margin-bottom:16px}.mdl-logo{margin-bottom:16px;color:#fff}.mdl-mega-footer--bottom-section .mdl-mega-footer--link-list li,.mdl-mega-footer__bottom-section .mdl-mega-footer__link-list li{float:left;margin-bottom:0;margin-right:16px}@media screen and (min-width:760px){.mdl-logo{float:left;margin-bottom:0;margin-right:16px}}.mdl-mini-footer{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:32px 16px;color:#9e9e9e;background-color:#424242}.mdl-mini-footer:after{content:'';display:block}.mdl-mini-footer .mdl-logo{line-height:36px}.mdl-mini-footer--link-list,.mdl-mini-footer__link-list{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;list-style:none;margin:0;padding:0}.mdl-mini-footer--link-list li,.mdl-mini-footer__link-list li{margin-bottom:0;margin-right:16px}@media screen and (min-width:760px){.mdl-mini-footer--link-list li,.mdl-mini-footer__link-list li{line-height:36px}}.mdl-mini-footer--link-list a,.mdl-mini-footer__link-list a{color:inherit;text-decoration:none;white-space:nowrap}.mdl-mini-footer--left-section,.mdl-mini-footer__left-section{display:inline-block;-webkit-order:0;-ms-flex-order:0;order:0}.mdl-mini-footer--right-section,.mdl-mini-footer__right-section{display:inline-block;-webkit-order:1;-ms-flex-order:1;order:1}.mdl-mini-footer--social-btn,.mdl-mini-footer__social-btn{width:36px;height:36px;padding:0;margin:0;background-color:#9e9e9e;border:none}.mdl-icon-toggle{position:relative;z-index:1;vertical-align:middle;display:inline-block;height:32px;margin:0;padding:0}.mdl-icon-toggle__input{line-height:32px}.mdl-icon-toggle.is-upgraded .mdl-icon-toggle__input{position:absolute;width:0;height:0;margin:0;padding:0;opacity:0;-ms-appearance:none;-moz-appearance:none;-webkit-appearance:none;appearance:none;border:none}.mdl-icon-toggle__label{display:inline-block;position:relative;cursor:pointer;height:32px;width:32px;min-width:32px;color:#616161;border-radius:50%;padding:0;margin-left:0;margin-right:0;text-align:center;background-color:transparent;will-change:background-color;transition:background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1)}.mdl-icon-toggle__label.material-icons{line-height:32px;font-size:24px}.mdl-icon-toggle.is-checked .mdl-icon-toggle__label{color:rgb(96,125,139)}.mdl-icon-toggle.is-disabled .mdl-icon-toggle__label{color:rgba(0,0,0,.26);cursor:auto;transition:none}.mdl-icon-toggle.is-focused .mdl-icon-toggle__label{background-color:rgba(0,0,0,.12)}.mdl-icon-toggle.is-focused.is-checked .mdl-icon-toggle__label{background-color:rgba(96,125,139,.26)}.mdl-icon-toggle__ripple-container{position:absolute;z-index:2;top:-2px;left:-2px;box-sizing:border-box;width:36px;height:36px;border-radius:50%;cursor:pointer;overflow:hidden;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.mdl-icon-toggle__ripple-container .mdl-ripple{background:#616161}.mdl-icon-toggle.is-disabled .mdl-icon-toggle__ripple-container{cursor:auto}.mdl-icon-toggle.is-disabled .mdl-icon-toggle__ripple-container .mdl-ripple{background:0 0}.mdl-list{display:block;padding:8px 0;list-style:none}.mdl-list__item{font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;font-size:16px;font-weight:400;letter-spacing:.04em;line-height:1;min-height:48px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;padding:16px;cursor:default;color:rgba(0,0,0,.87);overflow:hidden}.mdl-list__item,.mdl-list__item .mdl-list__item-primary-content{box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.mdl-list__item .mdl-list__item-primary-content{-webkit-order:0;-ms-flex-order:0;order:0;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2;text-decoration:none}.mdl-list__item .mdl-list__item-primary-content .mdl-list__item-icon{margin-right:32px}.mdl-list__item .mdl-list__item-primary-content .mdl-list__item-avatar{margin-right:16px}.mdl-list__item .mdl-list__item-secondary-content{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;margin-left:16px}.mdl-list__item .mdl-list__item-secondary-content .mdl-list__item-secondary-action label{display:inline}.mdl-list__item .mdl-list__item-secondary-content .mdl-list__item-secondary-info{font-size:12px;font-weight:400;line-height:1;letter-spacing:0;color:rgba(0,0,0,.54)}.mdl-list__item .mdl-list__item-secondary-content .mdl-list__item-sub-header{padding:0 0 0 16px}.mdl-list__item-icon,.mdl-list__item-icon.material-icons{height:24px;width:24px;font-size:24px;box-sizing:border-box;color:#757575}.mdl-list__item-avatar,.mdl-list__item-avatar.material-icons{height:40px;width:40px;box-sizing:border-box;border-radius:50%;background-color:#757575;font-size:40px;color:#fff}.mdl-list__item--two-line{height:72px}.mdl-list__item--two-line .mdl-list__item-primary-content{height:36px;line-height:20px;display:block}.mdl-list__item--two-line .mdl-list__item-primary-content .mdl-list__item-avatar{float:left}.mdl-list__item--two-line .mdl-list__item-primary-content .mdl-list__item-icon{float:left;margin-top:6px}.mdl-list__item--two-line .mdl-list__item-primary-content .mdl-list__item-secondary-content{height:36px}.mdl-list__item--two-line .mdl-list__item-primary-content .mdl-list__item-sub-title{font-size:14px;font-weight:400;letter-spacing:0;line-height:18px;color:rgba(0,0,0,.54);display:block;padding:0}.mdl-list__item--three-line{height:88px}.mdl-list__item--three-line .mdl-list__item-primary-content{height:52px;line-height:20px;display:block}.mdl-list__item--three-line .mdl-list__item-primary-content .mdl-list__item-avatar,.mdl-list__item--three-line .mdl-list__item-primary-content .mdl-list__item-icon{float:left}.mdl-list__item--three-line .mdl-list__item-secondary-content{height:52px}.mdl-list__item--three-line .mdl-list__item-text-body{font-size:14px;font-weight:400;letter-spacing:0;line-height:18px;height:52px;color:rgba(0,0,0,.54);display:block;padding:0}.mdl-menu__container{display:block;margin:0;padding:0;border:none;position:absolute;overflow:visible;height:0;width:0;visibility:hidden;z-index:-1}.mdl-menu__container.is-visible,.mdl-menu__container.is-animating{z-index:999;visibility:visible}.mdl-menu__outline{display:block;background:#fff;margin:0;padding:0;border:none;border-radius:2px;position:absolute;top:0;left:0;overflow:hidden;opacity:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 0;transform-origin:0 0;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);will-change:transform;transition:transform .3s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1);transition:transform .3s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1),-webkit-transform .3s cubic-bezier(.4,0,.2,1);z-index:-1}.mdl-menu__container.is-visible .mdl-menu__outline{opacity:1;-webkit-transform:scale(1);transform:scale(1);z-index:999}.mdl-menu__outline.mdl-menu--bottom-right{-webkit-transform-origin:100% 0;transform-origin:100% 0}.mdl-menu__outline.mdl-menu--top-left{-webkit-transform-origin:0 100%;transform-origin:0 100%}.mdl-menu__outline.mdl-menu--top-right{-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.mdl-menu{position:absolute;list-style:none;top:0;left:0;height:auto;width:auto;min-width:124px;padding:8px 0;margin:0;opacity:0;clip:rect(0 0 0 0);z-index:-1}.mdl-menu__container.is-visible .mdl-menu{opacity:1;z-index:999}.mdl-menu.is-animating{transition:opacity .2s cubic-bezier(.4,0,.2,1),clip .3s cubic-bezier(.4,0,.2,1)}.mdl-menu.mdl-menu--bottom-right{left:auto;right:0}.mdl-menu.mdl-menu--top-left{top:auto;bottom:0}.mdl-menu.mdl-menu--top-right{top:auto;left:auto;bottom:0;right:0}.mdl-menu.mdl-menu--unaligned{top:auto;left:auto}.mdl-menu__item{display:block;border:none;color:rgba(0,0,0,.87);background-color:transparent;text-align:left;margin:0;padding:0 16px;outline-color:#bdbdbd;position:relative;overflow:hidden;font-size:14px;font-weight:400;letter-spacing:0;text-decoration:none;cursor:pointer;height:48px;line-height:48px;white-space:nowrap;opacity:0;transition:opacity .2s cubic-bezier(.4,0,.2,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mdl-menu__container.is-visible .mdl-menu__item{opacity:1}.mdl-menu__item::-moz-focus-inner{border:0}.mdl-menu__item--full-bleed-divider{border-bottom:1px solid rgba(0,0,0,.12)}.mdl-menu__item[disabled],.mdl-menu__item[data-mdl-disabled]{color:#bdbdbd;background-color:transparent;cursor:auto}.mdl-menu__item[disabled]:hover,.mdl-menu__item[data-mdl-disabled]:hover{background-color:transparent}.mdl-menu__item[disabled]:focus,.mdl-menu__item[data-mdl-disabled]:focus{background-color:transparent}.mdl-menu__item[disabled] .mdl-ripple,.mdl-menu__item[data-mdl-disabled] .mdl-ripple{background:0 0}.mdl-menu__item:hover{background-color:#eee}.mdl-menu__item:focus{outline:none;background-color:#eee}.mdl-menu__item:active{background-color:#e0e0e0}.mdl-menu__item--ripple-container{display:block;height:100%;left:0;position:absolute;top:0;width:100%;z-index:0;overflow:hidden}.mdl-progress{display:block;position:relative;height:4px;width:500px;max-width:100%}.mdl-progress>.bar{display:block;position:absolute;top:0;bottom:0;width:0%;transition:width .2s cubic-bezier(.4,0,.2,1)}.mdl-progress>.progressbar{background-color:rgb(96,125,139);z-index:1;left:0}.mdl-progress>.bufferbar{background-image:linear-gradient(to right,rgba(255,255,255,.7),rgba(255,255,255,.7)),linear-gradient(to right,rgb(96,125,139),rgb(96,125,139));z-index:0;left:0}.mdl-progress>.auxbar{right:0}@supports (-webkit-appearance:none){.mdl-progress:not(.mdl-progress--indeterminate):not(.mdl-progress--indeterminate)>.auxbar,.mdl-progress:not(.mdl-progress__indeterminate):not(.mdl-progress__indeterminate)>.auxbar{background-image:linear-gradient(to right,rgba(255,255,255,.7),rgba(255,255,255,.7)),linear-gradient(to right,rgb(96,125,139),rgb(96,125,139));-webkit-mask:url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\");mask:url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\")}}.mdl-progress:not(.mdl-progress--indeterminate)>.auxbar,.mdl-progress:not(.mdl-progress__indeterminate)>.auxbar{background-image:linear-gradient(to right,rgba(255,255,255,.9),rgba(255,255,255,.9)),linear-gradient(to right,rgb(96,125,139),rgb(96,125,139))}.mdl-progress.mdl-progress--indeterminate>.bar1,.mdl-progress.mdl-progress__indeterminate>.bar1{-webkit-animation-name:indeterminate1;animation-name:indeterminate1}.mdl-progress.mdl-progress--indeterminate>.bar1,.mdl-progress.mdl-progress__indeterminate>.bar1,.mdl-progress.mdl-progress--indeterminate>.bar3,.mdl-progress.mdl-progress__indeterminate>.bar3{background-color:rgb(96,125,139);-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}.mdl-progress.mdl-progress--indeterminate>.bar3,.mdl-progress.mdl-progress__indeterminate>.bar3{background-image:none;-webkit-animation-name:indeterminate2;animation-name:indeterminate2}@-webkit-keyframes indeterminate1{0%{left:0%;width:0%}50%{left:25%;width:75%}75%{left:100%;width:0%}}@keyframes indeterminate1{0%{left:0%;width:0%}50%{left:25%;width:75%}75%{left:100%;width:0%}}@-webkit-keyframes indeterminate2{0%,50%{left:0%;width:0%}75%{left:0%;width:25%}100%{left:100%;width:0%}}@keyframes indeterminate2{0%,50%{left:0%;width:0%}75%{left:0%;width:25%}100%{left:100%;width:0%}}.mdl-navigation{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;box-sizing:border-box}.mdl-navigation__link{color:#424242;text-decoration:none;margin:0;font-size:14px;font-weight:400;line-height:24px;letter-spacing:0;opacity:.87}.mdl-navigation__link .material-icons{vertical-align:middle}.mdl-layout{width:100%;height:100%;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow-y:auto;overflow-x:hidden;position:relative;-webkit-overflow-scrolling:touch}.mdl-layout.is-small-screen .mdl-layout--large-screen-only{display:none}.mdl-layout:not(.is-small-screen) .mdl-layout--small-screen-only{display:none}.mdl-layout__container{position:absolute;width:100%;height:100%}.mdl-layout__title,.mdl-layout-title{display:block;position:relative;font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;font-size:20px;line-height:1;letter-spacing:.02em;font-weight:400;box-sizing:border-box}.mdl-layout-spacer{-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.mdl-layout__drawer{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;width:240px;height:100%;max-height:100%;position:absolute;top:0;left:0;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-sizing:border-box;border-right:1px solid #e0e0e0;background:#fafafa;-webkit-transform:translateX(-250px);transform:translateX(-250px);-webkit-transform-style:preserve-3d;transform-style:preserve-3d;will-change:transform;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-property:transform;transition-property:transform,-webkit-transform;color:#424242;overflow:visible;overflow-y:auto;z-index:5}.mdl-layout__drawer.is-visible{-webkit-transform:translateX(0);transform:translateX(0)}.mdl-layout__drawer.is-visible~.mdl-layout__content.mdl-layout__content{overflow:hidden}.mdl-layout__drawer>*{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.mdl-layout__drawer>.mdl-layout__title,.mdl-layout__drawer>.mdl-layout-title{line-height:64px;padding-left:40px}@media screen and (max-width:1024px){.mdl-layout__drawer>.mdl-layout__title,.mdl-layout__drawer>.mdl-layout-title{line-height:56px;padding-left:16px}}.mdl-layout__drawer .mdl-navigation{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;padding-top:16px}.mdl-layout__drawer .mdl-navigation .mdl-navigation__link{display:block;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;padding:16px 40px;margin:0;color:#757575}@media screen and (max-width:1024px){.mdl-layout__drawer .mdl-navigation .mdl-navigation__link{padding:16px}}.mdl-layout__drawer .mdl-navigation .mdl-navigation__link:hover{background-color:#e0e0e0}.mdl-layout__drawer .mdl-navigation .mdl-navigation__link--current{background-color:#e0e0e0;color:#000}@media screen and (min-width:1025px){.mdl-layout--fixed-drawer>.mdl-layout__drawer{-webkit-transform:translateX(0);transform:translateX(0)}}.mdl-layout__drawer-button{display:block;position:absolute;height:48px;width:48px;border:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;overflow:hidden;text-align:center;cursor:pointer;font-size:26px;line-height:56px;font-family:Helvetica,Arial,sans-serif;margin:8px 12px;top:0;left:0;color:rgb(255,255,255);z-index:4}.mdl-layout__header .mdl-layout__drawer-button{position:absolute;color:rgb(255,255,255);background-color:inherit}@media screen and (max-width:1024px){.mdl-layout__header .mdl-layout__drawer-button{margin:4px}}@media screen and (max-width:1024px){.mdl-layout__drawer-button{margin:4px;color:rgba(0,0,0,.5)}}@media screen and (min-width:1025px){.mdl-layout__drawer-button{line-height:54px}.mdl-layout--no-desktop-drawer-button .mdl-layout__drawer-button,.mdl-layout--fixed-drawer>.mdl-layout__drawer-button,.mdl-layout--no-drawer-button .mdl-layout__drawer-button{display:none}}.mdl-layout__header{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;box-sizing:border-box;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:100%;margin:0;padding:0;border:none;min-height:64px;max-height:1000px;z-index:3;background-color:rgb(96,125,139);color:rgb(255,255,255);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-property:max-height,box-shadow}@media screen and (max-width:1024px){.mdl-layout__header{min-height:56px}}.mdl-layout--fixed-drawer.is-upgraded:not(.is-small-screen)>.mdl-layout__header{margin-left:240px;width:calc(100% - 240px)}@media screen and (min-width:1025px){.mdl-layout--fixed-drawer>.mdl-layout__header .mdl-layout__header-row{padding-left:40px}}.mdl-layout__header>.mdl-layout-icon{position:absolute;left:40px;top:16px;height:32px;width:32px;overflow:hidden;z-index:3;display:block}@media screen and (max-width:1024px){.mdl-layout__header>.mdl-layout-icon{left:16px;top:12px}}.mdl-layout.has-drawer .mdl-layout__header>.mdl-layout-icon{display:none}.mdl-layout__header.is-compact{max-height:64px}@media screen and (max-width:1024px){.mdl-layout__header.is-compact{max-height:56px}}.mdl-layout__header.is-compact.has-tabs{height:112px}@media screen and (max-width:1024px){.mdl-layout__header.is-compact.has-tabs{min-height:104px}}@media screen and (max-width:1024px){.mdl-layout__header{display:none}.mdl-layout--fixed-header>.mdl-layout__header{display:-webkit-flex;display:-ms-flexbox;display:flex}}.mdl-layout__header--transparent.mdl-layout__header--transparent{background-color:transparent;box-shadow:none}.mdl-layout__header--seamed,.mdl-layout__header--scroll{box-shadow:none}.mdl-layout__header--waterfall{box-shadow:none;overflow:hidden}.mdl-layout__header--waterfall.is-casting-shadow{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-layout__header--waterfall.mdl-layout__header--waterfall-hide-top{-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.mdl-layout__header-row{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;box-sizing:border-box;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:64px;margin:0;padding:0 40px 0 80px}.mdl-layout--no-drawer-button .mdl-layout__header-row{padding-left:40px}@media screen and (min-width:1025px){.mdl-layout--no-desktop-drawer-button .mdl-layout__header-row{padding-left:40px}}@media screen and (max-width:1024px){.mdl-layout__header-row{height:56px;padding:0 16px 0 72px}.mdl-layout--no-drawer-button .mdl-layout__header-row{padding-left:16px}}.mdl-layout__header-row>*{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.mdl-layout__header--scroll .mdl-layout__header-row{width:100%}.mdl-layout__header-row .mdl-navigation{margin:0;padding:0;height:64px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-ms-flex-align:center;align-items:center}@media screen and (max-width:1024px){.mdl-layout__header-row .mdl-navigation{height:56px}}.mdl-layout__header-row .mdl-navigation__link{display:block;color:rgb(255,255,255);line-height:64px;padding:0 24px}@media screen and (max-width:1024px){.mdl-layout__header-row .mdl-navigation__link{line-height:56px;padding:0 16px}}.mdl-layout__obfuscator{background-color:transparent;position:absolute;top:0;left:0;height:100%;width:100%;z-index:4;visibility:hidden;transition-property:background-color;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdl-layout__obfuscator.is-visible{background-color:rgba(0,0,0,.5);visibility:visible}@supports (pointer-events:auto){.mdl-layout__obfuscator{background-color:rgba(0,0,0,.5);opacity:0;transition-property:opacity;visibility:visible;pointer-events:none}.mdl-layout__obfuscator.is-visible{pointer-events:auto;opacity:1}}.mdl-layout__content{-ms-flex:0 1 auto;position:relative;display:inline-block;overflow-y:auto;overflow-x:hidden;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;z-index:1;-webkit-overflow-scrolling:touch}.mdl-layout--fixed-drawer>.mdl-layout__content{margin-left:240px}.mdl-layout__container.has-scrolling-header .mdl-layout__content{overflow:visible}@media screen and (max-width:1024px){.mdl-layout--fixed-drawer>.mdl-layout__content{margin-left:0}.mdl-layout__container.has-scrolling-header .mdl-layout__content{overflow-y:auto;overflow-x:hidden}}.mdl-layout__tab-bar{height:96px;margin:0;width:calc(100% - 112px);padding:0 0 0 56px;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:rgb(96,125,139);overflow-y:hidden;overflow-x:scroll}.mdl-layout__tab-bar::-webkit-scrollbar{display:none}.mdl-layout--no-drawer-button .mdl-layout__tab-bar{padding-left:16px;width:calc(100% - 32px)}@media screen and (min-width:1025px){.mdl-layout--no-desktop-drawer-button .mdl-layout__tab-bar{padding-left:16px;width:calc(100% - 32px)}}@media screen and (max-width:1024px){.mdl-layout__tab-bar{width:calc(100% - 60px);padding:0 0 0 60px}.mdl-layout--no-drawer-button .mdl-layout__tab-bar{width:calc(100% - 8px);padding-left:4px}}.mdl-layout--fixed-tabs .mdl-layout__tab-bar{padding:0;overflow:hidden;width:100%}.mdl-layout__tab-bar-container{position:relative;height:48px;width:100%;border:none;margin:0;z-index:2;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.mdl-layout__container>.mdl-layout__tab-bar-container{position:absolute;top:0;left:0}.mdl-layout__tab-bar-button{display:inline-block;position:absolute;top:0;height:48px;width:56px;z-index:4;text-align:center;background-color:rgb(96,125,139);color:transparent;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mdl-layout--no-desktop-drawer-button .mdl-layout__tab-bar-button,.mdl-layout--no-drawer-button .mdl-layout__tab-bar-button{width:16px}.mdl-layout--no-desktop-drawer-button .mdl-layout__tab-bar-button .material-icons,.mdl-layout--no-drawer-button .mdl-layout__tab-bar-button .material-icons{position:relative;left:-4px}@media screen and (max-width:1024px){.mdl-layout__tab-bar-button{width:60px}}.mdl-layout--fixed-tabs .mdl-layout__tab-bar-button{display:none}.mdl-layout__tab-bar-button .material-icons{line-height:48px}.mdl-layout__tab-bar-button.is-active{color:rgb(255,255,255)}.mdl-layout__tab-bar-left-button{left:0}.mdl-layout__tab-bar-right-button{right:0}.mdl-layout__tab{margin:0;border:none;padding:0 24px;float:left;position:relative;display:block;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;text-decoration:none;height:48px;line-height:48px;text-align:center;font-weight:500;font-size:14px;text-transform:uppercase;color:rgba(255,255,255,.6);overflow:hidden}@media screen and (max-width:1024px){.mdl-layout__tab{padding:0 12px}}.mdl-layout--fixed-tabs .mdl-layout__tab{float:none;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:0}.mdl-layout.is-upgraded .mdl-layout__tab.is-active{color:rgb(255,255,255)}.mdl-layout.is-upgraded .mdl-layout__tab.is-active::after{height:2px;width:100%;display:block;content:\" \";bottom:0;left:0;position:absolute;background:rgb(255,110,64);-webkit-animation:border-expand .2s cubic-bezier(.4,0,.4,1).01s alternate forwards;animation:border-expand .2s cubic-bezier(.4,0,.4,1).01s alternate forwards;transition:all 1s cubic-bezier(.4,0,1,1)}.mdl-layout__tab .mdl-layout__tab-ripple-container{display:block;position:absolute;height:100%;width:100%;left:0;top:0;z-index:1;overflow:hidden}.mdl-layout__tab .mdl-layout__tab-ripple-container .mdl-ripple{background-color:rgb(255,255,255)}.mdl-layout__tab-panel{display:block}.mdl-layout.is-upgraded .mdl-layout__tab-panel{display:none}.mdl-layout.is-upgraded .mdl-layout__tab-panel.is-active{display:block}.mdl-radio{position:relative;font-size:16px;line-height:24px;display:inline-block;vertical-align:middle;box-sizing:border-box;height:24px;margin:0;padding-left:0}.mdl-radio.is-upgraded{padding-left:24px}.mdl-radio__button{line-height:24px}.mdl-radio.is-upgraded .mdl-radio__button{position:absolute;width:0;height:0;margin:0;padding:0;opacity:0;-ms-appearance:none;-moz-appearance:none;-webkit-appearance:none;appearance:none;border:none}.mdl-radio__outer-circle{position:absolute;top:4px;left:0;display:inline-block;box-sizing:border-box;width:16px;height:16px;margin:0;cursor:pointer;border:2px solid rgba(0,0,0,.54);border-radius:50%;z-index:2}.mdl-radio.is-checked .mdl-radio__outer-circle{border:2px solid rgb(96,125,139)}.mdl-radio__outer-circle fieldset[disabled] .mdl-radio,.mdl-radio.is-disabled .mdl-radio__outer-circle{border:2px solid rgba(0,0,0,.26);cursor:auto}.mdl-radio__inner-circle{position:absolute;z-index:1;margin:0;top:8px;left:4px;box-sizing:border-box;width:8px;height:8px;cursor:pointer;transition-duration:.28s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transform:scale(0,0);transform:scale(0,0);border-radius:50%;background:rgb(96,125,139)}.mdl-radio.is-checked .mdl-radio__inner-circle{-webkit-transform:scale(1,1);transform:scale(1,1)}fieldset[disabled] .mdl-radio .mdl-radio__inner-circle,.mdl-radio.is-disabled .mdl-radio__inner-circle{background:rgba(0,0,0,.26);cursor:auto}.mdl-radio.is-focused .mdl-radio__inner-circle{box-shadow:0 0 0 10px rgba(0,0,0,.1)}.mdl-radio__label{cursor:pointer}fieldset[disabled] .mdl-radio .mdl-radio__label,.mdl-radio.is-disabled .mdl-radio__label{color:rgba(0,0,0,.26);cursor:auto}.mdl-radio__ripple-container{position:absolute;z-index:2;top:-9px;left:-13px;box-sizing:border-box;width:42px;height:42px;border-radius:50%;cursor:pointer;overflow:hidden;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.mdl-radio__ripple-container .mdl-ripple{background:rgb(96,125,139)}fieldset[disabled] .mdl-radio .mdl-radio__ripple-container,.mdl-radio.is-disabled .mdl-radio__ripple-container{cursor:auto}fieldset[disabled] .mdl-radio .mdl-radio__ripple-container .mdl-ripple,.mdl-radio.is-disabled .mdl-radio__ripple-container .mdl-ripple{background:0 0}_:-ms-input-placeholder,:root .mdl-slider.mdl-slider.is-upgraded{-ms-appearance:none;height:32px;margin:0}.mdl-slider{width:calc(100% - 40px);margin:0 20px}.mdl-slider.is-upgraded{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:2px;background:0 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0;padding:0;color:rgb(96,125,139);-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;z-index:1;cursor:pointer}.mdl-slider.is-upgraded::-moz-focus-outer{border:0}.mdl-slider.is-upgraded::-ms-tooltip{display:none}.mdl-slider.is-upgraded::-webkit-slider-runnable-track{background:0 0}.mdl-slider.is-upgraded::-moz-range-track{background:0 0;border:none}.mdl-slider.is-upgraded::-ms-track{background:0 0;color:transparent;height:2px;width:100%;border:none}.mdl-slider.is-upgraded::-ms-fill-lower{padding:0;background:linear-gradient(to right,transparent,transparent 16px,rgb(96,125,139)16px,rgb(96,125,139)0)}.mdl-slider.is-upgraded::-ms-fill-upper{padding:0;background:linear-gradient(to left,transparent,transparent 16px,rgba(0,0,0,.26)16px,rgba(0,0,0,.26)0)}.mdl-slider.is-upgraded::-webkit-slider-thumb{-webkit-appearance:none;width:12px;height:12px;box-sizing:border-box;border-radius:50%;background:rgb(96,125,139);border:none;transition:transform .18s cubic-bezier(.4,0,.2,1),border .18s cubic-bezier(.4,0,.2,1),box-shadow .18s cubic-bezier(.4,0,.2,1),background .28s cubic-bezier(.4,0,.2,1);transition:transform .18s cubic-bezier(.4,0,.2,1),border .18s cubic-bezier(.4,0,.2,1),box-shadow .18s cubic-bezier(.4,0,.2,1),background .28s cubic-bezier(.4,0,.2,1),-webkit-transform .18s cubic-bezier(.4,0,.2,1)}.mdl-slider.is-upgraded::-moz-range-thumb{-moz-appearance:none;width:12px;height:12px;box-sizing:border-box;border-radius:50%;background-image:none;background:rgb(96,125,139);border:none}.mdl-slider.is-upgraded:focus:not(:active)::-webkit-slider-thumb{box-shadow:0 0 0 10px rgba(96,125,139,.26)}.mdl-slider.is-upgraded:focus:not(:active)::-moz-range-thumb{box-shadow:0 0 0 10px rgba(96,125,139,.26)}.mdl-slider.is-upgraded:active::-webkit-slider-thumb{background-image:none;background:rgb(96,125,139);-webkit-transform:scale(1.5);transform:scale(1.5)}.mdl-slider.is-upgraded:active::-moz-range-thumb{background-image:none;background:rgb(96,125,139);transform:scale(1.5)}.mdl-slider.is-upgraded::-ms-thumb{width:32px;height:32px;border:none;border-radius:50%;background:rgb(96,125,139);transform:scale(.375);transition:transform .18s cubic-bezier(.4,0,.2,1),background .28s cubic-bezier(.4,0,.2,1);transition:transform .18s cubic-bezier(.4,0,.2,1),background .28s cubic-bezier(.4,0,.2,1),-webkit-transform .18s cubic-bezier(.4,0,.2,1)}.mdl-slider.is-upgraded:focus:not(:active)::-ms-thumb{background:radial-gradient(circle closest-side,rgb(96,125,139)0%,rgb(96,125,139)37.5%,rgba(96,125,139,.26)37.5%,rgba(96,125,139,.26)100%);transform:scale(1)}.mdl-slider.is-upgraded:active::-ms-thumb{background:rgb(96,125,139);transform:scale(.5625)}.mdl-slider.is-upgraded.is-lowest-value::-webkit-slider-thumb{border:2px solid rgba(0,0,0,.26);background:0 0}.mdl-slider.is-upgraded.is-lowest-value::-moz-range-thumb{border:2px solid rgba(0,0,0,.26);background:0 0}.mdl-slider.is-upgraded.is-lowest-value+.mdl-slider__background-flex>.mdl-slider__background-upper{left:6px}.mdl-slider.is-upgraded.is-lowest-value:focus:not(:active)::-webkit-slider-thumb{box-shadow:0 0 0 10px rgba(0,0,0,.12);background:rgba(0,0,0,.12)}.mdl-slider.is-upgraded.is-lowest-value:focus:not(:active)::-moz-range-thumb{box-shadow:0 0 0 10px rgba(0,0,0,.12);background:rgba(0,0,0,.12)}.mdl-slider.is-upgraded.is-lowest-value:active::-webkit-slider-thumb{border:1.6px solid rgba(0,0,0,.26);-webkit-transform:scale(1.5);transform:scale(1.5)}.mdl-slider.is-upgraded.is-lowest-value:active+.mdl-slider__background-flex>.mdl-slider__background-upper{left:9px}.mdl-slider.is-upgraded.is-lowest-value:active::-moz-range-thumb{border:1.5px solid rgba(0,0,0,.26);transform:scale(1.5)}.mdl-slider.is-upgraded.is-lowest-value::-ms-thumb{background:radial-gradient(circle closest-side,transparent 0%,transparent 66.67%,rgba(0,0,0,.26)66.67%,rgba(0,0,0,.26)100%)}.mdl-slider.is-upgraded.is-lowest-value:focus:not(:active)::-ms-thumb{background:radial-gradient(circle closest-side,rgba(0,0,0,.12)0%,rgba(0,0,0,.12)25%,rgba(0,0,0,.26)25%,rgba(0,0,0,.26)37.5%,rgba(0,0,0,.12)37.5%,rgba(0,0,0,.12)100%);transform:scale(1)}.mdl-slider.is-upgraded.is-lowest-value:active::-ms-thumb{transform:scale(.5625);background:radial-gradient(circle closest-side,transparent 0%,transparent 77.78%,rgba(0,0,0,.26)77.78%,rgba(0,0,0,.26)100%)}.mdl-slider.is-upgraded.is-lowest-value::-ms-fill-lower{background:0 0}.mdl-slider.is-upgraded.is-lowest-value::-ms-fill-upper{margin-left:6px}.mdl-slider.is-upgraded.is-lowest-value:active::-ms-fill-upper{margin-left:9px}.mdl-slider.is-upgraded:disabled:focus::-webkit-slider-thumb,.mdl-slider.is-upgraded:disabled:active::-webkit-slider-thumb,.mdl-slider.is-upgraded:disabled::-webkit-slider-thumb{-webkit-transform:scale(.667);transform:scale(.667);background:rgba(0,0,0,.26)}.mdl-slider.is-upgraded:disabled:focus::-moz-range-thumb,.mdl-slider.is-upgraded:disabled:active::-moz-range-thumb,.mdl-slider.is-upgraded:disabled::-moz-range-thumb{transform:scale(.667);background:rgba(0,0,0,.26)}.mdl-slider.is-upgraded:disabled+.mdl-slider__background-flex>.mdl-slider__background-lower{background-color:rgba(0,0,0,.26);left:-6px}.mdl-slider.is-upgraded:disabled+.mdl-slider__background-flex>.mdl-slider__background-upper{left:6px}.mdl-slider.is-upgraded.is-lowest-value:disabled:focus::-webkit-slider-thumb,.mdl-slider.is-upgraded.is-lowest-value:disabled:active::-webkit-slider-thumb,.mdl-slider.is-upgraded.is-lowest-value:disabled::-webkit-slider-thumb{border:3px solid rgba(0,0,0,.26);background:0 0;-webkit-transform:scale(.667);transform:scale(.667)}.mdl-slider.is-upgraded.is-lowest-value:disabled:focus::-moz-range-thumb,.mdl-slider.is-upgraded.is-lowest-value:disabled:active::-moz-range-thumb,.mdl-slider.is-upgraded.is-lowest-value:disabled::-moz-range-thumb{border:3px solid rgba(0,0,0,.26);background:0 0;transform:scale(.667)}.mdl-slider.is-upgraded.is-lowest-value:disabled:active+.mdl-slider__background-flex>.mdl-slider__background-upper{left:6px}.mdl-slider.is-upgraded:disabled:focus::-ms-thumb,.mdl-slider.is-upgraded:disabled:active::-ms-thumb,.mdl-slider.is-upgraded:disabled::-ms-thumb{transform:scale(.25);background:rgba(0,0,0,.26)}.mdl-slider.is-upgraded.is-lowest-value:disabled:focus::-ms-thumb,.mdl-slider.is-upgraded.is-lowest-value:disabled:active::-ms-thumb,.mdl-slider.is-upgraded.is-lowest-value:disabled::-ms-thumb{transform:scale(.25);background:radial-gradient(circle closest-side,transparent 0%,transparent 50%,rgba(0,0,0,.26)50%,rgba(0,0,0,.26)100%)}.mdl-slider.is-upgraded:disabled::-ms-fill-lower{margin-right:6px;background:linear-gradient(to right,transparent,transparent 25px,rgba(0,0,0,.26)25px,rgba(0,0,0,.26)0)}.mdl-slider.is-upgraded:disabled::-ms-fill-upper{margin-left:6px}.mdl-slider.is-upgraded.is-lowest-value:disabled:active::-ms-fill-upper{margin-left:6px}.mdl-slider__ie-container{height:18px;overflow:visible;border:none;margin:none;padding:none}.mdl-slider__container{height:18px;position:relative;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.mdl-slider__container,.mdl-slider__background-flex{background:0 0;display:-webkit-flex;display:-ms-flexbox;display:flex}.mdl-slider__background-flex{position:absolute;height:2px;width:calc(100% - 52px);top:50%;left:0;margin:0 26px;overflow:hidden;border:0;padding:0;-webkit-transform:translate(0,-1px);transform:translate(0,-1px)}.mdl-slider__background-lower{background:rgb(96,125,139)}.mdl-slider__background-lower,.mdl-slider__background-upper{-webkit-flex:0;-ms-flex:0;flex:0;position:relative;border:0;padding:0}.mdl-slider__background-upper{background:rgba(0,0,0,.26);transition:left .18s cubic-bezier(.4,0,.2,1)}.mdl-snackbar{position:fixed;bottom:0;left:50%;cursor:default;background-color:#323232;z-index:3;display:block;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;will-change:transform;-webkit-transform:translate(0,80px);transform:translate(0,80px);transition:transform .25s cubic-bezier(.4,0,1,1);transition:transform .25s cubic-bezier(.4,0,1,1),-webkit-transform .25s cubic-bezier(.4,0,1,1);pointer-events:none}@media (max-width:479px){.mdl-snackbar{width:100%;left:0;min-height:48px;max-height:80px}}@media (min-width:480px){.mdl-snackbar{min-width:288px;max-width:568px;border-radius:2px;-webkit-transform:translate(-50%,80px);transform:translate(-50%,80px)}}.mdl-snackbar--active{-webkit-transform:translate(0,0);transform:translate(0,0);pointer-events:auto;transition:transform .25s cubic-bezier(0,0,.2,1);transition:transform .25s cubic-bezier(0,0,.2,1),-webkit-transform .25s cubic-bezier(0,0,.2,1)}@media (min-width:480px){.mdl-snackbar--active{-webkit-transform:translate(-50%,0);transform:translate(-50%,0)}}.mdl-snackbar__text{padding:14px 12px 14px 24px;vertical-align:middle;color:#fff;float:left}.mdl-snackbar__action{background:0 0;border:none;color:rgb(255,110,64);float:right;padding:14px 24px 14px 12px;font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;font-size:14px;font-weight:500;text-transform:uppercase;line-height:1;letter-spacing:0;overflow:hidden;outline:none;opacity:0;pointer-events:none;cursor:pointer;text-decoration:none;text-align:center;-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.mdl-snackbar__action::-moz-focus-inner{border:0}.mdl-snackbar__action:not([aria-hidden]){opacity:1;pointer-events:auto}.mdl-spinner{display:inline-block;position:relative;width:28px;height:28px}.mdl-spinner:not(.is-upgraded).is-active:after{content:\"Loading...\"}.mdl-spinner.is-upgraded.is-active{-webkit-animation:mdl-spinner__container-rotate 1568.23529412ms linear infinite;animation:mdl-spinner__container-rotate 1568.23529412ms linear infinite}@-webkit-keyframes mdl-spinner__container-rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes mdl-spinner__container-rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.mdl-spinner__layer{position:absolute;width:100%;height:100%;opacity:0}.mdl-spinner__layer-1{border-color:#42a5f5}.mdl-spinner--single-color .mdl-spinner__layer-1{border-color:rgb(96,125,139)}.mdl-spinner.is-active .mdl-spinner__layer-1{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1)infinite both,mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1)infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1)infinite both,mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1)infinite both}.mdl-spinner__layer-2{border-color:#f44336}.mdl-spinner--single-color .mdl-spinner__layer-2{border-color:rgb(96,125,139)}.mdl-spinner.is-active .mdl-spinner__layer-2{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1)infinite both,mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1)infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1)infinite both,mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1)infinite both}.mdl-spinner__layer-3{border-color:#fdd835}.mdl-spinner--single-color .mdl-spinner__layer-3{border-color:rgb(96,125,139)}.mdl-spinner.is-active .mdl-spinner__layer-3{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1)infinite both,mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1)infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1)infinite both,mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1)infinite both}.mdl-spinner__layer-4{border-color:#4caf50}.mdl-spinner--single-color .mdl-spinner__layer-4{border-color:rgb(96,125,139)}.mdl-spinner.is-active .mdl-spinner__layer-4{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1)infinite both,mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1)infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1)infinite both,mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1)infinite both}@-webkit-keyframes mdl-spinner__fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}@keyframes mdl-spinner__fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}@-webkit-keyframes mdl-spinner__layer-1-fade-in-out{from,25%{opacity:.99}26%,89%{opacity:0}90%,100%{opacity:.99}}@keyframes mdl-spinner__layer-1-fade-in-out{from,25%{opacity:.99}26%,89%{opacity:0}90%,100%{opacity:.99}}@-webkit-keyframes mdl-spinner__layer-2-fade-in-out{from,15%{opacity:0}25%,50%{opacity:.99}51%{opacity:0}}@keyframes mdl-spinner__layer-2-fade-in-out{from,15%{opacity:0}25%,50%{opacity:.99}51%{opacity:0}}@-webkit-keyframes mdl-spinner__layer-3-fade-in-out{from,40%{opacity:0}50%,75%{opacity:.99}76%{opacity:0}}@keyframes mdl-spinner__layer-3-fade-in-out{from,40%{opacity:0}50%,75%{opacity:.99}76%{opacity:0}}@-webkit-keyframes mdl-spinner__layer-4-fade-in-out{from,65%{opacity:0}75%,90%{opacity:.99}100%{opacity:0}}@keyframes mdl-spinner__layer-4-fade-in-out{from,65%{opacity:0}75%,90%{opacity:.99}100%{opacity:0}}.mdl-spinner__gap-patch{position:absolute;box-sizing:border-box;top:0;left:45%;width:10%;height:100%;overflow:hidden;border-color:inherit}.mdl-spinner__gap-patch .mdl-spinner__circle{width:1000%;left:-450%}.mdl-spinner__circle-clipper{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden;border-color:inherit}.mdl-spinner__circle-clipper.mdl-spinner__left{float:left}.mdl-spinner__circle-clipper.mdl-spinner__right{float:right}.mdl-spinner__circle-clipper .mdl-spinner__circle{width:200%}.mdl-spinner__circle{box-sizing:border-box;height:100%;border-width:3px;border-style:solid;border-color:inherit;border-bottom-color:transparent!important;border-radius:50%;-webkit-animation:none;animation:none;position:absolute;top:0;right:0;bottom:0;left:0}.mdl-spinner__left .mdl-spinner__circle{border-right-color:transparent!important;-webkit-transform:rotate(129deg);transform:rotate(129deg)}.mdl-spinner.is-active .mdl-spinner__left .mdl-spinner__circle{-webkit-animation:mdl-spinner__left-spin 1333ms cubic-bezier(.4,0,.2,1)infinite both;animation:mdl-spinner__left-spin 1333ms cubic-bezier(.4,0,.2,1)infinite both}.mdl-spinner__right .mdl-spinner__circle{left:-100%;border-left-color:transparent!important;-webkit-transform:rotate(-129deg);transform:rotate(-129deg)}.mdl-spinner.is-active .mdl-spinner__right .mdl-spinner__circle{-webkit-animation:mdl-spinner__right-spin 1333ms cubic-bezier(.4,0,.2,1)infinite both;animation:mdl-spinner__right-spin 1333ms cubic-bezier(.4,0,.2,1)infinite both}@-webkit-keyframes mdl-spinner__left-spin{from{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}}@keyframes mdl-spinner__left-spin{from{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}}@-webkit-keyframes mdl-spinner__right-spin{from{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}}@keyframes mdl-spinner__right-spin{from{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}}.mdl-switch{position:relative;z-index:1;vertical-align:middle;display:inline-block;box-sizing:border-box;width:100%;height:24px;margin:0;padding:0;overflow:visible;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mdl-switch.is-upgraded{padding-left:28px}.mdl-switch__input{line-height:24px}.mdl-switch.is-upgraded .mdl-switch__input{position:absolute;width:0;height:0;margin:0;padding:0;opacity:0;-ms-appearance:none;-moz-appearance:none;-webkit-appearance:none;appearance:none;border:none}.mdl-switch__track{background:rgba(0,0,0,.26);position:absolute;left:0;top:5px;height:14px;width:36px;border-radius:14px;cursor:pointer}.mdl-switch.is-checked .mdl-switch__track{background:rgba(96,125,139,.5)}.mdl-switch__track fieldset[disabled] .mdl-switch,.mdl-switch.is-disabled .mdl-switch__track{background:rgba(0,0,0,.12);cursor:auto}.mdl-switch__thumb{background:#fafafa;position:absolute;left:0;top:2px;height:20px;width:20px;border-radius:50%;cursor:pointer;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);transition-duration:.28s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-property:left}.mdl-switch.is-checked .mdl-switch__thumb{background:rgb(96,125,139);left:16px;box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.2),0 1px 8px 0 rgba(0,0,0,.12)}.mdl-switch__thumb fieldset[disabled] .mdl-switch,.mdl-switch.is-disabled .mdl-switch__thumb{background:#bdbdbd;cursor:auto}.mdl-switch__focus-helper{position:absolute;top:50%;left:50%;-webkit-transform:translate(-4px,-4px);transform:translate(-4px,-4px);display:inline-block;box-sizing:border-box;width:8px;height:8px;border-radius:50%;background-color:transparent}.mdl-switch.is-focused .mdl-switch__focus-helper{box-shadow:0 0 0 20px rgba(0,0,0,.1);background-color:rgba(0,0,0,.1)}.mdl-switch.is-focused.is-checked .mdl-switch__focus-helper{box-shadow:0 0 0 20px rgba(96,125,139,.26);background-color:rgba(96,125,139,.26)}.mdl-switch__label{position:relative;cursor:pointer;font-size:16px;line-height:24px;margin:0;left:24px}.mdl-switch__label fieldset[disabled] .mdl-switch,.mdl-switch.is-disabled .mdl-switch__label{color:#bdbdbd;cursor:auto}.mdl-switch__ripple-container{position:absolute;z-index:2;top:-12px;left:-14px;box-sizing:border-box;width:48px;height:48px;border-radius:50%;cursor:pointer;overflow:hidden;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000);transition-duration:.4s;transition-timing-function:step-end;transition-property:left}.mdl-switch__ripple-container .mdl-ripple{background:rgb(96,125,139)}.mdl-switch__ripple-container fieldset[disabled] .mdl-switch,.mdl-switch.is-disabled .mdl-switch__ripple-container{cursor:auto}fieldset[disabled] .mdl-switch .mdl-switch__ripple-container .mdl-ripple,.mdl-switch.is-disabled .mdl-switch__ripple-container .mdl-ripple{background:0 0}.mdl-switch.is-checked .mdl-switch__ripple-container{left:2px}.mdl-tabs{display:block;width:100%}.mdl-tabs__tab-bar{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;height:48px;padding:0;margin:0;border-bottom:1px solid #e0e0e0}.mdl-tabs__tab{margin:0;border:none;padding:0 24px;float:left;position:relative;display:block;text-decoration:none;height:48px;line-height:48px;text-align:center;font-weight:500;font-size:14px;text-transform:uppercase;color:rgba(0,0,0,.54);overflow:hidden}.mdl-tabs.is-upgraded .mdl-tabs__tab.is-active{color:rgba(0,0,0,.87)}.mdl-tabs.is-upgraded .mdl-tabs__tab.is-active:after{height:2px;width:100%;display:block;content:\" \";bottom:0;left:0;position:absolute;background:rgb(96,125,139);-webkit-animation:border-expand .2s cubic-bezier(.4,0,.4,1).01s alternate forwards;animation:border-expand .2s cubic-bezier(.4,0,.4,1).01s alternate forwards;transition:all 1s cubic-bezier(.4,0,1,1)}.mdl-tabs__tab .mdl-tabs__ripple-container{display:block;position:absolute;height:100%;width:100%;left:0;top:0;z-index:1;overflow:hidden}.mdl-tabs__tab .mdl-tabs__ripple-container .mdl-ripple{background:rgb(96,125,139)}.mdl-tabs__panel{display:block}.mdl-tabs.is-upgraded .mdl-tabs__panel{display:none}.mdl-tabs.is-upgraded .mdl-tabs__panel.is-active{display:block}@-webkit-keyframes border-expand{0%{opacity:0;width:0}100%{opacity:1;width:100%}}@keyframes border-expand{0%{opacity:0;width:0}100%{opacity:1;width:100%}}.mdl-textfield{position:relative;font-size:16px;display:inline-block;box-sizing:border-box;width:300px;max-width:100%;margin:0;padding:20px 0}.mdl-textfield .mdl-button{position:absolute;bottom:20px}.mdl-textfield--align-right{text-align:right}.mdl-textfield--full-width{width:100%}.mdl-textfield--expandable{min-width:32px;width:auto;min-height:32px}.mdl-textfield--expandable .mdl-button--icon{top:16px}.mdl-textfield__input{border:none;border-bottom:1px solid rgba(0,0,0,.12);display:block;font-size:16px;font-family:\"Helvetica\",\"Arial\",sans-serif;margin:0;padding:4px 0;width:100%;background:0 0;text-align:left;color:inherit}.mdl-textfield__input[type=\"number\"]{-moz-appearance:textfield}.mdl-textfield__input[type=\"number\"]::-webkit-inner-spin-button,.mdl-textfield__input[type=\"number\"]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.mdl-textfield.is-focused .mdl-textfield__input{outline:none}.mdl-textfield.is-invalid .mdl-textfield__input{border-color:#d50000;box-shadow:none}fieldset[disabled] .mdl-textfield .mdl-textfield__input,.mdl-textfield.is-disabled .mdl-textfield__input{background-color:transparent;border-bottom:1px dotted rgba(0,0,0,.12);color:rgba(0,0,0,.26)}.mdl-textfield textarea.mdl-textfield__input{display:block}.mdl-textfield__label{bottom:0;color:rgba(0,0,0,.26);font-size:16px;left:0;right:0;pointer-events:none;position:absolute;display:block;top:24px;width:100%;overflow:hidden;white-space:nowrap;text-align:left}.mdl-textfield.is-dirty .mdl-textfield__label,.mdl-textfield.has-placeholder .mdl-textfield__label{visibility:hidden}.mdl-textfield--floating-label .mdl-textfield__label{transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__label{transition:none}fieldset[disabled] .mdl-textfield .mdl-textfield__label,.mdl-textfield.is-disabled.is-disabled .mdl-textfield__label{color:rgba(0,0,0,.26)}.mdl-textfield--floating-label.is-focused .mdl-textfield__label,.mdl-textfield--floating-label.is-dirty .mdl-textfield__label,.mdl-textfield--floating-label.has-placeholder .mdl-textfield__label{color:rgb(96,125,139);font-size:12px;top:4px;visibility:visible}.mdl-textfield--floating-label.is-focused .mdl-textfield__expandable-holder .mdl-textfield__label,.mdl-textfield--floating-label.is-dirty .mdl-textfield__expandable-holder .mdl-textfield__label,.mdl-textfield--floating-label.has-placeholder .mdl-textfield__expandable-holder .mdl-textfield__label{top:-16px}.mdl-textfield--floating-label.is-invalid .mdl-textfield__label{color:#d50000;font-size:12px}.mdl-textfield__label:after{background-color:rgb(96,125,139);bottom:20px;content:'';height:2px;left:45%;position:absolute;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);visibility:hidden;width:10px}.mdl-textfield.is-focused .mdl-textfield__label:after{left:0;visibility:visible;width:100%}.mdl-textfield.is-invalid .mdl-textfield__label:after{background-color:#d50000}.mdl-textfield__error{color:#d50000;position:absolute;font-size:12px;margin-top:3px;visibility:hidden;display:block}.mdl-textfield.is-invalid .mdl-textfield__error{visibility:visible}.mdl-textfield__expandable-holder{display:inline-block;position:relative;margin-left:32px;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-block;max-width:.1px}.mdl-textfield.is-focused .mdl-textfield__expandable-holder,.mdl-textfield.is-dirty .mdl-textfield__expandable-holder{max-width:600px}.mdl-textfield__expandable-holder .mdl-textfield__label:after{bottom:0}.mdl-tooltip{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:top center;transform-origin:top center;z-index:999;background:rgba(97,97,97,.9);border-radius:2px;color:#fff;display:inline-block;font-size:10px;font-weight:500;line-height:14px;max-width:170px;position:fixed;top:-500px;left:-500px;padding:8px;text-align:center}.mdl-tooltip.is-active{-webkit-animation:pulse 200ms cubic-bezier(0,0,.2,1)forwards;animation:pulse 200ms cubic-bezier(0,0,.2,1)forwards}.mdl-tooltip--large{line-height:14px;font-size:14px;padding:16px}@-webkit-keyframes pulse{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}50%{-webkit-transform:scale(.99);transform:scale(.99)}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1;visibility:visible}}@keyframes pulse{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}50%{-webkit-transform:scale(.99);transform:scale(.99)}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1;visibility:visible}}.mdl-shadow--2dp{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-shadow--3dp{box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.2),0 1px 8px 0 rgba(0,0,0,.12)}.mdl-shadow--4dp{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)}.mdl-shadow--6dp{box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.2)}.mdl-shadow--8dp{box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2)}.mdl-shadow--16dp{box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.2)}.mdl-shadow--24dp{box-shadow:0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2)}.mdl-grid{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;margin:0 auto;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}.mdl-grid.mdl-grid--no-spacing{padding:0}.mdl-cell{box-sizing:border-box}.mdl-cell--top{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start}.mdl-cell--middle{-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.mdl-cell--bottom{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end}.mdl-cell--stretch{-webkit-align-self:stretch;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch}.mdl-grid.mdl-grid--no-spacing>.mdl-cell{margin:0}.mdl-cell--order-1{-webkit-order:1;-ms-flex-order:1;order:1}.mdl-cell--order-2{-webkit-order:2;-ms-flex-order:2;order:2}.mdl-cell--order-3{-webkit-order:3;-ms-flex-order:3;order:3}.mdl-cell--order-4{-webkit-order:4;-ms-flex-order:4;order:4}.mdl-cell--order-5{-webkit-order:5;-ms-flex-order:5;order:5}.mdl-cell--order-6{-webkit-order:6;-ms-flex-order:6;order:6}.mdl-cell--order-7{-webkit-order:7;-ms-flex-order:7;order:7}.mdl-cell--order-8{-webkit-order:8;-ms-flex-order:8;order:8}.mdl-cell--order-9{-webkit-order:9;-ms-flex-order:9;order:9}.mdl-cell--order-10{-webkit-order:10;-ms-flex-order:10;order:10}.mdl-cell--order-11{-webkit-order:11;-ms-flex-order:11;order:11}.mdl-cell--order-12{-webkit-order:12;-ms-flex-order:12;order:12}@media (max-width:479px){.mdl-grid{padding:8px}.mdl-cell{margin:8px;width:calc(100% - 16px)}.mdl-grid--no-spacing>.mdl-cell{width:100%}.mdl-cell--hide-phone{display:none!important}.mdl-cell--order-1-phone.mdl-cell--order-1-phone{-webkit-order:1;-ms-flex-order:1;order:1}.mdl-cell--order-2-phone.mdl-cell--order-2-phone{-webkit-order:2;-ms-flex-order:2;order:2}.mdl-cell--order-3-phone.mdl-cell--order-3-phone{-webkit-order:3;-ms-flex-order:3;order:3}.mdl-cell--order-4-phone.mdl-cell--order-4-phone{-webkit-order:4;-ms-flex-order:4;order:4}.mdl-cell--order-5-phone.mdl-cell--order-5-phone{-webkit-order:5;-ms-flex-order:5;order:5}.mdl-cell--order-6-phone.mdl-cell--order-6-phone{-webkit-order:6;-ms-flex-order:6;order:6}.mdl-cell--order-7-phone.mdl-cell--order-7-phone{-webkit-order:7;-ms-flex-order:7;order:7}.mdl-cell--order-8-phone.mdl-cell--order-8-phone{-webkit-order:8;-ms-flex-order:8;order:8}.mdl-cell--order-9-phone.mdl-cell--order-9-phone{-webkit-order:9;-ms-flex-order:9;order:9}.mdl-cell--order-10-phone.mdl-cell--order-10-phone{-webkit-order:10;-ms-flex-order:10;order:10}.mdl-cell--order-11-phone.mdl-cell--order-11-phone{-webkit-order:11;-ms-flex-order:11;order:11}.mdl-cell--order-12-phone.mdl-cell--order-12-phone{-webkit-order:12;-ms-flex-order:12;order:12}.mdl-cell--1-col,.mdl-cell--1-col-phone.mdl-cell--1-col-phone{width:calc(25% - 16px)}.mdl-grid--no-spacing>.mdl-cell--1-col,.mdl-grid--no-spacing>.mdl-cell--1-col-phone.mdl-cell--1-col-phone{width:25%}.mdl-cell--2-col,.mdl-cell--2-col-phone.mdl-cell--2-col-phone{width:calc(50% - 16px)}.mdl-grid--no-spacing>.mdl-cell--2-col,.mdl-grid--no-spacing>.mdl-cell--2-col-phone.mdl-cell--2-col-phone{width:50%}.mdl-cell--3-col,.mdl-cell--3-col-phone.mdl-cell--3-col-phone{width:calc(75% - 16px)}.mdl-grid--no-spacing>.mdl-cell--3-col,.mdl-grid--no-spacing>.mdl-cell--3-col-phone.mdl-cell--3-col-phone{width:75%}.mdl-cell--4-col,.mdl-cell--4-col-phone.mdl-cell--4-col-phone{width:calc(100% - 16px)}.mdl-grid--no-spacing>.mdl-cell--4-col,.mdl-grid--no-spacing>.mdl-cell--4-col-phone.mdl-cell--4-col-phone{width:100%}.mdl-cell--5-col,.mdl-cell--5-col-phone.mdl-cell--5-col-phone{width:calc(100% - 16px)}.mdl-grid--no-spacing>.mdl-cell--5-col,.mdl-grid--no-spacing>.mdl-cell--5-col-phone.mdl-cell--5-col-phone{width:100%}.mdl-cell--6-col,.mdl-cell--6-col-phone.mdl-cell--6-col-phone{width:calc(100% - 16px)}.mdl-grid--no-spacing>.mdl-cell--6-col,.mdl-grid--no-spacing>.mdl-cell--6-col-phone.mdl-cell--6-col-phone{width:100%}.mdl-cell--7-col,.mdl-cell--7-col-phone.mdl-cell--7-col-phone{width:calc(100% - 16px)}.mdl-grid--no-spacing>.mdl-cell--7-col,.mdl-grid--no-spacing>.mdl-cell--7-col-phone.mdl-cell--7-col-phone{width:100%}.mdl-cell--8-col,.mdl-cell--8-col-phone.mdl-cell--8-col-phone{width:calc(100% - 16px)}.mdl-grid--no-spacing>.mdl-cell--8-col,.mdl-grid--no-spacing>.mdl-cell--8-col-phone.mdl-cell--8-col-phone{width:100%}.mdl-cell--9-col,.mdl-cell--9-col-phone.mdl-cell--9-col-phone{width:calc(100% - 16px)}.mdl-grid--no-spacing>.mdl-cell--9-col,.mdl-grid--no-spacing>.mdl-cell--9-col-phone.mdl-cell--9-col-phone{width:100%}.mdl-cell--10-col,.mdl-cell--10-col-phone.mdl-cell--10-col-phone{width:calc(100% - 16px)}.mdl-grid--no-spacing>.mdl-cell--10-col,.mdl-grid--no-spacing>.mdl-cell--10-col-phone.mdl-cell--10-col-phone{width:100%}.mdl-cell--11-col,.mdl-cell--11-col-phone.mdl-cell--11-col-phone{width:calc(100% - 16px)}.mdl-grid--no-spacing>.mdl-cell--11-col,.mdl-grid--no-spacing>.mdl-cell--11-col-phone.mdl-cell--11-col-phone{width:100%}.mdl-cell--12-col,.mdl-cell--12-col-phone.mdl-cell--12-col-phone{width:calc(100% - 16px)}.mdl-grid--no-spacing>.mdl-cell--12-col,.mdl-grid--no-spacing>.mdl-cell--12-col-phone.mdl-cell--12-col-phone{width:100%}.mdl-cell--1-offset,.mdl-cell--1-offset-phone.mdl-cell--1-offset-phone{margin-left:calc(25% + 8px)}.mdl-grid.mdl-grid--no-spacing>.mdl-cell--1-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--1-offset-phone.mdl-cell--1-offset-phone{margin-left:25%}.mdl-cell--2-offset,.mdl-cell--2-offset-phone.mdl-cell--2-offset-phone{margin-left:calc(50% + 8px)}.mdl-grid.mdl-grid--no-spacing>.mdl-cell--2-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--2-offset-phone.mdl-cell--2-offset-phone{margin-left:50%}.mdl-cell--3-offset,.mdl-cell--3-offset-phone.mdl-cell--3-offset-phone{margin-left:calc(75% + 8px)}.mdl-grid.mdl-grid--no-spacing>.mdl-cell--3-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--3-offset-phone.mdl-cell--3-offset-phone{margin-left:75%}}@media (min-width:480px) and (max-width:839px){.mdl-grid{padding:8px}.mdl-cell{margin:8px;width:calc(50% - 16px)}.mdl-grid--no-spacing>.mdl-cell{width:50%}.mdl-cell--hide-tablet{display:none!important}.mdl-cell--order-1-tablet.mdl-cell--order-1-tablet{-webkit-order:1;-ms-flex-order:1;order:1}.mdl-cell--order-2-tablet.mdl-cell--order-2-tablet{-webkit-order:2;-ms-flex-order:2;order:2}.mdl-cell--order-3-tablet.mdl-cell--order-3-tablet{-webkit-order:3;-ms-flex-order:3;order:3}.mdl-cell--order-4-tablet.mdl-cell--order-4-tablet{-webkit-order:4;-ms-flex-order:4;order:4}.mdl-cell--order-5-tablet.mdl-cell--order-5-tablet{-webkit-order:5;-ms-flex-order:5;order:5}.mdl-cell--order-6-tablet.mdl-cell--order-6-tablet{-webkit-order:6;-ms-flex-order:6;order:6}.mdl-cell--order-7-tablet.mdl-cell--order-7-tablet{-webkit-order:7;-ms-flex-order:7;order:7}.mdl-cell--order-8-tablet.mdl-cell--order-8-tablet{-webkit-order:8;-ms-flex-order:8;order:8}.mdl-cell--order-9-tablet.mdl-cell--order-9-tablet{-webkit-order:9;-ms-flex-order:9;order:9}.mdl-cell--order-10-tablet.mdl-cell--order-10-tablet{-webkit-order:10;-ms-flex-order:10;order:10}.mdl-cell--order-11-tablet.mdl-cell--order-11-tablet{-webkit-order:11;-ms-flex-order:11;order:11}.mdl-cell--order-12-tablet.mdl-cell--order-12-tablet{-webkit-order:12;-ms-flex-order:12;order:12}.mdl-cell--1-col,.mdl-cell--1-col-tablet.mdl-cell--1-col-tablet{width:calc(12.5% - 16px)}.mdl-grid--no-spacing>.mdl-cell--1-col,.mdl-grid--no-spacing>.mdl-cell--1-col-tablet.mdl-cell--1-col-tablet{width:12.5%}.mdl-cell--2-col,.mdl-cell--2-col-tablet.mdl-cell--2-col-tablet{width:calc(25% - 16px)}.mdl-grid--no-spacing>.mdl-cell--2-col,.mdl-grid--no-spacing>.mdl-cell--2-col-tablet.mdl-cell--2-col-tablet{width:25%}.mdl-cell--3-col,.mdl-cell--3-col-tablet.mdl-cell--3-col-tablet{width:calc(37.5% - 16px)}.mdl-grid--no-spacing>.mdl-cell--3-col,.mdl-grid--no-spacing>.mdl-cell--3-col-tablet.mdl-cell--3-col-tablet{width:37.5%}.mdl-cell--4-col,.mdl-cell--4-col-tablet.mdl-cell--4-col-tablet{width:calc(50% - 16px)}.mdl-grid--no-spacing>.mdl-cell--4-col,.mdl-grid--no-spacing>.mdl-cell--4-col-tablet.mdl-cell--4-col-tablet{width:50%}.mdl-cell--5-col,.mdl-cell--5-col-tablet.mdl-cell--5-col-tablet{width:calc(62.5% - 16px)}.mdl-grid--no-spacing>.mdl-cell--5-col,.mdl-grid--no-spacing>.mdl-cell--5-col-tablet.mdl-cell--5-col-tablet{width:62.5%}.mdl-cell--6-col,.mdl-cell--6-col-tablet.mdl-cell--6-col-tablet{width:calc(75% - 16px)}.mdl-grid--no-spacing>.mdl-cell--6-col,.mdl-grid--no-spacing>.mdl-cell--6-col-tablet.mdl-cell--6-col-tablet{width:75%}.mdl-cell--7-col,.mdl-cell--7-col-tablet.mdl-cell--7-col-tablet{width:calc(87.5% - 16px)}.mdl-grid--no-spacing>.mdl-cell--7-col,.mdl-grid--no-spacing>.mdl-cell--7-col-tablet.mdl-cell--7-col-tablet{width:87.5%}.mdl-cell--8-col,.mdl-cell--8-col-tablet.mdl-cell--8-col-tablet{width:calc(100% - 16px)}.mdl-grid--no-spacing>.mdl-cell--8-col,.mdl-grid--no-spacing>.mdl-cell--8-col-tablet.mdl-cell--8-col-tablet{width:100%}.mdl-cell--9-col,.mdl-cell--9-col-tablet.mdl-cell--9-col-tablet{width:calc(100% - 16px)}.mdl-grid--no-spacing>.mdl-cell--9-col,.mdl-grid--no-spacing>.mdl-cell--9-col-tablet.mdl-cell--9-col-tablet{width:100%}.mdl-cell--10-col,.mdl-cell--10-col-tablet.mdl-cell--10-col-tablet{width:calc(100% - 16px)}.mdl-grid--no-spacing>.mdl-cell--10-col,.mdl-grid--no-spacing>.mdl-cell--10-col-tablet.mdl-cell--10-col-tablet{width:100%}.mdl-cell--11-col,.mdl-cell--11-col-tablet.mdl-cell--11-col-tablet{width:calc(100% - 16px)}.mdl-grid--no-spacing>.mdl-cell--11-col,.mdl-grid--no-spacing>.mdl-cell--11-col-tablet.mdl-cell--11-col-tablet{width:100%}.mdl-cell--12-col,.mdl-cell--12-col-tablet.mdl-cell--12-col-tablet{width:calc(100% - 16px)}.mdl-grid--no-spacing>.mdl-cell--12-col,.mdl-grid--no-spacing>.mdl-cell--12-col-tablet.mdl-cell--12-col-tablet{width:100%}.mdl-cell--1-offset,.mdl-cell--1-offset-tablet.mdl-cell--1-offset-tablet{margin-left:calc(12.5% + 8px)}.mdl-grid.mdl-grid--no-spacing>.mdl-cell--1-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--1-offset-tablet.mdl-cell--1-offset-tablet{margin-left:12.5%}.mdl-cell--2-offset,.mdl-cell--2-offset-tablet.mdl-cell--2-offset-tablet{margin-left:calc(25% + 8px)}.mdl-grid.mdl-grid--no-spacing>.mdl-cell--2-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--2-offset-tablet.mdl-cell--2-offset-tablet{margin-left:25%}.mdl-cell--3-offset,.mdl-cell--3-offset-tablet.mdl-cell--3-offset-tablet{margin-left:calc(37.5% + 8px)}.mdl-grid.mdl-grid--no-spacing>.mdl-cell--3-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--3-offset-tablet.mdl-cell--3-offset-tablet{margin-left:37.5%}.mdl-cell--4-offset,.mdl-cell--4-offset-tablet.mdl-cell--4-offset-tablet{margin-left:calc(50% + 8px)}.mdl-grid.mdl-grid--no-spacing>.mdl-cell--4-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--4-offset-tablet.mdl-cell--4-offset-tablet{margin-left:50%}.mdl-cell--5-offset,.mdl-cell--5-offset-tablet.mdl-cell--5-offset-tablet{margin-left:calc(62.5% + 8px)}.mdl-grid.mdl-grid--no-spacing>.mdl-cell--5-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--5-offset-tablet.mdl-cell--5-offset-tablet{margin-left:62.5%}.mdl-cell--6-offset,.mdl-cell--6-offset-tablet.mdl-cell--6-offset-tablet{margin-left:calc(75% + 8px)}.mdl-grid.mdl-grid--no-spacing>.mdl-cell--6-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--6-offset-tablet.mdl-cell--6-offset-tablet{margin-left:75%}.mdl-cell--7-offset,.mdl-cell--7-offset-tablet.mdl-cell--7-offset-tablet{margin-left:calc(87.5% + 8px)}.mdl-grid.mdl-grid--no-spacing>.mdl-cell--7-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--7-offset-tablet.mdl-cell--7-offset-tablet{margin-left:87.5%}}@media (min-width:840px){.mdl-grid{padding:8px}.mdl-cell{margin:8px;width:calc(33.3333333333% - 16px)}.mdl-grid--no-spacing>.mdl-cell{width:33.3333333333%}.mdl-cell--hide-desktop{display:none!important}.mdl-cell--order-1-desktop.mdl-cell--order-1-desktop{-webkit-order:1;-ms-flex-order:1;order:1}.mdl-cell--order-2-desktop.mdl-cell--order-2-desktop{-webkit-order:2;-ms-flex-order:2;order:2}.mdl-cell--order-3-desktop.mdl-cell--order-3-desktop{-webkit-order:3;-ms-flex-order:3;order:3}.mdl-cell--order-4-desktop.mdl-cell--order-4-desktop{-webkit-order:4;-ms-flex-order:4;order:4}.mdl-cell--order-5-desktop.mdl-cell--order-5-desktop{-webkit-order:5;-ms-flex-order:5;order:5}.mdl-cell--order-6-desktop.mdl-cell--order-6-desktop{-webkit-order:6;-ms-flex-order:6;order:6}.mdl-cell--order-7-desktop.mdl-cell--order-7-desktop{-webkit-order:7;-ms-flex-order:7;order:7}.mdl-cell--order-8-desktop.mdl-cell--order-8-desktop{-webkit-order:8;-ms-flex-order:8;order:8}.mdl-cell--order-9-desktop.mdl-cell--order-9-desktop{-webkit-order:9;-ms-flex-order:9;order:9}.mdl-cell--order-10-desktop.mdl-cell--order-10-desktop{-webkit-order:10;-ms-flex-order:10;order:10}.mdl-cell--order-11-desktop.mdl-cell--order-11-desktop{-webkit-order:11;-ms-flex-order:11;order:11}.mdl-cell--order-12-desktop.mdl-cell--order-12-desktop{-webkit-order:12;-ms-flex-order:12;order:12}.mdl-cell--1-col,.mdl-cell--1-col-desktop.mdl-cell--1-col-desktop{width:calc(8.3333333333% - 16px)}.mdl-grid--no-spacing>.mdl-cell--1-col,.mdl-grid--no-spacing>.mdl-cell--1-col-desktop.mdl-cell--1-col-desktop{width:8.3333333333%}.mdl-cell--2-col,.mdl-cell--2-col-desktop.mdl-cell--2-col-desktop{width:calc(16.6666666667% - 16px)}.mdl-grid--no-spacing>.mdl-cell--2-col,.mdl-grid--no-spacing>.mdl-cell--2-col-desktop.mdl-cell--2-col-desktop{width:16.6666666667%}.mdl-cell--3-col,.mdl-cell--3-col-desktop.mdl-cell--3-col-desktop{width:calc(25% - 16px)}.mdl-grid--no-spacing>.mdl-cell--3-col,.mdl-grid--no-spacing>.mdl-cell--3-col-desktop.mdl-cell--3-col-desktop{width:25%}.mdl-cell--4-col,.mdl-cell--4-col-desktop.mdl-cell--4-col-desktop{width:calc(33.3333333333% - 16px)}.mdl-grid--no-spacing>.mdl-cell--4-col,.mdl-grid--no-spacing>.mdl-cell--4-col-desktop.mdl-cell--4-col-desktop{width:33.3333333333%}.mdl-cell--5-col,.mdl-cell--5-col-desktop.mdl-cell--5-col-desktop{width:calc(41.6666666667% - 16px)}.mdl-grid--no-spacing>.mdl-cell--5-col,.mdl-grid--no-spacing>.mdl-cell--5-col-desktop.mdl-cell--5-col-desktop{width:41.6666666667%}.mdl-cell--6-col,.mdl-cell--6-col-desktop.mdl-cell--6-col-desktop{width:calc(50% - 16px)}.mdl-grid--no-spacing>.mdl-cell--6-col,.mdl-grid--no-spacing>.mdl-cell--6-col-desktop.mdl-cell--6-col-desktop{width:50%}.mdl-cell--7-col,.mdl-cell--7-col-desktop.mdl-cell--7-col-desktop{width:calc(58.3333333333% - 16px)}.mdl-grid--no-spacing>.mdl-cell--7-col,.mdl-grid--no-spacing>.mdl-cell--7-col-desktop.mdl-cell--7-col-desktop{width:58.3333333333%}.mdl-cell--8-col,.mdl-cell--8-col-desktop.mdl-cell--8-col-desktop{width:calc(66.6666666667% - 16px)}.mdl-grid--no-spacing>.mdl-cell--8-col,.mdl-grid--no-spacing>.mdl-cell--8-col-desktop.mdl-cell--8-col-desktop{width:66.6666666667%}.mdl-cell--9-col,.mdl-cell--9-col-desktop.mdl-cell--9-col-desktop{width:calc(75% - 16px)}.mdl-grid--no-spacing>.mdl-cell--9-col,.mdl-grid--no-spacing>.mdl-cell--9-col-desktop.mdl-cell--9-col-desktop{width:75%}.mdl-cell--10-col,.mdl-cell--10-col-desktop.mdl-cell--10-col-desktop{width:calc(83.3333333333% - 16px)}.mdl-grid--no-spacing>.mdl-cell--10-col,.mdl-grid--no-spacing>.mdl-cell--10-col-desktop.mdl-cell--10-col-desktop{width:83.3333333333%}.mdl-cell--11-col,.mdl-cell--11-col-desktop.mdl-cell--11-col-desktop{width:calc(91.6666666667% - 16px)}.mdl-grid--no-spacing>.mdl-cell--11-col,.mdl-grid--no-spacing>.mdl-cell--11-col-desktop.mdl-cell--11-col-desktop{width:91.6666666667%}.mdl-cell--12-col,.mdl-cell--12-col-desktop.mdl-cell--12-col-desktop{width:calc(100% - 16px)}.mdl-grid--no-spacing>.mdl-cell--12-col,.mdl-grid--no-spacing>.mdl-cell--12-col-desktop.mdl-cell--12-col-desktop{width:100%}.mdl-cell--1-offset,.mdl-cell--1-offset-desktop.mdl-cell--1-offset-desktop{margin-left:calc(8.3333333333% + 8px)}.mdl-grid.mdl-grid--no-spacing>.mdl-cell--1-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--1-offset-desktop.mdl-cell--1-offset-desktop{margin-left:8.3333333333%}.mdl-cell--2-offset,.mdl-cell--2-offset-desktop.mdl-cell--2-offset-desktop{margin-left:calc(16.6666666667% + 8px)}.mdl-grid.mdl-grid--no-spacing>.mdl-cell--2-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--2-offset-desktop.mdl-cell--2-offset-desktop{margin-left:16.6666666667%}.mdl-cell--3-offset,.mdl-cell--3-offset-desktop.mdl-cell--3-offset-desktop{margin-left:calc(25% + 8px)}.mdl-grid.mdl-grid--no-spacing>.mdl-cell--3-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--3-offset-desktop.mdl-cell--3-offset-desktop{margin-left:25%}.mdl-cell--4-offset,.mdl-cell--4-offset-desktop.mdl-cell--4-offset-desktop{margin-left:calc(33.3333333333% + 8px)}.mdl-grid.mdl-grid--no-spacing>.mdl-cell--4-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--4-offset-desktop.mdl-cell--4-offset-desktop{margin-left:33.3333333333%}.mdl-cell--5-offset,.mdl-cell--5-offset-desktop.mdl-cell--5-offset-desktop{margin-left:calc(41.6666666667% + 8px)}.mdl-grid.mdl-grid--no-spacing>.mdl-cell--5-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--5-offset-desktop.mdl-cell--5-offset-desktop{margin-left:41.6666666667%}.mdl-cell--6-offset,.mdl-cell--6-offset-desktop.mdl-cell--6-offset-desktop{margin-left:calc(50% + 8px)}.mdl-grid.mdl-grid--no-spacing>.mdl-cell--6-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--6-offset-desktop.mdl-cell--6-offset-desktop{margin-left:50%}.mdl-cell--7-offset,.mdl-cell--7-offset-desktop.mdl-cell--7-offset-desktop{margin-left:calc(58.3333333333% + 8px)}.mdl-grid.mdl-grid--no-spacing>.mdl-cell--7-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--7-offset-desktop.mdl-cell--7-offset-desktop{margin-left:58.3333333333%}.mdl-cell--8-offset,.mdl-cell--8-offset-desktop.mdl-cell--8-offset-desktop{margin-left:calc(66.6666666667% + 8px)}.mdl-grid.mdl-grid--no-spacing>.mdl-cell--8-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--8-offset-desktop.mdl-cell--8-offset-desktop{margin-left:66.6666666667%}.mdl-cell--9-offset,.mdl-cell--9-offset-desktop.mdl-cell--9-offset-desktop{margin-left:calc(75% + 8px)}.mdl-grid.mdl-grid--no-spacing>.mdl-cell--9-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--9-offset-desktop.mdl-cell--9-offset-desktop{margin-left:75%}.mdl-cell--10-offset,.mdl-cell--10-offset-desktop.mdl-cell--10-offset-desktop{margin-left:calc(83.3333333333% + 8px)}.mdl-grid.mdl-grid--no-spacing>.mdl-cell--10-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--10-offset-desktop.mdl-cell--10-offset-desktop{margin-left:83.3333333333%}.mdl-cell--11-offset,.mdl-cell--11-offset-desktop.mdl-cell--11-offset-desktop{margin-left:calc(91.6666666667% + 8px)}.mdl-grid.mdl-grid--no-spacing>.mdl-cell--11-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--11-offset-desktop.mdl-cell--11-offset-desktop{margin-left:91.6666666667%}}body{margin:0}.styleguide-demo h1{margin:48px 24px 0}.styleguide-demo h1:after{content:'';display:block;width:100%;border-bottom:1px solid rgba(0,0,0,.5);margin-top:24px}.styleguide-demo{opacity:0;transition:opacity .6s ease}.styleguide-masthead{height:256px;background:#212121;padding:115px 16px 0}.styleguide-container{position:relative;max-width:960px;width:100%}.styleguide-title{color:#fff;bottom:auto;position:relative;font-size:56px;font-weight:300;line-height:1;letter-spacing:-.02em}.styleguide-title:after{border-bottom:0}.styleguide-title span{font-weight:300}.mdl-styleguide .mdl-layout__drawer .mdl-navigation__link{padding:10px 24px}.demosLoaded .styleguide-demo{opacity:1}iframe{display:block;width:100%;border:none}iframe.heightSet{overflow:hidden}.demo-wrapper{margin:24px}.demo-wrapper iframe{border:1px solid rgba(0,0,0,.5)}", ""]);

// exports


/***/ }),
/* 44 */
/***/ (function(module, exports) {

/**
 * material-design-lite - Material Design Components in CSS, JS and HTML
 * @version v1.3.0
 * @license Apache-2.0
 * @copyright 2015 Google, Inc.
 * @link https://github.com/google/material-design-lite
 */
!function(){"use strict";function e(e,t){if(e){if(t.element_.classList.contains(t.CssClasses_.MDL_JS_RIPPLE_EFFECT)){var s=document.createElement("span");s.classList.add(t.CssClasses_.MDL_RIPPLE_CONTAINER),s.classList.add(t.CssClasses_.MDL_JS_RIPPLE_EFFECT);var i=document.createElement("span");i.classList.add(t.CssClasses_.MDL_RIPPLE),s.appendChild(i),e.appendChild(s)}e.addEventListener("click",function(s){if("#"===e.getAttribute("href").charAt(0)){s.preventDefault();var i=e.href.split("#")[1],n=t.element_.querySelector("#"+i);t.resetTabState_(),t.resetPanelState_(),e.classList.add(t.CssClasses_.ACTIVE_CLASS),n.classList.add(t.CssClasses_.ACTIVE_CLASS)}})}}function t(e,t,s,i){function n(){var n=e.href.split("#")[1],a=i.content_.querySelector("#"+n);i.resetTabState_(t),i.resetPanelState_(s),e.classList.add(i.CssClasses_.IS_ACTIVE),a.classList.add(i.CssClasses_.IS_ACTIVE)}if(i.tabBar_.classList.contains(i.CssClasses_.JS_RIPPLE_EFFECT)){var a=document.createElement("span");a.classList.add(i.CssClasses_.RIPPLE_CONTAINER),a.classList.add(i.CssClasses_.JS_RIPPLE_EFFECT);var l=document.createElement("span");l.classList.add(i.CssClasses_.RIPPLE),a.appendChild(l),e.appendChild(a)}i.tabBar_.classList.contains(i.CssClasses_.TAB_MANUAL_SWITCH)||e.addEventListener("click",function(t){"#"===e.getAttribute("href").charAt(0)&&(t.preventDefault(),n())}),e.show=n}var s={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};s=function(){function e(e,t){for(var s=0;s<c.length;s++)if(c[s].className===e)return"undefined"!=typeof t&&(c[s]=t),c[s];return!1}function t(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function s(e,s){var i=t(e);return i.indexOf(s)!==-1}function i(e,t,s){if("CustomEvent"in window&&"function"==typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:s});var i=document.createEvent("Events");return i.initEvent(e,t,s),i}function n(t,s){if("undefined"==typeof t&&"undefined"==typeof s)for(var i=0;i<c.length;i++)n(c[i].className,c[i].cssClass);else{var l=t;if("undefined"==typeof s){var o=e(l);o&&(s=o.cssClass)}for(var r=document.querySelectorAll("."+s),_=0;_<r.length;_++)a(r[_],l)}}function a(n,a){if(!("object"==typeof n&&n instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var l=i("mdl-componentupgrading",!0,!0);if(n.dispatchEvent(l),!l.defaultPrevented){var o=t(n),r=[];if(a)s(n,a)||r.push(e(a));else{var _=n.classList;c.forEach(function(e){_.contains(e.cssClass)&&r.indexOf(e)===-1&&!s(n,e.className)&&r.push(e)})}for(var d,h=0,u=r.length;h<u;h++){if(d=r[h],!d)throw new Error("Unable to find a registered component for the given class.");o.push(d.className),n.setAttribute("data-upgraded",o.join(","));var E=new d.classConstructor(n);E[C]=d,p.push(E);for(var m=0,L=d.callbacks.length;m<L;m++)d.callbacks[m](n);d.widget&&(n[d.className]=E);var I=i("mdl-componentupgraded",!0,!1);n.dispatchEvent(I)}}}function l(e){Array.isArray(e)||(e=e instanceof Element?[e]:Array.prototype.slice.call(e));for(var t,s=0,i=e.length;s<i;s++)t=e[s],t instanceof HTMLElement&&(a(t),t.children.length>0&&l(t.children))}function o(t){var s="undefined"==typeof t.widget&&"undefined"==typeof t.widget,i=!0;s||(i=t.widget||t.widget);var n={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:i,callbacks:[]};if(c.forEach(function(e){if(e.cssClass===n.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===n.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(C))throw new Error("MDL component classes must not have "+C+" defined as a property.");var a=e(t.classAsString,n);a||c.push(n)}function r(t,s){var i=e(t);i&&i.callbacks.push(s)}function _(){for(var e=0;e<c.length;e++)n(c[e].className)}function d(e){if(e){var t=p.indexOf(e);p.splice(t,1);var s=e.element_.getAttribute("data-upgraded").split(","),n=s.indexOf(e[C].classAsString);s.splice(n,1),e.element_.setAttribute("data-upgraded",s.join(","));var a=i("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(a)}}function h(e){var t=function(e){p.filter(function(t){return t.element_===e}).forEach(d)};if(e instanceof Array||e instanceof NodeList)for(var s=0;s<e.length;s++)t(e[s]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");t(e)}}var c=[],p=[],C="mdlComponentConfigInternal_";return{upgradeDom:n,upgradeElement:a,upgradeElements:l,upgradeAllRegistered:_,registerUpgradedCallback:r,register:o,downgradeElements:h}}(),s.ComponentConfigPublic,s.ComponentConfig,s.Component,s.upgradeDom=s.upgradeDom,s.upgradeElement=s.upgradeElement,s.upgradeElements=s.upgradeElements,s.upgradeAllRegistered=s.upgradeAllRegistered,s.registerUpgradedCallback=s.registerUpgradedCallback,s.register=s.register,s.downgradeElements=s.downgradeElements,window.componentHandler=s,window.componentHandler=s,window.addEventListener("load",function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),s.upgradeAllRegistered()):(s.upgradeElement=function(){},s.register=function(){})}),Date.now||(Date.now=function(){return(new Date).getTime()},Date.now=Date.now);for(var i=["webkit","moz"],n=0;n<i.length&&!window.requestAnimationFrame;++n){var a=i[n];window.requestAnimationFrame=window[a+"RequestAnimationFrame"],window.cancelAnimationFrame=window[a+"CancelAnimationFrame"]||window[a+"CancelRequestAnimationFrame"],window.requestAnimationFrame=window.requestAnimationFrame,window.cancelAnimationFrame=window.cancelAnimationFrame}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var l=0;window.requestAnimationFrame=function(e){var t=Date.now(),s=Math.max(l+16,t);return setTimeout(function(){e(l=s)},s-t)},window.cancelAnimationFrame=clearTimeout,window.requestAnimationFrame=window.requestAnimationFrame,window.cancelAnimationFrame=window.cancelAnimationFrame}var o=function(e){this.element_=e,this.init()};window.MaterialButton=o,o.prototype.Constant_={},o.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},o.prototype.blurHandler_=function(e){e&&this.element_.blur()},o.prototype.disable=function(){this.element_.disabled=!0},o.prototype.disable=o.prototype.disable,o.prototype.enable=function(){this.element_.disabled=!1},o.prototype.enable=o.prototype.enable,o.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},s.register({constructor:o,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0});var r=function(e){this.element_=e,this.init()};window.MaterialCheckbox=r,r.prototype.Constant_={TINY_TIMEOUT:.001},r.prototype.CssClasses_={INPUT:"mdl-checkbox__input",BOX_OUTLINE:"mdl-checkbox__box-outline",FOCUS_HELPER:"mdl-checkbox__focus-helper",TICK_OUTLINE:"mdl-checkbox__tick-outline",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-checkbox__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked",IS_UPGRADED:"is-upgraded"},r.prototype.onChange_=function(e){this.updateClasses_()},r.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},r.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},r.prototype.onMouseUp_=function(e){this.blur_()},r.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},r.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},r.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},r.prototype.checkToggleState=r.prototype.checkToggleState,r.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},r.prototype.checkDisabled=r.prototype.checkDisabled,r.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},r.prototype.disable=r.prototype.disable,r.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},r.prototype.enable=r.prototype.enable,r.prototype.check=function(){this.inputElement_.checked=!0,this.updateClasses_()},r.prototype.check=r.prototype.check,r.prototype.uncheck=function(){this.inputElement_.checked=!1,this.updateClasses_()},r.prototype.uncheck=r.prototype.uncheck,r.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT);var e=document.createElement("span");e.classList.add(this.CssClasses_.BOX_OUTLINE);var t=document.createElement("span");t.classList.add(this.CssClasses_.FOCUS_HELPER);var s=document.createElement("span");if(s.classList.add(this.CssClasses_.TICK_OUTLINE),e.appendChild(s),this.element_.appendChild(t),this.element_.appendChild(e),this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.boundRippleMouseUp=this.onMouseUp_.bind(this),this.rippleContainerElement_.addEventListener("mouseup",this.boundRippleMouseUp);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(i),this.element_.appendChild(this.rippleContainerElement_)}this.boundInputOnChange=this.onChange_.bind(this),this.boundInputOnFocus=this.onFocus_.bind(this),this.boundInputOnBlur=this.onBlur_.bind(this),this.boundElementMouseUp=this.onMouseUp_.bind(this),this.inputElement_.addEventListener("change",this.boundInputOnChange),this.inputElement_.addEventListener("focus",this.boundInputOnFocus),this.inputElement_.addEventListener("blur",this.boundInputOnBlur),this.element_.addEventListener("mouseup",this.boundElementMouseUp),this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},s.register({constructor:r,classAsString:"MaterialCheckbox",cssClass:"mdl-js-checkbox",widget:!0});var _=function(e){this.element_=e,this.init()};window.MaterialIconToggle=_,_.prototype.Constant_={TINY_TIMEOUT:.001},_.prototype.CssClasses_={INPUT:"mdl-icon-toggle__input",JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-icon-toggle__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked"},_.prototype.onChange_=function(e){this.updateClasses_()},_.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},_.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},_.prototype.onMouseUp_=function(e){this.blur_()},_.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},_.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},_.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},_.prototype.checkToggleState=_.prototype.checkToggleState,_.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},_.prototype.checkDisabled=_.prototype.checkDisabled,_.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},_.prototype.disable=_.prototype.disable,_.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},_.prototype.enable=_.prototype.enable,_.prototype.check=function(){this.inputElement_.checked=!0,this.updateClasses_()},_.prototype.check=_.prototype.check,_.prototype.uncheck=function(){this.inputElement_.checked=!1,this.updateClasses_()},_.prototype.uncheck=_.prototype.uncheck,_.prototype.init=function(){if(this.element_){if(this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.boundRippleMouseUp=this.onMouseUp_.bind(this),this.rippleContainerElement_.addEventListener("mouseup",this.boundRippleMouseUp);var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(e),this.element_.appendChild(this.rippleContainerElement_)}this.boundInputOnChange=this.onChange_.bind(this),this.boundInputOnFocus=this.onFocus_.bind(this),this.boundInputOnBlur=this.onBlur_.bind(this),this.boundElementOnMouseUp=this.onMouseUp_.bind(this),this.inputElement_.addEventListener("change",this.boundInputOnChange),this.inputElement_.addEventListener("focus",this.boundInputOnFocus),this.inputElement_.addEventListener("blur",this.boundInputOnBlur),this.element_.addEventListener("mouseup",this.boundElementOnMouseUp),this.updateClasses_(),this.element_.classList.add("is-upgraded")}},s.register({constructor:_,classAsString:"MaterialIconToggle",cssClass:"mdl-js-icon-toggle",widget:!0});var d=function(e){this.element_=e,this.init()};window.MaterialMenu=d,d.prototype.Constant_={TRANSITION_DURATION_SECONDS:.3,TRANSITION_DURATION_FRACTION:.8,CLOSE_TIMEOUT:150},d.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32,UP_ARROW:38,DOWN_ARROW:40},d.prototype.CssClasses_={CONTAINER:"mdl-menu__container",OUTLINE:"mdl-menu__outline",ITEM:"mdl-menu__item",ITEM_RIPPLE_CONTAINER:"mdl-menu__item-ripple-container",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_UPGRADED:"is-upgraded",IS_VISIBLE:"is-visible",IS_ANIMATING:"is-animating",BOTTOM_LEFT:"mdl-menu--bottom-left",BOTTOM_RIGHT:"mdl-menu--bottom-right",TOP_LEFT:"mdl-menu--top-left",TOP_RIGHT:"mdl-menu--top-right",UNALIGNED:"mdl-menu--unaligned"},d.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.classList.add(this.CssClasses_.CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_),this.container_=e;var t=document.createElement("div");t.classList.add(this.CssClasses_.OUTLINE),this.outline_=t,e.insertBefore(t,this.element_);var s=this.element_.getAttribute("for")||this.element_.getAttribute("data-mdl-for"),i=null;s&&(i=document.getElementById(s),i&&(this.forElement_=i,i.addEventListener("click",this.handleForClick_.bind(this)),i.addEventListener("keydown",this.handleForKeyboardEvent_.bind(this))));var n=this.element_.querySelectorAll("."+this.CssClasses_.ITEM);this.boundItemKeydown_=this.handleItemKeyboardEvent_.bind(this),this.boundItemClick_=this.handleItemClick_.bind(this);for(var a=0;a<n.length;a++)n[a].addEventListener("click",this.boundItemClick_),n[a].tabIndex="-1",n[a].addEventListener("keydown",this.boundItemKeydown_);if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT))for(this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),a=0;a<n.length;a++){var l=n[a],o=document.createElement("span");o.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);var r=document.createElement("span");r.classList.add(this.CssClasses_.RIPPLE),o.appendChild(r),l.appendChild(o),l.classList.add(this.CssClasses_.RIPPLE_EFFECT)}this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT),this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT),this.element_.classList.contains(this.CssClasses_.TOP_LEFT)&&this.outline_.classList.add(this.CssClasses_.TOP_LEFT),this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)&&this.outline_.classList.add(this.CssClasses_.TOP_RIGHT),this.element_.classList.contains(this.CssClasses_.UNALIGNED)&&this.outline_.classList.add(this.CssClasses_.UNALIGNED),e.classList.add(this.CssClasses_.IS_UPGRADED)}},d.prototype.handleForClick_=function(e){if(this.element_&&this.forElement_){var t=this.forElement_.getBoundingClientRect(),s=this.forElement_.parentElement.getBoundingClientRect();this.element_.classList.contains(this.CssClasses_.UNALIGNED)||(this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?(this.container_.style.right=s.right-t.right+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"):this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.bottom=s.bottom-t.top+"px"):this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(this.container_.style.right=s.right-t.right+"px",this.container_.style.bottom=s.bottom-t.top+"px"):(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"))}this.toggle(e)},d.prototype.handleForKeyboardEvent_=function(e){if(this.element_&&this.container_&&this.forElement_){var t=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");t&&t.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)&&(e.keyCode===this.Keycodes_.UP_ARROW?(e.preventDefault(),t[t.length-1].focus()):e.keyCode===this.Keycodes_.DOWN_ARROW&&(e.preventDefault(),t[0].focus()))}},d.prototype.handleItemKeyboardEvent_=function(e){if(this.element_&&this.container_){var t=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");if(t&&t.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)){var s=Array.prototype.slice.call(t).indexOf(e.target);if(e.keyCode===this.Keycodes_.UP_ARROW)e.preventDefault(),s>0?t[s-1].focus():t[t.length-1].focus();else if(e.keyCode===this.Keycodes_.DOWN_ARROW)e.preventDefault(),t.length>s+1?t[s+1].focus():t[0].focus();else if(e.keyCode===this.Keycodes_.SPACE||e.keyCode===this.Keycodes_.ENTER){e.preventDefault();var i=new MouseEvent("mousedown");e.target.dispatchEvent(i),i=new MouseEvent("mouseup"),e.target.dispatchEvent(i),e.target.click()}else e.keyCode===this.Keycodes_.ESCAPE&&(e.preventDefault(),this.hide())}}},d.prototype.handleItemClick_=function(e){e.target.hasAttribute("disabled")?e.stopPropagation():(this.closing_=!0,window.setTimeout(function(e){this.hide(),this.closing_=!1}.bind(this),this.Constant_.CLOSE_TIMEOUT))},d.prototype.applyClip_=function(e,t){this.element_.classList.contains(this.CssClasses_.UNALIGNED)?this.element_.style.clip="":this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?this.element_.style.clip="rect(0 "+t+"px 0 "+t+"px)":this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?this.element_.style.clip="rect("+e+"px 0 "+e+"px 0)":this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?this.element_.style.clip="rect("+e+"px "+t+"px "+e+"px "+t+"px)":this.element_.style.clip=""},d.prototype.removeAnimationEndListener_=function(e){e.target.classList.remove(d.prototype.CssClasses_.IS_ANIMATING)},d.prototype.addAnimationEndListener_=function(){this.element_.addEventListener("transitionend",this.removeAnimationEndListener_),this.element_.addEventListener("webkitTransitionEnd",this.removeAnimationEndListener_)},d.prototype.show=function(e){if(this.element_&&this.container_&&this.outline_){var t=this.element_.getBoundingClientRect().height,s=this.element_.getBoundingClientRect().width;this.container_.style.width=s+"px",this.container_.style.height=t+"px",this.outline_.style.width=s+"px",this.outline_.style.height=t+"px";for(var i=this.Constant_.TRANSITION_DURATION_SECONDS*this.Constant_.TRANSITION_DURATION_FRACTION,n=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),a=0;a<n.length;a++){var l=null;l=this.element_.classList.contains(this.CssClasses_.TOP_LEFT)||this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(t-n[a].offsetTop-n[a].offsetHeight)/t*i+"s":n[a].offsetTop/t*i+"s",n[a].style.transitionDelay=l}this.applyClip_(t,s),window.requestAnimationFrame(function(){this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.element_.style.clip="rect(0 "+s+"px "+t+"px 0)",this.container_.classList.add(this.CssClasses_.IS_VISIBLE)}.bind(this)),this.addAnimationEndListener_();var o=function(t){t===e||this.closing_||t.target.parentNode===this.element_||(document.removeEventListener("click",o),this.hide())}.bind(this);document.addEventListener("click",o)}},d.prototype.show=d.prototype.show,d.prototype.hide=function(){if(this.element_&&this.container_&&this.outline_){for(var e=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),t=0;t<e.length;t++)e[t].style.removeProperty("transition-delay");var s=this.element_.getBoundingClientRect(),i=s.height,n=s.width;this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.applyClip_(i,n),this.container_.classList.remove(this.CssClasses_.IS_VISIBLE),this.addAnimationEndListener_()}},d.prototype.hide=d.prototype.hide,d.prototype.toggle=function(e){this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)?this.hide():this.show(e)},d.prototype.toggle=d.prototype.toggle,s.register({constructor:d,classAsString:"MaterialMenu",cssClass:"mdl-js-menu",widget:!0});var h=function(e){this.element_=e,this.init()};window.MaterialProgress=h,h.prototype.Constant_={},h.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},h.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},h.prototype.setProgress=h.prototype.setProgress,h.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},h.prototype.setBuffer=h.prototype.setBuffer,h.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,e=document.createElement("div"),e.className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,e=document.createElement("div"),e.className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},s.register({constructor:h,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0});var c=function(e){this.element_=e,this.init()};window.MaterialRadio=c,c.prototype.Constant_={TINY_TIMEOUT:.001},c.prototype.CssClasses_={IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked",IS_UPGRADED:"is-upgraded",JS_RADIO:"mdl-js-radio",RADIO_BTN:"mdl-radio__button",RADIO_OUTER_CIRCLE:"mdl-radio__outer-circle",RADIO_INNER_CIRCLE:"mdl-radio__inner-circle",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-radio__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple"},c.prototype.onChange_=function(e){for(var t=document.getElementsByClassName(this.CssClasses_.JS_RADIO),s=0;s<t.length;s++){var i=t[s].querySelector("."+this.CssClasses_.RADIO_BTN);i.getAttribute("name")===this.btnElement_.getAttribute("name")&&"undefined"!=typeof t[s].MaterialRadio&&t[s].MaterialRadio.updateClasses_()}},c.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},c.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},c.prototype.onMouseup_=function(e){this.blur_()},c.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},c.prototype.blur_=function(){window.setTimeout(function(){this.btnElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},c.prototype.checkDisabled=function(){this.btnElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},c.prototype.checkDisabled=c.prototype.checkDisabled,c.prototype.checkToggleState=function(){this.btnElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},c.prototype.checkToggleState=c.prototype.checkToggleState,c.prototype.disable=function(){this.btnElement_.disabled=!0,this.updateClasses_()},c.prototype.disable=c.prototype.disable,c.prototype.enable=function(){this.btnElement_.disabled=!1,this.updateClasses_()},c.prototype.enable=c.prototype.enable,c.prototype.check=function(){this.btnElement_.checked=!0,this.onChange_(null)},c.prototype.check=c.prototype.check,c.prototype.uncheck=function(){this.btnElement_.checked=!1,this.onChange_(null)},c.prototype.uncheck=c.prototype.uncheck,c.prototype.init=function(){if(this.element_){this.btnElement_=this.element_.querySelector("."+this.CssClasses_.RADIO_BTN),this.boundChangeHandler_=this.onChange_.bind(this),this.boundFocusHandler_=this.onChange_.bind(this),this.boundBlurHandler_=this.onBlur_.bind(this),this.boundMouseUpHandler_=this.onMouseup_.bind(this);var e=document.createElement("span");e.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);var t=document.createElement("span");t.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE),this.element_.appendChild(e),this.element_.appendChild(t);var s;if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),s=document.createElement("span"),s.classList.add(this.CssClasses_.RIPPLE_CONTAINER),s.classList.add(this.CssClasses_.RIPPLE_EFFECT),s.classList.add(this.CssClasses_.RIPPLE_CENTER),s.addEventListener("mouseup",this.boundMouseUpHandler_);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),s.appendChild(i),this.element_.appendChild(s)}this.btnElement_.addEventListener("change",this.boundChangeHandler_),this.btnElement_.addEventListener("focus",this.boundFocusHandler_),this.btnElement_.addEventListener("blur",this.boundBlurHandler_),this.element_.addEventListener("mouseup",this.boundMouseUpHandler_),this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},s.register({constructor:c,classAsString:"MaterialRadio",cssClass:"mdl-js-radio",widget:!0});var p=function(e){this.element_=e,this.isIE_=window.navigator.msPointerEnabled,this.init()};window.MaterialSlider=p,p.prototype.Constant_={},p.prototype.CssClasses_={IE_CONTAINER:"mdl-slider__ie-container",SLIDER_CONTAINER:"mdl-slider__container",BACKGROUND_FLEX:"mdl-slider__background-flex",BACKGROUND_LOWER:"mdl-slider__background-lower",BACKGROUND_UPPER:"mdl-slider__background-upper",IS_LOWEST_VALUE:"is-lowest-value",IS_UPGRADED:"is-upgraded"},p.prototype.onInput_=function(e){this.updateValueStyles_()},p.prototype.onChange_=function(e){this.updateValueStyles_()},p.prototype.onMouseUp_=function(e){e.target.blur()},p.prototype.onContainerMouseDown_=function(e){if(e.target===this.element_.parentElement){e.preventDefault();var t=new MouseEvent("mousedown",{target:e.target,buttons:e.buttons,clientX:e.clientX,clientY:this.element_.getBoundingClientRect().y});this.element_.dispatchEvent(t)}},p.prototype.updateValueStyles_=function(){var e=(this.element_.value-this.element_.min)/(this.element_.max-this.element_.min);0===e?this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE):this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE),this.isIE_||(this.backgroundLower_.style.flex=e,this.backgroundLower_.style.webkitFlex=e,this.backgroundUpper_.style.flex=1-e,this.backgroundUpper_.style.webkitFlex=1-e)},p.prototype.disable=function(){this.element_.disabled=!0},p.prototype.disable=p.prototype.disable,p.prototype.enable=function(){this.element_.disabled=!1},p.prototype.enable=p.prototype.enable,p.prototype.change=function(e){"undefined"!=typeof e&&(this.element_.value=e),this.updateValueStyles_()},p.prototype.change=p.prototype.change,p.prototype.init=function(){if(this.element_){if(this.isIE_){var e=document.createElement("div");e.classList.add(this.CssClasses_.IE_CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_)}else{var t=document.createElement("div");t.classList.add(this.CssClasses_.SLIDER_CONTAINER),this.element_.parentElement.insertBefore(t,this.element_),this.element_.parentElement.removeChild(this.element_),t.appendChild(this.element_);var s=document.createElement("div");s.classList.add(this.CssClasses_.BACKGROUND_FLEX),t.appendChild(s),this.backgroundLower_=document.createElement("div"),this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER),s.appendChild(this.backgroundLower_),this.backgroundUpper_=document.createElement("div"),this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER),s.appendChild(this.backgroundUpper_)}this.boundInputHandler=this.onInput_.bind(this),this.boundChangeHandler=this.onChange_.bind(this),this.boundMouseUpHandler=this.onMouseUp_.bind(this),this.boundContainerMouseDownHandler=this.onContainerMouseDown_.bind(this),this.element_.addEventListener("input",this.boundInputHandler),this.element_.addEventListener("change",this.boundChangeHandler),this.element_.addEventListener("mouseup",this.boundMouseUpHandler),this.element_.parentElement.addEventListener("mousedown",this.boundContainerMouseDownHandler),this.updateValueStyles_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},s.register({constructor:p,classAsString:"MaterialSlider",cssClass:"mdl-js-slider",widget:!0});var C=function(e){if(this.element_=e,this.textElement_=this.element_.querySelector("."+this.cssClasses_.MESSAGE),this.actionElement_=this.element_.querySelector("."+this.cssClasses_.ACTION),!this.textElement_)throw new Error("There must be a message element for a snackbar.");if(!this.actionElement_)throw new Error("There must be an action element for a snackbar.");this.active=!1,this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.queuedNotifications_=[],this.setActionHidden_(!0)};window.MaterialSnackbar=C,C.prototype.Constant_={ANIMATION_LENGTH:250},C.prototype.cssClasses_={SNACKBAR:"mdl-snackbar",MESSAGE:"mdl-snackbar__text",ACTION:"mdl-snackbar__action",ACTIVE:"mdl-snackbar--active"},C.prototype.displaySnackbar_=function(){this.element_.setAttribute("aria-hidden","true"),
this.actionHandler_&&(this.actionElement_.textContent=this.actionText_,this.actionElement_.addEventListener("click",this.actionHandler_),this.setActionHidden_(!1)),this.textElement_.textContent=this.message_,this.element_.classList.add(this.cssClasses_.ACTIVE),this.element_.setAttribute("aria-hidden","false"),setTimeout(this.cleanup_.bind(this),this.timeout_)},C.prototype.showSnackbar=function(e){if(void 0===e)throw new Error("Please provide a data object with at least a message to display.");if(void 0===e.message)throw new Error("Please provide a message to be displayed.");if(e.actionHandler&&!e.actionText)throw new Error("Please provide action text with the handler.");this.active?this.queuedNotifications_.push(e):(this.active=!0,this.message_=e.message,e.timeout?this.timeout_=e.timeout:this.timeout_=2750,e.actionHandler&&(this.actionHandler_=e.actionHandler),e.actionText&&(this.actionText_=e.actionText),this.displaySnackbar_())},C.prototype.showSnackbar=C.prototype.showSnackbar,C.prototype.checkQueue_=function(){this.queuedNotifications_.length>0&&this.showSnackbar(this.queuedNotifications_.shift())},C.prototype.cleanup_=function(){this.element_.classList.remove(this.cssClasses_.ACTIVE),setTimeout(function(){this.element_.setAttribute("aria-hidden","true"),this.textElement_.textContent="",Boolean(this.actionElement_.getAttribute("aria-hidden"))||(this.setActionHidden_(!0),this.actionElement_.textContent="",this.actionElement_.removeEventListener("click",this.actionHandler_)),this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.active=!1,this.checkQueue_()}.bind(this),this.Constant_.ANIMATION_LENGTH)},C.prototype.setActionHidden_=function(e){e?this.actionElement_.setAttribute("aria-hidden","true"):this.actionElement_.removeAttribute("aria-hidden")},s.register({constructor:C,classAsString:"MaterialSnackbar",cssClass:"mdl-js-snackbar",widget:!0});var u=function(e){this.element_=e,this.init()};window.MaterialSpinner=u,u.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},u.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},u.prototype.createLayer=function(e){var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var s=document.createElement("div");s.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),s.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var i=document.createElement("div");i.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),n.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var a=[s,i,n],l=0;l<a.length;l++){var o=document.createElement("div");o.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),a[l].appendChild(o)}t.appendChild(s),t.appendChild(i),t.appendChild(n),this.element_.appendChild(t)},u.prototype.createLayer=u.prototype.createLayer,u.prototype.stop=function(){this.element_.classList.remove("is-active")},u.prototype.stop=u.prototype.stop,u.prototype.start=function(){this.element_.classList.add("is-active")},u.prototype.start=u.prototype.start,u.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},s.register({constructor:u,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0});var E=function(e){this.element_=e,this.init()};window.MaterialSwitch=E,E.prototype.Constant_={TINY_TIMEOUT:.001},E.prototype.CssClasses_={INPUT:"mdl-switch__input",TRACK:"mdl-switch__track",THUMB:"mdl-switch__thumb",FOCUS_HELPER:"mdl-switch__focus-helper",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-switch__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked"},E.prototype.onChange_=function(e){this.updateClasses_()},E.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},E.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},E.prototype.onMouseUp_=function(e){this.blur_()},E.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},E.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},E.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},E.prototype.checkDisabled=E.prototype.checkDisabled,E.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},E.prototype.checkToggleState=E.prototype.checkToggleState,E.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},E.prototype.disable=E.prototype.disable,E.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},E.prototype.enable=E.prototype.enable,E.prototype.on=function(){this.inputElement_.checked=!0,this.updateClasses_()},E.prototype.on=E.prototype.on,E.prototype.off=function(){this.inputElement_.checked=!1,this.updateClasses_()},E.prototype.off=E.prototype.off,E.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT);var e=document.createElement("div");e.classList.add(this.CssClasses_.TRACK);var t=document.createElement("div");t.classList.add(this.CssClasses_.THUMB);var s=document.createElement("span");if(s.classList.add(this.CssClasses_.FOCUS_HELPER),t.appendChild(s),this.element_.appendChild(e),this.element_.appendChild(t),this.boundMouseUpHandler=this.onMouseUp_.bind(this),this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.rippleContainerElement_.addEventListener("mouseup",this.boundMouseUpHandler);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(i),this.element_.appendChild(this.rippleContainerElement_)}this.boundChangeHandler=this.onChange_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.inputElement_.addEventListener("change",this.boundChangeHandler),this.inputElement_.addEventListener("focus",this.boundFocusHandler),this.inputElement_.addEventListener("blur",this.boundBlurHandler),this.element_.addEventListener("mouseup",this.boundMouseUpHandler),this.updateClasses_(),this.element_.classList.add("is-upgraded")}},s.register({constructor:E,classAsString:"MaterialSwitch",cssClass:"mdl-js-switch",widget:!0});var m=function(e){this.element_=e,this.init()};window.MaterialTabs=m,m.prototype.Constant_={},m.prototype.CssClasses_={TAB_CLASS:"mdl-tabs__tab",PANEL_CLASS:"mdl-tabs__panel",ACTIVE_CLASS:"is-active",UPGRADED_CLASS:"is-upgraded",MDL_JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",MDL_RIPPLE_CONTAINER:"mdl-tabs__ripple-container",MDL_RIPPLE:"mdl-ripple",MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events"},m.prototype.initTabs_=function(){this.element_.classList.contains(this.CssClasses_.MDL_JS_RIPPLE_EFFECT)&&this.element_.classList.add(this.CssClasses_.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS),this.tabs_=this.element_.querySelectorAll("."+this.CssClasses_.TAB_CLASS),this.panels_=this.element_.querySelectorAll("."+this.CssClasses_.PANEL_CLASS);for(var t=0;t<this.tabs_.length;t++)new e(this.tabs_[t],this);this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS)},m.prototype.resetTabState_=function(){for(var e=0;e<this.tabs_.length;e++)this.tabs_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)},m.prototype.resetPanelState_=function(){for(var e=0;e<this.panels_.length;e++)this.panels_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)},m.prototype.init=function(){this.element_&&this.initTabs_()},s.register({constructor:m,classAsString:"MaterialTabs",cssClass:"mdl-js-tabs"});var L=function(e){this.element_=e,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init()};window.MaterialTextfield=L,L.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},L.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded",HAS_PLACEHOLDER:"has-placeholder"},L.prototype.onKeyDown_=function(e){var t=e.target.value.split("\n").length;13===e.keyCode&&t>=this.maxRows&&e.preventDefault()},L.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},L.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},L.prototype.onReset_=function(e){this.updateClasses_()},L.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},L.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},L.prototype.checkDisabled=L.prototype.checkDisabled,L.prototype.checkFocus=function(){Boolean(this.element_.querySelector(":focus"))?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},L.prototype.checkFocus=L.prototype.checkFocus,L.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},L.prototype.checkValidity=L.prototype.checkValidity,L.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},L.prototype.checkDirty=L.prototype.checkDirty,L.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},L.prototype.disable=L.prototype.disable,L.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},L.prototype.enable=L.prototype.enable,L.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_()},L.prototype.change=L.prototype.change,L.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.input_.hasAttribute("placeholder")&&this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},s.register({constructor:L,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0});var I=function(e){this.element_=e,this.init()};window.MaterialTooltip=I,I.prototype.Constant_={},I.prototype.CssClasses_={IS_ACTIVE:"is-active",BOTTOM:"mdl-tooltip--bottom",LEFT:"mdl-tooltip--left",RIGHT:"mdl-tooltip--right",TOP:"mdl-tooltip--top"},I.prototype.handleMouseEnter_=function(e){var t=e.target.getBoundingClientRect(),s=t.left+t.width/2,i=t.top+t.height/2,n=-1*(this.element_.offsetWidth/2),a=-1*(this.element_.offsetHeight/2);this.element_.classList.contains(this.CssClasses_.LEFT)||this.element_.classList.contains(this.CssClasses_.RIGHT)?(s=t.width/2,i+a<0?(this.element_.style.top="0",this.element_.style.marginTop="0"):(this.element_.style.top=i+"px",this.element_.style.marginTop=a+"px")):s+n<0?(this.element_.style.left="0",this.element_.style.marginLeft="0"):(this.element_.style.left=s+"px",this.element_.style.marginLeft=n+"px"),this.element_.classList.contains(this.CssClasses_.TOP)?this.element_.style.top=t.top-this.element_.offsetHeight-10+"px":this.element_.classList.contains(this.CssClasses_.RIGHT)?this.element_.style.left=t.left+t.width+10+"px":this.element_.classList.contains(this.CssClasses_.LEFT)?this.element_.style.left=t.left-this.element_.offsetWidth-10+"px":this.element_.style.top=t.top+t.height+10+"px",this.element_.classList.add(this.CssClasses_.IS_ACTIVE)},I.prototype.hideTooltip_=function(){this.element_.classList.remove(this.CssClasses_.IS_ACTIVE)},I.prototype.init=function(){if(this.element_){var e=this.element_.getAttribute("for")||this.element_.getAttribute("data-mdl-for");e&&(this.forElement_=document.getElementById(e)),this.forElement_&&(this.forElement_.hasAttribute("tabindex")||this.forElement_.setAttribute("tabindex","0"),this.boundMouseEnterHandler=this.handleMouseEnter_.bind(this),this.boundMouseLeaveAndScrollHandler=this.hideTooltip_.bind(this),this.forElement_.addEventListener("mouseenter",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("touchend",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("mouseleave",this.boundMouseLeaveAndScrollHandler,!1),window.addEventListener("scroll",this.boundMouseLeaveAndScrollHandler,!0),window.addEventListener("touchstart",this.boundMouseLeaveAndScrollHandler))}},s.register({constructor:I,classAsString:"MaterialTooltip",cssClass:"mdl-tooltip"});var f=function(e){this.element_=e,this.init()};window.MaterialLayout=f,f.prototype.Constant_={MAX_WIDTH:"(max-width: 1024px)",TAB_SCROLL_PIXELS:100,RESIZE_TIMEOUT:100,MENU_ICON:"&#xE5D2;",CHEVRON_LEFT:"chevron_left",CHEVRON_RIGHT:"chevron_right"},f.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32},f.prototype.Mode_={STANDARD:0,SEAMED:1,WATERFALL:2,SCROLL:3},f.prototype.CssClasses_={CONTAINER:"mdl-layout__container",HEADER:"mdl-layout__header",DRAWER:"mdl-layout__drawer",CONTENT:"mdl-layout__content",DRAWER_BTN:"mdl-layout__drawer-button",ICON:"material-icons",JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-layout__tab-ripple-container",RIPPLE:"mdl-ripple",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",HEADER_SEAMED:"mdl-layout__header--seamed",HEADER_WATERFALL:"mdl-layout__header--waterfall",HEADER_SCROLL:"mdl-layout__header--scroll",FIXED_HEADER:"mdl-layout--fixed-header",OBFUSCATOR:"mdl-layout__obfuscator",TAB_BAR:"mdl-layout__tab-bar",TAB_CONTAINER:"mdl-layout__tab-bar-container",TAB:"mdl-layout__tab",TAB_BAR_BUTTON:"mdl-layout__tab-bar-button",TAB_BAR_LEFT_BUTTON:"mdl-layout__tab-bar-left-button",TAB_BAR_RIGHT_BUTTON:"mdl-layout__tab-bar-right-button",TAB_MANUAL_SWITCH:"mdl-layout__tab-manual-switch",PANEL:"mdl-layout__tab-panel",HAS_DRAWER:"has-drawer",HAS_TABS:"has-tabs",HAS_SCROLLING_HEADER:"has-scrolling-header",CASTING_SHADOW:"is-casting-shadow",IS_COMPACT:"is-compact",IS_SMALL_SCREEN:"is-small-screen",IS_DRAWER_OPEN:"is-visible",IS_ACTIVE:"is-active",IS_UPGRADED:"is-upgraded",IS_ANIMATING:"is-animating",ON_LARGE_SCREEN:"mdl-layout--large-screen-only",ON_SMALL_SCREEN:"mdl-layout--small-screen-only"},f.prototype.contentScrollHandler_=function(){if(!this.header_.classList.contains(this.CssClasses_.IS_ANIMATING)){var e=!this.element_.classList.contains(this.CssClasses_.IS_SMALL_SCREEN)||this.element_.classList.contains(this.CssClasses_.FIXED_HEADER);this.content_.scrollTop>0&&!this.header_.classList.contains(this.CssClasses_.IS_COMPACT)?(this.header_.classList.add(this.CssClasses_.CASTING_SHADOW),this.header_.classList.add(this.CssClasses_.IS_COMPACT),e&&this.header_.classList.add(this.CssClasses_.IS_ANIMATING)):this.content_.scrollTop<=0&&this.header_.classList.contains(this.CssClasses_.IS_COMPACT)&&(this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW),this.header_.classList.remove(this.CssClasses_.IS_COMPACT),e&&this.header_.classList.add(this.CssClasses_.IS_ANIMATING))}},f.prototype.keyboardEventHandler_=function(e){e.keyCode===this.Keycodes_.ESCAPE&&this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)&&this.toggleDrawer()},f.prototype.screenSizeHandler_=function(){this.screenSizeMediaQuery_.matches?this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN):(this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN),this.drawer_&&(this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN),this.obfuscator_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN)))},f.prototype.drawerToggleHandler_=function(e){if(e&&"keydown"===e.type){if(e.keyCode!==this.Keycodes_.SPACE&&e.keyCode!==this.Keycodes_.ENTER)return;e.preventDefault()}this.toggleDrawer()},f.prototype.headerTransitionEndHandler_=function(){this.header_.classList.remove(this.CssClasses_.IS_ANIMATING)},f.prototype.headerClickHandler_=function(){this.header_.classList.contains(this.CssClasses_.IS_COMPACT)&&(this.header_.classList.remove(this.CssClasses_.IS_COMPACT),this.header_.classList.add(this.CssClasses_.IS_ANIMATING))},f.prototype.resetTabState_=function(e){for(var t=0;t<e.length;t++)e[t].classList.remove(this.CssClasses_.IS_ACTIVE)},f.prototype.resetPanelState_=function(e){for(var t=0;t<e.length;t++)e[t].classList.remove(this.CssClasses_.IS_ACTIVE)},f.prototype.toggleDrawer=function(){var e=this.element_.querySelector("."+this.CssClasses_.DRAWER_BTN);this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN),this.obfuscator_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN),this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)?(this.drawer_.setAttribute("aria-hidden","false"),e.setAttribute("aria-expanded","true")):(this.drawer_.setAttribute("aria-hidden","true"),e.setAttribute("aria-expanded","false"))},f.prototype.toggleDrawer=f.prototype.toggleDrawer,f.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.classList.add(this.CssClasses_.CONTAINER);var s=this.element_.querySelector(":focus");this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_),s&&s.focus();for(var i=this.element_.childNodes,n=i.length,a=0;a<n;a++){var l=i[a];l.classList&&l.classList.contains(this.CssClasses_.HEADER)&&(this.header_=l),l.classList&&l.classList.contains(this.CssClasses_.DRAWER)&&(this.drawer_=l),l.classList&&l.classList.contains(this.CssClasses_.CONTENT)&&(this.content_=l)}window.addEventListener("pageshow",function(e){e.persisted&&(this.element_.style.overflowY="hidden",requestAnimationFrame(function(){this.element_.style.overflowY=""}.bind(this)))}.bind(this),!1),this.header_&&(this.tabBar_=this.header_.querySelector("."+this.CssClasses_.TAB_BAR));var o=this.Mode_.STANDARD;if(this.header_&&(this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED)?o=this.Mode_.SEAMED:this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL)?(o=this.Mode_.WATERFALL,this.header_.addEventListener("transitionend",this.headerTransitionEndHandler_.bind(this)),this.header_.addEventListener("click",this.headerClickHandler_.bind(this))):this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL)&&(o=this.Mode_.SCROLL,e.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER)),o===this.Mode_.STANDARD?(this.header_.classList.add(this.CssClasses_.CASTING_SHADOW),this.tabBar_&&this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW)):o===this.Mode_.SEAMED||o===this.Mode_.SCROLL?(this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW),this.tabBar_&&this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW)):o===this.Mode_.WATERFALL&&(this.content_.addEventListener("scroll",this.contentScrollHandler_.bind(this)),this.contentScrollHandler_())),this.drawer_){var r=this.element_.querySelector("."+this.CssClasses_.DRAWER_BTN);if(!r){r=document.createElement("div"),r.setAttribute("aria-expanded","false"),r.setAttribute("role","button"),r.setAttribute("tabindex","0"),r.classList.add(this.CssClasses_.DRAWER_BTN);var _=document.createElement("i");_.classList.add(this.CssClasses_.ICON),_.innerHTML=this.Constant_.MENU_ICON,r.appendChild(_)}this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN)?r.classList.add(this.CssClasses_.ON_LARGE_SCREEN):this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN)&&r.classList.add(this.CssClasses_.ON_SMALL_SCREEN),r.addEventListener("click",this.drawerToggleHandler_.bind(this)),r.addEventListener("keydown",this.drawerToggleHandler_.bind(this)),this.element_.classList.add(this.CssClasses_.HAS_DRAWER),this.element_.classList.contains(this.CssClasses_.FIXED_HEADER)?this.header_.insertBefore(r,this.header_.firstChild):this.element_.insertBefore(r,this.content_);var d=document.createElement("div");d.classList.add(this.CssClasses_.OBFUSCATOR),this.element_.appendChild(d),d.addEventListener("click",this.drawerToggleHandler_.bind(this)),this.obfuscator_=d,this.drawer_.addEventListener("keydown",this.keyboardEventHandler_.bind(this)),this.drawer_.setAttribute("aria-hidden","true")}if(this.screenSizeMediaQuery_=window.matchMedia(this.Constant_.MAX_WIDTH),this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this)),this.screenSizeHandler_(),this.header_&&this.tabBar_){this.element_.classList.add(this.CssClasses_.HAS_TABS);var h=document.createElement("div");h.classList.add(this.CssClasses_.TAB_CONTAINER),this.header_.insertBefore(h,this.tabBar_),this.header_.removeChild(this.tabBar_);var c=document.createElement("div");c.classList.add(this.CssClasses_.TAB_BAR_BUTTON),c.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);var p=document.createElement("i");p.classList.add(this.CssClasses_.ICON),p.textContent=this.Constant_.CHEVRON_LEFT,c.appendChild(p),c.addEventListener("click",function(){this.tabBar_.scrollLeft-=this.Constant_.TAB_SCROLL_PIXELS}.bind(this));var C=document.createElement("div");C.classList.add(this.CssClasses_.TAB_BAR_BUTTON),C.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);var u=document.createElement("i");u.classList.add(this.CssClasses_.ICON),u.textContent=this.Constant_.CHEVRON_RIGHT,C.appendChild(u),C.addEventListener("click",function(){this.tabBar_.scrollLeft+=this.Constant_.TAB_SCROLL_PIXELS}.bind(this)),h.appendChild(c),h.appendChild(this.tabBar_),h.appendChild(C);var E=function(){this.tabBar_.scrollLeft>0?c.classList.add(this.CssClasses_.IS_ACTIVE):c.classList.remove(this.CssClasses_.IS_ACTIVE),this.tabBar_.scrollLeft<this.tabBar_.scrollWidth-this.tabBar_.offsetWidth?C.classList.add(this.CssClasses_.IS_ACTIVE):C.classList.remove(this.CssClasses_.IS_ACTIVE)}.bind(this);this.tabBar_.addEventListener("scroll",E),E();var m=function(){this.resizeTimeoutId_&&clearTimeout(this.resizeTimeoutId_),this.resizeTimeoutId_=setTimeout(function(){E(),this.resizeTimeoutId_=null}.bind(this),this.Constant_.RESIZE_TIMEOUT)}.bind(this);window.addEventListener("resize",m),this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)&&this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);for(var L=this.tabBar_.querySelectorAll("."+this.CssClasses_.TAB),I=this.content_.querySelectorAll("."+this.CssClasses_.PANEL),f=0;f<L.length;f++)new t(L[f],L,I,this)}this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},window.MaterialLayoutTab=t,s.register({constructor:f,classAsString:"MaterialLayout",cssClass:"mdl-js-layout"});var b=function(e){this.element_=e,this.init()};window.MaterialDataTable=b,b.prototype.Constant_={},b.prototype.CssClasses_={DATA_TABLE:"mdl-data-table",SELECTABLE:"mdl-data-table--selectable",SELECT_ELEMENT:"mdl-data-table__select",IS_SELECTED:"is-selected",IS_UPGRADED:"is-upgraded"},b.prototype.selectRow_=function(e,t,s){return t?function(){e.checked?t.classList.add(this.CssClasses_.IS_SELECTED):t.classList.remove(this.CssClasses_.IS_SELECTED)}.bind(this):s?function(){var t,i;if(e.checked)for(t=0;t<s.length;t++)i=s[t].querySelector("td").querySelector(".mdl-checkbox"),i.MaterialCheckbox.check(),s[t].classList.add(this.CssClasses_.IS_SELECTED);else for(t=0;t<s.length;t++)i=s[t].querySelector("td").querySelector(".mdl-checkbox"),i.MaterialCheckbox.uncheck(),s[t].classList.remove(this.CssClasses_.IS_SELECTED)}.bind(this):void 0},b.prototype.createCheckbox_=function(e,t){var i=document.createElement("label"),n=["mdl-checkbox","mdl-js-checkbox","mdl-js-ripple-effect",this.CssClasses_.SELECT_ELEMENT];i.className=n.join(" ");var a=document.createElement("input");return a.type="checkbox",a.classList.add("mdl-checkbox__input"),e?(a.checked=e.classList.contains(this.CssClasses_.IS_SELECTED),a.addEventListener("change",this.selectRow_(a,e))):t&&a.addEventListener("change",this.selectRow_(a,null,t)),i.appendChild(a),s.upgradeElement(i,"MaterialCheckbox"),i},b.prototype.init=function(){if(this.element_){var e=this.element_.querySelector("th"),t=Array.prototype.slice.call(this.element_.querySelectorAll("tbody tr")),s=Array.prototype.slice.call(this.element_.querySelectorAll("tfoot tr")),i=t.concat(s);if(this.element_.classList.contains(this.CssClasses_.SELECTABLE)){var n=document.createElement("th"),a=this.createCheckbox_(null,i);n.appendChild(a),e.parentElement.insertBefore(n,e);for(var l=0;l<i.length;l++){var o=i[l].querySelector("td");if(o){var r=document.createElement("td");if("TBODY"===i[l].parentNode.nodeName.toUpperCase()){var _=this.createCheckbox_(i[l]);r.appendChild(_)}i[l].insertBefore(r,o)}}this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}}},s.register({constructor:b,classAsString:"MaterialDataTable",cssClass:"mdl-js-data-table"});var S=function(e){this.element_=e,this.init()};window.MaterialRipple=S,S.prototype.Constant_={INITIAL_SCALE:"scale(0.0001, 0.0001)",INITIAL_SIZE:"1px",INITIAL_OPACITY:"0.4",FINAL_OPACITY:"0",FINAL_SCALE:""},S.prototype.CssClasses_={RIPPLE_CENTER:"mdl-ripple--center",RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_ANIMATING:"is-animating",IS_VISIBLE:"is-visible"},S.prototype.downHandler_=function(e){if(!this.rippleElement_.style.width&&!this.rippleElement_.style.height){var t=this.element_.getBoundingClientRect();this.boundHeight=t.height,this.boundWidth=t.width,this.rippleSize_=2*Math.sqrt(t.width*t.width+t.height*t.height)+2,this.rippleElement_.style.width=this.rippleSize_+"px",this.rippleElement_.style.height=this.rippleSize_+"px"}if(this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE),"mousedown"===e.type&&this.ignoringMouseDown_)this.ignoringMouseDown_=!1;else{"touchstart"===e.type&&(this.ignoringMouseDown_=!0);var s=this.getFrameCount();if(s>0)return;this.setFrameCount(1);var i,n,a=e.currentTarget.getBoundingClientRect();if(0===e.clientX&&0===e.clientY)i=Math.round(a.width/2),n=Math.round(a.height/2);else{var l=void 0!==e.clientX?e.clientX:e.touches[0].clientX,o=void 0!==e.clientY?e.clientY:e.touches[0].clientY;i=Math.round(l-a.left),n=Math.round(o-a.top)}this.setRippleXY(i,n),this.setRippleStyles(!0),window.requestAnimationFrame(this.animFrameHandler.bind(this))}},S.prototype.upHandler_=function(e){e&&2!==e.detail&&window.setTimeout(function(){this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)}.bind(this),0)},S.prototype.init=function(){if(this.element_){var e=this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)||(this.rippleElement_=this.element_.querySelector("."+this.CssClasses_.RIPPLE),this.frameCount_=0,this.rippleSize_=0,this.x_=0,this.y_=0,this.ignoringMouseDown_=!1,this.boundDownHandler=this.downHandler_.bind(this),this.element_.addEventListener("mousedown",this.boundDownHandler),this.element_.addEventListener("touchstart",this.boundDownHandler),this.boundUpHandler=this.upHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundUpHandler),this.element_.addEventListener("mouseleave",this.boundUpHandler),this.element_.addEventListener("touchend",this.boundUpHandler),this.element_.addEventListener("blur",this.boundUpHandler),this.getFrameCount=function(){return this.frameCount_},this.setFrameCount=function(e){this.frameCount_=e},this.getRippleElement=function(){return this.rippleElement_},this.setRippleXY=function(e,t){this.x_=e,this.y_=t},this.setRippleStyles=function(t){if(null!==this.rippleElement_){var s,i,n,a="translate("+this.x_+"px, "+this.y_+"px)";t?(i=this.Constant_.INITIAL_SCALE,n=this.Constant_.INITIAL_SIZE):(i=this.Constant_.FINAL_SCALE,n=this.rippleSize_+"px",e&&(a="translate("+this.boundWidth/2+"px, "+this.boundHeight/2+"px)")),s="translate(-50%, -50%) "+a+i,this.rippleElement_.style.webkitTransform=s,this.rippleElement_.style.msTransform=s,this.rippleElement_.style.transform=s,t?this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING):this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)}},this.animFrameHandler=function(){this.frameCount_-- >0?window.requestAnimationFrame(this.animFrameHandler.bind(this)):this.setRippleStyles(!1)})}},s.register({constructor:S,classAsString:"MaterialRipple",cssClass:"mdl-js-ripple-effect",widget:!1})}();
//# sourceMappingURL=material.min.js.map


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};!function(){function o(o){return"function"==typeof o}function t(o){return n(o)&&Object.getPrototypeOf(o)==Object.prototype}function n(o){return null!==o&&"object"===("undefined"==typeof o?"undefined":_typeof(o))}function e(o,n,i){for(var r in n)i&&(t(n[r])||c(n[r]))?(t(n[r])&&!t(o[r])&&(o[r]={}),c(n[r])&&!c(o[r])&&(o[r]=[]),e(o[r],n[r],i)):void 0!==n[r]&&(o[r]=n[r])}function i(o){var t=u.call(arguments,1);return t.forEach(function(t){e(o,t,!0)}),o}function r(t,n,e){return e=e||{},o(e)&&(e=e.call(n)),i(t.bind({$vm:n,$options:e}),t,{$options:e})}function f(o,t){if(!f.installed){if(!t)return void console.error("You have to install axios");o.axios=t,Object.defineProperties(o.prototype,{axios:{get:function(){return r(o.axios,this,this.$options.axios)}}})}}var u=[].slice,c=Array.isArray;"object"==( false?"undefined":_typeof(exports))?module.exports=f: true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return f}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):window.Vue&&window.axios&&Vue.use(f,window.axios)}();

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(48)

var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(47),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/www/jwt/resources/assets/js/components/app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c25ee5a", Component.options)
  } else {
    hotAPI.reload("data-v-5c25ee5a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('router-view')
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5c25ee5a", module.exports)
  }
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("c28dbf5a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5c25ee5a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5c25ee5a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 49 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("VueMdl", [], factory);
	else if(typeof exports === 'object')
		exports["VueMdl"] = factory();
	else
		root["VueMdl"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MdlNavLink = exports.MdlNav = exports.MdlLayoutSpacer = exports.MdlLayoutContent = exports.MdlLayoutDrawer = exports.MdlLayoutHeaderRow = exports.MdlLayout = exports.MdlChip = exports.MdlTab = exports.MdlTabs = exports.MdlDialog = exports.MdlSelect = exports.MdlSnackbar = exports.MdlCard = exports.MdlMenuItem = exports.MdlMenu = exports.MdlTooltip = exports.MdlTextfield = exports.MdlSlider = exports.MdlSpinner = exports.MdlProgress = exports.MdlAnchorButton = exports.MdlButton = exports.MdlIconToggle = exports.MdlRadio = exports.MdlSwitch = exports.MdlBadge = exports.MdlCheckbox = exports.Mdl = exports.directives = exports.components = undefined;
	
	var _keys = __webpack_require__(1);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _mdl = __webpack_require__(36);
	
	var _mdl2 = _interopRequireDefault(_mdl);
	
	var _checkbox = __webpack_require__(37);
	
	var _checkbox2 = _interopRequireDefault(_checkbox);
	
	var _radio = __webpack_require__(41);
	
	var _radio2 = _interopRequireDefault(_radio);
	
	var _badge = __webpack_require__(44);
	
	var _badge2 = _interopRequireDefault(_badge);
	
	var _button = __webpack_require__(45);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _anchorButton = __webpack_require__(49);
	
	var _anchorButton2 = _interopRequireDefault(_anchorButton);
	
	var _progress = __webpack_require__(52);
	
	var _progress2 = _interopRequireDefault(_progress);
	
	var _spinner = __webpack_require__(55);
	
	var _spinner2 = _interopRequireDefault(_spinner);
	
	var _iconToggle = __webpack_require__(58);
	
	var _iconToggle2 = _interopRequireDefault(_iconToggle);
	
	var _slider = __webpack_require__(61);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	var _switch = __webpack_require__(64);
	
	var _switch2 = _interopRequireDefault(_switch);
	
	var _textfield = __webpack_require__(67);
	
	var _textfield2 = _interopRequireDefault(_textfield);
	
	var _tooltip = __webpack_require__(70);
	
	var _tooltip2 = _interopRequireDefault(_tooltip);
	
	var _menu = __webpack_require__(73);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _menuItem = __webpack_require__(76);
	
	var _menuItem2 = _interopRequireDefault(_menuItem);
	
	var _card = __webpack_require__(79);
	
	var _card2 = _interopRequireDefault(_card);
	
	var _snackbar = __webpack_require__(82);
	
	var _snackbar2 = _interopRequireDefault(_snackbar);
	
	var _select = __webpack_require__(85);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _dialog = __webpack_require__(92);
	
	var _dialog2 = _interopRequireDefault(_dialog);
	
	var _tabs = __webpack_require__(99);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	var _tab = __webpack_require__(105);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _chip = __webpack_require__(115);
	
	var _chip2 = _interopRequireDefault(_chip);
	
	var _layout = __webpack_require__(118);
	
	var _layout2 = _interopRequireDefault(_layout);
	
	var _headerRow = __webpack_require__(121);
	
	var _headerRow2 = _interopRequireDefault(_headerRow);
	
	var _drawer = __webpack_require__(124);
	
	var _drawer2 = _interopRequireDefault(_drawer);
	
	var _content = __webpack_require__(127);
	
	var _content2 = _interopRequireDefault(_content);
	
	var _spacer = __webpack_require__(128);
	
	var _spacer2 = _interopRequireDefault(_spacer);
	
	var _nav = __webpack_require__(129);
	
	var _nav2 = _interopRequireDefault(_nav);
	
	var _link = __webpack_require__(130);
	
	var _link2 = _interopRequireDefault(_link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var components = exports.components = {
	  MdlCheckbox: _checkbox2.default,
	  MdlSwitch: _switch2.default,
	  MdlIconToggle: _iconToggle2.default,
	  MdlRadio: _radio2.default,
	  MdlProgress: _progress2.default,
	  MdlButton: _button2.default,
	  MdlAnchorButton: _anchorButton2.default,
	  MdlSpinner: _spinner2.default,
	  MdlSlider: _slider2.default,
	  MdlTextfield: _textfield2.default,
	  MdlTooltip: _tooltip2.default,
	  MdlMenu: _menu2.default,
	  MdlMenuItem: _menuItem2.default,
	  MdlCard: _card2.default,
	  MdlSnackbar: _snackbar2.default,
	  MdlSelect: _select2.default,
	  MdlDialog: _dialog2.default,
	  MdlTabs: _tabs2.default,
	  MdlTab: _tab2.default,
	  MdlBadge: _badge2.default,
	  MdlChip: _chip2.default,
	  MdlLayout: _layout2.default,
	  MdlLayoutHeaderRow: _headerRow2.default,
	  MdlLayoutDrawer: _drawer2.default,
	  MdlLayoutContent: _content2.default,
	  MdlLayoutSpacer: _spacer2.default,
	  MdlNav: _nav2.default,
	  MdlNavLink: _link2.default
	};
	
	var directives = exports.directives = {
	  Mdl: _mdl2.default
	};
	
	exports.default = {
	  install: function install(Vue) {
	    (0, _keys2.default)(components).forEach(function (name) {
	      Vue.component(name, components[name]);
	    });
	    (0, _keys2.default)(directives).forEach(function (name) {
	      Vue.directive(name, directives[name]);
	    });
	  }
	};
	exports.Mdl = _mdl2.default;
	exports.MdlCheckbox = _checkbox2.default;
	exports.MdlBadge = _badge2.default;
	exports.MdlSwitch = _switch2.default;
	exports.MdlRadio = _radio2.default;
	exports.MdlIconToggle = _iconToggle2.default;
	exports.MdlButton = _button2.default;
	exports.MdlAnchorButton = _anchorButton2.default;
	exports.MdlProgress = _progress2.default;
	exports.MdlSpinner = _spinner2.default;
	exports.MdlSlider = _slider2.default;
	exports.MdlTextfield = _textfield2.default;
	exports.MdlTooltip = _tooltip2.default;
	exports.MdlMenu = _menu2.default;
	exports.MdlMenuItem = _menuItem2.default;
	exports.MdlCard = _card2.default;
	exports.MdlSnackbar = _snackbar2.default;
	exports.MdlSelect = _select2.default;
	exports.MdlDialog = _dialog2.default;
	exports.MdlTabs = _tabs2.default;
	exports.MdlTab = _tab2.default;
	exports.MdlChip = _chip2.default;
	exports.MdlLayout = _layout2.default;
	exports.MdlLayoutHeaderRow = _headerRow2.default;
	exports.MdlLayoutDrawer = _drawer2.default;
	exports.MdlLayoutContent = _content2.default;
	exports.MdlLayoutSpacer = _spacer2.default;
	exports.MdlNav = _nav2.default;
	exports.MdlNavLink = _link2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(23).Object.keys;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(4)
	  , $keys    = __webpack_require__(6);
	
	__webpack_require__(21)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(5);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(7)
	  , enumBugKeys = __webpack_require__(20);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(8)
	  , toIObject    = __webpack_require__(9)
	  , arrayIndexOf = __webpack_require__(12)(false)
	  , IE_PROTO     = __webpack_require__(16)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(10)
	  , defined = __webpack_require__(5);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(11);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(9)
	  , toLength  = __webpack_require__(13)
	  , toIndex   = __webpack_require__(15);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(14)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(14)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(17)('keys')
	  , uid    = __webpack_require__(19);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(18)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 19 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(22)
	  , core    = __webpack_require__(23)
	  , fails   = __webpack_require__(32);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(18)
	  , core      = __webpack_require__(23)
	  , ctx       = __webpack_require__(24)
	  , hide      = __webpack_require__(26)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 23 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(25);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(27)
	  , createDesc = __webpack_require__(35);
	module.exports = __webpack_require__(31) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(28)
	  , IE8_DOM_DEFINE = __webpack_require__(30)
	  , toPrimitive    = __webpack_require__(34)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(31) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(31) && !__webpack_require__(32)(function(){
	  return Object.defineProperty(__webpack_require__(33)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(32)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29)
	  , document = __webpack_require__(18).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(29);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  bind: function bind(el) {
	    componentHandler.upgradeElements(el);
	  }
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(38)
	
	/* template */
	var __vue_template__ = __webpack_require__(40)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/toggles/checkbox.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-59130e27", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-59130e27", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] checkbox.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toggle = __webpack_require__(39);
	
	var _toggle2 = _interopRequireDefault(_toggle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_toggle2.default]
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    disabled: { required: false },
	    id: String,
	    value: {
	      type: [Array, Boolean, Number],
	      required: true
	    },
	    val: { required: false }
	  },
	  data: function data() {
	    return {
	      checkedProxy: false
	    };
	  },
	
	  computed: {
	    checked: {
	      get: function get() {
	        return this.value;
	      },
	      set: function set(val) {
	        this.checkedProxy = val;
	      }
	    },
	    isChecked: function isChecked() {
	      return this.value instanceof Array ? this.value.indexOf(this.val) >= 0 : this.value;
	    },
	    cssClasses: function cssClasses() {
	      return {
	        'is-disabled': this.disabled,
	        'is-checked': this.isChecked
	      };
	    }
	  },
	  methods: {
	    fireChange: function fireChange(event) {
	      this.$emit('input', this.checkedProxy);
	    }
	  },
	  mounted: function mounted() {
	    componentHandler.upgradeElements(this.$el);
	  }
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('label', {
	    staticClass: "mdl-checkbox mdl-js-checkbox is-upgraded",
	    class: _vm.cssClasses,
	    attrs: {
	      "for": _vm.id
	    }
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checked),
	      expression: "checked"
	    }],
	    staticClass: "mdl-checkbox__input",
	    attrs: {
	      "type": "checkbox",
	      "id": _vm.id,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": _vm.val,
	      "checked": Array.isArray(_vm.checked) ? _vm._i(_vm.checked, _vm.val) > -1 : (_vm.checked)
	    },
	    on: {
	      "change": _vm.fireChange,
	      "click": function($event) {
	        var $$a = _vm.checked,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = _vm.val,
	            $$i = _vm._i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (_vm.checked = $$a.concat($$v))
	          } else {
	            $$i > -1 && (_vm.checked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _vm.checked = $$c
	        }
	      }
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "mdl-checkbox__label"
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-59130e27", module.exports)
	  }
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(42)
	
	/* template */
	var __vue_template__ = __webpack_require__(43)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/toggles/radio.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3842db47", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3842db47", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] radio.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    name: String,
	    disabled: { required: false },
	    id: String,
	    value: {
	      type: [String, Number],
	      required: true
	    },
	    val: { required: true }
	  },
	  computed: {
	    checked: {
	      get: function get() {
	        return this.value;
	      },
	      set: function set(val) {
	        this.checkedProxy = val;
	      }
	    },
	    isChecked: function isChecked() {
	      return this.value === this.val;
	    },
	    cssClasses: function cssClasses() {
	      return {
	        'is-disabled': this.disabled,
	        'is-checked': this.isChecked
	      };
	    }
	  },
	  mounted: function mounted() {
	    componentHandler.upgradeElements(this.$el);
	  },
	
	  methods: {
	    fireChange: function fireChange(event) {
	      this.$emit('input', this.checkedProxy);
	    }
	  }
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('label', {
	    staticClass: "mdl-radio mdl-js-radio is-upgraded",
	    class: _vm.cssClasses,
	    attrs: {
	      "for": _vm.id
	    }
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checked),
	      expression: "checked"
	    }],
	    staticClass: "mdl-radio__button",
	    attrs: {
	      "type": "radio",
	      "id": _vm.id,
	      "name": _vm.name,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": _vm.val,
	      "checked": _vm._q(_vm.checked, _vm.val)
	    },
	    on: {
	      "change": _vm.fireChange,
	      "click": function($event) {
	        _vm.checked = _vm.val
	      }
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "mdl-radio__label"
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3842db47", module.exports)
	  }
	}

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function shouldAddProp(_ref) {
	  var hide = _ref.hide,
	      badge = _ref.badge;
	
	  return !hide && badge;
	}
	
	exports.default = {
	  functional: true,
	  props: {
	    badge: [String, Number],
	    overlap: [Boolean, String],
	    noBackground: [Boolean, String],
	    hide: Boolean
	  },
	  render: function render(h, context) {
	    if (context.children.length !== 1) {
	      console.error('MdlBadge must have exactly one child');
	    }
	
	    var child = context.children[0];
	
	    if (!child.elm) {
	      child.data = child.data || {};
	
	      child.data.staticClass = child.data.staticClass || '';
	      child.data.staticClass += ' mdl-badge';
	      if (context.props.overlap) child.data.staticClass += ' mdl-badge--overlap';
	      if (context.props.noBackground) child.data.staticClass += ' mdl-badge--no-background';
	
	      child.data.attrs = child.data.attrs || {};
	      if (shouldAddProp(context.props)) {
	        child.data.attrs['data-badge'] = context.props.badge;
	      }
	    } else {
	      child.elm.removeAttribute('data-badge');
	      if (shouldAddProp(context.props)) {
	        child.elm.dataset.badge = context.props.badge;
	      }
	
	      child.elm.classList.remove('mdl-badge--no-background');
	      if (context.props.noBackground) {
	        child.elm.classList.add('mdl-badge--no-background');
	      }
	
	      child.elm.classList.remove('mdl-badge--overlap');
	      if (context.props.overlap) {
	        child.elm.classList.add('mdl-badge--overlap');
	      }
	    }
	
	    return child;
	  }
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(46)
	
	/* template */
	var __vue_template__ = __webpack_require__(48)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/button.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-22205eb4", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-22205eb4", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] button.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _button = __webpack_require__(47);
	
	var _button2 = _interopRequireDefault(_button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_button2.default]
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  computed: {
	    cssClasses: function cssClasses() {
	      return {
	        'mdl-button--icon': this.icon,
	        'mdl-button--accent': this.accent,
	        'mdl-button--primary': this.primary,
	        'mdl-button--mini-fab': this.miniFab,
	        'mdl-button--fab': this.fab || this.miniFab,
	        'mdl-button--raised': this.raised,
	        'mdl-button--colored': this.colored
	      };
	    },
	    isIconSpecified: function isIconSpecified() {
	      return this.icon && typeof this.icon === 'string';
	    }
	  },
	  props: {
	    disabled: Boolean,
	    icon: [String, Boolean],
	    accent: Boolean,
	    primary: Boolean,
	    miniFab: Boolean,
	    fab: Boolean,
	    raised: Boolean,
	    colored: Boolean
	  },
	  mounted: function mounted() {
	    componentHandler.upgradeElement(this.$el);
	  }
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('button', {
	    staticClass: "mdl-button mdl-js-button",
	    class: _vm.cssClasses,
	    attrs: {
	      "disabled": _vm.disabled
	    }
	  }, [_vm._t("default", [(_vm.isIconSpecified) ? _c('i', {
	    staticClass: "material-icons"
	  }, [_vm._v(_vm._s(_vm.icon))]) : _vm._e()])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-22205eb4", module.exports)
	  }
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(50)
	
	/* template */
	var __vue_template__ = __webpack_require__(51)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/anchor-button.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7979d0f4", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-7979d0f4", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] anchor-button.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _button = __webpack_require__(47);
	
	var _button2 = _interopRequireDefault(_button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_button2.default]
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    staticClass: "mdl-button mdl-js-button",
	    class: _vm.cssClasses,
	    attrs: {
	      "disabled": _vm.disabled
	    }
	  }, [_vm._t("default", [(_vm.isIconSpecified) ? _c('i', {
	    staticClass: "material-icons"
	  }, [_vm._v(_vm._s(_vm.icon))]) : _vm._e()])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7979d0f4", module.exports)
	  }
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(53)
	
	/* template */
	var __vue_template__ = __webpack_require__(54)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/progress.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-235def21", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-235def21", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] progress.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    progress: {
	      required: false
	    },
	    buffer: {
	      required: false
	    },
	    indeterminate: Boolean
	  },
	  mounted: function mounted() {
	    var _this = this;
	
	    componentHandler.upgradeElement(this.$el, 'MaterialProgress');
	
	    if (this.progress != null) {
	      this.$el.MaterialProgress.setProgress(this.progress);
	      this.$watch('progress', function (val) {
	        return _this.$el.MaterialProgress.setProgress(val);
	      });
	    }
	
	    if (this.buffer != null) {
	      this.$el.MaterialProgress.setBuffer(this.buffer);
	      this.$watch('buffer', function (val) {
	        return _this.$el.MaterialProgress.setBuffer(val);
	      });
	    }
	  }
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mdl-progress mdl-js-progress",
	    class: {
	      'mdl-progress__indeterminate': _vm.indeterminate
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-235def21", module.exports)
	  }
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(56)
	
	/* template */
	var __vue_template__ = __webpack_require__(57)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/spinner.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-04226856", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-04226856", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] spinner.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    active: {
	      default: true,
	      type: Boolean
	    },
	    singleColor: Boolean
	  },
	  mounted: function mounted() {
	    componentHandler.upgradeElement(this.$el, 'MaterialSpinner');
	  }
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mdl-spinner mdl-js-spinner",
	    class: {
	      'mdl-spinner--single-color': _vm.singleColor, 'is-active': _vm.active
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-04226856", module.exports)
	  }
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(59)
	
	/* template */
	var __vue_template__ = __webpack_require__(60)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/toggles/icon-toggle.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-15cede18", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-15cede18", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] icon-toggle.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toggle = __webpack_require__(39);
	
	var _toggle2 = _interopRequireDefault(_toggle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    icon: {
	      required: true,
	      type: String
	    }
	  },
	  mixins: [_toggle2.default]
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('label', {
	    staticClass: "mdl-icon-toggle mdl-js-icon-toggle is-upgraded",
	    class: _vm.cssClasses,
	    attrs: {
	      "for": _vm.id
	    }
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checked),
	      expression: "checked"
	    }],
	    staticClass: "mdl-icon-toggle__input",
	    attrs: {
	      "type": "checkbox",
	      "id": _vm.id,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": _vm.val,
	      "checked": Array.isArray(_vm.checked) ? _vm._i(_vm.checked, _vm.val) > -1 : (_vm.checked)
	    },
	    on: {
	      "change": _vm.fireChange,
	      "click": function($event) {
	        var $$a = _vm.checked,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = _vm.val,
	            $$i = _vm._i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (_vm.checked = $$a.concat($$v))
	          } else {
	            $$i > -1 && (_vm.checked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _vm.checked = $$c
	        }
	      }
	    }
	  }), _vm._v(" "), _c('i', {
	    staticClass: "mdl-icon-toggle__label material-icons"
	  }, [_vm._v(_vm._s(_vm.icon))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-15cede18", module.exports)
	  }
	}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(62)
	
	/* template */
	var __vue_template__ = __webpack_require__(63)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/slider.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1b7fb2d5", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1b7fb2d5", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] slider.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 62 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  computed: {
	    lowerBackgroundStyle: function lowerBackgroundStyle() {
	      return {
	        flex: this.relativeValue + ' 1 0%'
	      };
	    },
	    upperBackgroundStyle: function upperBackgroundStyle() {
	      return {
	        flex: 1 - this.relativeValue + ' 1 0%'
	      };
	    },
	    valueNumber: function valueNumber() {
	      return Number(this.value);
	    },
	    stepNumber: function stepNumber() {
	      return Number(this.step);
	    },
	    minNumber: function minNumber() {
	      return Number(this.min);
	    },
	    maxNumber: function maxNumber() {
	      return Number(this.max);
	    },
	    relativeValue: function relativeValue() {
	      var val = Math.round((this.valueNumber - this.minNumber) / this.stepNumber) * this.stepNumber;
	      return val / (this.maxNumber - this.minNumber);
	    }
	  },
	  props: {
	    value: {
	      type: [String, Number],
	      required: true
	    },
	    step: {
	      type: [String, Number],
	      default: 1
	    },
	    min: {
	      type: [String, Number],
	      default: 0
	    },
	    max: {
	      type: [String, Number],
	      required: true
	    },
	    disabled: {
	      required: false
	    }
	  },
	  methods: {
	    onInput: function onInput(_ref) {
	      var value = _ref.target.value;
	
	      this.$emit('input', typeof this.value === 'string' ? value : Number(value));
	    }
	  }
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mdl-slider__container"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.valueNumber),
	      expression: "valueNumber"
	    }],
	    ref: "input",
	    staticClass: "mdl-slider mdl-js-slider is-upgraded",
	    attrs: {
	      "type": "range",
	      "min": _vm.min,
	      "max": _vm.max,
	      "step": _vm.step,
	      "data-upgraded": ",MaterialSlider",
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": _vm._s(_vm.valueNumber)
	    },
	    on: {
	      "input": [function($event) {
	        _vm.valueNumber = $event.target.value
	      }, _vm.onInput]
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "mdl-slider__background-flex"
	  }, [_c('div', {
	    staticClass: "mdl-slider__background-lower",
	    style: (_vm.lowerBackgroundStyle)
	  }), _vm._v(" "), _c('div', {
	    staticClass: "mdl-slider__background-upper",
	    style: (_vm.upperBackgroundStyle)
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1b7fb2d5", module.exports)
	  }
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(65)
	
	/* template */
	var __vue_template__ = __webpack_require__(66)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/toggles/switch.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-83b727d0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-83b727d0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] switch.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toggle = __webpack_require__(39);
	
	var _toggle2 = _interopRequireDefault(_toggle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_toggle2.default]
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('label', {
	    staticClass: "mdl-switch mdl-js-switch is-upgraded",
	    class: _vm.cssClasses,
	    attrs: {
	      "for": _vm.id
	    }
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checked),
	      expression: "checked"
	    }],
	    staticClass: "mdl-switch__input",
	    attrs: {
	      "type": "checkbox",
	      "id": _vm.id,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": _vm.val,
	      "checked": Array.isArray(_vm.checked) ? _vm._i(_vm.checked, _vm.val) > -1 : (_vm.checked)
	    },
	    on: {
	      "change": _vm.fireChange,
	      "click": function($event) {
	        var $$a = _vm.checked,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = _vm.val,
	            $$i = _vm._i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (_vm.checked = $$a.concat($$v))
	          } else {
	            $$i > -1 && (_vm.checked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _vm.checked = $$c
	        }
	      }
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "mdl-switch__label"
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-83b727d0", module.exports)
	  }
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(68)
	
	/* template */
	var __vue_template__ = __webpack_require__(69)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/textfield.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-00ca46a9", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-00ca46a9", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] textfield.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 68 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    autocomplete: String,
	    maxlength: {
	      required: false
	    },
	    expandable: String,
	    type: {
	      type: String,
	      default: 'text'
	    },
	    rows: {
	      required: false
	    },
	    id: String,
	    value: {
	      required: false
	    },
	    disabled: {
	      type: [Boolean, String],
	      fill: true,
	      required: false,
	      default: false
	    },
	    required: {
	      type: [Boolean, String],
	      fill: true,
	      required: false,
	      default: false
	    },
	    readonly: {
	      type: [Boolean, String],
	      fill: true,
	      required: false,
	      default: false
	    },
	    label: String,
	    pattern: String,
	    error: String,
	    textarea: Boolean,
	    floatingLabel: [Boolean, String]
	  },
	  computed: {
	    displayLabel: function displayLabel() {
	      return this.label || this.floatingLabel;
	    },
	    isDirty: function isDirty() {
	      return '' + this.value;
	    }
	  },
	  methods: {
	    fireInputEvent: function fireInputEvent(event) {
	      this.$emit('input', event.target.value);
	    },
	    focus: function focus() {
	      this.$refs.focusTarget.focus();
	      return this;
	    },
	    select: function select() {
	      this.$refs.focusTarget.select();
	      return this;
	    },
	    blur: function blur() {
	      this.$refs.focusTarget.blur();
	      return this;
	    }
	  },
	  mounted: function mounted() {
	    componentHandler.upgradeElement(this.$el);
	  }
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mdl-textfield mdl-js-textfield",
	    class: {
	      'mdl-textfield--floating-label': _vm.floatingLabel, 'mdl-textfield--expandable': _vm.expandable, 'is-dirty': _vm.isDirty, 'is-disabled': _vm.disabled
	    }
	  }, [(_vm.expandable) ? _vm._t("expandable-button", [_c('label', {
	    staticClass: "mdl-button mdl-js-button mdl-button--icon",
	    attrs: {
	      "for": _vm.id
	    }
	  }, [_c('i', {
	    staticClass: "material-icons"
	  }, [_vm._v(_vm._s(_vm.expandable))])])]) : _vm._e(), _vm._v(" "), _c('div', {
	    class: {
	      'mdl-textfield__expandable-holder': _vm.expandable
	    }
	  }, [(_vm.textarea) ? _vm._t("textarea", [_c('textarea', {
	    ref: "focusTarget",
	    staticClass: "mdl-textfield__input",
	    attrs: {
	      "type": "text",
	      "required": _vm.required,
	      "id": _vm.id,
	      "rows": _vm.rows,
	      "maxlength": _vm.maxlength
	    },
	    domProps: {
	      "value": _vm.value
	    },
	    on: {
	      "input": _vm.fireInputEvent
	    }
	  })]) : _vm._t("input", [_c('input', {
	    ref: "focusTarget",
	    staticClass: "mdl-textfield__input",
	    attrs: {
	      "type": _vm.type,
	      "id": _vm.id,
	      "pattern": _vm.pattern,
	      "disabled": _vm.disabled,
	      "required": _vm.required,
	      "readonly": _vm.readonly,
	      "autocomplete": _vm.autocomplete,
	      "maxlength": _vm.maxlength
	    },
	    domProps: {
	      "value": _vm.value
	    },
	    on: {
	      "input": _vm.fireInputEvent
	    }
	  })]), _vm._v(" "), _vm._t("label", [(_vm.displayLabel) ? _c('label', {
	    staticClass: "mdl-textfield__label",
	    attrs: {
	      "for": _vm.id
	    }
	  }, [_vm._v(_vm._s(_vm.displayLabel))]) : _vm._e()]), _vm._v(" "), _vm._t("error", [(_vm.error) ? _c('label', {
	    staticClass: "mdl-textfield__error"
	  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e()])], 2)], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-00ca46a9", module.exports)
	  }
	}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(71)
	
	/* template */
	var __vue_template__ = __webpack_require__(72)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/tooltip.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e7023682", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-e7023682", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tooltip.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 71 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    target: {
	      required: true,
	      type: String
	    },
	    large: Boolean,
	    left: Boolean,
	    right: Boolean,
	    top: Boolean,
	    bottom: Boolean
	  },
	  computed: {
	    cssClasses: function cssClasses() {
	      return {
	        'mdl-tooltip--large': this.large,
	        'mdl-tooltip--left': this.left,
	        'mdl-tooltip--right': this.right,
	        'mdl-tooltip--top': this.top,
	        'mdl-tooltip--bottom': this.bottom
	      };
	    }
	  },
	  mounted: function mounted() {
	    componentHandler.upgradeElement(this.$el, 'MaterialTooltip');
	  }
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mdl-tooltip",
	    class: _vm.cssClasses,
	    attrs: {
	      "for": _vm.target
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-e7023682", module.exports)
	  }
	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(74)
	
	/* template */
	var __vue_template__ = __webpack_require__(75)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/menu/menu.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-67b9a9cb", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-67b9a9cb", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] menu.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 74 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['target'],
	  mounted: function mounted() {
	    componentHandler.upgradeElement(this.$el, 'MaterialMenu');
	  }
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('ul', {
	    staticClass: "mdl-menu mdl-js-menu",
	    attrs: {
	      "for": _vm.target
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-67b9a9cb", module.exports)
	  }
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(77)
	
	/* template */
	var __vue_template__ = __webpack_require__(78)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/menu/menu-item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-37cc8005", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-37cc8005", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] menu-item.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 77 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    staticClass: "mdl-menu__item"
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-37cc8005", module.exports)
	  }
	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(80)
	
	/* template */
	var __vue_template__ = __webpack_require__(81)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/card.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-46fd66f8", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-46fd66f8", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] card.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _button = __webpack_require__(45);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _anchorButton = __webpack_require__(49);
	
	var _anchorButton2 = _interopRequireDefault(_anchorButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var slots = ['title', 'subtitle', 'supportingText', 'media', 'actions', 'menu'];
	
	exports.default = {
	  computed: {
	    isActionsURL: function isActionsURL() {
	      if (typeof this.actions === 'string') {
	        return this.actions.match(/^(https?:)?\/\//) != null;
	      } else {
	        return false;
	      }
	    }
	  },
	  props: {
	    title: String,
	    menu: String,
	    actions: String,
	    actionsTarget: {
	      default: '_self',
	      type: String
	    },
	    actionsText: String,
	    media: String,
	    subtitle: String,
	    supportingText: String
	  },
	  mounted: function mounted() {
	    var _this = this;
	
	    slots.forEach(function (slot, pos) {
	      if (_this[slot] === true) {
	        var el = _this.$el.children[pos];
	        if (!el || !_this.$el.attributes.getNamedItem('slot')) {
	          _this[slot] = '';
	        }
	      }
	    });
	  },
	
	  methods: {
	    triggerMenuEvent: function triggerMenuEvent() {
	      this.$emit(this.menu);
	    },
	    triggerActionsEvent: function triggerActionsEvent() {
	      this.$emit(this.actions);
	    }
	  },
	  components: {
	    mdlButton: _button2.default,
	    mdlAnchorButton: _anchorButton2.default
	  }
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mdl-card mdl-shadow--2dp"
	  }, [(_vm.title) ? _vm._t("title", [_c('div', {
	    staticClass: "mdl-card__title"
	  }, [_c('h2', {
	    staticClass: "mdl-card__title-text"
	  }, [_vm._v(_vm._s(_vm.title))])])]) : _vm._e(), (_vm.subtitle) ? _vm._t("subtitle", [_c('div', {
	    staticClass: "mdl-card__subtitle-text"
	  }, [_vm._v(_vm._s(_vm.subtitle))])]) : _vm._e(), (_vm.supportingText) ? _vm._t("supporting-text", [_c('div', {
	    staticClass: "mdl-card__supporting-text"
	  }, [_vm._v(_vm._s(_vm.supportingText))])]) : _vm._e(), (_vm.media) ? _vm._t("media", [_c('div', {
	    staticClass: "mdl-card__media"
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.media
	    }
	  })])]) : _vm._e(), (_vm.actions) ? _vm._t("actions", [_c('div', {
	    staticClass: "mdl-card__actions mdl-card--border"
	  }, [(_vm.isActionsURL) ? _c('mdl-anchor-button', {
	    staticClass: "mdl-js-ripple-effect",
	    attrs: {
	      "colored": "colored",
	      "href": _vm.actions,
	      "target": _vm.actionsTarget
	    }
	  }, [_vm._v(_vm._s(_vm.actionsText))]) : _c('mdl-button', {
	    staticClass: "mdl-js-ripple-effect",
	    attrs: {
	      "colored": "colored"
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.triggerActionsEvent($event)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.actionsText))])], 1)]) : _vm._e(), (_vm.menu) ? _vm._t("menu", [_c('div', {
	    staticClass: "mdl-card__menu"
	  }, [_c('mdl-button', {
	    staticClass: "mdl-js-ripple-effect",
	    attrs: {
	      "icon": "icon"
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.triggerMenuEvent($event)
	      }
	    }
	  }, [_c('i', {
	    staticClass: "material-icons"
	  }, [_vm._v("share")])])], 1)]) : _vm._e()], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-46fd66f8", module.exports)
	  }
	}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(83)
	
	/* template */
	var __vue_template__ = __webpack_require__(84)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/snackbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-b5ac2c0e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-b5ac2c0e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] snackbar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 83 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    displayOn: {
	      type: String,
	      required: true
	    },
	    eventSource: {
	      type: Object,
	      required: false,
	      default: function _default() {
	        return this.$root;
	      }
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;
	
	    componentHandler.upgradeElement(this.$el, 'MaterialSnackbar');
	    this.eventHandler = function (snackbarConfig) {
	      _this.$el.MaterialSnackbar.showSnackbar(snackbarConfig);
	    };
	    this.eventSource.$on(this.displayOn, this.eventHandler);
	  },
	  destroyed: function destroyed() {
	    this.eventSource.$off(this.displayOn, this.eventHandler);
	  }
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mdl-snackbar mdl-js-snackbar",
	    attrs: {
	      "aria-live": "assertive",
	      "aria-atomic": "true",
	      "aria-relevant": "text"
	    }
	  }, [_c('div', {
	    staticClass: "mdl-snackbar__text"
	  }), _c('button', {
	    staticClass: "mdl-snackbar__action",
	    attrs: {
	      "type": "button"
	    }
	  })])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-b5ac2c0e", module.exports)
	  }
	}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(86)
	
	/* script */
	__vue_exports__ = __webpack_require__(90)
	
	/* template */
	var __vue_template__ = __webpack_require__(91)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/select.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-76dce970", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-76dce970", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] select.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(87);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(89)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-76dce970!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./select.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-76dce970!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(88)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.getmdl-select .mdl-icon-toggle__label {\n  float: right;\n  margin-top: -30px;\n  color: rgba(0, 0, 0, 0.4);\n}\n.getmdl-select.is-focused .mdl-icon-toggle__label {\n  color: #3f51b5;\n}\n.getmdl-select .mdl-menu__container {\n  width: 100% !important;\n  overflow: hidden;\n}\n.getmdl-select .mdl-menu__container .mdl-menu .mdl-menu__item {\n  font-size: 16px;\n}\n.getmdl-select .mdl-menu {\n  /* Remove the 2px border */\n  width: calc(100% - 2px);\n}\n.getmdl-select--fixed-height .mdl-menu__container {\n  overflow-y: auto;\n  max-height: 300px !important;\n}\n", ""]);
	
	// exports


/***/ },
/* 88 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 90 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      name: ''
	    };
	  },
	
	
	  methods: {
	    selectValue: function selectValue(_ref) {
	      var value = _ref.value;
	
	      this.$emit('input', value);
	    },
	    setName: function setName() {
	      this.name = null;
	      for (var i = 0; i < this.optionsObject.length; ++i) {
	        var option = this.optionsObject[i];
	        if (this.value === option.value) this.name = option.name;
	      }
	      if (!this.name) this.name = this.value;
	      this.$refs.textfield.MaterialTextfield.change(this.name);
	      this.$refs.textfield.MaterialTextfield.boundBlurHandler();
	    },
	    open: function open() {
	      this.$refs.input.click();
	    }
	  },
	
	  computed: {
	    optionsObject: function optionsObject() {
	      if (this.options && this.options.length !== undefined) {
	        return this.options.map(function (option) {
	          if (typeof option === 'string') {
	            return {
	              name: option,
	              value: option
	            };
	          } else {
	            return option;
	          }
	        });
	      } else {
	        return [];
	      }
	    }
	  },
	  props: {
	    label: String,
	    id: {
	      required: true
	    },
	    value: {
	      required: false
	    },
	    options: {
	      required: true
	    }
	  },
	  mounted: function mounted() {
	    componentHandler.upgradeElements(this.$el);
	    this.setName();
	  },
	
	  watch: {
	    value: function value() {
	      this.setName();
	    }
	  }
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: "textfield",
	    staticClass: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.name),
	      expression: "name"
	    }],
	    ref: "input",
	    staticClass: "mdl-textfield__input",
	    attrs: {
	      "id": _vm.id,
	      "type": "text",
	      "readonly": ""
	    },
	    domProps: {
	      "value": _vm._s(_vm.name)
	    },
	    on: {
	      "keydown": function($event) {
	        if (_vm._k($event.keyCode, "enter", 13) && _vm._k($event.keyCode, "space", 32)) { return; }
	        _vm.open($event)
	      },
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.name = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('label', {
	    attrs: {
	      "for": _vm.id
	    }
	  }, [_c('i', {
	    staticClass: "mdl-icon-toggle__label material-icons"
	  }, [_vm._v("keyboard_arrow_down")])]), _vm._v(" "), _c('label', {
	    staticClass: "mdl-textfield__label",
	    attrs: {
	      "for": _vm.id
	    }
	  }, [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _c('ul', {
	    ref: "menu",
	    staticClass: "mdl-menu mdl-menu--bottom-left mdl-js-menu",
	    attrs: {
	      "for": _vm.id
	    }
	  }, _vm._l((_vm.optionsObject), function(option) {
	    return _c('li', {
	      staticClass: "mdl-menu__item",
	      on: {
	        "click": function($event) {
	          _vm.selectValue(option)
	        }
	      }
	    }, [_vm._v(_vm._s(option.name))])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-76dce970", module.exports)
	  }
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(93)
	
	/* script */
	__vue_exports__ = __webpack_require__(95)
	
	/* template */
	var __vue_template__ = __webpack_require__(98)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/dialog.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-f1faa888", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-f1faa888", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] dialog.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(94);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(89)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-f1faa888!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dialog.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-f1faa888!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dialog.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(88)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mdl-dialog-container {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content:center;\n  align-items: center;\n  top:0;\n  left: 0;\n  z-index: 10000;\n  background: rgba(0,0,0,0.3);\n}\n.mdl-dialog-container .mdl-dialog {\n  background-color:white;\n  padding: 1em;\n  color: black;\n  width: initial;\n  min-width: 280px;\n}\n", ""]);
	
	// exports


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _button = __webpack_require__(45);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _focusTrap = __webpack_require__(96);
	
	var _focusTrap2 = _interopRequireDefault(_focusTrap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    mdlButton: _button2.default
	  },
	
	  computed: {
	    actionsClasses: function actionsClasses() {
	      return {
	        'mdl-dialog__actions--full-width': this.fullWidth
	      };
	    }
	  },
	
	  data: function data() {
	    return {
	      show: false
	    };
	  },
	
	
	  props: {
	    title: {
	      type: String
	    },
	    fullWidth: Boolean,
	    noFocusTrap: {
	      type: Boolean,
	      default: false
	    }
	  },
	
	  mounted: function mounted() {
	    if (!this.noFocusTrap) this._focusTrap = (0, _focusTrap2.default)(this.$el);
	  },
	
	
	  methods: {
	    open: function open() {
	      var _this = this;
	
	      this.show = true;
	      if (this._focusTrap) this.$nextTick(function () {
	        return _this._focusTrap.activate();
	      });
	      this.$emit('open');
	    },
	    close: function close() {
	      this.show = false;
	      if (this._focusTrap) this._focusTrap.deactivate();
	      this.$emit('close');
	    },
	    closeIfOutside: function closeIfOutside(_ref) {
	      var target = _ref.target;
	
	      if (target === this.$refs.out) this.close();
	    }
	  },
	
	  watch: {
	    noFocusTrap: function noFocusTrap(_noFocusTrap) {
	      this._focusTrap = _noFocusTrap ? null : (0, _focusTrap2.default)(this.$el);
	    }
	  }
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var tabbable = __webpack_require__(97);
	
	var listeningFocusTrap = null;
	
	function focusTrap(element, userOptions) {
	  var tabbableNodes = [];
	  var nodeFocusedBeforeActivation = null;
	  var active = false;
	  var paused = false;
	
	  var container = (typeof element === 'string')
	    ? document.querySelector(element)
	    : element;
	
	  var config = userOptions || {};
	  config.returnFocusOnDeactivate = (userOptions && userOptions.returnFocusOnDeactivate !== undefined)
	    ? userOptions.returnFocusOnDeactivate
	    : true;
	  config.escapeDeactivates = (userOptions && userOptions.escapeDeactivates !== undefined)
	    ? userOptions.escapeDeactivates
	    : true;
	
	  var trap = {
	    activate: activate,
	    deactivate: deactivate,
	    pause: pause,
	    unpause: unpause,
	  };
	
	  return trap;
	
	  function activate(activateOptions) {
	    if (active) return;
	
	    var defaultedActivateOptions = {
	      onActivate: (activateOptions && activateOptions.onActivate !== undefined)
	        ? activateOptions.onActivate
	        : config.onActivate,
	    };
	
	    active = true;
	    paused = false;
	    nodeFocusedBeforeActivation = document.activeElement;
	
	    if (defaultedActivateOptions.onActivate) {
	      defaultedActivateOptions.onActivate();
	    }
	
	    addListeners();
	    return trap;
	  }
	
	  function deactivate(deactivateOptions) {
	    if (!active) return;
	
	    var defaultedDeactivateOptions = {
	      returnFocus: (deactivateOptions && deactivateOptions.returnFocus !== undefined)
	        ? deactivateOptions.returnFocus
	        : config.returnFocusOnDeactivate,
	      onDeactivate: (deactivateOptions && deactivateOptions.onDeactivate !== undefined)
	        ? deactivateOptions.onDeactivate
	        : config.onDeactivate,
	    };
	
	    removeListeners();
	
	    if (defaultedDeactivateOptions.onDeactivate) {
	      defaultedDeactivateOptions.onDeactivate();
	    }
	
	    if (defaultedDeactivateOptions.returnFocus) {
	      setTimeout(function () {
	        tryFocus(nodeFocusedBeforeActivation);
	      }, 0);
	    }
	
	    active = false;
	    paused = false;
	    return this;
	  }
	
	  function pause() {
	    if (paused || !active) return;
	    paused = true;
	    removeListeners();
	  }
	
	  function unpause() {
	    if (!paused || !active) return;
	    paused = false;
	    addListeners();
	  }
	
	  function addListeners() {
	    if (!active) return;
	
	    // There can be only one listening focus trap at a time
	    if (listeningFocusTrap) {
	      listeningFocusTrap.pause();
	    }
	    listeningFocusTrap = trap;
	
	    updateTabbableNodes();
	    tryFocus(firstFocusNode());
	    document.addEventListener('focus', checkFocus, true);
	    document.addEventListener('click', checkClick, true);
	    document.addEventListener('mousedown', checkPointerDown, true);
	    document.addEventListener('touchstart', checkPointerDown, true);
	    document.addEventListener('keydown', checkKey, true);
	
	    return trap;
	  }
	
	  function removeListeners() {
	    if (!active || listeningFocusTrap !== trap) return;
	
	    document.removeEventListener('focus', checkFocus, true);
	    document.removeEventListener('click', checkClick, true);
	    document.removeEventListener('mousedown', checkPointerDown, true);
	    document.removeEventListener('touchstart', checkPointerDown, true);
	    document.removeEventListener('keydown', checkKey, true);
	
	    listeningFocusTrap = null;
	
	    return trap;
	  }
	
	  function getNodeForOption(optionName) {
	    var optionValue = config[optionName];
	    var node = optionValue;
	    if (!optionValue) {
	      return null;
	    }
	    if (typeof optionValue === 'string') {
	      node = document.querySelector(optionValue);
	      if (!node) {
	        throw new Error('`' + optionName + '` refers to no known node');
	      }
	    }
	    if (typeof optionValue === 'function') {
	      node = optionValue();
	      if (!node) {
	        throw new Error('`' + optionName + '` did not return a node');
	      }
	    }
	    return node;
	  }
	
	  function firstFocusNode() {
	    var node;
	    if (getNodeForOption('initialFocus') !== null) {
	      node = getNodeForOption('initialFocus');
	    } else if (container.contains(document.activeElement)) {
	      node = document.activeElement;
	    } else {
	      node = tabbableNodes[0] || getNodeForOption('fallbackFocus');
	    }
	
	    if (!node) {
	      throw new Error('You can\'t have a focus-trap without at least one focusable element');
	    }
	
	    return node;
	  }
	
	  // This needs to be done on mousedown and touchstart instead of click
	  // so that it precedes the focus event
	  function checkPointerDown(e) {
	    if (config.clickOutsideDeactivates && !container.contains(e.target)) {
	      deactivate({ returnFocus: false });
	    }
	  }
	
	  function checkClick(e) {
	    if (config.clickOutsideDeactivates) return;
	    if (container.contains(e.target)) return;
	    e.preventDefault();
	    e.stopImmediatePropagation();
	  }
	
	  function checkFocus(e) {
	    if (container.contains(e.target)) return;
	    e.preventDefault();
	    e.stopImmediatePropagation();
	    // Checking for a blur method here resolves a Firefox issue (#15)
	    if (typeof e.target.blur === 'function') e.target.blur();
	  }
	
	  function checkKey(e) {
	    if (e.key === 'Tab' || e.keyCode === 9) {
	      handleTab(e);
	    }
	
	    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
	      deactivate();
	    }
	  }
	
	  function handleTab(e) {
	    e.preventDefault();
	    updateTabbableNodes();
	    var currentFocusIndex = tabbableNodes.indexOf(e.target);
	    var lastTabbableNode = tabbableNodes[tabbableNodes.length - 1];
	    var firstTabbableNode = tabbableNodes[0];
	
	    if (e.shiftKey) {
	      if (e.target === firstTabbableNode || tabbableNodes.indexOf(e.target) === -1) {
	        return tryFocus(lastTabbableNode);
	      }
	      return tryFocus(tabbableNodes[currentFocusIndex - 1]);
	    }
	
	    if (e.target === lastTabbableNode) return tryFocus(firstTabbableNode);
	
	    tryFocus(tabbableNodes[currentFocusIndex + 1]);
	  }
	
	  function updateTabbableNodes() {
	    tabbableNodes = tabbable(container);
	  }
	}
	
	function isEscapeEvent(e) {
	  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
	}
	
	function tryFocus(node) {
	  if (!node || !node.focus) return;
	  node.focus();
	  if (node.tagName.toLowerCase() === 'input') {
	    node.select();
	  }
	}
	
	module.exports = focusTrap;


/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = function(el) {
	  var basicTabbables = [];
	  var orderedTabbables = [];
	
	  // A node is "available" if
	  // - it's computed style
	  var isUnavailable = createIsUnavailable();
	
	  var candidateSelectors = [
	    'input',
	    'select',
	    'a[href]',
	    'textarea',
	    'button',
	    '[tabindex]',
	  ];
	
	  var candidates = el.querySelectorAll(candidateSelectors);
	
	  var candidate, candidateIndex;
	  for (var i = 0, l = candidates.length; i < l; i++) {
	    candidate = candidates[i];
	    candidateIndex = candidate.tabIndex;
	
	    if (
	      candidateIndex < 0
	      || (candidate.tagName === 'INPUT' && candidate.type === 'hidden')
	      || candidate.disabled
	      || isUnavailable(candidate)
	    ) {
	      continue;
	    }
	
	    if (candidateIndex === 0) {
	      basicTabbables.push(candidate);
	    } else {
	      orderedTabbables.push({
	        tabIndex: candidateIndex,
	        node: candidate,
	      });
	    }
	  }
	
	  var tabbableNodes = orderedTabbables
	    .sort(function(a, b) {
	      return a.tabIndex - b.tabIndex;
	    })
	    .map(function(a) {
	      return a.node
	    });
	
	  Array.prototype.push.apply(tabbableNodes, basicTabbables);
	
	  return tabbableNodes;
	}
	
	function createIsUnavailable() {
	  // Node cache must be refreshed on every check, in case
	  // the content of the element has changed
	  var isOffCache = [];
	
	  // "off" means `display: none;`, as opposed to "hidden",
	  // which means `visibility: hidden;`. getComputedStyle
	  // accurately reflects visiblity in context but not
	  // "off" state, so we need to recursively check parents.
	
	  function isOff(node, nodeComputedStyle) {
	    if (node === document.documentElement) return false;
	
	    // Find the cached node (Array.prototype.find not available in IE9)
	    for (var i = 0, length = isOffCache.length; i < length; i++) {
	      if (isOffCache[i][0] === node) return isOffCache[i][1];
	    }
	
	    nodeComputedStyle = nodeComputedStyle || window.getComputedStyle(node);
	
	    var result = false;
	
	    if (nodeComputedStyle.display === 'none') {
	      result = true;
	    } else if (node.parentNode) {
	      result = isOff(node.parentNode);
	    }
	
	    isOffCache.push([node, result]);
	
	    return result;
	  }
	
	  return function isUnavailable(node) {
	    if (node === document.documentElement) return false;
	
	    var computedStyle = window.getComputedStyle(node);
	
	    if (isOff(node, computedStyle)) return true;
	
	    return computedStyle.visibility === 'hidden';
	  }
	}


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    ref: "out",
	    staticClass: "mdl-dialog-container",
	    on: {
	      "click": _vm.closeIfOutside
	    }
	  }, [_c('div', {
	    staticClass: "mdl-dialog"
	  }, [_c('div', {
	    staticClass: "mdl-dialog__title"
	  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
	    staticClass: "mdl-dialog__content"
	  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
	    staticClass: "mdl-dialog__actions",
	    class: _vm.actionsClasses
	  }, [_vm._t("actions", [_c('mdl-button', {
	    staticClass: "mdl-js-ripple-effect",
	    nativeOn: {
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.close($event)
	      }
	    }
	  }, [_vm._v("Close")])])], 2)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-f1faa888", module.exports)
	  }
	}

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(100)
	
	/* template */
	var __vue_template__ = __webpack_require__(104)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/tabs/tabs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4b9415aa", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4b9415aa", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tabs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tabLink = __webpack_require__(101);
	
	var _tabLink2 = _interopRequireDefault(_tabLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function findTabIndex(tabs, id) {
	  for (var i = 0; i < tabs.length; ++i) {
	    if (tabs[i].id === id) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	exports.default = {
	  props: {
	    value: {
	      required: false,
	      type: [String, Number]
	    },
	    noRippleEffect: {
	      type: Boolean,
	      required: false
	    }
	  },
	  data: function data() {
	    return {
	      tabs: []
	    };
	  },
	
	  methods: {
	    selectTab: function selectTab(_ref) {
	      var id = _ref.id;
	
	      this.$emit('input', id);
	    },
	    isSelected: function isSelected(_ref2) {
	      var id = _ref2.id;
	
	      return id === this.value;
	    },
	    addTab: function addTab(tab) {
	      this.tabs.push(tab);
	    },
	    updateTab: function updateTab(_ref3, tab) {
	      var id = _ref3.id;
	
	      var index = findTabIndex(this.tabs, id);
	      if (index > -1) this.tabs.splice(index, 1, tab);
	    },
	    removeTab: function removeTab(_ref4) {
	      var id = _ref4.id;
	
	      var index = findTabIndex(this.tabs, id);
	      if (index > -1) this.tabs.splice(index, 1);
	    }
	  },
	  components: { TabLink: _tabLink2.default }
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(102)
	
	/* template */
	var __vue_template__ = __webpack_require__(103)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/tabs/tab-link.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-192c3c5f", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-192c3c5f", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tab-link.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 102 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    tab: Object,
	    noRippleEffect: {
	      required: false
	    }
	  },
	  mounted: function mounted() {
	    componentHandler.upgradeElement(this.$refs.ripple, 'MaterialRipple');
	  }
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    staticClass: "mdl-tabs__tab",
	    attrs: {
	      "href": "#"
	    },
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.tab.title) + "\n  "), _c('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.noRippleEffect),
	      expression: "!noRippleEffect"
	    }],
	    ref: "ripple",
	    staticClass: "mdl-tabs__ripple-container mdl-js-ripple-effect"
	  }, [_c('span', {
	    staticClass: "mdl-ripple"
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-192c3c5f", module.exports)
	  }
	}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mdl-tabs is-upgraded"
	  }, [_c('div', {
	    staticClass: "mdl-tabs__tab-bar"
	  }, _vm._l((_vm.tabs), function(tab) {
	    return _c('tab-link', {
	      key: tab.id,
	      staticClass: "mdl-tabs__tab",
	      class: {
	        'is-active': _vm.isSelected(tab)
	      },
	      attrs: {
	        "no-ripple-effect": _vm.noRippleEffect,
	        "tab": tab
	      },
	      nativeOn: {
	        "click": function($event) {
	          _vm.selectTab(tab)
	        }
	      }
	    })
	  })), _vm._v(" "), _vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4b9415aa", module.exports)
	  }
	}

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(106)
	
	/* template */
	var __vue_template__ = __webpack_require__(114)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/tabs/tab.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-9751ea10", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-9751ea10", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tab.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(107);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function tabToOject(tab) {
	  return typeof tab === 'string' ? { id: tab, title: tab } : (0, _extends3.default)({ id: tab.id || tab.title }, tab);
	}
	
	exports.default = {
	  computed: {
	    selected: function selected() {
	      return this.$parent.isSelected(this.tabData);
	    },
	    id: function id() {
	      return typeof this.tab === 'string' ? this.tab : this.tab.id || this.tab.title;
	    },
	    tabData: function tabData() {
	      return tabToOject(this.tab);
	    }
	  },
	  props: {
	    tab: {
	      required: true,
	      type: [String, Object]
	    }
	  },
	  watch: {
	    tab: function tab(newTab, oldTab) {
	      this.$parent.updateTab(tabToOject(oldTab), this.tabData);
	    }
	  },
	  mounted: function mounted() {
	    this.$parent.addTab(this.tabData);
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.$parent.removeTab(this.tabData);
	  }
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(108);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(110);
	module.exports = __webpack_require__(23).Object.assign;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(22);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(111)});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(6)
	  , gOPS     = __webpack_require__(112)
	  , pIE      = __webpack_require__(113)
	  , toObject = __webpack_require__(4)
	  , IObject  = __webpack_require__(10)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(32)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 112 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 113 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mdl-tabs__panel",
	    class: {
	      'is-active': _vm.selected
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-9751ea10", module.exports)
	  }
	}

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(116)
	
	/* template */
	var __vue_template__ = __webpack_require__(117)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/chip.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-401a67c0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-401a67c0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] chip.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 116 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      deletable: !!this._events.delete
	    };
	  },
	
	  props: {
	    deleteIcon: {
	      type: String,
	      default: 'cancel'
	    },
	    contactImage: String,
	    contact: String
	  },
	  computed: {
	    hasContact: function hasContact() {
	      this.contactImage;
	      return this.contact || this.contactImage;
	    },
	    chipClasses: function chipClasses() {
	      return {
	        'mdl-chip--contact': this.hasContact,
	        'mdl-chip--deletable': this.deletable
	      };
	    }
	  }
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticClass: "mdl-chip",
	    class: _vm.chipClasses
	  }, [_vm._t("chip-contact", [(_vm.contact) ? _c('span', {
	    staticClass: "mdl-chip__contact mdl-color--teal mdl-color-text--white"
	  }, [_vm._v(_vm._s(_vm.contact))]) : _vm._e(), _vm._v(" "), (_vm.contactImage) ? _c('img', {
	    staticClass: "mdl-chip__contact",
	    attrs: {
	      "src": _vm.contactImage
	    }
	  }) : _vm._e()]), _vm._v(" "), _c('span', {
	    staticClass: "mdl-chip__text"
	  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.deletable) ? _c('a', {
	    staticClass: "mdl-chip__action",
	    attrs: {
	      "href": "#"
	    },
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.$emit('delete')
	      }
	    }
	  }, [_c('i', {
	    staticClass: "material-icons"
	  }, [_vm._v(_vm._s(_vm.deleteIcon))])]) : _vm._e()], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-401a67c0", module.exports)
	  }
	}

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(119)
	
	/* template */
	var __vue_template__ = __webpack_require__(120)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/layout/layout.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7b4ff16b", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-7b4ff16b", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] layout.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 119 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  computed: {
	    layoutClasses: function layoutClasses() {
	      return {
	        'mdl-layout--fixed-header': this.isFixed,
	        'mdl-layout--fixed-drawer': this.fixedDrawer
	      };
	    },
	    headerClasses: function headerClasses() {
	      return {
	        'mdl-layout__header--scroll': !this.isFixed,
	        'mdl-layout__header--waterfall': this.waterfall,
	        'mdl-layout__header--transparent': this.transparentHeader
	      };
	    },
	    isFixed: function isFixed() {
	      return this.fixedHeader || this.fixedDrawer || this.waterfall;
	    }
	  },
	
	  props: {
	    fixedHeader: Boolean,
	    fixedDrawer: Boolean,
	    transparentHeader: Boolean,
	    waterfall: Boolean
	  },
	  data: function data() {
	    return {
	      selected: null
	    };
	  },
	  mounted: function mounted() {
	    componentHandler.upgradeElement(this.$el);
	  },
	
	
	  watch: {
	    isFixed: function isFixed(_isFixed) {
	      var action = _isFixed ? 'remove' : 'add';
	      if (this.$el.parentElement) {
	        this.$el.parentElement.classList[action]('has-scrolling-header');
	      }
	    }
	  }
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mdl-layout mdl-js-layout",
	    class: _vm.layoutClasses
	  }, [_c('header', {
	    staticClass: "mdl-layout__header",
	    class: _vm.headerClasses
	  }, [_vm._t("header")], 2), _vm._v(" "), _vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7b4ff16b", module.exports)
	  }
	}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(122)
	
	/* template */
	var __vue_template__ = __webpack_require__(123)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/layout/header-row.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2fab774a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2fab774a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] header-row.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 122 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    title: [Boolean, String]
	  },
	  mounted: function mounted() {
	    componentHandler.upgradeElement(this.$el);
	  }
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mdl-layout__header-row"
	  }, [(_vm.title) ? _c('span', {
	    staticClass: "mdl-layout-title"
	  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2fab774a", module.exports)
	  }
	}

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(125)
	
	/* template */
	var __vue_template__ = __webpack_require__(126)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/layout/drawer.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-ff88989c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-ff88989c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] drawer.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 125 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    title: [Boolean, String]
	  },
	  mounted: function mounted() {
	    componentHandler.upgradeElement(this.$el);
	  }
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mdl-layout__drawer"
	  }, [(_vm.title) ? _c('span', {
	    staticClass: "mdl-layout-title"
	  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-ff88989c", module.exports)
	  }
	}

/***/ },
/* 127 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  functional: true,
	  render: function render(createElement, context) {
	    var data = context.data;
	
	    data['class'] = data['class'] || {};
	    data['class']['mdl-layout__content'] = true;
	
	    return createElement('main', data, context.children);
	  }
	};

/***/ },
/* 128 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  functional: true,
	  render: function render(createElement, context) {
	    var data = context.data;
	
	    data['class'] = data['class'] || {};
	    data['class']['mdl-layout-spacer'] = true;
	
	    return createElement('div', data, []);
	  }
	};

/***/ },
/* 129 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  functional: true,
	  render: function render(createElement, context) {
	    var data = context.data;
	
	    data['class'] = data['class'] || {};
	    data['class']['mdl-navigation'] = true;
	
	    return createElement('nav', data, context.children);
	  }
	};

/***/ },
/* 130 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  functional: true,
	  props: {
	    icon: String
	  },
	  render: function render(createElement, context) {
	    var children = context.children;
	    var data = context.data;
	
	    if (context.props.icon) {
	      var icon = createElement('i', {
	        'class': {
	          'material-icons': true
	        }
	      }, context.props.icon);
	
	      children.unshift(icon);
	    }
	
	    data['class'] = data['class'] || {};
	    data['class']['mdl-navigation__link'] = true;
	
	    return createElement('a', data, children);
	  }
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-mdl.js.map

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return Resource; });
/*!
 * vue-resource v1.3.1
 * https://github.com/pagekit/vue-resource
 * Released under the MIT License.
 */

/**
 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
 */

var RESOLVED = 0;
var REJECTED = 1;
var PENDING  = 2;

function Promise$1(executor) {

    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];

    var promise = this;

    try {
        executor(function (x) {
            promise.resolve(x);
        }, function (r) {
            promise.reject(r);
        });
    } catch (e) {
        promise.reject(e);
    }
}

Promise$1.reject = function (r) {
    return new Promise$1(function (resolve, reject) {
        reject(r);
    });
};

Promise$1.resolve = function (x) {
    return new Promise$1(function (resolve, reject) {
        resolve(x);
    });
};

Promise$1.all = function all(iterable) {
    return new Promise$1(function (resolve, reject) {
        var count = 0, result = [];

        if (iterable.length === 0) {
            resolve(result);
        }

        function resolver(i) {
            return function (x) {
                result[i] = x;
                count += 1;

                if (count === iterable.length) {
                    resolve(result);
                }
            };
        }

        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolver(i), reject);
        }
    });
};

Promise$1.race = function race(iterable) {
    return new Promise$1(function (resolve, reject) {
        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolve, reject);
        }
    });
};

var p$1 = Promise$1.prototype;

p$1.resolve = function resolve(x) {
    var promise = this;

    if (promise.state === PENDING) {
        if (x === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        var called = false;

        try {
            var then = x && x['then'];

            if (x !== null && typeof x === 'object' && typeof then === 'function') {
                then.call(x, function (x) {
                    if (!called) {
                        promise.resolve(x);
                    }
                    called = true;

                }, function (r) {
                    if (!called) {
                        promise.reject(r);
                    }
                    called = true;
                });
                return;
            }
        } catch (e) {
            if (!called) {
                promise.reject(e);
            }
            return;
        }

        promise.state = RESOLVED;
        promise.value = x;
        promise.notify();
    }
};

p$1.reject = function reject(reason) {
    var promise = this;

    if (promise.state === PENDING) {
        if (reason === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        promise.state = REJECTED;
        promise.value = reason;
        promise.notify();
    }
};

p$1.notify = function notify() {
    var promise = this;

    nextTick(function () {
        if (promise.state !== PENDING) {
            while (promise.deferred.length) {
                var deferred = promise.deferred.shift(),
                    onResolved = deferred[0],
                    onRejected = deferred[1],
                    resolve = deferred[2],
                    reject = deferred[3];

                try {
                    if (promise.state === RESOLVED) {
                        if (typeof onResolved === 'function') {
                            resolve(onResolved.call(undefined, promise.value));
                        } else {
                            resolve(promise.value);
                        }
                    } else if (promise.state === REJECTED) {
                        if (typeof onRejected === 'function') {
                            resolve(onRejected.call(undefined, promise.value));
                        } else {
                            reject(promise.value);
                        }
                    }
                } catch (e) {
                    reject(e);
                }
            }
        }
    });
};

p$1.then = function then(onResolved, onRejected) {
    var promise = this;

    return new Promise$1(function (resolve, reject) {
        promise.deferred.push([onResolved, onRejected, resolve, reject]);
        promise.notify();
    });
};

p$1.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};

/**
 * Promise adapter.
 */

if (typeof Promise === 'undefined') {
    window.Promise = Promise$1;
}

function PromiseObj(executor, context) {

    if (executor instanceof Promise) {
        this.promise = executor;
    } else {
        this.promise = new Promise(executor.bind(context));
    }

    this.context = context;
}

PromiseObj.all = function (iterable, context) {
    return new PromiseObj(Promise.all(iterable), context);
};

PromiseObj.resolve = function (value, context) {
    return new PromiseObj(Promise.resolve(value), context);
};

PromiseObj.reject = function (reason, context) {
    return new PromiseObj(Promise.reject(reason), context);
};

PromiseObj.race = function (iterable, context) {
    return new PromiseObj(Promise.race(iterable), context);
};

var p = PromiseObj.prototype;

p.bind = function (context) {
    this.context = context;
    return this;
};

p.then = function (fulfilled, rejected) {

    if (fulfilled && fulfilled.bind && this.context) {
        fulfilled = fulfilled.bind(this.context);
    }

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.then(fulfilled, rejected), this.context);
};

p.catch = function (rejected) {

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.catch(rejected), this.context);
};

p.finally = function (callback) {

    return this.then(function (value) {
            callback.call(this);
            return value;
        }, function (reason) {
            callback.call(this);
            return Promise.reject(reason);
        }
    );
};

/**
 * Utility functions.
 */

var ref = {};
var hasOwnProperty = ref.hasOwnProperty;

var ref$1 = [];
var slice = ref$1.slice;
var debug = false;
var ntick;

var inBrowser = typeof window !== 'undefined';

var Util = function (ref) {
    var config = ref.config;
    var nextTick = ref.nextTick;

    ntick = nextTick;
    debug = config.debug || !config.silent;
};

function warn(msg) {
    if (typeof console !== 'undefined' && debug) {
        console.warn('[VueResource warn]: ' + msg);
    }
}

function error(msg) {
    if (typeof console !== 'undefined') {
        console.error(msg);
    }
}

function nextTick(cb, ctx) {
    return ntick(cb, ctx);
}

function trim(str) {
    return str ? str.replace(/^\s*|\s*$/g, '') : '';
}

function toLower(str) {
    return str ? str.toLowerCase() : '';
}

function toUpper(str) {
    return str ? str.toUpperCase() : '';
}

var isArray = Array.isArray;

function isString(val) {
    return typeof val === 'string';
}



function isFunction(val) {
    return typeof val === 'function';
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function isPlainObject(obj) {
    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
}

function isBlob(obj) {
    return typeof Blob !== 'undefined' && obj instanceof Blob;
}

function isFormData(obj) {
    return typeof FormData !== 'undefined' && obj instanceof FormData;
}

function when(value, fulfilled, rejected) {

    var promise = PromiseObj.resolve(value);

    if (arguments.length < 2) {
        return promise;
    }

    return promise.then(fulfilled, rejected);
}

function options(fn, obj, opts) {

    opts = opts || {};

    if (isFunction(opts)) {
        opts = opts.call(obj);
    }

    return merge(fn.bind({$vm: obj, $options: opts}), fn, {$options: opts});
}

function each(obj, iterator) {

    var i, key;

    if (isArray(obj)) {
        for (i = 0; i < obj.length; i++) {
            iterator.call(obj[i], obj[i], i);
        }
    } else if (isObject(obj)) {
        for (key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                iterator.call(obj[key], obj[key], key);
            }
        }
    }

    return obj;
}

var assign = Object.assign || _assign;

function merge(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source, true);
    });

    return target;
}

function defaults(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {

        for (var key in source) {
            if (target[key] === undefined) {
                target[key] = source[key];
            }
        }

    });

    return target;
}

function _assign(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source);
    });

    return target;
}

function _merge(target, source, deep) {
    for (var key in source) {
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
                target[key] = {};
            }
            if (isArray(source[key]) && !isArray(target[key])) {
                target[key] = [];
            }
            _merge(target[key], source[key], deep);
        } else if (source[key] !== undefined) {
            target[key] = source[key];
        }
    }
}

/**
 * Root Prefix Transform.
 */

var root = function (options$$1, next) {

    var url = next(options$$1);

    if (isString(options$$1.root) && !url.match(/^(https?:)?\//)) {
        url = options$$1.root + '/' + url;
    }

    return url;
};

/**
 * Query Parameter Transform.
 */

var query = function (options$$1, next) {

    var urlParams = Object.keys(Url.options.params), query = {}, url = next(options$$1);

    each(options$$1.params, function (value, key) {
        if (urlParams.indexOf(key) === -1) {
            query[key] = value;
        }
    });

    query = Url.params(query);

    if (query) {
        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
    }

    return url;
};

/**
 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
 */

function expand(url, params, variables) {

    var tmpl = parse(url), expanded = tmpl.expand(params);

    if (variables) {
        variables.push.apply(variables, tmpl.vars);
    }

    return expanded;
}

function parse(template) {

    var operators = ['+', '#', '.', '/', ';', '?', '&'], variables = [];

    return {
        vars: variables,
        expand: function expand(context) {
            return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
                if (expression) {

                    var operator = null, values = [];

                    if (operators.indexOf(expression.charAt(0)) !== -1) {
                        operator = expression.charAt(0);
                        expression = expression.substr(1);
                    }

                    expression.split(/,/g).forEach(function (variable) {
                        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
                        variables.push(tmp[1]);
                    });

                    if (operator && operator !== '+') {

                        var separator = ',';

                        if (operator === '?') {
                            separator = '&';
                        } else if (operator !== '#') {
                            separator = operator;
                        }

                        return (values.length !== 0 ? operator : '') + values.join(separator);
                    } else {
                        return values.join(',');
                    }

                } else {
                    return encodeReserved(literal);
                }
            });
        }
    };
}

function getValues(context, operator, key, modifier) {

    var value = context[key], result = [];

    if (isDefined(value) && value !== '') {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            value = value.toString();

            if (modifier && modifier !== '*') {
                value = value.substring(0, parseInt(modifier, 10));
            }

            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
        } else {
            if (modifier === '*') {
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            result.push(encodeValue(operator, value[k], k));
                        }
                    });
                }
            } else {
                var tmp = [];

                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        tmp.push(encodeValue(operator, value));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            tmp.push(encodeURIComponent(k));
                            tmp.push(encodeValue(operator, value[k].toString()));
                        }
                    });
                }

                if (isKeyOperator(operator)) {
                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
                } else if (tmp.length !== 0) {
                    result.push(tmp.join(','));
                }
            }
        }
    } else {
        if (operator === ';') {
            result.push(encodeURIComponent(key));
        } else if (value === '' && (operator === '&' || operator === '?')) {
            result.push(encodeURIComponent(key) + '=');
        } else if (value === '') {
            result.push('');
        }
    }

    return result;
}

function isDefined(value) {
    return value !== undefined && value !== null;
}

function isKeyOperator(operator) {
    return operator === ';' || operator === '&' || operator === '?';
}

function encodeValue(operator, value, key) {

    value = (operator === '+' || operator === '#') ? encodeReserved(value) : encodeURIComponent(value);

    if (key) {
        return encodeURIComponent(key) + '=' + value;
    } else {
        return value;
    }
}

function encodeReserved(str) {
    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
        if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part);
        }
        return part;
    }).join('');
}

/**
 * URL Template (RFC 6570) Transform.
 */

var template = function (options) {

    var variables = [], url = expand(options.url, options.params, variables);

    variables.forEach(function (key) {
        delete options.params[key];
    });

    return url;
};

/**
 * Service for URL templating.
 */

function Url(url, params) {

    var self = this || {}, options$$1 = url, transform;

    if (isString(url)) {
        options$$1 = {url: url, params: params};
    }

    options$$1 = merge({}, Url.options, self.$options, options$$1);

    Url.transforms.forEach(function (handler) {

        if (isString(handler)) {
            handler = Url.transform[handler];
        }

        if (isFunction(handler)) {
            transform = factory(handler, transform, self.$vm);
        }

    });

    return transform(options$$1);
}

/**
 * Url options.
 */

Url.options = {
    url: '',
    root: null,
    params: {}
};

/**
 * Url transforms.
 */

Url.transform = {template: template, query: query, root: root};
Url.transforms = ['template', 'query', 'root'];

/**
 * Encodes a Url parameter string.
 *
 * @param {Object} obj
 */

Url.params = function (obj) {

    var params = [], escape = encodeURIComponent;

    params.add = function (key, value) {

        if (isFunction(value)) {
            value = value();
        }

        if (value === null) {
            value = '';
        }

        this.push(escape(key) + '=' + escape(value));
    };

    serialize(params, obj);

    return params.join('&').replace(/%20/g, '+');
};

/**
 * Parse a URL and return its components.
 *
 * @param {String} url
 */

Url.parse = function (url) {

    var el = document.createElement('a');

    if (document.documentMode) {
        el.href = url;
        url = el.href;
    }

    el.href = url;

    return {
        href: el.href,
        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
        port: el.port,
        host: el.host,
        hostname: el.hostname,
        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
        search: el.search ? el.search.replace(/^\?/, '') : '',
        hash: el.hash ? el.hash.replace(/^#/, '') : ''
    };
};

function factory(handler, next, vm) {
    return function (options$$1) {
        return handler.call(vm, options$$1, next);
    };
}

function serialize(params, obj, scope) {

    var array = isArray(obj), plain = isPlainObject(obj), hash;

    each(obj, function (value, key) {

        hash = isObject(value) || isArray(value);

        if (scope) {
            key = scope + '[' + (plain || hash ? key : '') + ']';
        }

        if (!scope && array) {
            params.add(value.name, value.value);
        } else if (hash) {
            serialize(params, value, key);
        } else {
            params.add(key, value);
        }
    });
}

/**
 * XDomain client (Internet Explorer).
 */

var xdrClient = function (request) {
    return new PromiseObj(function (resolve) {

        var xdr = new XDomainRequest(), handler = function (ref) {
            var type = ref.type;


            var status = 0;

            if (type === 'load') {
                status = 200;
            } else if (type === 'error') {
                status = 500;
            }

            resolve(request.respondWith(xdr.responseText, {status: status}));
        };

        request.abort = function () { return xdr.abort(); };

        xdr.open(request.method, request.getUrl());

        if (request.timeout) {
            xdr.timeout = request.timeout;
        }

        xdr.onload = handler;
        xdr.onabort = handler;
        xdr.onerror = handler;
        xdr.ontimeout = handler;
        xdr.onprogress = function () {};
        xdr.send(request.getBody());
    });
};

/**
 * CORS Interceptor.
 */

var SUPPORTS_CORS = inBrowser && 'withCredentials' in new XMLHttpRequest();

var cors = function (request, next) {

    if (inBrowser) {

        var orgUrl = Url.parse(location.href);
        var reqUrl = Url.parse(request.getUrl());

        if (reqUrl.protocol !== orgUrl.protocol || reqUrl.host !== orgUrl.host) {

            request.crossOrigin = true;
            request.emulateHTTP = false;

            if (!SUPPORTS_CORS) {
                request.client = xdrClient;
            }
        }
    }

    next();
};

/**
 * Body Interceptor.
 */

var body = function (request, next) {

    if (isFormData(request.body)) {

        request.headers.delete('Content-Type');

    } else if (isObject(request.body) || isArray(request.body)) {

        if (request.emulateJSON) {
            request.body = Url.params(request.body);
            request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
        } else {
            request.body = JSON.stringify(request.body);
        }
    }

    next(function (response) {

        Object.defineProperty(response, 'data', {

            get: function get() {
                return this.body;
            },

            set: function set(body) {
                this.body = body;
            }

        });

        return response.bodyText ? when(response.text(), function (text) {

            var type = response.headers.get('Content-Type') || '';

            if (type.indexOf('application/json') === 0 || isJson(text)) {

                try {
                    response.body = JSON.parse(text);
                } catch (e) {
                    response.body = null;
                }

            } else {
                response.body = text;
            }

            return response;

        }) : response;

    });
};

function isJson(str) {

    var start = str.match(/^\[|^\{(?!\{)/), end = {'[': /]$/, '{': /}$/};

    return start && end[start[0]].test(str);
}

/**
 * JSONP client (Browser).
 */

var jsonpClient = function (request) {
    return new PromiseObj(function (resolve) {

        var name = request.jsonp || 'callback', callback = request.jsonpCallback || '_jsonp' + Math.random().toString(36).substr(2), body = null, handler, script;

        handler = function (ref) {
            var type = ref.type;


            var status = 0;

            if (type === 'load' && body !== null) {
                status = 200;
            } else if (type === 'error') {
                status = 500;
            }

            if (status && window[callback]) {
                delete window[callback];
                document.body.removeChild(script);
            }

            resolve(request.respondWith(body, {status: status}));
        };

        window[callback] = function (result) {
            body = JSON.stringify(result);
        };

        request.abort = function () {
            handler({type: 'abort'});
        };

        request.params[name] = callback;

        if (request.timeout) {
            setTimeout(request.abort, request.timeout);
        }

        script = document.createElement('script');
        script.src = request.getUrl();
        script.type = 'text/javascript';
        script.async = true;
        script.onload = handler;
        script.onerror = handler;

        document.body.appendChild(script);
    });
};

/**
 * JSONP Interceptor.
 */

var jsonp = function (request, next) {

    if (request.method == 'JSONP') {
        request.client = jsonpClient;
    }

    next();
};

/**
 * Before Interceptor.
 */

var before = function (request, next) {

    if (isFunction(request.before)) {
        request.before.call(this, request);
    }

    next();
};

/**
 * HTTP method override Interceptor.
 */

var method = function (request, next) {

    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
        request.headers.set('X-HTTP-Method-Override', request.method);
        request.method = 'POST';
    }

    next();
};

/**
 * Header Interceptor.
 */

var header = function (request, next) {

    var headers = assign({}, Http.headers.common,
        !request.crossOrigin ? Http.headers.custom : {},
        Http.headers[toLower(request.method)]
    );

    each(headers, function (value, name) {
        if (!request.headers.has(name)) {
            request.headers.set(name, value);
        }
    });

    next();
};

/**
 * XMLHttp client (Browser).
 */

var xhrClient = function (request) {
    return new PromiseObj(function (resolve) {

        var xhr = new XMLHttpRequest(), handler = function (event) {

            var response = request.respondWith(
                'response' in xhr ? xhr.response : xhr.responseText, {
                    status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
                    statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
                }
            );

            each(trim(xhr.getAllResponseHeaders()).split('\n'), function (row) {
                response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1));
            });

            resolve(response);
        };

        request.abort = function () { return xhr.abort(); };

        if (request.progress) {
            if (request.method === 'GET') {
                xhr.addEventListener('progress', request.progress);
            } else if (/^(POST|PUT)$/i.test(request.method)) {
                xhr.upload.addEventListener('progress', request.progress);
            }
        }

        xhr.open(request.method, request.getUrl(), true);

        if (request.timeout) {
            xhr.timeout = request.timeout;
        }

        if (request.responseType && 'responseType' in xhr) {
            xhr.responseType = request.responseType;
        }

        if (request.withCredentials || request.credentials) {
            xhr.withCredentials = true;
        }

        if (!request.crossOrigin) {
            request.headers.set('X-Requested-With', 'XMLHttpRequest');
        }

        request.headers.forEach(function (value, name) {
            xhr.setRequestHeader(name, value);
        });

        xhr.onload = handler;
        xhr.onabort = handler;
        xhr.onerror = handler;
        xhr.ontimeout = handler;
        xhr.send(request.getBody());
    });
};

/**
 * Http client (Node).
 */

var nodeClient = function (request) {

    var client = __webpack_require__(56);

    return new PromiseObj(function (resolve) {

        var url = request.getUrl();
        var body = request.getBody();
        var method = request.method;
        var headers = {}, handler;

        request.headers.forEach(function (value, name) {
            headers[name] = value;
        });

        client(url, {body: body, method: method, headers: headers}).then(handler = function (resp) {

            var response = request.respondWith(resp.body, {
                    status: resp.statusCode,
                    statusText: trim(resp.statusMessage)
                }
            );

            each(resp.headers, function (value, name) {
                response.headers.set(name, value);
            });

            resolve(response);

        }, function (error$$1) { return handler(error$$1.response); });
    });
};

/**
 * Base client.
 */

var Client = function (context) {

    var reqHandlers = [sendRequest], resHandlers = [], handler;

    if (!isObject(context)) {
        context = null;
    }

    function Client(request) {
        return new PromiseObj(function (resolve) {

            function exec() {

                handler = reqHandlers.pop();

                if (isFunction(handler)) {
                    handler.call(context, request, next);
                } else {
                    warn(("Invalid interceptor of type " + (typeof handler) + ", must be a function"));
                    next();
                }
            }

            function next(response) {

                if (isFunction(response)) {

                    resHandlers.unshift(response);

                } else if (isObject(response)) {

                    resHandlers.forEach(function (handler) {
                        response = when(response, function (response) {
                            return handler.call(context, response) || response;
                        });
                    });

                    when(response, resolve);

                    return;
                }

                exec();
            }

            exec();

        }, context);
    }

    Client.use = function (handler) {
        reqHandlers.push(handler);
    };

    return Client;
};

function sendRequest(request, resolve) {

    var client = request.client || (inBrowser ? xhrClient : nodeClient);

    resolve(client(request));
}

/**
 * HTTP Headers.
 */

var Headers = function Headers(headers) {
    var this$1 = this;


    this.map = {};

    each(headers, function (value, name) { return this$1.append(name, value); });
};

Headers.prototype.has = function has (name) {
    return getName(this.map, name) !== null;
};

Headers.prototype.get = function get (name) {

    var list = this.map[getName(this.map, name)];

    return list ? list.join() : null;
};

Headers.prototype.getAll = function getAll (name) {
    return this.map[getName(this.map, name)] || [];
};

Headers.prototype.set = function set (name, value) {
    this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)];
};

Headers.prototype.append = function append (name, value){

    var list = this.map[getName(this.map, name)];

    if (list) {
        list.push(trim(value));
    } else {
        this.set(name, value);
    }
};

Headers.prototype.delete = function delete$1 (name){
    delete this.map[getName(this.map, name)];
};

Headers.prototype.deleteAll = function deleteAll (){
    this.map = {};
};

Headers.prototype.forEach = function forEach (callback, thisArg) {
        var this$1 = this;

    each(this.map, function (list, name) {
        each(list, function (value) { return callback.call(thisArg, value, name, this$1); });
    });
};

function getName(map, name) {
    return Object.keys(map).reduce(function (prev, curr) {
        return toLower(name) === toLower(curr) ? curr : prev;
    }, null);
}

function normalizeName(name) {

    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name');
    }

    return trim(name);
}

/**
 * HTTP Response.
 */

var Response = function Response(body, ref) {
    var url = ref.url;
    var headers = ref.headers;
    var status = ref.status;
    var statusText = ref.statusText;


    this.url = url;
    this.ok = status >= 200 && status < 300;
    this.status = status || 0;
    this.statusText = statusText || '';
    this.headers = new Headers(headers);
    this.body = body;

    if (isString(body)) {

        this.bodyText = body;

    } else if (isBlob(body)) {

        this.bodyBlob = body;

        if (isBlobText(body)) {
            this.bodyText = blobText(body);
        }
    }
};

Response.prototype.blob = function blob () {
    return when(this.bodyBlob);
};

Response.prototype.text = function text () {
    return when(this.bodyText);
};

Response.prototype.json = function json () {
    return when(this.text(), function (text) { return JSON.parse(text); });
};

function blobText(body) {
    return new PromiseObj(function (resolve) {

        var reader = new FileReader();

        reader.readAsText(body);
        reader.onload = function () {
            resolve(reader.result);
        };

    });
}

function isBlobText(body) {
    return body.type.indexOf('text') === 0 || body.type.indexOf('json') !== -1;
}

/**
 * HTTP Request.
 */

var Request = function Request(options$$1) {

    this.body = null;
    this.params = {};

    assign(this, options$$1, {
        method: toUpper(options$$1.method || 'GET')
    });

    if (!(this.headers instanceof Headers)) {
        this.headers = new Headers(this.headers);
    }
};

Request.prototype.getUrl = function getUrl (){
    return Url(this);
};

Request.prototype.getBody = function getBody (){
    return this.body;
};

Request.prototype.respondWith = function respondWith (body, options$$1) {
    return new Response(body, assign(options$$1 || {}, {url: this.getUrl()}));
};

/**
 * Service for sending network requests.
 */

var COMMON_HEADERS = {'Accept': 'application/json, text/plain, */*'};
var JSON_CONTENT_TYPE = {'Content-Type': 'application/json;charset=utf-8'};

function Http(options$$1) {

    var self = this || {}, client = Client(self.$vm);

    defaults(options$$1 || {}, self.$options, Http.options);

    Http.interceptors.forEach(function (handler) {

        if (isString(handler)) {
            handler = Http.interceptor[handler];
        }

        if (isFunction(handler)) {
            client.use(handler);
        }

    });

    return client(new Request(options$$1)).then(function (response) {

        return response.ok ? response : PromiseObj.reject(response);

    }, function (response) {

        if (response instanceof Error) {
            error(response);
        }

        return PromiseObj.reject(response);
    });
}

Http.options = {};

Http.headers = {
    put: JSON_CONTENT_TYPE,
    post: JSON_CONTENT_TYPE,
    patch: JSON_CONTENT_TYPE,
    delete: JSON_CONTENT_TYPE,
    common: COMMON_HEADERS,
    custom: {}
};

Http.interceptor = {before: before, method: method, body: body, jsonp: jsonp, header: header, cors: cors};
Http.interceptors = ['before', 'method', 'body', 'jsonp', 'header', 'cors'];

['get', 'delete', 'head', 'jsonp'].forEach(function (method$$1) {

    Http[method$$1] = function (url, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1}));
    };

});

['post', 'put', 'patch'].forEach(function (method$$1) {

    Http[method$$1] = function (url, body$$1, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1, body: body$$1}));
    };

});

/**
 * Service for interacting with RESTful services.
 */

function Resource(url, params, actions, options$$1) {

    var self = this || {}, resource = {};

    actions = assign({},
        Resource.actions,
        actions
    );

    each(actions, function (action, name) {

        action = merge({url: url, params: assign({}, params)}, options$$1, action);

        resource[name] = function () {
            return (self.$http || Http)(opts(action, arguments));
        };
    });

    return resource;
}

function opts(action, args) {

    var options$$1 = assign({}, action), params = {}, body;

    switch (args.length) {

        case 2:

            params = args[0];
            body = args[1];

            break;

        case 1:

            if (/^(POST|PUT|PATCH)$/i.test(options$$1.method)) {
                body = args[0];
            } else {
                params = args[0];
            }

            break;

        case 0:

            break;

        default:

            throw 'Expected up to 2 arguments [params, body], got ' + args.length + ' arguments';
    }

    options$$1.body = body;
    options$$1.params = assign({}, options$$1.params, params);

    return options$$1;
}

Resource.actions = {

    get: {method: 'GET'},
    save: {method: 'POST'},
    query: {method: 'GET'},
    update: {method: 'PUT'},
    remove: {method: 'DELETE'},
    delete: {method: 'DELETE'}

};

/**
 * Install plugin.
 */

function plugin(Vue) {

    if (plugin.installed) {
        return;
    }

    Util(Vue);

    Vue.url = Url;
    Vue.http = Http;
    Vue.resource = Resource;
    Vue.Promise = PromiseObj;

    Object.defineProperties(Vue.prototype, {

        $url: {
            get: function get() {
                return options(Vue.url, this, this.$options.url);
            }
        },

        $http: {
            get: function get() {
                return options(Vue.http, this, this.$options.http);
            }
        },

        $resource: {
            get: function get() {
                return Vue.resource.bind(this);
            }
        },

        $promise: {
            get: function get() {
                var this$1 = this;

                return function (executor) { return new Vue.Promise(executor, this$1); };
            }
        }

    });
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
  * vue-router v2.5.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (false) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      if (matched.instances[name] !== vm) {
        matched.instances[name] = val;
      }
    }

    // also regiseter instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (false) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "production" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var val = extraQuery[key];
    parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.slice().forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;
  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed) { return }
  install.installed = true;

  _Vue = Vue;

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this.$root._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this.$root._route }
  });

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

var isarray = index$1;

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (false) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (false) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var normalizedPath = normalizePath(path, parent);
  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (false) {
      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    if (Array.isArray(route.alias)) {
      route.alias.forEach(function (alias) {
        var aliasRoute = {
          path: alias,
          children: route.children
        };
        addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path);
      });
    } else {
      var aliasRoute = {
        path: route.alias,
        children: route.children
      };
      addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path);
    }
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (false) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path) {
  var regex = index(path);
  if (false) {
    var keys = {};
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (false) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (false) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (false) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (false) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (false) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (false) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return
    }
    var isObject = typeof shouldScroll === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        position = getElementPosition(el);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left,
    y: elRect.top - docRect.top
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (err instanceof Error) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || to instanceof Error) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "production" !== 'production' && warn(false, msg);
          if (!error) {
            error = reason instanceof Error
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    if (called) { return }
    called = true;
    return fn.apply(this, arguments)
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, this$1.current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path;
}

function replaceHash (path) {
  var i = window.location.href.indexOf('#');
  window.location.replace(
    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
  );
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (false) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "production" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '2.5.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*!
 * Vue.js v2.2.6
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
/*  */

/**
 * Convert a value to a string that is actually rendered.
 */
function _toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return typeof value === 'string' || typeof value === 'number'
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString.call(obj) === OBJECT_STRING
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 */
function noop () {}

/**
 * Always return false.
 */
var no = function () { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */


/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      return JSON.stringify(a) === JSON.stringify(b)
    } catch (e) {
      // possible circular reference
      return a === b
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn();
    }
  }
}

/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * List of asset types that a component can own.
   */
  _assetTypes: [
    'component',
    'directive',
    'filter'
  ],

  /**
   * List of lifecycle hooks.
   */
  _lifecycleHooks: [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated'
  ],

  /**
   * Max circular updates allowed in a scheduler flush cycle.
   */
  _maxUpdateCount: 100
};

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) { cb.call(ctx); }
      if (_resolve) { _resolve(ctx); }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

var warn = noop;
var tip = noop;
var formatComponentName;

if (false) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.error("[Vue warn]: " + msg + " " + (
        vm ? formatLocation(formatComponentName(vm)) : ''
      ));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + " " + (
        vm ? formatLocation(formatComponentName(vm)) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = typeof vm === 'string'
      ? vm
      : typeof vm === 'function' && vm.options
        ? vm.options.name
        : vm._isVue
          ? vm.$options.name || vm.$options._componentTag
          : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var formatLocation = function (str) {
    if (str === "<Anonymous>") {
      str += " - use the \"name\" option for better debugging messages.";
    }
    return ("\n(found in " + str + ")")
  };
}

/*  */


var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid$1++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var arguments$1 = arguments;

    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments$1[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true,
  isSettingProps: false
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target ).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.splice(key, 1);
    return
  }
  var ob = (target ).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (false) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (typeof childVal !== 'function') {
      "production" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        childVal.call(this),
        parentVal.call(this)
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

config._lifecycleHooks.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.computed = function (parentVal, childVal) {
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret
};

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (false) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (false) {
    checkComponents(child);
  }
  normalizeProps(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = typeof extendsFrom === 'function'
      ? mergeOptions(parent, extendsFrom.options, vm)
      : mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      var mixin = child.mixins[i];
      if (mixin.prototype instanceof Vue$2) {
        mixin = mixin.options;
      }
      parent = mergeOptions(parent, mixin, vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (false) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (false) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

/**
 * Assert the type of a value
 */
function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (expectedType === 'String') {
    valid = typeof value === (expectedType = 'string');
  } else if (expectedType === 'Number') {
    valid = typeof value === (expectedType = 'number');
  } else if (expectedType === 'Boolean') {
    valid = typeof value === (expectedType = 'boolean');
  } else if (expectedType === 'Function') {
    valid = typeof value === (expectedType = 'function');
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match && match[1]
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

function handleError (err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    if (false) {
      warn(("Error in " + info + ":"), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (false) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

var mark;
var measure;

if (false) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function () {
  var node = new VNode();
  node.text = '';
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

var normalizeEvent = cached(function (name) {
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      for (var i = 0; i < fns.length; i++) {
        fns[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (!cur) {
      "production" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (!old) {
      if (!cur.fns) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (!on[name]) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (!oldHook) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (oldHook.fns && oldHook.merged) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (c == null || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (last && last.text) {
        last.text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (c.text && last && last.text) {
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (c.tag && c.key == null && nestedIndex != null) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function getFirstComponentChild (children) {
  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
}

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (false) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(vm, args);
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  var name, child;
  for (var i = 0, l = children.length; i < l; i++) {
    child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
        child.data && (name = child.data.slot)) {
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns
) {
  var res = {};
  for (var i = 0; i < fns.length; i++) {
    res[fns[i][0]] = fns[i][1];
  }
  return res
}

/*  */

var activeInstance = null;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // remove reference to DOM nodes (prevents leak)
    vm.$options._parentElm = vm.$options._refElm = null;
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (false) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (false) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure((name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure((name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render
  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    if (false) {
      observerState.isSettingProps = true;
    }
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    if (false) {
      observerState.isSettingProps = false;
    }
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive == null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var queue = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  queue.length = 0;
  has = {};
  if (false) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id, vm;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > config._maxUpdateCount) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // reset scheduler before updated hook called
  var oldQueue = queue.slice();
  resetSchedulerState();

  // call updated hooks
  index = oldQueue.length;
  while (index--) {
    watcher = oldQueue[index];
    vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i >= 0 && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(Math.max(i, index) + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  false
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "production" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  if (this.user) {
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    }
  } else {
    value = this.getter.call(vm, vm);
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  popTarget();
  this.cleanupDeps();
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch) { initWatch(vm, opts.watch); }
}

var isReservedProp = { key: 1, ref: 1, slot: 1 };

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (false) {
      if (isReservedProp[key]) {
        warn(
          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !observerState.isSettingProps) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "production" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var i = keys.length;
  while (i--) {
    if (props && hasOwn(props, keys[i])) {
      "production" !== 'production' && warn(
        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(keys[i])) {
      proxy(vm, "_data", keys[i]);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (false) {
      if (getter === undefined) {
        warn(
          ("No getter function has been defined for computed property \"" + key + "\"."),
          vm
        );
        getter = noop;
      }
    }
    // create internal watcher for the computed property.
    watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    }
  }
}

function defineComputed (target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    if (false) {
      if (methods[key] == null) {
        warn(
          "method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
    }
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (vm, key, handler) {
  var options;
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  vm.$watch(key, handler, options);
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (false) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    if (!vnode.componentInstance._isMounted) {
      vnode.componentInstance._isMounted = true;
      callHook(vnode.componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      activateChildComponent(vnode.componentInstance, true /* direct */);
    }
  },

  destroy: function destroy (vnode) {
    if (!vnode.componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        vnode.componentInstance.$destroy();
      } else {
        deactivateChildComponent(vnode.componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (!Ctor) {
    return
  }

  var baseCtor = context.$options._base;
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  if (typeof Ctor !== 'function') {
    if (false) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  if (!Ctor.cid) {
    if (Ctor.resolved) {
      Ctor = Ctor.resolved;
    } else {
      Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
        // it's ok to queue this on every render because
        // $forceUpdate is buffered by the scheduler.
        context.$forceUpdate();
      });
      if (!Ctor) {
        // return nothing if this is indeed an async component
        // wait for the callback to trigger parent update.
        return
      }
    }
  }

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  data = data || {};

  // transform component v-model data into props & events
  if (data.model) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractProps(data, Ctor, tag);

  // functional component
  if (Ctor.options.functional) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  data.on = data.nativeOn;

  if (Ctor.options.abstract) {
    // abstract components do not keep anything
    // other than props & listeners
    data = {};
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
  );
  return vnode
}

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (propOptions) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData);
    }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    props: props,
    data: data,
    parent: context,
    children: children,
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (inlineTemplate) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  cb
) {
  if (factory.requested) {
    // pool callbacks
    factory.pendingCallbacks.push(cb);
  } else {
    factory.requested = true;
    var cbs = factory.pendingCallbacks = [cb];
    var sync = true;

    var resolve = function (res) {
      if (isObject(res)) {
        res = baseCtor.extend(res);
      }
      // cache resolved
      factory.resolved = res;
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        for (var i = 0, l = cbs.length; i < l; i++) {
          cbs[i](res);
        }
      }
    };

    var reject = function (reason) {
      "production" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
    };

    var res = factory(resolve, reject);

    // handle promise
    if (res && typeof res.then === 'function' && !factory.resolved) {
      res.then(resolve, reject);
    }

    sync = false;
    // return in case resolved synchronously
    return factory.resolved
  }
}

function extractProps (data, Ctor, tag) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (!propOptions) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  var domProps = data.domProps;
  if (attrs || props || domProps) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (false) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && attrs.hasOwnProperty(keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey) ||
      checkProp(res, domProps, key, altKey);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (hash) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (on[event]) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (alwaysNormalize) { normalizationType = ALWAYS_NORMALIZE; }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (data && data.__ob__) {
    "production" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
      typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (vnode) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (vnode.children) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (child.tag && !child.ns) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      extend(props, bindObject);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && "production" !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1
  } else {
    return keyCodes !== eventKeyCode
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp
) {
  if (value) {
    if (!isObject(value)) {
      "production" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      for (var key in value) {
        if (key === 'class' || key === 'style') {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];
        }
      }
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] =
    this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function initRender (vm) {
  vm.$vnode = null; // the placeholder node in parent tree
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$options._parentVnode;
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (false) {
        vnode = vm.$options.renderError
          ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
          : vm._vnode;
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = _toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var inject = vm.$options.inject;
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    // isArray here
    var isArray = Array.isArray(inject);
    var keys = isArray
      ? inject
      : hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

    var loop = function ( i ) {
      var key = keys[i];
      var provideKey = isArray ? key : inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          /* istanbul ignore else */
          if (false) {
            defineReactive$$1(vm, key, source._provided[provideKey], function () {
              warn(
                "Avoid mutating an injected value directly since the changes will be " +
                "overwritten whenever the provided component re-renders. " +
                "injection being mutated: \"" + key + "\"",
                vm
              );
            });
          } else {
            defineReactive$$1(vm, key, source._provided[provideKey]);
          }
          break
        }
        source = source.$parent;
      }
    };

    for (var i = 0; i < keys.length; i++) loop( i );
  }
}

/*  */

var uid = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (false) {
      startTag = "vue-perf-init:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (false) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (false) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(((vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    for (var i = 0; i < latest.length; i++) {
      if (sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$2 (options) {
  if (false) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$2);
stateMixin(Vue$2);
eventsMixin(Vue$2);
lifecycleMixin(Vue$2);
renderMixin(Vue$2);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (false) {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  config._assetTypes.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (false) {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (pattern instanceof RegExp) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (cache, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cachedNode);
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    if (!vnode.componentInstance._inactive) {
      callHook(vnode.componentInstance, 'deactivated');
    }
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (false) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  config._assetTypes.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$2);

Object.defineProperty(Vue$2.prototype, '$isServer', {
  get: isServerRendering
});

Vue$2.version = '2.2.6';

/*  */

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (childNode.componentInstance) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return genClassFromData(data)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: child.class
      ? [child.class, parent.class]
      : parent.class
  }
}

function genClassFromData (data) {
  var dynamicClass = data.class;
  var staticClass = data.staticClass;
  if (staticClass || dynamicClass) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  var res = '';
  if (!value) {
    return res
  }
  if (typeof value === 'string') {
    return value
  }
  if (Array.isArray(value)) {
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (value[i]) {
        if ((stringified = stringifyClass(value[i]))) {
          res += stringified + ' ';
        }
      }
    }
    return res.slice(0, -1)
  }
  if (isObject(value)) {
    for (var key in value) {
      if (value[key]) { res += key + ' '; }
    }
    return res.slice(0, -1)
  }
  /* istanbul ignore next */
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);



var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "production" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
        refs[key].push(ref);
      } else {
        refs[key] = [ref];
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function sameVnode (a, b) {
  return (
    a.key === b.key &&
    a.tag === b.tag &&
    a.isComment === b.isComment &&
    isDef(a.data) === isDef(b.data) &&
    sameInputType(a, b)
  )
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (false) {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref) {
    if (isDef(parent)) {
      if (isDef(ref)) {
        nodeOps.insertBefore(parent, elm, ref);
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (false) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }
    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
        isTrue(oldVnode.isStatic) &&
        vnode.key === oldVnode.key &&
        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.elm = oldVnode.elm;
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }
    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (false) {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if (false) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
            oldVnode.removeAttribute('server-rendered');
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (false) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  if (!oldVnode.data.attrs && !vnode.data.attrs) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (attrs.__ob__) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (attrs[key] == null) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (!data.staticClass && !data.class &&
      (!oldData || (!oldData.staticClass && !oldData.class))) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (transitionClass) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;



function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

/*  */

/**
 * Cross-platform code generation for component v-model
 */


/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */


/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var str;
var index$1;

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  var event;
  /* istanbul ignore if */
  if (on[RANGE_TOKEN]) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (on[CHECKBOX_RADIO_TOKEN]) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1 (
  event,
  handler,
  once,
  capture
) {
  if (once) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function (ev) {
      var res = arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(event, handler, capture);
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  if (!oldVnode.data.on && !vnode.data.on) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (!oldVnode.data.domProps && !vnode.data.domProps) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (props.__ob__) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (props[key] == null) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = cur == null ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (
  elm,
  vnode,
  checkVal
) {
  return (!elm.composing && (
    vnode.tag === 'option' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
  return document.activeElement !== elm && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if ((modifiers && modifiers.number) || elm.type === 'number') {
    return toNumber(value) !== toNumber(newVal)
  }
  if (modifiers && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    el.style[normalize(name)] = val;
  }
};

var prefixes = ['Webkit', 'Moz', 'ms'];

var testEl;
var normalize = cached(function (prop) {
  testEl = testEl || document.createElement('div');
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in testEl.style)) {
    return prop
  }
  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + upper;
    if (prefixed in testEl.style) {
      return prefixed
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (!data.staticStyle && !data.style &&
      !oldData.staticStyle && !oldData.style) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldVnode.data.staticStyle;
  var oldStyleBinding = oldVnode.data.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  vnode.data.style = style.__ob__ ? extend({}, style) : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (newStyle[name] == null) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    el.setAttribute('class', cur.trim());
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame
  ? window.requestAnimationFrame.bind(window)
  : setTimeout;

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
  addClass(el, cls);
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (el._leaveCb) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (!data) {
    return
  }

  /* istanbul ignore if */
  if (el._enterCb || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (false) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
          pendingNode.tag === vnode.tag &&
          pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (el._enterCb) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (!data) {
    return rm()
  }

  /* istanbul ignore if */
  if (el._leaveCb || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (false) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (!fn) { return false }
  var invokerFns = fn.fns;
  if (invokerFns) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (!vnode.data.show) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (!vnode.data.show) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      var cb = function () {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
    } else if (vnode.tag === 'textarea' || el.type === 'text' || el.type === 'password') {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var needReset = el.multiple
        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
      if (needReset) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "production" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  for (var i = 0, l = options.length; i < l; i++) {
    if (looseEqual(getValue(options[i]), value)) {
      return false
    }
  }
  return true
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition && !isIE9) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    if (transition && !isIE9) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  return /\d-keep-alive$/.test(rawChild.tag)
    ? h('keep-alive')
    : null
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag; });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (false) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (false) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (false) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      if (this._hasMove != null) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$2.config.mustUseProp = mustUseProp;
Vue$2.config.isReservedTag = isReservedTag;
Vue$2.config.getTagNamespace = getTagNamespace;
Vue$2.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$2.options.directives, platformDirectives);
extend(Vue$2.options.components, platformComponents);

// install platform patch function
Vue$2.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$2.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$2);
    } else if (false) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if (false) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/* harmony default export */ __webpack_exports__["default"] = (Vue$2);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(54)))

/***/ }),
/* 54 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 56 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ })
/******/ ]);