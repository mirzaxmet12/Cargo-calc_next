'use client';

import React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
function Features() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    const features = [
        'Отслеживание остатков в реальном времени',
        'Автоматические оповещения о низких запасах',
        'История закупок и продаж',
        'Поддержка нескольких складов',
        'Инвентарные отчёты',
        'Роли и доступы сотрудников',
        'Интеграция со сканером штрихкодов',
    ];

    return (
        <section id="features">
            <div className="container features reveal">
                <h1 className="title">Что умеет наше приложение?</h1>
                <div className="features_card">
                    {features.map((title, index) => {
                        const isOpen = expanded === `panel${index}`;

                        return (
                        <Box  key={index} sx={{
                            mb: 1,
                            boxShadow: ' 0px 5px 0px 0px #5A1490',
                            border: '1.5px solid #5A1490',
                            borderRadius: '24px',
                            overflow: 'hidden',

                        }}>
                            <Accordion
                                key={index}
                                expanded={expanded === `panel${index}`}
                                onChange={handleChange(`panel${index}`)}
                            >
                                <AccordionSummary >
                                    <Box sx={{
                                        display: 'flex',
                                        width: '100%',
                                        justifyContent: 'space-between',

                                    }} >
                                        <Typography sx={{
                                             whiteSpace: 'nowrap',    
                                             overflow: 'hidden',      
                                             textOverflow: 'ellipsis', 
                                             width:'80%',
                                             display: 'block', 
                                            fontWeight: '800',
                                            fontSize:{ sx:'21px',md:'24px'},
                                        }}>{title}</Typography>
                                        <Typography sx={{
                                            
                                            background: '#5A1490',
                                            fontSize: '24px',
                                            height: '32px',
                                            padding:'4px',
                                            width: '32px',
                                            color: '#fff',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'


                                        }}><img src={isOpen ? 'minus.png' : 'add.png'} alt="" /></Typography></Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body2" sx={{
                                        fontWeight: '400',
                                        fontSize: { sx:'18px',md:'21px'},
                                        textAlign: 'left',
                                        padding:'10px',
                                    }}>
                                        Это функция, которая позволяет видеть актуальное количество товаров
                                        на складе или в магазине в каждый момент времени, без задержек и
                                        ручных обновлений.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Box>)
                    })}
                </div>
            </div>
        </section >
    )
}

export default Features