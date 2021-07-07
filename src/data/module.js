import {getData} from './service'

const data = {
}

const mutations = {
    GET_DATA: (state, res) => {
        state.data = {
            id : [],
            count : [],
            average : []
        }
        res.values.forEach(element => {
            state.data.id.push(element.id)
            state.data.count.push(element.count)
            state.data.average.push(element.average)
        })
    }
}

const actions = {
    getData: async (store, id) => {
        const data = await getData(id)
        store.commit('GET_DATA', data)
    }
}

const getters = {
    data: state => state.data
}

export default {
    state: () => ({data}),
    mutations: mutations,
    actions: actions,
    getters: getters,
}