import React, {useState, useEffect} from "react";
import ProductsDisplay from "../components/Products/ProductsDisplay";
import "../assets/css/ProductsDisplay.css";
import SearchBar from "../components/Products/SearchBar";
import SidePanel from "../components/Products/SidePanel";
import EmptyView from "../components/Products/EmptyView";
import DummyProducts from "../components/Products/DummyProducts";

function Product() {
  // const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [list, setList] = useState(DummyProducts);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  // const handleChangePrice = (event, value) => {
  //   setSelectedPrice(value);
  // };

  const applyFilters = () => {
    let updatedList = DummyProducts;

    // Cuisine Filter
    // const cuisinesChecked = cuisines
    //   .filter((item) => item.checked)
    //   .map((item) => item.label.toLowerCase());

    // if (cuisinesChecked.length) {
    //   updatedList = updatedList.filter((item) =>
    //     cuisinesChecked.includes(item.cuisine)
    //   );
    // }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    // Price Filter
    // const minPrice = selectedPrice[0];
    // const maxPrice = selectedPrice[1];

    // updatedList = updatedList.filter(
    //   (item) => item.price >= minPrice && item.price <= maxPrice
    // );

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [ searchInput ]);
  return (
    <div className="products">
      <SearchBar
      value={searchInput}
      changeInput={(e) => setSearchInput(e.target.value)} 
      />
      <div className="home_panelList-wrap">
      <div className="home_panel-wrap" >
      <SidePanel />
      </div>
      <div  className='home_list-wrap'>
          {resultsFound ? <ProductsDisplay list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
}

export default Product;
