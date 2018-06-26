<template>
    <!--医生首页 -->
    <div class="top-box">
        <p-header></p-header>
        <div class="now-list">
            <listview :ldata="listData"></listview>
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
            listData:mock_list
        } 
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
        bottom 0
</style>


