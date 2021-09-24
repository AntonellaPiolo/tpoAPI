import React from "react";
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// @material-ui/icons
import LockIcon from "@material-ui/icons/Lock";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import AddCircleIcon from "@material-ui/icons/AddCircle";
// core components
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import Divider from "@material-ui/core/Divider";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function createData(date, weight, height, head) {
  return {
    date,
    weight,
    height,
    head,
  };
}

function createData1(
  edad,
  bcg,
  hepatitisb,
  pentavalente,
  rotavirus,
  cuadruple,
  salk,
  neumococo,
  gripe,
  meningococo,
  triplev,
  hepatitisa,
  varicela,
  triplecelular,
  tripleacelular,
  hpv,
  doblebac,
  doblev
) {
  return {
    edad,
    bcg,
    hepatitisb,
    pentavalente,
    rotavirus,
    cuadruple,
    salk,
    neumococo,
    gripe,
    meningococo,
    triplev,
    hepatitisa,
    varicela,
    triplecelular,
    tripleacelular,
    hpv,
    doblebac,
    doblev,
  };
}

const rows1 = [
  // eslint-disable-next-line prettier/prettier
  createData1(<b>0-1 meses</b>,<Button color="success" size="sm" default>Aplicada</Button>,<Button color="success" size="sm" default>Aplicada</Button>,"-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"),
  // eslint-disable-next-line prettier/prettier
  createData1(<b>2 meses</b>,"-","-",<Button color="success" size="sm" default>Aplicada</Button>,<Button color="success" size="sm" default>Aplicada</Button>,"-",<Button color="success" size="sm" default>Aplicada</Button>,<Button color="success" size="sm" default>Aplicada</Button>,"-","-","-","-","-","-","-","-","-","-"),
  // eslint-disable-next-line prettier/prettier
  createData1(<b>3 meses</b>,"-","-","-","-","-","-","-","-",<Button color="success" size="sm" default>Aplicada</Button>,"-","-","-","-","-","-","-","-"),
  // eslint-disable-next-line prettier/prettier
  createData1(<b>4 meses</b>, "-", "-", <Button color="danger" size="sm" default>No aplicada</Button>,<Button color="danger" size="sm" default>No aplicada</Button>,"-",<Button color="danger" size="sm" default>No aplicada</Button>,<Button color="danger" size="sm" default>No aplicada</Button>,"-","-","-","-","-","-","-","-","-","-"),
  // eslint-disable-next-line prettier/prettier
  createData1(<b>5 meses</b>,"-","-","-","-","-","-","-","-",<Button color="danger" size="sm" default>No aplicada</Button>,"-","-","-","-","-","-","-","-"),
  // eslint-disable-next-line prettier/prettier
  createData1(<b>6 meses</b>, "-", "-", <Button color="danger" size="sm" default>No aplicada</Button>,"-", "-", <Button color="danger" size="sm" default>No aplicada</Button>, "-", <Button color="danger" size="sm" default>No aplicada</Button>,"-","-","-","-","-","-","-","-","-"),
  // eslint-disable-next-line prettier/prettier
  createData1(<b>12 meses</b>, "-", "-", "-", "-", "-", "-", <Button color="danger" size="sm" default>No aplicada</Button>, <Button color="danger" size="sm" default>No aplicada</Button>, "-", <Button color="danger" size="sm" default>No aplicada</Button>, <Button color="danger" size="sm" default>No aplicada</Button>, "-", "-", "-", "-", "-", "-"),
  // eslint-disable-next-line prettier/prettier
  createData1(<b>15 meses</b>, "-", "-", "-", "-", "-", "-", "-", <Button color="danger" size="sm" default>No aplicada</Button>, <Button color="danger" size="sm" default>No aplicada</Button>, "-", "-", <Button color="danger" size="sm" default>No aplicada</Button>, "-", "-", "-", "-", "-"),
  // eslint-disable-next-line prettier/prettier
  createData1(<b>15-18 meses</b>, "-", "-", "-", "-", <Button color="danger" size="sm" default>No aplicada</Button>, "-", "-", <Button color="danger" size="sm" default>No aplicada</Button>, "-", "-", "-", "-", "-", "-", "-", "-", "-"),
  // eslint-disable-next-line prettier/prettier
  createData1(<b>24 meses</b>, "-", "-", "-", "-", "-", "-", "-", <Button color="danger" size="sm" default>No aplicada</Button>, "-", "-", "-", "-", "-", "-", "-", "-", "-"),
  // eslint-disable-next-line prettier/prettier
  createData1(<b>5-6 años</b>, "-", "-", "-", "-", "-", <Button color="danger" size="sm" default>No aplicada</Button>, "-", "-", "-", <Button color="danger" size="sm" default>No aplicada</Button>, "-", "-", <Button color="danger" size="sm" default>No aplicada</Button>, "-", "-", "-", "-"),
  // eslint-disable-next-line prettier/prettier
  createData1(<b>11 años</b>, "-", <Button color="danger" size="sm" default>No aplicada</Button>, "-", "-", "-", "-", "-", "-", <Button color="danger" size="sm" default>No aplicada</Button>, <Button color="danger" size="sm" default>No aplicada</Button>, "-", "-", "-", <Button color="danger" size="sm" default>No aplicada</Button>, <Button color="danger" size="sm" default>No aplicada</Button>, "-", "-"),
  // eslint-disable-next-line prettier/prettier
  createData1(<b>Adultos</b>, "-", <Button color="danger" size="sm" default>No aplicada</Button>, "-", "-", "-", "-", "-", "-", "-", <Button color="danger" size="sm" default>No aplicada</Button>, "-", "-", "-", "-", "-", <Button color="danger" size="sm" default>No aplicada</Button>, <Button color="danger" size="sm" default>No aplicada</Button>),
];

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {row.date}
        </TableCell>
        <TableCell align="center">{row.weight}</TableCell>
        <TableCell align="center">{row.height}</TableCell>
        <TableCell align="center">{row.head}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 0 }}>
              <Button color="info" simple>
                Más detalles
              </Button>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Observaciones"
                    secondary="Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Suspendisse malesuada lacus
                                  malesuada lacus ex, sit amet blandit leo
                                  lobortis eget. Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit. Suspendisse
                                  malesuada lacus ex, sit amet blandit leo
                                  lobortis eget."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Medicamento(s)"
                    secondary="Ibuprofeno líquido"
                  />
                  <ListItemText primary="Dosis" secondary="5 ml" />
                  <ListItemText primary="Período" secondary="12 horas" />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Estudios a realizar"
                    secondary="Ecografía de cadera"
                  />
                  <ListItemText
                    primary="Resultados"
                    secondary="Normal, se desarrolla bien."
                  />
                </ListItem>
              </List>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    date: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    head: PropTypes.number.isRequired,
  }).isRequired,
};

