import { Grid, Avatar, makeStyles, Container, Divider, Typography, Hidden } from '@material-ui/core'
import React from 'react';
import Tecnologia from './Tecnologia';
// import { Education } from './Education';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    foto: {
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
    marginTop: {
        marginTop: '10px'
    },
    gridDerecho: {
        // background: '#27221F',
        background: theme.palette.text.primary,
        color: 'white',
        padding: '2em',
    },
    line: {
        lineHeight: 2
    },
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    divider: {
        borderTop: '3px solid',
        borderTopColor: theme.palette.primary.dark,
        width: '100%'
    }, dividerCorto: {
        borderTop: '3px solid',
        borderTopColor: theme.palette.primary.light,
        width: '50%'
    },
    gridIzquierda: {
        paddingRight: theme.spacing(2),
        color: 'black'
    },
    p: {
        fontSize: theme.spacing(2),
    }
}));

export const Curriculum = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper} elevation={5}>
            <Grid container>
                <Grid container item xs={12} sm={4} className={classes.gridIzquierda}>
                    <Grid container item xs={12} justify="center" direction="column" alignItems="center">
                        <Avatar
                            alt="Foto Perfil"
                            src="./images/fer-campos.png"
                            className={classes.foto}
                        />
                        <Typography variant="h3">
                            Fernando Campos
                        </Typography>
                    </Grid>
                    <Grid container item xs={12}
                        justify="center"
                        direction="column"
                        alignContent="center"
                        alignItems="center"
                    >
                        <Divider className={classes.divider} />
                        <Typography variant="h4" className={classes.marginTop}>
                            Desarrollador Full Stack
                        </Typography>
                        <p>
                            Soy estudiante de la carrera de Ingeniería en Informática de la UNLaM. Actualmente me encuentro cursando el segundo año de la carrera. Me dedico especialmente al desarrollo web con React y Node.js aunque también tengo conocimientos en otras tecnologías y en el área de infraestructura trabajando con Microsoft Azure.
                        </p>
                        <Divider className={classes.divider} />
                        <Typography variant="h6" className={classes.marginTop}>
                            Localidad
                        </Typography>
                        <p>González Catán, La Matanza, Bs As, Argentina.</p>
                        <Typography variant="h6" className={classes.marginTop}>
                            Contacto
                        </Typography>
                        <p><b>Teléfono:</b> +54 11-6707-0753<br></br>
                            <b>Email:</b> fer_eze_jose@hotmail.com</p>
                        <Divider className={classes.divider} />
                    </Grid>
                    <Grid container item xs={12}
                        // justify="center"
                        direction="column"
                    // alignContent="flex-start"
                    // alignItems="flex-start"
                    >
                        <Typography variant="h6" className={classes.marginTop}>
                            Tecnologias
                        </Typography>
                        <Tecnologia nombre={"Javascript"} nivel={94}></Tecnologia>
                        <Tecnologia nombre={"Java"} nivel={75}></Tecnologia>
                        <Tecnologia nombre={"C"} nivel={80}></Tecnologia>
                        <Tecnologia nombre={"HTML/CSS"} nivel={60}></Tecnologia>
                        <Tecnologia nombre={"React"} nivel={82}></Tecnologia>
                        <Tecnologia nombre={"Node"} nivel={68}></Tecnologia>
                        <Tecnologia nombre={"Mongo"} nivel={35}></Tecnologia>
                        <Tecnologia nombre={"SQL"} nivel={35}></Tecnologia>
                        <Tecnologia nombre={"Docker"} nivel={66}></Tecnologia>
                        <Tecnologia nombre={"Azure"} nivel={88}></Tecnologia>

                    </Grid>
                </Grid>


                <Grid item xs={12} sm={8} className={classes.gridDerecho}
                    direction="column"
                >
                    <Typography variant="h4" color="initial">Educación</Typography>
                    <Grid container direction="row" alignItems="center" >
                        <Grid sm={4} xs={12}>
                            <p>01-03-2017 - Actualidad</p>
                        </Grid>
                        <Grid sm={8} xs={12}>
                            <h2 className="fs-2">Universidad Nacional de La Matanza</h2>
                            <p>Ingeniería en Informática</p>
                            <Divider className={classes.dividerCorto} />
                        </Grid>
                        <Grid sm={4} xs={12}>
                            <p>2008 - 2013</p>
                        </Grid>
                        <Grid sm={8} xs={12}>
                            <h2 className="fs-2">Instituto González Catán</h2>
                            <p>Bachiller en Economía y Administración</p>
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                    <Typography variant="h4" color="initial" className={classes.marginTop}>Experiencia Laboral</Typography>
                    <Grid container direction="row" alignItems="center" >
                        <Grid sm={4} xs={12}>
                            <p>01-06-2020 - Actualidad</p>
                        </Grid>
                        <Grid sm={8} xs={12}>
                            <h2 className="fs-2">Epidata: Desarrollador Full Stack</h2>
                            <p>Desarrollo web con React, Node, Express, Java</p>
                            <Divider className={classes.dividerCorto} />
                        </Grid>
                        <Grid sm={4} xs={12}>
                            <p>02-03-2020 - 01-06-2020</p>
                        </Grid>
                        <Grid sm={8} xs={12}>
                            <h2 className="fs-2">Epidata: Soporte Infraestructura</h2>
                            <p className={`fs-1`}>
                                Mi labor fue liderar la migración de todos los servicios web hospedados en AWS hacia Azure, reduciendo el costo de la compañia en ese sector un 100% durante un año y medio debido a que contaban con un patrocinio de Microsoft que no utilizaban.<br></br>
                            Migramos los servidores Redmine, CRM, SitioWeb(Wordpress) y Jenkins/SonarQube.<br></br>
                            Además migramos el sitio web de wordpress del dominio .com al .net en conjunto a email empresarial.
                            </p>
                            <Divider className={classes.dividerCorto} />
                        </Grid>
                        <Grid sm={4} xs={12}>
                            <p>2013 a 2016 y 2019-2020</p>
                        </Grid>
                        <Grid sm={8} xs={12}>
                            <h2 className="fs-2">Emprendimiento Personal: Centro Educacional El Progreso</h2>
                            <p className={`fs-1`}>
                                Me encargaba de realizar ventas de libros y enciclopedias en colegios, entregar y cobrar el material mensualmente.
                            </p>
                            <Divider className={classes.dividerCorto} />
                        </Grid>
                        <Grid sm={4} xs={12}>
                            <p>2016 - 2019</p>
                        </Grid>
                        <Grid sm={8} xs={12}>
                            <h2 className="fs-2">Emprendimiento Personal: Blancos Line</h2>
                            <p className={`fs-1`}>
                                Me encargaba de las compras, realizar las ventas en la vía pública, entregar los productos y cobrar mensualmente.
                            </p>
                            {/* <Divider className={classes.dividerCorto}/> */}
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                    <Typography variant="h4" color="initial" className={classes.marginTop}>Otros Conocimientos</Typography>
                    <Grid container direction="row" alignItems="center" >
                        <Grid sm={12} xs={12} className={classes.p}>
                            <p><u><b>Idioma Inglés.</b></u> Nivel: Intermedio-Avanzado</p>
                            <p><u><b>Paquete Office.</b></u> Nivel: Avanzado. Word, Excel, PowerPoint</p>
                            <p><u><b>Capacitación en Oratoria:</b></u> Realizado en el centro de formación profesional n°415.</p>
                            <p><u><b>Certificación MercadoPago:</b></u> Certificación sobre cobros con Checkout Pro.</p>
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                </Grid>
            </Grid>
        </Paper>
    )
}
