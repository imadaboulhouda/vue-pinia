import { defineStore, acceptHMRUpdate } from "pinia";
import getPosts from "@/api/useApi.js";
export const usePostStore = defineStore("posts_store", {
  state: () => ({
    posts: [],
  }),
  actions: {
    async PostAction() {
      const { load, posts: post } = getPosts();
      await load();
      this.posts = post.value;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePostStore, import.meta.hot));
}
