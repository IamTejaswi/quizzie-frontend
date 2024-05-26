import React from 'react'

import DashBoard from '../../components/DashBoard/DashBoard'
import Sidebar from '../../components/DashBoard/Sidebar'


export default function DashBoardPage() {
  return (
    <div>

      <Sidebar s={"D"} />
      <DashBoard/>

    </div>
  )
}
