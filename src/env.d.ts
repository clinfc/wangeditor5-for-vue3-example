/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'article.json' {
  import { Descendant } from 'slate'
  interface Article {
    title: string
    content: Descendant[]
  }
  const articles: Article[]
  export default articles
}

interface ImportMetaEnv {
  readonly VITE_BASE: string
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}
