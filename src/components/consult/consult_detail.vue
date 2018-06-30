<template>
    <div class="talk-div">
        <div class="talk-patient">
            <h4>患者信息</h4>
            <ul>
                <li>姓名：张三</li>
                <li>性别：男</li>
                <li>年龄：29</li>
                <li>既往病史：做过阑尾炎手术</li>
            </ul>
        </div>
        <div class="talk-contain">
            <talk :topnum="200" :isnow="false"></talk>
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


