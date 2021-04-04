const state = {
    user: null
}

//mutations
const mutations = {
    saveUser(state, {username, id}) {
        state.user = {username, id}
    },
    deleteUser(state) {
        state.user = null  //重置state中的状态user即可
    }
}

export default {
    namespaced: true,
    state,
    mutations
}