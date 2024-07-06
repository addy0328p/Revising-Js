fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Handle the data received from the server
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
