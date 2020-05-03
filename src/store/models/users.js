import Services from '@/services/Services'

export default {
    actions: {
        async fetchUsers(ctx) {
            const response = await Services.fetchUsers()
            const users = response.data.users
            ctx.commit('updateUsers', users)
        }
    },
    mutations: {
        updateUsers(state, users){
            state.users = users
        }
    },
    state: {
        users: []
    },
    getters: {
        allUsers(state){
            return state.users
        }
    }
}