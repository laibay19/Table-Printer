function table(){
    let num = document.getElementById("input").value
     
    for (let i=1 ; i<=10 ; num++){
        let table  = num + "x" + i + "=" + num*i


        let output = document.getElementById("result")
        // output.innerHTML += ("table")
        console.log(table)
    }
}