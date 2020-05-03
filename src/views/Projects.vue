<template lang="pug">
  .project-page
    h1 {{title}}
    ProjectsList 
</template>

<script>
import ProjectsList from '@/components/projects/ProjectsList.vue'

export default {
  name: 'Projects',
  data () {
    return {
      title:'Проекты'
    }
  },
  components: {
    ProjectsList
  }
}
</script>
