import {numbers, operators} from '../data/dataId.js';
import { solveData } from '../utils/solve.js';

let htmlContent = '';

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('clear')) {
            htmlContent = '';
        }
        else if (button.classList.contains('equal')) {

        }
        else htmlContent += button.textContent;

        document.querySelector('.header_area').innerHTML = htmlContent;
    });
});
