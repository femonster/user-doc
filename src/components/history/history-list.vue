<template>
    <!-- 病历详情 -->
    <div class="p-detail">
        <m-header title="患者病历"></m-header>
        <div class="h-header-box">
            <h-header></h-header>
        </div>
        <div class="histroy-list-scroll">
            <listview :ldata="listData" cardType="4" @select="select"></listview>x
        </div>
    </div>
</template>
<script>
import MHeader from 'components/m-header/m-header'
import HHeader from 'components/m-header/h-header'
import Listview from 'base/listview/listview'
import { mock_history } from 'mock/mock_history'

export default {
    data(){
        return {
            listData:[]
        }
    },
    created(){
        setTimeout(()=>{
            this.listData = mock_history
        },20)
    },
    methods:{
        select(item){
            this.$router.push("/history")
            console.log(item)
        }
    },
    components:{
        MHeader,
        HHeader,
        Listview
    }
}
</script>
<style lang="stylus" scoped>
.h-header-box
    margin-top 5px 
    position relative
.histroy-list-scroll
    position fixed
    top 180px
    bottom 0
    width 100%
</style>


