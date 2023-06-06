import * as React from 'react';
import { Container, useTheme } from '@mui/material';

type Props = {
  children: NonNullable<React.ReactNode>;
  maxWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
};

export default function Layout({ children, maxWidth = 'md' }: Props) {
  return (
    <div>
      <Container tw="flex-grow" maxWidth={maxWidth}>
        {children}
      </Container>
    </div>
  );
}
