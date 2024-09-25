let count = 0

const calculate = document.getElementById('calculate');
calculate.addEventListener('click', function () {
    const income = parseFloat(document.getElementById('income').value)
    const software = parseFloat(document.getElementById('software').value)
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    const expenses = software + courses + internet;
    const balance = income - expenses;
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = expenses.toFixed(2)
    const totalBalance = document.getElementById('balance');
    totalBalance.innerText = balance.toFixed(2)

    const hiddenResult = document.getElementById('results');
    hiddenResult.classList.remove('hidden')

    // result summary 
    const itemHistory = document.createElement('div');
    itemHistory.className = 'border-l-2 bg-white box-shadow-md border-indigo-500 p-2 rounded-md';
    itemHistory.innerHTML = `
    <p class="text-gray-500">Serial: ${count += 1}</p>
    <p class="text-gray-500">${new Date().toLocaleDateString()}</p>
    <p class="text-gray-500">$Income: ${income}</p> 
    <p class="text-gray-500">$Expenses: ${expenses}</p> 
    <p class="text-gray-500">$Balance: ${balance}</p> 
    `
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(itemHistory, historyContainer.firstChild)



})

const calculateBtn = document.getElementById('calculate-savings');
calculateBtn.addEventListener('click', function () {

    const income = parseFloat(document.getElementById('income').value)
    const software = parseFloat(document.getElementById('software').value)
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    const expenses = software + courses + internet;
    const balance = income - expenses;

    const saving = parseFloat(document.getElementById('savings').value);
    const savingAmount = (saving * balance) / 100;
    const savingElement = document.getElementById('savings-amount');
    savingElement.innerText = savingAmount;

    const remainingBalance = balance - savingAmount;
    const remainingElement = document.getElementById('remaining-balance');
    remainingElement.innerText = remainingBalance;
})

// history tab
const assistantTab = document.getElementById('assistant-tab');
const historyTab = document.getElementById('history-tab');
historyTab.addEventListener('click', function () {
    historyTab.classList.add(
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600',
        'text-white'
    )
    historyTab.classList.remove('text-gray-600')
    assistantTab.classList.remove(
        'text-white',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600'
    )
    assistantTab.classList.add('text-gray-600');

    document.getElementById('expense-form').classList.add('hidden')
    document.getElementById('history-section').classList.remove('hidden')
})

assistantTab.addEventListener('click', function(){
    assistantTab.classList.add(
        'text-white',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600'
    )
    historyTab.classList.remove(
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600',
        'text-white'
    )
    document.getElementById('expense-form').classList.remove('hidden')
    document.getElementById('history-section').classList.add('hidden')
})