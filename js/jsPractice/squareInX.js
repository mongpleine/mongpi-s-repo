const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

// createInterface() 메소드를 이용해 객체를 만들고, rl이라는 변수에 저장
const rl = readline.createInterface({ input, output });
let num;

rl.question('Input Number : ', (input) => {
    num = Number(input);

    let array = Array.from(new Array(num), () => new Array(num).fill(0));
    for (let i=0; i<num; i++) {
        array[0][i] = 'x';
        array[i][0] = 'x';
        array[i][num-1] = 'x';
        array[num-1][i] = 'x';

        if (i !== 0 || i !== num-1) {
            array[i][i] = 'x';
            array[i][num-1-i] = 'x'
        }
    }

    traverse2dArray(array, num, num);

    rl.close();
});



// 반복문 이용
function traverse2dArray(arr, ROW, COLUMN) {
    for (let i = 0; i < ROW; i++) {
        let row = "";

        for (let j = 0; j < COLUMN; j++) {
            row += arr[i][j] + " ";
        }

        console.log(row);
    }
}