// Code to generate cards to display data for manager
const generateManager = function (manager) {
  return `
  <div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
        <h3>${manager.name}</h3>
        <h4>Manager</h4><i class="material-icons">content_paste</i>
      </div>
      <div class="card-body">
        <p class="id">ID: ${manager.id}</p>
        <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p class="office">Office Number: ${manager.officeNumber}</p>
      </div>
    </div>
  </div>
  `;
}

// Code to generate cards to display data for engineer
const generateEngineer = function (engineer) {
  return `
  <div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
        <h3>${engineer.name}</h3>
        <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
      </div>
      <div class="card-body">
        <p class="id">ID: ${engineer.id}</p>
        <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
      </div>
    </div>
  </div>
  `;
}

// Code to generate cards to display data for Intern
const generateIntern = function (intern) {
  return `
  <div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
        <h3>${intern.name}</h3>
        <h4>Intern</h4><i class="material-icons">assignment_ind</i>
      </div>
      <div class="card-body">
        <p class="id">ID: ${intern.id}</p>
        <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
        <p class="school">School: ${intern.school}</p>
      </div>
    </div>
  </div>
  `;
}

// Generate page array
generateHTML = (data) => {

  // page array for generate card data for different roles 
  pageArray = []; 

  for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole(); 


      // call to function for manager role
      if (role === 'Manager') {
          const managerCard = generateManager(employee);

          pageArray.push(managerCard);
      }

      // call to function for engineer role
      if (role === 'Engineer') {
          const engineerCard = generateEngineer(employee);

          pageArray.push(engineerCard);
      }

      // call to function for intern role
      if (role === 'Intern') {
          const internCard = generateIntern(employee);

          pageArray.push(internCard);
      }
      
  }

  // Strings to join arrays together
  const employeeCards = pageArray.join('')

  // return to generated page
  const generateTeam = generateTeamPage(employeeCards); 
  return generateTeam;

}

// generate html template literal
const generateTeamPage = function (employeeCards) {   
return`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body>
  <header>
    <nav class="navbar" id="navbar">
      <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
    </nav>
  </header>
  <main>
    <div class="container">
      <div class="row justify-content-center" id="team-cards">
        <!--Team Cards-->
        ${employeeCards}
      </div>
    </div>
  </main>

</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</html>
`;
}

module.exports = generateHTML; 