import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../components/OrderCard";
import "../App/App.css";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if(index === 'last') index = context.Order?.length - 1

  // Check if context.order is defined and has items before accessing it.
  const lastOrder = context.Order?.[index];  

  return (
    <>
    <div className="flex w-80 items-center justify-center relative mb-6">
        <Link to={"/my-orders"} className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>      
      <div className="flex flex-col">
        {lastOrder ? (
          lastOrder.products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        ) : (
          <p>No hay productos en la orden.</p>
        )}
      </div>
    </>
  );
}

export default MyOrder;
