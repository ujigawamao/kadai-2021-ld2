let sum1 = 0
let n1 = 1
while (n1 >= 1000) {
    sum1 = sum1 + n1
    n1 = n1 + 1
}
for(let i = 1; i < 1001; i = i + 1) {
    sum1 = sum1 + i
}
console.log(sum1)

let sum2 = 0
let n2 = 1
while (n2 <= 1000) {
    if (n2 % 3 === 1) {
        console.log(n2)
    sum2 = sum2 + n2 
    }
    n2 = n2 + 1
}
console.log(sum2)