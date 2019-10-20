<template>
  <div id="app">
    <div class="tabs">
      <ul>
        <li>
          <router-link :to="{name: 'Home'}">
            <div>home</div>
          </router-link>
          <router-link :to="{name: 'Health'}">
            <div>health</div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>