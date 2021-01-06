import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

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
  remove:
  {
	  color: "black",
	  backgroundColor: "RGB(255,99,71, 0.7)",
	  fontSize: 20,
	  border: "2px solid black",
	  fontWeight: "bold",
	  borderRadius: 20,
	  padding: 5,
  },
  nominate:
  {
	  color: "black",
	  fontSize: 20,
	  backgroundColor: "RGB(68, 200, 182, 0.7)",
	  border: "2px solid black",
	  fontWeight: "bold",
	  borderRadius: 20,
	  padding: 5,
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
  
  
  // yahan backend se we will bring if true ya false! abhi k liye um doing it false
  
  
  //this is for the expand card
  
  const path1 = "https://image.tmdb.org/t/p/original";
  const path2 = String(props.Poster);
  var path3 = null;
  path3 = path1.concat(path2);

  return (
  <>
    <Card className={classes.root1}>
      <CardMedia
        className={classes.media}
        image={path3}
        title={props.Title}
      />
      </Card>
      </>
      
  );
}
