<template>
  <div v-if="show" class="modal">
    <div @click="toggle" class="outer-layer" />
    <div class="inner-layer">
      <div class="head">
        <button @click="toggle">x</button>
        <div class="title">Add Hotel</div>
      </div>
      <div class="body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  show: Boolean
}

const { show } = defineProps<Props>()

const emit = defineEmits<{
  (e: 'toggleShow'): void
}>()

function toggle() {
  emit('toggleShow')
}
</script>

<style scope>
.modal {
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
}
.modal .outer-layer {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
.modal .inner-layer {
  background-color: white;
  min-width: 300px;
  border-radius: 10px;
  z-index: 1;
  box-sizing: border-box;
  overflow: hidden;
}
.modal .inner-layer .head {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
}
.modal .inner-layer .head button {
  z-index: 1;
  align-self: end;
}

.modal .inner-layer .head .title {
  margin: 0 auto;
  width: 100%;
  text-align: center;
  top: 0;
  box-sizing: border-box;
}
.modal .inner-layer .body {
  padding: 8px;
}
.modal .inner-layer .body .action {
  display: flex;
  justify-content: space-between;
}
</style>
