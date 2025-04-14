import { useState } from "react";
import BookCard from "./BookCard";
import GenreCard from "./GenreCard";
import OpenOfferCard from "./OpenOfferCard";
import MoreBooksSection from "./MoreBooksSection";

const BookDetails = ({ bookData }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const {
    title,
    author,
    categories,
    description,
    condition,
    language,
    location,
    owner,
    positiveSwaps,
    swapCondition,
    swapItems,
    genres,
    coverImage,
  } = bookData;

  const getExchangeConditionTitle = () => {
    switch (swapCondition) {
      case "byBooks":
      case "byBooksOne":
        return "Swap only for these";
      case "byGenres":
        return "Swap only for these";
      case "openForOffers":
        return "Open to Offer";
      default:
        return "Exchange Condition";
    }
  };

  const truncatedDescription =
    description?.length > 120
      ? `${description.substring(0, 120)}...`
      : description;

  const displayDescription = showFullDescription
    ? description
    : truncatedDescription;

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="p-4 flex items-center border-b">
        <button className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="text-center flex-1 font-medium">Book Details</h1>
      </div>

      {/* Book Cover and Title */}
      <div className="p-6 flex flex-col items-center">
        <div className="w-32 h-44 bg-gray-200 mb-4 overflow-hidden">
          <img
            src={coverImage || "/placeholder.svg?height=200&width=150"}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold text-center">{title}</h2>
        <p className="text-gray-600 text-center mt-1">by {author}</p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {categories?.map((category, index) => (
            <span
              key={index}
              className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Exchange Condition */}
      <div className="bg-gray-100 p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium">Exchange Condition</h3>
          <span className="text-sm text-gray-500">
            {getExchangeConditionTitle()}
          </span>
        </div>

        {/* Swap Items Section - changes based on swap condition */}
        <div className="mt-2">
          {(swapCondition === "byBooks" || swapCondition === "byBooksOne") && (
            <div className="flex overflow-x-auto gap-3 pb-2">
              {swapItems?.map((item, index) => (
                <BookCard key={index} book={item} />
              ))}
            </div>
          )}

          {swapCondition === "byGenres" && (
            <div className="flex overflow-x-auto gap-3 pb-2">
              {genres?.map((genre, index) => (
                <GenreCard key={index} genre={genre} />
              ))}
            </div>
          )}

          {swapCondition === "openForOffers" && <OpenOfferCard />}
        </div>
      </div>

      {/* Book Description */}
      <div className="p-4">
        <h3 className="font-medium mb-2">Book Description</h3>
        <p className="text-sm text-gray-700">
          {displayDescription}
          {description?.length > 120 && (
            <button
              className="text-blue-500 ml-1"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? "Less" : "More"}
            </button>
          )}
        </p>
      </div>

      {/* Book Condition and Language */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex justify-between">
          <div>
            <h4 className="text-sm text-gray-500 mb-1">Book Condition</h4>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span className="ml-2 text-sm">{condition}</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm text-gray-500 mb-1">Book Language</h4>
            <div className="flex items-center">
              <span className="text-xl font-medium">EN</span>
              <span className="ml-2 text-sm">{language}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="ml-2 text-sm">{location}</span>
        </div>
      </div>

      {/* Owner Info */}
      <div className="p-4 border-t border-gray-200">
        <h4 className="text-sm text-gray-500 mb-2">Offered by</h4>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
            <span>{owner}</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-1 text-sm">
              {positiveSwaps}% Positive Swaps
            </span>
          </div>
        </div>
      </div>

      {/* More from this user */}
      <MoreBooksSection author={author} />

      {/* Request Swap Button */}
      <div className="p-4 border-t border-gray-200">
        <button className="w-full bg-blue-500 text-white py-3 rounded-md font-medium">
          Request Swap
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
