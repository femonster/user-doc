<template>
    <div class="timer-cfg">
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>一</th>
                    <th>二</th>
                    <th>三</th>
                    <th>四</th>
                    <th>五</th>
                    <th>六</th>
                    <th>日</th>
                </tr>
            </thead>
            <tbody v-if="tableType!=3">
                <tr v-for="(items,index) in tableData">
                    <td>{{index==0?"上午":(index==1?"下午":"夜间")}}</td>
                    <td v-for="(item,i) in items" @click.prevent="clickCell(index,item,i)">
                        {{item==0?"":(item==1?"出诊":"上门")}}
                    </td>
                </tr>
            </tbody>
            <tbody v-if="tableType==3">
                <tr v-for="(items,index) in tableData">
                    <td>{{index==0?"上午":(index==1?"下午":"夜间")}}</td>
                    <td v-for="(item,i) in items">
                        {{item==0?"":(item==1?`出诊-${dataTimes[index][i]}`:`上门-${dataTimes[index][i]}`)}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
// tableType 1 医生配置 2 护士配置 3 简报配置
// tableData 一层 [上午,下午,夜间] 二层 [周一~周日] 0 未填 1 出诊 2 上门
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
                return [[0,1,0,0,0,0,0],[0,2,0,0,0,0,0],[0,0,0,0,0,0,0]]
            }
        },
        dataTimes:{
            type:Array,
            default:function(){
                return []
            }
        }
    },
    created(){
        this.titleTextArr = ["上午","下午","夜间"]
        if(this.tableType==3){

        }
    },
    methods:{
        clickCell(index,item,i){
            if(this.tableType!=3){
                this.$emit("checktime",arguments)
                console.log(index,item,i)
            }
            
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
            line-height 45px
            height 45px

        
    
</style>


