import React from 'react'
import { NumberRange } from '../../context/AppContext'
import './FilterModal.css'
import { formatNumberWithCommas } from '../../components/Dropdown/NumberRangeDropdown';

interface FilterPropertyTypeProps {
    title: string;
    options: string[];
    filterKey: 'properties' | 'land' | 'industry' | 'features';
    selectedValues: string[];
    handleFilterChange: (item: string, filterKey:'properties' | 'land' | 'industry' | 'features') => void;
    className?:string;
}

interface FilterPropertyInteriorProps{
    title: string;
    filterKey: string;
    selectedValue: number | null;
    handleFilterChange: (filter: { [key: string]: number | null }) => void;

}

interface FilterPropertyNumberProps {
    title: string;
    min: number | null;
    max: number | null;
    filterType: 'priceRange' | 'sizeRange' | 'yearRange';
    onChange: ( 
        event: React.ChangeEvent<HTMLInputElement>,
        numKey: keyof NumberRange,
        filterType: 'priceRange' | 'sizeRange' | 'yearRange' 
    )=> void
}

export const FilterPropertyType: React.FC<FilterPropertyTypeProps> = ({
    className='filter-item',
    title,
    options,
    filterKey,
    selectedValues,
    handleFilterChange,
}) => {
    return(
    <div className={className}>
        <h3>{title}</h3>
        <div className='checkbox-tile-container'>
            {options.map((item, index) => (
            <label className='checkbox-label' key={index}>
                <input 
                type="checkbox" 
                checked={selectedValues.includes(item)} 
                onChange={() => handleFilterChange(item, filterKey)}
                />
                <div className='checkbox-text'>
                {item}
                </div>
            </label>
            ))}
        </div>
    </div>
    )
};

export const FilterPropertyInteriorOption: React.FC<FilterPropertyInteriorProps> = ({
    title,
    filterKey,
    selectedValue,
    handleFilterChange,
}) => {
    return(
    <div className="filter-item">
      <h3>{title}</h3>
      <ul className='interior-list'>
        <li 
          className={`${selectedValue === null && 'active'}`}
          onClick={() => handleFilterChange({ [filterKey]: null })}
        >
          Any
        </li>
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index} 
            className={`${selectedValue === index + 1 && 'active'}`}
            onClick={() => handleFilterChange({ [filterKey]: index + 1 })}
          >
            {index + 1}+
          </li>
        ))}
      </ul>
    </div>
    )
};

export const FilterPropertyNumberOption: React.FC<FilterPropertyNumberProps> = ({ 
    title, min, max, filterType, onChange
}) => {
    return(
        <div className="filter-item">
            <h3>{title}</h3>
            <div className="number-container">
                <input
                type="text"
                className="font-default number-input"
                placeholder="Min"
                value={formatNumberWithCommas(min)}
                onChange={(e) => onChange(e, 'min', filterType)}
                />
                <input
                type="text"
                className="font-default number-input"
                placeholder="Max"
                value={formatNumberWithCommas(max)}
                onChange={(e) => onChange(e, 'max', filterType)}
                />
            </div>
        </div>
    )
};
