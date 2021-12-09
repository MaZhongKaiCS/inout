<template>
  <div class="inBox">
    <div class="top">
      <img src="../assets/img/left.png" alt="" class="jiantou" @click="goTofistPage">
      <span>出校申报详情</span>
      <img src="../assets/img/shenglue.png" alt="" class="shenglue">
    </div>
    <div class="infoBox">
      <div class="title" style="text-align: center">
        出校凭证
      </div>
      <div class="content">
        <p style="text-indent: 2em">
          <span
            id="studentName"
            style="text-decoration: none; font-weight: bold"
            >
              {{ studentName }}（{{ studentId }}） </span>
              <span>同学可于</span> 
          <span style="font-weight: bold"> {{ todayYMD }} </span>出校。
        </p>
        <div class="backTime"><span>注：必须在<span style="font-weight: bold">{{todayYMD}} {{backTime}}</span>前返校</span></div>
        <div id="remainingTime" class="timeBox loseTime"><span>该凭证<span style="font-weight: bold">{{ fiveMinutes }}</span>后将失效，请尽快出校</span></div>
      </div>
      <div style="overflow: hidden">
        <div
          id="typeBox"
          :style="typeBoxStyle"
        >
          出
        </div>
        <div id="timeBox" class="timeBox" style="font-weight: bold">{{ todayYMD }} {{ nowHMS }}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'out',
  components: {
  },
  data() {
    return {
      studentName: '',
      studentId: 0,
      // todayYMD: '',
      nowHMS: '',
      fiveMinutes: '',
      backTime: 0,
      todayColor: [
        'kf-black', // 1
        'kf-blueviolet', // 2
        'kf-green', // 3
        'kf-cyan', // 4
        'kf-blue', // 5
        'kf-purple', // 6
        'kf-greenyellow' // 7
      ],
      fiveMinutesInterval: null
    }
  },
  created() {
    this.studentName = this.$route.params.studentName
    this.studentId = this.$route.params.studentId
    this.fiveMinsInterval()
  },
  computed: {
    todayYMD() {
      let now = new Date().getTime()
      let date = new Date(now).format('yyyy-MM-dd')
      return date
    },
    typeBoxStyle() {
      let day = new Date().getDay()
      let style = `animation: 0.6s ease 0s infinite normal none running ${this.todayColor[day-1]}`
      return style 
    }
  },
  watch: {
  },
  methods: {
    formatDuring(mss) {
      var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      hours = hours < 10 ? '0' + hours : hours
      var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60))
      minutes = minutes < 10 ? '0' + minutes : minutes
      var seconds = (mss % (1000 * 60)) / 1000
      seconds = seconds < 10 ? '0' + seconds : seconds
      return hours + ':' + minutes + ':' + seconds
    },
    fiveMinsInterval() {
      let now = new Date().getTime()
      let back = new Date().getTime() + 4 * 60 * 60 * 1000
      let five = 5 * 60 * 1000 
      this.fiveMinutesInterval = setInterval(() => {
        back = back + 1000
        this.backTime = new Date(back).format('hh:mm:ss')
        five = five - 1000
        this.fiveMinutes = this.formatDuring(five)
        now = now + 1000
        this.nowHMS = new Date(now).format('hh:mm:ss')
      }, 1000);
      if (five === 0) {
        five = 5 * 60 * 1000
      }
    },
    goTofistPage() {
      this.$router.push({name: 'firstPage'})
    }
  },
  beforeDestroy() {
    clearInterval(this.fiveMinutesInterval)
  }
}
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}
</script>

<style lang="scss">
.inBox {
  .top {
    position: relative;
    left:-30px;
    top: -10px;
    height: 60px;
    width: 400px;
    background: #2dbaf7;
    .jiantou {
      position: absolute;
      top: 28px;
      left: 34px;
      height: 20px;
      width: 20px;
    }
    span {
      color: #eee;
      position: absolute;
      top: 24px;
      left: 150px;
      font-size: 20px;
      font-weight: bold;
    }
    .shenglue {
      position: absolute;
      top: 26px;
      right: 12px;
      height: 24px;
      width: 24px;
    }
  }
  .infoBox {
    padding: 0 5px;
    line-height: 30px;
    font-size: 16px;
    color: #333;
    .title {
      font-weight: bold;
      font-size: 20px;
      margin: 20px 0;
    }
    .content{
      p {
        color: #333;
        line-height: 25px;
        margin: 0;
        font-size: 16px;
      }
      .timeBox {
        text-align: center;
        font-size: 26px;
        color: red;
        margin-top: 15px;
        padding: 0 10px;
        margin: 40px auto 0 auto;
        width: 100%;
        height: 35px;
        border-radius: 5px;
      }
      .loseTime {
        font-size: 16px;
      }
      #remainingTime {
        text-align: center;
        color: red;
      }
    }
  }
}
.timeBox {
  text-align: center;
  font-size: 26px;
  color: red;
  margin-top: 15px;
  padding: 0 10px;
  margin: 40px auto 0 auto;
  width: 100%;
  height: 35px;
  border-radius: 5px;
}
#typeBox {
  font-size: 100px;
  font-weight: bold;
  color: #000;
  width: 160px;
  line-height: normal;
  text-align: center;
  display: block;
  margin: 50px auto 0px auto;
}
@keyframes kf-black {
        from {
          color: black;
        }

        to {
          color: #eee;
        }
      }

      @keyframes kf-greenyellow {
        from {
          color: greenyellow;
        }

        to {
          color: #eee;
        }
      }

      @keyframes kf-blueviolet {
        from {
          color: blueviolet;
        }

        to {
          color: #eee;
        }
      }

      @keyframes kf-green {
        from {
          color: green;
        }

        to {
          color: #eee;
        }
      }

      @keyframes kf-cyan {
        from {
          color: cyan;
        }

        to {
          color: #eee;
        }
      }

      @keyframes kf-blue {
        from {
          color: blue;
        }

        to {
          color: #eee;
        }
      }

      @keyframes kf-purple {
        from {
          color: purple;
        }

        to {
          color: #eee;
        }
      }
</style>
