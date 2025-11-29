const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

// bubbling
document.addEventListener("click", e => {
    if(!e.target.matches("div")) {
        console.log("No Div Clicked 1")
    }
    //console.log(e.target)
    console.log("Document")
})

addGlobalEventListener("click", "div", e => {
    console.log("No Div Clicked 2")
})

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (!e.target.matches(selector)) callback(e)
    })
}

grandparent.addEventListener("click", e => {
    //console.log(e)
    console.log("Grandparent")
}, { capture: true }) // capturing

parent.addEventListener("click", e => {
    e.stopPropagation()
    //console.log(e.target)
    console.log("Parent")
}, { once: true })

child.addEventListener("click", printHi)

setTimeout(() => {
    child.removeEventListener("click", printHi)
}, 2000)

function printHi() {
    console.log("Hi")
}

const divs = document.querySelectorAll("div")

divs.forEach(div => {
    div.addEventListener("click", () => {
        console.log("Div Clicked")
    })
})

const newDiv = document.createElement("div")
newDiv.style.width = "100px"
newDiv.style.height = "100px"
newDiv.style.backgroundColor = "purple"
newDiv.addEventListener("click", () => {
    console.log("New Div Clicked")
})
document.body.append(newDiv)