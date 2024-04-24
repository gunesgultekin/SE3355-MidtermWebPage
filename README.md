# Basic Implementation of a E-Commerce Site based on www.hepsiburada.com
## The site front-end was created using HTML, CSS, JavaScript and Bootstrap library.
## Retrieves product information from a MSSQL database through requesting a Flask-based web api hosted on Azure Cloud : https://github.com/gunesgultekin/SE3355-FlaskAPI
## Main Page

![index](https://github.com/gunesgultekin/SE3355-MidtermWebPage/assets/126399958/313ba6d4-9c4d-4812-915a-fbb8f0d3b6ee)

Advertisement visuals are loaded dynamically from database.

## Search Page

![allprod](https://github.com/gunesgultekin/SE3355-MidtermWebPage/assets/126399958/73c8b129-ac8a-4844-9e44-22ca4aa873e7)


All product visuals and details are obtained from database.

![search](https://github.com/gunesgultekin/SE3355-MidtermWebPage/assets/126399958/dc1dfc35-de68-4c68-8569-1d041794c5bb)

According to the input entered in the search bar, it will list the product results associated with that keyword.
* By Clicking the 'Title' of the product you will navigate to Details Page including all the information about selected product.
* (Example search results for keyword 'telefon')

## Details Page

![details](https://github.com/gunesgultekin/SE3355-MidtermWebPage/assets/126399958/4147169d-e32e-4c9a-9614-6824115f9897)

All the detailed information related with selected product will be displayed.

## ! Problems
* Azure SQL database pauses the database after a certain period of time due to the 'auto-pause' feature.
Therefore, images and information may not be loaded when you first enter the site. (Deployment link provided)
The database will be accessed automatically within 1 minute and the API will respond to requests.

## Data Model - Tables

![midtermDataModel](https://github.com/gunesgultekin/SE3355-MidtermWebPage/assets/126399958/7dc11333-84d6-46b2-8eb1-869f1b025ff0)

