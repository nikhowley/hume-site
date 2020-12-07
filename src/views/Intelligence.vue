<template>
  <div id="intelligence">
    <div class="section foreach">
      <div class="container">
        <h1 class="title is-1">Intelligence</h1>
        <div class="blog">
          <div class="postlist">
            <div v-for="post in posts" :key="post.slug" class="post">
              <router-link :to="'/intelligence/' + post.slug">
                <h1 class="title">
                  {{post.title}}
                </h1>
              </router-link>
              <div class="categories">
                <p v-for="category in post.categories" :key="category.slug">
                  {{category.name}}
                </p>
              </div>
              <p class="info">
                By {{post.author.first_name}} {{post.author.last_name}} · {{post.published.substring(0, 10)}}
              </p>
            </div>
          </div>
          <div class="archive">
            <h1 class="title">Archive</h1>
            <ul>
              <li v-for="category in categories" :key="category.slug">
                <router-link :to="'/intelligence/'">
                  {{category.name}}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import Butter from 'buttercms';
const butter = Butter('2072fdd812123a2dd1a3f11b79c99b9b24c5faf5');

export default {
  name: "Intelligence",
  data: () => {
    return {
      posts: Array,
      categories: Array
    }
  },
  mounted () {
    this.getPosts()
    this.getCategories()
  },
  methods: {
    getPosts () {
      butter.post.list().then((response) => {
        this.posts = response.data.data
        console.log(this.posts);
      }) 
    },
    getCategories() {
      butter.category.list()
      .then((response) => {
        this.categories = response.data.data
        console.log(this.categories);
      })
    }
  }
}
</script>

<style lang="scss">
#intelligence {
  min-height: calc(100vh - 37px);
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 1024px;
    h1 {
      color: #007191;
      font-weight: bold;
      font-size: 36px;
      margin-bottom: 2rem;
      @media only screen and (min-width: 426px) {
        font-size: 48px;
      }
    }
    .blog {
      width: 100%;
      display: flex;
      .postlist {
        width: 75%;
        padding-right: 2rem;
        @media only screen and (max-width: 768px) {
          width: 100%;
          padding-right: 0;
        }
        .post {
          width: 100%;
          margin-bottom: 2rem;
          .title {
            font-size: 24px;
            margin-bottom: .5rem;
            color: #007191;
            transition: .2s;
            &:hover {
              color: #363636;
            }
          }
          p {
            font-weight: 600;
          }
          .categories {
            display: flex;
            margin-bottom: .5rem;
            p {
              margin-right: .33rem;
            }
          }
        }
      }
      .archive {
        width: 25%;
        @media only screen and (max-width: 768px) {
          display: none;
        }
        .title {
          font-size: 24px;
          color: #4a4a4a; 
          margin-bottom: 2rem;
        }
        li {
          border-top: 1px solid #c2c2c2;
          padding: .5rem 0;
          font-weight: 600;
          a {
            color: #007191;
            &:hover {
              color: #4a4a4a; 
            }
          }
        }
      }
    }
  }
}
</style>
