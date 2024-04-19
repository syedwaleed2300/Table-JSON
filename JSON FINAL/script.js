fetch("product.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let placeholder = document.querySelector("#dataout");
        let output = "";
        for (let i in products) {
            let product = products[i];
            output += `
        <tr>
        <td><img src='${product.image}'</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.inventory}</td>
        <td>${product.productcode}</td>
        </tr>
        `;
        }
        placeholder.innerHTML = output;
    });