import { getSingleProduct } from "./Product";

export const addProductToCart = async (product) => {
  const checkProduct = await getSingleProduct(product.productId);
  if (!checkProduct.qty > 0) {
    alert("Item out of stock!!");
    return;
  }
  try {
    const response = await fetch(
      "https://crudcrud.com/api/69e0221e2780451ba7315f11ee8b5bff/cart",
      {
        method: "POST",
        body: JSON.stringify({
          name: product.name,
          desc: product.desc,
          price: product.price,
          qty: product.qty,
          productId: product.productId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Product Not Added");
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateProductInCart = async (product, increment) => {
  const checkProduct = await getSingleProduct(product.productId);
  if (!checkProduct.qty > 0 && increment) {
    alert("Item out of stock!!");
    return;
  }
  try {
    const response = await fetch(
      `https://crudcrud.com/api/69e0221e2780451ba7315f11ee8b5bff/cart/${product._id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          name: product.name,
          desc: product.desc,
          price: product.price,
          qty: product.qty,
          productId: product.productId,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) {
      throw new Error("Product Not Updated");
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductInCart = async (id) => {
  try {
    const response = await fetch(
      `https://crudcrud.com/api/69e0221e2780451ba7315f11ee8b5bff/cart/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Product Not Updated");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCart = async () => {
  try {
    const response = await fetch(
      "https://crudcrud.com/api/69e0221e2780451ba7315f11ee8b5bff/cart"
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.error.message);
    }
  } catch (error) {
    console.log(error);
  }
};

export const emptyCart = async () => {
  const cart = await getCart();
  cart.forEach((item) => {
    deleteProductInCart(item._id);
  });
};
