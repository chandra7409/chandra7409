// write a program to compute the Nth prime number using the concept of Sieve Of Eratosthenes and


function NprimeNumber(n) {
    prime = Array.from({ length: n + 1 }, (_, i) => true);
    for (let p = 2; p * p <= n; p++) {
        if (prime[p] == true) {
            for (let i = p * p; i <= n; i += p)
                prime[i] = false;


        }
    }
    for (let i = 2; i <= n; i++) {
        if (prime[i] == true) {
            console.log(i + "");
        }
    }
}
let n = 30;
console.log("smaller than or equal to " + n + "<br/>");
console.log(NprimeNumber(n));


//Time complexity  o(n*log(log(n)))
//Space complexity o(0)