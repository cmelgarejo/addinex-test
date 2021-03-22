import React, { FunctionComponent, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    notice: {
      ...theme.typography.button,
      padding: theme.spacing(2),
    },
    since: {
      color: theme.palette.primary.main,
    },
  })
);

interface Props {
  events: Array<any>;
}

const NoticeComponent: FunctionComponent<Props> = (props) => {
  const { events } = props;
  const classes = useStyles(props);
  const since = Math.ceil((new Date().getTime() - new Date(events?.[events?.length - 1]?.createdAt).getTime()) / 1000) || 0;
  return (
    <div className={classes.notice}>
      Hey, it’s been &nbsp;<span className={classes.since}>{since}</span>&nbsp; seconds since your last request
    </div>
  );
};

export default NoticeComponent;
