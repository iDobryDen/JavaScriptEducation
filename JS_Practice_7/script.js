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

const companyName = document.querySelector(".company-name");
const income_company = document.querySelector(".income_company");
const expenses_company = document.querySelector(".expenses_company");
const name_worker = document.querySelector(".workers");

companyName.innerHTML = firm.name;
income_company.innerHTML = firm.income;
expenses_company.innerHTML = firm.expenses;

firm.workers.forEach(function(item){
    const workerElements = `<div>${item.name} - ${item.jobTitle}</div>`;
    name_worker.insertAdjacentHTML('beforeend', workerElements);
})