import Vue from 'vue'
import Vuex from 'vuex'

import serverInfo from './modules/serverInfo'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        serverInfo
    }
})
