<template>
  <div class="patient-box">
       <m-header title="患者列表"></m-header>
       <div class="patient-type">
         <div class="jt-type" :class="{active:isjt}" @click="isjt=true">家庭患者</div>
         <div class="pt-type" :class="{active:!isjt}" @click="isjt=false">普通患者</div>
       </div>
       <div class="patient" ref="patient">
            <list-viewp :ldata="patient" @select="select"></list-viewp>
        </div>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import ListViewp from 'base/listview/listView_person'
import {mock_patient} from 'mock/mock_patient'

export default {
  data(){
    return {
      patient:[],
      isjt:true
    }
  },
  created(){
    setTimeout(()=>{
        this.patient = mock_patient
    },20)
  },
  methods:{
      select(item){
          this.$router.push("/list/"+item.id)
      }
  },
  components:{
    ListViewp,
    MHeader
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.patient-type
  height 50px
  width 100%
  display flex 
  margin-top 5px
  div
    line-height 50px
    text-align center
    width 50%
    box-sizing border-box
    &:first-child
      border-right 1px solid #333
  .active
    background-color #eeeeee
.patient
  position fixed
  top 110px
  bottom 0
  width 100%

</style>