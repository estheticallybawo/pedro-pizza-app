import React from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";

const App = () => {
  return (
    <div>
      <h1 className="logo">Padre Gino's Pizza</h1>
      <Order
        name="Pepperoni"
        description="Mozzarella Cheese, Pepperoni"
        image={"/public/pizzas/pepperoni.webp"}
      />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
