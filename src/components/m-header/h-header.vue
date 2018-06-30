<template>
    <!-- 患者头部 -->
        <div class="h-header">
            <div class="h-l">
                <p>患者姓名：李四</p>
                <p>患者年龄：25</p>
                <p>患者性别：男</p>
                <p>身份证号：142322***********2</p>
                <div class="is-show" v-show="ishow">
                    <p>就诊日期：2018-05-19</p>
                    <p>病历号码：0001</p>
                    <p>既往病史：<span>头疼，胸闷，耳鸣</span></p>
                </div>
            </div>
            <div class="h-r">
                <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M0000020PeOh4ZaCw1.jpg?max_age=2592000" alt="">
            </div>
        </div>
    
</template>
<script>
export default {
    props:{
        ishow:Boolean,
        default:false
    }
}
</script>
<style lang="stylus" scoped>
    .h-header
        width 100%
        box-sizing border-box
        padding 10px
        background-color #eeeeee
        display flex
        justify-content space-around
        min-height 180px
        p
            line-height 1.5
        img 
            width 100px
</style>


