import Vue from "vue";

// in order not to polute the database and making useless database calls
// we mock axios (we could have used mock-axios instead)
Vue.prototype.$options = {
config:() => Promise.resolve({
  columns: 12,
  gutter: 16,
  maxWidth: 1420,
  breakpoints: {
    xs: 320,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
  guidesToggleKey: 'g',
  colors: {
    debug: [
      '255, 232, 122',
      '163, 221, 122',
      '242, 103, 48',
      '57, 169, 219'
    ],
    guidesLimits: 'rgba(255, 0, 0, 1)',
    guidesContainer: 'rgba(0, 255, 0, 1)',
    guidesMain: 'rgba(0, 155, 255, 0.8)',
    guidesMainBackground: 'rgba(255, 0, 255, 0.1)'
  }
})
};

export default previewComponent => {
  // https://vuejs.org/v2/guide/render-function.html
  return {
    render(createElement) {
      return createElement(previewComponent);
    }
  };
};
