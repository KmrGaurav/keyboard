import React from 'react';

const EventManager = {
    setState: (() => {}) as React.Dispatch<React.SetStateAction<any>>
};

export const letKeyboardHandleSetState = (setState: React.Dispatch<React.SetStateAction<any>>) => {
    EventManager.setState = setState;
};

const keypress = (value: string) => {
    EventManager.setState((prev: any) => prev + value);
};

const Keyboard: React.FC = () => {
    const keyboardRef = React.useRef<HTMLDivElement>(null);
    const [showKeyboard, setShowKeyboard] = React.useState(false);

    React.useEffect(() => {
        const handleRootClick = (event: Event) => {
            const target = event.target as HTMLElement;

            if (target.tagName === 'INPUT') {
                console.log('Input clicked:', event.currentTarget);
                setShowKeyboard(true);
            } else if (keyboardRef.current && keyboardRef.current.contains(event.target as Node)) {
                setShowKeyboard(true);
            } else {
                console.log('Not input clicked', event.currentTarget);
                setShowKeyboard(false);
                EventManager.setState = () => {};
            }
        };

        document.addEventListener('mousedown', handleRootClick);

        return () => {
            document.removeEventListener('mousedown', handleRootClick);
        };
    }, []);

    return (
        <>
            {showKeyboard && (
                <div
                    ref={keyboardRef}
                    style={{ position: 'fixed', bottom: '10px', padding: '24px', backgroundColor: 'grey' }}
                >
                    <button style={{ width: '100px', height: '30px' }} onClick={() => keypress('x')}>
                        xxxxx
                    </button>
                    <button style={{ width: '100px', height: '30px' }} onClick={() => keypress('y')}>
                        yyyyy
                    </button>
                </div>
            )}
        </>
    );
};

export default Keyboard;
