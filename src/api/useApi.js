import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const errors = ref([]);
  const load = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos");
      posts.value = await data.json();
    } catch (error) {
      errors.value = error;
    }
  };
  return { posts, errors, load };
};

export default getPosts;
