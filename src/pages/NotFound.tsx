import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "@/components/layouts/MainLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="chess-card p-12 max-w-md text-center">
          <div className="text-chess-gold text-7xl mb-6">♟</div>
          <h1 className="text-4xl font-bold mb-4">Checkmate!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The page you're looking for has been captured.
          </p>
          <Link 
            to="/" 
            className="chess-btn"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
