<template>
<div class="start-box">
    <p-header :syshow="false" :title="who"></p-header>
    <h-header class="start-h-header"></h-header>
    <div class="start-input" v-show="!ishl">
        <cube-input placeholder="请输入就诊码" v-model="jzm"></cube-input>
        <br>
        <cube-button @click="startLook">开始问诊</cube-button>
    </div>
    <div class="hling" v-show="ishl">
        <p>正在护理中...</p>
        <cube-button :inline="true" @click="endLook">点击结束</cube-button>
    </div>
</div>
</template>
<script>
import PHeader from 'components/m-header/p-header'
import HHeader from 'components/m-header/h-header'
export default {
    data(){
        return {
            jzm:"",
            who:"医生",
            ishl:false
        }
    },
    created(){
        if(this.$route.query.t==2){
              this.who = "护士";  
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
            if(this.$route.query.t==2){
                this.ishl = true;
            }else{
                this.$router.push('/write')
            }
            
        },
        endLook(){
            this.$router.push("/nurse")
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
.hling
    padding 10px
    box-sizing border-box
    text-align center
    p 
        padding-bottom 20px
</style>


