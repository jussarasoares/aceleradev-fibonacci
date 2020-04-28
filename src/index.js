'use strict'

const fibonacci = (fibo = [0, 1]) => {
    const last = fibo.length
    fibo.push(fibo[last - 1] + fibo[last - 2])
    return (fibo[last] <= 350) ? fibonacci(fibo) : fibo
}

const isFibonnaci = num => fibonacci().includes(num)

module.exports = {
    fibonacci,
    isFibonnaci
}
