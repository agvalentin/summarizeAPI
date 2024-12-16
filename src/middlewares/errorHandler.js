const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err.response) {
    // Handle API error responses
    return res.status(err.response.status || 500).json({
      error: err.response.data || 'An error occurred with the external API'
    });
  }

  res.status(500).json({
    error: 'Internal Server Error'
  });
};

export default errorHandler;
