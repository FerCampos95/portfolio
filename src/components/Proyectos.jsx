import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardProyecto from './CardProyecto';
import { Grid, Typography } from '@material-ui/core';
import  {useTranslation} from 'react-i18next';

import screenNotas  from '../images/proyectos/notas.png';
import screenChat   from '../images/proyectos/chat.png';
import screenTutti from '../images/proyectos/tuttifrutti.png'
import screenCheckout from '../images/proyectos/checkout.png'
import screenMaterias from '../images/proyectos/chat.png'
import screenPortfolio from '../images/proyectos/tuttifrutti.png'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        padding: theme.spacing(2),
    },
    titulo: {
        backgroundColor: theme.palette.text.primary,
        color: 'white',
        borderRadius: '30px',
    },
    cards: {
        display: 'flex',
        margin: theme.spacing(3),
        justifyContent: 'space-around',
    },
}));



export const Proyectos = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    const html = [
        {
            titulo: t('projects.notes'),
            descripcion: t('projects.notes-desc'),
            git: 'https://google.com',
            demo: 'https://google.com',
            imagen: screenNotas,
        },
    ]
    
    const node = [
        {
            titulo: t('projects.chat'),
            descripcion: t('projects.chat-desc'),
            git: 'https://google.com',
            demo: 'https://google.com',
            imagen: screenChat,
        },
        {
            titulo: t('projects.tutti'),
            descripcion: t('projects.tutti-desc'),
            git: 'https://google.com',
            demo: 'https://google.com',
            imagen: screenTutti,
        },
        {
            titulo: t('projects.mp'),
            descripcion: t('projects.mp-desc'),
            git: 'https://google.com',
            demo: 'https://google.com',
            imagen: screenCheckout,
            
        },
    ]
    
    const react = [
        {
            titulo: t('projects.subjects'),
            descripcion: t('projects.subjects-desc'),
            git: 'https://google.com',
            demo: 'https://google.com',
            imagen: screenMaterias,
            
        },
        {
            titulo: t('projects.portfolio'),
            descripcion: t('projects.portfolio-desc'),
            git: 'https://google.com',
            demo: 'https://google.com',
            imagen: screenPortfolio,
        },
    
    ]
    
    return (
        <Paper elevation={3} className={classes.paper}>
            <Grid container>
                <Grid item xs={12} className={classes.titulo}>
                    <Typography variant="h4" color="initial" align="center">HTML/CSS</Typography>
                </Grid>
                <Grid container xs={12} className={classes.cards}>
                    {
                        html.map(proyecto => {
                            return (
                                <CardProyecto
                                    imagen={proyecto.imagen}
                                    titulo={proyecto.titulo}
                                    descripcion={proyecto.descripcion}
                                    git={proyecto.git}
                                    demo={proyecto.demo}
                                ></CardProyecto>
                            )

                        })
                    }
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12} className={classes.titulo}>
                    <Typography variant="h4" color="initial" align="center">Node</Typography>
                </Grid>
                <Grid container xs={12} className={classes.cards}>
                    {
                        node.map(proyecto => {
                            return (
                                <CardProyecto
                                    imagen={proyecto.imagen}
                                    titulo={proyecto.titulo}
                                    descripcion={proyecto.descripcion}
                                    git={proyecto.git}
                                    demo={proyecto.demo}
                                ></CardProyecto>
                            )

                        })
                    }
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12} className={classes.titulo}>
                    <Typography variant="h4" color="initial" align="center">React</Typography>
                </Grid>
                <Grid container xs={12} className={classes.cards}>
                    {
                        react.map(proyecto => {
                            return (
                                <CardProyecto
                                    imagen={proyecto.imagen}
                                    titulo={proyecto.titulo}
                                    descripcion={proyecto.descripcion}
                                    git={proyecto.git}
                                    demo={proyecto.demo}
                                ></CardProyecto>
                            )

                        })
                    }
                </Grid>
            </Grid>
        </Paper>
    );
}
