from flask import Flask, render_template
import pymongo
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/hardenstatviz.html/')
def hardenstatviz():
    return render_template('hardenstatviz.html')

@app.route('/hardenheatmap.html/')
def hardenheatmap():
    return render_template('hardenheatmap.html')

@app.route('/lebronstatviz.html/')
def lebronstatviz():
    return render_template('lebronstatviz.html')

@app.route('/lebronheatmap.html/')
def lebronheatmap():
    return render_template('lebronheatmap.html')


if __name__ == "__main__":
    app.run(debug=True)
