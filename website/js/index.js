const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://zcw3ccloladwt4cpqb2sfypdu40xpiuy.lambda-url.eu-west-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` views: ${data}`;
}
updateCounter();