function calcular(){
    var num = document.getElementById("txtNumber")
    var numero = Number(num.value)
    var res = document.getElementById("res")

    for(var c=0; c<=10; c++){
        var mult = c*numero
        res.innerHTML+= `&#128073;&#127997; ${c} * ${numero} = ${mult} <br>`
    }

}