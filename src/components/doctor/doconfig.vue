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
                                <label for="freeReserve">免费预约挂号</label>
                            </cube-checkbox>
                            <cube-input type="text" v-model="model.family.freeReserve.times"   :disabled="true">
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
                                <label for="freeConsult">免费图文咨询</label>
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
                <timer-config :tableType=tableType :tableData=model2.tableData @checktime="checktime"></timer-config>
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
            <div class="cfg">
                <div class="cfg-title">
                    <span class="t1">具体配置</span>
                    <span class="t2" @click="hidespecial">跳过</span>
                    <span class="t3" @click="speccfg">确认</span>
                </div>
                <div class="cfg-content">

                    <div class="cfg-content-wrap">
                        <select name="" id="">
                            <option value="9:00">9:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                        </select>
                        -
                        <select name="" id="">
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:00">16:00</option>
                            <option value="17:00">17:00</option>
                        </select>
                        -
                        <input type="text"/>
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
            address: ["北京第一人民医院","北京朝阳区将府家园"],
            model:{
                reserve:"",
                tohome:"",
                consult:"",
                family:{
                    price:200,
                    freeReserve:{
                        check:true,
                        times:"无限"
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
                tableData:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],
                address:""
            }
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
                fstIndex = args[0],
                secIndex = args[2],
                val = args[1],
                _this = this;
        this.$createActionSheet({
                title: '选择方式',
                pickerStyle: true,
                data: [
                {
                    content: '出诊'
                },
                {
                    content: '上门'
                }
                ],
                onSelect: (item, index) => {
                    var chas = index+1;
                    _this.model2.tableData[fstIndex].splice(secIndex,1,chas);
                    this.isspecfg = true;
                    this.$refs.speccfgdiv.style.opacity = 1;
                },
                onCancel: () => {
                    
                }
            }).show()
        },
        hidespecial(){
            this.$refs.speccfgdiv.style.opacity = 0;
            setTimeout(()=>{
                this.isspecfg = false;
            },200)
        },
        speccfg(){

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


