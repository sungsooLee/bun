<script setup lang="ts">
import { ElButton, ElCard, ElTag, ElMessage } from 'element-plus'
import { CircleCheckFilled, Connection, MagicStick } from '@element-plus/icons-vue'

const checklist = [
  { label: 'Vue 3 + TypeScript ready', icon: CircleCheckFilled },
  { label: 'Element Plus globally registered', icon: Connection },
  { label: 'Tailwind CSS configured', icon: MagicStick },
]

const notify = () => {
  ElMessage.success('페이지 기반 자동 라우팅이 준비되었습니다!')
}
</script>

<template>
  <section class="space-y-8">
    <header class="space-y-2">
      <p class="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
        src/pages/index.vue
      </p>
      <h1 class="text-3xl font-bold leading-tight text-slate-900 lg:text-4xl">
        Element Plus + Tailwind starter
      </h1>
      <p class="text-base text-slate-500">
        Opinionated baseline with Vue 3, Element Plus components, Tailwind utility classes, and Bun tooling.
      </p>
    </header>

    <div class="flex flex-wrap gap-3">
      <ElButton type="primary" size="large" @click="notify">Show toast</ElButton>
      <ElButton type="success" plain>Secondary action</ElButton>
      <ElButton type="info" link href="https://element-plus.org/" target="_blank">
        Element Plus docs
      </ElButton>
    </div>

    <section class="grid gap-6 md:grid-cols-2">
      <ElCard shadow="hover" class="border-slate-200">
        <template #header>
          <div class="font-semibold text-slate-800">Element Plus</div>
        </template>
        <p class="mb-4 text-sm text-slate-500">
          Use the entire Element Plus component suite via standard imports or auto-import tooling.
        </p>
        <div class="space-x-2">
          <ElTag type="info">Dark mode ready</ElTag>
          <ElTag type="warning">Tree-shakeable</ElTag>
          <ElTag type="success">Vue 3 only</ElTag>
        </div>
      </ElCard>

      <ElCard shadow="hover" class="border-slate-200">
        <template #header>
          <div class="font-semibold text-slate-800">Tailwind CSS</div>
        </template>
        <p class="mb-4 text-sm text-slate-500">
          Tailwind directives are injected in <code>src/style.css</code> so you can start composing layouts instantly.
        </p>
        <ElButton type="primary" text href="https://tailwindcss.com/docs/installation" target="_blank">
          Tailwind docs →
        </ElButton>
      </ElCard>
    </section>

    <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div class="mb-5 flex items-center justify-between">
        <div>
          <p class="text-sm font-semibold text-emerald-600">Environment check</p>
          <h2 class="text-xl font-bold text-slate-900">What’s ready to go</h2>
        </div>
        <ElTag type="success" effect="dark">All good</ElTag>
      </div>
      <ul class="space-y-4">
        <li
          v-for="item in checklist"
          :key="item.label"
          class="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-3"
        >
          <component :is="item.icon" class="text-emerald-500" />
          <span class="font-medium text-slate-800">{{ item.label }}</span>
        </li>
      </ul>
    </section>
  </section>
</template>

