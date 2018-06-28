<template>
  <div class="patient-box">
       <m-header title="患者列表"></m-header>
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
      patient:[]
    }
  },
  created(){
    setTimeout(()=>{
        this.patient = mock_patient
    },20)
  },
  methods:{
      select(item){
          console.log(item)
      }
  },
  components:{
    ListViewp,
    MHeader
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.patient
  position fixed
  top 55px
  bottom 0
  width 100%
</style>