<template>
  <div id="app">
    <nav class="header_nav">
      <router-link class="header_nav_link" to="/">Home</router-link>
      <router-link class="header_nav_link" to="/work">Work</router-link>
      <router-link class="header_nav_link" to="/contact">Contact</router-link>
    </nav>
    <router-view />
    <footer>
      <small>Copyright 2020. All rights reserved.</small>
    </footer>
  </div>
</template>
<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1.4;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $colorBlack;
}
h1 {
  font-size: 44px;
  font-weight: 500;
}
h2 {
  font-size: 28px;
  font-weight: 500;
}
h3 {
  font-size: 24px;
  font-weight: 500;
}
h4 {
  font-size: 20px;
  font-weight: 500;
}
p {
  font-size: 17px;
  font-weight: 400;
  margin-bottom: 20px;
}

.header_nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 99;
  text-align: right;
  padding: 10px 50px 10px 0;
  box-sizing: border-box;
  background-color: $colorWhite;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05), 
                0 2px 4px rgba(0,0,0,0.05), 
                0 4px 8px rgba(0,0,0,0.05);

  &_link {
    display: inline-block;
    padding: 6px 15px;
    color: $colorPurple;
    text-decoration: none;

    &:hover {
      background-color: $colorPurple;
      color: $colorWhite;
    }
  }
}

footer {
  background: $colorPurple;
  color: $colorWhite;
  padding: 20px 0;
}
</style>
