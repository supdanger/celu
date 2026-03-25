let count1000 = 0;
let count3000 = 0;
let count7000 = 0;
let count2000Recomendado = 0;
let count2000Recomendador = 0;
let count2000Derivacion = 0;
let total = 0;

function addBonus(amount, type = "") {
  const now = new Date();
  const timestamp = now.toLocaleString();

  if (amount === 1000) count1000++;
  if (amount === 3000) count3000++;
  if (amount === 7000) count7000++;
  if (amount === 2000 && type === "recomendado") count2000Recomendado++;
  if (amount === 2000 && type === "recomendador") count2000Recomendador++;
  if (amount === 2000 && type === "derivacion") count2000Derivacion++;
  total += amount;

  // Actualizar contadores
  document.getElementById("count1000").textContent = count1000;
  document.getElementById("count3000").textContent = count3000;
  document.getElementById("count7000").textContent = count7000;
  document.getElementById("count2000Recomendado").textContent = count2000Recomendado;
  document.getElementById("count2000Recomendador").textContent = count2000Recomendador;
  document.getElementById("count2000Derivacion").textContent = count2000Derivacion;
  document.getElementById("total").textContent = total;

  // Crear entrada en el registro
  const logList = document.getElementById("logList");
  const li = document.createElement("li");

  let imgSrc = "";
  let imgClass = "";
  if (amount === 1000) { imgSrc = "assets/bonus1000.png"; imgClass = "log-icon log-1000"; }
  if (amount === 3000) { imgSrc = "assets/bonus3000.png"; imgClass = "log-icon log-3000"; }
  if (amount === 7000) { imgSrc = "assets/bonus7000.png"; imgClass = "log-icon log-7000"; }
  if (amount === 2000 && type === "recomendado") { imgSrc = "assets/bonus2000Recomendado.png"; imgClass = "log-icon log-2000Recomendado"; }
  if (amount === 2000 && type === "recomendador") { imgSrc = "assets/bonus2000Recomendador.png"; imgClass = "log-icon log-2000Recomendador"; }
  if (amount === 2000 && type === "derivacion") { imgSrc = "assets/bonus2000Derivacion.png"; imgClass = "log-icon log-2000Derivacion"; }

  li.innerHTML = `
    <img src="${imgSrc}" class="${imgClass}" alt="Bono ${amount} ${type}">
    <span>Bono ${amount} ${type} - ${timestamp}</span>
    <button onclick="removeBonus(this, ${amount}, '${type}')">Eliminar</button>
  `;
  logList.prepend(li);
}

function removeBonus(button, amount, type = "") {
  if (amount === 1000 && count1000 > 0) count1000--;
  if (amount === 3000 && count3000 > 0) count3000--;
  if (amount === 7000 && count7000 > 0) count7000--;
  if (amount === 2000 && type === "recomendado" && count2000Recomendado > 0) count2000Recomendado--;
  if (amount === 2000 && type === "recomendador" && count2000Recomendador > 0) count2000Recomendador--;
  if (amount === 2000 && type === "derivacion" && count2000Derivacion > 0) count2000Derivacion--;
  total -= amount;

  // Actualizar contadores
  document.getElementById("count1000").textContent = count1000;
  document.getElementById("count3000").textContent = count3000;
  document.getElementById("count7000").textContent = count7000;
  document.getElementById("count2000Recomendado").textContent = count2000Recomendado;
  document.getElementById("count2000Recomendador").textContent = count2000Recomendador;
  document.getElementById("count2000Derivacion").textContent = count2000Derivacion;
  document.getElementById("total").textContent = total;

  // Eliminar entrada del registro
  button.parentElement.remove();
}

function setTheme(themeClass) {
  document.body.className = themeClass;
}
