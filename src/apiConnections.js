const baseUrl = 'http://localhost:5000';

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${baseUrl}/products`);
    if (!response.ok) {
      throw new Error('Network error');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};

export const addToCart = async (userId, productId, quantity) => {
    try {
      const response = await fetch(`${baseUrl}/cart/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, productId, quantity }),
      });
      if (!response.ok) {
        throw new Error('Network error');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error: ', error);
      throw error;
    }
  };

  export const getCart = async (userId) => {
    try {
      const response = await fetch(`${baseUrl}/cart/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Network error');
      }
  
      const cartData = await response.json();
      return cartData;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  export const getProductById = async (productId) => {
    try {
      const response = await fetch(`${baseUrl}/products/${productId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error fetching product details: ${response.statusText}`);
      }
  
      const productDetails = await response.json();
      return productDetails;
    } catch (error) {
      console.error('Error fetching product details:', error);
      throw error;
    }
  };

  export const updateCartQuantity = async (userId, productId, newQuantity) => {
    try {
      const response = await fetch(`${baseUrl}/cart/updateQuantity`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, productId, newQuantity }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const updatedCart = await response.json();
      return updatedCart;
    } catch (error) {
      console.error('Error updating cart quantity:', error);
      throw error;
    }
  };

export const removeFromCart = async (userId, productId) => {
  try {
    const response = await fetch(`${baseUrl}/cart/remove/${userId}/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (!response.ok) {
      throw new Error('Failed to remove item from cart');
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const placeOrder = async (userId, products, quantities) => {
  try {
    const response = await fetch(`${baseUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        products,
        quantities,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to place order');
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Error placing order: ${error.message}`);
  }
};

export const login = async (loginData) => {
  try {
    const response = await fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      throw new Error('Login failed.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message || 'An error occurred during login.');
  }
};
