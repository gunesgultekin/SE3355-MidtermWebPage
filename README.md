# Basic Implementation of a E-Commerce Site based on www.hepsiburada.com
## The site front-end was created using HTML, CSS, JavaScript and Bootstrap library.
## Retrieves product information from a MSSQL database through requesting a Flask-based web api hosted on Azure Cloud

## Main Page

![index](https://github.com/gunesgultekin/WebProgramming-Midterm/assets/126399958/5dd4ca97-58c4-48cb-bfa0-b4c5ff9edac3)

Advertisement visuals are loaded dynamically from database.

## Search Page

![allprod](https://github.com/gunesgultekin/WebProgramming-Midterm/assets/126399958/5f0a68d3-30d1-4f98-a17f-c7069f02a45f)

All product visuals and details are obtained from database.


![search](https://github.com/gunesgultekin/WebProgramming-Midterm/assets/126399958/9afc8a3e-0999-405b-abee-57182ad366b2)

According to the input entered in the search bar, it will list the product results associated with that keyword.
* By Clicking the 'Title' of the product you will navigate to Details Page including all the information about selected product.
* (Example search results for keyword 'telefon')

## Details Page

![details](https://github.com/gunesgultekin/WebProgramming-Midterm/assets/126399958/2d278c93-0548-4dcc-b3ac-db884b450ec0)
All the detailed information related with selected product will be displayed.

## ! Problems
* Azure SQL database pauses the database after a certain period of time due to the 'auto-pause' feature.
Therefore, images and information may not be loaded when you first enter the site. (Deployment link provided)
The database will be accessed automatically within 1 minute and the API will respond to requests.

## Data Model - Tables
![midtermDataModel](https://github.com/gunesgultekin/WebProgramming-Midterm/assets/126399958/fbaba9f0-e03f-4648-8b72-6068f2a9d77a)

