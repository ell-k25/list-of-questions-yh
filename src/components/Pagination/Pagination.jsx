import { getPagination } from "../../utils/getPagination";
import styles from "./styles.module.css";
import paginationArrowLeft from "../../assets/icon/paginationArrowLeft.png";
import paginationArrowRight from "../../assets/icon/paginationArrowRight.png";

const Pagination = ({ currentPage, total, onClickPage }) => {
  console.log("currentPage:", currentPage);
  console.log("total:", total);
  const { pages, canClickPrevious, canClickNext } = getPagination(
    currentPage,
    total,
  );
  console.log("pages:", pages);
  return (
    <ul className={styles.paginationList}>
      <li>
        <button
          type="button"
          onClick={() => onClickPage((prev) => prev - 1)}
          disabled={!canClickPrevious}
          aria-label="Предыдущая страница"
        >
          <img src={paginationArrowLeft} width={28} height={28} alt="" />
        </button>
      </li>

      {pages.map((page, index) => (
        <li
          key={`${page}-${index}`}
          className={`${styles.paginationItem} ${
    currentPage === page ? styles.active : ""
  }`}
        >
          <button
            type="button"
            onClick={() => {
              if (page !== "..." && page !== currentPage) {
                onClickPage(page);
              }
            }}
            disabled={page === "..."}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </button>
        </li>
      ))}
      <li>
        <button
          type="button"
          onClick={() => onClickPage((prev) => prev + 1)}
          disabled={!canClickNext}
          aria-label="Следующая страница"
        >
          <img src={paginationArrowRight} width={28} height={28} alt="" />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
