<template>
        <!--公告列表  -->
    <div class="notice-box">
        <m-header title="历史咨询"></m-header>
        <div class="n-list">
            <listview :ldata="listData" cardType="6" @select="select"></listview>
        </div>
    </div>
    
</template>
<script>
import MHeader from 'components/m-header/m-header'
import Listview from 'base/listview/listview'
import {mock_consult} from 'mock/mock_consult'
export default {
    data(){
        return {
            listData:[]
        }
    },
    created(){
        setTimeout(()=>{
            this.listData = mock_consult
        },20)
    },
    methods:{
        select(item) {
            this.$router.push('/condetail')
        }
    },
    components:{
        MHeader,
        Listview
    }
}
</script>
<style lang="stylus" scoped>
.n-list 
    width 100%
    position fixed
    top 55px
    bottom 0
</style>


