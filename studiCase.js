let customers = []; // This array will hold customer objects

function addCustomer(name, accountNumber) {
  let newCustomer = {
    name: name,
    accountNumber: accountNumber,
    balance: 0,
    transactionHistory: [],
  };
  customers.push(newCustomer);
}

function findCustomerByAccountNumber(accountNumber) {
  return customers.find((customer) => customer.accountNumber === accountNumber);
}

function deposit(accountNumber, amount) {
  let customer = findCustomerByAccountNumber(accountNumber);
  if (customer) {
    customer.balance += amount;
    customer.transactionHistory.push({
      date: Date.now(),
      type: "deposit",
      amount: amount,
    });
    console.log(
      `Deposit of ${amount} to account number ${accountNumber} was successful.`
    );
  } else {
    console.log(`Customer with account number ${accountNumber} not found.`);
  }
}

function withdraw(accountNumber, amount) {
  let customer = findCustomerByAccountNumber(accountNumber);
  if (customer) {
    if (customer.balance >= amount) {
      customer.balance -= amount;
      customer.transactionHistory.push({ type: "withdrawal", amount: amount });
      console.log(
        `Withdrawal of ${amount} from account number ${accountNumber} was successful.`
      );
    } else {
      console.log(
        `Insufficient balance for withdrawal from account number ${accountNumber}.`
      );
    }
  } else {
    console.log(`Customer with account number ${accountNumber} not found.`);
  }
}

function validateCustomerData(name, accountNumber) {}

function editCustomerInfo(accountNumber, newInfo) {}

function name(params) {}

function getHighBalanceCustomers() {
  let maxAmount = 0;
  for (let i = 0; i < customers.length; i++) {
    if (i == 0) {
      maxAmount = customers[i].amount;
    } else {
      if (customers[i].amount > maxAmount) {
        maxAmount = customers[i].amount;
      }
    }
    console.log(maxAmount);
  }
}

function calculateTotalBalance() {}

function performTransaction(accountNumber, amount) {}

addCustomer("John Doe", "123456789");
deposit("123456789", 1000);
withdraw("123456789", 500);

addCustomer("John Doe", "123456710");
deposit("123456710", 2000);
withdraw("123456710", 300);

getHighBalanceCustomers();
