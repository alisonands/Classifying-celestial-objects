# Classification and regression analysis on planets, stars, and galaxies
## Main analysis:
1. The mass of stars, planets, and other celestial bodies are determined through their relationships with flux, density, temperature, and radii. Can machine learning models predict the mass of planets without this knowledge, based on other factors of the planetary system, such as ellipticity of the orbits and the light curve of the star. 
2. Distinguishing between stars, galaxies, and QSOs.
- A common method of analysis when distinguishing between dots of light in the sky is through analysis of the light that they emit. Using the spectral bands u, g, r, i, and z of three classes of objects (galaxies, QSOs and stars), we will test between SVC, Decision Trees, and Random Forests, to determine if we can develop a strong model to predict the classification of these objects, and which model returns the highest accuracy.

## ML Models
1. In predicting the mass of stars, we will test the dataset against Decision Tree and Random Forest regression models from scikit-learn, and compare the metrics to determine which model performs better.
2. To distinguish between three classes, we can use a classification based model. For the proposed test in distinguishing between galaxies, QSOs, and stars we can apply SVC, Decision Tree and Random Forest classifier models, and compare their metrics. 

## Space
[Exoplanets](https://exoplanet.eu/catalog/)\
[NASA exoplanet archive](https://exoplanetarchive.ipac.caltech.edu/docs/TAP/usingTAP.html)\
[SDSS](https://dr18.sdss.org/)\
[SDSS skysurvey](https://skyserver.sdss.org/dr9/en/help/browser/browser.asp)\
[SQL queries](https://skyserver.sdss.org/dr9/en/tools/search/sql.asp)


### Resources
- [TeX for html](https://www.maths.nottingham.ac.uk/plp/pmadw/lm.html)
- [Wavelengths](https://voyages.sdss.org/preflight/light/filters/)
