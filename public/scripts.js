async function fetchEmployees() {
    const response = await fetch('/api/employees');
    const employees = await response.json();
    const list = document.getElementById('employeeList');
    employees.forEach(emp => {
        const item = document.createElement('li');
        item.textContent = `${emp.name} - ${emp.position}`;
        list.appendChild(item);
    });
}

async function fetchProjects() {
    const response = await fetch('/api/projects');
    const projects = await response.json();
    const list = document.getElementById('projectList');
    projects.forEach(proj => {
        const item = document.createElement('li');
        item.textContent = proj.name;
        list.appendChild(item);
    });
}

async function fetchSalaries() {
    const response = await fetch('/api/salaries');
    const salaries = await response.json();
    const list = document.getElementById('salaryList');
    salaries.forEach(sal => {
        const item = document.createElement('li');
        item.textContent = `Employee ID: ${sal.employeeId} - Amount: ${sal.amount}`;
        list.appendChild(item);
    });
}

fetchEmployees();
fetchProjects();
fetchSalaries();