const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://gcj2d75ryv4jhneo5tbi2x6ab40evhfn.lambda-url.eu-west-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` views: ${data}`;
}
updateCounter();