import Animation from '../../components/Animation/Animation';
import Modal from '../../components/Modal/Modal'
import {NumberRange, useAppContext } from '../../context/AppContext'
import './FilterModal.css'
import { FilterPropertyInteriorOption, FilterPropertyNumberOption, FilterPropertyType } from './FilterModalItems';

const landTypes = ["Mountain", "Lake", "Woods", "Flat"]
const IndustryTypes = ["Factor", "Mines"]
const Features = ["Private Pool", "Basement", "Roof", "Fireplace", "Hardwood Floors", 
"Gardens"]

function FilterModal() {
  const {propertyTypes, propertyStatus, filters, updateFilters} = useAppContext();

  const handleInfoChange= (
    property:string, 
    filterKey:'properties' | 'land' | 'industry' | 'features'
  ) => {
    const selected = filters[filterKey];

    if(selected.includes(property)){
      const indexToRemove = selected.indexOf(property);
      selected.splice(indexToRemove, 1);
    }else{
      selected.push(property);
    }

    updateFilters({[filterKey]:selected});
  };

  const handleNumberChange = ( 
    event: React.ChangeEvent<HTMLInputElement>,
    numKey: keyof NumberRange,
    filterType: 'priceRange' | 'sizeRange' | 'yearRange' 
  ) =>{
    const inputValue = event.target.value.replace(/\D/g, '');
    const parsedValue = inputValue === '' ? null : parseFloat(inputValue);
    filters[filterType][numKey] = parsedValue;

    updateFilters({[filterType]: filters[filterType]})
  }

  return (
    <Modal title='All Filters'>
      <div className='filter-toolbox'>
        <div className='filter-status'>
          <ul className='filter-status-list'>
            {propertyStatus.map((item, i)=>(
              <li 
                key={i} className={`${filters.status===item && 'active'}`}
                onClick={()=>updateFilters({"status": item})}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className='filter-type'>
          <FilterPropertyType 
            title="Property Types" 
            options={propertyTypes} 
            filterKey="properties" 
            selectedValues={filters.properties} 
            handleFilterChange={handleInfoChange} 
          />
        </div>
        <Animation show={filters.properties.includes("Land" ) || filters.properties.includes("Industry" )}>
          <div 
            className='filter-others'
            style={{
              gap:filters.properties.includes("Land" ) && filters.properties.includes("Industry" ) ? "40px" : "0"
            }}
          >
            <FilterPropertyType 
              className={`filter-item land ${filters.properties.includes("Land") && 'show'}`}
              title="Land Types" 
              options={landTypes} 
              filterKey="land" 
              selectedValues={filters.land} 
              handleFilterChange={handleInfoChange} 
            />
            <div className={`filter-divider ${filters.properties.includes("Land" ) && filters.properties.includes("Industry" ) && 'show'}`}/> 
            <FilterPropertyType 
              className={`filter-item industry ${filters.properties.includes("Industry") && 'show'}`}
              title="Industry Types" 
              options={IndustryTypes} 
              filterKey="industry" 
              selectedValues={filters.industry} 
              handleFilterChange={handleInfoChange} 
            />
          </div>
        </Animation>
        <div className='filter-info-container'>
          <div className='filter-info-box'>
            <FilterPropertyNumberOption
              title="Price ($)"
              filterType='priceRange'
              min={filters.priceRange.min}
              max={filters.priceRange.max}
              onChange={handleNumberChange}
            />
            <FilterPropertyNumberOption
              title="Square Meter (m²)"
              filterType='sizeRange'
              min={filters.sizeRange.min}
              max={filters.sizeRange.max}
              onChange={handleNumberChange}
            />
            <FilterPropertyNumberOption
              title="Year Built"
              filterType='yearRange'
              min={filters.yearRange.min}
              max={filters.yearRange.max}
              onChange={handleNumberChange}
            />
          </div>
          <div className='filter-info-box'>
            <FilterPropertyInteriorOption
              title="Beds" 
              filterKey="beds" 
              selectedValue={filters.beds} 
              handleFilterChange={updateFilters} 
            />
            <FilterPropertyInteriorOption 
              title="Baths" 
              filterKey="baths" 
              selectedValue={filters.baths} 
              handleFilterChange={updateFilters} 
              />
            <FilterPropertyInteriorOption
              title="Parking" 
              filterKey="beds" 
              selectedValue={filters.beds} 
              handleFilterChange={updateFilters} 
            />
          </div>
        </div>
        <div className='filter-features'>
          <div className='filter-item'>
            <h3>Features</h3>
            <div className='filter-feature-container'>
              {Features.map((item, i)=>(
                <label 
                  className='filter-feature-item' key={i}
                  onChange={()=>handleInfoChange(item, "features")}
                >
                  <input type="checkbox" name={item}/>
                  <span className='checkbox-bin'></span>
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default FilterModal