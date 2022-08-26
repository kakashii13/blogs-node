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
 
  const {title, author, likes} = blogs.sort((a, b) => {
    return b.likes - a.likes
  })[0]
  

  return {
    title,
    author,
    likes
  }
  
};


const mostBlogs = (blogs) => {
  if(!blogs.length) return 0
  const authorWithMostBlogs = []

  blogs.map(blog => {
    const isAuthor = authorWithMostBlogs.find(x => x.author === blog.author)
    if(isAuthor) {
      isAuthor.blogs += 1
    } else {
      authorWithMostBlogs.push({
        author: blog.author,
        blogs: 1
      })
    }
  })
 
 return authorWithMostBlogs.sort((a, b) => {
    return b.blogs - a.blogs
  })[0]
 
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
};
