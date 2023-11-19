#!/bin/bash

# Instalação das dependências
pip install -r requirements.txt

# Inicialização do aplicativo Flask
export FLASK_APP=run.py
export FLASK_ENV=development

# Execução do aplicativo Flask
python -m flask run
