<script setup lang="ts">
import { watch } from 'vue'
import { useBooksQuery } from '@/composables/useBooksQuery'
import Button from 'primevue/button'
import DataView from 'primevue/dataview'
import Skeleton from 'primevue/skeleton'

const { result, loading, error } = useBooksQuery()

watch(result, (value) => {
  console.log('books:', value)
})
</script>

<template>
  <main>
    <h1 class="text-5xl my-5">Books</h1>
    <div v-if="result?.books" class="card">
      <DataView :value="result?.books" paginator :rows="5">
        <template #list="slotProps">
          <div class="flex flex-col">
            <div v-for="(item, index) in slotProps.items" :key="item.id">
              <div
                  class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
                  :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }"
              >
                <div class="sm:basis-40">
                  <img class="block xl:block mx-auto rounded w-full" :src="item.coverUrl" :alt="item.title" />
                </div>
                <div class="sm:basis-80 self-stretch flex flex-col gap-6">
                  <div class="flex flex-row gap-2">
                    <img
                        class="rounded-full w-10 h-10 object-cover"
                        :src="item.author.photoUrl"
                        :alt="item.author.name"
                    />
                    <span class="font-medium text-surface-500 dark:text-surface-400 text-sm mb-2">
                      {{ item.author.name }}
                    </span>
                  </div>
                  <div class="text-lg font-medium mb-2">{{ item.title }}</div>
                  <Button label="Show" class="whitespace-nowrap mt-auto" />
                </div>
              </div>
            </div>
          </div>
        </template>
      </DataView>
    </div>
    <div v-if="loading" class="card">
      <DataView>
        <template #empty>
          <div class="flex flex-col">
            <div v-for="i in 5" :key="i">
              <div
                class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
                :class="{ 'border-t border-surface-200 dark:border-surface-700': i !== 1 }"
              >
                <div class="sm:basis-40">
                  <Skeleton class="block xl:block mx-auto rounded" height="14rem" width="100%"></Skeleton>
                </div>
                <div class="sm:basis-80 self-stretch flex flex-col gap-6">
                  <div class="flex flex-row gap-2">
                    <Skeleton shape="circle" size="2rem" class="mr-2"></Skeleton>
                    <Skeleton width="10rem"></Skeleton>
                  </div>
                  <div class="text-lg font-medium mb-2">
                    <Skeleton></Skeleton>
                  </div>
                  <Skeleton class="mt-auto" height="3rem"></Skeleton>
                </div>
              </div>
            </div>
          </div>
        </template>
      </DataView>
    </div>
  </main>
</template>

<style scoped></style>
