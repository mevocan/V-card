<template>
  <section id="aqtivite" class="aqtivite">
    <div class="section-header">
      <h2>AQTİVİTE </h2>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="work-item">
          <p>
            Aqtivite, kullanıcıların şehirlerindeki etkinlikleri keşfetmelerine,
            arkadaşlarıyla paylaşmalarına ve kendilerine en uygun etkinlikleri
            bulmalarına yardımcı olan bir rehberdir. Sosyal ağ özellikleriyle
            arkadaşlar arasında etkileşimi artırırken, dinamik sekme ve katıl
            tamamla sekmeleri ile kullanıcılara kişiselleştirilmiş öneriler
            sunuyoruz.
          </p>
          <p>
            Vizyonumuz, insanların kültür, sanat ve eğlenceyle daha yakın bir
            bağ kurmalarına yardımcı olarak toplulukları bir araya getirmektir.
            Aqtivite, kullanıcılarına anlamlı ve keyifli deneyimler yaşatmayı
            amaçlayan bir ekiple hareket eder ve sürekli olarak kullanıcı geri
            bildirimlerini dikkate alarak uygulamamızı geliştirmeye devam
            ederiz.
          </p>

          Web:
          <a href="https://aqtivite.com.tr" target="_blank">aqtivite.com.tr</a>
          <br />
          İnstagram:
          <a href="https://www.instagram.com/aqtivite/" target="_blank"
            >@aqtivite</a
          >
          <br />
          LinkedIn:
          <a href="https://www.linkedin.com/company/aqtivite/" target="_blank"
            >@aqtivite</a
          >
        </div>
      </div>
    </div>
  </section>
  <!-- Section Status -->
  <section id="status" class="status">
    <div class="section-header-light">
      <h2>AQTİVİTE İSTATİSLİKLERİ</h2>
    </div>

    <div class="row">
      <div class="col-md-3 col-sm-3 col-6 status-item">
        <em class="number">+10.000</em>
        <span class="text">Kullanıcı</span>
      </div>

      <div class="col-md-3 col-sm-3 col-6 status-item">
        <em class="number">+1500</em>
        <span class="text">Aylık etkinlik</span>
      </div>

      <div class="col-md-3 col-sm-3 col-6 status-item">
        <em class="number">+500</em>
        <span class="text">Kurumsal Müşteri</span>
      </div>
    </div>
    <div class="overlay"></div>
  </section>
</template>

<style>
.status {
  background: url(/assets/images/darkbg.jpg) center left no-repeat;
  background-size: cover;
}

.status .status-item {
  position: relative;
  z-index: 1;
}

.status .status-item em.number {
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  font-style: normal;
  color: #fff;
  display: block;
  margin: 0 0 8px;
}

.status .status-item span.text {
  color: #a0a0a0;
  font-family: "Roboto Slab", serif;
  font-weight: 100;
  font-size: 14px;
}

.status .overlay {
  background: rgba(12, 12, 12, 0.85);
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
}
</style>
