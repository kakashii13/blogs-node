const dummy = (blogs) => {
  if (typeof blogs === "object") return 1;
};

const totalLikes = (blogs) => {
  const reduce = (sum, el) => {
    return sum + el.likes;
  };

  return blogs.reduce(reduce, 0);
};

const favoriteBlog = (blogs) => {
  if (!blogs.length) return 0;
  const likes = blogs
    .map((blog) => blog.likes)
    .sort((a, b) => {
      return b - a;
    });
  const favoriteBlog = blogs.map((blog) => {
    if (blog.likes === likes[0]) {
      return {
        title: blog.title,
        author: blog.author,
        likes: blog.likes,
      };
    }
  });

  return favoriteBlog[0];
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
