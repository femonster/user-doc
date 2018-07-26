<template>
    <div class="do-config">
        <m-header title="护士服务配置"></m-header>
        <div class="nucinfig-box">
            <h4>医疗护理：</h4>
            <br>
            <div class="select-box">
                <cube-select
                v-model="types"
                :options="options">
                </cube-select>
                <button @click="selectdata">添加</button>
            </div>
            <br>
            <div class="selected" v-if="selectedData.length>0">
                <ul>
                    <li v-for="(item,index) in selectedData" :key="index">
                        <p>{{item}}  <input type="text" value="200"> 元/次</p>
                        <button @click="delItem(index)">删除</button>
                    </li>
                </ul>
            </div>
            <br>
            <div class="time-config">
                <div class="align-group">
                    <div class="a-l">
                        <label>上午诊疗:</label>
                    </div>
                    <div class="a-r zl-times">
                        <cube-select
                        v-model="model2.morning.start"
                        :options="zltime.morning.start"
                        class="zl-items"
                        >
                        </cube-select>
                        -
                        <cube-select
                        v-model="model2.morning.end"
                        :options="zltime.morning.end"
                        class="zl-items"
                        >
                        </cube-select>
                        <cube-input v-model="model2.morning.times" type="number" class="zl-items">
                            <span slot="append" style="padding-left: 10px;">人次</span>
                        </cube-input>
                        <!-- <input type="text" v-model="model2.morning.times" class="am-person"> 人次 -->
                    </div>
                </div>
                <div class="align-group">
                    <div class="a-l">
                        <label>下午诊疗:</label>
                    </div>
                    <div class="a-r zl-times">
                        <cube-select
                        v-model="model2.afternoon.start"
                        :options="zltime.afternoon.start"
                        class="zl-items"
                        >
                        </cube-select>
                        -
                        <cube-select
                        v-model="model2.afternoon.end"
                        :options="zltime.afternoon.end"
                        class="zl-items"
                        >
                        </cube-select>
                        <cube-input v-model="model2.afternoon.times" type="number" class="zl-items">
                            <span slot="append" style="padding-left: 10px;">人次</span>
                        </cube-input>
                    </div>
                </div>
                <div class="align-group">
                    <div class="a-l">
                        <label>夜间诊疗:</label>
                    </div>
                    <div class="a-r zl-times">
                        <cube-select
                        v-model="model2.night.start"
                        :options="zltime.night.start"
                        class="zl-items"
                        >
                        </cube-select>
                        -
                        <cube-select
                        v-model="model2.night.end"
                        :options="zltime.night.end"
                        class="zl-items"
                        >
                        </cube-select>
                        <cube-input v-model="model2.night.times" type="number" class="zl-items">
                            <span slot="append" style="padding-left: 10px;">人次</span>
                        </cube-input>
                    </div>
                </div>
            </div>
            <div class="table-config">
                <timer-config :special="detailObj" :tableType=tableType :tableData=model2.tableData :dataTimes="model2.times"  @checktime="checktime"></timer-config>
            </div>
            <br><br>
            <br>
            <br>
            <router-link :to="`/nurse`" tag="cube-button" class="nurse-btn">确定</router-link>
        </div>

       <!-- 具体配置时间 -->
        <div class="special-config" v-show="isspecfg" ref="speccfgdiv">
            <div class="mask"></div>
            <div class="cfg">
                <div class="cfg-title">
                    <span class="t1">具体配置</span>
                    <span class="t2" @click="hidespecial">取消</span>
                    <span class="t3" @click="speccfg">确认</span>
                </div>
                <div class="cfg-content">

                    <div class="cfg-content-wrap">
                        <select name="" id="">
                            <option v-for="(item,index) in detailStartArr" :value="item">{{item}}</option>
                        </select>
                        -
                        <select name="" id="">
                            <option v-for="(item,index) in detailEndArr" :value="item">{{item}}</option>
                        </select>
                        -
                        <input type="text" v-model="detailTime"/>
                        次
                    </div>
                </div>
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
            types:"肌肉/皮下注射",
            options:["肌肉/皮下注射","尿管护理","产后催乳","婴幼儿护理"],
            selectedData:["肌肉/皮下注射","尿管护理","产后催乳","婴幼儿护理"],
            isspecfg:false,
            detailTime:5,
            whichtime:0,
            whichweek:0,
            details:"",
            detaile:"",
            detailStartArr:[],
            detailEndArr:[],
            detailObj:new Map(),
            model2:{
                morning:{
                    start:"08:00",
                    end:"11:00",
                    times:5
                },
                afternoon:{
                    start:"13:00",
                    end:"16:00",
                    times:5
                },
                night:{
                    start:"18:00",
                    end:"20:00",
                    times:5
                },
                tableData:[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],
                times: [[5,5,5],[5,5,5],[5,5,5],[5,5,5],[5,5,5],[5,5,5],[5,5,5]],
                address:""
            }
        }
    },
    created(){
        this.tableType=2;
        
        this.zltime={
            morning:{
                start:["08:00","08:30","09:00","09:30","10:00"],
                end:["11:00","11:30","12:00","12:30","13:00"],
            },
            afternoon:{
                start:["13:00","13:30","14:00","14:30"],
                end:["16:00","16:30","17:00","17:30","18:00"],
            },
            night:{
                start:["18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00"],
                end:["20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30"],
            }
        }

        this.detailStartArr = this.zltime.morning.start;
        this.detailEndArr = this.zltime.morning.end;
    },
    methods:{
        selectdata(){
            if(this.selectedData.indexOf(this.types)!=-1){
                return;
            }
            this.selectedData.push(this.types)
        },
        delItem(index){
            this.$delete(this.selectedData,index)
        },
        checktime(){
            let args = arguments[0],
            fstIndex = args[0],
            secIndex = args[2],
            val = args[1],
            _this = this;
            this.whichtime = secIndex;
            this.whichweek = fstIndex;
            if(secIndex==0){
                this.detailStartArr = this.zltime.morning.start;
                this.detailEndArr = this.zltime.morning.end;
            }else if(secIndex==1){
                this.detailStartArr = this.zltime.afternoon.start;
                this.detailEndArr = this.zltime.afternoon.end;
            }else{
                this.detailStartArr = this.zltime.night.start;
                this.detailEndArr = this.zltime.night.end;
            }

            this.details = this.detailStartArr[0];
            this.detaile = this.detailEndArr[0];

            this.isspecfg = true;
            this.$refs.speccfgdiv.style.opacity = 1;
        },
        hidespecial(){
            this.$refs.speccfgdiv.style.opacity = 0;
            setTimeout(()=>{
                this.isspecfg = false;
            },200)
        },
        speccfg(){
            this.model2.tableData[this.whichweek].splice(this.whichtime,1,2);
            this.model2.times[this.whichweek].splice(this.whichtime,1,this.detailTime);
            this.detailObj.set(this.whichweek+"-"+this.whichtime,this.details+"-"+this.detaile);
            console.log(this.model2.times[this.whichtime]);
            this.detailTime = 5;
            this.hidespecial();
        }
    },
    components: {
        MHeader,
        TimerConfig
    },
}
</script>
<style lang="stylus" scoped>
.do-config
    width 100%
    .nucinfig-box
        width 100%
        box-sizing border-box
        padding 10px
        .select-box
            width 100% 
            .cube-select
                width 80%
                display inline-block
        .selected
            width 100%
            li  
                margin-bottom 10px;
                p
                    display inline-block
                    width 80%
                    input 
                        width 30%
                        border 1px solid #eeeeee
        .zl-times
            display flex
            justify-content flex-end
        .zl-items
            margin: 0 5px
        .nurse-btn
            position fixed
            bottom 0
            left 0
.special-config
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    overflow hidden
    transition opacity 0.3s ease
    opacity 0
    .mask
        opacity: 0.4
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        background-color: #25262d
        pointer-events: auto
    .cfg
        position absolute
        bottom 0
        left 0
        width 100%
        height 200px
        background-color #ffffff
        .cfg-title
            color #000000
            position relative
            height 50px
            border-bottom 1px solid #eeeeee
            span
                position absolute
                top 15px
            .t1
                left 50%
                transform translateX(-50%)
            .t3
                right 10px
                color red
            .t2
                left 10px
                color #333333
        .cfg-content
            height 100%
            width 100%
            .cfg-content-wrap
                margin-top 50px
                text-align center
                select
                    width 80px
                    height 30px
                input
                    width 60px
                    height 30px
                    border 1px solid rgb(169, 169, 169)
                    text-indent 1.5em
                        

                

            

</style>


