<template>
  <div class="wrapper-content container">
    <div class="section" v-if="section == true">
      <h2 class="page__main-title">{{ pageTitle }}</h2>
      <label class="input__label"
        >Nhập số điện thoại
        <span class="span--red">*</span>
        <br />
        <input
          class="input"
          type="tel"
          placeholder="Số điện thoại của bạn"
          v-model="phone"
        />
      </label>
      <br />
      <button class="btn input__button" @click="checkPhone(phone)">
        Tiếp tục
      </button>
    </div>
    <div class="section" v-else>
      <h2 class="page__main-title">{{ pageTitle }}</h2>
      <label class="input__label"
        >Nhập mã OTP
        <span class="span--red">*</span>
        <br />
        <input
          class="input"
          type="tel"
          placeholder="Nhập mã OTP của bạn"
          v-model="OTP"
        />
      </label>
      <br />
      <a-button class="a-btn" type="link"
        ><span class="a-btn__name--type-link"
          >Gửi lại mã OTP ({{ countdown }}s)</span
        >
      </a-button>
      <router-link to="/checkin">
        <button
          class="btn input__button"
          v-bind:disabled="OTP.length < 6"
          @click="loginHandler()"
        >
          Đăng nhập
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "login-comp",
  data() {
    return {
      pageTitle: "Đăng nhập",
      section: true,
      countdown: 30,
      phone: "",
      OTP: "",
    };
  },
  props: {
    login: {
      type: Boolean,
    },
  },
  methods: {
    checkPhone(number) {
      if (number.length < 10) {
        alert("định dạng không đúng");
        this.phone = "";
      } else {
        this.section = false;
      }
    },
    loginHandler() {
      this.$emit("login-event");
    },
  },
};
</script>

<style lang="scss" scoped>
.a-btn {
  width: 100%;
  text-align: center;
  margin: 6px 0px 32px;
}
.a-btn__name--type-link {
  text-decoration: underline;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: #48af74;
}
.wrapper-content {
  display: flex;
  height: 100%;
  justify-content: center;
}
.section {
  height: fit-content;
  width: 440px;
  padding: 0px 45px 35px 45px;
  border-radius: 24px;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.1);
  margin-top: 120px;
}
.page__main-title {
  font-size: 32px;
  font-weight: 700;
  line-height: 2.3rem;
  text-align: center;
  letter-spacing: 1px;
  margin: 56px auto 48px auto;
}
.input__label {
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5rem;
  text-align: left;
  margin: auto;
}
.input {
  width: 100%;
  border-radius: 16px;
  border: 1px solid #dbdbdf;
  margin: 16px 0px 0px;
  padding: 12px 16px;
}
.span--red {
  color: red;
}
.btn {
  background: linear-gradient(113deg, #9ee969 7.47%, #1ea85d 97.02%);
  color: white;
  width: 100%;
  border-radius: 16px;
  border: none;
  box-sizing: border-box;
  padding: 12px 0px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5rem;
  text-transform: uppercase;
}
</style>

