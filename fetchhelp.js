fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse response body as JSON
  })
  .then(data => {
    console.log(data); // Process the retrieved data
  })
  .catch(error => {
    console.error('Fetch error:', error); // Catches error if any
  });
