<template>
    <div class="firstPage">
         <!-- <div class="top">
          <img src="../assets/img/left.png" alt="" class="jiantou">
          <span>出入申请</span>
          <img src="../assets/img/shenglue.png" alt="" class="shenglue">
        </div> -->
        <h1>填写姓名与学号</h1>
        <div class="name">
            <h2>姓名：<input type="text" v-model.trim='studentName'></h2>
        </div>
        <div class="studentId">
            <h2>学号：<input type="text" v-model.trim='studentId'></h2>
        </div>
        <div class="in-btn" @click="goToIn()"><span>我要进去</span></div>
        <div class="out-btn" @click="goToOut()"><span>我要出去</span></div>
    </div>
</template>

<script>
export default {
  name: 'firstPage',
  props: {
  },
  data() {
      return {
        studentName: '',
        studentId: '',
      }
  },
  computed: {
  },
  methods: {
      goToIn() {
        this.$router.push({name: "in", params: {studentName: this.studentName, studentId: this.studentId }})
      },
      goToOut() {
        this.$router.push({name: "out", params: {studentName: this.studentName, studentId: this.studentId }})
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.firstPage {
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // .top {
    //     position: relative;
    //     top: -10px;
    //     height: 60px;
    //     width: 400px;
    //     background: #2dbaf7;
    //     .jiantou {
    //       position: absolute;
    //       top: 28px;
    //       left: 16px;
    //       height: 20px;
    //       width: 20px;
    //     }
    //     span {
    //       color: #eee;
    //       position: absolute;
    //       top: 24px;
    //       left: 168px;
    //       font-size: 20px;
    //       font-weight: bold;
    //     }
    //     .shenglue {
    //       position: absolute;
    //       top: 26px;
    //       right: 24px;
    //       height: 24px;
    //       width: 24px;
    //     }
    // }
    .in-btn {
        width: 200px;
        height: 200px;
        background: plum;
        margin: 0 0 20px 0;
        text-align: center;
        line-height: 200px;
        span {
            display: inline-block;
            font-size: 30px;
        }
    }
    .out-btn {
        width: 200px;
        height: 200px;
        background: yellow;
        line-height: 200px;
        text-align: center;
        span {
            display: inline-block;
            font-size: 30px;
        }
    }
}
</style>
