<template>
  <div class="wrapper-section">
    <h1 class="page__main-title">Check in sự kiện</h1>
    <div class="wrapper-content">
      <div class="section">
        <img src="../../public/assets/qr-code-ic.svg" alt="scan-qr-code" />
        <span class="section__title">Scan mã QR code</span>
      </div>
      <div class="section" @click="visible = true">
        <img src="../../public/assets/input-code-ic.svg" alt="input-code" />
        <span class="section__title">Scan mã QR code</span>
      </div>
    </div>
    <transition name="modal-overlay">
      <div class="modal-overlay" v-if="visible"></div>
    </transition>
    <transition name="popup-modal">
      <div class="popup-modal" v-if="visible">
        <div class="popup-modal__section">
          <button class="btn--escape" @click="visible = false">
            <img src="../../public/assets/escape-ic.svg" alt="esc" />
          </button>
          <div class="popup-modal__content">
            <h2 class="modal__title">Mã sự kiện</h2>
            <input class="input" type="text" placeholder="Mời nhập mã" />
            <br />
            <div class="group-btn">
              <button class="btn btn--cancel" type="button">Huỷ</button>
              <button class="btn btn--confirm" type="button">Hoàn tất</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "checkin",
  data() {
    return {
      modalTitle: "Mã sự kiện",
      visible: false,
      loading: false,
    };
  },
  methods: {
    handleOk() {
      this.loading = true;
      setTimeout(() => {
        this.visible = false;
        this.loading = false;
      }, 2000);
    },
    handleCancel() {
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper-section {
  margin: 40px 135px 57px 0px;
  width: 100%;
}
.wrapper-content {
  display: flex;
  width: 100%;
  padding: 0px 80px 70px 80px;
}
.section {
  background: linear-gradient(113deg, #9ee969 7.47%, #1ea85d 97.02%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 15px 15px 15px;
  flex-grow: 1;
  padding-top: 16px;
  padding-bottom: 16px;
  cursor: pointer;
}
.section__title {
  color: #fff;
  margin-top: 17px;
}
.page__main-title {
  margin: 36px 0px 74px 48px;
}
.modal-overlay {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 100;
  background: rgba($color: #212128, $alpha: 0.5);
}
.popup-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 480px;
  height: fit-content;
  background: #fff;
  z-index: 1000;
  border-radius: 16px;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.1);
}
.popup-modal__section {
  position: relative;
  width: 100%;
}
.popup-modal__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 50px;
}
.btn--escape {
  width: 40px;
  height: 40px;
  position: absolute;
  top: -15px;
  right: -15px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(113deg, #9ee969 7.47%, #1ea85d 97.02%);
}
.modal__title {
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 1px;
  color: #212128;
  margin-bottom: 40px;
}
.group-btn {
  display: flex;
  width: 100%;
}
.btn {
  flex-grow: 1;
  width: 50%;
  height: 48px;
  text-transform: uppercase;
}
.btn--cancel {
  background: #afb0b7;
  margin-right: 15px;
}
.input {
  height: 48px;
}
</style>