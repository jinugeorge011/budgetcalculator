// Register

function register() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (confirmPassword !== password) {
      alert("Passwords do not match");
      return;
    }
  
    const existingUsers = JSON.parse(localStorage.getItem('users') || '{}');
    if (existingUsers[username]) {
      alert("User already exists");
      return;
    }

    const user = {
      username,
      email,
      password,
      balance: 0
    };

    const userData = JSON.stringify(user);

    localStorage.setItem(username, userData);

    existingUsers[username] = user;
    localStorage.setItem('users', JSON.stringify(existingUsers));
  
    alert("Registration successful");
    window.location = 'login.html';
  }

 //Login

    function logIn(){
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let user = JSON.parse(localStorage.getItem('users'));
        if (!username || !password) {
            alert("Please fill in all fields");
            return;
          }
            if(user[username] && user[username].password === password){
                alert("Login successful");
                window.location = 'home.html';
                }else{
                    alert("Incorrect username or password");
                    }
                    }


// Forget Password
function forgetPassword(){
    let username = document.getElementById("username").value;
    let user = JSON.parse(localStorage.getItem('users'));
    if (!username) {
        alert("Please fill in all fields");
        return;
        }
        if(user[username]){
            alert("Password: " + user[username].password);
            }
            else{
                alert("User not found");
                }
            }

// budget calculator

    function addExpenses() {
    const income = parseFloat(document.getElementById('income').value) || 0;
    const expense = document.getElementById('expense').value;
    const amount = parseFloat(document.getElementById('amount').value) || 0;

    if (expense && amount > 0) {
        const expenseList = document.getElementById('expenseList');
        updateBudget(amount, income);
        const newRow = `
            <tr>
                <td class="py-2 text-white">${expense}</td>
                <td class="py-2 text-white text-right">₹ ${amount.toFixed(2)}/-</td>
            </tr>
        `;

        // Add the new row to the table body
        expenseList.innerHTML += newRow;

    } else {
        alert('Please enter a valid expense name and amount.');
    }
};

let totalExpenses = 0;

function updateBudget(amount, income) {
    totalExpenses += amount;
    document.getElementById('totalExpenses').textContent = totalExpenses.toFixed(2);
    const balance = income - totalExpenses;
    document.getElementById('balance').textContent = balance.toFixed(2);
}

