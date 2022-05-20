import {Vue as Vue2,ElementUI,Vuex,store} from "vue2App/vue2Main";

Vue2.use(Vuex);

Vue2.use(ElementUI);

function bindSlotContext(target = {}, context) {
  return Object.keys(target).map(key => {
    const vnode = target[key];
    vnode.context = context;
    return vnode;
  });
}

function getPrevElement(element) {
  var el = element;
  while (el = el.previousSibling) {
      if (el.nodeType === 1) {
          return el;
      }
  }
  return null;
}

/*
 * Transform vue2 components to DOM.
 */
function Vue2InVue3(WrapperComponent, wrapperId, options = {}) {
  let vm;
  function createVue(wrapperId) {
    const slots = bindSlotContext(this.$slots, this.__self);
    vm = new Vue2({
      render: createElement => {
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
    console.log(vm.$store)
  }
  return {
    mounted() {
      if(vm){
        this.update();
      }
      createVue.bind(this)(wrapperId)
    },
    props: WrapperComponent.props,
    methods: {
      update() {
        let pre = getPrevElement(vm.$el);
        let div = document.createElement("div")
        div.setAttribute("id",wrapperId);
        document.getElementById("app").appendChild(div)
        pre.insertAdjacentElement('afterend',div);
        vm.$el.remove();
        vm = null;
      }
    },
    render() {
      vm && vm.$forceUpdate();
    },
  };
}

export {
  Vue2InVue3,
  store,
}
