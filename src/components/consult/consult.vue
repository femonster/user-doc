<template>
    <div class="talk-div">
        <div class="talk-header">
            <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000003ArN8Z0WpjTz.jpg?max_age=2592000" alt="patient">
            <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000003CoxJh1zFPpx.jpg?max_age=2592000" alt="patient" class="current">
            <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000004AlfUb0cVkN1.jpg?max_age=2592000" alt="patient">
            <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000003DBAjk2MMfhR.jpg?max_age=2592000" alt="patient">
            <router-link :to="`/conlist`" class="his-link">查看历史咨询</router-link>
        </div>
        <div class="talk-patient">
            <h4>患者信息</h4>
            <ul>
                <li>姓名：张三</li>
                <li>性别：男</li>
                <li>年龄：29</li>
                <li>既往病史：做过阑尾炎手术</li>
            </ul>
            <router-link :to="`/list/123`" class="p-his-link">查看患者病历</router-link>
        </div>
        <div class="talk-contain">
            <talk :topnum="257"></talk>
        </div>
    </div>
</template>
<script>
import Talk from 'base/talk/talk'
export default {
    components:{
        Talk
    }
}
</script>
<style lang="stylus" scoped>
.talk-div
    width 100%
    padding 10px
    box-sizing border-box
    .talk-header
        width 100%
        background-color #ffffff
        position relative
        display flex
        height 95px
        box-sizing border-box
        align-items flex-end
        border-bottom 1px solid #000000
        .his-link
            position absolute
            top 0 
            right 0
        img 
            width 50px
            margin-right 10px
            height 50px
            margin-bottom 10px
        .current
            width 65px
            height 65px
    .talk-patient
        width 100%
        position relative
        box-sizing border-box
        border-bottom 1px solid #000000
        line-height 1.8
        .p-his-link
            position absolute
            bottom 0
            right 0
</style>


