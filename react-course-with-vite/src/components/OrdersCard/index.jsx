import { ChevronRightIcon } from "@heroicons/react/24/solid";

export const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center border border-black rounded-xl shadow-xl w-80 p-4 mb-4">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">01-02-2023</span>
          <span className="font-light">{totalProducts} Articles</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 cursor-pointer"></ChevronRightIcon>
        </p>
      </div>
    </div>
  );
};
