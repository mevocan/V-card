<template>
  <section id="banner" class="banner">
    <div class="quote text-center">
      <h2>Yaşam eğlenceyle dolu bir serüven olmalı, bir görev değil.</h2>
      <span class="author">- Helen Keller -</span>
    </div>
    <div class="arrows">
      <span class="arrow"></span>
      <span class="arrow"></span>
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

.banner .arrows {
  position: absolute;
  left: 50%;
  bottom: 100px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
}

.banner .arrow {
  display: block;
  width: 30px;
  height: 30px;
  border-left: 4px solid #fff;
  border-bottom: 4px solid #fff;
  transform: rotate(-45deg);
  margin: 4px 0;
  animation: bounce 2.5s infinite;
  opacity: 0.8;
}

.banner .arrow:last-child {
  animation-delay: 0.5s;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0) rotate(-45deg);
  }
  50% {
    transform: translateY(10px) rotate(-45deg);
  }
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
