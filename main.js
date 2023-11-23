function table() {

    document.getElementById("result").innerHTML = ""

    let num = +document.getElementById("input").value
    let from = +document.getElementById("from").value
    let to = +document.getElementById("to").value

    if (from >= to) {
        document.getElementById("result").innerHTML = "Number is greater"
        return;
    }

    for (let i = from; i <= to; i++) {

        let table = `${num} x ${i} = ${num * i}` 

        let output = document.getElementById("result")

        output.innerHTML += `${table} <br/>`

    }

}