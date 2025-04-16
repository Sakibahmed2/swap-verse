import { ArrowUp, ChevronLeft } from "lucide-react";
import { useState } from "react";
import bookBgImg from "../assets/book-bg.svg";
import exchangeIcon from "../assets/icons/exchangeIcon.png";
import BookCard from "./BookCard";
import GenreCard from "./GenreCard";
import MoreBooksSection from "./MoreBooksSection";
import OpenOfferCard from "./OpenOfferCard";
import SingleBookCard from "./SingleBookCard";

const BookDetails = ({ bookData }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const {
    title,
    author,
    description,
    condition,
    language,
    owner,
    swapCondition,
    genres,
    coverPhotoUrl,
  } = bookData || {};

  const [swapConditionType, setSwapConditionType] = useState(
    swapCondition?.conditionType || "ByBooks"
  );

  const handleSwapConditionChange = () => {
    const conditions = ["ByBooks", "ByGenres", "OpenForOffers"];

    const newCondition = conditions.filter(
      (condition) => condition !== swapConditionType
    );

    const randomCondition =
      newCondition[Math.floor(Math.random() * newCondition.length)];

    setSwapConditionType(randomCondition);
  };

  return (
    <div className="max-w-md mx-auto bg-slate-100 min-h-screen">
      {/* Header */}
      <div className="p-4 flex items-center  bg-white">
        <button className="p-2">
          <ChevronLeft />
        </button>
        <h1 className="text-center flex-1 ">Book Details</h1>
      </div>

      {/* Book Cover and Title */}
      <div className=" flex flex-col items-center w-full relative">
        <img src={bookBgImg} alt="" className="absolute w-full" />
        <div className="z-10 mt-16 ">
          <img
            src={coverPhotoUrl}
            alt={title}
            className="w-[160px] h-[190px] object-cover "
          />
        </div>
        <h2 className="text-xl font-semibold text-center mt-5">{title}</h2>
        <p className=" text-center mt-1">by {author}</p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {genres?.map((category, index) => (
            <span
              key={index}
              className={`text-xs  px-2  ${index % 2 === 0 ? "border-x" : ""}`}
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Exchange Condition */}
      <div className="bg-slate-100 p-4 mt-8 ">
        <div
          className="flex flex-col justify-center items-center cursor-pointer"
          onClick={handleSwapConditionChange}
        >
          <img src={exchangeIcon} alt="" />
          <p className="mt-2 mb-1 ">Exchange condition</p>
          <span className="text-sm text-gray-500">{swapConditionType}</span>
        </div>

        {/* Swap Items Section - changes based on swap condition */}
        <div className="mt-4">
          {swapConditionType === "ByBooks" ? (
            swapCondition?.swappableBooks.length > 0 ? (
              swapCondition?.swappableBooks?.map((book, index) => (
                <BookCard key={index} book={book} />
              ))
            ) : (
              <SingleBookCard book={bookData} />
            )
          ) : (
            ""
          )}

          {swapConditionType === "ByGenres" && (
            <div className="flex overflow-x-auto gap-3 pb-2">
              {swapCondition?.swappableGenres?.map((genre, index) => (
                <GenreCard key={index} genre={genre} />
              ))}
            </div>
          )}

          {swapConditionType === "OpenForOffers" && <OpenOfferCard />}
        </div>
      </div>

      {/* Book Description */}
      <div className="p-4">
        <h3 className="font-medium mb-2">Book Description</h3>
        <p className="text-sm text-gray-700">
          {description}
          {description?.length > 120 && (
            <button
              className="text-blue-500 ml-1 cursor-pointer font-medium"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? "Less" : "More"}
            </button>
          )}
        </p>
      </div>

      {/* Book Condition and Language */}
      <div className="p-4  border-gray-200 bg-white">
        <div className="flex justify-center space-x-8 divide-x-2 divide-gray-200">
          <div className="flex flex-col items-center justify-center  gap-2 pr-8">
            <h4 className="text-sm text-gray-500 mb-1">Book Condition</h4>
            <div className="flex flex-col items-center gap-1">
              <svg
                width="21"
                height="15"
                viewBox="0 0 21 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 2.53142C12.0234 1.70171 12.7857 1.28571 15.0714 1.28571C16.5952 1.28571 18.119 1.70094 19.6428 2.53142V13.8571C18.1194 13.0948 17.3571 12.7143 15.0714 12.7143C13.5476 12.7143 12.0238 13.0952 10.5 13.8571M10.5 2.53142V13.8571M10.5 2.53142C8.97616 1.70094 7.45236 1.28571 5.92855 1.28571C3.64283 1.28571 2.88055 1.70171 1.35712 2.53142V13.8571C2.88093 13.0952 4.40474 12.7143 5.92855 12.7143C8.21426 12.7143 8.97655 13.0948 10.5 13.8571"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="text-sm">{condition}</span>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-sm text-gray-500 mb-1">Book Language</h4>
            <div className="flex flex-col items-center">
              <span className="text-xl font-medium">EN</span>
              <span className="ml-2 text-sm">{language}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="p-4  ">
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
          <span className="ml-2 text-sm">Senate Square, Helsinki</span>
        </div>
      </div>

      {/* Owner Info */}
      <div className="p-4 ">
        <h4 className="text-sm text-gray-500 mb-2">Offered by</h4>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
            <span>{owner?.name}</span>
          </div>
          <div className="flex items-center">
            <ArrowUp className="text-green-500 size-5" />
            <span className="ml-1 text-sm font-medium">95% Positive Swaps</span>
          </div>
        </div>
      </div>

      {/* More from this user */}
      <MoreBooksSection />

      {/* Request Swap Button */}
      <div className="px-4 py-2 border-t border-gray-200 bg-white flex justify-between items-center">
        <div>
          <span className="text-xs text-gray-500">Offed by</span>
          <p className="text-sm font-medium">{owner?.name}</p>
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-8 rounded-md font-medium"
          onClick={() => alert("Swap request sent!")}
        >
          Request Swap
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
