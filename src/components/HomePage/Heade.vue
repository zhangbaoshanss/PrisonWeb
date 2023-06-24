<template>
    <div class="header">
        <div class="h-col1">
            <a href="" class="link">
                首页
            </a>
        </div>

        <div class="h-col2">
            <span class="project-name">数字化大屏</span>
            <dv-decoration-5 style="width:23vw;height:2vh;" class="decoration" :color="['#00c1f3', '#f0bc85']" />
        </div>

        <div class="h-col3">
            <div>
                <!-- <img src="../../assets/img/weather/1.png" alt="" class="img-weather"> -->
            </div>

            <a href="" class="col3-a">
                重庆
            </a>
            <em>|</em>
            <div>
                {{ currentTime }}
            </div>
            <em>|</em>
            <div class="user">
                <a href="" class="col3-a">
                    <i class="col3-a-i"></i>
                    管理员
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentTime: null,  // 当前时间变量
            getCurrentTimer: null   // 获取当前时间的定时器
        }
    },
    created() {
        this.getCurrentTime(),
            this.getCityWeather()
    },
    methods: {
        getCurrentTime() {
            this.getCurrentTimer =
                setInterval(() => {
                    this.currentTime =
                        new Date().getFullYear() +
                        "年" +
                        (new Date().getMonth() + 1 > 9
                            ? new Date().getMonth() + 1
                            : "0" + (new Date().getMonth() + 1)) +
                        "月" +
                        (new Date().getDate() > 9
                            ? new Date().getDate()
                            : "0" + new Date().getDate()) +
                        "日 " +
                        (new Date().getHours() > 9
                            ? new Date().getHours()
                            : "0" + new Date().getHours()) +
                        ":" +
                        (new Date().getMinutes() > 9
                            ? new Date().getMinutes()
                            : "0" + new Date().getMinutes()) +
                        ":" +
                        (new Date().getSeconds() > 9
                            ? new Date().getSeconds()
                            : "0" + new Date().getSeconds())
                }, 1000)
        },
        getCityWeather() {
            let xhr = new XMLHttpRequest()
            xhr.open('get', 'https://j.i8tq.com/weather2020/search/city.js')
            xhr.send()
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300) {
                    console.log('xhr.response')
                }
            }
        }
    },
    beforeDestroy() {
        if (this.getCurrentTimer) {
            clearInterval(this.getCurrentTimer)
        }
    }

}
</script>
<style scoped>
.header {
    height: 8%;
    width: 100%;
    background: url('../../assets/img/background/header-bg1.png');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    order: 1;
    text-align: center;
    display: flex;
    justify-content: space-around;
}




.h-col1 {
    width: 33.3%;
    display: flex;
    align-items: center;
    justify-content: start;
    /* background-color: antiquewhite; */
}

.link {
    width: 10%;
    height: 50%;
    margin-left: 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: #ffcd06;
    text-decoration: none;
    background-image: url(../../assets/img/background/nav-bg2.png);
    background-size: cover;
    background-repeat: no-repeat;
}

.h-col2 {
    width: 33.3%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 24px;
    color: rgba(164, 235, 255, 1);
}

.project-name {
    height: 90%;
    line-height: 7vh;
    display: flex;
    justify-content: center;
}

/* 标题装饰栏 */
.decoration {
    position: absolute;
    left: 50%;
    top: 5vh;
    transform: translateX(-50%);
}

.h-col3 {
    width: 33.3%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1vw;
    color: #00e4ff;
}

.col3-a {
    text-decoration: none;
    color: #00e4ff;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.col3-a-i {
    width: 26px;
    height: 26px;
    margin: 2px 9px 0 0;
    background-image: url('../../assets/img/icon/icon-admin.png');
    background-size: cover;
}

.user-icon {
    background-color: black;
}

.img-weather {
    width: 50px;
}
</style>