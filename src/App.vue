<template>


  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://www.naver.com/">NAVER</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="https://blog.naver.com/dbfwjs991105">블로그 홈</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/list">프롤로그</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">카테고리</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">이웃 블로그</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<router-link to="/list">리스트페이지</router-link>
<p></p>
<router-link to="/home">홈페이지</router-link>

<div>
  <router-view :블로그글="블로그글"></router-view>
</div>

</template>

<script>
// import PageList from "./components/PageList.vue";
import blog from "./assets/blog.js";

export default {
  name: 'App',
  data(){
    return{
      블로그글 : blog
    }
  },
  components: {
    // PageList : PageList,
    
  },
}
</script>

<style>
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>