<template>
  <div id="app">
    <div class="navBar">
      <div class="container">
        <h1>Get 100 post from jsonplaceholder | 10 rows x 10 columns</h1>
        <small> click to toggle Post id - User id </small>
      </div>
    </div>
    <div class="container">
      <LoadingComponent v-if="loading" />
      <div v-if="!loading" class="items">
        <div v-for="item in post" :key="item.id" class="item-col">
          <PostComponent :postData="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PostComponent from "./components/PostComponent.vue";
import LoadingComponent from "./components/LoadingComponent.vue";
import { httpGet } from "./services/global";

@Component({
  components: {
    PostComponent,
    LoadingComponent,
  },
})
export default class App extends Vue {
  loading = false;
  post: BlogPost[] = [];
  created() {
    this.loading = true;
	// http get request - posts from jsonplaceholder
    httpGet("posts").then((res) => {
      this.loading = false;
      res.map((item: BlogPost) => {
        const postItem = {} as BlogPost;
        postItem.userId = item.userId;
        postItem.id = item.id;
        postItem.title = item.title;
        postItem.body = item.body;
        postItem.showId = false;
        this.post.push(postItem);
      });
    });
  }
}
// blog posts interface
interface BlogPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  showId: boolean;
}
</script>

<style lang="scss">
@mixin breakpoint($point) {
  @if $point==md-up {
    @media (min-width: 768px) {
      @content;
    }
  } @else if $point==md-down {
    @media (max-width: 768px) {
      @content;
    }
  }
}
body {
  padding: 0;
  margin: 0;
}
#app {
  .navBar {
    background-color: #000;
    padding: 15px;
    color: #fff;
    h1 {
      margin-top: 0;
    }
  }
}
.container {
  max-width: 920px;
  margin: 0 auto;
  @include breakpoint(md-down) {
    width: 100%;
  }
}
.items {
  display: flex;
  width: 100%;
  height: calc(100vh - 30px);
  flex-wrap: wrap;
  padding: 20px 0;
  .item-col {
    flex: 0 0 10%;
    max-width: 10%;
    box-sizing: border-box;
  }
}
* {
  font-family: monospace;
}
</style>
