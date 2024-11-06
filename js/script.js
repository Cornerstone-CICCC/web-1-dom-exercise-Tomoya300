const output = document.getElementById("output1")
const btn1 = document.getElementById("btn1") 

btn1.addEventListener("click", () => {
    if (output.style.color == "red") {
        output.style.color="black"
    } else {
        output.style.color="red"
    }
})

const output2 = document.getElementById("output2")
const btn2 = document.getElementById("btn2")
const hello = document.createElement("span")
hello.textContent = "Hello, World"
btn2.addEventListener("click", () => {
    if (output2.contains(document.querySelector("#output2 span"))) {
        output2.querySelector("span").remove()
    } else {
        output2.append(hello)
    }
})

const output3 = document.getElementById("output3")
const btn3 = document.getElementById("btn3")
const p = output3.querySelector("p")

btn3.addEventListener("click", () => {
    if (p.classList.contains("small-text")) {
        p.classList.remove("small-text")
    } else {
        p.classList.add("small-text")
    }
})

const output4 = document.getElementById("output4")
const btn4 = document.getElementById("btn4")
const paras = output4.querySelectorAll("p")

btn4.addEventListener("click", () => {
    paras.forEach(element => {
        if (element.style.color == "red") {
            element.style.color = "black"
        } else {
            element.style.color = "red"
        }
    })
})

const btn5 = document.getElementById("btn5");
const message = document.getElementById("message");

btn5.addEventListener("click", () => {
    console.log(message.value);
});
