export function getPagination(currentPage, total) {
  const pages = []

  if (total <= 7) {
    for (let page = 1; page <= total; page++) {
      pages.push(page)
    }
  } else if (currentPage <= 4) {
    pages.push(1, 2, 3, 4, 5, '...', total)
  } else if (currentPage >= total - 3) {
    pages.push(1, '...', total - 4, total - 3, total - 2, total - 1, total)
  } else {
    pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', total)
  }

  return {
    pages,
    canClickPrevious: currentPage > 1,
    canClickNext: currentPage < total,
  }
}