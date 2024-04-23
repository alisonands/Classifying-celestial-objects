from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/4_ML.html')
def ml_4():
    return render_template('4_ML.html')

@app.route('/5_stars_and_galaxies.html')
def sqg_5():
    return render_template('5_stars_and_galaxies.html')

if __name__ == '__main__':
    app.run(debug = True)
