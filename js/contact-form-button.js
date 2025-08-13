/*
const btn = document.getElementById("form-button");
btn.addEventListener("click", () => {
    const response = document.createElement("p");
    response.innerText = "Thank you for sending your data. It will be used against you!";
    document.getElementById("response").appendChild(response);
});
*/

function formFunction() {
    event.preventDefault();

    const response = document.createElement("p");
    response.innerText = "Thank you for sending your data. It will be used against you!";
    response.style.fontSize = "50px";
    response.style.textAlign = "center";
    document.getElementById("response").appendChild(response);
}