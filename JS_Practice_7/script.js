const firm = {
    name: "chetverochka",
    income: 1000000,
    expenses: 400000,
    workers: [{
        name: "Petrov Ivan",
        jobTitle: "SEO"
        },
        {
            name: "Ivanova Anna",
            jobTitle: "бухгалтер"
        },
        {
            name: "Васильев Игорь",
            jobTitle: "Менеджер"
        },
        {
            name: "Егоров Павел",
            jobTitle: "Разнорабочий"
        }
        
    ]
}
let course = 89.1
const profit_dollar = firm.income - firm.expenses
const profit_rub = Math.floor(profit_dollar / course)

const companyName = document.querySelector(".company-name");
const income_company = document.querySelector(".income_company");
const expenses_company = document.querySelector(".expenses_company");
const name_worker = document.querySelector(".workers");
const profit_comp_dollar = document.querySelector(".profit_dollar");
const profit_comp_rub = document.querySelector(".profit_rub");

companyName.innerHTML = firm.name;
income_company.innerHTML = firm.income;
expenses_company.innerHTML = firm.expenses;
profit_comp_dollar.innerHTML = profit_dollar;
profit_comp_rub.innerHTML = profit_rub;

firm.workers.forEach(function(item){
    const workerElements = `<div>${item.name} - ${item.jobTitle}</div>`;
    name_worker.insertAdjacentHTML('beforeend', workerElements);
})