<template>
    <div class="do-config">
        <m-header :title="title"></m-header>
        <!-- 诊疗费用配置 -->
        <div class="first-cfg main-box" v-show="!issec">
            <cube-form
            :model="model">
                <h3 class="fst-h">单次价格配置：</h3>
                <cube-form-group>
                    <cube-form-item :field="fields[0]">
                        <cube-input >
                            <span slot="append" style="padding-left:10px;">元</span>
                        </cube-input>
                    </cube-form-item>
                    <cube-form-item :field="fields[1]">
                        <cube-input >
                            <span slot="append" style="padding-left:10px;">元</span>
                        </cube-input>
                    </cube-form-item>
                    <cube-form-item :field="fields[2]">
                        <cube-input >
                            <span slot="append" style="padding-left:10px;">元</span>
                        </cube-input>
                    </cube-form-item>
                </cube-form-group>
                <br>
                <h3 class="fst-h"><cube-switch v-model="ishowfamily">家庭医生配置</cube-switch></h3>

                <div class="family-box" v-show="ishowfamily">
                    <cube-form-group>
                        <cube-form-item :field="fields[3]">
                            <cube-input type="number" v-model="model.family.price">
                                <span slot="append" style="padding-left:10px;">元/月</span>
                            </cube-input>
                        </cube-form-item>

                        <cube-form-item>
                            <cube-checkbox v-model="model.family.freeReserve.check" id="freeReserve">
                                <label for="freeReserve">免费图文咨询</label>
                            </cube-checkbox>
                            <cube-switch v-model="model.family.freeReserve2.check">
                                无限次
                            </cube-switch>
                            <br>
                            <cube-input type="text" v-model="model.family.freeReserve.times" v-show="!model.family.freeReserve2.check">
                                <span slot="append" style="padding-left:10px;">次</span>
                            </cube-input>
                        </cube-form-item>
                        <cube-form-item>
                            <cube-checkbox v-model="model.family.freeTohome.check" id="freeTohome">
                                <label for="freeTohome">上门诊疗</label>
                            </cube-checkbox>
                            <cube-input type="number" v-model="model.family.freeTohome.times">
                                <span slot="append" style="padding-left:10px;">次</span>
                            </cube-input>
                        </cube-form-item>
                        <cube-form-item>
                            <cube-checkbox v-model="model.family.freeConsult.check" id="freeConsult">
                                <label for="freeConsult">免费预约挂号</label>
                            </cube-checkbox>
                            <cube-input type="number" v-model="model.family.freeConsult.times">
                                <span slot="append" style="padding-left:10px;">次</span>
                            </cube-input>
                        </cube-form-item>
                    </cube-form-group>
                </div>


                <cube-form-group>
                    <cube-button class="fst-btn" @click="toNext">(预约挂号配置)下一步</cube-button>
                </cube-form-group>
            </cube-form>
        </div>
        <!-- 预约挂号配置 -->
        <div class="sec-cfg  main-box" v-show="issec">
            <h3>默认时间/次数配置</h3>
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
            <div class="align-group">
                <timer-config :tableType=tableType :tableData=model2.tableData :dataTimes="model2.times" @checktime="checktime" :special="detailObj"></timer-config>
            </div>
            <div class="align-group">
                <div class="a-l">
                    <label for="address">诊疗地址</label>
                </div>
                <div class="a-r">
                    <cube-select
                        v-model="model2.address"
                        :options="address">
                    </cube-select>
                    <cube-input type="text" placeholder="输入地址" style="margin-top:10px" v-model="newAddress">
                        <cube-button @click="addPosition" slot="append" :inline="true">添加</cube-button>
                    </cube-input>
                </div>
            </div>
            <div class="align-group">
                <div class="a-align">
                    <cube-button class="sec-btn" v-show="isprev" :outline="true" :inline="true" @click="toPrev">返回上一步</cube-button>
                    <cube-button class="sec-btn" :inline="true" @click="$router.push('/doctor')">确认配置</cube-button>
                </div>
            </div>
        </div>
        <!-- 具体配置时间 -->
        <div class="special-config" v-show="isspecfg" ref="speccfgdiv">
            <div class="mask"></div>
            <div class="cfg" ref="cfgdiv">
                <div class="cfg-title">
                    <span class="t1">具体配置</span>
                    <span class="t2" @click="hidespecial">取消</span>
                    <span class="t3" @click="speccfg">确认</span>
                </div>
                <div class="cfg-content" ref="timcfg">
                    <div class="clickdiv menz" ref="menz"  @click="checkType(1)">门诊</div>
                    <div class="clickdiv shangm" ref="shangm" @click="checkType(2)">上门</div>
                    <div class="cfg-content-wrap">
                        <select name="" id="" v-model="details">
                            <option v-for="(item,index) in detailStartArr" :value="item">{{item}}</option>
                        </select>
                        -
                        <select name="" id="" v-model="detaile">
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
            title:"诊疗费用配置",
            issec:false,
            isprev:true,
            isspecfg:false,
            ctbitem:true,
            newAddress:'',
            ishowfamily:false,
            detailTime:5,
            whichtime:0,
            whichweek:0,
            details:"",
            detaile:"",
            detailStartArr:[],
            detailEndArr:[],
            address: ["北京第一人民医院","北京朝阳区将府家园"],
            model:{
                reserve:"",
                tohome:"",
                consult:"",
                family:{
                    price:200,
                    freeReserve:{
                        check:true,
                        times:0
                    },
                    freeReserve2:{
                        check:true,
                    },
                    freeTohome:{
                        check:true,
                        times:1
                    },
                    freeConsult:{
                        check:true,
                        times:30
                    }
                }, 
            },
            fields:[
                {
                    type:"input",
                    label:"预约挂号(次)",
                    modelKey:"reserve"
                },
                {
                    type:"input",
                    label:"上门诊疗(次)",
                    modelKey:"tohome"
                },
                {
                    type:"input",
                    label:"图文咨询(次)",
                    modelKey:"consult"
                },
                {
                    type:"input",
                    label:"家庭医生"
                }
            ],
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
            },
            detailObj:new Map()
        }
    },
    created(){
        this.tableType = 1
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

        if(this.$route.query.id==2){
            this.issec = true;
            this.isprev = false;
        }
        
    },
    components: {
        MHeader,
        TimerConfig
    },
    methods:{
        addPosition(){
            this.address.push(this.newAddress)
            this.model2.address = this.newAddress
            this.$createToast({
                txt: '添加成功',
                type: 'correct'
            }).show()
            this.newAddress=''
        },
        toNext(){
            this.issec = true
            this.title = "预约挂号配置"
        },
        toPrev(){
            this.issec = false
            this.title = "诊疗费用配置"
        },
        checktime(){
            let args = arguments[0],
                fstIndex = args[0], // 周一~周日
                secIndex = args[2], // 上午，下午，晚上
                val = args[1], //0 不填 1 门诊 2上门
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
                this.$refs.cfgdiv.style.transform=`translateY(100px)`;
            },200)
        },
        speccfg(){
            this.model2.tableData[this.whichweek].splice(this.whichtime,1,this.tp);
            this.model2.times[this.whichweek].splice(this.whichtime,1,this.detailTime);
            this.detailObj.set(this.whichweek+"-"+this.whichtime,this.details+"-"+this.detaile);
            this.detailTime = 5;
            this.$refs.cfgdiv.style.transform=`translateY(100px)`;
            this.hidespecial();
        },
        checkType(tp){
            this.tp = tp;
            if(tp==1){
                this.$refs.shangm.style.backgroundColor="#fff";
                this.$refs.menz.style.backgroundColor="#eee";
            }else{
                this.$refs.shangm.style.backgroundColor="#eee";
                this.$refs.menz.style.backgroundColor="#fff";
            }
            this.$refs.cfgdiv.style.transform=`translateY(0)`;
        }
    }
}
</script>
<style lang="stylus" scoped>
.main-box 
    form
    font-size 14px
    .fst-h
        font-weight bold
        padding-top 10px
        border-top 1px solid #333333
    .family-input
        width 40%
    .zl-times
        display flex
        justify-content flex-end
        .zl-items
            margin: 0 5px
.fst-btn
    display block
    margin 20px auto 0
.sec-btn
    margin-right 20px
    margin-top 20px
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
        height 300px
        background-color #ffffff
        transform translateY(100px)
        transition transform 0.3s ease
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
            .clickdiv
                width 100%
                height 60px
                line-height 60px
                box-sizing border-box
                border-bottom 1px solid #eee
                text-align center
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


