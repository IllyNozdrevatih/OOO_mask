<template lang="pug">
  .single-project
    h2 {{allProjects.title}} 
    .project-item.center
        img(class="photo" :src="allProjects.photo_url")
        h4.supervisor Руководитель: {{allProjects.main}} 
        h4.supervisor Наставники: {{allProjects.supervisor}} 
        h4.part_money Шкала заполнения сбора средств на проект: {{allProjects.part_money}} %
        div(class="scale")
          div(class="scale-loader" :style="{width: allProjects.part_money + '%'}")
        div.about 
        h3.about-title краткя информация: 
        p {{allProjects.about}}
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ProjectItem',
  methods: {
      ...mapActions(['fetchSingleProject']),
  },
  async mounted () {
      this.fetchSingleProject(this.$attrs.id)
  },
  computed: mapGetters(['allProjects']),
}
</script>
<style lang="scss">
  .project-item.center {
    text-align: center;
  }
</style>