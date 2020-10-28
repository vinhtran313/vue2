<template>
  <div class="sidebar">
    <div class="border--gradient" v-bind:class="{active: isActive}" @click="isActive=true">
      <a-button class="btn a-btn">
        <router-link to="/checkin"></router-link>
        <img
          class="icon"
          src="../../public/assets/checkin-ic.svg"
          alt="checkin"
        />
        Check in sự kiện
      </a-button>
    </div>
    <div class="border--gradient" v-bind:class="{active: isActive}" @click="isActive=true">
      <a-button class="btn a-btn">
        <img
          class="icon"
          src="../../public/assets/callendar-ic.svg"
          alt="checkin"
        />
        Tạo sự kiện của bạn
      </a-button>
    </div>
    <div class="border--gradient" v-bind:class="{active: isActive}" @click="isActive=true">
      <a-button class="btn a-btn">
        <img
          class="icon"
          src="../../public/assets/history-ic.svg"
          alt="checkin"
        />
        Thống kê - Lịch sử
      </a-button>
    </div>
    <div class="border--gradient" v-bind:class="{active: isActive}" @click="isActive=true">
      <a-button class="btn a-btn">
        <img
          class="icon"
          src="../../public/assets/profile-ic.svg"
          alt="checkin"
        />
        Thông tin cá nhân
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data () {
    return {
      isActive: false
    }
  }
};
</script>

<style lang="scss" scoped>
.border--gradient {
  margin: 40px 35px 15px 0px;
}
.active {
  background: linear-gradient(to left, #9ee969 7.47%, #1ea85d 97.02%);
}
.btn {
  background: #fff;
  color: #212128;
}
.a-btn {
  width: 270px;
  height: 56px;
  text-align: left;
  display: flex;
  align-items: center;
  padding: 0px 24px;
}
.icon {
  height: 24px;
  width: 24px;
  margin-right: 15px;
}
</style>

