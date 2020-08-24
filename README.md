# NS275_monks
AIM: Develop a real time land usage monitoring tool using satellite data and Artificial intelligence etc.

Here, we have uploaded 4 Directories/folder, here is the explanation of each directory/folder:

# Directory 1:App_ML

-> In this directory we have code for User Interface of our Crop Prediction Model(Directory 2), we have build it using, Python 3.6+.
-> Python packages we have used:
   1. Flask(Framework)
   2. Pandas
   3. Sklearn
   4. keras
   5. Matplotlib


# Directory 2: Crop Prediction

-> In this application, first we collected all the required datasets from google earth engine using GLDAS-2.1 satellite.

->Then we have picked random points of Uttar Pradesh and collected the data of NDVI values, Humidity, Soil Moisture and Temperature for year 2015 to 2019.

-> then we train our machine learning model from the given datasets for year 2015-2018.

-> We have used 2019 dataset as testing dataset and predicted the quantity of wheat(can predict the quantity of other crops also like rice,maize,paddy,etc). We finally deployed this model to the web.

-> What we have achieved:
 1. The accuracy of our model comes out to be 90%.
 2. We have also predicted the coming year values of NDVI,Humidity,Soil Moisture and Temperature.  
 3. We are able to predict crop production of wheat and rice for next year.


# Directory 3: Monks
  
  -> In this directory we have our website, On website you can find basic information about our team, our presentation slides, presentation video etc.
  
  -> Links to our both apps is also available on our website to use.




# Directory4: Landcover classification
State wise classification app:

https://sherlockjhon007.users.earthengine.app/view/monksapp

Classification of district Patna:

https://sherlockjhon007.users.earthengine.app/view/sih20patna

-> Solution Description: In this application, first you have to select year and state and perform the classification. After completion of the classification, selected state will be highlighted. Now you can select particular class,lets say cropland,  select opacity and then click, show area, to see the area of that class in selected region.

-> Selected class area also gets highlighted on the map.

-> To calculate and visualise the difference in area of selected class for two different years, you just have to select start year and end year and click
calculate. It will show you the difference as well as a graph to visulise it.


-> What we have achieved?
  1. We are able to classify area state wise as well as district wise.
  2. We are able to compare area for two dfferent years.
  3. Classified area can be seen on the map


Technology used: Google Eart Engine,Google Cloud,Random Forest for classification, javascript for writing code

Satellites used: LANDSAT and GAUL

Note:
1.Increasing the computation power and datset will further improve the accuracy.
2.Given code runs on google earth engine code editor,so one should have google earth engine account to run the given code.
