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
                <h3 class="fst-h">家庭医生配置：</h3>
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
                    <!-- <cube-form-item :field="fields[1]"></cube-form-item>
                    <cube-form-item :field="fields[2]"></cube-form-item>
                    <cube-form-item :field="fields[3]"></cube-form-item>
                    <cube-form-item :field="fields[4]"></cube-form-item>
                    <cube-form-item :field="fields[5]"></cube-form-item>
                    <cube-form-item :field="fields[6]"></cube-form-item>
                    <cube-form-item :field="fields[7]"></cube-form-item>
                    <cube-form-item :field="fields[8]"></cube-form-item>
                    <cube-form-item :field="fields[9]"></cube-form-item>
                    <cube-form-item :field="fields[10]">
                        <div class="pwd-div">
                            <cube-input v-model="model.pwd" placeholder="验证码"></cube-input>
                            <cube-button :inline="true">发送验证码</cube-button>
                        </div>
                    </cube-form-item>
                    <cube-form-item :field="fields[11]">
                        <cube-checkbox v-model="model.agree">
                            <p style="font-size:13px;">本人确认所填资料真实有效 <span style="color:red;">审核最长不超过24小时</span></p>
                        </cube-checkbox>
                    </cube-form-item> -->
                <cube-form-group>
                    <cube-button class="fst-btn" @click="toNext">(预约挂号配置)下一步</cube-button>
                </cube-form-group>
            </cube-form>
            <!-- <div class="align-group">
                <div class="a-l">
                    <label for="reserve">预约挂号（次）：</label>
                </div>
                <div class="a-r">
                    <cube-input type="text" name="reserve" id="reserve" ></cube-input>元
                </div>
            </div>
            <div class="align-group">
                <div class="a-l">
                    <label for="tohome">上门诊疗（次）：</label>
                </div>
                <div class="a-r">
                    <input type="text" name="tohome" id="tohome" />元
                </div>
            </div>
            <div class="align-group">
                <div class="a-l">
                    <label for="consult">图文咨询（次）：</label>
                </div>
                <div class="a-r">
                    <input type="text" name="consult" id="consult" />元
                </div>
            </div>
            <div class="border"></div>
            <div class="align-group">
                <div class="a-l">
                    <label for="family">家庭医生：</label>
                </div>
                <div class="a-r">
                    <input type="text" name="family" id="family" />元/月
                </div>
            </div>
            <div class="align-group">
                <div class="a-l">
                    <label>包含服务</label>            
                </div>
                <div class="a-r sel-times">
                    <input type="checkbox" name="mfgh" id="mfgh">
                    <label for="mfgh">免费预约挂号：</label>
                    <input type="text" name="ghtimes" id="ghtimes" value="30"/>次
                    <br>
                    <input type="checkbox" name="smzl" id="smzl">
                    <label for="smzl">上门诊疗：</label>
                    <input type="text" name="zltimes" id="zltimes" value="1"/>次
                    <br>
                    <input type="checkbox" name="twzx" id="twzx">
                    <label for="twzx">免费图文咨询：</label>
                    <input type="text" name="zxtimes" id="zxtimes" value="30"/>次
                </div>
                
            </div>
            <cube-button class="fst-btn" @click="toNext">(预约挂号配置)下一步</cube-button> -->
            <!-- <button class="fst-btn u-btn" @click="toNext">(预约挂号配置)下一步</button> -->
        </div>
        <!-- 预约挂号配置 -->
        <div class="sec-cfg  main-box" v-show="issec">

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
                    <cube-button class="sec-btn" :outline="true" :inline="true" @click="toPrev">返回上一步</cube-button>
                    <cube-button class="sec-btn" :inline="true" @click="$router.push('/doctor')">确认配置</cube-button>
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
            ctbitem:true,
            newAddress:'',
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
                },
                onCancel: () => {
                
                }
            }).show()
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
    
</style>


