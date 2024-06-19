let popup_offer = document.querySelector(".popupoffer");

function openoffer(){
    popup_offer.classList.add("openoffer");
}
function closeoffer(){
    popup_offer.classList.remove("openoffer");
}
let listnav=document.querySelector(".new");
document.querySelector(".openlistw").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
document.querySelector(".openlistw2").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw2").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
document.querySelector(".openlistw3").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw3").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
document.querySelector(".openlistw4").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw4").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
document.querySelector(".openlistw5").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw5").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
document.querySelector(".openlistw6").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw6").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
document.querySelector(".openlistw7").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw7").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
document.querySelector(".openlistw8").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw8").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
document.querySelector(".openlistw9").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw9").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
document.querySelector(".openlistw10").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw10").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
document.querySelector(".openlistw11").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw11").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
document.querySelector(".openlistw12").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw13").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
document.querySelector(".openlistw13").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw12").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
listnav.addEventListener("mouceover",function(){
    listnav.classList.add("openlist");
})
let popup_fb = document.querySelector(".popupfeedback");

function openfeedback(){
    popup_fb.classList.add("openfb");
}
function closeofferfb(){
    popup_fb.classList.remove("openfb");
}
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('serch');
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');

    // Si hay un query en la URL, configuramos el valor del input y filtramos los productos
    if (query) {
        searchInput.value = query.toLowerCase(); // Mostrar el texto de búsqueda en el input

        const productsContainers = document.querySelectorAll('.justproducts');

        productsContainers.forEach(container => {
            const products = container.querySelectorAll('h5');

            products.forEach(product => {
                const title = product.innerText.toLowerCase();

                // Mostrar u ocultar productos según coincidan con la búsqueda
                if (title.includes(query.toLowerCase())) {
                    product.parentElement.style.display = 'block'; // Mostrar producto
                } else {
                    product.parentElement.style.display = 'none'; // Ocultar producto
                }
            });
        });
    }

    // Evento al presionar Enter en el campo de búsqueda
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const query = searchInput.value.trim().toLowerCase();
            if (query) {
                window.location.href = `search.html?query=${encodeURIComponent(query)}`;
            } else {
                window.location.href = `search.html`; // Redirige a search.html sin query si el campo está vacío
            }
        }
    });
});