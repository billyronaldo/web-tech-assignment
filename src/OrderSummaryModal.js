import React from 'react';

const OrderSummaryModal = ({ isOpen, closeModal, orderSummary }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
      <div className="modal-content">
        <h2>Order Summary</h2>
        <ul>
          {orderSummary.map(item => (
            <li key={item.productId}>
              {item.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default OrderSummaryModal;
