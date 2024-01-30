  import React, {useEffect, useState} from 'react'
import './Explore.css'
import Card from '../../components/Card/Card';
import Dropdown from '../../components/Dropdown/Dropdown';
import PriceDropdown from '../../components/Dropdown/NumberRangeDropdown';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import Pagination from '../../components/Pagination/Pagination';
import { FaMapMarkedAlt } from "react-icons/fa";
import Map from '../../components/Map/Map';
import FilterModal from './FilterModal';

type ModalType = 'Setting' | 'Map';

const Explore:React.FC=()=>{
  const { page } = useParams();
  const {toggleFilterModal, filters, updateFilters, propertyStatus, propertyTypes, sortList} = useAppContext();
  const [activeModal, setActiveModal] = useState<ModalType>("Setting");
  const [data, setData] = useState(null);

  useEffect(() => {
    const abortController = new AbortController()

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        // Handle errors here, if necessary
        console.error('Fetch error:', error.message);
      });

    return () => {
      // Abort the fetch request when the component is unmounted
      abortController.abort();
    };
  }, []);
  

  const updateSearch = (event: React.ChangeEvent<HTMLInputElement>)=>{
    event.preventDefault();
    const inputValue = event.target.value;
    updateFilters({search:inputValue})
  }

  const showActiveModal= (type:ModalType)=>{
    setActiveModal(type);
    toggleFilterModal();
  }

  return (
    <div className='explore'>
      <section className='filter-section'>
        <main className='filter-box container'>
          <div className='search-bar-filter'>
            <div className='type-filter'>
              <Dropdown setSelection={updateFilters} selection={filters.status} items={propertyStatus} filterKey="status" allOption={false}/>
            </div>
            <div className='type-search'>
              <CiSearch className="search-icon"/>
              <input type="text" className='font-default' 
                onChange={updateSearch} placeholder='Search Property ID / Name'
              />  
            </div>
          </div>
          <div className="property-filter">
            <Dropdown setSelection={updateFilters} selection={filters.properties} items={propertyTypes} filterKey="properties" multiSelect={true}/>
          </div>
          <div className='price-filter'>
            <PriceDropdown setNumberRange={updateFilters} priceRange={filters.priceRange} position='right' filterKey="priceRange"/>
          </div>
          <div className='filter-modal-btn dd-selected' onClick={()=>showActiveModal("Setting")}>
            <VscSettings/> All Filters
          </div>
          <div className='filter-modal-btn dd-selected' onClick={()=>showActiveModal("Map")}>
            <FaMapMarkedAlt/> Map
          </div>
        </main>
      </section>
      <div className="explore-items container">
        <div className='breadcumbs font-small'> Home / Explore / Page {page}</div>
        <div className='explore-header'>
          <div className='explore-text'>
            <h1 className='font-header'>
              Explore
              <span className='font-title'>
                ({filters.status==="All"? "Rent & Sale" : filters.status})
              </span>
            </h1>
          </div>
          <div className='explore-sort'>
            <Dropdown setSelection={updateFilters} selection={filters.sort} items={sortList} filterKey='sort' allOption={false} position='right'/>
          </div>
        </div>
        <div className='property-card-wrapper'>
          {Array.from({length:20}).map((_, i)=>(
            <Card key={i} footer={false} side={false} id={i}/>
          ))}
        </div>
      </div>
      <Pagination totalPages={5}/>

      <FilterModal type={activeModal}/>
      <Map type={activeModal}/>
      
    </div>
  );
}

export default Explore