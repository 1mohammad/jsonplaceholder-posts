<template>
  <div class="post-item" @click="changeId(postData)">
    <span class="badge">
      {{ postData.showId ? "User id" : "Post id" }}
    </span>
    <span class="id">
      {{ postData.showId ? postData.userId : postData.id }}
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PostComponent extends Vue {
  showId = false;
  @Prop() private postData!: any;
  changeId(item: any) {
    item.showId = !item.showId;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// toggle animation
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

// toggle animation end
.post-item {
  span {
    &::selection {
      background: transparent;
    }
    &::-moz-selection {
      background: transparent;
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 5px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.14);
  border: 1px solid #f4f4f4;
  border-radius: 0;
  transition: all 0.3s ease;
  cursor: pointer;
  .badge {
    opacity: .2;
    transition: 0.3s all ease;
    background-color: rgba(225, 8, 44, 0);
    border-radius: 5px;
    padding: 2px 5px;
    transform: translateY(-3px);
  }
  &:hover {
	  border-radius: 8px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.14);
    .badge {
      opacity: 1;
	  background-color: rgba(225, 8, 44, 0.31);
    }
  }
  .id {
    font-size: 22px;
  }
}
</style>
