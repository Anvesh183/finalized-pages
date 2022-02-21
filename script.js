const list = document.querySelector(".leaderboard-list");

users = [
  {
    rank: "#2",
    name: "Sukhendra Rompally",
    employeeID: "SR4524526",
    department: "Accounts",
    points: 550,
  },
  {
    rank: "#2",
    name: "Sukhendra Rompally",
    employeeID: "SR4524526",
    department: "Accounts",
    points: 550,
  },
  {
    rank: "#2",
    name: "Sukhendra Rompally",
    employeeID: "SR4524526",
    department: "Accounts",
    points: 550,
  },
  {
    rank: "#2",
    name: "Sukhendra Rompally",
    employeeID: "SR4524526",
    department: "Accounts",
    points: 550,
  },
  {
    rank: "#2",
    name: "Sukhendra Rompally",
    employeeID: "SR4524526",
    department: "Accounts",
    points: 550,
  },
  {
    rank: "#2",
    name: "Sukhendra Rompally",
    employeeID: "SR4524526",
    department: "Accounts",
    points: 550,
  },
  {
    rank: "#2",
    name: "Sukhendra Rompally",
    employeeID: "SR4524526",
    department: "Accounts",
    points: 550,
  },
  {
    rank: "#2",
    name: "Sukhendra Rompally",
    employeeID: "SR4524526",
    department: "Accounts",
    points: 550,
  },
  {
    rank: "#2",
    name: "Sukhendra Rompally",
    employeeID: "SR4524526",
    department: "Accounts",
    points: 550,
  },
  {
    rank: "#2",
    name: "Sukhendra Rompally",
    employeeID: "SR4524526",
    department: "Accounts",
    points: 550,
  },
];

users.forEach((user) => {
  const userRow = `
          <div class="user-row-card grid grid--cols-6">
          <div class="user-rank">
            ${user.rank}
            </div>
            <img class="user-image" src="./assets/images 1.png" alt="person" />
          <div class="user-name">
            ${user.name}
          </div>
          <div class="user-employee-id">${user.employeeID}</div>
          <div class="user-department">${user.department}</div>
          <div class="user-points">${user.points}</div>
        </div>
 `;

  list.insertAdjacentHTML("beforeend", userRow);
});
