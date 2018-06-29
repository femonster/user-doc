<template>
    <!-- 病历详情 -->
    <div class="p-detail">
        <m-header :title="mt"></m-header>
        <h-header :ishow="true"></h-header>
        <div class="his-box">
            <div class="flex-box his-desc-btn" v-show="iscf || isyz">
                <div class="f-l">
                    <span>临床诊断：</span>
                </div>
                <div class="f-r">
                    <cube-button @click="showHis">病历号0001</cube-button>
                </div>
            </div>
            <div class="flex-box his-desc" v-show="!iscf && !isyz">
                <div class="f-l">
                    <span>详细病情：</span>
                </div>
                <div class="f-r">
                    <p>头疼，胸闷，呕吐。</p>
                </div>
            </div>
             <div class="flex-box his-desc" v-show="!iscf && !isyz">
                <div class="f-l">
                    <span>病情诊断：</span>
                </div>
                <div class="f-r">
                    <p>中暑。</p>
                </div>
            </div>
            <div class="flex-box his-desc" v-show="!iscf && !isyz">
                <div class="f-l">
                    <span>检查报告：</span>
                </div>
                <div class="f-r">
                    <p>无</p>
                </div>
            </div>
            <div class="flex-box recipe-btn" v-show="!iscf">
                <div class="f-l">
                    <span>处方：</span>
                </div>
                <div class="f-r">
                    <cube-button @click="showCf">处方号0001</cube-button>
                </div>
            </div>
            <div class="flex-box recipe" v-show="iscf">
                <div class="f-l">
                    <span>处方：</span>
                </div>
                <div class="f-r">
                    <p>复方酸枣胶囊</p> 
                </div>
            </div>
            <div class="flex-box advice-btn" v-show="!isyz">
                <div class="f-l">
                    <span>医嘱：</span>
                </div>
                <div class="f-r">
                    <cube-button @click="showYz">医嘱号0001</cube-button>
                </div>
            </div>
            <div class="flex-box advice" v-show="isyz">
                <div class="f-l">
                    <p>2018-06-29</p>  
                    <p>吃药注意：要饭后吃</p>
                    <p>饮食注意：忌辛辣</p>
                    <p>休息注意：不要熬夜</p>
                    <p>医生签名：zhanggk</p>
                </div>
                <div class="f-r">
                    <img src="http://www.gengkai.site/assets/images/avatar.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MHeader from 'components/m-header/m-header'
import HHeader from 'components/m-header/h-header'
export default {
    data(){
        return {
            mt:"病历详情",
            isyz:false,
            iscf:false
        }
    },
    methods:{
        showYz(){
            this.mt="医嘱详情"
            this.isyz = true
            this.iscf = false
        },
        showHis(){
            this.mt="病历详情"
            this.isyz = false
            this.iscf = false
        },
        showCf(){
            this.mt="处方详情"
            this.iscf = true
            this.isyz = false
        }
    },
    components:{
        MHeader,
        HHeader
    }
}
</script>
<style lang="stylus" scoped>
.flex-box
    width 100%
    display flex
    justify-content space-around
    align-items center
    margin-top 10px
    .f-l
        width 30%
    .f-r
        width 60%
        text-align center 
.advice
    box-sizing border-box
    padding 10px
    border 1px solid #999999
    .f-l
        width 50%
        p
            line-height 2
    .f-r
        width 50%
        img 
            width 50%
    
   
</style>


