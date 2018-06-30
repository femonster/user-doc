<template>
<div class="start-box">
    <p-header :zxshow="true" :syshow="false"></p-header>
    <h-header class="start-h-header" :ishow="true"></h-header>
    <div class="write-box" v-show="showbq">
        <div class="w-l">
            <label>详细病情</label>
        </div>
        <div class="w-r">
            <cube-radio-group :horizontal="true">
                <cube-radio v-for="(option,index) in options" :key="index" :option="option" v-model="smval.slelected"></cube-radio>
            </cube-radio-group>
            <cube-textarea v-model="smval.illness"></cube-textarea>
        </div>
    </div>
    <div class="write-box" v-show="showbq">
        <div class="w-l">
            <label>病情诊断</label>
        </div>
        <div class="w-r">
            <cube-textarea v-model="smval.result"></cube-textarea>
        </div>
    </div>
    <div class="write-box" v-show="showbq" style="margin-bottom:50px">
        <div class="w-l">
            <label>检查报告</label>
        </div>
        <div class="w-r">
            <cube-upload></cube-upload>
        </div>
    </div>
    <div class="write-box" v-show="showcf">
        <div class="w-l">
            <label>处方</label>
        </div>
        <div class="w-r">
            <cube-textarea v-model="smval.recipe"></cube-textarea>
        </div>
    </div>
    <div class="write-box" v-show="showcf">
        <div class="w-l">
            <label>扫描件</label>
        </div>
        <div class="w-r">
            <cube-upload></cube-upload>
        </div>
    </div>
    <div class="write-box" v-show="showyz">
        <div class="w-l">
            <label>医嘱</label>
        </div>
        <div class="w-r">
            <cube-textarea v-model="smval.advice"></cube-textarea>
        </div>
    </div>
    <div class="write-btns"  v-show="showbq">
        <cube-button @click="history">既往病历</cube-button>
        <cube-button @click="recipe">开具处方</cube-button>
        <cube-button @click="advice">开具医嘱</cube-button>
        <cube-button @click="end">结束问诊</cube-button>
    </div>
    <div class="write-btns"  v-show="showcf">
        <cube-button @click="toshow">确定</cube-button>
    </div>
     <div class="write-btns"  v-show="showyz">
        <cube-button @click="toshow">确定</cube-button>
    </div>
</div>
</template>
<script>
import PHeader from 'components/m-header/p-header'
import HHeader from 'components/m-header/h-header'
export default {
    data(){
        return {
            showcf:false,
            showbq:true,
            showyz:false,
            smval:{
                slelected:"1",
                illness:"",
                result:"",
                recipe:"",
                advice:""
            },
            options:[
                {
                    label:"初诊",
                    value:"1"
                },{
                    label:"复诊",
                    value:"2"
                }
            ]
        }
    },
    methods:{
        history(){
            this.$router.push('/list/123')
        },
        recipe(){
            this.showcf = true
            this.showbq = false
            this.showyz = false
        },
        advice(){
            this.showcf = false
            this.showbq = false
            this.showyz = true
        },
        toshow(){
            this.showcf = false
            this.showbq = true
            this.showyz = false
        },
        end(){
            this.$router.push("/doctor")
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
.write-box
    margin-top 10px
    margin-bottom 10px
    padding 10px
    box-sizing border-box
    background-color #eeeeee
    display flex
    justify-content space-around
    align-items center
    .w-l
        width 30%
    .w-r 
        width 70%
.write-btns
    background-color #ffffff
    display flex
    position fixed
    bottom 0
    left 0
    width 100%
    justify-content space-around
    button 
        width 20%
        padding 17px 4px
</style>


