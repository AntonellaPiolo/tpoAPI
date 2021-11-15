import React from "react";
import {Redirect} from "react-router-dom";
import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

//importo llamada a endpoint
import {login} from "assets/jss/material-kit-react/controller/miApp.controller";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/cover1.jpg";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const history = useHistory();
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [email,setEmail]=React.useState('');
  const[password,setPassword]=React.useState('');
  const[usuarioValido,setUsuarioValido]=React.useState(false);
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  const handleEmail=(event)=>{
    setEmail(event.target.value);
}
  const handlePassword=(event)=>{    
    setPassword(event.target.value);
}
  //Ejecuto el endopoint para validar login
  const validarLogin= async function()
  {
      let datos = {
        email: email,
        password:password
      }
      console.log(datos);
      let getLogin = await login(datos);
      console.log("responseLogin", getLogin);
      //JSON.parse(localStorage.getItem('nombre'));
      console.log(localStorage.getItem('nombre'));
      if (localStorage.getItem('nombre') !== undefined)
      {
        setUsuarioValido(true);
        history.push({
          pathname: '/profile-page',
        })
      }
      else
      {
        alert("usuario no válido")
      }
      
  }
  
  //Valido campos y llamo endpoint
  const loginUser=()=>
  {
    if (email!=="" && password!=="")
    {
      validarLogin();
    }
    else
    {
      alert("Debe completar usuario y password");
    }
    
    
  }  
  const redirect= ()=>{
    if (usuarioValido) {

      return <Redirect to='/loginPage' />
    }
    

  } 

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand={"A&A"}
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
       {redirect()}  

        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="info" className={classes.cardHeader}>
                    <h4>Ingreso</h4>
                  </CardHeader>
                  <Button
                    color="success"
                    size="lg"
                    href={"/signup-page"}
                    simple
                  >
                    O registre su cuenta aquí
                  </Button>
                  <CardBody>
                    <CustomInput
                      labelText="Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "email",
                        onChange: (event) => handleEmail(event),
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Contraseña"
                      id="pass"
                      value=""
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        onChange: (event) => handlePassword(event),
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <Button color="warning" size="md" simple>
                    Olvidé mi contraseña
                  </Button>
                  <CardFooter className={classes.cardFooter}>
                    <Button 
                      color="success" 
                      size="lg" 
                      onClick={loginUser}>
                      INGRESAR
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
