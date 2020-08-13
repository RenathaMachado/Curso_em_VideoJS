/*function parimpar(n){
    if(n%2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}

console.log(parimpar(8))
*/

/*function soma(a,b){
    return a+b
}

console.log(soma(2,4))
*/

function fatorial(n){
    let fat = 1
    for(let c = n ; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))