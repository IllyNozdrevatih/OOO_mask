import Services from '@/services/Services'

export default {
    actions: {
        async fetchProjects(ctx) {
            const response = await Services.fetchProjects()
            const projects = response.data.projects
            ctx.commit('updateProjects', projects)
        },
        async fetchSingleProject(ctx, pojectId) {
            const response = await Services.getProject({
                id: pojectId
            })
            
            const projects = response.data.user
            ctx.commit('updateProjects', projects)
        },
        async filteredProjects(ctx, ops) {
            const response = await Services.fetchProjects()
            let projects = response.data.projects

            if (ops.level !== 'Все') {
                projects = projects.filter(p => p.level  === ops.level)
            } 
            
            const newProducts = []
            projects.map(p => {
                if (p.title.search(ops.title) !== -1) {
                    newProducts.push(p)
                }
            })
            projects = newProducts

            ctx.commit('updateProjects', projects)
        }
    },
    mutations: {
        updateProjects(state, projects){
            state.projects = projects
        }
    },
    state: {
        projects: []
    },
    getters: {
        allProjects(state){
            return state.projects
        }
    }
}