import React from 'react';
import { ThemeProvider } from 'theme-ui';

import theme from './../gatsby-plugin-theme-ui';

// components
import Wrapper from './wrapper';
import { MDXGlobalComponents } from './joy/mdx';

export default function Layout({ children, wrapped }) {
  return (
    <ThemeProvider theme={theme} components={MDXGlobalComponents}>
      <Wrapper wrapped={wrapped}>{children}</Wrapper>
    </ThemeProvider>
  );
}
