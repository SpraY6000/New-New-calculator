document.getElementById("submitBtn").onclick = function() {
    const firstNumber = Number(document.getElementById("firstNumInp").value)
    const operator = document.getElementById("operatorInp").value
    const secondNumber = Number(document.getElementById("secondNumInp").value)
    let summary;
    let summaryText = document.getElementById("summaryText")

    if (operator === "+") {
        summary = firstNumber + secondNumber
        summaryText.innerText = summary
    }
    else if (operator === "-") {
        summary = firstNumber - secondNumber
        summaryText.innerText = summary
    }
    else if(operator === "*") {
        summary = firstNumber * secondNumber
        summaryText.innerText = summary
    }
    else if(operator === "/") {
        summary = firstNumber / secondNumber
        summaryText.innerText = summary
    }
    else {
        summaryText.innerText = "Error"
    }
}

document.getElementById("clearBtn").onclick = function() {
    document.getElementById("firstNumInp").value = ""
    document.getElementById("operatorInp").value = ""
    document.getElementById("secondNumInp").value = ""
    document.getElementById("summaryText").innerText = ""
}