import React, { createContext, useState } from 'react';

export const OrderPopupContext = createContext();

export const OrderPopupProvider = ({ children }) => {
  const [orderPopup, setOrderPopup] = useState(false);

  return (
    <OrderPopupContext.Provider value={{ orderPopup, setOrderPopup }}>
      {children}
    </OrderPopupContext.Provider>
  );
};
