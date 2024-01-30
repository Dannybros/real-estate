import {ReactNode} from 'react'
import './Modal.css'
import { IoMdClose } from "react-icons/io";
import { useAppContext } from '../../context/AppContext';

interface ModalProps{
    children: ReactNode;
    title: string;
    rightModal:boolean
}

const Modal=({children, title, rightModal}:ModalProps)=> {

    const {isFilterModalOpen, toggleFilterModal} = useAppContext();

    return (
        
        <div className={`modal ${rightModal && isFilterModalOpen && 'open'}`}>
            <div className='modal-overlay' onClick={toggleFilterModal}/>
            <div className="modal-content">
                <div className='modal-header font-subheader'>
                    {title}
                </div>
                <div className='modal-close' onClick={toggleFilterModal}>
                    <IoMdClose/>
                </div>
                <div className='modal-body'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal