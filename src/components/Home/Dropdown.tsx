import './Home.css'
import {useState, useRef, useEffect} from 'react'

type SetProps = {
    setSelection: React.Dispatch<React.SetStateAction<string[]>>;
    selection:string[];
    items:string[];
    title:string;
    multiSelect?:Boolean;
}

function Dropdown({multiSelect, title, items, setSelection, selection}:SetProps){

    const allowMultiSelect = multiSelect || false;
    
    const [openDD, setOpenDD] = useState<Boolean>(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggle = () => setOpenDD(!openDD);

    function handleOnClick(item:string) {
        if (!selection.some(current => current === item)) {
            if (!allowMultiSelect) {
                setSelection([item]);
            } else {
                setSelection([...selection, item]);
            }
        } else {
        let selectionAfterRemoval = selection;

        selectionAfterRemoval = selectionAfterRemoval.filter(
            current => current !== item
        );
        setSelection([...selectionAfterRemoval]);
        }
    }
    
    function isItemInSelection(item:string) {
        if (selection.some(current => current === item)) {
        return true;
        }
        return false;
    }

    function handleClickOutside(event: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as HTMLElement)) {
            setOpenDD(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        // Unbind the event listener on clean up
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef])
    
    return (
        <div className="dd-wrapper" ref={dropdownRef}>
            <div className={`dd-selected flex-center ${openDD && 'active'} ${selection.length > 0 && 'dd-show-color'}`} onClick={toggle}>
                {selection.length > 0 ? selection.join(', ') : title}
            </div>
            {openDD && (
            <ul className='dd-list'>
                <li className='dd-item' onClick={()=>setSelection([])}>
                    {title}
                </li>      
                {items.map((item, idx) => (
                    <li className='dd-item' onClick={()=>handleOnClick(item)} key={idx}>
                        <span>{item}</span>
                        <span className={isItemInSelection(item) ? 'select-icon show' : 'select-icon'}></span>
                    </li>      
                ))}
                
            </ul>
            )}
        </div>
    )
}


export default Dropdown;