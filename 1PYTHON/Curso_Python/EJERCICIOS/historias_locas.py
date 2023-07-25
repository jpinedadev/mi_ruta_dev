#Historias locas
#Concatenar cadenas de caracteres.
#supongamos que queremos crear una cadena que diga: 
#Aprende a programar con _________.

organizacion = "Mi ruta dev"

print("Aprende a programar con "+organizacion)
#print("Aprende a programar con {}".format(organizacion))
#print(f"Aprende a programar con {organizacion}")

adj = input("Adjetivo: ")
verbo1 = input("Verbo: ")
verbo2 = input("Verbo: ")
sustantivo_plural = input("Sustantivo plural: ")

madlib = f"¡Programar es {adj}! Siempre me emociona porque me encanta {verbo1} problemas. ¡Aprende a {verbo2} con Mi ruta dev y alcanza tus {sustantivo_plural}!"

print(madlib)

