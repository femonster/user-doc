<template>
        <!--发布,编辑公告  -->
        <div class="add-notice-box">
            <m-header title="发布公告"></m-header>
            <div class="notice-section">
                <cube-form
                :model="model"
                :schema="schema"
                :options="options"
                ></cube-form>
                <cube-button class="add-btn" @click="addNotice">发布</cube-button>
            </div>
        </div>
</template>
<script>
import MHeader from 'components/m-header/m-header'
export default {
    data(){
        return {
            model:{
                titleVal:'',
                noticeVal:''
            },
            schema:{
                fields: [
                    {
                        type: 'input',
                        modelKey: 'titleVal',
                        label: '标题',
                    },
                    {
                        type: 'textarea',
                        modelKey: 'noticeVal',
                        label: '内容',
                        rules: {
                            required: true
                        },
                    }
                ]
            },
            options: {
                scrollToInvalidField: true,
                layout: 'standard' // classic fresh
            }
        }
    },
    methods:{
        addNotice(){
            this.$router.go(-1)
        }
    },
    components:{
        MHeader
    }
}
</script>
<style lang="stylus" scoped>
.notice-section
    margin-top 5px
    width 100%
    .add-btn
        position fixed
        bottom 0
        left 0
        right 0
</style>


