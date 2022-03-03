// Write a program to multiply two 2D matrices and derive its worst case time and space complexity.


let n = 4;

function Multiply(m1, m2, res) {
    let i, j, k;
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            res[i][j] = 0;
            for (k = 0; k < n; k++)
                res[i][j] += m1[i][k] * m2[k][j];

        }
    }

}
let i, j;
let res = new Array(n);
for (let k = 0; k < n; k++) {
    res[k] = new Array(n);
    let m1 = [
        [1, 1, 1, 1],
        [2, 2, 2, 2],
        [3, 3, 3, 3],
        [4, 4, 4, 4]
    ];

    m2 = [
        [1, 1, 1, 1],
        [2, 2, 2, 2],
        [3, 3, 3, 3],
        [4, 4, 4, 4]
    ];
    Multiply(m1, m2, res);
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            console.log(res[i][j] + "");
            console.log("<br/>");
        }
    }
}



//time complexity o(n^3)

// Space complexity  o(n^2)