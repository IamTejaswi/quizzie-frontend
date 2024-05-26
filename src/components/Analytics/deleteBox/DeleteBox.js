import React from 'react'
import styles from './delete.module.css'

function DeleteBox({ d }) {
    return (
        <>
            <div className= {styles.title}>
        <div className={styles.modalHeader}>
                <h5 className={styles.heading}>
                    Are you confirm you lsdkf
                </h5>
                
            </div>

             <div className={styles.modalHeader}>
                <h5 className={styles.heading}>
                    want to delete?
                </h5>
                
                </div>
                </div>
            
            
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.deleteBtn} >
                Confirm Delete
              </button>
              <button
                className={styles.cancelBtn}
                        onClick={() => d(false) }
              >
                Cancel
              </button>
            </div>
            </div>
        </>
  )
}

export default DeleteBox