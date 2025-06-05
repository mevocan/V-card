<template>
  <header class="header float-start">
    <div class="mobile-bar d-block d-sm-none">
      <div class="hamburger-menu">
        <div class="bar"></div>
      </div>
    </div>

    <div class="avatar">
      <img src="assets/images/profile.png" alt="avatar" />
    </div>

    <div class="name">
      <h1>Durmuş Küçük</h1>
      <span>CEO of Aqtivite</span>
    </div>

    <!-- Social Icons -->
    <div class="social-icons">
      <ul>
        <li>
          <a href="https://www.instagram.com/durmus.kucuk/" target="_blank"
            ><i class="fab fa-instagram" aria-hidden="true"></i
          ></a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/durmu%C5%9F-k%C3%BC%C3%A7%C3%BCk-796a57197/"
            target="_blank"
            ><i class="fab fa-linkedin" aria-hidden="true"></i
          ></a>
        </li>
      </ul>
    </div>

    <!-- Navigation bar -->
    <nav class="main-nav">
      <ul class="navigation">
        <li class="current"><a href="#banner">Ana Sayfa</a></li>
        <li><a href="#about">Hakkımda</a></li>
        <li><a href="#resume">Deneyim</a></li>
        <li><a href="#aqtivite">Aqtivite</a></li>
        <li><a href="#contact">İletişim</a></li>
      </ul>
    </nav>

    <div class="copyright">
      <span>© Copyright 2025 Durmuş Küçük</span>
    </div>
  </header>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // Hamburger Menu & Mobile Push menu
  function toggleMenu() {
    document.querySelector(".header").classList.toggle("pushed");
    document.querySelector(".main-content").classList.toggle("main-pushed");
    document.querySelector(".bar").classList.toggle("animate");
    if (window.innerWidth <= 991) {
      if (document.querySelector(".header").classList.contains("pushed")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
  }

  var hamburger = document.querySelector(".hamburger-menu");
  if (hamburger) hamburger.addEventListener("click", toggleMenu);

  document.querySelectorAll(".main-nav ul li a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      // Sadece mobilde çalışsın
      if (window.innerWidth <= 991) {
        e.preventDefault();
        toggleMenu();
        // Hedef bölüme kaydır
        const targetId = link.getAttribute("href").replace("#", "");
        const target = document.getElementById(targetId);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 350); // Menü animasyonu bitince kaydır
        }
      }
    });
  });

  // Scroll ile aktif menü güncelleme
  var sections = document.querySelectorAll("section");
  window.addEventListener("scroll", function () {
    var currentPos = window.scrollY + 100;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      if (currentPos >= top && currentPos < top + height) {
        var id = section.getAttribute("id");
        document.querySelectorAll(".main-nav ul li").forEach(function (li) {
          li.classList.remove("current");
        });
        document.querySelectorAll(".main-nav ul li a").forEach(function (a) {
          if (a.getAttribute("href") === "#" + id) {
            a.parentElement.classList.add("current");
          }
        });
      }
    });
  });
});
</script>

<style>
.header {
  background: #0c0c0c;
  padding: 46px;
  position: fixed;
  height: 100vh;
  width: 260px;
  z-index: 5;
}

.header .avatar {
  overflow: hidden;
  width: 165px;
  height: 165px;
  border-radius: 50%;
}

.header .avatar img {
  width: 100%;
}

.header .name {
  margin: 34px 0;
}

.header .name h1 {
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  margin: 0 0 5px;
  text-transform: uppercase;
}

.header .name span {
  color: #777676;
  font-family: "Roboto Slab", serif;
  font-size: 15px;
  font-weight: 300;
}
/* === Social Icons === */
.header .social-icons {
  margin: 0 0 34px;
}

.header .social-icons ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.header .social-icons ul li {
  display: inline-block;
  padding: 0 20px 0 0;
}

.header .social-icons ul li a {
  color: #fff;
}

.header .social-icons ul li a i {
  font-size: 16px;
}

/* === Navigation === */
.header .main-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.header .main-nav ul li {
  padding-bottom: 15px;
}

.header .main-nav ul li a {
  color: #bebebe;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  transition: all 0.3s ease-in-out;
}

.header .main-nav ul li a:hover,
.header .main-nav ul li a:focus {
  color: #fff;
  text-decoration: none;
}

.header .main-nav ul li a:before {
  transition: all 0.3s ease-in-out;
}

.header .main-nav ul li a:after {
  transition: all 0.3s ease-in-out;
}

.header .main-nav ul li a:hover:before {
  content: "";
  position: absolute;
  left: -8px;
  top: -5px;
  height: 7px;
  width: 7px;
  border-top: solid 2px #fff;
  border-left: solid 2px #fff;
}

.header .main-nav ul li a:hover:after {
  content: "";
  position: absolute;
  right: -8px;
  bottom: -5px;
  height: 7px;
  width: 7px;
  border-bottom: solid 2px #fff;
  border-right: solid 2px #fff;
}

.header .main-nav ul li:last-child {
  padding-bottom: 0;
}

.header .main-nav ul li.current a {
  color: #fff;
}

.header .main-nav ul li.current a:before {
  content: "";
  position: absolute;
  left: -8px;
  top: -5px;
  height: 7px;
  width: 7px;
  border-top: solid 2px #fff;
  border-left: solid 2px #fff;
}

.header .main-nav ul li.current a:after {
  content: "";
  position: absolute;
  right: -8px;
  bottom: -5px;
  height: 7px;
  width: 7px;
  border-bottom: solid 2px #fff;
  border-right: solid 2px #fff;
}

/* === Copyright === */
.header .copyright {
  bottom: 20px;
  position: absolute;
}

.header .copyright span {
  color: #6a6a6a;
  font-family: "Roboto Slab", serif;
  font-size: 12px;
  font-weight: 300;
}

/* === Mobile Menu Bar === */
.header .mobile-bar {
  background: rgba(12, 12, 12, 0.75);
  color: #fff;
  height: 60px;
  right: -59px;
  top: 0;
  position: absolute;
  width: 60px;
  z-index: 3;
}

.header .hamburger-menu {
  position: absolute;
  top: 0;
  left: 15px;
  bottom: 0;
  margin: auto;
  width: 30px;
  height: 55px;
  cursor: pointer;
}

.header .bar,
.header .bar:after,
.header .bar:before {
  width: 30px;
  height: 3px;
}

.header .bar {
  position: relative;
  transform: translateY(25px);
  background: #fff;
  transition: all 0 300ms;
}

.header .bar.animate {
  background: rgba(255, 255, 255, 0);
}

.header .bar:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 10px;
  background: #fff;
  transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.header .bar:after {
  content: "";
  position: absolute;
  left: 0;
  top: 10px;
  background: #fff;
  transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.header .bar.animate:after {
  top: 0;
  transform: rotate(45deg);
  transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.header .bar.animate:before {
  bottom: 0;
  transform: rotate(-45deg);
  transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
}
@media only screen and (max-height: 600px) {
  .header .name {
    margin: 15px 0;
  }

  .header .main-nav ul li {
    padding-bottom: 10px;
  }

  .header .social-icons {
    margin: 0 0 15px;
  }

  .header .copyright {
    bottom: -18px;
    position: relative;
  }
}
</style>
