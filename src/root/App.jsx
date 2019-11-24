import React from 'react';

const App= ({ children }) => {
    return React.Children.only(children);
};
export default App;