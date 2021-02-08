<template>
  <div class="flex">
    <div class="flex-content">
      <Header />
      <Nuxt />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;700;900&display=swap");

html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  font-family: "Tajawal", sans-serif;
  color: #012626;
  margin: 0;
  padding: 2rem;
  width: 100%;
  height: 100%;
  height: 100vh;
  text-align: right;
  background: linear-gradient(to bottom, #65dfc9, #6cdbeb);
  background-repeat: no-repeat;
  background-attachment: fixed;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.nuxtlinks {
  text-decoration: none;
  color: inherit;
}

@-webkit-keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: appear 1s;
}

.flex-content {
  margin-bottom: auto;
}

.footer {
  margin-top: auto;
}
</style>
