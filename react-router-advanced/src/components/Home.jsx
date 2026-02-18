import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to React Router Advanced
      </h1>
      <p className="text-gray-600 mb-8">
        Explore nested routes, dynamic routing, and protected routes
      </p>
      <div className="flex justify-center gap-4">
        <Link
          to="/profile"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
        >
          Go to Profile
        </Link>
        <Link
          to="/blog/1"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg"
        >
          View Blog Post
        </Link>
      </div>
    </div>
  );
}

export default Home;
