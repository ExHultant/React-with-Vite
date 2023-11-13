import "../App/App.css";
import { OrdersCard } from "../../components/OrdersCard";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <>
      <div className="flex w-80 items-center justify-center relative mb-4">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      {
        context.Order.map((Order, index) => ( 
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={Order.totalPrice}
              totalProducts={Order.totalProducts}
            />
          </Link>
       ))
      }
    </>
  );
}

export default MyOrders;
