function soma() {

    var num1 = document.querySelector(".n1").value
    let num2 = document.querySelector(".n2").value
   
    let soma = parseInt(num1) + parseInt(num2);
    document.querySelector(".resultado").innerHTML = soma;
}