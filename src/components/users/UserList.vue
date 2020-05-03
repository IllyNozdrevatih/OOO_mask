<template lang="pug">
  .users-list-wrap
      ul.users-list
        UserItem( v-for="(user, index) in allUsers", :key="index" :user="user" :index="index")
  </div>
</template>

<script>
import UserItem from '@/components/users/UserItem.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  
  name: 'UsersList',
  components: {
    UserItem
  },
  methods: {
    ...mapActions(['fetchUsers']),
  },
  computed: mapGetters(['allUsers']),
  async mounted () {
    this.fetchUsers()
  }
}
</script>
<style lang="scss">
  .users-list {
    padding: 0;
  }
</style>