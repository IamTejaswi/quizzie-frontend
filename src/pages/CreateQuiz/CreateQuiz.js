import React from 'react'
import { useState } from 'react';
import OptionList from '../../components/shared/inputTabs/Tabs'
import Modal from '../../components/shared/inputTabs/modal/Modal'
import InputBox from '../../components/shared/InputBox/InputBox';
export default function CreateQuiz() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true)
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
    }
    return (
      <div>
        <button type="button" onClick={handleModalOpen}>
          Click Me to Open Modal
        </button>
        {isModalOpen && (
          <Modal setIsOpen={setIsModalOpen}>
            <>
              <InputBox />
            </>
          </Modal>
        )}
        <Modal setIsOpen={setIsModalOpen}>
          <>
            <InputBox />
            <OptionList/>
          </>
        </Modal>
      </div>
    );
} 
