import {
  makeStyles,
  Container,
  Avatar,
  Typography,
  ImageListItem,
  ImageList,
  Link,
  Divider,
} from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

const useStyles = makeStyles((theme) => ({
  container: { paddingTop: theme.spacing(10), position: "sticky", top: 0 },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  },
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={6} style={{ marginBottom: 20 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com//static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://material-ui.com//static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://material-ui.com//static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://material-ui.com//static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com//static/images/avatar/5.jpg"
        />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList rowHeight={100} cols={2} style={{ marginBottom: 20 }}>
        <ImageListItem>
          <img
            src={
              "https://material-ui.com/static/images/image-list/breakfast.jpg"
            }
            alt={""}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={"https://material-ui.com/static/images/image-list/burgers.jpg"}
            alt={""}
          />
        </ImageListItem>{" "}
        <ImageListItem>
          <img
            src={"https://material-ui.com/static/images/image-list/camera.jpg"}
            alt={""}
          />
        </ImageListItem>{" "}
        <ImageListItem>
          <img
            src={"https://material-ui.com/static/images/image-list/morning.jpg"}
            alt={""}
          />
        </ImageListItem>{" "}
        <ImageListItem>
          <img
            src={"https://material-ui.com/static/images/image-list/hats.jpg"}
            alt={""}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={"https://material-ui.com/static/images/image-list/honey.jpg"}
            alt={""}
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom>
        Categories
      </Typography>
      <Link href={"#"} className={classes.link} variant={"body2"}>
        Sport
      </Link>
      <Link href={"#"} className={classes.link} variant={"body2"}>
        Food
      </Link>
      <Divider flexItem style={{ marginBottom: 5 }} />
      <Link href={"#"} className={classes.link} variant={"body2"}>
        Music
      </Link>
      <Link href={"#"} className={classes.link} variant={"body2"}>
        Movies
      </Link>
      <Divider flexItem style={{ marginBottom: 5 }} />
      <Link href={"#"} className={classes.link} variant={"body2"}>
        Science
      </Link>
      <Link href={"#"} className={classes.link} variant={"body2"}>
        Life
      </Link>
    </Container>
  );
};

export default Rightbar;
