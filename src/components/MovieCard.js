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
import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

var useStyles = makeStyles((theme) => ({
  root: {
    border: '2px solid white',
    backgroundColor: "transparent",
    color: "white",
    marginRight: "8%",
    marginLeft: "8%",
    padding: "2%",
  },
  root1: {
    backgroundColor: "transparent",
    color: "white",
    marginRight: "8%",
    marginLeft: "8%",
    padding: "2%",
  },
  media: {
    height: 0,
    paddingTop: '177.7%', // 16:9
    transition: ".2s ease-in-out",
    boxShadow: "0px 0px 14px 7px rgba(0,0,0,0.89)",
    '&:hover':{
		transform: "scale(1.1)",
		cursor: "pointer",
	},
  },
  text:
  {
	  fontSize: 25,
	  fontFamily: 'Carter One',
	  textAlign: 'center',
	  whiteSpace: 'nowrap',
      overflow: 'hidden',
	  textOverflow:'ellipsis' ,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.short,
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
      padding: "2%",
      margin: "1%",
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
    <Card className={classes.root1}>
    <CardActions disableSpacing style={{position:"absolute" , zIndex:2}}>
        <IconButton onClick={handleNominateClick}>
        {
			nominated
			?
			<StarIcon style={{fontSize:"large"}} style={{color:"gold"  , fontSize: 30}} />
			:
			<StarBorderOutlinedIcon style={{color:"white"  , fontSize: 30}} />
			}
          
          
        </IconButton>
      </CardActions>
      <CardMedia
        className={classes.media}
        image={path3}
        title={props.Title}
      />
      <CardContent>
        <Typography component="p" className={classes.text}>
          {props.Title}
        </Typography>
      </CardContent>
      </Card>
      </>
      
  );
}
