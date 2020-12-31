import React from 'react'
import { Grid, Avatar, makeStyles, Container, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next';

//IMAGENES
import fullstack from '../images/fullstack.jpg';
import fullstackCielo from '../images/fullstackcielo.png';
import linkedin from '../images/github.png';
import github from '../images/linkedin.png';

const useStyles = makeStyles((theme) => ({
    socialLinks: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'spaceBetween',
        width: '100%',
        margin: 'auto'
    },
    large: {
        width: theme.spacing(155),
        height: theme.spacing(40),
    },
    resumeRightCol: {
        // backgroundImage: 'url(./images/fullstack.jpg)',
        // backgroundImage: 'url("../../images/fullstack.jpg")',
        backgroundImage: 'url('+fullstack+')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: theme.spacing(82),

        color: 'black',
        padding: '1em',
        marginBottom: '20px',
        borderRadius: '30px',

        [theme.breakpoints.down('sm')]: {
            backgroundImage: 'url('+fullstackCielo+')',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height: theme.spacing(65),
        },
    },
    icono1: {
        marginTop: theme.spacing(3),
        width: theme.spacing(18),
        height: theme.spacing(18),
    },
    centrado: {
        textAlign: 'center',
    },
    job: {
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: "3.6em"
        },
    }
}));

export const Home = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Container className="animate__animated animate__fadeIn">
            <Grid container justify="center" className={classes.resumeRightCol}>
                <Grid container item xs={12} justify="center">
                    <Typography variant="h2" className={classes.job}>
                        <b>{t('job')}</b>
                    </Typography>
                </Grid>
                <Grid container item xs={12} justify="center" alignItems="flex-end">
                    <Typography variant="h5" className={classes.centrado}>
                        <b>HTML/CSS | Bootstrap | Material-ui | JavaScript | React | NodeJS | Express | MongoDB | Azure | Docker</b>
                    </Typography>
                </Grid>
            </Grid>

            <Grid container item className={classes.socialLinks} justify="space-evenly" >
                <a href="https://www.linkedin.com/in/fercampos/" rel="noopener noreferrer" target="_blank">
                    <Avatar
                        alt="LinkedIn Icono"
                        src={linkedin}
                        className={classes.icono1}
                        variant="rounded"
                    />
                    <Typography variant="h6">/FerCampos</Typography>
                </a>

                <a href="https://github.com/fercampos95" rel="noopener noreferrer" target="_blank">
                    <Avatar
                        alt="Github Icono"
                        src={github}
                        className={classes.icono1}
                        variant="rounded"
                    />
                    <Typography variant="h6">/FerCampos95</Typography>
                </a>
            </Grid>

            {/* <Grid container item className={classes.socialLinks} justify="space-evenly" >
                <a href="https://www.linkedin.com/in/fercampos/" rel="noopener noreferrer" target="_blank">
                    <Avatar
                        alt="LinkedIn Icono"
                        src={window.location.origin + "/images/linkedin.png"}
                        className={classes.icono}
                        variant="rounded"
                    />
                    <Typography variant="h6">/FerCampos</Typography>
                </a>

                <a href="https://github.com/fercampos95" rel="noopener noreferrer" target="_blank">
                    <Avatar
                        alt="Github Icono"
                        src={window.location.origin + "/images/github.png"}
                        className={classes.icono}
                        variant="rounded"
                    />
                    <Typography variant="h6">/FerCampos95</Typography>
                </a>
            </Grid> */}

        </Container>
    )
}