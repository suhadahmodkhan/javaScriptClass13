const taka = document.getElementById("taka")
const button = document.getElementById("button")
const apply = document.getElementById("apply")
const coupon = document.getElementById("coupon")
const heading = document.getElementById("heading")
const headingHomeCooker = document.getElementById("heading-home-cooker")
const ol = document.getElementById("ol")

button.addEventListener("click" , function () {
    const li = document.createElement("li")
    li.innerText = headingHomeCooker.innerText
    ol.appendChild(li)
})

apply.addEventListener("click" , function () {

    if (coupon.value == "SELL200"){
        apply.setAttribute("disabled" ,true)
        apply.classList.add("text-red-500")
        apply.classList.remove("btn-primary")
    }
    else {
        coupon.value = ""
    }
})
