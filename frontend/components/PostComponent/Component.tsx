import React, { FunctionComponent, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { IconClassKey } from '@material-ui/core';

interface Props {
  onClick(value: any): void;
  Icon: any;
  Type: string;
  Label: string;
  DefaultValue: any | string | Number;
  error: any;
}

const PostComponent: FunctionComponent<Props> = (props) => {
  const { Icon, Label, Type, DefaultValue, onClick, error } = props;
  const [value, setValue] = useState(DefaultValue);
  const [err, setErr] = useState(error);
  return (
    <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
      <Grid item xs={7}>
        <TextField
          fullWidth
          error={!!err}
          type={Type}
          label={Label}
          placeholder={Label}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setErr(false);
          }}
        />
      </Grid>
      <Grid item xs={5}>
        <Button
          onClick={() => {
            if (value) {
              onClick(value);
              // setValue(DefaultValue);
            } else {
              setErr(true);
            }
          }}
          variant="contained"
          color="primary"
          size="small"
          startIcon={<Icon />}
        >
          {Label}
        </Button>
      </Grid>
    </Grid>
  );
};

export default PostComponent;
