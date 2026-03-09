<template>
  <div class="layout-shell">
    <header class="topbar">
      <div>
        <p class="eyebrow">Vue CLI Host</p>
        <h1 class="brand">Micro Frontend Host Shell</h1>
      </div>

      <nav class="nav">
        <RouterLink to="/">Dashboard</RouterLink>
        <RouterLink to="/kost">Kost</RouterLink>
        <RouterLink to="/hotel">Hotel</RouterLink>
      </nav>
    </header>

    <main class="container">
      <RouterView />
    </main>
  </div>
</template>

<script>
export default {
  name: 'AppRoot'
}
</script>
