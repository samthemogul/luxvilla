import React from 'react'
import styles from '@styles/pages/dashboard/propertyListings/propertylistings.module.css'

// export async function generateStaticParams() {
//   const users = [{ userId: '1'  }, { userId: '2' }]
//   return users.map((user) => ({
//     userId: user.userId  
//   }))
// }

const PropertyPage = () => {
  return (
    <div className={styles.properties_page_con}>Properties</div>
  )
}


export default PropertyPage