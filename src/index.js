console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        const imageContainer = document.getElementById('dog-image-container');

        data.message.forEach(imageURL => {
            const imgElement = document.createElement('img');
            imgElement.src = imageURL;  
            imageContainer.appendChild(imgElement);
        })
    })
    .catch(error => console.log('Error fetching images:', error));
})

document.addEventListener('DOMContentLoaded', () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        const breedList = document.getElementById('dog-breeds');
        const breeds = data.message;
        const breedDropdown = document.getElementById('breed-dropdown');

        function renderBreeds(filter = '') {
            breedList.innerHTML = '';
            
            for (let breed in breeds) {
                if (breed.startsWith(filter)) {
                 const li = document.createElement('li');
                 li.textContent = breed;

            
              li.addEventListener('click', () => {
                li.style.color = 'purple';
            });

            breedList.appendChild(li)
        }
    }
}
    renderBreeds();

     breedDropdown.addEventListener('change', (event) => {
        const selectedLetter = event.target.value;
        renderBreeds(selectedLetter);
     });
    })
    .catch(error => console.log('Error fetching breeds:', error));
    
});
