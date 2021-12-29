<template>
  <div class="px-8 py-20 grid gap-4 grid-cols-2">
    <label class="flex flex-col">
      <span class="mb-2">Empresa</span>
      <select
        v-model="store.remuneracionesCompany"
        class="p-2"
        type="select"
      >
        <option
          v-for="(item, idx) in store.getRemuneracionesCompanies"
          :key="idx"
          :value="item"
        >{{ item }}</option>
      </select>
    </label>

    <label class="flex flex-col">
      <span class="mb-2">Trabajador</span>
      <select
        v-model="store.remuneracionesEmployee"
        class="p-2"
        type="select"
      >
        <option
          v-for="(item, idx) in store.getRemuneracionesEmployees"
          :key="idx"
          :value="item"
        >{{ item.label }}</option>
      </select>
    </label>
  </div>
</template>

<script setup lang="ts">
import { useRemuneracionesStore } from '~/stores/remuneraciones'
const store = useRemuneracionesStore()
</script>
