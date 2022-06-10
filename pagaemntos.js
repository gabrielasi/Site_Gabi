function pegarValor(){
    sessionStorage.setItem("precoFinal", total );
    console.log( sessionStorage.getItem("precoFinal"))

}

function passarValor(){
    document.getElementById("av").value = "R$ "+sessionStorage.getItem("precoFinal")+",00"
}


function parcelado(){
  let valorCompra = sessionStorage.getItem("precoFinal");
  var select = document.getElementById('card');
  var value = select.options[select.selectedIndex].value;
  let valorParcela = (valorCompra/value);

  document.getElementById("ray").value = "R$ "+valorParcela


}