import React, { useState }  from 'react'
import Analytics from "../../components/Analytics/Analytics"
import Sidebar from '../../components/DashBoard/Sidebar'
import Modal from '../../components/shared/inputTabs/modal/Modal'

import Quiztype from '../../components/CreateQuiz/Quiztype/Quiztype'
import QuestionForm from '../../components/CreateQuiz/Questions/QuestionForm'
import Questions from '../../components/CreateQuiz/Questions/Questions'

export default function AnalyticsPage() {
  const [isCreate, setIsCreate] = useState(false)
  return (
    <div>
      <Sidebar s={"A"} c={setIsCreate} />
      <Analytics />
      {isCreate && (
        <Modal setIsOpen={setIsCreate}>
          <>
            {/* <Quiztype  /> */}

           {/* <QuestionForm/> */}
           <Questions/>
          </>
        </Modal>
      )}
    </div>
  );
}
