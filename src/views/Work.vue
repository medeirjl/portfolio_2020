<template>
  <div>
    <hero :msg="msg" height="small" />
    <div class="half_wrapper">
      <div class="half">
        <div class="half_content">
          <h2>P&G Citizenship Report</h2>
          <p>2019 was the second year I developed the Citizenship Report for Procter and Gamble. This project brought about challenges with a quick timeline and responsiveness for the design. I was able to overcome these challenges by communicating realistic expectations with the client and reaching out to my team for a hand when I needed the extra speed. The responsive issues were solved with a little out of the box thinking and implementation in JS as well as a lot of viewport calculations in SCSS.</p>
          <ul class="work_chips">
            <li>HTML</li>
            <li>SCSS</li>
            <li>Vue JS</li>
            <li>GTM integration</li>
          </ul>
        </div>
      </div>
      <div class="half">
        <img class="half_img" src="/images/work_frame.svg">
      </div>
    </div>

    <div class="half_wrapper">
      <div class="half">
        <img class="half_img" src="/images/work_frame.svg">
      </div>
      <div class="half">
        <div class="half_content">
          <h2>Scripps Website</h2>
          <p></p>
          <ul class="work_chips">
            <li>Wordpress</li>
            <li>HTML</li>
            <li>SCSS</li>
            <li>Webpack</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="half_wrapper">
      <div class="half">
        <div class="half_content">
          <h2>Richter & Phillips</h2>
          <p></p>
          <ul class="work_chips">
            <li>Wordpress</li>
            <li>HTML</li>
            <li>SCSS</li>
            <li>Webpack</li>
            <li>Wordpress REST API</li>
            <li>Woocommerce</li>
          </ul>
        </div>
      </div>
      <div class="half">
        <img class="half_img" src="/images/work_frame.svg">
      </div>
    </div>

    <div class="half_wrapper">
      <div class="half">
        <img class="half_img" src="/images/work_frame.svg">
      </div>
      <div class="half">
        <div class="half_content">
          <h2>PoweredBy EyeMed University</h2>
          <p></p>
          <ul class="work_chips">
            <li>Laravel</li>
            <li>Vue JS</li>
            <li>HTML</li>
            <li>SCSS</li>
          </ul>
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
  name: 'Work',
  data () {
    return {
      msg: 'Check out some of my <span>favorite</span> work'
    }
  },
  components: {
    Hero,
    ContactForm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';
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
    box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07);
    &_tall {
      max-width: 70%;
    }
  }
}

.work_chips {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  li {
    padding: 6px 12px;
    margin: 0 5px;
    color: #fff;
    background: $colorRed;
    font-size: 13px;
  }
}
</style>
