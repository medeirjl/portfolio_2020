<template>
  <div class="contact">
    <h2>Say hello</h2>
    <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/medeirjl@gmail.com" method="post">
      <fieldset id="fs-frm-inputs">
        <label for="full-name">Full Name</label>
        <input type="text" name="name" id="full-name" placeholder="First and Last" required="">
        <label for="email-address">Email Address</label>
        <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="">
        <label for="message">Message</label>
        <textarea rows="5" name="message" id="message" placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." required=""></textarea>
        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
      </fieldset>
      <input class="btn btn_outline btn_outline_red" type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';
/* form reset */
form input,
form select,
form textarea,
form fieldset,
form optgroup,
form label,
.StripeElement {
  font-family: inherit;
  font-size: 100%;
  color: inherit;
  border: none;
  border-radius: 0;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
}
form label,
form legend {
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 5px;
  padding-left: 2px;
}
/* border, padding, margin, width */
form input,
form select,
form textarea,
.StripeElement {
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 6px 10px;
  margin-bottom: 1.5rem;
}
form input:focus,
form select:focus,
form textarea:focus,
.StripeElement:focus {
  background-color: white;
  outline-style: solid;
  outline-width: thin;
  outline-color: gray;
  outline-offset: -1px;
}
form [type="text"],
form [type="email"],
.StripeElement {
  width: 100%;
}
form [type="button"],
form [type="submit"],
form [type="reset"] {
  width: auto;
  cursor: pointer;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
}
form [type="button"]:focus,
form [type="submit"]:focus,
form [type="reset"]:focus {
  outline: none;
}

form select {
  text-transform: none;
}


.contact {
  background: $colorGrey;
  padding: 50px 15px;

  form {
    max-width: 600px;
    margin: 0 auto;
    text-align: left;
  }
}
</style>
