import React from 'react';

import Keyboard, { letKeyboardHandleSetState } from './Keyboard';

const App: React.FC = () => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');

    console.log(firstName, lastName);

    return (
        <>
            <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onFocus={(e) => letKeyboardHandleSetState(setFirstName)}
            />
            <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onFocus={(e) => letKeyboardHandleSetState(setLastName)}
            />
            <Keyboard />
        </>
    );
};

export default App;
