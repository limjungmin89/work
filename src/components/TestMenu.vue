<template>
<div>
    <h1>TEST 그리드 안나오냐 왜</h1>
    <GridTemp :data="gridData" :columns="gridColumns" :filter-key="searchQuery"></GridTemp>
</div>    
</template>

<script>
import GridTemp from '@/components/GridTemp'

export default {
    data() {
        return {
            searchQuery: '',
            gridColumns: ['listNum', 'cdTitle','fileName','insertUserId','cdOrgName','updateDate'],
            gridData: [
                {
                listNum: 1,
                cdTitle: "테스트 공지1",
                fileName: "log4j.xml",
                insertUserId: "admin",
                cdOrgName: "시스템관리자",
                updateDate: "2018.01.01 01:01:01" 
              },
              {
                listNum: 2,
                cdTitle: "테스트 공지2",
                fileName: "log4j.xml",
                insertUserId: "admin",
                cdOrgName: "시스템관리자",
                updateDate: "2018.02.02 02:02:02" 
              },
              {
                listNum: 3,
                cdTitle: "테스트 공지3",
                fileName: "log4j.xml",
                insertUserId: "admin",
                cdOrgName: "시스템관리자",
                updateDate: "2018.03.03 03:03:03" 
              },
              {
                listNum: 4,
                cdTitle: "테스트 공지4",
                fileName: "log4j.xml",
                insertUserId: "admin",
                cdOrgName: "시스템관리자",
                updateDate: "2018.12.06 14:08:00" 
              },
              {
                listNum: 5,
                cdTitle: "테스트 공지5",
                fileName: "log4j.xml",
                insertUserId: "admin",
                cdOrgName: "시스템관리자",
                updateDate: "2018.12.06 14:08:00" 
              }
            ]
        }
    },
    components: {
        GridTemp
    }
}
</script>

<style>

</style>
