#La computadora debe adivinar el numero 
import random

def adivina_el_numero_computadora(x):
    print("========================")
    print("¡Bienvenido(a) al juego!")
    print("========================")
    print(f"Selecione un numero entre 1 y {x} para que la computadora intente adivinarlo.")

    limite_inferior = 1
    limite_superior = x

    respuesta = ""

    while respuesta != "c":
        #generar una prediccion 
        if limite_inferior != limite_superior:
            prediccion = random.randint(limite_inferior, limite_superior)
        else:
            prediccion = limite_inferior

        #obtener una respuesta del usuario 
        respuesta = input(f"Mi prediccion es {prediccion}. \n Si es alta ingresa (A).\n Si es baja ingresa (B).\n Si es correcta ingresa (C) \n ==> ").lower()

        if respuesta == "a":
            limite_superior = prediccion - 1
        elif respuesta == "b":
            limite_inferior = prediccion + 1
    

    print(f"¡Siii! La computadora adivino tu numero correctamente: {prediccion}.")

adivina_el_numero_computadora(10)




#fin del juego
