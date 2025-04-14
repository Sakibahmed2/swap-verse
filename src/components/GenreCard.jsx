const GenreCard = ({ genre }) => {
  return (
    <div className="min-w-[140px] bg-blue-50 p-3 rounded-md flex">
      <div className="w-8 h-12 bg-gray-200 rounded mr-2 flex-shrink-0 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex-1">
        <h4 className="text-xs font-medium line-clamp-2">{genre}</h4>
      </div>
    </div>
  );
};

export default GenreCard;
