import React, {FC} from 'react'
import { Figure } from '../models/figures/Figure';

interface LostFiguresProps {
    title: string;
    figures: Figure[]
}
const LostFigures: FC<LostFiguresProps>= ({title, figures}) => {
  return (
    <div className='lost'>
      
      <h3>{title}</h3>
      <div className='lost_figures'>
      {figures.map(figure=>
        <div key={figure.id}>
            {figure.logo && <img src= {figure.logo} alt=''/>}
        </div>
        )}
    </div>
    </div>
  )
}

export default LostFigures
