<template>
  <div class="preloader-outer">
    <div class="preloader">
      <div class="lines">
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  window.addEventListener("load", function () {
    document.querySelector(".preloader-outer").style.transition =
      "opacity 0.6s";
    setTimeout(function () {
      document.querySelector(".preloader-outer").style.opacity = "0";
      setTimeout(function () {
        document.querySelector(".preloader-outer").style.display = "none";
      }, 600);
    }, 350);
  });
});
</script>

<style>
.preloader-outer {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #0c0c0c;
  z-index: 6;
  overflow: hidden;
}

.preloader {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 60px;
  margin: -30px 0 0 -40px;
}

.preloader .lines {
  width: 80px;
  height: 40px;
  position: absolute;
}

.preloader .lines .line {
  width: 80px;
  height: 1px;
  background-color: #fff;
  position: absolute;
  clip: rect(0, 0, 20px, 0);
}

.preloader .lines .line.line-1 {
  top: 0;
  animation: slide 2s ease 0.1s infinite;
}

.preloader .lines .line.line-2 {
  top: 15px;
  animation: slide 2s ease 0.25s infinite;
}

.preloader .lines .line.line-3 {
  top: 30px;
  animation: slide 2s ease 0.5s infinite;
}

.preloader .loading-text {
  position: absolute;
  top: 50px;
  text-align: center;
  width: 100%;
  color: #fff;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 1px;
  line-height: 10px;
  height: 10px;
  text-transform: uppercase;
}

@keyframes slide {
  0% {
    clip: rect(0, 0, 20px, 0);
  }

  30% {
    clip: rect(0, 80px, 20px, 0);
  }

  50% {
    clip: rect(0, 80px, 20px, 0);
  }

  80% {
    clip: rect(0, 80px, 20px, 80px);
  }

  100% {
    clip: rect(0, 80px, 20px, 80px);
  }
}

@keyframes fade {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
