import { IngredientButton } from "../features/ingredients/IngredientButton";

export const Pagination = (props) => {
  const { totalPages, currentPage, onPageChange, className = "" } = props;
  const maxVisiblePages = 6;

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
    <div
      className={`max-w-full flex justify-center font-montserrat text-base text-white pt-4 px-2 ${className}`}
    >
      <IngredientButton
        text="Prev"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-secondary-400 disabled:opacity-10"
      />

      {pages.map((p, index) =>
        p === "..." ? (
          <span key={index} className="m-1 xs:m-2 p-1 xs:p-2 opacity-60">
            ...
          </span>
        ) : (
          <IngredientButton
            key={index}
            onClick={() => onPageChange(p)}
            className={` ${currentPage === p && "bg-secondary-400"}`}
          >
            {p}
          </IngredientButton>
        ),
      )}

      <IngredientButton
        text="Next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-secondary-400 disabled:opacity-10"
      />
    </div>
  );
};
