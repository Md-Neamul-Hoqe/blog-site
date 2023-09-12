import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import Bookmarks from "../Bookmarks/Bookmarks";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
    console.log(blogs);
  }, []);

  return (
    <div className="md:w-2/3">
      <h2>My Blogs: {blogs.length}</h2>
    </div>
  );
};

export default Blogs;
