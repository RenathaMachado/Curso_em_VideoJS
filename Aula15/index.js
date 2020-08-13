let num = [3,8,5,4]
console.log(num)



/*for(let pos = 0; pos<num.length ; pos++){
  console.log(num[pos])
}
*/
// Para cada posição em num, mostrar
for(let pos in num){
  console.log(num[pos])
}

// retona a posição do valor da array
console.log(num.indexOf(8))
