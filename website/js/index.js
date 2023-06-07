const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://6eyootm37nsiyt4jpzaiebcewy0ufcsv.lambda-url.eu-west-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` views: ${data}`;
}
updateCounter();