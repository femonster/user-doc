<template>
        <!--公告列表  -->
    <div class="notice-box">
        <m-header title="我的财富"></m-header>
        <div class="money-detail">
            <p>本月收益：1212300元</p>
            <p>本月收益：56756756元</p>
            <p>可提现金额：1212300元  <button>我要提现</button></p>
        </div>
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
.money-detail
    padding 10px
    box-sizing border-box
    background-color #eeeeee
    font-size 14px
    width 100%
    height 170px
    line-height 2
.n-list 
    width 100%
    position fixed
    top 170px
    bottom 0
    .add-nbtn
        position absolute
        right 10px
        top 50%
</style>


