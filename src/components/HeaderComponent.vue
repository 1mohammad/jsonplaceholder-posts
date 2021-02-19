<template>
  <div class="navBar">
    <div class="container">
      <h1>
        {{ siteTitle }}
      </h1>
      <small>
        {{ shortDescription }}
        
      </small>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HeaderComponent extends Vue {
  @Prop() private siteTitle!: string;
  @Prop() private shortDescription!: string;
}
</script>

<style scoped lang="scss">
.navBar {
  background-color: #000;
  padding: 15px;
  color: #fff;
  h1 {
    margin-top: 0;
  }
}
</style>
