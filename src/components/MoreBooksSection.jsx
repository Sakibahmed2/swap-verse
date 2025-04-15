const MoreBooksSection = () => {
  const moreBooks = [
    {
      id: 1,
      title: "Man’s Search for Meaning",
      author: "Viktor Frankl's",
      coverImage: "https://example.com/book1.jpg",
    },
    {
      id: 2,
      title: "Man’s Search for Meaning",
      author: "Viktor Frankl's",
      coverImage: "https://example.com/book1.jpg",
    },
    {
      id: 3,
      title: "Man’s Search for Meaning",
      author: "Viktor Frankl's",
      coverImage: "https://example.com/book1.jpg",
    },
    {
      id: 4,
      title: "Man’s Search for Meaning",
      author: "Viktor Frankl's",
      coverImage: "https://example.com/book1.jpg",
    },
  ];

  return (
    <div className="p-4 border-t border-gray-200">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium">More from this user</h3>
        <a href="#" className="text-blue-500 text-sm font-medium">
          See All
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {moreBooks.map((book) => (
          <div key={book.id} className="flex flex-col">
            <div className="h-[190px]  bg-[#00000033] mb-2 rounded-[8px]"></div>
            <h4 className="text-sm font-medium line-clamp-2">{book.title}</h4>
            <p className="text-xs text-gray-500">by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreBooksSection;
