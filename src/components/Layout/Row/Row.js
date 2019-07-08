import '@/styles/row.scss';

export default {
  name: 'Row',
  props: {
    /**
     * The HTML tag to be used instead of the default `div`
     */
    tag: {
      type: String,
      default: 'div'
    },
    resetStyle: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: null
    },
    /**
     * Reverse direction of the row
     */
    reverse: {
      type: Boolean,
      default: false
    },
    /**
     * Vertical column alignment
     */
    align: {
      type: String,
      validator(value) {
        return [
          'stretch',
          'start',
          'end',
          'center',
          'baseline'
        ].indexOf(value) !== -1
      }
    },
    /**
     * Horizontal column alignment
     */
    justify: {
      type: String,
      validator(value) {
        return [
          'start',
          'end',
          'center',
          'between',
          'around',
          'evenly',
          'initial',
          'inherit'
        ].indexOf(value) !== -1
      }
    },
    grow: Boolean,
    /**
     * Prevent row from wrapping
     */
    nowrap: {
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
     * Set to apply some debug styling
     */
    debug: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      const classes = {
        'layout__row': true,
        'layout__row--reset': this.resetStyle,
        'layout__row--reverse': this.reverse,
        'layout__row--align-stretch': this.align && this.align === 'strech',
        'layout__row--align-start': this.align && this.align === 'start',
        'layout__row--align-end': this.align && this.align === 'end',
        'layout__row--align-center': this.align && this.align === 'center',
        'layout__row--align-baseline': this.align && this.align === 'baseline',
        'layout__row--justify-start': this.justify && this.justify === 'start',
        'layout__row--justify-end': this.justify && this.justify === 'end',
        'layout__row--justify-center': this.justify && this.justify === 'center',
        'layout__row--justify-between': this.justify && this.justify === 'between',
        'layout__row--justify-around': this.justify && this.justify === 'around',
        'layout__row--justify-evenly': this.justify && this.justify === 'evenly',
        'layout__row--justify-initial': this.justify && this.justify === 'initial',
        'layout__row--justify-inherit': this.justify && this.justify === 'inherit',
        'layout__row--grow': this.grow,
        'layout__row--nowrap': this.nowrap,
        'layout__row--nogutter': this.nogutter,
        'layout__row--debug': this.debug
      }
      return classes
    },
  },
  render (createElement) {

    const attrs = {
      attrs: this.$attrs,
      on: this.$listeners,
      class: this.classes
    }

    if (this.transition) {
      attrs.name = this.transition
      attrs.tag = this.tag
    }

    return createElement(
      this.transition ? 'transition-group' : this.tag, attrs, this.$slots.default)
  }
}
