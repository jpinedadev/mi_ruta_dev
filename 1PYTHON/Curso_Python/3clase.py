#Diccionarios
edades = {"Gino":15, "Nora":45} #diccionario con pares clave-valor
print(edades["Gino"])
edades["Talina"]=67 #agregar nuevo par clave-valor 
print(edades)
edades["Gino"]=17  #modificar par clave-valor
print(edades)
del edades["Gino"] #eliminar par clave-valor
print(edades)
#revisar si existe
print("Gino" in edades)

#Ciclos
#ciclo for 

for i in range(4):
    print(i)

letras={"a":1,"b":2}
#obtiene las claves
for clave in letras:
    print(clave)
#obitiene los valores
for valor in letras.values():
    print(valor)
#obtiene ambos
for clave,valor in letras.items():
    print(clave,valor)


#ciclo while 
x=20
while x<35:
    print(x)
    x+=3 

#Funciones 

def mostrar_mensaje():
    print("¡Hola, Mundo!")

mostrar_mensaje()   #llamado de la funcion 

#utlizando parametros en funciones 
def mostrar_doble(num):
    print(num * 2)

mostrar_doble(2)

def sumar(x,y): 
    print(x+y)

sumar(4,5)

def sumar2(x,y):
    return x+y

resultado  = sumar2(4,5)
print(resultado)

def fibonacci(n):
    if n ==0 or n == 1:
        return n 
    else: 
        return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(7))
