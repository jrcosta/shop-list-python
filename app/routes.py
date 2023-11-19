from app import app
from flask import render_template

@app.route('/')
@app.route('/index')
def index():
    items = ['Arroz', 'Feijão', 'Leite', 'Pão']
    return render_template('index.html', title='Lista de Compras', items=items)