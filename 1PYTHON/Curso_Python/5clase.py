#importaciones 
#forma 1 
import math
print(math.pow(9,2))
print(math.pi)

#forma 2
import math as matematicas
matematicas.pow(9,2)
matematicas.pi

#forma 3 
from math import pow
pow(9,2)

#excepciones / manejo de errores 
num1 = int(input("Ingrese un numero: "))
num2 = int(input("Ingrese otro numero: "))

#forma 1 
try:
    resultado = num1 / num2 
    print(f" {num1} / {num2} =", resultado)
except:
    print("Alerta, Excepcion.")

#otras formas 
#except ZeroDivisionError:  #especifica el error
#   print("Error")

#except ZeroDivisionError as e:  #muestra el error 
#   print(e)
#else:                      #si try no muestra error 
    #print("else")

#finally:   #ejecuta una accion siempre si, exista error o no 
    




