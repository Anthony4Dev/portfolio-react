import React from 'react';
import '../Services/Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
    const handleServiceClick = (serviceNo) => {
        const serviceLinks = {
            '01': 'https://www.figma.com/proto/aQkuF0N4gyqfqGqzTzVPmF/MultiSa%C3%BAde?node-id=2-2&starting-point-node-id=181%3A2&scaling=scale-down&t=hqvK7AGwwVrfIKdy-1&mode=design',
            '02': 'link-do-servico-02',
            '03': 'link-do-servico-03',
            '04': 'https://anthony4dev.github.io/pokedex/' 
        };

        if (serviceNo in serviceLinks) {
            
            window.location.href = serviceLinks[serviceNo];
        }
    };

    return (
        <div id='serviços' className='services'>
            <div className="services-title">
                <h1>Serviços</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="services-container">
                {Services_Data.map((service,index) => {
                    return (
                        <div key={index} className="services-format" onClick={() => handleServiceClick(service.s_no)}>
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <p>{service.s_desc}</p>
                            <div className="services-readmore">
                                <p>Saiba mais</p>
                                <img src={arrow_icon} alt="" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Services;
