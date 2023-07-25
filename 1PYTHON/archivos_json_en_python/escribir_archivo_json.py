#como escribir en un archivo json 

import json 

with open("ordenes.json") as archivo:
    datos = json.load(archivo)
    #eliminar el par clave-valor "cliente de cada orden"
    for orden in datos["ordenes"]:
        del orden["cliente"]
    
    #abrir o crear un archivo ordenes_nuevo.json 
    #y guardar la nueva version de la informacion 

with open("ordenes_nuevo.json","w") as archivo_nuevo:
    json.dump(datos, archivo_nuevo, indent=4)

with open("ordenes_nuevo.json","r") as presenta_datos:
    presenta_datos = json.load(presenta_datos)
    print(presenta_datos)
    print(presenta_datos["ordenes"][0]["toppings"])
