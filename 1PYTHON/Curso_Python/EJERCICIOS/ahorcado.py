#Juego del ahorcado en python
import random
import string
from palabras import palabras
from ahorcado_diagramas import vidas_diccionario_visual

def obtener_palabra_valida(palabras):
    # seleccionar una palabra al azar de la lista 
    palabra = random.choice(palabras)


    while '-' in palabra or ' ' in palabra:
        palabra = random.choice(palabras)
    return palabra.upper()


def ahorcado():
    print("=====================================")
    print("¡Bienvenido(a) al juego del ahorcado!")
    print("=====================================")
    print("uno")
    palabra = obtener_palabra_valida(palabras)
    
    letras_por_adivinar = set(palabra)
    letras_adivinadas = set()
    abecedario = set(string.ascii_uppercase)
    print("dos")

    vidas = 7

    print("letras_por_adivinar")

    while len(letras_por_adivinar) > 0 and vidas > 0:
        print(f"Te quedan {vidas} vidas y has usado estas letras: {' '.join(letras_adivinadas)}")
        #mostrar el estado actual de la palabra 
        palabra_lista = [letra if letra in letras_adivinadas else '-' for letra in palabra]
        #mostra estado del ahorcado 
        print(vidas_diccionario_visual[vidas])
        #mostrar las letras separadas por un espacio 
        print(f"Palabra: {' '.join(palabra_lista)}")

        letra_usuario = input("Escoge una letra: ").upper()
        
        #si la letra escogida por el usuario esta en el abecedario y no esta en el conjunto
        #de letras que ya se han ingresado, se añade la letra al conjunto de letras ingresada
        if letra_usuario in abecedario - letras_adivinadas:
            letras_adivinadas.add(letra_usuario)

            #si letra esta en la palabra 
            #quitar la letra del conjunto de letras pendientes 
            #por adivinar 
            #si no esta en la palabra, quitar una vida al usuario 
            if letra_usuario in letras_por_adivinar:
                letras_por_adivinar.remove(letra_usuario)
                print('')
            else:
                vidas -= 1
                print(f"\n Tu letra, {letra_usuario} no esta en la palabra. ")
        #si la letra escogida por el usaurio ya fue ingresada 
        elif letra_usuario in letras_adivinadas: 
            print("\n ya escogiste esa letra. por favor escoge una letra nueva.")

        else:
            print("\n esta letra no es valida.")
    
    #el juego llega a esta linea cuando se adivinan todas las letras de la palabra 
    #o cuando se agotan las vidas del jugador.

    if vidas == 0:
        print(vidas_diccionario_visual[vidas])
        print(f"¡Ahorcado! perdiste. lo lamento mucho, la palabra era: {palabra}")
    else:
        print(f"¡Excelente adivinaste la palabra {palabra}!")


ahorcado()







