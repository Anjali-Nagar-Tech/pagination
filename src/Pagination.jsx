export default function Pagination({
  go_to_next_page,
  go_to_previous_page,
  handleClick,
  No_of_pages,
  current_page,
}) {
  return (
    <div className="pagination_container">
      <button
        className="page_number"
        onClick={() => go_to_previous_page()}
        disabled={current_page === 0}
      >
        ⬅️
      </button>
      {[
        ...Array(No_of_pages)
          .keys()
          .map((n) => (
            <button
              key={n}
              className={"page_number " + (n === current_page ? "active" : "")}
              onClick={() => handleClick(n)}
            >
              {n}
            </button>
          )),
      ]}
      <button
        className="page_number"
        onClick={() => go_to_next_page()}
        disabled={current_page === No_of_pages - 1}
      >
        ➡️
      </button>
    </div>
  );
}
