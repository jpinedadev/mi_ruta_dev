#diccionario python a cadena de caracteres json 
import json 

# Diccionario Python
cliente = {
    "nombre": "Nora",
    "edad": 56,
    "id": "45355",
    "color_ojos": "verdes",
    "usa_lentes": False
}

#obtener una cadena de caracteres json 
cliente_JSON = json.dumps(cliente, indent=4) #crea una cadena de json 
#mostrando los datos con indentacion 

print(cliente_JSON)

