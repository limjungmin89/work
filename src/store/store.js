import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title : 'My Custom Title',
        links : [
            'www.naver.com',
            'www.daum.net',
            'www.google.com'
        ]
    },
    mutations: {
    }
})