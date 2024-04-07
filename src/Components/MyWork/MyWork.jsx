import React from 'react'
import '../MyWork/MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
  return (
    <div id='portfolio' className='mywork'>
        <div className="mywork-title">
            <h1>Meus Últimos Projetos</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=> {
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="mywork-showmore">
            <p>Mostrar Mais</p>
            <img className='arrow-icon' src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork