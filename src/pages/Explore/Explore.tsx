import React from 'react'
import './Explore.css'
import Card from '../../components/Card/Card';
import Dropdown from '../../components/Dropdown/Dropdown';
import PriceDropdown from '../../components/Dropdown/NumberRangeDropdown';
import FilterModal from './FilterModal';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import Pagination from './Pagination';

const Explore:React.FC=()=>{
  const { page } = useParams();
  const {toggleFilterModal, filters, updateFilters, propertyStatus, propertyTypes, sortList} = useAppContext();

  const updateSearch = (event: React.ChangeEvent<HTMLInputElement>)=>{
    event.preventDefault();
    const inputValue = event.target.value;
    updateFilters({search:inputValue})
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
          <div className='filter-modal-btn dd-selected' onClick={toggleFilterModal}>
            <VscSettings/> All Filters
          </div>
        </main>
      </section>
      <div className="explore-items container">
        <div className='breadcumbs font-small'> Home / Explore / Page {page}</div>
        <div className='explore-header'>
          <div className='explore-text'>
            <h1 className='font-header'>Explore </h1>
          </div>
          <div className='explore-sort'>
            <Dropdown setSelection={updateFilters} selection={filters.sort} items={sortList} filterKey='sort' allOption={false} position='right'/>
          </div>
        </div>
        <div className='feature-card-wrapper'>
          {Array.from({length:19}).map((_, i)=>(
            <Card key={i}/>
          ))}
          <Card/>
        </div>
      </div>
      <Pagination totalPages={5}/>
      <FilterModal/>
    </div>
  );
}

export default Explore