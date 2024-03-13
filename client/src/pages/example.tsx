// pages/test.tsx
import React, { useState, useEffect } from "react";

const TestPage = () => {
  const [data, setData] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/test");
        console.log(response);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching test data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <h1>{isClient ? "This is never prerendered" : "Prerendered"}</h1>
      <p>This is a test page on the frontend.</p>
      {data && (
        <div>
          <h2>Test Data from Backend</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default TestPage;
