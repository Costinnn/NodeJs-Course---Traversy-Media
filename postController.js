const posts = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post two" },
];

// ES module for exporting, in package.json put "type":"module"
export const getPosts = () => {
  console.log(posts);
};
// export default getPosts
// export {getPosts}
