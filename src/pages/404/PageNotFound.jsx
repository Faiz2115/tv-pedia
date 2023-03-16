import React from 'react'
import './style.scss'
const PageNotFound = () => {
  document.title = `TV-Pedia - Page Not Found`

  return (
    <section className="pagenotfound-section">
      <h1>--- 404 ---</h1>
      <h1>Sorry Page Not Available!</h1>
    </section>
  )
}

export default PageNotFound