const Pagination = ({
  pagination: currentPage,
  setPagination: changePagination,
  totalProducts,
}) => {
  return (
    <div className="flex justify-center gap-5 text-white font-semibold">
      <button
        onClick={() => {
          if (currentPage > 1) changePagination(currentPage - 1);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <span>
        <select
          name=""
          id=""
          value={currentPage}
          className="bg-transparent appearance-none cursor-pointer underline"
          onChange={(e) => changePagination(Number(e.target.value))}
        >
          {Array.from({ length: totalProducts }, (_, i) => (
            <option className="bg-[#202435]" value={i + 1} key={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </span>
      <span> of </span>
      <span>{totalProducts}</span>
      <button
        onClick={() => {
          if (currentPage < totalProducts) changePagination(currentPage + 1);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
