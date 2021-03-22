import React, { FunctionComponent, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Event from '../Event/Container';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: '100hw',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      backgroundColor: theme.palette.secondary.main,
      color: '#ffff',
    },
    wrapper: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      fontSize: '0.96em',
    },
  })
);

interface Props {
  isLoading: Boolean;
  error: Error | string;
  events: Array<any>;
}

const EventListComponent: FunctionComponent<Props> = (props) => {
  const classes = useStyles(props);
  const { events, isLoading } = props;
  return (
    <Paper className={classes.paper}>
      <Grid className={classes.wrapper} container direction="row" justify="flex-start" alignItems="center">
        {events?.map((event, index) => (
          <Event key={index} index={index} event={event} />
        ))}
      </Grid>
    </Paper>
  );
};

export default EventListComponent;
