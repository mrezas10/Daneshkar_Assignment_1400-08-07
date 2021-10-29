const validGoalSequence = (n , a , b , ...seq ) =>
{
    if(n < 1 || n > 100)
        return -1
    if(a < 1 || a > 10 || b < 1 || b > 10)
        return -1
    for (let key of seq)
    {
        if(key < 0 || key > 100)
            return -1
    }
    let firstHalf = [];
    let secondHalf = [];
    let i = 0
    for (i ; seq[i] <= 45 + a ; i++ )
    {
        firstHalf.push(seq[i])
    }
    for (i ; i < n ; i++)
    {
        secondHalf.push(seq[i])
    }
    for (let j = 0 ; j < secondHalf.length ; j++)
    {
        if (secondHalf[j] < secondHalf[j-1])
            return "NO"
        if (secondHalf[j] > 90 + b)
            return "NO"
    }
    return "YES"
}

console.log(validGoalSequence(4,2,4,4,45,48,93))
console.log(validGoalSequence(5,3,2,4,47,45,80,91))
console.log(validGoalSequence(4,2,2,4,48,45,80))
console.log(validGoalSequence(6,3,2,8,48,45,70,81,94))