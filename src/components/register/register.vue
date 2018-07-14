<template>
    <div class="register-div">
        <m-header title="医护资格审核" :show='ishow'></m-header>
        <div class="reg-form main-box">
            <cube-form
            :model="model">
                <cube-form-group>
                    <cube-form-item :field="fields[0]"></cube-form-item>
                    <cube-form-item :field="fields[1]"></cube-form-item>
                    <cube-form-item :field="fields[2]"></cube-form-item>
                    <cube-form-item :field="fields[3]"></cube-form-item>
                    <cube-form-item :field="fields[4]"></cube-form-item>
                    <cube-form-item :field="fields[5]" v-show="model.identity==1"></cube-form-item>
                    <cube-form-item :field="fields[6]" v-show="model.identity==2"></cube-form-item>
                    <cube-form-item :field="fields[7]"></cube-form-item>
                    <cube-form-item :field="fields[8]"></cube-form-item>
                    <cube-form-item :field="fields[9]"></cube-form-item>
                    <cube-form-item :field="fields[10]"></cube-form-item>
                    <cube-form-item :field="fields[11]">
                        <div class="pwd-div">
                            <cube-input placeholder="验证码"></cube-input>
                            <cube-button :inline="true">发送验证码</cube-button>
                        </div>
                    </cube-form-item>
                    <cube-form-item :field="fields[12]">
                        <cube-checkbox v-model="model.agree">
                            <p style="font-size:13px;">本人确认所填资料真实有效 <span style="color:red;">审核最长不超过24小时</span></p>
                        </cube-checkbox>
                    </cube-form-item>
            </cube-form-group>
            </cube-form>
        </div>
        <cube-button @click="toNext">提交</cube-button>
    </div>
