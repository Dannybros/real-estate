import {ReactNode} from 'react'
import './Modal.css'
import { IoMdClose } from "react-icons/io";
import { useAppContext } from '../../context/AppContext';

interface ModalProps{
    children: ReactNode;
    title: string;
}

const Modal=({children, title}:ModalProps)=> {

    const {isFilterModalOpen, toggleFilterModal} = useAppContext();

    return (
        
        <div className={`modal ${isFilterModalOpen && 'open'}`}>
            <div className='modal-overlay' onClick={toggleFilterModal}/>
            <div className="modal-content">
                <div className='modal-header font-subheader'>
                    {title}
                </div>
                <div className='modal-close' onClick={toggleFilterModal}>
                    <IoMdClose/>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal