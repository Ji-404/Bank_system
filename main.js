// Students write their code between these lines. 
//
// Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
//
// Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
//
// Stuents should carefully read the test cases for the correct output. 
//

// Mock Data 
let balance = 5000;
const transactionHistory = ['Deposited 10000 into Savings Account', 'Withdrawn 5000 from Savings Account'];

function getBalance() {
    // Write function description 
    
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    return balance;
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

function deposit(amount) {
    // Write function description 
    
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    balance += amount;
    transactionHistory.push(`Deposited ${amount} into Saving Account`);
    return balance;
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

function withdraw(amount) {
    // Write function description 
    
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    balance -= amount;
    transactionHistory.push(`Withdrawn ${amount} into Saving Account`);
    return balance;
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

function getTransactionHistory() {
    // Write function description 

    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    let history = 'Transaction History\n';
    for (let i = 0; i < transactionHistory.length; i++) {
        history += `${i + 1}) ${transactionHistory[i]}\n`;
    }
    return history.trim();
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Instructor's test cases
// ===== ===== ===== ===== =====

console.log(getBalance());
// Expected Output: 5000

deposit(4000);
console.log(getBalance());
// Expected Output: 9000

withdraw(3000);
console.log(getBalance());
// Expected Output: 6000

console.log(getTransactionHistory());
/* Expected Output:

Transaction History
1) Deposited 10000 into Savings Account
2) Withdrawn 5000 from Savings Account
3) Deposited 4000 into Savings Account
4) Withdrawn 3000 from Savings Account

*/