<template>
  <section class="kost-app">
    <div class="hero">
      <div>
        <p class="eyebrow">Remote Micro Frontend</p>
        <h1>Kost Listing</h1>
        <p class="description">
          Aplikasi ini dimuat dari project <strong>mfe-kost-v2</strong> melalui Webpack 5 Module
          Federation tanpa migrasi ke Vite.
        </p>
      </div>
      <div class="badge">Remote: kost/KostApp</div>
    </div>

    <div class="grid">
      <article v-for="item in kostList" :key="item.id" class="card">
        <div class="card-head">
          <h3>{{ item.name }}</h3>
          <span>{{ item.city }}</span>
        </div>
        <p class="price">{{ item.price }}</p>
        <ul>
          <li v-for="facility in item.facilities" :key="facility">
            {{ facility }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'KostApp',
  data() {
    return {
      kostList: [
        {
          id: 1,
          name: 'Kost Anggrek Residence',
          city: 'Jakarta Selatan',
          price: 'Rp1.750.000 / bulan',
          facilities: ['WiFi', 'Kamar mandi dalam', 'Laundry']
        },
        {
          id: 2,
          name: 'Kost Melati Premium',
          city: 'Depok',
          price: 'Rp1.250.000 / bulan',
          facilities: ['AC', 'Parkir motor', 'Dapur bersama']
        },
        {
          id: 3,
          name: 'Kost Cendana Living',
          city: 'Bekasi',
          price: 'Rp1.500.000 / bulan',
          facilities: ['Kasur', 'Lemari', 'Keamanan 24 jam']
        }
      ]
    }
  }
}
</script>

<style scoped>
.kost-app {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  padding: 24px;
  box-sizing: border-box;
}
.hero {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: start;
  margin-bottom: 24px;
}
.eyebrow {
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
  color: #6b7280;
}
h1 {
  margin: 0;
  color: #111827;
  font-size: 32px;
}
.description {
  margin: 12px 0 0;
  color: #4b5563;
  max-width: 620px;
}
.badge {
  background: #111827;
  color: #ffffff;
  border-radius: 999px;
  padding: 10px 14px;
  font-size: 13px;
  white-space: nowrap;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}
.card {
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 16px;
  text-align: left;
  background: #f9fafb;
}
.card-head {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: start;
}
.card-head h3 {
  margin: 0;
  color: #111827;
  font-size: 18px;
}
.card-head span {
  color: #6b7280;
  font-size: 13px;
}
.price {
  margin: 12px 0;
  font-weight: 700;
  color: #2563eb;
}
ul {
  margin: 0;
  padding-left: 18px;
  color: #4b5563;
}
li + li {
  margin-top: 6px;
}
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
  }

  .badge {
    white-space: normal;
  }
}
</style>
