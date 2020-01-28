<template>
  <div class="hero" :class="height">
    <h1 v-html="msg"></h1>
    <img class="hero_img" src="/images/undraw_remotely.svg">
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    msg: String,
    height: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/assets/scss/_variables.scss';
.hero {
  text-align: left;
  position: relative;
  max-width: 1280px;
  margin: 50px auto 30px;

  &.large {
    padding: 150px 15px;
  }
  &.small {
    padding: 80px 15px;
    background: $colorGrey;
    img {
      display: none;
    }
    h1 {
      @include screenMedium {
        font-size: 55px;
        padding-left: 50px;
        margin: 0 auto;
      }
    }
  }

  &_img {
    width: 600px;
    position: absolute;
    top: 50px;
    right: 50px;
    z-index: -1;
  }
  h1 {
    letter-spacing: -4px;
    font-weight: 300;
    font-size: 9vw;
    line-height: 1.2;

    @include screenMedium {
      font-size: 70px;
      padding-left: 50px;
      margin: 0 auto;
    }

    span {
      font-weight: 700;
      letter-spacing: -2px;

      @include gradientText( $colorRed, $colorPurple );
    }
  }
}
</style>
