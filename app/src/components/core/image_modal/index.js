import React, {useState} from 'react'
import {modalMain,blogImage,close} from "./style.module.css";


const ImageModal = ({imageUrl}) => {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const openModal = () => {
        setIsOpenModal(true)
        // image_modal.style.display = "block";
    }

    const closeModal = () => {
        setIsOpenModal(false)
        // image_modal.style.display = "block";
    }

    return (
        <div>
            <h2>Animated Modal with Header and Footer</h2>
            {!isOpenModal?(
                <img onClick={openModal} className={blogImage} width="100%" src={imageUrl} alt="some image"/>
            ):<></>}

            {isOpenModal ? (
                        <div className={modalMain}>
                            <div>
                                <img className={close} onClick={closeModal} width="100%" src={imageUrl} alt=""/>
                            </div>
                        </div>
            ) : <></>}
        </div>
    )
}

export default ImageModal