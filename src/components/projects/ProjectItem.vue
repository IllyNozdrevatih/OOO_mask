<template lang="pug">
    li.project-item
      h4.index # {{currentIndex}}
      img(class="photo" :src="projectItem.photo_url")
      h4.supervisor Руководитель: {{projectItem.main}} 
      h4.supervisor Наставники: {{projectItem.supervisor}} 
      h4.title Название: {{projectItem.title}} 
      h4.level Уровень проекта: {{projectItem.level}} 
      h4.part_money Шкала заполнения сбора средств на проект: {{projectItem.part_money}} %
      div(class="scale")
        div(class="scale-loader" :style="{width: projectItem.part_money + '%'}")
      div.about 
        h3.about-title краткя информация: 
        p {{projectItem.about}}
      router-link(class="link" :to="{name: 'SingleProject', params:{id: projectItem._id }}") 
        | Подробнее
</template>
<script>

export default {
  name: 'ProjectItem',
  props: ['project', 'index'],
  data() {
    return {
      projectItem: this.$props.project,
      currentIndex: this.$props.index,
    }
  },
  watch: { 
    project: function() {
      this.projectItem = this.$props.project
    }
  }
}
</script>
<style lang="scss">
  .project-item {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    text-align: left;
    border-bottom: 2px solid;
    .link {
      margin: 0 !important;
    }
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