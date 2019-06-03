import React, { FunctionComponent, memo } from 'react';

import App from './App';

const Page: FunctionComponent = memo(props => <App {...props} />);

export default Page;
