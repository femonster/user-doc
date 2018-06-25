<template>
    <div class="do-config">
        <m-header :title="title"></m-header>
        <div class="first-cfg main-box" v-show="!issec">
            <div class="align-group">
                <div class="a-l">
                    <label for="reserve">预约挂号（次）：</label>
                </div>
                <div class="a-r">
                    <cube-input type="text" name="reserve" id="reserve" ></cube-input>元
                    <!-- <input type="text" name="reserve" id="reserve" />元 -->
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
            <cube-button class="fst-btn" @click="toNext">(预约挂号配置)下一步</cube-button>
            <!-- <button class="fst-btn u-btn" @click="toNext">(预约挂号配置)下一步</button> -->
        </div>
        <div class="sec-cfg  main-box" v-show="issec">
            <div class="align-group">
                <div class="a-l">
                    <label>上午诊疗:</label>
                </div>
                <div class="a-r zl-times">
                    <select name="morning1" id="morning1">
                        <option value="08:00">08:00</option>
                        <option value="08:30">08:30</option>
                        <option value="09:00">09:00</option>
                        <option value="09:30">09:30</option>
                        <option value="10:00">10:00</option>
                    </select>
                    ---
                    <select name="morning2" id="morning2">
                        <option value="11:00">11:00</option>
                        <option value="11:30">11:30</option>
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                    </select>
                    <input type="text" class="am-person"> 人次
                </div>
            </div>
             <div class="align-group">
                <div class="a-l">
                    <label>下午诊疗:</label>
                </div>
                <div class="a-r zl-times">
                    <select name="afternoon1" id="afternoon1">
                        <option value="13:00">13:00</option>
                        <option value="08:30">08:30</option>
                        <option value="09:00">09:00</option>
                        <option value="09:30">09:30</option>
                        <option value="10:00">10:00</option>
                    </select>
                    ---
                    <select name="afternoon2" id="afternoon2">
                        <option value="11:00">11:00</option>
                        <option value="11:30">11:30</option>
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                    </select>
                    <input type="text" class="am-person"> 人次
                </div>
            </div>
             <div class="align-group">
                <div class="a-l">
                    <label>上午诊疗:</label>
                </div>
                <div class="a-r zl-times">
                    <select name="night1" id="night1">
                        <option value="08:00">08:00</option>
                        <option value="08:30">08:30</option>
                        <option value="09:00">09:00</option>
                        <option value="09:30">09:30</option>
                        <option value="10:00">10:00</option>
                    </select>
                    ---
                    <select name="night2" id="night2">
                        <option value="11:00">11:00</option>
                        <option value="11:30">11:30</option>
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                    </select>
                    <input type="text" class="am-person"> 人次
                </div>
            </div>
            <div class="align-group">
                <timer-config></timer-config>
            </div>
            <div class="align-group">
                <div class="a-l">
                    <label for="address">诊疗地址</label>
                </div>
                <div class="a-r">
                    <select name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <input type="text" style="width:70%">
                    <button>添加</button>
                </div>
            </div>
            <div class="align-group">
                <div class="a-align">
                    <button class="u-btn">确认</button>
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
            issec:false
        }
    },
    components: {
        MHeader,
        TimerConfig
    },
    methods:{
        toNext(){
            this.issec = true
            this.title = "预约挂号配置"
        }
    }
}
</script>
<style lang="stylus" scoped>
.first-cfg
    .align-group
        .a-l
            width 40%
        .a-r
            width 60%
            input:not([type="checkbox"]),
            select
                width 80%
                margin-right 5px
.sec-cfg
    .zl-times
        input,select
            width 60px
.fst-btn
    display block
    margin 20px auto 0
</style>


