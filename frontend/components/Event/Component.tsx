import React, { FunctionComponent, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/icons/Delete';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      color: '#ffff',
    },
    container: {
      padding: theme.spacing(1),
    },
  })
);

interface Props {
  DeleteEvent(orderId: string): void;
  index: any | string;
  interval: Number;
  event: any;
}

const EventComponent: FunctionComponent<Props> = (props) => {
  const { event, interval, index, DeleteEvent } = props;
  const classes = useStyles(props);
  const color =
    Math.ceil(new Date().getTime() - new Date(event.createdAt).getTime()) / 1000 > interval ? '#ff0000' : '#fff';
  return (
    <>
      <Grid container xs={12} className={classes.container} style={{ color: color }}>
        <Grid item xs={2} md={2}>
          Event {index + 1}
        </Grid>
        <Grid item xs={4} md={5}>
          {event.event}
        </Grid>
        <Grid item xs={4} md={4}>
          {event.createdAt}
        </Grid>
        <Grid item xs={1} md={1}>
          <IconButton
            className={classes.button}
            onClick={() => {
              DeleteEvent(event._id);
            }}
            size="small"
            aria-label="delete"
          >
            <Icon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default EventComponent;
