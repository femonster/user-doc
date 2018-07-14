<template>
    <!--个人主页 -->
    <div class="personal-box">
    <m-header title="个人中心"></m-header>
        <div class="personal-head">
            <div class="line line-1">
                <div class="ce1-1">
                    <img src="http://www.gengkai.site/assets/images/avatar.jpg" alt="avatar" class="avatar">
                </div>
                <div class="ce1-2">
                    <p>张耕恺</p>
                    <p>18612343215</p>
                </div>
                <div class="ce1-3">
                    <button>更换手机</button>
                </div>
            </div>
            <div class="line line-2">
                <div class="ce2-1">
                    <p>5,000,000次</p>
                    <p>咨询人数</p>
                </div>
                <div class="ce2-2">
                    <p>99.1%</p>
                    <p>好评率</p>
                </div>
                <div class="ce2-3">
                    <p>3,453,345次</p>
                    <p>出诊人数</p>
                </div>
            </div>
            <div class="line line-3">
                <div class="ce3-1">
                    <p>本月收益：1212300元</p>
                </div>
                <div class="ce3-2">
                    <p>本月收益：56756756元</p>
                </div>
            </div>
            <div class="line line-4">
                <div class="ce4-1">
                    <p>可提现金额：1212300元</p>
                </div>
                <div class="ce4-2">
                    <button>我要提现</button>
                </div>
            </div>
        </div>
        <div class="personal-btns">
            <router-link :to="`/pdetail`" tag="cube-button">资料管理</router-link>
            <router-link :to="`/address`" tag="cube-button">地址管理</router-link>
            <router-link :to="`/mdetail`" tag="cube-button">收益明细</router-link>
            <cube-button>意见反馈</cube-button>
        </div>
    </div>
</template>
<script>
import MHeader from 'components/m-header/m-header'
export default {
    components:{
        MHeader
    }
}
</script>
<style lang="stylus" scoped>
.personal-head
    width 100%
    padding 10px
    box-sizing border-box
    background-color #eeeeee
    font-size 14px
    .line
        display flex
        margin 10px 0
        .avatar
            width 50px
    .line-1
        div
            margin-right 10px
        .ce1-2 p
            line-height 1.8
        .ce1-3 button
            margin-top 25px
    .line-2,.line-3,.line-4
        justify-content space-around
        p
            line-height 1.5
            text-align center
.personal-btns
    button 
        margin 10px 0
</style>


