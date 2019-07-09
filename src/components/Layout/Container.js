export default {
  name: 'Container',
  inheritAttrs: false,
  props: {
    /**
     * The HTML tag to be used instead of the default `div`
     */
    tag: {
      type: String,
      default: 'div'
    },
    /**
     * Set to apply some debug styling
     */
    debug: {
      type: Boolean,
      default: false
    },
    /**
     * Remove $layout-gutter
     */
    nogutter: {
      type: Boolean,
      default: false
    },
    /**
     * Disregard $layout-max-width
     */
    fluid: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    classes() {
      const classes = {
        'layout__container': true,
        'layout__container--fluid': this.fluid,
        'layout__container--nogutter': this.nogutter,
        'layout__container--debug': this.debug
      }
      return classes
    },
  },
  render (createElement) {
    return createElement(
      this.tag, {
        attrs: this.$attrs,
        class: this.classes
      }, this.$slots.default)
  }
}
