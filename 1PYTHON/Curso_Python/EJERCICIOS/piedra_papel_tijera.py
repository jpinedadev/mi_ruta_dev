#piedra, papel o tijera

# piedra le gana a tijera 
# tijera le gana al papel 
# papel le gana a la piedra 

import random


def jugar():
    usuario = input("Escoge una opcion: \n'pi' para piedra \n'pa' para papel  \n'ti' para tijera.\n ==> ").lower()
    computadora = random.choice(['pi','pa','ti'])
    print(f"La computadora seleccionó {computadora}")

    if usuario == computadora:
        return '¡Empate!'
    if gano_el_jugador(usuario,computadora):
        return '¡Ganaste!'

    return '¡Perdiste!'


def gano_el_jugador(jugador,oponente):
    # Retornar True si gana el jugador. 
    # piedra gana a tijera (pi > ti)
    # tijera gana a papel (ti > pa)
    # papel gana a piedra (pa > pi)

    if ((jugador == 'pi' and oponente == 'ti')
        or (jugador == 'ti' and oponente == 'pa')
        or (jugador == 'pa' and oponente == 'pi')):
        return True
    else:
        return False

print(jugar())


#fin del juego 
