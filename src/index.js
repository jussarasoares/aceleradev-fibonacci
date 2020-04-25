'use strict'

const fibonacci = () => {
    const fibo = [0, 1]
    while (fibo[fibo.length - 1] <= 350) {
        fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2])
    }
    return fibo
}

const isFibonnaci = (num) => fibonacci().includes(num)

module.exports = {
    fibonacci,
    isFibonnaci
}
