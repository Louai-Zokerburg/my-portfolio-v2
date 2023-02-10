import React from 'react'

import SectionTitle from '../../components/SectionTitle'

import work from '../../assets/icons/work.svg'

const Portfolio = () => {
  return (
    <section className='section' id='portfolio'>

      <div className="inner-container">

      <SectionTitle text='My Reccent Work' icon={work} />
      </div>
      
    </section>
  )
}

export default Portfolio
