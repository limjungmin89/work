<template>
<div>
    <form id="search">
        Search <input name="query" v-model="searchQuery">
    </form>
    <GridTemp :data="gridData" :columns="gridColumns" :filter-key="searchQuery"></GridTemp>
    <TreeTemp :model="treeData"></TreeTemp>
    <ul>
        <TreeTemp2 :model="treeData"></TreeTemp2>
    </ul>
    <svg width="200" height="200">
      <polygraph :stats="stats"></polygraph>
    </svg>
    <div v-for="stat in stats" :key="stat.label">
      <label>{{stat.label}}</label>
      <input type="range" v-model="stat.value" min="0" max="100">
      <span>{{stat.value}}</span>
      <button @click="remove(stat)" class="remove">X</button>
    </div>
    <form id="add">
        <input name="newlabel" v-model="newLabel">
        <button @click="add">Add a Stat</button>
    </form>
    <pre id="raw">{{ stats }}</pre>
    
    <div class="left">
      <h1>{{ title }}</h1>
      <ul>
        <li v-for="(link, index) in links" :key="index">
          {{ link }}
        </li>
      </ul>
    </div>
    <div class="right">

    </div>
</div>    
</template>

<script>
import GridTemp from '@/components/GridTemp'
import TreeTemp from '@/components/TreeTemp'
import TreeTemp2 from '@/components/TreeTemp2'
import polygraph from '@/components/polygraph'
import {mapState} from 'vuex'

export default {
    data() {
        return {
            searchQuery: '',
            gridColumns: ['listNum', 'cdTitle', 'fileName', 'insertUserId', 'cdOrgName','updateDate'],
            gridData: [
                {
                listNum: 1,
                cdTitle: '테스트 공지1',
                fileName: 'log4j.xml',
                insertUserId: 'admin',
                cdOrgName: '시스템관리자',
                updateDate: '2018.01.01 01:01:01'
              },
              {
                listNum: 2,
                cdTitle: '테스트 공지2',
                fileName: 'log4j.xml',
                insertUserId: 'admin',
                cdOrgName: '시스템관리자',
                updateDate: '2018.02.02 02:02:02'
              },
              {
                listNum: 3,
                cdTitle: '테스트 공지3',
                fileName: 'log4j.xml',
                insertUserId: 'admin',
                cdOrgName: '시스템관리자',
                updateDate: '2018.03.03 03:03:03'
              },
              {
                listNum: 4,
                cdTitle: '테스트 공지4',
                fileName: 'log4j.xml',
                insertUserId: 'admin',
                cdOrgName: '시스템관리자',
                updateDate: '2018.12.06 14:08:00'
              },
              {
                listNum: 5,
                cdTitle: '테스트 공지5',
                fileName: 'log4j.xml',
                insertUserId: 'admin',
                cdOrgName: '시스템관리자',
                updateDate: '2018.12.06 14:08:00'
              }
            ],
            treeData: {
                name: 'Todos-client',
                children: [
                    { name: 'assets', 
                      children:[
                          {name: 'logo.png' }
                      ]
                    },
                    { name: 'components', 
                      children: [
                        { name: 'GridTemp.vue' },
                        { name: 'HelloVorld.vue' },
                        { name: 'TestMenu.vue' },
                        { name: 'TreeTemp.vue' }
                      ]
                    },
                    { name: 'router',
                      children: [
                        { name: 'index.js' }
                      ]
                    }
                ]
            },
            newLabel: '',
            stats: [
              { label: 'A', value: 100 },
              { label: 'B', value: 100 },
              { label: 'C', value: 100 },
              { label: 'D', value: 100 },
              { label: 'E', value: 100 },
              { label: 'F', value: 100 }
            ]
        }
    },
    methods: {
      add: function (e) {
        e.preventDefault()
        if (!this.newLabel) return
        this.stats.push({
          label: this.newLabel,
          value: 100
        })
        this.newLabel = ''
      },
      remove: function (stat) {
        if (this.stats.length > 3) {
          this.stats.splice(this.stats.indexOf(stat), 1)
        } else {
          alert('Can\'t delete more!')
        }
      }
    },
    components: {
        GridTemp,
        TreeTemp,
        TreeTemp2,
        polygraph
    },
    computed: {
      ...mapState([
        'title',
        'links'
      ])
    }
}

</script>

<style>

</style>
