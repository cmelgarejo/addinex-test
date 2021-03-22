import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    labelStyle: {
      ...theme.typography.button,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(0),
      paddingLeft: theme.spacing(4),
    },
  })
);

interface Props {
  interval: Number;
  isLoading: Boolean;
  error: Error | string;
}

const TimeIntervalComponent: FunctionComponent<Props> = (props) => {
  const classes = useStyles(props);
  const { interval, isLoading, error } = props;
  let txtInterval = '-';
  if (error) console.error(error);
  if (!error && !isLoading) {
    txtInterval = interval.toString();
  }
  return <div className={classes.labelStyle}>{`Time interval: ${txtInterval}`}</div>;
};

export default TimeIntervalComponent;
