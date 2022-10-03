const carroDOM = document.querySelector("#carros")

const veiculos = ["Chevrolet", "Ford", "Fiat", "Vw",
"Honda", "Toyota", "Hyundai"]

veiculos.forEach((value, key)=>{
    carroDOM.innerHTML += `<option name="${key}">${value}
    </option>`;

});