<template lang="pug">
  #app
    .container
      #nav
        router-link(:to="{name: 'Projects'}") 
          | Проекты
        router-link(:to="{name: 'Users'}") 
          | Пользователи
        router-view
    .footer
      .copyright
        .container
          p Develop by Illy Nozdrevatih
          p Gmail: noz220399@gmail.com
          p Skype: noz220399@gmail.com
          p 
            a(href="https://www.linkedin.com/in/illia-nozdrevatykh-5b8315184/") linkedin
</template>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  font-size: 24px;
  @media (min-width: 1200px) { 
    font-size: 22px;
  }
  @media (max-width: 991px) { 
    font-size: 20px;
  }
  @media (max-width: 767px) { 
    font-size: 18px
  }
  @media (max-width: 575px) { 
    font-size: 16px;
  }
}

h4 {
  margin-top: .7em;
  margin-bottom: .7em;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  max-width: 1000px;
  padding: 0 15px;
  margin: 0 auto;
}

#nav {
  padding: 30px;

  a {
    margin: 0 15px;
    text-decoration: unset;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.copyright {
  padding: 15px 0;
  text-align: left;
  color: #42b983;
  background-color: #2c3e50;
  a {
    color: #007bff;
  }
}
</style>
