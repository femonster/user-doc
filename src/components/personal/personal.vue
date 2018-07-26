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
                    <p>满意度</p>
                </div>
                <div class="ce2-3">
                    <p>3,453,345次</p>
                    <p>出诊人数</p>
                </div>
            </div>
        </div>
        <div class="person-fencai">
            <label>个人风采：</label>
            <cube-upload
            action="//jsonplaceholder.typicode.com/photos/"
            :simultaneous-uploads="1"
            @files-added="filesAdded" />
        </div>
        <div class="personal-btns">
            <router-link :to="`/mdetail`" tag="cube-button">我的财富</router-link>
            <router-link :to="`/pdetail`" tag="cube-button">资料管理</router-link>
            <router-link :to="`/address`" tag="cube-button">地址管理</router-link>
            <cube-button>意见反馈</cube-button>
        </div>
    </div>
</template>
<script>
import MHeader from 'components/m-header/m-header'
export default {
    components:{
        MHeader
    },
    methods: {
    filesAdded(files) {
      let hasIgnore = false
      const maxSize = 1 * 1024 * 1024 // 1M
      for (let k in files) {
        const file = files[k]
        if (file.size > maxSize) {
          file.ignore = true
          hasIgnore = true
        }
      }
      hasIgnore && this.$createToast({
        type: 'warn',
        time: 1000,
        txt: 'You selected >1M files'
      }).show()
    }
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
.person-fencai
    width 100%
    padding 10px
    box-sizing border-box
    background-color #eeeeee
    margin-top 10px
.personal-btns
    button 
        margin 10px 0
.cube-upload
    margin-top 10px
</style>


