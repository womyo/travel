"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[390],{7390:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": function() { return /* binding */ Profile; }\n});\n\n// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js\nvar runtime_core_esm_bundler = __webpack_require__(3396);\n// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js\nvar shared_esm_bundler = __webpack_require__(7139);\n;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Profile.vue?vue&type=template&id=e3986e1e\n\nconst _hoisted_1 = {\n  class: "container"\n};\nconst _hoisted_2 = {\n  class: "jumbotron"\n};\n\nconst _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Profile ");\n\nconst _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("strong", null, "Id:", -1);\n\nconst _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("strong", null, "Email:", -1);\n\nconst _hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("strong", null, "Authorities:", -1);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("header", _hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */._)("h3", null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("strong", null, (0,shared_esm_bundler/* toDisplayString */.zw)($options.currentUser.username), 1), _hoisted_3])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, [_hoisted_4, (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" " + (0,shared_esm_bundler/* toDisplayString */.zw)($options.currentUser.id), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, [_hoisted_5, (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" " + (0,shared_esm_bundler/* toDisplayString */.zw)($options.currentUser.email), 1)]), _hoisted_6, (0,runtime_core_esm_bundler/* createElementVNode */._)("ul", null, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($options.currentUser.roles, role => {\n    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("li", {\n      key: role\n    }, (0,shared_esm_bundler/* toDisplayString */.zw)(role), 1);\n  }), 128))])]);\n}\n;// CONCATENATED MODULE: ./src/views/Profile.vue?vue&type=template&id=e3986e1e\n\n;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Profile.vue?vue&type=script&lang=js\n/* harmony default export */ var Profilevue_type_script_lang_js = ({\n  name: \'Profile\',\n  computed: {\n    currentUser() {\n      return this.$store.state.auth.user;\n    }\n\n  },\n\n  mounted() {\n    if (!this.currentUser) {\n      this.$router.push(\'/login\');\n    }\n  }\n\n});\n;// CONCATENATED MODULE: ./src/views/Profile.vue?vue&type=script&lang=js\n \n// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js\nvar exportHelper = __webpack_require__(89);\n;// CONCATENATED MODULE: ./src/views/Profile.vue\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Profilevue_type_script_lang_js, [[\'render\',render]])\n\n/* harmony default export */ var Profile = (__exports__);\n\n//# sourceURL=webpack://frontend/./src/views/Profile.vue_+_4_modules?')}}]);