function createData11(date, vaccine, place) {
  return { date, vaccine, place };
}

const rows11 = [
  createData11("12/09/2020", "BCG", "Fundación Dr. Socolinsky"),
  createData11("14/09/2020", "Hepatitis B", "Fundación Dr. Socolinsky"),
  createData11("13/11/2020", "Pentavalente", "Fundación Dr. Socolinsky"),
  createData11("13/11/2020", "Rotavirus", "Fundación Dr. Socolinsky"),
  createData11(
    "15/11/2020",
    "Salk (Poliomielitis)",
    "Fundación Dr. Socolinsky"
  ),
];

export default function ProfilePage(props) {
  const [classicModal1, setClassicModal1] = React.useState(false);
  const [classicModal2, setClassicModal2] = React.useState(false);
  const [classicModal3, setClassicModal3] = React.useState(false);
  const classes = useStyles();
  const { ...rest } = props;
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const defaultProps = {
    options: bloodType,
    // eslint-disable-next-line no-dupe-keys
    options: vaccine,
    getOptionLabel: (option) => option.type,
  };

  return (
    <div>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={
          <>
            <Button
              color="transparent"
              simple
              onClick={() => setClassicModal1(true)}
            >
              <LibraryBooks className={classes.icon} />
              Mis datos
            </Button>
            <Dialog
              classes={{
                root: classes.center,
                paper: classes.modal,
              }}
              open={classicModal1}
              TransitionComponent={Transition}
              keepMounted
              onClose={() => setClassicModal1(false)}
              aria-labelledby="classic-modal-slide-type"
              aria-describedby="classic-modal-slide-description"
            >
              <DialogContent
                id="classic-modal-slide-description1"
                className={classes.modalBody}
              >
                <Card>
                  <CardHeader color="info">
                    <h4 className={classes.cardtypeWhite}>Editar perfil</h4>
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                        <TextField
                          id="first"
                          label="Nombre(s)"
                          defaultValue="Vanessa"
                          margin="dense"
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <TextField
                          id="last"
                          label="Apellido(s)"
                          defaultValue="Hastings"
                          margin="dense"
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                        <TextField
                          id="email"
                          label="Email"
                          defaultValue="vhastings@gmail.com"
                          margin="dense"
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                        <TextField
                          id="dni"
                          label="DNI"
                          defaultValue="32.735.074"
                          margin="dense"
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <TextField
                          id="phone"
                          label="Teléfono"
                          defaultValue="1164369189"
                          margin="dense"
                        />
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter>
                    <Button color="default">Guardar cambios</Button>
                  </CardFooter>
                </Card>
              </DialogContent>
              <DialogActions className={classes.modalFooter}>
                <Button
                  onClick={() => setClassicModal1(false)}
                  color="danger"
                  simple
                >
                  Cerrar
                </Button>
              </DialogActions>
            </Dialog>
            <Button color="transparent" className={classes.navLink}>
              <LockIcon className={classes.icons} /> Cerrar sesión
            </Button>
          </>
        }
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/img/profile-banner.jpg").default}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="info"
                  tabs={[
                    {
                      tabButton: "Emma Hastings",
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem>
                            <Accordion
                              expanded={expanded === "panel1"}
                              onChange={handleChange("panel1")}
                            >
                              <AccordionSummary
                                aria-controls="panel1d-content"
                                id="panel1d-header"
                              >
                                <Typography>Datos personales</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Card>
                                  <CardHeader color="success">
                                    <h4 className={classes.cardtypeWhite}>
                                      Información
                                    </h4>
                                  </CardHeader>
                                  <CardBody>
                                    <GridContainer>
                                      <GridItem xs={12} sm={12} md={4}>
                                        <TextField
                                          id="date"
                                          label="Fecha de nacimiento"
                                          defaultValue="11/09/2020"
                                          variant="standard"
                                          fullWidth="True"
                                        />
                                      </GridItem>
                                      <GridItem xs={12} sm={12} md={3}>
                                        <Autocomplete
                                          {...defaultProps}
                                          id="blood-type"
                                          disableClearable
                                          defaultValue={bloodType[1]}
                                          renderInput={(params) => (
                                            <TextField
                                              {...params}
                                              label="Grupo Sanguíneo"
                                              variant="standard"
                                            />
                                          )}
                                        />
                                      </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                      <GridItem xs={12} sm={12} md={12}>
                                        <TextField
                                          id="allergies"
                                          label="Alergias"
                                          variant="standard"
                                          fullWidth="True"
                                        />
                                      </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                      <GridItem xs={12} sm={12} md={12}>
                                        <TextField
                                          id="diseases"
                                          label="Enfermedades crónicas y/o patologías"
                                          variant="standard"
                                          fullWidth="True"
                                        />
                                      </GridItem>
                                    </GridContainer>
                                  </CardBody>
                                  <CardFooter>
                                    <Button color="default">
                                      Guardar cambios
                                    </Button>
                                  </CardFooter>
                                </Card>
                              </AccordionDetails>
                            </Accordion>
                            <Accordion
                              expanded={expanded === "panel2"}
                              onChange={handleChange("panel2")}
                            >
                              <AccordionSummary
                                aria-controls="panel2d-content"
                                id="panel2d-header"
                              >
                                <Typography>Control pediátrico</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Card>
                                  <CardHeader color="success">
                                    <Button
                                      color="transparent"
                                      simple
                                      onClick={() => setClassicModal2(true)}
                                    >
                                      <AddCircleIcon
                                        className={classes.icons}
                                      />
                                      Registrar nuevo control
                                    </Button>
                                    <Dialog
                                      classes={{
                                        root: classes.center,
                                        paper: classes.modal,
                                      }}
                                      open={classicModal2}
                                      TransitionComponent={Transition}
                                      keepMounted
                                      onClose={() => setClassicModal2(false)}
                                      aria-labelledby="classic-modal-slide-type"
                                      aria-describedby="classic-modal-slide-description"
                                    >
                                      <DialogContent
                                        id="classic-modal-slide-description"
                                        className={classes.modalBody}
                                      >
                                        <Card>
                                          <CardHeader color="info">
                                            <h4
                                              className={classes.cardtypeWhite}
                                            >
                                              Nuevo control pediátrico
                                            </h4>
                                          </CardHeader>
                                          <CardBody>
                                            <GridContainer>
                                              <GridItem xs={12} sm={12} md={4}>
                                                <TextField
                                                  id="date"
                                                  label="Fecha"
                                                  margin="dense"
                                                />
                                              </GridItem>
                                            </GridContainer>
                                            <GridContainer>
                                              <GridItem xs={12} sm={12} md={4}>
                                                <TextField
                                                  id="weight"
                                                  label="Peso (kg)"
                                                  fullWidth="True"
                                                  margin="dense"
                                                />
                                              </GridItem>
                                              <GridItem xs={12} sm={12} md={4}>
                                                <TextField
                                                  id="height"
                                                  label="Altura (cm)"
                                                  fullWidth="True"
                                                  margin="dense"
                                                />
                                              </GridItem>
                                              <GridItem xs={12} sm={12} md={4}>
                                                <TextField
                                                  id="head"
                                                  label="Circ. cefálica (cm)"
                                                  fullWidth="True"
                                                  margin="dense"
                                                />
                                              </GridItem>
                                            </GridContainer>
                                            <br></br>
                                            <Divider
                                              variant="middle"
                                              light="True"
                                            />
                                            <GridContainer>
                                              <GridItem xs={12} sm={12} md={12}>
                                                <TextField
                                                  id="text"
                                                  label="Observaciones"
                                                  margin="dense"
                                                  fullWidth="True"
                                                />
                                              </GridItem>
                                            </GridContainer>
                                            <GridContainer>
                                              <GridItem xs={12} sm={12} md={6}>
                                                <TextField
                                                  id="tests"
                                                  label="Estudios a realizar"
                                                  margin="dense"
                                                  fullWidth="True"
                                                />
                                              </GridItem>
                                              <GridItem xs={12} sm={12} md={6}>
                                                <TextField
                                                  id="results"
                                                  label="Resultados de estudios"
                                                  margin="dense"
                                                  fullWidth="True"
                                                />
                                              </GridItem>
                                            </GridContainer>
                                            <br></br>
                                            <Divider
                                              variant="middle"
                                              light="True"
                                            />
                                            <GridContainer>
                                              <GridItem xs={12} sm={12} md={4}>
                                                <TextField
                                                  id="pills"
                                                  label="Medicamento(s)"
                                                  margin="dense"
                                                  fullWidth="True"
                                                />
                                              </GridItem>
                                              <GridItem xs={12} sm={12} md={4}>
                                                <TextField
                                                  id="dose"
                                                  label="Dosis"
                                                  margin="dense"
                                                  fullWidth="True"
                                                />
                                              </GridItem>
                                              <GridItem xs={12} sm={12} md={4}>
                                                <TextField
                                                  id="period"
                                                  label="Período"
                                                  margin="dense"
                                                  fullWidth="True"
                                                />
                                              </GridItem>
                                            </GridContainer>
                                          </CardBody>
                                          <CardFooter>
                                            <Button color="default">
                                              Aceptar
                                            </Button>
                                          </CardFooter>
                                        </Card>
                                      </DialogContent>
                                      <DialogActions
                                        className={classes.modalFooter}
                                      >
                                        <Button
                                          onClick={() =>
                                            setClassicModal2(false)
                                          }
                                          color="danger"
                                          simple
                                        >
                                          Cerrar
                                        </Button>
                                      </DialogActions>
                                    </Dialog>
                                  </CardHeader>
                                  <CardBody>
                                    <TableContainer component={Paper}>
                                      <Table aria-label="collapsible table">
                                        <TableHead>
                                          <TableRow>
                                            <TableCell />
                                            <TableCell align="center">
                                              Fecha
                                            </TableCell>
                                            <TableCell align="center">
                                              Peso (kg)
                                            </TableCell>
                                            <TableCell align="center">
                                              Altura (cm)
                                            </TableCell>
                                            <TableCell align="center">
                                              Circunf. cefálica (cm)
                                            </TableCell>
                                          </TableRow>
                                        </TableHead>
                                        <TableBody>
                                          {rows.map((row) => (
                                            <Row key={row.name} row={row} />
                                          ))}
                                        </TableBody>
                                      </Table>
                                    </TableContainer>
                                  </CardBody>
                                </Card>
                              </AccordionDetails>
                            </Accordion>
                            <Accordion
                              expanded={expanded === "panel3"}
                              onChange={handleChange("panel3")}
                            >
                              <AccordionSummary
                                aria-controls="panel3d-content"
                                id="panel3d-header"
                              >
                                <Typography>Vacunación</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Card>
                                  <CardHeader color="success">
                                    <Button
                                      color="transparent"
                                      simple
                                      onClick={() => setClassicModal3(true)}
                                    >
                                      <AddCircleIcon
                                        className={classes.icons}
                                      />
                                      Registrar vacuna aplicada
                                    </Button>
                                    <Dialog
                                      classes={{
                                        root: classes.center,
                                        paper: classes.modal,
                                      }}
                                      open={classicModal3}
                                      TransitionComponent={Transition}
                                      keepMounted
                                      onClose={() => setClassicModal3(false)}
                                      aria-labelledby="classic-modal-slide-type"
                                      aria-describedby="classic-modal-slide-description"
                                    >
                                      <DialogContent
                                        id="classic-modal-slide-description"
                                        className={classes.modalBody}
                                      >
                                        <Card>
                                          <CardHeader color="info">
                                            <h4
                                              className={classes.cardtypeWhite}
                                            >
                                              Nueva aplicación
                                            </h4>
                                          </CardHeader>
                                          <CardBody>
                                            <GridContainer>
                                              <GridItem xs={12} sm={12} md={6}>
                                                <Autocomplete
                                                  {...defaultProps}
                                                  id="vaccine"
                                                  disableClearable
                                                  defaultValue={vaccine[1]}
                                                  renderInput={(params) => (
                                                    <TextField
                                                      {...params}
                                                      label="Vacuna"
                                                      variant="standard"
                                                    />
                                                  )}
                                                />
                                              </GridItem>
                                            </GridContainer>
                                            <GridContainer>
                                              <GridItem xs={12} sm={12} md={6}>
                                                <TextField
                                                  id="date"
                                                  label="fecha"
                                                  fullWidth="True"
                                                  margin="dense"
                                                />
                                              </GridItem>
                                              <GridItem xs={12} sm={12} md={6}>
                                                <TextField
                                                  id="place"
                                                  label="Lugar"
                                                  fullWidth="True"
                                                  margin="dense"
                                                />
                                              </GridItem>
                                            </GridContainer>
                                          </CardBody>
                                          <CardFooter>
                                            <Button color="default">
                                              Aceptar
                                            </Button>
                                          </CardFooter>
                                        </Card>
                                      </DialogContent>
                                      <DialogActions
                                        className={classes.modalFooter}
                                      >
                                        <Button
                                          onClick={() =>
                                            setClassicModal3(false)
                                          }
                                          color="danger"
                                          simple
                                        >
                                          Cerrar
                                        </Button>
                                      </DialogActions>
                                    </Dialog>
                                  </CardHeader>
                                  <CardBody>
                                    <TableContainer component={Paper}>
                                      <Table
                                        sx={{ minWidth: 650 }}
                                        aria-label="caption table"
                                      >
                                        <TableHead>
                                          <TableRow>
                                            <TableCell align="center">
                                              Edad/Vacuna
                                            </TableCell>
                                            <TableCell align="center">
                                              BCG
                                            </TableCell>
                                            <TableCell align="center">
                                              Hepatitis B
                                            </TableCell>
                                            <TableCell align="center">
                                              Pentavalente
                                            </TableCell>
                                            <TableCell align="center">
                                              Rotavirus
                                            </TableCell>
                                            <TableCell align="center">
                                              Cuádruple/ Pentavalente
                                            </TableCell>
                                            <TableCell align="center">
                                              Salk (Poliomielitis)
                                            </TableCell>
                                            <TableCell align="center">
                                              Neumococo Conjugada
                                            </TableCell>
                                            <TableCell align="center">
                                              Gripe
                                            </TableCell>
                                            <TableCell align="center">
                                              Meningococo (A/C/W/Y)
                                            </TableCell>
                                            <TableCell align="center">
                                              Triple viral
                                            </TableCell>
                                            <TableCell align="center">
                                              Hepatitis A
                                            </TableCell>
                                            <TableCell align="center">
                                              Varicela
                                            </TableCell>
                                            <TableCell align="center">
                                              Triple bacteriana celular
                                            </TableCell>
                                            <TableCell align="center">
                                              Triple bacteriana acelular
                                            </TableCell>
                                            <TableCell align="center">
                                              HPV
                                            </TableCell>
                                            <TableCell align="center">
                                              Doble bacteriana
                                            </TableCell>
                                            <TableCell align="center">
                                              Doble viral
                                            </TableCell>
                                          </TableRow>
                                        </TableHead>
                                        <TableBody>
                                          {rows1.map((row) => (
                                            <TableRow key={row.edad}>
                                              <TableCell
                                                component="th"
                                                scope="row"
                                              >
                                                {row.edad}
                                              </TableCell>
                                              <TableCell align="center">
                                                {row.bcg}
                                              </TableCell>
                                              <TableCell align="center">
                                                {row.hepatitisb}
                                              </TableCell>
                                              <TableCell align="center">
                                                {row.pentavalente}
                                              </TableCell>
                                              <TableCell align="center">
                                                {row.rotavirus}
                                              </TableCell>
                                              <TableCell align="center">
                                                {row.cuadruple}
                                              </TableCell>
                                              <TableCell align="center">
                                                {row.salk}
                                              </TableCell>
                                              <TableCell align="center">
                                                {row.neumococo}
                                              </TableCell>
                                              <TableCell align="center">
                                                {row.gripe}
                                              </TableCell>
                                              <TableCell align="center">
                                                {row.meningococo}
                                              </TableCell>
                                              <TableCell align="center">
                                                {row.triplev}
                                              </TableCell>
                                              <TableCell align="center">
                                                {row.hepatitisa}
                                              </TableCell>
                                              <TableCell align="center">
                                                {row.varicela}
                                              </TableCell>
                                              <TableCell align="center">
                                                {row.triplecelular}
                                              </TableCell>
                                              <TableCell align="center">
                                                {row.tripleacelular}
                                              </TableCell>
                                              <TableCell align="center">
                                                {row.hpv}
                                              </TableCell>
                                              <TableCell align="center">
                                                {row.doblebac}
                                              </TableCell>
                                              <TableCell align="center">
                                                {row.doblev}
                                              </TableCell>
                                            </TableRow>
                                          ))}
                                        </TableBody>
                                      </Table>
                                    </TableContainer>
                                    <TableContainer component={Paper}>
                                      <Table
                                        sx={{ minWidth: 650 }}
                                        size="small"
                                        aria-label="a dense table"
                                      >
                                        <TableHead>
                                          <TableRow>
                                            <TableCell>Fecha</TableCell>
                                            <TableCell align="right">
                                              Vacuna aplicada
                                            </TableCell>
                                            <TableCell align="right">
                                              Lugar
                                            </TableCell>
                                          </TableRow>
                                        </TableHead>
                                        <TableBody>
                                          {rows11.map((row) => (
                                            <TableRow
                                              key={row.vaccine}
                                              sx={{
                                                "&:last-child td, &:last-child th":
                                                  { border: 0 },
                                              }}
                                            >
                                              <TableCell
                                                component="th"
                                                scope="row"
                                              >
                                                {row.date}
                                              </TableCell>
                                              <TableCell align="right">
                                                {row.vaccine}
                                              </TableCell>
                                              <TableCell align="right">
                                                {row.place}
                                              </TableCell>
                                            </TableRow>
                                          ))}
                                        </TableBody>
                                      </Table>
                                    </TableContainer>
                                  </CardBody>
                                </Card>
                              </AccordionDetails>
                            </Accordion>
                            <Accordion
                              expanded={expanded === "panel4"}
                              onChange={handleChange("panel4")}
                            >
                              <AccordionSummary
                                aria-controls="panel4d-content"
                                id="panel4d-header"
                              >
                                <Typography>Consulta de percentiles</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Card>
                                  <CardHeader color="success">
                                    <h4 className={classes.cardtypeWhite}>
                                      Comparación con tabla de percentiles
                                    </h4>
                                  </CardHeader>
                                  <CardBody></CardBody>
                                </Card>
                              </AccordionDetails>
                            </Accordion>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Lucas Hastings",
                    },
                    {
                      tabButton: "+",
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const bloodType = [
  { type: "0-" },
  { type: "0+" },
  { type: "A-" },
  { type: "A+" },
  { type: "B-" },
  { type: "B+" },
  { type: "AB-" },
  { type: "AB+" },
];

const vaccine = [
  { type: "BCG" },
  { type: "Hepatitis B" },
  { type: "Pentavalente" },
  { type: "Rotavirus" },
  { type: "Cuádruple/ Pentavalente" },
  { type: "Salk (Poliomielitis)" },
  { type: "Neumococo Conjugada" },
  { type: "Gripe" },
  { type: "Meningococo A/C/W/Y" },
  { type: "Triple viral" },
  { type: "Hepatitis A" },
  { type: "Varicela" },
  { type: "Triple bacteriana celular" },
  { type: "Triple bacteriana acelular" },
  { type: "HPV" },
  { type: "Doble bacteriana" },
  { type: "Doble viral" },
];

const rows = [
  createData("21/06/2021", 7.5, 67.8, 41.9),
  createData("18/03/2021", 6.4, 61.7, 40.4),
  createData("23/01/2021", 5.8, 57.9, 38.6),
  createData("04/12/2020", 4.3, 54, 37),
  createData("15/10/2020", 3.6, 50.2, 35),
];
