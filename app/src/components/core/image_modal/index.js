import React, {useState} from 'react'
import {modalMain, blogImage, modalContent} from "./style.module.css";


const ImageModal = ({imageUrl}) => {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const openModal = () => {
        setIsOpenModal(true)
    }

    const closeModal = () => {
        setIsOpenModal(false)
    }

    return (
        <div>
            <img onClick={openModal} className={blogImage} width="100%" src={imageUrl} alt="some image"/>
            {isOpenModal ? (
                <div className={modalMain} onClick={closeModal}>
                    <div className={modalContent}>
                        <img width="100%" src={imageUrl} alt=""/>
                    </div>
                </div>
            ) : <></>}
        </div>
    )
}

export default ImageModal