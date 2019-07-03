
export default {
  name: 'Guides',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visibility: this.visible,
      columns: this.$options.config.columns,
      gutter: this.$options.config.gutter,
      maxWidth: this.$options.config.maxWidth
    }
  },
  computed: {
    layoutHelperStyle () {
      return {
        maxWidth: `${this.maxWidth + this.gutter}px`,
        position: 'fixed',
        height: '100%',
        width: '100%',
        margin: 'auto',
        zIndex: '999999',
        left: '0',
        right: '0',
        top: '0',
        pointerEvents: 'none',
        borderRight: `1px solid ${this.$options.config.colors.guidesLimits}`,
        borderLeft: `1px solid ${this.$options.config.colors.guidesLimits}`
      }
    },
    linesHelperStyle () {
      return {
        padding: `0 ${this.gutter / 2}px`,
        position: 'absolute',
        height: '100%',
        width: '100%',
        margin: 'auto'
      }
    },
    linesWrapperStyle () {
      return {
        position: 'relative',
        height: '100%'
      }
    },
    containerHelperChildStyle () {
      return {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: '0',
        left: '0',
        borderLeft: `1px solid ${this.$options.config.colors.guidesContainer}`,
        borderRight: `1px solid ${this.$options.config.colors.guidesContainer}`
      }
    }
  },
  methods: {
    lineStyle (index) {
      return {
        position: 'absolute',
        display: 'block',
        height: '100%',
        width: '1px',
        border: `1px dashed ${this.$options.config.colors.guidesMain}`,
        top: '0',
        left: `calc(${100 * index}% / ${this.columns})`
      }
    },
    gutterStyle (index) {
      return {
        position: 'absolute',
        display: 'block',
        height: '100%',
        background: `${this.$options.config.colors.guidesMainBackground}`,
        top: '0',
        left: `calc(${100 * index}% / ${this.columns} - ${this.gutter / 2}px)`,
        width: `${this.gutter}px`
      }
    },
    containerHelperStyle () {
      return {
        position: 'absolute',
        height: '100%',
        margin: 'auto',
        top: '0',
        left: '0',
        right: '0',
        padding: `0 ${this.gutter}px`,
        width: `calc(100% - ${this.gutter * 2}px)`
      }
    }
  },
  mounted () {
    document.addEventListener('keydown', e => {
      if (e.key === this.$options.config.guidesToggleKey) {
        this.visibility = !this.visibility
      }
    });
  },
  render (createElement) {

    const containerHelperChild = createElement(
      'div', {
        style: this.containerHelperChildStyle
      }
    )

    const groupA = []

    for(let i = 0; i <= this.columns; i++) {
      groupA.push(createElement(
        'div', {
          style: this.lineStyle(i, this.columns),
          key: `line-${i}`
        }
      ))
    }

    for(let i = 0; i <= this.columns ; i++) {
      groupA.push(createElement(
        'div', {
          style: this.gutterStyle(i, this.columns, this.gutter),
          key: `gutter-${i}`
        }
      ))
    }

    const linesWrapper = createElement(
      'div', {
        style: this.linesWrapperStyle
      }, groupA
    )

    if(!this.visibility) {
      return null;
    }

    return createElement(
      this.tag, {
        style: this.layoutHelperStyle,
      }, [
        createElement(
          'div', {
            class: 'linesHelper',
            style: this.linesHelperStyle
          }, [linesWrapper]
        ),
        createElement(
          'div', {
          }, [containerHelperChild]
        )
      ]
    )
  }
}
