import React, { useState }  from 'react'
import Analytics from "../../components/Analytics/Analytics"
import Sidebar from '../../components/DashBoard/Sidebar'
import Modal from '../../components/shared/inputTabs/modal/Modal'

export default function AnalyticsPage() {
  const [isCreate, setIsCreate] = useState(false)
  return (
    <div>
      <Sidebar s={"A"} c={setIsCreate } />
      <Analytics />
      {
        isCreate &&
        <Modal
            setIsOpen={setIsCreate}>
            <>
             <h1>Hello</h1>
            </>
        </Modal>
        
      }
    </div>
  )
}
