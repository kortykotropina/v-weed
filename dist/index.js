'use strict';

var vue = require('vue');

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$1 = {
  name: "InputText",
};

const _hoisted_1 = { type: "text" };

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("input", _hoisted_1))
}
var InputText = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__file',"/home/kortykotropina/dev/weed/src/components/InputText.vue"]]);

const _sfc_main = {
  name: "InputTextarea",
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("textarea"))
}
var InputTextarea = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/kortykotropina/dev/weed/src/components/InputTextarea.vue"]]);

var components = { InputTextarea, InputText };

const plugin = {
  install(Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  },
};

module.exports = plugin;
