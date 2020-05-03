<template lang="pug">
    li.user-item 
      h4.index # {{currentIndex}}
      img(class="photo" :src="userItem.photo_url") 
      h4.name Имя: {{userItem.name}} 
      h4.age Возраст: {{userItem.age}} 
      h4.area Область: {{userItem.area}} 
      h4.position Должность: {{userItem.position}}  
      h4.about О себе {{userItem.about}}
</template>
<script>
// @ is an alias to /src
// import UserList from '@/components/users/UserList.vue'

export default {
  name: 'UserItem',
  props: ['user', 'index'],
  data() {
    return {
      userItem: this.$props.user,
      currentIndex: this.$props.index      
    }
  }
//   components: {
//     UserList
//   }
}
</script>
<style lang="scss">
  .user-item {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    text-align: left;
    border-bottom: 2px solid;
    &:last-child {
      border-bottom: 0;
    }
    .photo {
      width: auto;
      height: auto;
      max-width: 400px;
      margin-bottom: 1.5em;
    }
  }
</style>