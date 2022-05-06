import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./OrderMessage.css";

const OrderMessage = () => {
  const [orderState, setOrderState] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.get("cancelled") === "true") {
      setOrderState("cancelled");
    } else if (urlParams.get("fulfilled") === "true") {
      setOrderState("fulfilled");
    } else {
      setOrderState(null);
    }
  }, [location.search]);

  return (
    <>
      {orderState === "cancelled" && (
        <div className="error">
          Your order was cancelled. If this was not intentional, maybe try
          again.
        </div>
      )}
      {orderState === "fulfilled" && (
        <div className="notice">
          Your order was completed. Thank you so much for supporting my work.
          I'll reach out to you shorty.
        </div>
      )}
    </>
  );
};

export default OrderMessage;
