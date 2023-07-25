#Archivos en python 
#leer un archivo 
with open("frases_famosas.txt","r") as archivo:
    for linea in archivo:
        print("==== Frase ====")
        print(linea)

#escribir en un archivo 
notas = {
        "Nora": 87,
        "Gino": 100,
        "Loretto": 67,
        "Talina": 45
        }

with open("data_estudiantes.txt","w") as archivo:
    for nombre, nota in notas.items():
        archivo.write(nombre + " - " + str(nota) + "\n")


#añadir datos al archivo existente 
nuevas_notas = {
        "Emily": 54,
        "Daniel": 98,
        "Julienne": 78
        }

with open("data_estudiantes.txt","a") as archivo:
    for nombre, nota in nuevas_notas.items():
        archivo.write(nombre + " - " + str(nota) + "\n")

