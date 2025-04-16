import { useEffect, useState } from "react";
import BookDetails from "./components/BookDetails";
import "./index.css";
import { fetchBookData } from "./libs/api";
import Loading from "./components/ui/Loading";

const HomePage = () => {
  const [bookData, setBookData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBookData = async () => {
      try {
        setLoading(true);
        const data = await fetchBookData();

        setBookData(data);
      } catch (err) {
        setError("Failed to fetch book details. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getBookData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="min-h-screen bg-zinc-300">
      <BookDetails bookData={bookData} />
    </div>
  );
};

export default HomePage;
