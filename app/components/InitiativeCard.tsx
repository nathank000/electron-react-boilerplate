import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
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
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function InitiativeCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            PT
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Project Title"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="https://picsum.photos/300/200"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This is a short description of the project and a god potential place to put pertinent information that you would need to see at a glance
          More than likely, I would expect a description piece and then the key/value pairs that a person would need to look at quickly.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Full Notes:</Typography>
          <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ligula eu quam consequat aliquet a quis tortor. In quis eleifend orci. Mauris vel pharetra nisi, nec sodales tortor. Duis ultrices metus quis sapien elementum viverra. Integer ullamcorper libero eget dui semper feugiat. Etiam gravida molestie dui sit amet pretium. Sed et velit pharetra eros laoreet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography paragraph>
            Praesent sed lacus eu magna accumsan pulvinar. Mauris dignissim ligula id ornare egestas. Morbi non eros in dui blandit egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras varius elementum sem, at auctor augue tempor vitae. Donec volutpat, nunc non rhoncus euismod, sem justo rutrum arcu, ut mattis lectus sapien vel mauris. Aenean vitae orci nec nibh sagittis tempor in at enim. Suspendisse placerat id nunc ut lacinia. Vestibulum quam sem, elementum ut turpis nec, sollicitudin efficitur felis. Suspendisse porttitor a lectus at venenatis. Nullam congue ante in euismod finibus. Cras imperdiet neque felis, eget pharetra leo vulputate sit amet. Aenean efficitur vulputate turpis, in ultricies sem cursus a. Vivamus tincidunt sem lacinia felis semper pretium. Pellentesque faucibus aliquam nulla, viverra condimentum felis maximus vel. Praesent at purus laoreet, euismod sapien vel, feugiat lectus.
          </Typography>
          <Typography paragraph>
            Pellentesque faucibus interdum lectus, in tincidunt diam consequat varius. Sed sollicitudin molestie odio sed egestas. Ut condimentum risus non dui ullamcorper maximus. Integer porta congue est. Nam dolor urna, ultrices eget molestie vel, tincidunt ac lacus. Suspendisse faucibus, ante at tempor lobortis, eros dolor consequat ipsum, ut hendrerit magna purus at tortor. Curabitur vel pulvinar mi, non cursus nunc. Integer posuere elit ac massa porttitor feugiat. Pellentesque nulla mi, ultricies vitae luctus scelerisque, vestibulum volutpat dui. Cras rutrum ex eget gravida elementum.
          </Typography>
          <Typography paragraph>
            Praesent nec metus congue, rhoncus mauris eget, tempor neque. Quisque pellentesque ultricies odio a sollicitudin. Mauris tincidunt commodo felis non sollicitudin. Maecenas tempor, eros ut sodales faucibus, massa leo blandit tortor, ut consectetur magna arcu vitae massa. Nulla mattis elementum diam. Nunc semper congue nisl tempor ultricies. Nulla id lacus eros.
          </Typography>
          <Typography paragraph>
            Fusce at dui dapibus, molestie erat elementum, feugiat eros. Vivamus gravida elit sed ipsum porttitor, a tincidunt mi fermentum. Proin cursus est diam, eget laoreet tellus aliquam bibendum. Quisque laoreet eros eros. Suspendisse malesuada convallis ipsum, auctor volutpat lectus fermentum ac. Donec rhoncus ipsum eu fermentum rutrum. Curabitur laoreet pretium augue sit amet fringilla. Quisque nec elit pretium ante dapibus volutpat vel vel odio. Aliquam erat volutpat.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
