<template>
  <header class="header">
    <NuxtLink to="/" class="nuxtlinks my-name"
      ><h1>عبدالرحمن القميدي</h1></NuxtLink
    >
    <a href="mailto:abdurion@outlook.com" class="nuxtlinks"
      ><fa icon="envelope" class="envelope"></fa
    ></a>
    <p dir="rtl" class="maintenance">مدونه بسيطة تحت الإنشاء...</p>
  </header>
</template>

<style scoped>
html {
  font-size: 100%;
}

h1 {
  font-size: 1.875rem;
  transition: all 0.2s ease-in-out;
}

h1:hover {
  transform: scale(1.1);
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(1, 38, 38, 0.2);
  margin-bottom: 2.1875rem;
}

.nuxtlinks {
  text-decoration: none;
  color: inherit;
}

.my-name {
  font-family: "Tajawal", sans-serif;
  text-decoration: none;
  color: #012626;
}

.envelope {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  color: #012626;
  transition: all 0.2s ease-in-out;
}

.envelope:hover {
  transform: scale(1.1);
}

.head-border {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  width: 80%;
  margin-bottom: 2.1875rem;
}

.maintenance {
  font-size: 13px;
  padding-bottom: 0.5rem;
}
</style>
