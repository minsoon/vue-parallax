<script>
export default {
  name: 'Parallax',
  props: {
    height: {
      type: [String, Number],
      default: 500
    },
    src: String
  },
  data () {
    return {
      isBooted: true
    };
  },
  computed: {
    styles: function styles() {
      return {
        display: 'block',
        opacity: this.isBooted ? 1 : 0,
        transform: 'translate(-50%, ' + this.parallax + 'px)'
      };
    }
  },
  watch: {
    parallax: function parallax() {
      this.isBooted = true;
    }
  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    init: function init() {
      console.log(this);
    }
  },
  render: function render(h) {
    var imgData = {
      staticClass: 'v-parallax__image',
      style: this.styles,
      attrs: {
        src: this.src
      },
      ref: 'img'
    };
    console.log(this.$listeners);
    var container = h('div', {
      staticClass: 'v-parallax__image-container'
    }, [h('img', imgData)]);

    var content = h('div', {
      staticClass: 'v-parallax__content'
    }, this.$slots.default);

    return h('div', {
      staticClass: 'v-parallax',
      style: {
        height: this.height + 'px'
      },
      on: this.$listeners
    }, [container, content]);
  }
};
</script>

<style lang="less">
</style>



