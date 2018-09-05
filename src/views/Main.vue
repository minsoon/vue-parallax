<template>
  <div class="main">
    <box-parallax
      :imageUrl="'https://apertureless.github.io/vue-parallax/static/img/pexels-photo-241307.jpeg'"
      :style="{ height: screenHig + 'px' }"
      :scroll="scroll"
      :index="0"
    >
      쓸쑤록 반하는.<br />
      GD 서비스<br />
    </box-parallax>
    <box-parallax
      :imageUrl="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
      :style="{ height: screenHig + 'px' }"
      :scroll="scroll"
      :index="1"
    >
      월 1만원으로<br />
      골퍼라면 누구든<br />
      그 이상의 가치를 즐길 수있는<br />
      GD 서비스 혜택
    </box-parallax>
    <box-parallax
      :imageUrl="'https://cdn.vuetifyjs.com/images/parallax/material.jpg'"
      :style="{ height: screenHig + 'px' }"
      :scroll="scroll"
      :index="2"
    >
      혜택1.<br />
      월 7회 라운드만 해도 다 돌려드림<br />
      GD 회원권 상당의 모바일 이용권 100% 지급
    </box-parallax>
    <box-parallax
      :imageUrl="'https://apertureless.github.io/vue-parallax/static/img/pexels-photo-241307.jpeg'"
      :style="{ height: screenHig + 'px' }"
      :scroll="scroll"
      :index="3"
    >
      혜택2.<br />
      스크린 경기를 더욱 즐겁게 힘차게<br />
      약 60 여종의 플러스샵 아이템<br />
      볼 볼꼬리 코스매니저 월 무제한 사용<br />
      내맘대로 자유룝게~
    </box-parallax>
    <box-parallax
      :imageUrl="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
      :style="{ height: screenHig + 'px' }"
      :scroll="scroll"
      :index="4"
    >
      혜택3.<br />
      투어대회 투어CC입장권 월 0매<br />
      명문 프로대화/CC를 스키린에서<br />
      생생한 현장을 체험해보세요~
    </box-parallax>
    <box-parallax
      :imageUrl="'https://cdn.vuetifyjs.com/images/parallax/material.jpg'"
      :style="{ height: screenHig + 'px' }"
      :scroll="scroll"
      :index="5"
    >
      혜택4.<br />
      한번도 안가본 사람은 있어도<br />
      한번만 간 사람은 없다!<br />
      필드 나스모 촬영이 가능한 골프존 카운티<br />
      그린피 1만원 월 무제한 할인
    </box-parallax>
    <box-parallax
      :imageUrl="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
      :style="{ height: screenHig + 'px' }"
      :scroll="scroll"
      :index="6"
    >
      혜택5.<br />
      머리부터 발끝까지 HOT한 신상 용품<br />
      직접 체험하고 구매하자<br />
      골프존 마켓 HOT하게 월 무제한 7% 할인<br /><br />

      GD회원은 묻지도 따지지도 않고<br />
      마켓 자사몰VUP회원으로 즉시 승급!
    </box-parallax>
    <box-parallax
      :imageUrl="'https://apertureless.github.io/vue-parallax/static/img/pexels-photo-241307.jpeg'"
      :style="{ height: screenHig + 'px' }"
      :scroll="scroll"
      :index="7"
    >
      혜택6.<br />
      특가 각종 이벤트 혜택이 쏟아지는<br />
      필드 부킹 전문 티스케너<br />
      10,000원 할인 쿠폰 월 1매
    </box-parallax>
    <box-parallax
      :imageUrl="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
      :style="{ height: screenHig + 'px' }"
      :scroll="scroll"
      :index="8"
    >
      GET IT 혜택<br />
      혜택차사들의 열일로 탄생하는<br />
      게릴라 혜택까지<br />
      혜택은 계속 됩니다.
    </box-parallax>
  </div>
</template>

<script>
import BoxParallax from '@/views/BoxParallax';
import innerHeight from 'ios-inner-height';
console.log(innerHeight());
export default {
  name: 'Main',
  components: {
    BoxParallax
  },
  data () {
    return {
      screenHig: innerHeight(),
      scroll: {
        y: window.pageYOffset || document.documentElement.scrollTop,
        x: window.pageXOffset || document.documentElement.scrollLeft
      }
    };
  },
  methods: {
    handleScroll (event) {
      this.scroll = {
        y: window.pageYOffset || document.documentElement.scrollTop,
        x: window.pageXOffset || document.documentElement.scrollLeft
      };
    }
  },
  created () {
    setTimeout(() => {
       window.addEventListener('scroll', this.handleScroll);
    });
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style lang="less">
  .main {
    width:100%;
  }
</style>



