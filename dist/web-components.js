import { createElementBlock as o, openBlock as r, createElementVNode as s, createCommentVNode as u, Fragment as i, renderList as m, toDisplayString as c, defineCustomElement as d } from "vue";
const p = (t, l) => {
  const n = t.__vccOpts || t;
  for (const [e, a] of l)
    n[e] = a;
  return n;
}, _ = ["value"], h = { key: 0 }, v = ["onClick"], f = {
  __name: "ClientSearch",
  props: {
    modelValue: String,
    results: Array
  },
  emits: ["update:modelValue", "select"],
  setup(t) {
    return (l, n) => (r(), o("div", null, [
      s("input", {
        type: "text",
        value: t.modelValue,
        onInput: n[0] || (n[0] = (e) => l.$emit("update:modelValue", e.target.value)),
        placeholder: "Search clients..."
      }, null, 40, _),
      t.results.length ? (r(), o("ul", h, [
        (r(!0), o(i, null, m(t.results, (e) => (r(), o("li", {
          key: e.number,
          onClick: (a) => l.$emit("select", e)
        }, c(e.name) + " (" + c(e.number) + ") ", 9, v))), 128))
      ])) : u("", !0)
    ]));
  }
}, k = /* @__PURE__ */ p(f, [["__scopeId", "data-v-faa8cd2a"]]), C = d(k);
customElements.define("client-search", C);
