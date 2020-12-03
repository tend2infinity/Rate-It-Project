import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    backgroundColor: "black",
    color: "white",
    margin: '2px 0',
    transition: ".2s ease-in-out",
    '&:hover':{
		transform: "scale(1.05)",
	},
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  text:
  {
	  fontSize: 25,
	  fontFamily: 'Carter One',
	  textAlign: 'center',
	  wordWrap: "break-word",
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  details:
  {
	  backgroundColor: "#0c0d0c",
	  width: "100vw",
	  minHeight: "50vh",
	  display: "flex",
	  color: "white",
	  flexWrap: "wrap",
      justifyContent: "space-around",
      flexDirection: "row",
      padding: "1%",
  },
  write:
  {
	  fontSize: 20,
	  display: "flex",
	  width: "50%",
	  justifyContent: "center",
	  flexDirection: "column",
  },
  title:
  {
	  fontSize: "8vh",
	  textAlign: "center",
	  fontFamily: 'Montserrat Subrayada',
  },
  trailer:
  {
	  display: "flex",
	  width: "50%",
	  justifyContent: "center",
  },
  
}));

export default function MovieCard(props) {
  const classes = useStyles();
  const [nominated, setNominated] = React.useState(false);
  
  
  // yahan backend se we will bring if true ya false! abhi k liye um doing it false
  
  const [expanded, setExpanded] = React.useState(false);
  const [trailer, setTrailer] = React.useState(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const handleExpandTrailer = () => {
	  movieTrailer( props.Title )
        .then( response =>
        {
			response = response.replace("watch?v=", "embed/")
			setTrailer(response);
		}
        )
  };
  
  //this is for the expand card
  
  const path1 = "https://image.tmdb.org/t/p/original";
  const path2 = String(props.Poster);
  var path3 = null;
  path3 = path1.concat(path2);

  const handleNominateClick = () => {
    setNominated(!nominated);
  };

  return (
  <>
    <Card className={classes.root}
    onClick={handleExpandTrailer}>
      <CardMedia
        className={classes.media}
        image={path3}
        title={props.Title}
        onClick={handleExpandClick}
      />
      <CardContent>
        <Typography component="p" className={classes.text}>
          {props.Title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleNominateClick}>
        {
			nominated
			?
			<StarIcon style={{fontSize:"large"}} style={{color:"gold"  , fontSize: 30}} />
			:
			<StarBorderOutlinedIcon style={{color:"white"  , fontSize: 30}} />
			}
          
          
        </IconButton>
        <IconButton aria-label="Share It">
          <ShareIcon style={{color:"white" , fontSize: 30 }} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon style={{color:"white" , fontSize: 30 }} onClick={handleExpandTrailer} />
        </IconButton>
      </CardActions>
      </Card>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.details}>
        <div className={classes.write}>
          <h2 className={classes.title}>{props.Title}</h2>
          <br></br>
          <br></br>
          <b>Release Date:</b>{props.date}<br></br><br></br>
          <b>Overview:</b> 
          {props.Overview}
          </div>
          <div className={classes.trailer}>
        <iframe src={trailer} width="90%" height="100%"/>
        </div>
        </CardContent>
      </Collapse>
      </>
      
  );
}
