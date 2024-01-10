import * as React from 'react';
import Button from '@mui/material/Button';

function DefaultButton({ children }:any) {
  return (
      <Button variant="text">{children}</Button>
  );
}

export { DefaultButton }