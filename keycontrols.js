window.addEventListener('keydown', e => {
    const el = document.querySelector('#buzAv');
    const shift = 0.25; 
    if (!el) return; 

    let event = null;
    switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
            event = new CustomEvent('move', {
                detail: {
                    x: 0,
                    y: shift,
                    z: 0
                }
            });
            break; 
        case 'ArrowDown':
        case 's':
        case 'S':
            event = new CustomEvent('move', {
                detail: {
                    x: 0,
                    y: -1 * shift,
                    z: 0
                }
            });
            break; 
        case 'ArrowLeft':
        case 'a':
        case 'A':
            event = new CustomEvent('move', {
                detail: {
                    x: -1 * shift,
                    y: 0,
                    z: 0
                }
            });
            break; 
        case 'ArrowRight':
        case 'd':
        case 'D':
            event = new CustomEvent('move', {
                detail: {
                    x: shift,
                    y: 0,
                    z: 0
                }
            });
            break; 
        case 'o':
        case 'O':
            event = new CustomEvent('move', {
                detail: {
                    x: 0,
                    y: 0,
                    z: -1 * shift
                }
            });
            break;
        case 'p':
        case 'P':
            event = new CustomEvent('move', {
                detail: {
                    x: 0,
                    y: 0,
                    z: shift
                }
            });
            break;
        default: 
            return; 
    }

    el.dispatchEvent(event);
});