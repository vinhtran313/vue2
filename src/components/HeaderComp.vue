<template>
  <div class="wrapper-navbar">
    <nav v-if="isAuthenticated" class="container-fluid navbar navbar-expand-lg">
      <div class="logo">
        <router-link to="/" tag="a" class="navbar-brand">
          <img src="../../public/assets/logo.png" alt="logo" />
        </router-link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link to="/" tag="li" class="nav-link">
            {{ navbarItem[0].title }}</router-link
          >
          <router-link to="/" tag="li" class="nav-link">
            {{ navbarItem[1].title }}</router-link
          >
          <router-link to="/" tag="li" class="nav-link">
            {{ navbarItem[2].title }}</router-link
          >
        </ul>
        <div class="float-right">
          <router-link to="/login" tag="button" class="btn"
            >Đăng nhập</router-link
          >
          <div class="dropdown">
            <a
              class="dropdown-toggle"
              role="button"
              href="#"
              data-toggle="dropdown"
            >
              <img
                class="image image--rounded"
                src="../../public/assets/VI.png"
                alt="language"
              />
            </a>
            <div class="dropdown-menu">
              <a href="#" class="dropdown-item">
                <img
                  class="image image--rounded image__dropdown"
                  src="../../public/assets/VI.png"
                  alt="language"
                />EN
              </a>
              <a href="#" class="dropdown-item">
                <img
                  class="image image--rounded image__dropdown"
                  src="../../public/assets/VI.png"
                  alt="language"
                />EN
              </a>
              <a href="#" class="dropdown-item">
                <img
                  class="image image--rounded image__dropdown"
                  src="../../public/assets/VI.png"
                  alt="language"
                />EN
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nav v-else class="container-fluid navbar navbar-expand-lg">
      <div class="logo">
        <router-link to="/" tag="a" class="navbar-brand">
          <img src="../../public/assets/logo.png" alt="logo" />
        </router-link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="float-right ml-auto">
          <div class="dropdown dropdown--big">
            <a
              href="#"
              role="button"
              class="dropdown-toggle"
              data-toggle="dropdown"
            >
              <img src="../../public/assets/profile.png" alt="" />
            </a>
            <div class="dropdown-menu">
              <router-link to="/checkin">
                <a class="dropdown-item">Check in sự kiện</a>
              </router-link>
              <router-link to="/event"> 
                <a class="dropdown-item">Tạo sự kiện của bạn</a>
              </router-link>
              <router-link to="/history">
                <a class="dropdown-item">Thống kê - lịch sử</a>
              </router-link>
              <router-link to="/profile">
                <a class="dropdown-item">Thông tin cá nhân</a>
              </router-link>
              <router-link to="/logout">
                <a class="dropdown-item">Đăng xuất</a>
              </router-link>
            </div>
          </div>
          <div class="dropdown">
            <a
              class="dropdown-toggle"
              role="button"
              href="#"
              data-toggle="dropdown"
            >
              <img
                class="image image--rounded"
                src="../../public/assets/VI.png"
                alt="language"
              />
            </a>
            <div class="dropdown-menu">
              <a href="#" class="dropdown-item">
                <img
                  class="image image--rounded image__dropdown"
                  src="../../public/assets/VI.png"
                  alt="language"
                />EN
              </a>
              <a href="#" class="dropdown-item">
                <img
                  class="image image--rounded image__dropdown"
                  src="../../public/assets/VI.png"
                  alt="language"
                />EN
              </a>
              <a href="#" class="dropdown-item">
                <img
                  class="image image--rounded image__dropdown"
                  src="../../public/assets/VI.png"
                  alt="language"
                />EN
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "header-comp",
  data() {
    return {
      isAuthenticated: false,
      navbarItem: [
        { id: "home", title: "Trang chủ" },
        { id: "guide", title: "Hướng dẫn" },
        { id: "contact", title: "Liên hệ" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper-navbar {
  width: 100%;
}
.dropdown--big {
  padding: 10px;
  background: #eee;
  size: 40px 40px;
  border-radius: 50%;
}
.container-fluid {
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0px 135px;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.1);
}
.logo {
  margin-right: 300px;
}
.image--rounded {
  border-radius: 50%;
  margin-left: 20px;
}
.image__dropdown {
  margin-right: 10px;
}
.dropdown-menu {
  padding: 0px;
  border-radius: 8px;
}
.dropdown-item {
  &:hover {
    background: linear-gradient(
      113deg,
      rgba(158, 233, 105, 0.5) 7.47%,
      rgba(30, 168, 93, 0.5) 97.02%
    );
  }
}

.btn {
  background: linear-gradient(113deg, #9ee969 7.47%, #1ea85d 97.02%);
  color: white;
  border-radius: 16px;
  border: none;
  box-sizing: border-box;
  padding: 12px 37px;
  font-size: 16px;
}

.dropdown-toggle {
  &::after {
    display: none;
  }
  &::before {
    display: none;
  }
}
.nav-link {
  font-size: 16px;
  margin-right: 60px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 1px;
  cursor: pointer;
}
.float-right {
  display: flex;
  align-items: center;
}
</style>>
