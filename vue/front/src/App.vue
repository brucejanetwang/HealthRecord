<template>
  <div id="app">
    <div class="tabs">
      <ul>
        <li>
          <router-link  :to="{name:'Home'}">
            <div>home</div>
          </router-link>
        <router-link :to="{name:'Health'}">
            <div>健康</div>
          </router-link>
          <router-link :to="{name:'History'}">
            <div>历史</div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
 import "./tabs.less"
export default {
  
}
</script>