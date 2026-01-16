import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function OrderComplete() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-5">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          🎉 Order Placed Successfully!
        </h1>
        <p className="text-gray-700 mb-6">
          Thank you for your purchase. Your order has been placed successfully.
          You will receive a confirmation email shortly.
        </p>
        <Button
          className="w-full"
          onClick={() => navigate("/")}
        >
          Go to Home
        </Button>
      </div>
    </div>
  );
}

export default OrderComplete;