import bookImg from "../assets/icons/bookCardImg.svg";

const BookCard = ({ book }) => {
  return (
    <div className="w-full max-w-[200px] h-[110px] bg-[#DEE7F5] p-3 rounded-md flex items-center gap-2">
      <div className="">
        <img src={bookImg} alt={book.title} className="w-[18px] " />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-medium line-clamp-2">{book.title}</h4>
        <p className="text-xs text-gray-500 mt-1">By {book.author}</p>
      </div>
    </div>
  );
};

export default BookCard;
