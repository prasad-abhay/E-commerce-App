import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, SearchX } from "lucide-react";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="text-center max-w-md">

        {/* Icon */}
        <div className="flex justify-center mb-6 animate-bounce">
          <SearchX size={80} className="text-primary" />
        </div>

        {/* Text */}
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
          >
            <ArrowLeft size={18} /> Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white hover:opacity-90 transition"
          >
            <Home size={18} /> Home
          </button>
        </div>

        {/* Hint */}
        <p className="mt-6 text-sm text-gray-500">
          If you think this is a mistake, please contact support.
        </p>
      </div>
    </div>
  );
}

export default NotFound;