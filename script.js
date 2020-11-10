function tabuada() {
  var num = window.document.getElementById('txtn');
  var tab = window.document.getElementById('seltab');

  if (num.value.length == 0) {
    window.alert('Por favor, digite um número! ');
  } else {
    var n = Number(num.value);
    var cont = 1;
    tab.innerHTML = ' ';

    while (cont <= 10) {
      var item = window.document.createElement('option');
      item.text = `${n} x ${cont} = ${n * cont}`;
      item.value = `tab${cont}`;
      tab.appendChild(item);
      cont++;
    }
  }
}
