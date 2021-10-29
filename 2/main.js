function codingSequence ( n , k , str)
{
    if (n < 1 || n > 100 || k < 1 || k > 100)
        return -1
    for (let i = 0 ; i < k ; i++)
    {
        str = str[str.length-1] + str.substr(0,str.length - 1)
        let newString = '';
        for (let i = 0; i < str.length; i++) {
            if (96 < str.charCodeAt(i) && str.charCodeAt(i) < 122) {
                newString += String.fromCharCode(str.charCodeAt(i) + 1);
            }
            if (str[i] === 'z')
                newString += 'a';
        }
        str = newString
    }
    return str
}

console.log(codingSequence(3,1,'abz'))
console.log(codingSequence(4,5,'abcd'))