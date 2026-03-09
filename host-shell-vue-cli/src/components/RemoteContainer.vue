<template>
  <section class="remote-panel">
    <header class="remote-panel__header">
      <div>
        <p class="remote-panel__eyebrow">Remote Module</p>
        <h2 class="remote-panel__title">{{ title }}</h2>
      </div>
      <span class="remote-panel__badge">{{ badge }}</span>
    </header>

    <div class="remote-panel__body">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'RemoteContainer',
  props: {
    title: {
      type: String,
      required: true
    },
    badge: {
      type: String,
      default: 'kost/KostApp'
    }
  }
}
</script>
