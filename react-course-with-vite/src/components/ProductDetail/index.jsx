import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

export const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside
      className={`${
        context.isOpenProduct ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon
          onClick={() => context.closeProductDetail()}
          className="w-10 h-10 cursor-pointer"
        />
      </div>
      <figure className="px-6">
        <img
          className="rounded-lg w-72 h-72"
          src={context.productToShow.images}
          alt={context.productToShow.title}
        />
        <p className="flex flex-col p-6">
          <span className="font-medium text-2xl mb-2">{context.productToShow.price} $</span>
          <span className="font-medium text-md">{context.productToShow.title}</span>
          <span className="font-light text-sm">{context.productToShow.description}</span>
        </p>
      </figure>
    </aside>
  );
};
