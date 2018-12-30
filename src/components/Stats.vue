<template>
  <div class="stats">
    <h1> 다른 컴포넌트 </h1>
    <P>현재 링크의 카운트 : {{countLinks}}</P>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'stats',
  computed: {
    ...mapGetters(['countLinks'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
