<template>
  <div class="stats">
    <h1> 다른 컴포넌트 </h1>
    <P>현재 링크의 카운트 : {{countLinks}}</P>
    <p>{{msg}}</p>
    <button v-on:click="removeAllLinks">링크 전체 삭제</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: 'stats',
  data(){
    return{
      msg: ''
    }
  },
  computed: {
    ...mapGetters(['countLinks'])
  },
  methods: {
    ...mapMutations(['REMOVE_ALL']),
    ...mapActions({removeAllLink:'removeAll'}),
    removeAllLinks(){
      this.removeAllLink().then( () => {
        this.msg = '모든 링크가 삭제되었습니다.'
      })
      //this.removeAllLink()
      //this.$store.commit('REMOVE_ALL')
    }
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
