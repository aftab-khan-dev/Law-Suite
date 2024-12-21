import { useNavigate } from "react-router-dom";
import { blogPosts } from "./blogData"; // Import blog data

export default function Blogs() {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-100 py-20">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">
          Empowering Clients & Lawyers with{" "}
          <span className="text-yellow-600">Legal Knowledge</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Stay updated with the latest legal news, tips, and expert insights.
          Whether you're a client or lawyer, our blog covers everything you need
          to know.
        </p>
      </div>

      {/* Featured Blog */}
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-8">
        <img
          src={blogPosts[0].image}
          alt="Featured Blog"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-2">
            {blogPosts[0].category} • {blogPosts[0].readTime}
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {blogPosts[0].title}
          </h3>
          {/* <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p> */}
          <button
            className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-500"
            onClick={() => navigate(`/blogs/${blogPosts[0].id}`)} // Navigate to specific blog post
          >
            Read More
          </button>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 p-10">
        {blogPosts.slice(1).map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-2">
                {post.category} • {post.readTime}
              </p>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {post.title}
              </h4>
              {/* <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p> */}
              <button
                className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-500"
                onClick={() => navigate(`/blogs/${post.id}`)} // Navigate to specific blog post
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
