const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

// createInterface() 메소드를 이용해 객체를 만들고, rl이라는 변수에 저장
const rl = readline.createInterface({ input, output });
let num;

rl.question('Input Number : ', (input) => {
    num = Number(input);

    // 2차원배열 생성과 동시에 'O'으로 초기화
    let array = Array.from(new Array(num), () => new Array(num).fill('O'));
    for (let i=0; i<num; i++) {
        // 정사각형의 테두리 'X' 로 채우기
        array[0][i] = 'X';
        array[i][0] = 'X';
        array[i][num-1] = 'X';
        array[num-1][i] = 'X';

        // 정사각형 안에 'X'문자로 X 모양 만들기
        if (i !== 0 || i !== num-1) {
            array[i][i] = 'X';
            array[i][num-1-i] = 'X'
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
            row += arr[i][j] + "";
        }

        console.log(row);
    }
}