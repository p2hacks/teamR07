import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Harisutosu from '../../../images/教会画像/リラノート.jpg';
import '../../../styles/elements/CardMira.css';
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const Card_C = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
       <a href= "https://lilanote-church.com/?utm_source=google&utm_medium=cpc&utm_campaign=brandname&gclid=CjwKCAiAis3vBRBdEiwAHXB29PhiQnX1Jqo5nMjrZ8-_DdSZHjyHWdBy-Kag-3z_OqkOZdSxxSVRMRoCap0QAvD_BwE">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {Harisutosu}
          title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
リラノート
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            結婚式などに使われる場所です。あなたには縁がない場所ですね
            </Typography>
          </CardContent>
        </CardActionArea>
        </a>
        <CardActions>
          <Button size="small" color="primary">
            詳細情報
          </Button>
          <a href="https://goo.gl/maps/1dmUSCadrPknP4TJ9">
          <Button size="small" color="primary">
            ここへ行く
          </Button>
          </a>
        </CardActions>
      </Card>
    );
  }
  export default Card_C;