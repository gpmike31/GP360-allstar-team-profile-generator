const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const { writeFile, copyFile } = require("./utils/generate-site.js");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'Enter your Emplyoee ID # (Required)',
      validate: employeeIdinput => {
        if (employeeIdinput) {
          return true;
        } else {
          console.log('Please enter your Employee ID#');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your work email (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your employee email');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Please provide any additonal information pertaining to your role when prompted or skip to proceed',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some additional information to complete your team roster:',
      when: ({ confirmAbout }) => confirmAbout
    }
  ]);
};

const promptEmployee = employeeStats => {
  console.log(`
=================
Add a New Team Member
=================
`);

  // If there's no 'employee stats' array property, create one
  if (!employeeStats.employee) {
    employeeStats.employee = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'school',
        message: "Please add additional education pertaining to your role including Name, Year of Graduation, and Degree Certification. Please type N/A or type N to skip to the next prompt. (Required)",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter school name/degree certification or type N/A to skip");
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter your office number. If this does not apply please enter N/A or Type N to skip to the next prompt. (Required)",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter N/A or Type N to skip to the next prompt");
            return false;
          }
        },
      },
      {
        type: 'checkbox',
        name: 'role',
        message: "What is your role? (Please select one or more)",
        choices: [
          "Employee",
          "Manager",
          "Engineer",
          "Intern",
        ],
      },
      {
        type: 'input',
        name: 'gitHublink',
        message: "Enter Your Github Link if required for your role. If not link is available please type N/A or Type N to skip to the next prompt. (Required)",
        validate: (linkInput) => {
          if (linkInput) {
            return true;
          } else {
            console.log("Please provide your Github or type N/A");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "feature",
        message: "Would you like to add this Employee to your roster?",
        default: false,
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add another Employee to your roster?",
        default: false,
      },
    ])
    .then(employeeStats => {
      employeeData.employee.push(employeeStats);
      if (employeeStats.confirmAddEmployee) {
        return promptEmployee(employeeStats);
      } else {
        return employeeStats;
      }
    });
};

promptUser()
  .then(promptEmployee)
  .then(employeeStats => {
    return generatePage(employeeStats);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then((copyFileResponse) => {
    console.log(copyFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });
