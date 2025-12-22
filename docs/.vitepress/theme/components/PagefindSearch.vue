<template>
  <div class="pf-search">
    <input
      v-model="query"
      placeholder="Search…"
      @input="onSearch"
    />
    <ul v-if="results.length">
      <li v-for="r in results" :key="r.url">
        <a :href="r.url">{{ r.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const query = ref('')
const results = ref<any[]>([])

let pagefind: any = null

async function ensurePagefind() {
  if (!pagefind) {
    pagefind = await import('/pagefind/pagefind.js')
    await pagefind.init()
  }
}

async function onSearch() {
  if (!query.value.trim()) {
    results.value = []
    return
  }

  await ensurePagefind()
  const res = await pagefind.search(query.value)

  const items = []
  for (const r of res.results.slice(0, 5)) {
    const data = await r.data()
    items.push({
      title: data.title,
      url: data.url
    })
  }
  results.value = items
}
</script>

<style scoped>
.pf-search {
  position: relative;
}

input {
  padding: 4px 8px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-border);
  font-size: 14px;
}

ul {
  position: absolute;
  top: 36px;
  right: 0;
  width: 260px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 6px;
  list-style: none;
}

li {
  padding: 4px 6px;
}

li a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

li a:hover {
  text-decoration: underline;
}
</style>
