import React from 'react'
import Newsletter from '../Newsletter/Newsletter'

const NewsletterList = ({newsletters = []}) => {
  return (
    <div className="AllNewsletter d-flex-column">
      {
          newsletters.map((newsl) => {
              return <Newsletter Newsletter={newsl} key={newsl.id}/>
              
          })
      }
    </div>
  )
}

export default NewsletterList