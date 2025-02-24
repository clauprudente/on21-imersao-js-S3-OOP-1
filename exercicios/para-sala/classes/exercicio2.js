/*Escreva uma classe chamada InvoiceItem,
que modela um item de uma compra, com id, description, quantity e price. */

class InvoiceItem {
  constructor(id, description, quantity, price) {
    this.id = id;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
  }

  getId() {
    return this.id;
  }

  updateDescription(description) {
    this.description = description;
    return `a nova descrição do produto é: ${description}`;
  }
}
const newProduct = new InvoiceItem(123, "Produto X", 20, 40);
newProduct.updateDescription("Descrição nova");
console.log(newProduct);
