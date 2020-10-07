const lanzardado = document.getElementById("lanzardado")


lanzardado.onclick = function() {
  document.getElementById("dado").textContent = Math.floor(Math.random() * 6) + 1;
  
}

const lanzardado2 = document.getElementById("lanzardado2")


lanzardado2.onclick = function() {
  document.getElementById("dado2").textContent = Math.floor(Math.random() * 6) + 1;
  
}

const lanzardado3 = document.getElementById("lanzardado3")


lanzardado3.onclick = function() {
  document.getElementById("dado3").textContent = Math.floor(Math.random() * 6) + 1;
  
}