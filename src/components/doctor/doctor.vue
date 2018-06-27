<template>
    <!--医生首页 -->
    <div class="top-box">
        <p-header></p-header>
        <div class="now-list">
            <listview :ldata="listData"></listview>
        </div>
        <div class="footer">
            <cube-button :inline="true">家庭患者管理</cube-button>
            <cube-button :inline="true">图文咨询</cube-button>
            <cube-button :inline="true">退费信息</cube-button>
            <cube-button :inline="true">公告发布</cube-button>
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
        selectItem(item) {
            console.log(item.name)
        },
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


