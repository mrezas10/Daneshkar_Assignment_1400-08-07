function payDebt(n , x, y , z , a , b , c) {
    if (n < 1 || n > 100000)
        return -1
    if (x < 0 || x > 5000 || y < 0 || y > 5000 || z < 0 || z > 5000)
        return -1
    if (a < 1 || a > 100000 || b < 1 || b > 100000 || b < 1 || b > 100000)
        return -1
    let methods = 0
    if (x*a + y*b + z*c < n)
        return 0
    if (x*a + y*b + z*c === n)
        return 1
    function Money(count , price)
    {
        this.count = count;
        this.price = price;
    }
    let moneyList = [];
    moneyList.push(new Money(x,a))
    moneyList.push(new Money(y,b))
    moneyList.push(new Money(z,c))
    moneyList.sort((prev,next) => next.price - prev.price)

    for (let i = 0 ; i <= moneyList[0].count ; i++) {
        for (let j = 0 ; j <= moneyList[1].count ; j++) {
            for (let k = 0 ; k <= moneyList[2].count ; k++) {
                let sum = i*moneyList[0].price + j*moneyList[1].price + k*moneyList[2].price
                if (sum === n)
                    methods++
            }
        }
    }
    return methods
}

console.log(payDebt(100000 , 2 , 1 , 1 , 50000 , 70000 , 30000))
console.log(payDebt(60000 , 3 , 3 , 3 , 30000 , 20000 , 30000))
console.log(payDebt(32000 , 2 , 1 , 1 , 4200 , 7500 , 3600))