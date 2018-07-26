<template>
<div class="report">
     <m-header title="本周简报"></m-header>   
     <div class="report-box">
         <h3>{{group.dname}}</h3>
         <timer-config :tableType="tableType" :tableData="group.mz" :dataTimes="group.times"></timer-config>
         <div class="report-box">
             <p>看病总计:10人</p>
             <p>净收益:5000元</p>
             <p>好评个数：10</p>
             <p>差评个数：0</p>
         </div>
     </div>
</div>    
</template>
<script>
import MHeader from 'components/m-header/m-header'
import TimerConfig from 'base/timer-config/timer-config'
export default {
    data(){
        return {
            tableType:3,
            group:{
                "dname": "2018/06/25 - 2018/07/01",
                "zname": "简报",
                "mz": [
                    [1,1,0],[1,1,0],[1,1,0],[1,2,0],[1,1,0],[1,1,0],[1,1,0]
                ],
                "times": [
                     [1,1,0],[1,1,0],[1,1,0],[1,2,0],[1,1,1],[1,1,0],[1,1,0]
                ]
            }
        }
    },
    components:{
        MHeader,
        TimerConfig
    }
}
</script>
<style lang="stylus" scoped>
.report-box
    padding 10px
    box-sizing border-box
    h3 
        margin-bottom 10px
    p 
        padding 10px 0
</style>


