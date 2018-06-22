<template>
    <div class="m-header" v-show="show">
        <span class="go-back" @click="reback"> < </span>
        {{title}}
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            default:"医护端"
        },
        show:{
            type:Boolean,
            default:true
        }
    },
    methods:{
        reback(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="stylus" scoped>
@import "~common/stylus/variable"
.m-header
    width 100%
    height 50px
    line-height 50px
    text-align center
    font-size $font-size-large
    position relative
    -webkit-box-shadow 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)
    box-shadow 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)
    .go-back
        width 50px
        height 50px
        position absolute
        top 0
        left 0
        text-align center
        line-height 50px
</style>


