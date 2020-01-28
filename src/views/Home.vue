<template>
  <div>
    <hero :msg="msg" height="large" />
    
    <div class="full">
      <div class="full_wrapper">
        <img class="" src="/images/html_logo.svg">
        <img class="" src="/images/css_logo.svg">
        <img class="" src="/images/sass_logo.svg">
        <img class="" src="/images/vue_logo.svg">
        <img class="" src="/images/laravel_logo.svg">
        <img class="" src="/images/sass_logo.svg">
      </div>
    </div>

    <div class="half_wrapper">
      <div class="half">
        <div class="half_content">
          <h2>Websites and Web Apps</h2>
          <p>Whether it's a single landing page with just HTML, CSS and Javascript, a custom Wordpress site, a single page Vue app, or a full fledged Laravel app complete with a custom database and admin panel, I can do it all.</p>
          <a class="btn btn_outline btn_outline_red" href="/work">Learn more</a>
        </div>
      </div>
      <div class="half">
        <img class="half_img" src="/images/undraw_programmer.svg">
      </div>
    </div>

    <div class="half_wrapper">
      <div class="half">
        <img class="half_img" src="/images/new_message.svg">
      </div>
      <div class="half">
        <div class="half_content">
          <h2>Email Marketing and Banner Ads</h2>
          <p>I build responsive emails that look great in even the most obscure email clients (a webmail based on Outlook with 120 dpi settings, anyone?). I have experience managing lists, building automated campagins and A/B tests. I also make beautiful, animated HTML banner ads.</p>
          <a class="btn btn_outline btn_outline_red" href="/work">Learn more</a>
        </div>
      </div>
    </div>

    <div class="half_wrapper">
      <div class="half">
        <div class="half_content">
          <h2>Troubleshooting and Bug Fixing</h2>
          <p>Google is my BFF and I know what to search for when trying to solve a problem. Even with languages I'm not fluent in and projects I'm not familiar with, I can dive in and solve problems to get projects working as they should.</p>
          <a class="btn btn_outline btn_outline_red" href="/work">Learn more</a>
        </div>
      </div>
      <div class="half">
        <img class="half_img" src="/images/bug_fixing.svg">
      </div>
    </div>

    <div class="half_wrapper">
      <div class="half">
        <img class="half_img" src="/images/undraw_pair_programming.svg">
      </div>
      <div class="half">
        <div class="half_content">
          <h2>Project Management</h2>
          <p>I've been the lead developer on many projects and know how help others set and complete project tasks. Time management and goal setting are a couple of my strong suits.</p>
          <a class="btn btn_outline btn_outline_red" href="/work">Learn more</a>
        </div>
      </div>
    </div>

    <contact-form></contact-form>
    
  </div>
</template>

<script>
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Hi, I\'m Jena. <br>I\'m a <span>front end</span> <br>web developer.'
    }
  },
  components: {
    Hero,
    ContactForm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';


.btn {
  padding: 6px 25px;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: all 0.25s;
  font-weight: 500;
  background: transparent;

  &_outline {
    color: $colorWhite;
    border: 1px solid $colorWhite;

    &:hover {
      color: $colorRed;
      box-shadow: inset 10em 0 0 0 $colorWhite;
    }
  }

  &_outline_red {
    color: $colorRed;
    border: 1px solid $colorRed;

    &:hover {
      color: $colorWhite;
      box-shadow: inset 10em 0 0 0 $colorRed;
    }
  }
}

.full {
  background-color: $colorGrey;
  margin: 50px auto;
  width: 100%;
  padding: 30px 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  &_wrapper {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  img {
    max-width: 150px;
    max-height: 60px;
    filter: grayscale(1);
  }
}

.half {
  width: 50%;

  &_content {
    padding: 50px;
    color: $colorBlack;
  }

  &_wrapper {
    max-width: 1280px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 80px auto;
  }

  &_img {
    max-width: 80%;
    &_tall {
      max-width: 70%;
    }
  }
}

</style>
