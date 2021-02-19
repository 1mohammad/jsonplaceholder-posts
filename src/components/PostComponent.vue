<template>
  <div
    class="post-item"
    v-bind:class="postData.showId ? 'user-id' : 'post-id'"
    @click="changeId(postData)"
  >
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

<style scoped lang="scss">
// color variables
$redColor: rgb(225, 8, 44);
$greenColor: rgb(8, 225, 80);
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
  border-radius: 0;
  transition: all 0.3s ease;
  cursor: pointer;
  &.user-id {
    border: 1px solid lighten($redColor, 40%);
    &:hover {
      .badge {
        background-color: lighten($redColor, 40%);
      }
    }
    .badge {
      background-color: transparent;
    }
  }
  &.post-id {
    border: 1px solid #f4f4f4;
    &:hover {
      .badge {
        background-color: lighten($greenColor, 40%);
      }
    }
    .badge {
      background-color: transparent;
    }
  }
  .badge {
    opacity: 0.2;
    transition: 0.3s all ease;
    border-radius: 5px;
    padding: 2px 5px;
    transform: translateY(-3px);
  }
  &:hover {
    border-radius: 8px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.14);
    .badge {
      opacity: 1;
    }
  }
  .id {
    font-size: 22px;
  }
}
</style>
