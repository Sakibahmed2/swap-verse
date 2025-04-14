const BookCard = ({ book }) => {
  return (
    <div className="min-w-[140px] bg-blue-50 p-3 rounded-md flex">
      <div className="w-8 h-12 bg-gray-200 rounded mr-2 flex-shrink-0">
        <img
          src="/placeholder.svg?height=48&width=32"
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h4 className="text-xs font-medium line-clamp-2">{book.title}</h4>
        <p className="text-xs text-gray-500 mt-1">By {book.author}</p>
      </div>
    </div>
  );
};

export default BookCard;
