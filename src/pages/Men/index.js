import React from 'react'
import Filter from '../../components/Filter'
import Gallery from '../../components/Gallery'
import Sort from '../../components/Sort'
import { MainWrapper } from './style'

function Men() {
  return (
    
    <MainWrapper>
        {/* left component - categories/designers */}
        <Filter></Filter>

        {/* middle component - gallery */}
        <Gallery></Gallery>

        {/* right component - sort */}
        <Sort></Sort>
    </MainWrapper>
  )
}

export default Men