<template>
    <div class="p-header">
        <div class="img-box"></div>
        <div class="p-desc">
            <p>张耕恺 医生，您好！</p>
            <p>2018-06-26</p>
        </div>
        <div class="p-btns">
            <cube-button>个人中心</cube-button>
            <cube-button>下周安排</cube-button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
@import "~common/stylus/variable"
.p-header
    position relative
    box-sizing border-box
    width 100%
    display flex
    padding 10px
    height 110px
    background-color $color-background
    -webkit-box-shadow 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)
    box-shadow 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)
    .img-box
        height 100%
        width 25%
        flex-grow 1
        background-color green
    .p-desc
        flex-grow 2
        color $color-text-d
        line-height 1.5
        font-size $font-size-medium
        p   
            // text-indent 1em
            padding-left 10px
            margin-top 15px
    .p-btns
        flex-grow 1
        button 
            height 40px
            line-height: 0.5
            &:last-child
                margin-top 10px
        


</style>


