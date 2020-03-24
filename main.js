//* variables
let player = 'cross';
const winConditions = [
    '1-2-3-',
    '4-5-6-',
    '7-8-9-',
    '1-4-7-',
    '2-5-8-',
    '3-6-9-',
    '1-5-9-',
    '3-5-7-'
];


//*HTMLElements

const field = document.querySelector('.container');
const cells = field.querySelectorAll('.cell');
const message = document.querySelector('.message');

//*Events
cells.forEach(cell => {
    cell.addEventListener('click', onCellClick)
});

//*Functions

function onCellClick(event) {
    let symbol = player === 'cross' ? 'X' : 'O';

    if (event.target.dataset.symbol !== 'none') return;
    event.target.dataset.symbol = player;
    event.target.textContent = symbol;

    if (isFinish() !== 'NO') {
        console.log(isFinish());
        message.textContent = isFinish();
        clearField()
    }
    player = player === 'cross' ? 'nolie' : 'cross';
}

function isFinish() {
    let situationCross = '';
    let situationNolies = '';

    let winer = 'NO';
    cells.forEach(cell => {
        if (cell.dataset.symbol === 'cross') {
            situationCross += `${cell.dataset.number}-`;
        } else if (cell.dataset.symbol === 'nolie') {
            situationNolies += `${cell.dataset.number}-`;
        }
    });

    winConditions.forEach(condition => {
        console.log(condition === situationCross, condition === situationNolies);
        if (condition === situationNolies) {
            winer = 'Nolies wins!';
            // console.log('NW');
        } else if (condition === situationCross) {
            winer = 'Cross wins!';
            // console.log('CW');
        }
    });

    return winer;
}

function clearField() {
    cells.forEach(cell => {
        cell.dataset.symbol = 'none';
        cell.textContent = '';
    })
}
