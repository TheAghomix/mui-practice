import {
  makeStyles,
  Fab,
  Tooltip,
  Modal,
  Container,
  TextField,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Button,
  Snackbar,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import MuiAlert from "@material-ui/lab/Alert";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 500,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));

const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant={"filled"} {...props} />;
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  return (
    <>
      <Tooltip title={"Add"} aria-label={"add"} onClick={() => setOpen(true)}>
        <Fab color={"primary"} className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete={"off"}>
            <div className={classes.item}>
              <TextField
                id={"standard-basic"}
                label={"Title"}
                size={"small"}
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id={"outlined-multiline-static"}
                multiline
                rows={4}
                variant={"outlined"}
                defaultValue={"Tell your story"}
                label={"Description"}
                size={"small"}
                style={{ width: "100%" }}
              />
            </div>
            <div className="item">
              <TextField select label={"Visibility"} value={"Public"}>
                <MenuItem value={"Public"}>Public</MenuItem>
                <MenuItem value={"Private"}>Private</MenuItem>
                <MenuItem value={"Unlisted"}>Unlisted</MenuItem>
              </TextField>
            </div>
            <div>
              <FormLabel component={"legend"}>Who can comment?</FormLabel>
              <RadioGroup
                aria-label={"gender"}
                name={"gender1"}
                value={""}
                onChange={() => {}}
              >
                <FormControlLabel
                  value={"Everybody"}
                  control={<Radio size={"small"} />}
                  label={"Everybody"}
                />
                <FormControlLabel
                  value={"My Friends"}
                  control={<Radio size={"small"} />}
                  label={"My Friends"}
                />
                <FormControlLabel
                  value={"Nobody"}
                  control={<Radio size={"small"} />}
                  label={"Nobody  "}
                />
                <FormControlLabel
                  value={"Custom"}
                  disabled
                  control={<Radio size={"small"} />}
                  label={"Custom (Premium)"}
                />
              </RadioGroup>
            </div>
            <div className="item">
              <Button
                variant={"outlined"}
                color={"primary"}
                style={{ marginRight: 20 }}
                onClick={() => setOpenAlert(true)}
              >
                Create
              </Button>

              <Button
                variant={"outlined"}
                color={"secondary"}
                onClick={() => setOpen(false)}
              >
                Create
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity={"success"}>
          This is a sucess warning
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
