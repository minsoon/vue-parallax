<!--
  backgroundImage : vuetify(v-parallax) Parallax 활용
  pointItems : directive (v-parallax-point) 로 개발
    - option : {
      speed 0 ~ 1
      y : scrollY
      index : 감싸고 있는 컨텐츠 Index
      height: 감싸고 있는 컨텐츠 height
    }
-->
<template>
  <div class="parallaxBox">
    <div class="translateImgBox">
      <img :src="imageUrl" class="translateImg" />
    </div>
    <div class="translateBox">
      <div class="text">
        <p :class="{ on: textTop }">
          <slot />
        </p>
      </div>
      <div class="pointBox">
        <div class="point" v-for="(k, idx) in 10" v-parallax-point="{ speed: (idx / 10), y: scroll.y, index: index, height: contentHeight }">
          <p class="item"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BoxParallax',
    props: [
      'imageUrl',
      'scroll',
      'index'
    ],
    data () {
      return {
        screenWidth: window.innerWidth,
        contentHeight: 0,
        translateImg: null,
        translateDom: null,
        textTop: false,
        offsetTop: 0
      };
    },
    watch: {
      scroll () {
        if (this.offsetTop + this.translateDom.clientHeight > this.scroll.y && this.offsetTop < this.scroll.y + window.innerHeight) {
          this.translateImg.style.transform = 'translate(-50%, ' +  ( (this.scroll.y - (this.index * this.contentHeight)) * 0.5 ) + 'px)';
          this.textTop = this.offsetTop - (this.translateDom.clientHeight / 2.5) < this.scroll.y ? true : false;
        }
      }
    },
    mounted () {
      this.translateDom = this.$el.querySelectorAll('.translateBox')[0];
      this.translateImg = this.$el.querySelectorAll('.translateImg')[0];
      this.contentHeight = this.translateDom.clientHeight;
      this.offsetTop = this.$el.offsetTop;
    }
  };
</script>

<style lang="less">
  .parallaxBox {
    position:relative;
    width:100%;
    text-align:center;
    overflow:hidden;
    .translateImgBox {
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      img {
        position:absolute;
        bottom:0;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        will-change: transform;
        transform: translate(-50%, 0);
      }
    }
    .translateBox {
      position:relative;
      width:100%;
      height:100%;
    }
    .text {
      position:absolute;
      top:0;
      z-index:1;
      padding: 20px 0;
      width:100%;
      height:100%;
      display: flex;
      align-items: center;
      background-color:rgba(0, 0, 0, 0.4);
      p {
        display: table-cell;
        vertical-align: middle;
        position:relative;
        z-index:1;
        width:100%;
        font-size:20px;
        color:#fff;
        -webkit-transition: all 1s cubic-bezier(0.25, 0.8, 0.5, 1);
        transform: translate(0, 400px);
        &.on {
         transform: translate(0, 0);
        }
      }
    }
    .pointBox {
      .point {
        position:absolute;
        top:0;
        left:0;
        background:red;
        border-radius: 50%;
        box-shadow: 0 0 10px red;
        -webkit-transition: all 0.5s cubic-bezier(0.25, 0.8, 0.5, 1);
      }
    }
  }
</style>



