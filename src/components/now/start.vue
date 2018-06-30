<template>
<div class="start-box">
    <p-header :syshow="false"></p-header>
    <h-header class="start-h-header"></h-header>
    <div class="start-input">
        <cube-input placeholder="请输入就诊码" v-model="jzm"></cube-input>
        <br>
        <cube-button @click="startLook">开始问诊</cube-button>
    </div>
</div>
</template>
<script>
import PHeader from 'components/m-header/p-header'
import HHeader from 'components/m-header/h-header'
export default {
    data(){
        return {
            jzm:""
        }
    },
    methods:{
        startLook(){
            if(!this.jzm){
                this.$createToast({
                    type:"warn",
                    time:1500,
                    txt:"请填写患者就诊码"
                }).show()
                return 
            }
            this.$router.push('/write')
        }
    },
    components:{
        PHeader,
        HHeader
    }
}
</script>
<style lang="stylus" scoped>
.start-h-header
    margin-top 10px
    margin-bottom 10px
.start-input
    padding 10px
    box-sizing border-box
</style>


