const container = document.getElementById("store");
function storeIt(password) {
  const xinput = document.getElementById("saveAsInp");
  const infox = xinput.value.trim();
  const li = document.createElement("li");
  li.innerHTML = `<p> ${infox} : ${password} </p>`;
  container.append(li);
}
export default storeIt;
