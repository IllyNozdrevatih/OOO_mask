<template lang="pug">
  .projects-list-wrap
      .projects-filters
        .search
          h4 Поиск по названию проекта
          input(type="search" @change="filterBy" v-model="title")
        .filter
          h4 Фильтр по уровню проекта
          select(v-model="level" @change="filterBy")
            option(value="Все" selected) Все
            option(value="Большой") Большой
            option(value="Средний") Средний
            option(value="Маленький") Маленький
      ul.projects-list
        ProjectItem( v-for="(project, index) in allProjects", :key="index" :project="project" :index="index")
  </div>
</template>

<script>
import ProjectItem from '@/components/projects/ProjectItem.vue'
import { mapActions, mapGetters } from 'vuex'

export default {  
  name: 'ProjectList',
  components: {
    ProjectItem
  },
  data(){
    return {
      level: 'Все',
      title: ''
    }
  },
  methods: {
    ...mapActions(['fetchProjects', 'filteredProjects']),
    filterBy(){
      const ops = {
        'level': this.level,
        'title': this.title
      }
      this.filteredProjects(ops)
    }    
  },
  computed: mapGetters(['allProjects']),
  async mounted () {
    this.fetchProjects()
  }
}
</script>
<style lang="scss">
  .search input, .filter select {
    font-size: 1em;
  }
  .projects-list {
    padding: 0;
  }
  .users-list {
    padding: 0;
  }
  .project-item {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    text-align: left;
    border-bottom: 2px solid;
    &:last-child {
      border-bottom: 0;
    }
    .photo {
      max-width: 100%;
      margin-bottom: 1.5em;
    }
    .scale {
      height: 2em;
      border-radius: 2em;
      width: 100%;
      position: relative;
      overflow: hidden;
      z-index: 1;
      background-color: #2c3e50;
      .scale-loader {
        border-radius: 2em;
        z-index: 0;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #42b983;
      }
    }
  }
</style>