import React, { FunctionComponent } from 'react';
import { useConfig } from 'docz';

export const H1: FunctionComponent = props => {
  const {
    themeConfig: { fonts, colors },
  } = useConfig();
  return (
    <h1
      {...props}
      style={{
        fontFamily: fonts.title,
        color: colors.primary,
      }}
    />
  );
};

export const H2: FunctionComponent = props => {
  const {
    themeConfig: { fonts },
  } = useConfig();
  return (
    <h2
      {...props}
      style={{
        fontFamily: fonts.title,
      }}
    />
  );
};

export const H3: FunctionComponent = props => {
  const {
    themeConfig: { fonts },
  } = useConfig();
  return (
    <h3
      {...props}
      style={{
        fontFamily: fonts.title,
      }}
    />
  );
};

export const H4: FunctionComponent = props => {
  const {
    themeConfig: { fonts },
  } = useConfig();
  return (
    <h4
      {...props}
      style={{
        fontFamily: fonts.title,
      }}
    />
  );
};

export const H5: FunctionComponent = props => {
  const {
    themeConfig: { fonts },
  } = useConfig();
  return (
    <h5
      {...props}
      style={{
        fontFamily: fonts.title,
      }}
    />
  );
};

export const H6: FunctionComponent = props => {
  const {
    themeConfig: { fonts },
  } = useConfig();
  return (
    <h6
      {...props}
      style={{
        fontFamily: fonts.title,
      }}
    />
  );
};
