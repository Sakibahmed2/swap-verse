import { useState } from "react";
import BookDetails from "./components/BookDetails";
import "./index.css";

const HomePage = () => {
  const [swapType, setSwapType] = useState("byBooks");

  // For demo purposes - allows switching between different swap types
  const handleSwapTypeChange = (type) => {
    setSwapType(type);
  };

  // Fallback data in case API doesn't return expected structure
  const fallbackData = {
    title: "Man's search for meaning",
    author: "Viktor Frankl",
    categories: ["Biography", "Autobiography", "Personal narrative"],
    description:
      "A brief synopsis or description of the book's content, providing potential swappers with an idea of what the book is about...",
    condition: "Used like New",
    language: "English",
    location: "Serena Square, Helsinki",
    owner: "Raisa Binte Hossain",
    positiveSwaps: 95,
    swapCondition: swapType,
    swapItems: [
      {
        title: "Harry Potter and The Order of The Phoenix",
        author: "J.K. Rowling",
      },
      {
        title: "The Productive Muslim",
        author: "Mohammed Faris",
      },
    ],
    genres: ["Thriller", "Any of this genre"],
    coverImage: "/placeholder.svg?height=200&width=150",
  };

  // Merge API data with fallback data for any missing fields
  const mergedData = { ...fallbackData };

  // Override swap condition for demo purposes
  mergedData.swapCondition = swapType;

  // For the "byBooksOne" view, we'll limit to just one book
  if (
    swapType === "byBooksOne" &&
    mergedData.swapItems &&
    mergedData.swapItems.length > 1
  ) {
    mergedData.swapItems = [mergedData.swapItems[0]];
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Demo controls for switching between views */}
      <div className="bg-white p-4 shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">
          Demo Controls - Switch View:
        </h2>
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-3 py-1 rounded ${
              swapType === "byBooks" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleSwapTypeChange("byBooks")}
          >
            Swap by Books (Multiple)
          </button>
          <button
            className={`px-3 py-1 rounded ${
              swapType === "byBooksOne"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleSwapTypeChange("byBooksOne")}
          >
            Swap by Books (One)
          </button>
          <button
            className={`px-3 py-1 rounded ${
              swapType === "byGenres" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleSwapTypeChange("byGenres")}
          >
            Swap by Genres
          </button>
          <button
            className={`px-3 py-1 rounded ${
              swapType === "openForOffers"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleSwapTypeChange("openForOffers")}
          >
            Open for Offers
          </button>
        </div>
      </div>

      <BookDetails bookData={mergedData} />
    </div>
  );
};

export default HomePage;
