import { ref } from "vue";

const getPosts = async () => {
  const posts = ref([]);
  const errors = ref([]);
  const load = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    posts.value = await data.json();
  };
  await load();
  return { posts, errors };
};

export default getPosts;
