
document.getElementById('search-btn').addEventListener('click', search);


function search(){
  const searchKey = document.getElementById("search-field").value;
  const url = '/searchPage/search.html?search_key=' + encodeURIComponent(searchKey);
  window.location.href = url;
}

//var localAdLoader = "http://127.0.0.1:5000/loadAds"
var cloudAdLoader = "API LINK ";

fetch(cloudAdLoader)
   .then(response => response.json())
   .then(data=> {
    const carouselInner = document.getElementById('carousel-inner');
    for(let i=0; i<data['ads'].length;++i){
      const item = data['ads'][i];
      const activeClass = i === 0 ? 'active' : ''; 
      const carouselItem = `
          <div class="carousel-item ${activeClass}">
            <img src="${item['image']}" class="d-block w-100" alt="...">      
            </div>
          </div>
        `;
        carouselInner.innerHTML += carouselItem;
    }
   })
   .catch(error => console.error('Error fetching data:', error));