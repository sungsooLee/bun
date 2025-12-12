<script setup lang="ts">
import { ElTimeline, ElTimelineItem, ElAlert } from 'element-plus'

const timeline = [
  { label: 'Scaffold project with Bun + Vite', color: 'green', time: 'Step 1' },
  { label: 'Configure Tailwind + Element Plus', color: 'blue', time: 'Step 2' },
  { label: 'Add file-based routing via src/pages', color: 'purple', time: 'Step 3' },
]
</script>

<template>
  <section class="space-y-6">
    <header class="space-y-2">
      <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">src/pages/about.vue</p>
      <h1 class="text-3xl font-bold">About this starter</h1>
      <p class="text-base text-slate-500">
        Auto-generated routes are powered by Vite의 <code>import.meta.glob</code>. Drop new `.vue` files into
        <code>src/pages</code> and they are instantly available.
      </p>
    </header>

    <ElAlert title="This is a second route!" type="success" show-icon />

    <ElTimeline>
      <ElTimelineItem v-for="item in timeline" :key="item.label" :color="item.color" :timestamp="item.time">
        {{ item.label }}
      </ElTimelineItem>
    </ElTimeline>
  </section>
</template>

