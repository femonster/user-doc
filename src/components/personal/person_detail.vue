<template>
    <div class="detail-box">
        <m-header title="资料管理"></m-header>
        <div class="detail-form">
            <div class="align-group">
                <div class="a-l">
                    <label>头像：</label>
                </div>
                <div class="a-r">
                    <img src="http://www.gengkai.site/assets/images/avatar.jpg" alt="avatar" class="avatar" style="width:50px;">
                </div>
            </div>
            <div class="align-group">
                <div class="a-l">
                    <label>真实姓名：</label>
                </div>
                <div class="a-r">
                    <p>张三</p>
                </div>
            </div>
            <div class="align-group">
                <div class="a-l">
                    <label>所属医院：</label>
                </div>
                <div class="a-r">
                    <cube-input value="中日友好医院"></cube-input>
                </div>
            </div>
            <div class="align-group">
                <div class="a-l">
                    <label>类别：</label>
                </div>
                <div class="a-r">
                    <cube-select
                        v-model="typesval"
                        :options="types"
                        >
                        </cube-select>
                </div>
            </div>
            <div class="align-group">
                <div class="a-l">
                    <label>任职科室：</label>
                </div>
                <div class="a-r">
                    <cube-select
                        v-model="kesval"
                        :options="kes"
                        >
                        </cube-select>
                </div>
            </div>
            <div class="align-group">
                <div class="a-l">
                    <label>职称：</label>
                </div>
                <div class="a-r">
                    <cube-select
                        v-model="zcval"
                        :options="zc"
                        >
                        </cube-select>
                </div>
            </div>
            <div class="align-group">
                <div class="a-l">
                    <label>证件照：</label>
                </div>
                <div class="a-r">
                    <img src="http://www.gengkai.site/assets/images/avatar.jpg" alt="avatar" class="avatar" style="width:50px;">
                </div>
            </div>
            <div class="align-group">
                <div class="a-l">
                    <label>资格证：</label>
                </div>
                <div class="a-r">
                    <img src="http://www.gengkai.site/assets/images/avatar.jpg" alt="avatar" class="avatar" style="width:50px;">
                </div>
            </div>
            <div class="align-group">
                <div class="a-l">
                    <label>职称证：</label>
                </div>
                <div class="a-r">
                    <img src="http://www.gengkai.site/assets/images/avatar.jpg" alt="avatar" class="avatar" style="width:50px;">
                </div>
            </div> 
            <div class="align-group">
                <div class="a-l">
                    <label>个人介绍：</label>
                </div>
                <div class="a-r">
                    <cube-textarea></cube-textarea>
                </div>
            </div> 
            <div class="align-group">
                <div class="a-l">
                    <label>个人风采：</label>
                </div>
                <div class="a-r">
                    
                </div>
            </div>
            <cube-checkbox>
                <p style="font-size:13px;">本人确认所填资料真实有效 <span style="color:red;">审核最长不超过24小时</span></p>
            </cube-checkbox>
        </div>
        <cube-button>提交</cube-button>
    </div>
</template>
<script>
import MHeader from 'components/m-header/m-header'
export default {
    data(){
        return {
            kesval:"中医",
            kes:["中医","心脏内科","骨科"],
            types:["医师","护士"],
            typesval:"医师",
            zc:["主任医师","普通医师","教授"],
            zcval:"普通医师"
        }
    },
    components:{
        MHeader
    }
}
</script>
<style lang="stylus" scoped>
.detail-form
    padding 10px
    box-sizing border-box
    .align-group
        border-bottom 1px solid #eeeeee
</style>


