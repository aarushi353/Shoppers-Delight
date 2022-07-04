import React, {useState, useEffect} from "react";
import ProductsDisplay from "../components/Products/ProductsDisplay";
import "../assets/css/ProductsDisplay.css";
import SearchBar from "../components/Products/SearchBar";
import SidePanel from "../components/Products/SidePanel";
import EmptyView from "../components/Products/EmptyView";
import DummyProducts from "../components/Products/DummyProducts";

function Product() {
  const [selectedPrice, setSelectedPrice] = useState([0, 7000]);
  const [list, setList] = useState(DummyProducts);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const [category, setCategory] = useState([
    { id: 1, checked: false, label: 'Boys and Men' },
    { id: 2, checked: false, label: 'Girls and Women' },
    { id: 3, checked: false, label: 'Electronics' },
    { id: 4, checked: false, label: 'Home & Decor' },
    { id: 5, checked: false, label: 'Accessories' },
  ]);

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const handleChangeChecked = (id) => {
    const categoryStateList = category;
    const changeCheckedCategory = categoryStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategory(changeCheckedCategory);
  };

  const applyFilters = () => {
    let updatedList = DummyProducts;

    
    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    // Category Filter
    const categoryChecked = category
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());
    if (categoryChecked.length) {
      updatedList = updatedList.filter((item) =>
        categoryChecked.includes(item.category)
      );
      
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.sellingamount >= minPrice && item.sellingamount <= maxPrice
    );

    setList(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [ searchInput, selectedPrice, category ]);

  return (
    <div className="products">
      <SearchBar
      value={searchInput}
      changeInput={(e) => setSearchInput(e.target.value)} 
      />
      <div className="home_panelList-wrap">
      <div className="home_panel-wrap" >
      <SidePanel
      selectedPrice={selectedPrice}
      changePrice={handleChangePrice}
      changeChecked={handleChangeChecked}
      category={category}
      />

      </div>
      <div  className='home_list-wrap'>
          {resultsFound ? <ProductsDisplay list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
}

export default Product;
