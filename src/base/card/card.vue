<template>
    <!--卡片组件 -->
    <div class="todo-card">
        <template v-if="cardType==1">
            <div class="todo-l">
                <p>时间：{{cardData.time}}</p>
                <p>姓名：{{cardData.uname}}</p>
                <p>状态：{{cardData.status==0?"未开始":(cardData.status==1?"正在候诊":(cardData.status==2?"正在诊断":"已完成"))}}</p>
                <cube-button :inline="true" @click="wenzhen">问诊</cube-button>
            </div>
            <div class="todo-r">
                <div class="todo-bg" :style="`background-image:url(${cardData.avatar})`"></div>
            </div>
            <div class="todo-status">{{cardData.method==1?"门诊":"上门"}}</div>
        </template>
        <template v-else-if="cardType==2">

        </template>
        <template v-else-if="cardType==3">
            <div class="todo-l">
                <p>{{cardData.time}}</p>
                <p>{{cardData.notice}}</p>
            </div>
            <div class="todo-r">
                <div class="todo-bg" :style="`background-image:url(${cardData.avatar})`"></div>
            </div>
        </template>
        <template v-else-if="cardType==4">
            <div class="todo-l">
                <p>{{cardData.time}}</p>
                <p>{{cardData.history}}</p>
                <p>病历号：{{cardData.hid}}</p>
            </div>
            <div class="todo-r">
                <div class="todo-bg" :style="`background-image:url(${cardData.avatar})`"></div>
            </div>
        </template>
        <template v-else-if="cardType==5">

        </template>
        <template v-else-if="cardType==6">
             <div class="todo-l">
                 <p>姓名：{{cardData.iname}}</p>
                <p>咨询时间：{{cardData.time}}</p>
            </div>
            <div class="todo-r">
                <div class="todo-bg" :style="`background-image:url(${cardData.avatar})`"></div>
            </div>
        </template>
        <template v-else-if="cardType==7">

        </template>
    </div>
</template>
<script>
// cardType 1 医生首页列表 2 护士首页列表 3 公告列表 4 病历列表 5 收益列表 6 咨询列表 7 退费列表
export default {
    props:{
        cardType:{
            type:[String, Number],
            default:1
        },
        cardData:{
            type:Object,
            default:function(){
                return {}
            }
        }
    },
    methods:{
            wenzhen(){
                this.$router.push("/start")
            }
        }
}
</script>
<style lang="stylus" scoped>
.todo-card
    width calc(100% - 100px)
    box-sizing border-box
    border 1px solid #333333
    position relative
    display flex
    padding 10px 15px
    justify-content space-around
    .todo-l
        font-size 14px
        line-height 1.5
    .todo-r
        .todo-bg 
            width 90px
            height 90px
            background-position center
            background-size cover
            background-repeat no-repeat
    .todo-status
        width 30px
        height 30px
        font-size: 12px
        border-radius 50%
        line-height 30px
        position absolute
        top 45px
        left -15px
        text-align center
        background-color green 
        color #ffffff
</style>


