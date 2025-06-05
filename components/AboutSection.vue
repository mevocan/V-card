<template>
  <section id="about" class="about">
    <div class="section-header">
      <h2>Hakkımda</h2>
    </div>
    <div class="intro">
      <ul class="info">
        <li>
          <i class="fas fa-map-marker-alt"></i>
          Kınıklı Mh. 6027.Sk No:17 Pamukkale/Denizli
        </li>
        <li>
          <i class="fas fa-envelope"></i>
          durmus.kucuk@aqtivite.com.tr
        </li>
        <li>
          <i class="fas fa-phone"></i>
          0 507 301 68 37
        </li>
        <li>
          <i class="fas fa-globe"></i>
          <a href="https://aqtivite.com.tr" target="_blank">aqtivite.com.tr</a>
        </li>
      </ul>
      <p>
        Merhaba, ben Durmuş Küçük. <br />
        İnsanların sosyal yaşamlarını zenginleştirecek etkinlikleri daha kolay
        keşfedebilmeleri ve bu etkinliklere rahatlıkla erişebilmeleri amacıyla
        Aqtivite platformunu kurdum. Teknoloji ve topluluk yapısını
        birleştirerek, kullanıcıların yaşadıkları şehirlerdeki çeşitli
        deneyimlere ulaşmasını kolaylaştıran bir yapı geliştirmeye
        odaklanıyorum.
      </p>
    </div>
  </section>
</template>

<style>
.about .intro ul.info {
  margin-bottom: 40px;
  padding: 0;
  list-style: none;
}

.about .intro ul.info li {
  border-bottom: dashed 1px #ddd;
  padding: 15px 0;
  font-family: "Roboto Slab", serif;
  font-weight: 300;
  color: #0c0c0c;
  font-size: 14px;
}
.about .intro ul.info li i {
  margin-right: 5px;
}

.about .intro ul.info li:first-child {
  padding-top: 0;
}

.about .intro p {
  margin: 0;
}
</style>
