<template>
    <div class="register-div">
        <m-header title="医护资格审核"></m-header>
        <div class="reg-form">
            <div class="input-group">
                <label for="avatar">头像：</label>
                <input type="file" name="avatar" id="avatar" />
            </div>
            <div class="input-group">
                <label for="username">真实姓名：</label>
                <input type="text" name="username" id="username" />
            </div>
            <div class="input-group">
                <label for="hospital">所属医院：</label>
                <input type="text" name="hospital" id="hospital" />
            </div>
            <div class="input-group">
                <label for="Identity">类别：</label>
                <select name="Identity" id="Identity" v-model="identity">
                    <option value="0">--请选择--</option>
                    <option value="1">医师</option>
                    <option value="2">护士</option>
                </select>
            </div>
            <div class="input-group">
                <label for="department">任职科室：</label>
                <select name="department" id="department">
                    <option value="0">--请选择--</option>
                    <option value="1">骨科</option>
                    <option value="2">脑科</option>
                </select>
            </div>
            <div class="input-group">
                <label for="office">职称：</label>
                <select name="office" id="office">
                    <option value="0">--请选择--</option>
                    <option value="1">普通医师</option>
                    <option value="2">主任医师</option>
                </select>
            </div>
            <div class="input-group">
                <label for="idcard">证件照：</label>
                <input type="file" name="idcard" id="idcard" />
            </div>
            <div class="input-group">
                <label for="zgcard">资格证：</label>
                <input type="file" name="zgcard" id="zgcard" />
            </div>
            <div class="input-group">
                <label for="zccard">职称证：</label>
                <input type="file" name="zccard" id="zccard" />
            </div>
            <div class="input-group">
                <input type="tel" name="usertel" id="usertel" placeholder="手机号"/>
            </div>
            <div class="input-group">
                <input type="text" name="renum" id="renum" placeholder="验证码"/>
                <button class="u-btn">发送验证码</button>
            </div>
            <div class="input-group check-agree">
                <input type="checkbox" name="agree" id="agree">
                本人确认所填资料真实有效 <span style="color:red;">审核最长不超过24小时</span>
            </div>
        </div>
        <!-- <router-link :to="" class="reg-btn u-btn" tag="button">提交</router-link> -->
        <button class="reg-btn u-btn" @click="toNext">提交</button>
    </div>
</template>
<script>
import MHeader from 'components/m-header/m-header'
import{setItem,getItem} from 'common/js/utils'
export default {
    data(){
        return {
            identity:"0"
        }
    },
    create(){
        if(getItem("identity")){
            console.log("已经注册")
        }
    },
    components: {
        MHeader
    },
    methods:{
        toNext(){
            setItem("identity",this.identity)
            if(this.identity==1){
                this.$router.push("/doconfig")
            }else if(this.identity==2){
                this.$router.push('/nuconfig')
            }else{
                alert("error")
            }
            
        }
    }
}
</script>
<style lang="stylus" scoped>
@import "~common/stylus/variable"

.register-div
    width 100%
    position relative
    height 100%
    overflow-x hidden
    .input-group
        box-sizing border-box
        width 100%
        padding 10px
        input:not([type="checkbox"])
            height 25px 
            width 60%
            border 1px solid #333
    .check-agree
        font-size $font-size-small
    .reg-btn
        display block
        margin 0 auto
</style>


