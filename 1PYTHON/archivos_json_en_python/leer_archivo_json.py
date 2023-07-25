#como leer un archivo json en python 

import json 

with open('ordenes.json') as archivo:
    datos = json.load(archivo) #carga su contenido y crea un dict 
    print(len(datos)) #2
    print(datos)
    print(datos["ordenes"][0]["toppings"])
    print(datos["ordenes"][1]["cliente"])
    
