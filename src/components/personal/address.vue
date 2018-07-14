<template>
    <div class="address-box">
        <div class="a-item">
            <div class="a-desc">
                北京市，朝阳区，将台路，xx小区4单元1502
            </div>
            <div class="a-btns">
                <cube-checkbox>设为默认</cube-checkbox>
                <div>
                    <button @click="addHandle">修改</button>
                    <button>删除</button>
                </div>
            </div>
        </div>
        <div class="a-item">
            <div class="a-desc">
                北京市，朝阳区，将台路，xx小区4单元1502
            </div>
            <div class="a-btns">
                <cube-checkbox>设为默认</cube-checkbox>
                <div>
                    <button @click="addHandle">修改</button>
                    <button>删除</button>
                </div>
            </div>
        </div>
        <cube-button class="addAress" @click="addHandle">新增地址</cube-button>
        <div class="modal" v-show="ismodal">
            <div class="add-box">
                <cube-input :placeholder="`省，市，区`"></cube-input>
                <cube-input :placeholder="`街道`"></cube-input>
                <cube-textarea :placeholder="`详细地址`"></cube-textarea>
                <cube-button class="add-btn sub-btn">确定</cube-button>
                <cube-button  :outline="true" class="add-btn cancel-btn" @click="cancelHandle">取消</cube-button>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            ismodal:false
        }
    },
    methods:{
        addHandle(){
            this.ismodal = true
        },
        cancelHandle(){
            this.ismodal = false
        }
    },
    created(){
        document.title="地址管理"
    }    
}
</script>
<style lang="stylus" scoped>
.address-box
    width 100% 
    box-sizing border-box
    padding 10px
    .a-item
        border 1px solid #eeeeee
        box-sizing border-box
        padding 10px
        font-size 14px
        margin-bottom 10px
    .p-desc
        display flex
        justify-content space-between
        margin-bottom 10px
    .a-btns
        display flex
        justify-content space-between
        align-items center
    .addAress
        position fixed
        bottom 0
        left 0
    .modal
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        background-color rgba(0,0,0,0.4)
        .add-box
            width 80%
            height 500px
            margin 50px auto 0
            background-color #ffffff
            box-sizing border-box
            padding 10px
            position relative
            div
                margin 10px 0
            .add-btn
                width 50% 
                position absolute
                bottom 0
            .sub-btn 
                left 0    
            .cancel-btn
                right 0
</style>


