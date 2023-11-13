import "../App/App.css";
import { Card } from "../../components/Card";
import { ProductDetail } from "../../components/ProductDetail";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
      if (context.filteredItemsProducts?.length > 0) {
        return context.filteredItemsProducts?.map((item) => (
          <Card data={item} key={item.id} />
        ));
      } else {
        return <p>We don't have Anything :c</p>;
      }
    }
  
  return (
    <>
      <div className="flex w-80 items-center justify-center relative mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <div className="relative mt-2 rounded-md shadow-sm mb-6 w-96">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-300"
            aria-hidden="true"
          />
        </div>
        <input
          type="search"
          name="search"
          id="search"
          className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search a Product"
          onChange={(e) => context.setSearchByTitle(e.target.value)}
        />
      </div>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </>
  );
}

export default Home;
