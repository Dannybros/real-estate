import {ReactNode} from 'react'
import './Modal.css'
import { IoMdClose } from "react-icons/io";
import { useAppContext } from '../../context/AppContext';

interface ModalProps{
    children: ReactNode;
    title: string;
    rightModal:boolean;
    small?:boolean;
}

const Modal=({children, title, rightModal, small}:ModalProps)=> {

    const {isModalOpen, toggleModal, modalType} = useAppContext();

    return (
        <div className={`modal ${rightModal && isModalOpen && 'open'}`}>
            <div className='modal-overlay' onClick={()=>toggleModal(modalType)}/>
            <div className={`modal-content ${small && 'small'} `}>
                <div className='modal-header font-subheader'>
                    {title}
                </div>
                <div className='modal-close' onClick={()=>toggleModal(modalType)}>
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