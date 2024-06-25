# Classification and regression analysis on planets, stars, and galaxies
## Main analysis:
1. The mass of stars, planets, and other celestial bodies are determined through their relationships with flux, density, temperature, and radii. Can machine learning models predict the mass of planets without this knowledge, based on other factors of the planetary system, such as ellipticity of the orbits and the light curve of the star. 
2. Distinguishing between stars, galaxies, and QSOs.
- A common method of analysis when distinguishing between dots of light in the sky is through analysis of the light that they emit. Using the spectral bands u, g, r, i, and z of three classes of objects (galaxies, QSOs and stars), we will test between SVC, Decision Trees, and Random Forests, to determine if we can develop a strong model to predict the classification of these objects, and which model returns the highest accuracy.

Now deployed here: [Applying Machine Learning Methods to celestial objects](http://alisonands.pythonanywhere.com/) :)

## Project overview
### 1. Exoplanets
In predicting the mass of stars, we will test the dataset against Decision Tree and Random Forest regression models from scikit-learn, and compare the metrics to determine which model performs better.
- In observational astronomy, the mass of a celestial bodies is determined based on several physical features.
Features like the mass and radius are not immediately apparent, and can be challenging to determine. In this study, we test to see if we can use machine learning models on exoplanets to determine if using a range of other variables can determine the mass of a given planet. Specifically, we are looking for relationships between the mass of a planet and any other apparent variables.
- In this study, we will take out three important variables, the radius, radial velocity, and density, to see if there is a difference in results. We can also use this data as a baseline to determine the performance of the models. For a standard deviation of 535.39, the random forest returns median difference of 22.68 and the decision tree returns a median difference of 31.78.

### 2. Classification of stars and galaxies
To distinguish between three classes, we can use a classification based model. For the proposed test in distinguishing between galaxies, QSOs, and stars we can apply SVC, Decision Tree and Random Forest classifier models, and compare their metrics.
- We use a both Decision Trees and Random Forest Classifiers to determine which gives more accurate predictions. The three classes used in this dataset are Galaxies, Stars, and Quasi-Stellar Objects(Quasars).
- The highest population of the dataset are classified as galaxies, where the total number of training rows is 35000.

## Results and Analysis
### 1. Exoplanets
In determining the mass of exoplanets, we see that eliminating main variables such as the radial velocity, radius and density from the dataset poses more of a challenge in determining the masses of the planets. 
There are some major differences in the feature importances after taking out the three main dependent variables. The biggest difference is that the equilibrium temperature of the star plays a significantly larger role in correlations in the random forest model when compared to the decision tree. On the other hand, the transit depth and duration have more of a significance in the decision tree model. As random forests are a series of decision trees, we can say that the results of the feature importances can be more random due to the lack of correlation, and the fact that no variable plays a significantly greater role in determining masses. However, we do know that the mass of a star does play a role in determining the mass of each planet (more on that here). We do also know that light curves play a significant role in determining the velocity and size of a planet, which can be determined by the variables pl_trandep and pl_trandur.

### 2. Classification of stars and galaxies
By comparing the confusion matrices of decision trees and random forests, they both return strong predictions for all three classes. It returns the fewest true counts for QSOs, given that this class had the least number of value counts in the dataset. Overall, we can deduce that the random forest performs better than decision trees. It returned a overall higher number of true positives, compared to the false values.

Overall, the classification results from the random forest regressor yields promising results. Galaxies have the highest precision and recall scores, whereas QSOs have the lowest. Form the metrics, this model to determine whether a class is a galaxy or a star, the lowest metric of stars, the precision, yields a strong 85%. Combined with other factors such as redshifts, these models can be trained to yield results with higher accuracy. QSOs were not predicted to an optimal standard, and we can conclude that more varaibles will likely be required to be able to better predict QSO objects.



## Data
[Exoplanets](https://exoplanet.eu/catalog/)\
[NASA exoplanet archive](https://exoplanetarchive.ipac.caltech.edu/docs/TAP/usingTAP.html)\
[SDSS](https://dr18.sdss.org/)\
[SDSS skysurvey](https://skyserver.sdss.org/dr9/en/help/browser/browser.asp)\
[SQL queries](https://skyserver.sdss.org/dr9/en/tools/search/sql.asp)

## References
- [Wavelengths](https://voyages.sdss.org/preflight/light/filters/)
- [Detecting Exoplanets](http://www.astro.gsu.edu/lab/Supplemental_labs/supplemental_labs_files/exoplanets/Exoplanet_writeup.pdf)

### Resources
- [TeX for html](https://www.maths.nottingham.ac.uk/plp/pmadw/lm.html)
- [Wavelengths](https://voyages.sdss.org/preflight/light/filters/)
