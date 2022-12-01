function verificar(){

    var num = document.getElementById("txtNumber")
    var numero = Number(num.value)
    var res = document.getElementById("res")

    if(numero % 2 == 0){
        res.innerHTML='Resultado: O valor é par'

    }else{
        res.innerHTML='Resultado: O valor é impar'
    }

}