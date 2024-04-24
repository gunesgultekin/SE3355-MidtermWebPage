
document.getElementById('search-btn').addEventListener('click', search);
function search(){
  const searchKey = document.getElementById("search-field").value;
  const url = '/searchPage/search.html?search_key=' + encodeURIComponent(searchKey);
  window.location.href = url;
}


function displayResults(data) {

  var cardSection = document.getElementById("product-card");
  var detailSection = document.getElementById("detail-section")

    const divElement = document.createElement("div");
    divElement.classList.add("w3-card-4");
    divElement.style.display = "inline-block";
    
    const imgElement = document.createElement("img");
    imgElement.classList.add("product-photo");
    imgElement.style.objectFit = "cover";
    imgElement.style.width="100%";
    
    imgElement.src = data.image;
    imgElement.alt = data.name;

    const titleElement = document.createElement("p");
    titleElement.textContent = data.name;
    titleElement.style.fontSize = "20px";
    titleElement.style.fontWeight = "bold";
    titleElement.style.marginTop = "50px";
    titleElement.style.marginBottom= "1px";
    

    const brandRow = document.createElement("row");
    brandRow.style.marginTop = "8px";
    brandRow.style.verticalAlign = "center";

    const manufacturerElement = document.createElement("p");
    manufacturerElement.textContent = data.manufacturer;
    manufacturerElement.style.color = "blue";
    manufacturerElement.style.fontWeight = "bold";
    

    brandRow.appendChild(manufacturerElement);
    

    const priceElement = document.createElement("p");
    priceElement.textContent = data.price + " TL";
    priceElement.style.fontSize = "20px";
    priceElement.style.fontWeight = "bold";

    const monthlyPaymentElement = document.createElement("p");
    monthlyPaymentElement.textContent = Math.round(data.price/6) + " x 6 aya varan Taksitle";

    const cargoPriceText = document.createElement("p");
    cargoPriceText.textContent = "200 TL üzeri kargo bedava";
    cargoPriceText.style.color = "green";
    cargoPriceText.style.marginTop = "10px";

    // Star rating
    const rating = data.rating; // Rating value from data
    const starRatingDiv = document.createElement('div');
    starRatingDiv.classList.add('star-rating');
      
    for (let j = 1; j <= 5; j++) {
      const star = document.createElement('span');
      star.textContent = j <= rating ? '★' : '☆'; // Determine whether to display a filled or empty star
      star.style.color = "orange";
      star.classList.add('star');
      star.style.fontSize = "25px";
      starRatingDiv.appendChild(star);
    }
      
    const ratingElement = document.createElement("p");
    ratingElement.style.marginLeft = "40%";
    ratingElement.textContent = rating;
    const commentCountElement = document.createElement("p");
    commentCountElement.style.fontSize = "12px";
    commentCountElement.style.fontWeight = "bold";
    commentCountElement.style.color = "grey";
    commentCountElement.style.marginLeft = "1px";


    commentCountElement.textContent = data.comment_count + " Değerlendirme";

      brandRow.appendChild(ratingElement);
      brandRow.appendChild(starRatingDiv);
      brandRow.appendChild(commentCountElement);
    
    const dealerRow = document.createElement("row");
    dealerRow.style.backgroundColor = "white";
    dealerRow.style.borderRadius = "5px";
    dealerRow.style.padding = "7.5px";
    
    const dealerHeader = document.createElement("p");
    dealerHeader.textContent = "Satıcı: ";
    dealerHeader.style.margin = "0px";
    dealerHeader.style.marginLeft = "10px";
    dealerHeader.style.marginRight = "5px";

    const dealerElement = document.createElement("p");
    dealerElement.textContent = data.dealer;
    dealerElement.style.margin = "0px";
    dealerElement.style.color = "blue";
    dealerElement.style.fontWeight = "bold";

    const dealerRatingHeader = document.createElement("p");
    dealerRatingHeader.textContent = "Puan: ";
    dealerRatingHeader.style.margin = "0px";
    dealerRatingHeader.style.marginLeft = "10px";
    dealerRatingHeader.style.marginRight = "5px";
    
    const dealerRatingElement = document.createElement("p");
    dealerRatingElement.textContent = data.dealer_rating;
    dealerRatingElement.style.padding = "3.5px"
    dealerRatingElement.style.color = "white";
    dealerRatingElement.style.backgroundColor = "rgb(0, 176, 0)";
    dealerRatingElement.style.borderRadius = "2px";
    dealerRatingElement.style.fontWeight = "bolder";
    dealerRatingElement.style.margin = "0px";
    
  
    const helpButton = document.createElement("button");
    helpButton.innerHTML = "&#63";
    helpButton.style.borderRadius = "20px";
    helpButton.style.border = "none";
    helpButton.style.backgroundColor = "lightgrey";
    helpButton.style.marginLeft = "5px";
    helpButton.style.fontSize = "10px";

    const campaignsButton = document.createElement("button");
    campaignsButton.textContent = "Kampanyaları Gör";
    campaignsButton.style.fontWeight = "bold";
    campaignsButton.style.backgroundColor = "white",
    campaignsButton.style.borderColor = "grey";
    campaignsButton.style.borderWidth = "1px";
    campaignsButton.style.borderRadius = "5px";
    campaignsButton.style.padding = "5px";
    campaignsButton.style.marginLeft = "5px";
    campaignsButton.style.margin = "1px";

    const askDealerButton = document.createElement("button");
    askDealerButton.textContent = "Satıcıya Sor";
    askDealerButton.style.backgroundColor = "white";
    askDealerButton.style.borderColor = "grey";
    askDealerButton.style.borderWidth = "1px";
    askDealerButton.style.borderRadius = "10px";
    askDealerButton.style.padding = "5px";
    askDealerButton.style.marginLeft = "8px";
    
    const shoppingCardRow = document.createElement("row");

    const quantityElement = document.createElement("input");
    quantityElement.setAttribute("type","number");
    quantityElement.setAttribute("value","1");
    quantityElement.setAttribute("min","1");
    quantityElement.style.width="60px"
    quantityElement.style.fontSize = "20px";
    quantityElement.style.padding = "5px";
    quantityElement.style.borderRadius = "8px";

    const quantityHeader = document.createElement("p");
    quantityHeader.textContent = "Adet";
    quantityHeader.style.marginLeft = "8px"
    quantityHeader.style.fontSize = "13.5px";

    const shoppingIcon = document.createElement("i");
    shoppingIcon.classList.add("fa", "fa-shopping-cart");
    
    shoppingIcon.style.marginRight = "7px";

    const addToChartButton = document.createElement("button");
    addToChartButton.textContent = "Sepete Ekle";
    addToChartButton.style.fontWeight = "bold";
    addToChartButton.style.backgroundColor = "rgb(240, 107, 0)",
    addToChartButton.style.color = "white";
    addToChartButton.style.border = "none";
    addToChartButton.style.borderRadius = "5px";
    addToChartButton.style.padding = "5px";
    addToChartButton.style.marginLeft = "10px";
    addToChartButton.style.textAlign = "center";
    addToChartButton.style.padding = "12.5px";
   
   
    

    addToChartButton.insertBefore(shoppingIcon, addToChartButton.firstChild);

    shoppingCardRow.appendChild(quantityElement);
    shoppingCardRow.appendChild(quantityHeader);
    shoppingCardRow.appendChild(addToChartButton);

    dealerRow.appendChild(dealerHeader);
    dealerRow.appendChild(dealerElement);

    dealerRow.appendChild(dealerRatingHeader);
    dealerRow.appendChild(dealerRatingElement);
    
    dealerRow.appendChild(helpButton);
    dealerRow.appendChild(campaignsButton);
    dealerRow.appendChild(askDealerButton);
      
    
    divElement.appendChild(imgElement);
    cardSection.appendChild(divElement);

    detailSection.appendChild(titleElement)
    detailSection.appendChild(brandRow);
    detailSection.appendChild(priceElement);
    detailSection.appendChild(monthlyPaymentElement)
    detailSection.appendChild(dealerRow);
    detailSection.appendChild(cargoPriceText);
    detailSection.appendChild(shoppingCardRow);
    
}



function getDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const dataParam = urlParams.get('title');

  var localHost = "API LINK";

  fetch(localHost + dataParam)
    .then(response => response.json()
    .then(data => {
      displayResults(data);

    })
  )

}

getDetails();

