<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { House, InfoFilled } from '@element-plus/icons-vue'
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <header
      class="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-slate-200 shadow-sm"
    >
      <div class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-6">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Bun • Vue 3 • Pages router</p>
          <h1 class="text-2xl font-bold leading-tight text-slate-900">Element Plus + Tailwind Starter</h1>
        </div>
        <nav class="flex gap-2 text-sm font-medium text-slate-600">
          <RouterLink
            to="/"
            class="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-2 transition hover:border-emerald-200 hover:text-emerald-600"
            active-class="border-emerald-400 bg-emerald-50 text-emerald-700"
          >
            <House class="text-lg" />
            Home
          </RouterLink>
          <RouterLink
            to="/about"
            class="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-2 transition hover:border-emerald-200 hover:text-emerald-600"
            active-class="border-emerald-400 bg-emerald-50 text-emerald-700"
          >
            <InfoFilled class="text-lg" />
            About
          </RouterLink>
        </nav>
      </div>
    </header>

    <main class="mx-auto max-w-5xl px-6 py-10">
      <RouterView />
    </main>
  </div>
</template>

