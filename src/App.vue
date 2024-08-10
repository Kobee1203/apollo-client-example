<script setup lang="ts">
import { watch } from 'vue'
import { useBooksQuery } from '@/composables/useBooksQuery'
import Button from 'primevue/button'

const { result, loading, error } = useBooksQuery()

watch(result, (value) => {
  console.log('books:', value)
})
</script>

<template>
  <main>
    <Button label="Hello!" />
  </main>
</template>

<style scoped></style>
