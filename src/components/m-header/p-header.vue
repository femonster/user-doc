<template>
    <div class="p-header">
        <div class="img-box"></div>
        <div class="p-desc">
            <p>张耕恺 {{title}}，您好！</p>
            <p>2018-06-26</p>
        </div>
        <div class="p-btns">
            <cube-button @click="toPerson" v-if="syshow">个人中心</cube-button>
            <cube-button @click="nextWeek" v-if="syshow">下周安排</cube-button>
            <cube-button @click="twzx" v-if="zxshow">图文咨询</cube-button>
        </div>
        
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            default:"医生"
        },
        syshow:{
            type:Boolean,
            default:true
        },
        zxshow:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        toPerson(){
            this.$router.push('/personal')
        },
        nextWeek(){
            this.$router.push('/doconfig')
        },
        twzx(){
            this.$router.push('/consult')
        }
    }
}
</script>
<style lang="stylus" scoped>
@import "~common/stylus/variable"
.p-header
    position relative
    box-sizing border-box
    width 100%
    display flex
    padding 10px
    height 110px
    background-color #eeeeee
    .img-box
        height 100%
        width 25%
        flex-grow 1
        background url('http://www.gengkai.site/assets/images/avatar.jpg') no-repeat center/contain
    .p-desc
        flex-grow 2
        color $color-text-d
        line-height 1.5
        font-size $font-size-medium
        p   
            // text-indent 1em
            padding-left 10px
            margin-top 15px
    .p-btns
        flex-grow 1
        button 
            height 40px
            line-height: 0.5
            &:last-child
                margin-top 10px
        


</style>


