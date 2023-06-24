<template>
    <dv-border-box-8 class="c3r2">
        <div class="title">
            <h3>
                <h5>
                    <span class="word">告警信息</span>
                </h5>

            </h3>
        </div>
    </dv-border-box-8>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style scoped>
.c3r2 {
    width: 21%;
    height: 31%;
    order: 7;
    background-color: rgba(0, 125, 214, 0.2);
}

h3 {
    margin: 0;
    display: flex;
    justify-content: center;

    background-image: url('../../assets/img/background/ind-bg1.png');
    /* background-size: 30%; */
    background-position: top center;
    background-repeat: no-repeat;
    /* background-color: bisque; */
}

h5 {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
}

.word {
    margin: 0;
    padding: 0;
    background-image: url('../../assets/img/background/tit-bg3.png');
    background-size: cover;
    color: #00c3f3;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
}

h3::before {
    content: '';
    width: 30px;
    height: 30px;
    background: url('../../assets/img/background/tit-bg1.png');
    background-size: cover;

}

h3::after {
    content: '';
    width: 30px;
    height: 30px;
    background: url('../../assets/img/background/tit-bg2.png');
    background-size: cover;
}
</style>
