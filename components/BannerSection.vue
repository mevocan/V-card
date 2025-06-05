<template>
  <section id="banner" class="banner">
    <div class="quote text-center">
      <h2>Yaşam eğlenceyle dolu bir serüven olmalı, bir görev değil.</h2>
      <span class="author">- Helen Keller -</span>
    </div>
    <div class="overlay"></div>
  </section>
</template>

<style>
.banner {
  padding: 0 !important;
  position: relative;
  border-bottom: 0 !important;
  height: 100vh;
}

.banner .backstretch {
  position: absolute;
  top: 0;
  bottom: 0;
}

/* === Quote === */
.banner .quote {
  margin: 0 auto;
  top: calc(50% - 60px);
  position: relative;
  width: 500px;
  z-index: 1;
}

.banner .quote:before {
  content: "";
  position: absolute;
  left: -32px;
  top: -40px;
  height: 22px;
  width: 22px;
  border-top: solid 4px #fff;
  border-left: solid 4px #fff;
}

.banner .quote:after {
  content: "";
  position: absolute;
  right: -30px;
  bottom: -18px;
  height: 22px;
  width: 22px;
  border-bottom: solid 4px #fff;
  border-right: solid 4px #fff;
}

.banner .quote h2 {
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  font-weight: 400;
  margin: 0;
  line-height: 1.3em;
}

.banner .quote span.author {
  color: #bdbdbd;
  display: block;
  font-size: 18px;
  font-family: "Roboto Slab", serif;
  font-weight: 300;
  margin-top: 10px;
}

.banner .overlay {
  background-image: url(assets/images/bg.jpg);
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  filter: brightness(0.3);
}
</style>
