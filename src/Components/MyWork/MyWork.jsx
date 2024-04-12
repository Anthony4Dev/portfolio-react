import React from 'react';
import '../MyWork/MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
    const handleWorkClick = (workLink) => {
        window.location.href = workLink;
    };

    return (
        <div id='portfolio' className='mywork'>
            <div className="mywork-title">
                <h1>Meus Últimos Projetos</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return (
                        <div key={index} className="mywork-item" onClick={() => handleWorkClick(work.w_link)}>
                            <a href={work.w_link} target='_blank' rel='noopener noreferrer'>
                                <img src={work.w_img} alt="" />
                            </a>
                        </div>
                    );
                })}
            </div>
            <div className="mywork-showmore">
                <p><a className="mywork-link" href='https://github.com/Anthony4Dev' target='_blank' rel='noopener noreferrer'>Em breve mais!</a></p>
                <img className='arrow-icon' src={arrow_icon} alt="" />
            </div>
        </div>
    );
};

export default MyWork;
