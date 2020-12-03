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

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 340,
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
  },
  
}));

export default function MovieCard(props) {
  const classes = useStyles();
  const [nominated, setNominated] = React.useState(false);
  
  // yahan backend se we will bring if true ya false! abhi k liye um doing it false
  
  const path1 = "https://image.tmdb.org/t/p/original";
  const path2 = String(props.Poster);
  var path3 = null;
  path3 = path1.concat(path2);

  const handleNominateClick = () => {
    setNominated(!nominated);
  };

  return (
    <Card className={classes.root}>
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
      </CardActions>
    </Card>
  );
}
