import completeCssProperty from '../../helpers/completeCssProperty'

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
     * Set to apply some debug styling
     */
    debug: {
      type: Boolean,
      default: false
    },
    /**
     * Remove gutter
     */
    nogutter: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    gutter () {
      const { gutter } = this.$options.config.gutter
      return this.nogutter ? 0 : gutter
    }
  },
  render (createElement) {

    const attrs = {
      attrs: this.$attrs,
      on: this.$listeners,
      style: Object.assign({
        display: 'flex',
        flexWrap: 'wrap',
        margin: `0 -${this.gutter}px`,
      },
        this.align ? {
          'align-items': `${completeCssProperty(this.align)}`
        } : {},
        this.justify ? {
          'justify-content': `${completeCssProperty(this.justify)}`
        } : {},
        this.grow ? {
          'flex-grow': 1
        } : {},
        this.resetStyle ? {
          padding: '0',
          listStyle: 'none'
        } : {},
        this.debug ? {
          border: `dotted 1px rgba(${this.$options.config.colors.debug[1]},0.5)`,
          background: `rgba(${this.$options.config.colors.debug[1]},0.3)`
        } : {}
      )
    }

    if (this.transition) {
      attrs.name = this.transition
      attrs.tag = this.tag
    }

    return createElement(
      this.transition ? 'transition-group' : this.tag, attrs, this.$slots.default)
  }
}
