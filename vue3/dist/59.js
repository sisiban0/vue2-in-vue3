"use strict";
(self["webpackChunk_vue2_in_vue3_vue3"] = self["webpackChunk_vue2_in_vue3_vue3"] || []).push([[59],{

/***/ 59:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(166);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/App.vue?vue&type=template&id=35c15298&scoped=true


const _withScopeId = n => ((0,vue_esm_bundler/* pushScopeId */.dD)("data-v-35c15298"),n=n(),(0,vue_esm_bundler/* popScopeId */.Cn)(),n)
const _hoisted_1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("h3", null, "Vue3 App", -1 /* HOISTED */))
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", { id: "vue2Button" }, null, -1 /* HOISTED */))

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Content = (0,vue_esm_bundler/* resolveComponent */.up)("Content")
  const _component_vue2_button = (0,vue_esm_bundler/* resolveComponent */.up)("vue2-button")

  return ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", null, [
    _hoisted_1,
    (0,vue_esm_bundler/* createVNode */.Wm)(_component_Content, { count: $setup.count }, null, 8 /* PROPS */, ["count"]),
    (0,vue_esm_bundler/* createElementVNode */._)("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => ($setup.inc && $setup.inc(...args)))
    }, "刷新"),
    _hoisted_2,
    (0,vue_esm_bundler/* createVNode */.Wm)(_component_vue2_button, { ref: "root" }, null, 512 /* NEED_PATCH */)
  ]))
}
;// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=35c15298&scoped=true

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/components/Content.vue?vue&type=template&id=d86e7ef2


const Contentvue_type_template_id_d86e7ef2_hoisted_1 = { style: {"color":"red"} }

function Contentvue_type_template_id_d86e7ef2_render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Contentvue_type_template_id_d86e7ef2_hoisted_1, [
    (0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)($data.title) + " ", 1 /* TEXT */),
    (0,vue_esm_bundler/* createElementVNode */._)("div", null, "count: " + (0,vue_esm_bundler/* toDisplayString */.zw)($props.count), 1 /* TEXT */)
  ]))
}
;// CONCATENATED MODULE: ./src/components/Content.vue?vue&type=template&id=d86e7ef2

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/components/Content.vue?vue&type=script&lang=js

/* harmony default export */ const Contentvue_type_script_lang_js = ({
  props: ['count'],
  data() {
    return {
      title: "Remote Component in Action..",
    };
  },
});

;// CONCATENATED MODULE: ./src/components/Content.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./src/components/Content.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Contentvue_type_script_lang_js, [['render',Contentvue_type_template_id_d86e7ef2_render]])

/* harmony default export */ const Content = (__exports__);
// EXTERNAL MODULE: remote vue2App/vue2
var vue2 = __webpack_require__(914);
var vue2_default = /*#__PURE__*/__webpack_require__.n(vue2);
// EXTERNAL MODULE: remote vue2App/ElementUi
var ElementUi = __webpack_require__(806);
var ElementUi_default = /*#__PURE__*/__webpack_require__.n(ElementUi);
// EXTERNAL MODULE: remote vue2App/vuex
var vuex = __webpack_require__(649);
var vuex_default = /*#__PURE__*/__webpack_require__.n(vuex);
// EXTERNAL MODULE: remote vue2App/store
var store = __webpack_require__(297);
var store_default = /*#__PURE__*/__webpack_require__.n(store);
;// CONCATENATED MODULE: ./src/utils/index.js









vue2_default().use((vuex_default()));


vue2_default().use((ElementUi_default()))

function bindSlotContext(target = {}, context) {
  return Object.keys(target).map(key => {
    const vnode = target[key];
    vnode.context = context;
    return vnode;
  });
}

/*
 * Transform vue2 components to DOM.
 */
function Vue2InVue3(WrapperComponent, wrapperId,options={}) {
  let vm;
  return {
    mounted() {
      const slots = bindSlotContext(this.$slots, this.__self);
      vm = new (vue2_default())({
        render: createElement => {
          console.log(vm.$store.state)
          return createElement(
            WrapperComponent,
            {
              on: this.$attrs,
              attrs: this.$attrs,
              props: this.$props,
              scopedSlots: this.$scopedSlots,
            },
            slots,
          );
        },
        ...options
      });
      vm.$mount(`#${wrapperId}`);
    },
    props: WrapperComponent.props,
    methods:{
      update(){
        vm.$forceUpdate();
      }
    },
    render() {
      vm && vm.$forceUpdate();
    },
  };
}



// EXTERNAL MODULE: remote vue2App/Button
var Button = __webpack_require__(632);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/App.vue?vue&type=script&lang=js



// import {Vue2InVue3,store} from "./vue2"



/* harmony default export */ const Appvue_type_script_lang_js = ({
  components: {
    Content: Content,
    vue2Button: Vue2InVue3((Button_default()), 'vue2Button',{store: (store_default())}),
  },
  setup() {
    const count = (0,vue_esm_bundler/* ref */.iH)(0);
    const root = (0,vue_esm_bundler/* ref */.iH)(null);
    const inc = () => {
      count.value++;
      root.value.update();
    };
    return {
      count,
      inc,
      root,
    };
  },
});

;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/App.vue




;


const App_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Appvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-35c15298"]])

/* harmony default export */ const App = (App_exports_);
;// CONCATENATED MODULE: ./src/bootstrap.js



const app = (0,vue_esm_bundler/* createApp */.ri)(App);


app.mount('#app');


/***/ })

}]);
//# sourceMappingURL=59.js.map