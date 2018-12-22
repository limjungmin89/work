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
            gridColumns: ['name', 'power'],
            gridData: [
                { name: 'Chuck Norris', power: Infinity },
                { name: 'Bruce Lee', power: 9000 },
                { name: 'Jackie Chan', power: 7000 },
                { name: 'Jet Li', power: 8000 }
            ]
        }
    },
    components: GridTemp
}
</script>

<style>

</style>
