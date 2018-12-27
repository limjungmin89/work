<template>
<div>
    <g>
      <polygon :points="points"></polygon>
      <circle cx="100" cy="100" r="80"></circle>
      <axis-label
        v-for="(stat, index) in stats" v-bind:key="stat.label"
        :stat="stat"
        :index="index"
        :total="stats.length">
      </axis-label>
    </g>
</div>
</template>

<script>
import AxisLabel from '@/components/AxisLabel'

export default {
  props: ['stats'],
  computed: {
    points: function () {
        var total = this.stats.length
        return this.stats.map(function (stat, i) {
          var point = valueToPoint(stat.value, i, total)
          return point.x + ',' + point.y
        }).join(' ')
      }
  },
  components: {
    AxisLabel
  }
}

function valueToPoint (value, index, total) {
  var x     = 0
  var y     = -value * 0.8
  var angle = Math.PI * 2 / total * index
  var cos   = Math.cos(angle)
  var sin   = Math.sin(angle)
  var tx    = x * cos - y * sin + 100
  var ty    = x * sin + y * cos + 100
  return {
    x: tx,
    y: ty
  }
}
</script>

<style>
body {
    font-family: Helvetica Neue, Arial, sans-serif;
}

polygon {
    fill: #42b983;
    opacity: .75;
}

circle {
    fill: transparent;
    stroke: #999;
}

text {
    font-family: Helvetica Neue, Arial, sans-serif;
    font-size: 10px;
    fill: #666;
}

label {
    display: inline-block;
    margin-left: 10px;
    width: 20px;
}

#raw {
    
    top: 0;
    left: 300px;
}
</style>
