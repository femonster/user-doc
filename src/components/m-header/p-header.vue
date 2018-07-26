<template>
<div class="p-header-box">
    <div class="top-horiz"  v-if="syshow">
        <router-link :to="`/notice`">公告</router-link>
        <router-link :to="`/refund`">信息</router-link>
    </div>
    <div class="p-header">
        <div class="img-box-wrap">
            <div class="img-box"></div>
            <cube-button  @click="toPerson" :inline="true" class="person-btn" v-if="syshow">个人中心</cube-button>   
        </div>
        <div class="p-desc">
            <p>张耕恺 {{title}}，您好！</p>
            <p>2018-06-26</p>
            
        </div>
        <div class="p-btns">
            <!-- <cube-button @click="toPerson" v-if="syshow">个人中心</cube-button> -->
            <cube-button @click="nextWeek" v-if="syshow">下周安排</cube-button>
            <br>
            <cube-switch v-model="isopen" v-if="syshow"><span style="font-size:12px;">{{isopen?"已开启预约":"已关闭预约"}}</span></cube-switch>
            <cube-button @click="twzx" v-if="zxshow">图文咨询</cube-button>
        </div>
    </div>
</div>

</template>
<script>
export default {
    data(){
        return {
            isopen:true
        }
    },
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
            if(this.title=="医生"){
                this.$router.push('/doconfig?id=2')
            }else{
                this.$router.push('/nuconfig')
            }
            
        },
        toPerson(){
            this.$router.push('/personal')
        },
        twzx(){
            this.$router.push('/consult')
        }
    }
}
</script>
<style lang="stylus" scoped>
@import "~common/stylus/variable"
.p-header-box
    background-color #eeeeee
    .top-horiz
        width 100%
        height 20px
        box-sizing border-box
        display flex
        justify-content space-between
        padding 5px 10px 0
    .p-header
        position relative
        box-sizing border-box
        width 100%
        display flex
        padding 10px
        height 110px
        background-color #eeeeee
        .img-box-wrap
            height 100%
            width 25%
            flex-grow 1
            position relative
            text-align center
            .img-box
                width 65%
                height 65%
                display inline-block
                background url('http://www.gengkai.site/assets/images/avatar.jpg') no-repeat center/contain
                .person-btn
                    position absolute
                    bottom 0
                    left 0
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


