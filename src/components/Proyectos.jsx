import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardProyecto from './CardProyecto';
import { Grid, Typography } from '@material-ui/core';
import  {useTranslation} from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    // root: {
    //   display: 'flex',
    //   flexWrap: 'wrap',
    //   '& > *': {
    //     margin: theme.spacing(1),
    //     width: theme.spacing(16),
    //     height: theme.spacing(16),
    //   },
    // },
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
            git: 'https://github.com/nicoAlvarezMern/calendar-app',
            demo: 'https://nicolas-alvarez-mern-calendar.herokuapp.com/',
            imagen: window.location.origin+'/images/proyectos/notas.png'
        },
    ]
    
    const node = [
        {
            titulo: t('projects.chat'),
            descripcion: t('projects.chat-desc'),
            git: 'https://github.com/nicoAlvarezMern/calendar-app',
            demo: 'https://nicolas-alvarez-mern-calendar.herokuapp.com/',
            imagen: window.location.origin+'/images/proyectos/chat.png'
        },
        {
            titulo: t('projects.tutti'),
            descripcion: t('projects.tutti-desc'),
            git: 'https://github.com/nicoAlvarezMern/journal-app',
            demo: 'https://tuttifrutti-fer.herokuapp.com/',
            imagen: window.location.origin+'/images/proyectos/tuttifrutti.png'
        },
        {
            titulo: t('projects.mp'),
            descripcion: t('projects.mp-desc'),
            git: 'https://github.com/nicoAlvarezMern/journal-app',
            demo: 'https://nicolas-alvarez-mern-journal-app.netlify.app/',
            imagen: window.location.origin+'/images/proyectos/checkout.png'
    
        },
    ]
    
    const react = [
        {
            titulo: t('projects.subjects'),
            descripcion: t('projects.subjects-desc'),
            git: 'https://github.com/nicoAlvarezMern/calendar-app',
            demo: 'https://nicolas-alvarez-mern-calendar.herokuapp.com/',
            imagen: window.location.origin+'/images/proyectos/chat.png'
        },
        {
            titulo: t('projects.portfolio'),
            descripcion: t('projects.portfolio-desc'),
            git: 'https://github.com/nicoAlvarezMern/journal-app',
            demo: 'https://tuttifrutti-fer.herokuapp.com/',
            imagen: window.location.origin+'/images/proyectos/tuttifrutti.png'
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
