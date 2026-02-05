<template>
  <div class="input">
    <label>{{ label }}</label>
    <input :id="id" type="number" :value="modelValue" @input="onInput" v-bind="$attrs" />
  </div>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })

type Props = {
  modelValue: number
  label?: string
  id?: string
}

withDefaults(defineProps<Props>(), {
  label: ''
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

function onInput(e: Event) {
  console.log({ e })
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.input label {
  text-align: left;
}
</style>
