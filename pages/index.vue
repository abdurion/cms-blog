<template>
  <div class="container" dir="rtl">
    <ul>
      <li class="entry" v-for="article of articles" :key="article.slug">
        <NuxtLink :to="article.slug" class="nuxtlinks">
          <img :src="article.img" class="thumbnail" />
          <div>
            <h2>{{ article.title }}</h2>
            <p class="date">{{ formatDate(article.updatedAt) }}</p>
            <!--             <p>by {{ article.author.name }}</p> -->
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: "layout",

  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .only(["title", "description", "img", "slug", "updatedAt"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles
    };
  }
};
</script>

<style>

html {
  font-size: 100%;
  line-height: 1.3;
  height: 100%;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100%;
  margin: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

ul {
  list-style-type: none;
  width: 100%;
  height: 100%;
}

li {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  margin-bottom: 15px;
  padding: 1rem;
  width: 21.875em;
}

.thumbnail {
  display: block;
  margin: auto;
  width: 18.75em;
  padding-bottom: 0.5rem;
}

.entry {
  transition: all 0.2s ease-in-out;
}

.entry:hover {
  transform: scale(1.01);
}

@-webkit-keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.container {
  animation: appear 1s;
}
</style>
