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
      name: 'id',
      message: 'Enter your Emplyoee ID # (Required)',
      validate: githubInput => {
        if (githubInput) {
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
      validate: githubInput => {
        if (githubInput) {
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

const promptEmployee = employeeData => {
  console.log(`
=================
Add a New Team Member
=================
`);

  // If there's no 'employee' array property, create one
  if (!employeeData.employee) {
    employeeData.employee = [];
  }
  return inquirer
    .prompt([
      {
        type: "input",
        name: "School",
        message: "Please add additional education pertaining to your role including Name, Year of Graduation, and Degree Certification. Please type N/A or type N to skip to the next prompt. (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter school name/degree certification or type N/A to skip");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "office number",
        message: "Please enter your office number. If this does not apply please enter N/A or Type N to skip to the next prompt. (Required)",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("Please enter N/A or Type N to skip to the next prompt");
            return false;
          }
        },
      },
      {
        type: "checkbox",
        name: "Role",
        message: "What is your role? (Please select one or more)",
        choices: [
          "Employee",
          "Manager",
          "Engineer",
          "Intern",
        ],
      },
      {
        type: "input",
        name: "link",
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
        name: "Employee",
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
        return promptEmployee(employeeData);
      } else {
        return employeeData;
      }
    });
};

promptUser()
  .then(promptEmployee)
  .then(employeeData => {
    return generatePage(employeeData);
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
