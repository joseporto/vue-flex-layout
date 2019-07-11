const generateBreakpoints = (name, limit, condition) => {
  const result = {};
  for (let i = 1; i <= limit; i++) {
    result[`layout__column--${name}-${i}`] = condition && condition === i
  }
  return result
}

export default {
  name: "Column",
  inheritAttrs: false,
  props: {
    /**
     * The HTML tag to be used instead of the default `div`
     */
    tag: {
      type: String,
      default: "div"
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
          'inheri'
        ].indexOf(value) !== -1
      }
    },
    /**
     * Shortcut for `justify="start"`
     */
    left: {
      type: Boolean,
      default: false
    },
    /**
     * Shortcut for `justify="center"`
     */
    center: {
      type: Boolean,
      default: false
    },
    /**
     * Shortcut for `justify="end"`
     */
    right: {
      type: Boolean,
      default: false
    },
    /**
      * Shortcut for `justify="between"`
      */
    between: {
      type: Boolean,
      default: false
    },
    /**
     * Shortcut for `justify="around"`
     */
    around: {
      type: Boolean,
      default: false
    },
    /**
     * Shortcut for `justify="evenly"`
     */
    evenly: {
      type: Boolean,
      default: false
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
     * Force column to be shown before other columns
     */
    first: {
      type: Boolean,
      default: false
    },
    /**
     * Force column to be shown after other columns
     */
    last: {
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
        layout__column: true,
        'layout__row--reverse': this.reverse,
        'layout__column--align-stretch': this.align && this.align === 'strech',
        'layout__column--align-start': this.align && this.align === 'start',
        'layout__column--align-end': this.align && this.align === 'end',
        'layout__column--align-center': this.align && this.align === 'center',
        'layout__column--align-baseline': this.align && this.align === 'baseline',
        'layout__column--justify-start': (this.justify && this.justify === 'start') || this.left,
        'layout__column--justify-end': (this.justify && this.justify === 'end') || this.right,
        'layout__column--justify-center': (this.justify && this.justify === 'center') || this.center,
        'layout__column--justify-between': (this.justify && this.justify === 'between') || this.between,
        'layout__column--justify-around': (this.justify && this.justify === 'around') || this.around,
        'layout__column--justify-evenly': (this.justify && this.justify === 'evenly') || this.evenly,
        'layout__column--justify-initial': this.justify && this.justify === 'initial',
        'layout__column--justify-inherit': this.justify && this.justify === 'inherit',
        'layout__column--xs': this.xs,
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
        'layout__column--first': this.first,
        'layout__column--last': this.last,
        'layout__column--nogutter': this.nogutter,
        'layout__column--debug': this.debug
      };
      return classes;
    }
  },
  render(createElement) {
    return createElement(
      this.tag,
      {
        attrs: this.$attrs,
        class: this.classes
      },
      this.$slots.default
    );
  }
};
