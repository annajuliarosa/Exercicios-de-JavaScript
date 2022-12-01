function verificar(){
    var mes = document.getElementById("txtMes")
    var estacao = Number(mes.value)
    var res= document.getElementById("res")
    var img = document.getElementsByTagName("img")

    console.log(estacao)

    if(estacao>3 && estacao<=6){
        res.innerHTML= "A estação é: Outono <br>" 
        var img = document.createElement("IMG");
        img.src = 'imagem/outono.png'
        img.style.width = "100px";
        img.style.height = "100px";
        res.appendChild(img);
       

    }else if (estacao>6 && estacao<=9){
        res.innerHTML="A estação é: Inverno <br>"
        var img = document.createElement("IMG");
        img.src = 'imagem/inverno.png'
        img.style.width = "100px";
        img.style.height = "100px";
        res.appendChild(img);
       
    }else if (estacao>9 && estacao<=12){
        res.innerHTML="A estação é: Primavera <br>"
        var img = document.createElement("IMG");
        img.src = 'imagem/primavera.png'
        img.style.width = "100px";
        img.style.height = "100px";
        res.appendChild(img);
        
    }else{
        res.innerHTML="A estação é: Verão <br>"
        var img = document.createElement("IMG");
        img.src = 'imagem/verao.png'
        img.style.width = "100px";
        img.style.height = "100px";
        res.appendChild(img);
       
    }
}