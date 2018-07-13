<template>
    <!--医生首页 -->
    <div class="top-box">
        <p-header title="护士"></p-header>
        <div class="now-list">
            <listview :ldata="listData" cardType="2" @select="select"></listview>
        </div>
        <div class="footer">
            <cube-button :inline="true" @click="toRefund">退费信息</cube-button>
            <cube-button :inline="true" @click="toNotice">公告发布</cube-button>
        </div>
    </div>
</template>
<script>
import PHeader from 'components/m-header/p-header'
import Listview from 'base/listview/listview'
import {mock_list} from 'mock/nowlist'


export default {
    data(){
        return {
            listData:[]
        } 
    },
    created(){
        setTimeout(()=>{
            this.listData=mock_list
        },20)
    },
    methods:{
        select(item) {
            console.log(item)
        },
        toNotice(){
            this.$router.push("/notice")
        },
        toRefund(){
            this.$router.push("/refund")
        },
        toPatient(){
            this.$router.push("/patient")
        },
        totwzx(){
            this.$router.push('/consult')
        }
    },
    components:{
        PHeader,
        Listview
    }
}
</script>
<style lang="stylus" scoped>
.top-box
    width 100%
    .now-list
        width 100%
        position fixed
        top 110px
        bottom 50px
        .pthuanze
            position absolute
            right 0
            top 70%
    .footer
        width 100%
        height 50px
        position fixed 
        bottom 0
        left 0
        background #eeeeee
        display flex
        justify-content space-around
        align-items center
        button
            height 40px
</style>


