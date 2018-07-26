<template>
    <scroll @scroll="scroll"
            :data="ldata"
            class="listview"
            ref="listview"
            :probe-type="probeType"
            :listen-scroll="listenScroll"
            >
        <ul>
            <li v-for="(group,index) in ldata" class="list-group" ref="listGroup" :key="index">
                <h2 class="list-group-title">{{group.dname}}</h2>
                <ul v-if="cardType==1 && index<(ldata.length-1)">
                    <li @click="selectItem(item)" v-for="(item,index) in group.items" class="list-group-item" :key="index">
                        <card :cardType="cardType" :cardData="item"></card>
                    </li>
                </ul>
                <ul v-else>
                    <li @click="selectItem(item)" v-for="(item,index) in group.items" class="list-group-item" :key="index">
                        <card :cardType="cardType" :cardData="item"></card>
                    </li>
                </ul>
                <div class='jb-card' v-if="(cardType==2 || cardType==1) && index===(ldata.length-1)">
                    <!-- <timer-config :tableType="tableType" :tableData="group.mz" :dataTimes="group.times"></timer-config> -->
                    <router-link :to='`/report`' tag="button" style="margin:10px">查看本周简报</router-link>
                </div>
            </li>
        </ul>
        <div class="list-shortcut">
            <ul>
                <li v-for="(item,index) in shortcutList" 
                    :data-index="index" 
                    class="item" 
                    :key="index"
                    :class="{'current':currentIndex===index}"
                    @touchstart.stop.prevent = "onShortcutTouchstart"
                    @touchmove.stop.prevent = "onShortcutTouchmove"
                    >{{item}}</li>
            </ul>
        </div>
        <div class="list-fixed" ref="fixed" v-show="fixedTitle">
            <div class="fixed-title">{{fixedTitle}} </div>
        </div>
        <div v-show="!ldata.length" class="loading-container">
            <loading></loading>
        </div>
    </scroll>
</template>
<script>
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
import TimerConfig from 'base/timer-config/timer-config'
import Card from 'base/card/card'
// 导航字母的高度
const ANCHOR_HEIGHT = 30

