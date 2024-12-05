(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const value = e.target.dataset.num;
            if (value !== undefined) {
                screen.value += value;
            }
        });
    });

    equal.addEventListener('click', (e) => {
        if (screen.value === '') {
            screen.value = '';
        } else {
            try {
                let answer = eval(screen.value); 
                screen.value = answer;
            } catch {
                screen.value = 'Error'; 
            }
        }
    });

    clear.addEventListener('click', (e) => {
        screen.value = '';
    });
})();
