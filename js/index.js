let banner = document.getElementById("banner_link");
let banner_product = document.getElementsByClassName("model_banner")[0];
let close_banner = document.getElementById("close");

banner.addEventListener("click", ()=>{
    banner_product.classList.add("active");
})

close_banner.addEventListener("click", ()=>{
    banner_product.classList.remove("active");
})
