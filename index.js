const GenerateSegitiga = () => { 
    let num = document.getElementById("inputNumber").value

    num = num.toString().split("")

    let result = ""
    for (let i = 0; i < num.length(); i++) { 
        result += num[i]
    }
    document.getElementById("result").innerHTML = result
}

const GenerateBilanganGanjil = () => { 
    document.getElementById("result").innerHTML = ""
    let num = document.getElementById("inputNumber").value

    let oddNum = ""
    for (let i = 0; i <= num; i++) { 
        if (i % 2 == 0) {
            continue
        } else { 
            oddNum += i + " "
        }
        
    }
    document.getElementById("result").innerHTML = oddNum
}

const checkPrime = (num) => {
    if (num == 1 || num == 2) {
        return true
    }
    for (let i = num - 1; i > 1; i--) { 
        if (num % i == 0) {
            return false
        } else { 
            continue
        }
    }
    return true

}

const GenerateBilanganPrima = () => {
    document.getElementById("result").innerHTML = ""
    let num = document.getElementById("inputNumber").value

    let primeNum = ""
    for (let i = 1; i <= num; i++) { 
        if (checkPrime(i)) { 
            primeNum += i + " "
        }
    }
    document.getElementById("result").innerHTML = primeNum
}