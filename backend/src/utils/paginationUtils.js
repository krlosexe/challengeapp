function generatePaginationResponse(page, pageSize, totalItems, path) {
    const totalPages = Math.ceil(totalItems / pageSize);
  
    const responseData = {
      current_page: parseInt(page, 10),
      data: [],
      first_page_url: `${path}?page=1&pageSize=${pageSize}`,
      last_page_url: `${path}?page=${totalPages}&pageSize=${pageSize}`,
      next_page_url: page < totalPages ? `${path}?page=${parseInt(page, 10) + 1}&pageSize=${pageSize}` : null,
      path: `${path}`,
      per_page: parseInt(pageSize, 10),
      prev_page_url: page > 1 ? `${path}?page=${parseInt(page, 10) - 1}&pageSize=${pageSize}` : null,
      total: totalItems,
    };
  
    return responseData;
  }
  
  module.exports = {
    generatePaginationResponse,
  };