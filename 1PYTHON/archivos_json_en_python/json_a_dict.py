#para leer los datos de un json debemos transformarlo a un diccionario

import json #importar el modulo  json de python 

#cadena de caracteres json 
datos_JSON =  """
{
	"tamano": "mediana",
	"precio": 15.67,
	"toppings": ["champinones", "queso extra", "pepperoni", "albahaca"],
	"cliente": {
		"nombre": "Jane Doe",
		"telefono": "455-344-234",
		"correo": "janedoe@email.com"
	}
}
"""

datos_diccionario = json.loads(datos_JSON) #crear un dict 
print(datos_diccionario) #obtiene todos los datos 

#obtiene datos individuales 
print(datos_diccionario["tamano"]) 
print(datos_diccionario["precio"])
print(datos_diccionario["toppings"])
print(datos_diccionario["cliente"])
#obitiene datos individuales dentro de los mismos 
print(datos_diccionario["cliente"]["nombre"])



