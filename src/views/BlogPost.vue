<template>
  <div id="blog">
    <div class="section foreach">
      <div class="container">
        <h1 class="">{{post.title}}</h1>
        <div class="blog">
          <div class="content">
            <p class="body" v-html="post.body"></p>
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
        <h2 class="cta">
          Hume.Works welcomes your comments.
          <br>Together we can make a real difference in the way we live and work.
        </h2>
      </div>  
    </div>
  </div>
</template>

<script>
import Butter from 'buttercms';
const butter = Butter('2072fdd812123a2dd1a3f11b79c99b9b24c5faf5');

export default {
  name: "BlogPost",
  data() {
    return {
      post: Object,
      categories: Object
    }
  },
  mounted() {
    this.getPost()
    this.getCategories()
  },
  methods: {
    getPost () {
      butter.post.retrieve(this.$route.params.slug)
        .then((response) => {
          this.post = response.data.data
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
#blog {
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
      width: 100%;
      text-align: center;
      max-width: 1024px;
      @media only screen and (min-width: 426px) {
        font-size: 48px;
      }
    }
    .blog {
      display: flex;
      .content {
        width: 75%;
        padding-right: 2rem;
        @media only screen and (max-width: 768px) {
          width: 100%;
          padding-right: 0;
        }
        .body {
          font-weight: 600;
          a {
            color: #007191;
            &:hover {
              color: #363636;
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
          text-align: left;
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
    .cta {
      font-weight: 600;
      text-align: center;
      font-style: italic;
    }
  }
}
</style>
