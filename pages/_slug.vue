<template>
  <article>
    <Header />
    <div class="article">
    <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <img :src="article.img" :alt="article.alt" class="thumbnail" />
    <h1>{{ article.title }}</h1>
    <p class="date">{{ formatDate(article.updatedAt) }}</p>
    <p>{{ article.description }}</p>
    <nuxt-content :document="article" />
    </div>
    <div>
    <Footer />
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  }
};
</script>

<style>

.article {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  color: #012626;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  margin-bottom: 15px;
  max-width: 75%;
  padding: 1rem 1rem 1rem 1rem;
}

.date {
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.7);
}

.nuxt-content {
  margin-top: 20px;
}

.thumbnail {
  display: block;
  margin: auto;
  width: 300px;
}
</style>
