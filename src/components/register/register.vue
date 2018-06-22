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
                <select name="Identity" id="Identity">
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
            <div class="input-group">
                <input type="checkbox" name="agree" id="agree">
                本人确认所填资料真实有效<span style="color:red;">审核最长不超过24小时</span>
            </div>
        </div>
        <button class="u-btn">提交</button>
    </div>
</template>
<script>
import MHeader from 'components/m-header/m-header'

export default {
    components: {
        MHeader
    }
}
</script>
<style lang="stylus" scoped>
.register-div
    width 100%
    position relative
    height 100%
</style>


