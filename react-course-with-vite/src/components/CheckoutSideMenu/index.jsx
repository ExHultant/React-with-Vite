import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../Pages/utils";
import { Link } from "react-router-dom";

export const CheckoutSideMenu = () => {
  //useContext = context
  const context = useContext(ShoppingCartContext);
  //Delete Products
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
  };
  //Checkout Products  
  const handleCheckout = () => {
    const OrderToAdd = {
      date: "01-02-2023",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };
    context.setOrder([...context.Order, OrderToAdd]);
    context.setCartProducts([]);
    context.setCount(0);
    context.closeCheckoutSideMenu()
    context.setSearchByTitle(null)
  };

  return (
    <aside
      className={`${
        context.isOpenCheck ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon
          onClick={() => context.closeCheckoutSideMenu()}
          className="w-10 h-10 cursor-pointer"
        />
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            product={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-10 py-6 mb-2">
        <p className="flex justify-between items-center mb-2">
          <span className="font-semibold text-xl">Total:</span>
          <span className="font-bold text-2xl">
            ${totalPrice(context.cartProducts.length)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="bg-black w-full rounded-md text-white p-3"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};
