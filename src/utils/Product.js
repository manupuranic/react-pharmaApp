export const getSingleProduct = async (id) => {
  try {
    const response = await fetch(
      `https://crudcrud.com/api/69e0221e2780451ba7315f11ee8b5bff/products/${id}`
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

export const addProduct = async (product) => {
  try {
    const response = await fetch(
      "https://crudcrud.com/api/69e0221e2780451ba7315f11ee8b5bff/products",
      {
        method: "POST",
        body: JSON.stringify({
          name: product.name,
          desc: product.desc,
          price: product.price,
          qty: product.qty,
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

export const updateProduct = async (product) => {
  try {
    const response = await fetch(
      `https://crudcrud.com/api/69e0221e2780451ba7315f11ee8b5bff/products/${product._id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          name: product.name,
          desc: product.desc,
          price: product.price,
          qty: product.qty,
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

export const getProducts = async () => {
  try {
    const response = await fetch(
      "https://crudcrud.com/api/69e0221e2780451ba7315f11ee8b5bff/products"
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
