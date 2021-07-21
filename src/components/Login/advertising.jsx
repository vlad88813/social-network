import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import parrot_JPG from '../../assets/img/photo_2021-07-21_17-46-23.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    maxHeight: 300
  },
  media: {
    height: 150,
  },
});


let buy_parrot = () => {
  setTimeout(() => {
     alert('To purchase, transfer 99$ to the card with number 4585220005950695. And we will send you a parrot by pigeon mail to your ip-address');
     }, 1000);
}

let buy_later_parrot = () => {
    setTimeout(() => {
       alert('it\'s time to buy a parrot!');
       }, 9000);
  }

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {parrot_JPG}
          title="parrot"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Selling a parrot!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Speaking, smart, knows programming
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick= {buy_parrot}>
        BUY
        </Button>
        <Button size="small" color="secondary" onClick={buy_later_parrot}>
        BUY LATER
        </Button>
      </CardActions>
    </Card>
  );
}

