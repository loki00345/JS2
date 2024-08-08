// class ExtendedDate extends Date {
//     constructor(...args) {
//         super(...args);
//     }

//     getDateText() {
//         const months = [
//             "січня", "лютого", "березня", "квітня", "травня", "червня",
//             "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"
//         ];
//         return `${this.getDate()} ${months[this.getMonth()]}`;
//     }

//     isFuture() {
//         const now = new Date();
//         return this.getTime() >= now.getTime();
//     }

//     isLeapYear() {
//         const year = this.getFullYear();
//         return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
//     }

//     getNextDate() {
//         const nextDate = new Date(this);
//         nextDate.setDate(this.getDate() + 1);
//         return nextDate;
//     }
// }

// const extendedDate = new ExtendedDate(2024, 5, 1);

// console.log("Дата текстом:", extendedDate.getDateText());
// console.log("Це майбутня дата?", extendedDate.isFuture());
// console.log("Чи є рік високосним?", extendedDate.isLeapYear());

// const nextDate = extendedDate.getNextDate();
// console.log("Наступна дата:", nextDate);


class Employee {
    constructor(name, position, department) {
        this.name = name;
        this.position = position;
        this.department = department;
    }
}

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        let html = '<table border="1">';
        html += '<tr><th>Ім\'я</th><th>Посада</th><th>Відділ</th></tr>';

        this.employees.forEach(employee => {
            html += `<tr><td>${employee.name}</td><td>${employee.position}</td><td>${employee.department}</td></tr>`;
        });

        html += '</table>';
        return html;
    }
}

class StyledEmpTable extends EmpTable {
    getStyles() {
        return `
            <style>
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    padding: 8px;
                    text-align: left;
                    border-bottom: 1px solid #ddd;
                }
                tr:nth-child(even) {
                    background-color: #f2f2f2;
                }
                th {
                    background-color: #4CAF50;
                    color: white;
                }
            </style>
        `;
    }

    getHtml() {
        const parentHtml = super.getHtml();
        const styles = this.getStyles();
        return styles + parentHtml;
    }
}

const bankEmployees = [
    new Employee("Іван", "Менеджер", "Фінансовий відділ"),
    new Employee("Марія", "Аналітик", "IT відділ"),
    new Employee("Петро", "Касир", "Відділ обслуговування клієнтів"),
];

const styledEmpTable = new StyledEmpTable(bankEmployees);
document.body.innerHTML = styledEmpTable.getHtml();