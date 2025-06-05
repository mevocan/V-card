<template>
  <!-- Main Wrapper -->
  <main class="main-wrapper">
    <!-- Preloader -->
    <Preloader />

    <!-- Header -->
    <HeaderSection />

    <!-- Main Content -->
    <div class="main-content float-end">
      <BannerSection />
      <AboutSection />
      <ResumeSection />
      <AqtiviteSection />
      <ContactSection />
    </div>

    <!-- UpButton -->
    <UpButton />
  </main>
</template>

<style>
@media only screen and (max-width: 991px) {
  .main-wrapper {
    width: 100%;
  }

  .header {
    transform: translateX(-260px);
    transition: all 0.3s ease-in-out;
  }

  .pushed {
    transform: translateX(0);
  }

  .main-content {
    width: 100%;
    transition: all 0.3s ease-in-out;
  }

  .main-pushed {
    transform: translateX(260px);
  }
}

@media only screen and (max-width: 767px) {
  .banner {
    padding: 60px !important;
  }

  .banner .quote {
    width: initial;
  }

  .status .status-item {
    margin-bottom: 20px;
  }

  .resume .resume-item {
    margin-top: 30px !important;
  }
}

@media only screen and (max-width: 480px) {
  .main-content section {
    padding: 60px 30px;
  }
}
</style>