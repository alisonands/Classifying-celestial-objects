from flask import Flask, render_template
import pandas as pd
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/exo_mass.html')
def ml_4():
    return render_template('exo_mass.html')

@app.route('/5_stars_and_galaxies.html')
def sqg_5():
    return render_template('5_stars_and_galaxies.html')

@app.route('/random_planet_url')
def random_planet_url():
    data = pd.read_csv('website_template/hwc_table_all.csv')
    planet = random.choice(data['Name'].tolist())
    planet = planet.replace(" ", "")
    url = f'https://exoplanetarchive.ipac.caltech.edu/overview/{planet}'
    return url

if __name__ == '__main__':
    app.run(debug = True)
