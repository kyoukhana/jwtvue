webpackJsonp([1],{

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(74)

var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(63),
  /* template */
  __webpack_require__(71),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/www/jwt/resources/assets/js/components/views/admin/login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e82fc4fe", Component.options)
  } else {
    hotAPI.reload("data-v-e82fc4fe", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 63:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    data: function data() {
        return {
            context: 'login context',
            data: {
                body: {
                    email: '',
                    password: ''
                },
                rememberMe: false
            },
            error: null
        };
    },


    mounted: function () {
        this.$nextTick(function () {
            componentHandler.upgradeDom();
            componentHandler.upgradeAllRegistered();
        })
    },

    methods: {
        processlogin: function () {

            var redirect = this.$auth.redirect();
            this.$auth.login({
                body: this.data.body,
                rememberMe: true,
                redirect: {name: 'dashadmin'},
            });




        }
        /*End process form */
    }
});


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\nbody{\n    height:100%;\n}\n.mdl-layout-login {\n    align-items: center;\n    justify-content: center;\n}\n.mdl-layout__content-login {\n    padding: 24px;\n    flex: none;\n}\n.bg-row {\n    background: url('https://getmdl.io/assets/demos/transparent.jpg') center / cover;\n}\n.demo-layout-transparent .mdl-layout__header,\n.demo-layout-transparent .mdl-layout__drawer-button {\n    /* This background is dark, so we set text to white. Use 87% black instead if\n       your background is light. */\n    color: white;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.$auth.check()) ? _c('div', {
    staticClass: "mdl-layout mdl-layout-login mdl-js-layout"
  }, [_c('main', {
    staticClass: "mdl-layout__content"
  }, [_c('main', {
    staticClass: "mdl-layout__content mdl-layout__content-login"
  }, [_c('div', {
    staticClass: "mdl-card mdl-shadow--6dp"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "mdl-card__supporting-text"
  }, [_c('form', {
    attrs: {
      "role": "form",
      "action": "#",
      "method": "post"
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.processlogin($event)
      }
    }
  }, [_c('div', {
    staticClass: "mdl-textfield mdl-js-textfield"
  }, [_c('mdl-textfield', {
    attrs: {
      "floating-label": "Email:",
      "type": "email",
      "id": "email",
      "email": "email"
    },
    model: {
      value: (_vm.data.body.email),
      callback: function($$v) {
        _vm.data.body.email = $$v
      },
      expression: "data.body.email"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "mdl-textfield mdl-js-textfield"
  }, [_c('mdl-textfield', {
    attrs: {
      "floating-label": "Password:",
      "type": "password",
      "id": "pass",
      "password": "password"
    },
    model: {
      value: (_vm.data.body.password),
      callback: function($$v) {
        _vm.data.body.password = $$v
      },
      expression: "data.body.password"
    }
  })], 1), _vm._v(" "), _vm._m(1)])])])])])]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mdl-card__title mdl-color--primary mdl-color-text--white"
  }, [_c('h2', {
    staticClass: "mdl-card__title-text"
  }, [_vm._v("Login")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mdl-card__actions"
  }, [_c('button', {
    staticClass: "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Sign in")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e82fc4fe", module.exports)
  }
}

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("1a3ba011", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e82fc4fe\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e82fc4fe\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});