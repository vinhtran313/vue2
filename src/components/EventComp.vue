<template>
  <div class="wrapper-section">
    <h1 class="page__main-title">Tạo sự kiện</h1>
    <div class="wrapper-content">
      <div
        v-for="section in sections"
        class="section"
        v-bind:class="'section-' + section.id"
        v-bind:key="section.id"
      >
        <img class="image" src="../../public/assets/GS.svg" alt="img" />
        <img
          class="btn--three-dots"
          type="button"
          src="../../public/assets/three-dots.svg"
          alt="details"
        />
        <h2>{{ section.title }}</h2>
        <div>
          <img src="../../public/assets/time-ic.svg" alt="time">
          <h3>{{section.time}}</h3>
          <h4>Mã: {{section.eventID}}</h4>
          <button class="btn">Xem chi tiết</button>
        </div>
        
      </div>
      <div class="section--dashed section">
        <img src="../../public/assets/add-event.svg" alt="add event" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "event-comp",
  data() {
    return {
      sections: [
        {
          id: 0,
          pictureURL: "../../public/assets/GS.svg",
          title:
            "[Sự Kiện] ra mắt sản phẩm mới Đài truyền hình 4.0 Gostudio của Gostream",
          time: "18h30p   12/12/2019",
          eventID: 12454567,
        },
        {
          id: 1,
          pictureURL: "../../public/assets/GS.svg",
          title:
            "[Sự Kiện] ra mắt sản phẩm mới Đài truyền hình 4.0 Gostudio của Gostream",
          time: "18h30p   12/12/2019",
          eventID: 12454567,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper-section {
  margin: 40px 135px 57px 0px;
  height: 100%;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 36px 32px;
}
.wrapper-content {
  display: flex;
}
.btn--three-dots {
  width: 15px;
  height: 15px;
}
</style>

