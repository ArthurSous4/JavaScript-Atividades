let num = [5, 8, 2, 9, 3]
num.push(7)

num.sort() //  deixa todos os elementos em ordem crescente
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} elementos.`)

for(let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}
