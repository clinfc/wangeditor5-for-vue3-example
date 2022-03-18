<template>
  <el-container class="page">
    <el-aside class="page-aside" width="200px">
      <el-menu active-text-color="#ffd04b" background-color="#545c64" default-active="2" text-color="#fff" router>
        <template v-for="item in menus" :key="item.path">
          <el-menu-item :index="item.path">
            <span>{{ item.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>
    <el-main class="page-main">
      <div class="page-main__content">
        <h2>{{ title }}</h2>
        <u-scroll scroll-x scroll-y>
          <router-view />
        </u-scroll>
      </div>
    </el-main>
  </el-container>
  <u-tools />
</template>

<script lang="ts">
  import { Menus } from '@router/router'
  import { computed, defineComponent } from 'vue'
  import { useRoute } from 'vue-router'
  import UScroll from './components/u-scroll.vue'
  import UTools from './components/u-tools.vue'

  export default defineComponent({
    components: { UScroll, UTools },
    setup() {
      const route = useRoute()

      const title = computed(() => Menus.find(({ path }) => path == route.path)?.title || '')

      return { title, menus: Menus }
    },
  })
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }
  .page {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;
    &-aside {
      height: 100%;
      .el-menu {
        height: 100%;
      }
    }
    &-main {
      flex-grow: 1;
      height: 100%;
      overflow: hidden;
      &__content {
        width: 800px;
        height: 100%;
        margin: auto;
        overflow: hidden;
        h2 {
          border-bottom: 1px solid #ccc;
          padding-bottom: 10px;
          margin-top: 0;
          margin-bottom: 30px;
          color: #999;
        }
      }
    }
  }
  .toolbar {
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
  }
  .editable {
    border: 1px solid #e5e5e5;
    border-top: none;
    height: 300px;
    box-sizing: border-box;
  }
</style>
