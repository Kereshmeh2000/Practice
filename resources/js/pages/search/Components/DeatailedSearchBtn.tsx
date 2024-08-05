import React, {useState} from 'react';
import Modal from '../../profile/components/Modal';
import DetailedSearch from './DetailedSearch';

export default function DetailedSearchBtn() {

    const [showModal, setShowModal] = useState(false);
    const handleOpen = () => {
        setShowModal(true);
    }
    const handleClose = () => {
        setShowModal(false);
    }

    return (
        <>
        <button className='lg:hidden w-full fixed bottom-12 py-3 border border-gray-300' onClick={handleOpen}>
            Deatailed Search
        </button>
        {showModal && (
            <Modal
                showModal={showModal}
                closeModal={handleClose}
                title='Detailed Search'
            >
                <DetailedSearch />
            </Modal>
        )}
        </>
    )
}