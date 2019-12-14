import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Harisutosu from '../../../images/教会画像/パーフェクトリバティ.png';
import '../../../styles/elements/CardPa.css';
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
      <a href= "https://ja.wikipedia.org/wiki/%E3%83%91%E3%83%BC%E3%83%95%E3%82%A7%E3%82%AF%E3%83%88_%E3%83%AA%E3%83%90%E3%83%86%E3%82%A3%E3%83%BC%E6%95%99%E5%9B%A3">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {Harisutosu}
          title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
パーフェクトリバティー教団
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            大正時代に立教された宗教団体。
            </Typography>
          </CardContent>
        </CardActionArea>
        </a>
        <CardActions>
          <Button size="small" color="primary">
            詳細情報
          </Button>
          <a href="https://goo.gl/maps/XDPDbnAi7UsRuoa46">
          <Button size="small" color="primary">
            ここへ行く
          </Button>
          </a>
        </CardActions>
      </Card>
    );
  }
  export default Card_C;