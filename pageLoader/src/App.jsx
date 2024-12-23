import React, { useState, useEffect } from "react";
import PageLoader from "./components/PageLoader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 3000); // Adjust the timeout as needed
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center">Welcome to My App!</h1>
      {/* Your app content goes here */}
    </div>
  );
};

export default App;