// 字母标题的高度
const TITLE_HEIGHT = 30
export default {
    props:{
        ldata:{
            type:Array,
            default:function(){
                return []
            }
        },
        cardType:[String,Number],
        default:1
    },
    data(){
        return {
            tableType:3,
            // 当前区域
            currentIndex:0,
            // 滚动的Y值
            scrollY:-1,
            diff:-1,
        }
    },
    created(){
        // 若放在data中的会被vue添加一个监听（getter,setter）
        this.probeType = 3
        this.listenScroll = true
        this.touch = {}
        this.listHeight = []
        
    },
    computed:{
        shortcutList(){
            return this.ldata.map((item)=>{
                return item.zname
            })
        },
        // 固定导航
        fixedTitle(){
            // if(this.scrollY>0){
            //     return ''
            // }
            return this.scrollY <= -TITLE_HEIGHT && this.ldata[this.currentIndex]?this.ldata[this.currentIndex].dname:''
        }
    },
    methods:{
        selectItem(item){
            this.$emit('select',item)
        },
        onShortcutTouchstart(e){
            let anchorIndex = e.target.dataset.index
            let firstTouch = e.touches[0]
            this.touch.y1 = firstTouch.pageY
            this.touch.anchorIndex = anchorIndex
            this._scrollTo(anchorIndex)
        },
        onShortcutTouchmove(e){
            let firstTouch = e.touches[0]
            this.touch.y2 = firstTouch.pageY
            let delta = (this.touch.y2 - this.touch.y1)/ANCHOR_HEIGHT | 0
             let anchorIndex = parseInt(this.touch.anchorIndex) + delta 
             this._scrollTo(anchorIndex)
        },
        scroll(pos){
            this.scrollY = pos.y
        },
        _calculateHeight(){
        // 每个listGroup的高度（其实不是高度，应该叫to top height 合适点） 
          this.listHeight=[]
          const list = this.$refs.listGroup
          let height = 0
          this.listHeight.push(height)
          for(let i = 0;i<list.length;i++){
              let item = list[i]
              height += item.clientHeight
              this.listHeight.push(height)
          }
      },
        _scrollTo(index){
            // 不存在判断
            if(!index && index !== 0){
                return
            }
            // 边界值判断
            if(index<0){
                index = 0
            }else if(index>this.listHeight.length -2){
                index = this.listHeight.length - 2
            }

            this.scrollY = -this.listHeight[index]
            this.$refs.listview.scrollToElement(this.$refs.listGroup[index],0)
        }
    },
    watch:{
        ldata(){
            setTimeout(()=>{
            this._calculateHeight()
            },20)
        },
        scrollY(newY){
            const listHeight = this.listHeight
             
            // 滚动到顶部 newY>0
            if(newY>0){
                this.currentIndex = 0
                
                return
            }
            // 在中间滚动
            for(let i = 0;i<listHeight.length-1;i++){
                let h1 = listHeight[i]
                let h2 = listHeight[i+1]
                if(-newY >= h1 && -newY < h2){
                    this.currentIndex = i
                    // 新值 - 下限 = 与title的差值
                    this.diff = h2 + newY
                    return
                }
            }

            // 当滚动到底部
            this.currentIndex = listHeight.length-1
           
            

        },
        diff(newVal){
            let fixedTop = (newVal>0 && newVal<TITLE_HEIGHT)?newVal - TITLE_HEIGHT : 0
            if(this.fixedTop === fixedTop){
                return
            }
            this.fixedTop = fixedTop
            this.$refs.fixed.style.transform = `translate3d(0,${fixedTop}px,0)`
        }
    },
    components:{
        Scroll,
        Loading,
        TimerConfig,
        Card
    }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'

.listview
    position relative
    width 100%
    height 100%
    overflow hidden
    background-color $color-background
    .list-group
        padding-bottom 30px
        .list-group-title
            display block
            width calc(100% - 100px)
            height 30px
            line-height 30px
            padding-left 20px
            font-size $font-size-small
            color: $color-text-l
            background: $color-highlight-background
        .list-group-item
            display flex
            align-items center
            padding-top 20px
            padding-left 20px
            .avatar
                width: 50px
                height: 50px
                border-radius: 50%
            .name
                margin-left: 20px
                color: $color-text-l
                font-size: $font-size-medium
        .todo-card
            width calc(100% - 100px)
            box-sizing border-box
            border 1px solid #333333
            position relative
            display flex
            padding 10px 15px
            justify-content space-around
            .todo-l
                font-size 14px
                line-height 1.5
            .todo-r
                .todo-bg 
                    width 90px
                    height 90px
                    background-position center
                    background-size cover
                    background-repeat no-repeat
            .todo-status
                width 30px
                height 30px
                font-size: 12px
                border-radius 50%
                line-height 30px
                position absolute
                top 45px
                left -15px
                text-align center
                background-color green 
                color #ffffff
        .jb-card
            width calc(100% - 55px)
    .list-shortcut
        position absolute
        z-index 30
        right 0
        top 5%
        width 50px
        padding 20px 0
        border-left 5px solid $color-background-d
        text-align center
        background #ffffff
        font-family Helvetica
        .item
            padding 3px
            line-height 2
            color $color-text-d
            font-size $font-size-small
            &.current
                color: red
    .list-fixed
        position absolute
        top 0
        left 0
        width 100%
        .fixed-title
            width calc(100% - 100px)
            height 30px
            line-height 30px
            padding-left 20px
            font-size: $font-size-small
            color: $color-text-l
            background: $color-highlight-background
    .loading-container
        position absolute
        width 100%
        top 50%
        transform translateY(-50%)

</style>

