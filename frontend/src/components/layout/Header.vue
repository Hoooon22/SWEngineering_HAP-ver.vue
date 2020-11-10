<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-button @click="getCalendar"> Calendar </b-button> <b-button @click="getBoard"> Board </b-button>
      <!--로고 사진 넣기 -->

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
            <b-navbar-brand href="#">HAP</b-navbar-brand>
          <b-nav-text>{{username}}님 환영합니다.</b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
      return{
      username : "User"
      };
  },
  method: {
      getCalendar(){
        this.$emit('child-event','calendar')  
      },
      getBoard(){
          this.$emit('child-event','board') 
      },
  },
  beforeCreate() { // DB로부터 사용자의 이름 가져오기
   
  }
};
</script>

<style>

</style>