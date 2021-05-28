<template>
  <div id="app">
    <ul class="nav">
      <li><router-link to="/" @click="window.location.reload()">TODO-APP</router-link></li>
    </ul>
      <br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .flex-center {
    display: flex;
    justify-content: center;
  }
  .nav {
    display: flex;
    list-style: none;
    padding: 15px 0;
    margin: 0;
    justify-content: center;
    background: #F5F8FA;
    border-bottom: 1px solid lightgrey;
    margin-bottom: 24px;
  }
  .nav a {
    color: #636b6f;
    padding: 0 25px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
</style>