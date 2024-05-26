import React,{useState} from 'react'
import Login from '../../components/Login/Login'
import OptionList from '../../components/shared/inputTabs/Tabs'
import Modal from '../../components/shared/inputTabs/modal/Modal'

export default function LoginPage() {
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
      {
        isModalOpen &&
        <Modal
            setIsOpen={setIsModalOpen}>
            <>
             <Login /> 
              <OptionList />
            </>
        </Modal>
        
      }
            {/* <Modal setIsOpen={setIsModalOpen}>
                <>
                        <Login />
                        <OptionList />
                </>
            </Modal> */}
    </div>
  )
}
