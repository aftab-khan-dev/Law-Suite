import { useParams } from "react-router-dom";
import { blogPosts } from "./blogData"; // Import main and relevant blogs data

export default function BlogDetails() {
  const { id } = useParams(); // Extract id from the URL
  const blog = blogPosts.find((post) => post.id === parseInt(id)); // Find the blog post by id

  if (!blog) {
    return <div className="text-center text-gray-500">Blog not found!</div>;
  }

  return (
    <section className="bg-gray-50 py-20">
      {/* Main Blog Content */}
      <div className="max-w-[90rem] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-72 object-cover"
        />
        <div className="p-8">
          {/* Blog Meta */}
          <p className="text-sm text-gray-500 mb-2">
            {blog.category} • {blog.readTime}
          </p>
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {blog.title}
          </h1>
          {/* Content */}
          <p className="text-gray-700 leading-relaxed">{blog.excerpt}</p>
        </div>
      </div>

      {/* Relevant Blogs Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Relevant Blogs
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-[90rem] mx-auto">
          {blogPosts.map((relBlog) => (
            <div
              key={relBlog.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={relBlog.image}
                alt={relBlog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {relBlog.title}
                </h3>
                {/* <p className="text-sm text-gray-600 mb-3">{relBlog.excerpt}</p> */}
                <a
                  href={`/blog/${relBlog.id}`}
                  className="text-gold font-medium hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
