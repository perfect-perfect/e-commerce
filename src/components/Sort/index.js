import React from 'react'
import { SortWrapper } from './style'

function Sort() {
  return (
    <SortWrapper>
        <nav>
            <ul>
                <li>
                    <h2>SORT</h2>
                </li>
                <li>
                    Lastest arrivals
                </li>
                <li>
                    Price: Low to high
                </li>
                <li>
                    Price: High to low
                </li>
            </ul>
        </nav>
        <nav>
            <ul>
                <li>
                    <h2>COLORS</h2>
                </li>
                <li>
                    <span>ALL COLORS</span>
                </li>
                <li>
                    <span>Black</span>Black
                </li>
                <li>
                    <span>Blue</span>
                </li>
                <li>
                    <span>Brown</span>
                </li>
                <li>
                    <span>Burgundy</span>
                </li>
                <li>
                    <span>Gray</span>
                </li>
            </ul>
        </nav>
    </SortWrapper>
  )
}

export default Sort