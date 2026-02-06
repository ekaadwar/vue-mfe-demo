<template>
  <div class="input-text">
    <label>{{ label }}</label>
    <input :id="id" type="text" :value="modelValue" @input="onInput" v-bind="$attrs" />
  </div>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })

type Props = {
  modelValue: string
  label?: string
  id?: string
}

withDefaults(defineProps<Props>(), {
  label: ''
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function onInput(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<style scoped>
.input-text {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.input-text label {
  text-align: left;
}
</style>
