<template>
  <div class="tools">
    <el-tooltip placement="left" content="GitHub" trigger="hover">
      <a :href="base" target="_block">
        <img src="@assets/github.svg" alt="GitHub" />
      </a>
    </el-tooltip>
    <div class="interval"></div>
    <el-tooltip placement="left" content="当前示例的源文件" trigger="hover">
      <a :href="link" target="_block">
        <img src="@assets/source.svg" alt="GitHub" />
      </a>
    </el-tooltip>
    <div class="interval"></div>
    <el-tooltip placement="left" content="使用文档" trigger="hover">
      <a :href="docs" target="_block">
        <img src="@assets/docs.svg" alt="Docs" />
      </a>
    </el-tooltip>
  </div>
</template>

<script lang="ts">
  import { ComponentFiles } from '@router/router'
  import { BASE_URL } from '../../env'
  import { defineComponent, ref, watch } from 'vue'
  import { useRoute } from 'vue-router'

  export default defineComponent({
    name: 'github',
    setup() {
      const route = useRoute()

      const link = ref('')

      const docs = ref('https://clinfc.github.io/wangeditor5-for-vue3/')

      const base = ref(`https://github.com/clinfc${BASE_URL}`.replace(/\/$/, ''))

      watch(
        () => route.path,
        (nv) => {
          const file = ComponentFiles.get(nv)

          link.value = file ? `${base.value}/tree/main${file}` : base.value
        },
        { immediate: true }
      )

      return { link, base, docs }
    },
  })
</script>

<style lang="scss">
  .tools {
    position: fixed;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    padding: 10px;
    box-shadow: 0 2px 12px 0 #e5e5e5;
    border-radius: 3px;
    background-color: #fff;
    a {
      display: block;
      width: 30px;
      height: 30px;
      color: #999;
      padding: 10px;
      border-radius: 3px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .interval {
      border-bottom: 2px solid #efefef;
    }
  }
</style>
