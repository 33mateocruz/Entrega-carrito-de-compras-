import React from "react";

const Carrito = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce(
    (acc, product) => acc + product.unitPrice * product.quantity,
    0
  );

  return (
    <div className="shopping-cart">
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.name}>
              {product.name} (Cant: {product.quantity}) ($
              {product.unitPrice.toFixed(2)} c/u)
              <button
                onClick={() => removeFromCart(product)}
                style={{ marginLeft: "10px" }}
              >
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Precio total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Carrito;
