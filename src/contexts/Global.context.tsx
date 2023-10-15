import React, { PropsWithChildren } from 'react'

export const GlobalContextWrapper: React.FC<PropsWithChildren> = ({
  children,
}) => <React.Fragment>{children}</React.Fragment>
