import { useParams, useNavigate } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock blog data
  const blogPosts = {
    1: {
      title: 'Getting Started with React Router',
      author: 'John Doe',
      date: 'January 15, 2024',
      content: 'React Router is a powerful library for handling routing in React applications...',
    },
    2: {
      title: 'Advanced State Management',
      author: 'Jane Smith',
      date: 'January 20, 2024',
      content: 'State management is crucial for building scalable React applications...',
    },
    3: {
      title: 'Building with TypeScript',
      author: 'Mike Johnson',
      date: 'January 25, 2024',
      content: 'TypeScript adds type safety to your JavaScript applications...',
    },
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Post Not Found</h2>
        <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:text-blue-700 flex items-center gap-2"
      >
        ← Back
      </button>
      
      <article className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-6">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed">{post.content}</p>
        </div>
      </article>

      <div className="mt-6 flex gap-4">
        {id > 1 && (
          <button
            onClick={() => navigate(`/blog/${parseInt(id) - 1}`)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-lg"
          >
            Previous Post
          </button>
        )}
        {id < 3 && (
          <button
            onClick={() => navigate(`/blog/${parseInt(id) + 1}`)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
          >
            Next Post
          </button>
        )}
      </div>
    </div>
  );
}

export default BlogPost;
