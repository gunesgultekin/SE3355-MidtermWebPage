
document.getElementById('search-btn').addEventListener('click', search);

function search(){
  const searchKey = document.getElementById("search-field").value;
  const url = '/searchPage/search.html?search_key=' + encodeURIComponent(searchKey);
  window.location.href = url;
}


function getDataFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const dataParam = urlParams.get('search_key');
    getDetail(dataParam);
  }

  
  async function navigateDetailPage(search_key){
    const url = '../detailsPage/detail.html?title=' + encodeURIComponent(search_key);
    window.location.href = url;
  }



  async function getDetail (search_key) {
    //var localHost = "http://127.0.0.1:5000/api/search?key";
    var cloudHost = "API LINK";
    fetch(cloudHost+"="+search_key)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          console.log(data);
          displayResults(data);
      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
   
  }
  
  function displayResults(data) {

    var sidebarList = document.getElementById("categoryList");  
    var cardSection = document.getElementById("product-cards");
    var categories = [];

    var row;
    
    for(i=0;i<data['products'].length;++i){

      if (i > 0 && i % 4 === 0) { // Add a new row after every 4 images
        row = document.createElement("div");
        row.classList.add("row");
        cardSection.appendChild(row);
        
      }

      categories[i] = data['products'][i]['category'];
      const divElement = document.createElement("div");
      divElement.style.display = "inline-block";
      divElement.style.margin="40px"

      const imgElement = document.createElement("img");
      imgElement.classList.add("product-photo");
      imgElement.style.objectFit = "cover";

      imgElement.addEventListener('click',function () {
        imgElement.style.opacity = "25%";
      })

      imgElement.addEventListener('mouseenter',function() {
        imgElement.style.cursor = "pointer";
        imgElement.style.opacity = "75%";
      });

      imgElement.addEventListener("mouseleave", function() {
        imgElement.style.cursor = "none";
        imgElement.style.opacity = "100%";

      })

      imgElement.src = data['products'][i]['image'];
      imgElement.alt = data['products'][i]['name'];

    
      // Star rating
    const rating = data['products'][i]['rating']; // Rating value from data
    const starRatingDiv = document.createElement('div');
    starRatingDiv.classList.add('star-rating');
    
    for (let j = 1; j <= 5; j++) {
      const star = document.createElement('span');
      star.textContent = j <= rating ? '★' : '☆'; // Determine whether to display a filled or empty star
      star.style.color = "orange";
      star.classList.add('star');
      starRatingDiv.appendChild(star);
    }
    

      const manufacturerContainer = document.createElement("div");
     
      const titleContainer = document.createElement("div");
      titleContainer.style.width = "200px";
      const titleParagraph = document.createElement("p");
      titleParagraph.textContent = data['products'][i]['name'];
      titleContainer.appendChild(titleParagraph);

      titleContainer.addEventListener('click', function() {
        titleContainer.style.opacity = "25%"
        //console.log(titleParagraph.textContent);
        navigateDetailPage(titleParagraph.textContent);
        
      });

      titleContainer.addEventListener('mouseenter', function() {
        titleContainer.style.opacity = "75%";
        titleContainer.style.cursor = "pointer";
        
      })

      titleContainer.addEventListener('mouseleave', function() {
        titleContainer.style.opacity = "100%"
      })

      const ratingContainer = document.createElement("div");
      //ratingContainer.classList.add("w3-container", "w3-center");
      const ratingParagraph = document.createElement("p");
      ratingParagraph.style.fontSize = "12px";
      ratingParagraph.style.color = "grey";
      ratingParagraph.textContent = data['products'][i]['rating'];
      ratingContainer.appendChild(ratingParagraph);
    
      const priceContainer = document.createElement("div");
      ratingContainer.classList.add("w3-container", "w3-center");
      const priceParagraph = document.createElement("p");
      priceParagraph.style.fontWeight = "bolder";
      priceParagraph.textContent = data['products'][i]['price']+" TL";
      ratingContainer.appendChild(priceParagraph);

      
      divElement.appendChild(imgElement);
      divElement.appendChild(titleContainer);
      divElement.appendChild(starRatingDiv);
      divElement.appendChild(ratingContainer);
      divElement.appendChild(priceContainer);
      divElement.appendChild(ratingContainer);

      cardSection.appendChild(divElement);

  }

 var categoriesUnique = new Set(categories);

 const categoriesArray = Array.from(categoriesUnique);
  
  for(i=0;i<categoriesUnique.size;++i){
    const listNode = document.createElement("li");
    const categoryLabel = document.createTextNode(categoriesArray[i]);
    listNode.appendChild(categoryLabel);
    sidebarList.appendChild(listNode);
  }

}
  