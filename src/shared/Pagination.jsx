import { ButtonCard } from "../shared/button/ButtonCard";

export const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const maxVisiblePages = 4;

  let pages = [];

  /** Si le nombre de pages totales est + petite que 8(maxVisiblePages) */
  if (totalPages <= maxVisiblePages) {
    pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    /** On met 1 par défaut ==> 1ere page */
    pages.push(1);

    /** Ici à partir du moment où c'est + de la 3eme pages, on met '...' */
    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    const middlePages = Array.from(
      { length: end - start + 1 },
      (_, i) => start + i,
    );

    pages.push(...middlePages);

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);
  }

  return (
    <div className="flex justify-center text-white border-4 border-amber-500">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-secondary-400 cursor-pointer m-2 p-2 disabled:opacity-10"
      >
        Prev
      </button>

      {pages.map((p, index) =>
        p === "..." ? (
          <span key={index} className="m-2 p-2 opacity-60">
            ...
          </span>
        ) : (
          <ButtonCard
            key={index}
            onClick={() => onPageChange(p)}
            className={`cursor-pointer m-2 p-2 ${
              currentPage === p ? "bg-secondary-400" : "bg-green-400"
            }`}
          >
            {p}
          </ButtonCard>
        ),
      )}

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
