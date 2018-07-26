<template>
    <div class="timer-cfg">
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>上午</th>
                    <th>下午</th>
                    <th>晚上</th>
                </tr>
            </thead>
            <tbody v-if="tableType!=3">
                <tr v-for="(items,index) in tableData">
                    <td>{{dayStr[index]}}</td>
                    <td v-for="(item,i) in items" @click.prevent="clickCell(index,item,i)">
                        <p>{{item==0?"":(item==1?`出诊`:`上门`)}}</p>
                        <p>{{item==0?"":`${dataTimes[index][i]}人次`}}</p>
                        <p>{{special.get(index+"-"+i)}}</p>
                    </td>
                </tr>
            </tbody>
            <tbody v-if="tableType==3">
                <tr v-for="(items,index) in tableData">
                    <td>{{dayStr[index]}}</td>
                    <td v-for="(item,i) in items">
                        <p>{{item==0?"":(item==1?`出诊`:`上门`)}}</p>
                        <p>{{item==0?"":`${dataTimes[index][i]}人次`}}</p>
                        <p></p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
// tableType 1 医生配置 2 护士配置 3 简报配置
// tableData 一层[周一~周日] 二层 [上午，下午，夜间] 0 未填 1 出诊 2 上门
// dataTimes 出诊次数
export default {
    props:{
        tableType:{
            type:Number,
            default:1
        },
        tableData:{
            type:Array,
            default:function(){
                return [[0,1,0],[0,2,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
            }
        },
        dataTimes:{
            type:Array,
            default:function(){
                return  [[0,1,0],[0,2,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
            }
        },
        special:{
            type:Map,
            default:function(){
                return new Map()
            }
        }
    },
    created(){
        this.dayStr = ["一","二","三","四","五","六","日"]
        this.titleTextArr = ["上午","下午","夜间"]
        if(this.tableType==3){

        }
    },
    methods:{
        clickCell(index,item,i){
            if(this.tableType!=3){
                this.$emit("checktime",arguments)
                // index,周几 item (0不填，1出门，2门诊), i (上午还是下午还是晚上)
                console.log(index,item,i)
            }
            
        },
        specialTime(){

        }
    }
}
</script>
<style lang="stylus" scoped>
.timer-cfg
    width 100%
    font-size 14px
    table
        width 100%
        tr,th,td
            border 1px solid #999
        th,td
            line-height 1.5
            padding 5px
        td  
            height 45px
            font-size 12px

        
    
</style>


