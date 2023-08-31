const array = []

alert("Lista de compras! Digite os produtos")

for(let i = 0; i < 10; i++){
  let produtos = prompt(`Digite o produto ${i + 1}`)
  array.push(produtos)
}

alert(`Esta é sua lista de compras: ${array} `)

// // mayk
// let items = []

// for (let item = 0; item < 10; item++) {
//   let itemName = prompt(`Digite o produto ${item + 1}`)
//   items[item] = itemName
// }

// alert(items)