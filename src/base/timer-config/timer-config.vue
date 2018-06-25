<template>
    <div class="timer-cfg">
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>周一</th>
                    <th>周二</th>
                    <th>周三</th>
                    <th>周四</th>
                    <th>周五</th>
                    <th>周六</th>
                    <th>周日</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>上午</td>
                    <td>
                        <input type="radio" name="sm1" id="">上门
                        <br>
                        <input type="radio" name="sm1" id="">门诊
                    </td>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>下午</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>夜间</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
.timer-cfg
    width 100%
    font-size 14px
    table
        width 100%
        tr,th,td
            border 1px solid #333333
        th,td
            padding 5px
        
    
</style>


