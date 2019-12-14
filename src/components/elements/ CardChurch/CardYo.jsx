import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Harisutosu from '../../../images/教会画像/ヨハネ.jpg';
import '../../../styles/elements/CardYo.css';
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
       <a href= "https://www.hakobura.jp/db/db-view/2011/04/post-75.html" target="_blank">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {Harisutosu}
          title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
函館聖ヨハネ教会
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
           上から見ると屋根が十字架になっている。下から見ては屋根はうまく見れません。
            </Typography>
          </CardContent>
        </CardActionArea>
        </a>
        <CardActions>
          <Button size="small" color="primary">
            詳細情報
          </Button>
          <Button size="small" color="primary">
            ここへ行く
          </Button>
        </CardActions>
      </Card>
    );
  }
  export default Card_C;