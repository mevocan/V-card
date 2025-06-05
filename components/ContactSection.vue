<template>
  <section id="contact" class="contact">
    <div class="c2">
    <div class="section-header">
      <h2>İLETİŞİM</h2>
    </div>

    <form method="post">
      <div class="row">
        <div class="col-md-6 col-sm-6 col-12">
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              name="InputName"
              id="InputName"
              placeholder="Adınız"
            />
          </div>
        </div>

        <div class="col-md-6 col-sm-6 col-12">
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="InputEmail"
              name="InputEmail"
              placeholder="Email"
            />
          </div>
        </div>

        <div class="col-md-6 col-sm-6 col-12">
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              name="InputPhone"
              id="InputPhone"
              placeholder="Telefon"
            />
          </div>
        </div>

        <div class="col-md-6 col-sm-6 col-12">
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="InputSubject"
              name="InputSubject"
              placeholder="Konu"
            />
          </div>
        </div>

        <div class="col-12">
          <div class="mb-3">
            <textarea
              name="InputMessage"
              id="InputMessage"
              class="form-control h-100"
              rows="6"
              placeholder="Mesaj"
            ></textarea>
          </div>
        </div>
      </div>
      <input
        type="submit"
        name="submit"
        id="submit"
        value="Gönder"
        class="btn btn-default float-start"
      />
    </form>
  </div>
  </section>
</template>

<style >
.contact {
  height: 100vh;
}
.c2 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/* === Button === */
.btn-default {
  color: #fff;
  background-color: #0c0c0c;
  border: 0;
  border-radius: 0;
  font-size: 12px;
  font-weight: 300;
  padding: 5px 16px;
  position: relative;
}

/* === Form Control === */
.form-control {
  display: block;
  width: 100%;
  height: 50px;
  padding: 0;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.6;
  color: #555;
  background-color: #fff;
  border-bottom: solid 1px #0c0c0c;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-radius: 0;
}

.form-control:focus {
  border-color: #c7c7c7;
  outline: 0;
  box-shadow: none;
}
</style>
