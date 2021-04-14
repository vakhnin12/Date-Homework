function createTimeElement(value) {
    const timeElement = document.createElement("div");

    timeElement.className = value
    timeElement.classList.add("timer")

    return timeElement
};

function createClock() {
    const container = document.createElement("header");

    const firstContainer = createTimeElement("first-container");
    const secondContainer = createTimeElement("second-container");
    const thirdContainer = createTimeElement("third-container");
    const fourthContainer = createTimeElement("fourth-container");
    const fifthContainer = createTimeElement("fifth-container");

    const colors = ["red", "blue", "green", "orange", "grey"];

    container.appendChild(firstContainer);
    container.appendChild(secondContainer);
    container.appendChild(thirdContainer);
    container.appendChild(fourthContainer);
    container.appendChild(fifthContainer);

    for (const i of container.children) {
        i.style.color = colors.shift()
    }

    return container
};



const clock1 = createClock();

document.body.appendChild(clock1);

function clock() {
    let date = new Date();
    let hour = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
    let minute = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    let second = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();

    return { hour, minute, second}
}

let timerHH = setInterval(() => {
    document.querySelector(".first-container").innerHTML = clock().hour;
    document.querySelector(".second-container").innerHTML = ":";
    document.querySelector(".third-container").innerHTML = clock().minute;
    document.querySelector(".fourth-container").innerHTML = ":";
    document.querySelector(".fifth-container").innerHTML = clock().second;
    console.log(clock().hour + ':' + clock().minute + ':' + clock().second)
}, 1000);

setInterval(() => {
    console.clear()
}, 2000);