<template>
    <!--医生首页 -->
    <div class="top-box">
        <p-header></p-header>
        <div class="now-list">
            <cube-index-list
            :data="listData"
            @select="selectItem"></cube-index-list>
        </div>
    </div>
</template>
<script>
import PHeader from 'components/m-header/p-header'

const listData = [
  {
    "name": "★Hot City",
    "items": [
      {
        "name": "BEIJING",
        "value": 1
      },
      {
        "name": "SHANGHAI",
        "value": 2
      }
    ]
  },
  {
    "name": "A",
    "items": [
      {
        "name": "ANSHAN",
        "value": 3
      },
      {
        "name": "ANQING",
        "value": 4
      }
    ]
  }
]
export default {
    data(){
        return {
            listData:listData
        } 
    },
    methods:{
        selectItem(item) {
            console.log(item.name)
        },
    },
    components:{
        PHeader
    }
}
</script>
<style lang="stylus" scoped>
.top-box
    width 100%
    .now-list
        width 100%
        position fixed
        top 110px
        bottom 0
</style>


