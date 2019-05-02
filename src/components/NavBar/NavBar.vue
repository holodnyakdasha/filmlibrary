<template lang="pug">
    header
      .navbar
        .container
          .navbar-content
            router-link.header-logo(
            to="/"
            ) Film library
            .button-burger(
            @click="menuShow = !menuShow"
              :class="{ active: menuShow }"
            )
              span.line.line-1
              span.line.line-2
              span.line.line-3
              span.line.line-4
          .navbar-list__wrapper(
          :class="{ active: menuShow }"
          )
            ul.navbar-list
              li.navbar-item(
              v-for="link in linkMenu"
                :key="link.title"
                @click="menuShow = false"
              )
                router-link.navbar-link(
                :to="`${link.url}`"
                ) {{ link.title }}
              li.navbar-item(
                v-if="checkUser"
                @click="logout"
              )
                span.navbar-link Log out

</template>


<script>
  export default {
    data(){
      return {
        menuShow: false,
      }
    },
    methods: {
        logout(){
            this.$store.dispatch('logoutUser')
            this.$router.push('/login')
        }
    },
    computed: {
      checkUser(){
        return this.$store.getters.checkUser
      },
      linkMenu(){
        if (this.checkUser) {
          return [
            {title: 'Home', url: '/'},
            {title: 'Tasks', url: '/tasks'}
          ]
        }
        return [
          {title: 'Login', url: '/login'},
          {title: 'Registration', url: '/registration'}
        ]

      }
    }
  }
</script>

<style lang="stylus">

  #app
    padding 10px
</style>
