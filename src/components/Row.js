export default {
  name: 'Row',
  props: {
    tagName: {
      type: String,
      default: 'div'
    },
    resetStyle: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      validator(value) {
        return [
          'stretch',
          'flex-start',
          'flex-end',
          'center',
          'baseline'
        ].indexOf(value) !== -1
      }
    },
    justify: {
      type: String,
      validator(value) {
        return [
          'flex-start',
          'flex-end',
          'center',
          'space-between',
          'space-around',
          'space-evenly'
        ].indexOf(value) !== -1
      }
    },
    grow: Boolean,
    debug: {
      type: Boolean,
      default: false
    },
    noGutter: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    gutter () {
      const { gutter } = this.$options.config
      return this.noGutter ? 0 : gutter
    }
  },
  render (createElement) {
    return createElement(
      this.tagName, {
        attrs: this.$attrs,
        on: this.$listeners,
        style: Object.assign({
          display: 'flex',
          flexWrap: 'wrap',
          margin: `0 -${this.gutter}px`,
        },
          this.align ? {
            'align-items': `${this.align}`
          } : {},
          this.justify ? {
            'justify-content': `${this.justify}`
          } : {},
          this.grow ? {
            height: '100%'
          } : {},
          this.resetStyle ? {
            padding: '0',
            listStyle: 'none'
          } : {},
          this.debug ? {
            border: `dotted 1px ${this.$options.config.debugBorderColor}`,
            background: this.$options.config.debugColor,
            'min-height': '100px'
          } : {}
        )
      }, this.$slots.default)
  }
}
