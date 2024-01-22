import './Dropdown.css'
import {useState, useRef, useEffect} from 'react'
import { FilterType, NumberRange } from '../../context/AppContext';

type NumberRangeProps = {
    setNumberRange: (newFilters: Partial<FilterType>) => void;
    priceRange:NumberRange;
    position?:'left' | 'right';
    filterKey:string;
}

export function formatNumberWithCommas(value: number | null): string {
    if (value === null) {
      return '';
    }
    return value.toLocaleString();
}

function NumberRangeDropdown({position="left", setNumberRange, filterKey, priceRange}:NumberRangeProps){

    const [openDD, setOpenDD] = useState<Boolean>(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggle = () => setOpenDD(!openDD);

    function handleClickOutside(event: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as HTMLElement)) {
            setOpenDD(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, key: keyof NumberRange) => {
        const inputValue = event.target.value.replace(/\D/g, '');
        const parsedValue = inputValue === '' ? null : parseFloat(inputValue);

        setNumberRange({[filterKey]: {
            ...priceRange,
            [key]: parsedValue
        }})
    };    
    
    return (
        <div className="dd-wrapper" ref={dropdownRef}>
            <div className={`dd-selected flex-center ${openDD && 'active'} `} onClick={toggle}>
                Price
            </div>
            {openDD && (
                <div className='dd-list' style={{ [position]:0 }}>
                    <main>
                        <p className='price-range-title'>Price Range</p>
                        <div className='price-lists'>
                            <div className='price-list'>
                                <h4>Minimum</h4>
                                <input type="text" className='font-default number-input' placeholder='No Min'
                                    value={formatNumberWithCommas(priceRange.min)}
                                    onChange={(e) => handleInputChange(e, 'min')}
                                />
                            </div>
                            <div className='price-list'>
                                <h4>Maximum</h4>
                                <input type="text" className='font-default number-input' placeholder='No Max'
                                    value={formatNumberWithCommas(priceRange.max)}
                                    onChange={(e) => handleInputChange(e, 'max')}
                                />
                            </div>
                        </div>
                    </main>
                </div>
            )}
        </div>
    )
}


export default NumberRangeDropdown;