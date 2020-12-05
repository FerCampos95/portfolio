import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardProyecto from './CardProyecto';
import { Button, Divider, Grid, Tabs, Typography } from '@material-ui/core';

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


const html = [
    {
        titulo: 'Mis Notas',
        descripcion: 'Mi primera pagina web con HTML-CSS, utiliza LocalStorage para almacenar las Notas en sus Hojas',
        git: 'https://github.com/nicoAlvarezMern/calendar-app',
        demo: 'https://nicolas-alvarez-mern-calendar.herokuapp.com/',
        imagen: './images/proyectos/notas.png'
    },
]

const node = [
    {
        titulo: 'Chat en Vivo',
        descripcion: "Chat en vivo creado con Vanilla.js HTML/CSS utilizando la biblioteca Socket.io.",
        git: 'https://github.com/nicoAlvarezMern/calendar-app',
        demo: 'https://nicolas-alvarez-mern-calendar.herokuapp.com/',
        imagen: './images/proyectos/chat.png'
    },
    {
        titulo: 'Juego TuttiFrutti',
        descripcion: 'El juego del TuttiFrutti en una Sala creado con Node.js HTML/CSS que utiliza la biblioteca Socket.io.',
        git: 'https://github.com/nicoAlvarezMern/journal-app',
        demo: 'https://tuttifrutti-fer.herokuapp.com/',
        imagen: './images/proyectos/tuttifrutti.png'
    },
    {
        titulo: 'Checkout MercadoPago',
        descripcion: 'Integración del Servicio de CheckoutPro de Mercado Pago para la certificación 2020',
        git: 'https://github.com/nicoAlvarezMern/journal-app',
        demo: 'https://nicolas-alvarez-mern-journal-app.netlify.app/',
        imagen: './images/proyectos/checkout.png'

    },
]

const react = [
    {
        titulo: 'Mis Materias',
        descripcion: "Una WebApp para cargar las materias y generar las posibles cursadas en la universidad, creada con React y Material-UI.",
        git: 'https://github.com/nicoAlvarezMern/calendar-app',
        demo: 'https://nicolas-alvarez-mern-calendar.herokuapp.com/',
        imagen: './images/proyectos/chat.png'
    },
    {
        titulo: 'Mi Portafolio',
        descripcion: 'Mi portafolio creado con React y Material-UI con diseño totalmente Responsive e instalable',
        git: 'https://github.com/nicoAlvarezMern/journal-app',
        demo: 'https://tuttifrutti-fer.herokuapp.com/',
        imagen: './images/proyectos/tuttifrutti.png'
    },

]

export const Proyectos = () => {
    const classes = useStyles();

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
