const btn = document.getElementById("form-button");

btn.addEventListener("click", () => {
    const response = document.createElement("p");
    response.innerText = "Thank you for sending your data. It will be used against you!";
    document.getElementById("response").appendChild(response);
});