</template>
<script>
import MHeader from 'components/m-header/m-header'
import{setItem,getItem} from 'common/js/utils'
export default {
    data(){
        return {
            identity:"0",
            ishow:false,
            model:{
                avatar:[],
                username:"",
                hospital:"",
                department:1,
                identity:1,
                office1:1,
                office2:3,
                idcard:[],
                zgcard:[],
                zccard:[],
                phone:"",
                pwd:"",
                agree:true  
            },
             fields:[
                    {
                        type:'upload',
                        modelKey:'avatar',
                        label:'头像',
                        events:{
                            'file-removed': (...args) => {
                                console.log('file removed', args)
                            }
                        },
                        rules: {
                            required: true,
                            uploaded: (val, config) => {
                                return Promise.all(val.map((file, i) => {
                                return new Promise((resolve, reject) => {
                                    if (file.uploadedUrl) {
                                    return resolve()
                                    }
                                    // fake request
                                    setTimeout(() => {
                                    if (i % 2) {
                                        reject(new Error())
                                    } else {
                                        file.uploadedUrl = 'uploaded/url'
                                        resolve()
                                    }
                                    }, 1000)
                                })
                                })).then(() => {
                                return true
                                })
                            }
                        },
                    },
                    {
                        type: 'input',
                        modelKey:'username',
                        label:'真实姓名',
                        rules: {
                            required: true
                        },
                        trigger: 'blur'
                    },
                    {
                        type: 'input',
                        modelKey:'hospital',
                        label:'所属医院',
                        rules: {
                            required: true
                        },
                        trigger: 'blur'
                    },
                    {
                        type: 'select',
                        modelKey:'department',
                        label:'任职科室',
                         props: {
                            options: [{value:1,text:"骨科"},{value:2,text:"脑科"},{value:3,text:"皮肤科"}]
                        },
                        rules: {
                            required: true
                        }
                    },
                    {
                        type: 'select',
                        modelKey:'identity',
                        label:'入驻身份',
                         props: {
                            options: [{value:1,text:"医生"},{value:2,text:"护士"}]
                        },
                        rules: {
                            required: true
                        }
                    },
                    {
                        type: 'select',
                        modelKey:'office1',
                        label:'入驻职称',
                         props: {
                            options: [{value:1,text:"普通医师"},{value:2,text:"主治医师"}]
                        },
                        rules: {
                            required: true
                        }
                    },
                    {
                        type: 'select',
                        modelKey:'office2',
                        label:'入驻职称',
                         props: {
                            options: [{value:3,text:"初级护士"},{value:4,text:"护士长"}]
                        },
                        rules: {
                            required: true
                        }
                    },
                    {
                        type:'upload',
                        modelKey:'idcard',
                        label:'证件照',
                        events:{
                            'file-removed': (...args) => {
                                console.log('file removed', args)
                            }
                        },
                        rules: {
                            required: true,
                            uploaded: (val, config) => {
                                return Promise.all(val.map((file, i) => {
                                return new Promise((resolve, reject) => {
                                    if (file.uploadedUrl) {
                                    return resolve()
                                    }
                                    // fake request
                                    setTimeout(() => {
                                    if (i % 2) {
                                        reject(new Error())
                                    } else {
                                        file.uploadedUrl = 'uploaded/url'
                                        resolve()
                                    }
                                    }, 1000)
                                })
                                })).then(() => {
                                return true
                                })
                            }
                        },
                    },
                    {
                        type:'upload',
                        modelKey:'zgcard',
                        label:'资格证',
                        events:{
                            'file-removed': (...args) => {
                                console.log('file removed', args)
                            }
                        },
                        rules: {
                            required: true,
                            uploaded: (val, config) => {
                                return Promise.all(val.map((file, i) => {
                                return new Promise((resolve, reject) => {
                                    if (file.uploadedUrl) {
                                    return resolve()
                                    }
                                    // fake request
                                    setTimeout(() => {
                                    if (i % 2) {
                                        reject(new Error())
                                    } else {
                                        file.uploadedUrl = 'uploaded/url'
                                        resolve()
                                    }
                                    }, 1000)
                                })
                                })).then(() => {
                                return true
                                })
                            }
                        },
                    },                            
                    {
                        type:'upload',
                        modelKey:'zccard',
                        label:'职称证',
                        events:{
                            'file-removed': (...args) => {
                                console.log('file removed', args)
                            }
                        },
                        rules: {
                            required: true,
                            uploaded: (val, config) => {
                                return Promise.all(val.map((file, i) => {
                                return new Promise((resolve, reject) => {
                                    if (file.uploadedUrl) {
                                    return resolve()
                                    }
                                    // fake request
                                    setTimeout(() => {
                                    if (i % 2) {
                                        reject(new Error())
                                    } else {
                                        file.uploadedUrl = 'uploaded/url'
                                        resolve()
                                    }
                                    }, 1000)
                                })
                                })).then(() => {
                                return true
                                })
                            }
                        },
                    },
                    {
                        type: 'input',
                        modelKey:'phone',
                        props:{
                            placeholder:"手机号"
                        },
                        rules: {
                            required: true
                        },
                        trigger: 'blur'
                    },
                    {
                        type: 'input',
                        modelKey:'pwd',
                        props:{
                            placeholder:"验证码"
                        }
                    },
                    {
                        type: 'checkbox',
                        modelKey:'agree',
                        props:{
                            value: true
                        },
                        rules: {
                            required: true
                        }
                    }
                    
                ]

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
            setItem("identity",this.model.identity)
            if(this.model.identity==1){
                this.$router.push("/doconfig")
            }else if(this.model.identity==2){
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
.guize
    font-size $font-size-medium
.reg-btn
    display block
    margin 0 auto
.pwd-div
    position relative
    button
        position absolute
        right 0
        top 0
// .register-div
//     width 100%
//     position relative
//     height 100%
//     overflow-x hidden
//     .align-group
//         box-sizing border-box
//         width 100%
//         padding 10px
//         input:not([type="checkbox"])
//             height 25px 
//             width 60%
//             border 1px solid #333
//     .check-agree
//         font-size $font-size-small
//     .reg-btn
//         display block
//         margin 0 auto
</style>


