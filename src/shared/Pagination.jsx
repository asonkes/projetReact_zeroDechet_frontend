export const Pagination = (props) => {
  const { totalPages, currentPage, onPageChange } = props;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center text-white border-4 border-amber-500">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-secondary-400 cursor-pointer m-2 p-2 disabled:opacity-10"
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          className={`cursor-pointer m-2 p-2 ${currentPage === page ? `bg-secondary-400` : `bg-green-400`}`}
          key={page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-secondary-400 cursor-pointer m-2 p-2 disabled:opacity-10"
      >
        Next
      </button>
    </div>
  );
};
