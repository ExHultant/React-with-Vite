import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart => Incrementa Cantidad
  const [count, setCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping Cart => Order
  const [Order, setOrder] = useState([]);

  // Product Detail => Abrir/Cerrar
  const [isOpenProduct, setIsOpenProduct] = useState(false);
  const openProductDetail = () => setIsOpenProduct(true);
  const closeProductDetail = () => setIsOpenProduct(false);

  // Checkout Side Menu => Abrir/Cerrar
  const [isOpenCheck, setIsOpenCheck] = useState(false);
  const openCheckoutSideMenu = () => setIsOpenCheck(true);
  const closeCheckoutSideMenu = () => setIsOpenCheck(false);

  // Product Detail => Muestra Productos sus datos
  const [productToShow, setProductToShow] = useState({});

  //Loading
  const [loading, setLoading] = useState(true);

  //Get Products
  const [itemsProducts, setItemsProducts] = useState(null);
  const [filteredItemsProducts, setFilteredItemsProducts] = useState(null);

  //By Title
  const [searchByTitle, setSearchByTitle] = useState(null);
  
  //By Category
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    setTimeout(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        setItemsProducts(data);
        setLoading(false); // Una vez que se carga la información, establece loading en false
      });
    }, 2000); // 2000 milisegundos (2 segundos)
  }, []);

  const filteredItemsProductsByTitle = (itemsProducts, searchByTitle) => {    
    return itemsProducts?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredItemsProductsByCategory = (itemsProducts, searchByCategory) => {    
    return itemsProducts?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, itemsProducts, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsProductsByTitle(itemsProducts, searchByTitle);
    }
    if (searchType === 'BY_CATEGORY') {
      return filteredItemsProductsByCategory(itemsProducts, searchByCategory);
    }
    if (searchType === 'BY_TITLE_AND_BY_CATEGORY') {
      return filteredItemsProductsByCategory(itemsProducts, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    if (!searchType) {
      return itemsProducts
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItemsProducts(filterBy('BY_TITLE_AND_BY_CATEGORY', itemsProducts, searchByTitle, searchByCategory));
    if (searchByTitle && !searchByCategory) setFilteredItemsProducts(filterBy('BY_TITLE',itemsProducts, searchByTitle, searchByCategory));
    if (!searchByTitle && searchByCategory) setFilteredItemsProducts(filterBy('BY_CATEGORY', itemsProducts, searchByTitle, searchByCategory));
    if (!searchByTitle && !searchByCategory) setFilteredItemsProducts(filterBy(null, itemsProducts, searchByTitle, searchByCategory));
  }, [itemsProducts, searchByTitle, searchByCategory]);


  ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isOpenProduct,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isOpenCheck,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        Order,
        setOrder,
        itemsProducts,
        setItemsProducts,
        loading,
        setLoading,
        searchByTitle,
        setSearchByTitle,
        filteredItemsProducts,
        searchByCategory,
        setSearchByCategory
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
