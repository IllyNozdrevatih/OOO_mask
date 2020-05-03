<template lang="pug">
  .users-page
    h1 {{title}}
    UserList
</template>

<script>
// @ is an alias to /src
import UserList from '@/components/users/UserList.vue'

export default {
  name: 'Users',
  components: {
    UserList
  },
  data(){
    return {
      title: 'Пользователи'
    }
  },
}
</script>
