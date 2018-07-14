<template>
        <!--公告列表  -->
    <div class="notice-box">
        <m-header title="收益信息"></m-header>
        <div class="n-list">
            <listview :ldata="listData" cardType="3" @select="select"></listview>
        </div>
    </div>
    
</template>
<script>
import MHeader from 'components/m-header/m-header'
import Listview from 'base/listview/listview'
import {mock_money} from 'mock/mock_money'
export default {
    data(){
        return {
            listData:[]
        }
    },
    created(){
        setTimeout(()=>{
            this.listData = mock_money
        },20)
    },
    methods:{
        select(item) {
            this.$createDialog({
                type: 'alert',
                title: `${item.time}`,
                content: `${item.notice}`
            }).show()
        },
        addNotice(){
            this.$router.push('/add_notice')
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
    .add-nbtn
        position absolute
        right 10px
        top 50%
</style>


