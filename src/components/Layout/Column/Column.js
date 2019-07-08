const generateBreakpoints = (name, limit, condition) => {
  const result = {};
  for(let i = 1; i <= limit; i++) {
    result[`layout__column--${name}-${i}`] = condition && condition === i
  }
  return result
}

// import './column.scss';

export default {
  name: 'Column',
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
     * Reverse direction of the column
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
    xs: {
      type: Boolean | Number,
      default: null
    },
    sm: {
      type: Number,
      default: null
    },
    md: {
      type: Number,
      default: null
    },
    lg: {
      type: Number,
      default: null
    },
    xl: {
      type: Number,
      default: null
    },
    xsshift: {
      type: Number,
      default: null
    },
    smshift: {
      type: Number,
      default: null
    },
    mdshift: {
      type: Number,
      default: null
    },
    lgshift: {
      type: Number,
      default: null
    },
    xlshift: {
      type: Number,
      default: null
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
        'layout__column': true,
        'layout__row--reverse': this.reverse,
        'layout__column--align-stretch': this.align && this.align === 'strech',
        'layout__column--align-start': this.align && this.align === 'start',
        'layout__column--align-end': this.align && this.align === 'end',
        'layout__column--align-center': this.align && this.align === 'center',
        'layout__column--align-baseline': this.align && this.align === 'baseline',
        'layout__column--xs': this.xs,// && !Number.isInteger(this.xs),
        ...generateBreakpoints('xs', 12, this.xs),
        ...generateBreakpoints('sm', 12, this.sm),
        ...generateBreakpoints('md', 12, this.md),
        ...generateBreakpoints('lg', 12, this.lg),
        ...generateBreakpoints('xl', 12, this.xl),
        ...generateBreakpoints('xs-shift', 12, this.xsshift),
        ...generateBreakpoints('sm-shift', 12, this.smshift),
        ...generateBreakpoints('md-shift', 12, this.mdshift),
        ...generateBreakpoints('lg-shift', 12, this.lgshift),
        ...generateBreakpoints('xl-shift', 12, this.xlshift),
        'layout__column--nogutter': this.nogutter,
        'layout__column--debug': this.debug
      }
      return classes
    },
  },
  render (createElement) {
    /* if (this.span) {
      style.flex = `0 0 ${this.column}%`
    } else {
      style.left = 'auto',
      style.right = 'auto'
    } */

    return createElement(
      this.tag, {
        attrs: this.$attrs,
        class: this.classes
      }, this.$slots.default)
  }
}
