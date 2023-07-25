#SENTENCIAS CONDICIONALES
#if
temp = 36
if temp < 0:
	print("Muy Frío")
elif temp < 25:
	print("Frío")
else:
	print("calor")

#Listas
#Agregando elementos
nums =  [1,2,3,4]
nums.append(5) #agrega al final
print(nums[4])
print(nums)

nums.insert(0,6) #agrega en el indice
print(nums)

nums.remove(6) #elimina un elemento
print(nums)

#buscando elementos
vocales = ["a","e","i","o","u"]
result = "a" in vocales #busca un elemento y devuelve True o False
print(result)

result2 = vocales.index('i') #busca un elemento y devuelve su indice
print(result2)

#Cambiar el valor
nums[0]=-8
print(nums)

