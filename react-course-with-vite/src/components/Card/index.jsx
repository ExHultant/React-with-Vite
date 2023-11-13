import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

export const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  const ShowProduct = (tdata) => {
    context.openProductDetail();
    context.setProductToShow(tdata);
  };

  const addProductsCart = (e, productData) => {
    e.stopPropagation(); // Evita que el evento se propague hacia el div principal
    context.setCount(context.count + 1); // Incrementa el contador
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutSideMenu();
  };
  
  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;
    if (isInCart) {
      return (
        <CheckIcon className="absolute top-0 right-0 flex justify-center items-center bg-black text-white w-6 h-6 rounded-full m-2 p-1 font-semibold" />
      );
    } else {
      return (
        <PlusIcon
          onClick={(e) => {
            addProductsCart(e, data.data);
          }}
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 font-semibold"
        />
      );
    }
  };


  return (
    <div
      className="bg-white w-56 h-60 rounded-lg cursor-pointer"
      onClick={() => ShowProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-2">
          {data.data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.images[0]}
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  );
};
