const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://b3p7je4uqoj7vkli32unk2f2bi0tzaqv.lambda-url.eu-west-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` views: ${data}`;
}
updateCounter();