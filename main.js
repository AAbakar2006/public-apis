// API URL 
const apiUrl = "https://dog.ceo/api/breeds/image/random";

fetch(apiUrl)
    .then(response => response.json())

    .then(data => {

        const imageUrl = data.message;

        const dogImage = document.getElementById('dog-image');

        dogImage.src = imageUrl;
    })
    .catch(error => {
        
        console.error("Error fetching data: ", error);
    });



    