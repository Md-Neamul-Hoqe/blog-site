import ProtoTypes from "prop-types";
const Blog = ({ blog }) => {
  console.log(blog);
  return (
    <div>
      <h4>Blog: {blog.length}</h4>
      <div>{}</div>
    </div>
  );
};

Blog.propTypes = {
  blog: ProtoTypes.object.isRequired,
};

export default Blog;
