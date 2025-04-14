const OpenOfferCard = () => {
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
            d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex-1">
        <h4 className="text-xs font-medium line-clamp-2">Open to Offer</h4>
        <p className="text-xs text-gray-500 mt-1">Flexible exchange</p>
      </div>
    </div>
  );
};

export default OpenOfferCard;
