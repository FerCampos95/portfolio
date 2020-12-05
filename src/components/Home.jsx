import React from 'react'
import { Grid,Avatar,makeStyles, Container,Divider,Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    socialLinks: {
        display: 'flex',
        justifyContent: 'spaceBetween',
        width: '80%',
        margin: 'auto'
      },
      large: {
        width: theme.spacing(155),
        height: theme.spacing(40),
      },
    resumeRightCol : {
        backgroundImage: 'url(./images/fullstack.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: theme.spacing(82),
        
        color: 'black',
        padding: '1em',
        marginBottom: '20px',
        borderRadius: '30px'
    },
    icono: {
        marginTop: theme.spacing(3),
        width: theme.spacing(20),
        height: theme.spacing(20),
    }

  }));

export const Home = () => {
    const classes = useStyles();
    return (
        <Container className="animate__animated animate__fadeIn">
            <Grid container justify="center" className={classes.resumeRightCol}>
                <Grid container item xs={12}  justify="center">
                    <Typography variant="h2">
                        <b>Desarrollador Full Stack</b>
                    </Typography>
                </Grid>
                <Grid container item xs={12} justify="center" alignItems="flex-end">
                    <Typography variant="h5">
                        <b>HTML/CSS | Bootstrap | Material-ui | JavaScript | React | NodeJS | Express | MongoDB | Azure | Docker</b>
                    </Typography>
                </Grid>
            </Grid>

            <Grid container item className={classes.socialLinks} justify="space-evenly" >
                    <a href="https://www.linkedin.com/in/fercampos/" rel="noopener noreferrer" target="_blank">
                        <Avatar 
                            alt="LinkedIn Icono" 
                            src="./images/linkedin.png" 
                            className={classes.icono}
                            variant="rounded"
                        />
                        <Typography variant="h6">/FerCampos</Typography>
                    </a>

                    <a href="https://github.com/fercampos95" rel="noopener noreferrer" target="_blank">
                        <Avatar 
                            alt="Github Icono" 
                            src="./images/github.png" 
                            className={classes.icono}
                            variant="rounded"
                        />
                        <Typography variant="h6">/FerCampos95</Typography>
                    </a>
                </Grid>
            {/* <CardTecnologias></CardTecnologias> */}

        </Container>
    )
}
