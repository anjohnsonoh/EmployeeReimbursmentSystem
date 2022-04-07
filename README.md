# Project-1: Employee Reimbursment System (ERS)
*Due Monday March 15th, 2021*

## Project Description
* The Expense Reimbursement System (ERS) will manage the process of reimbursing employees for expenses incurred while on company time. 
* All employees in the company can login and submit requests for reimbursement and view their past tickets and pending requests. 
* Finance managers can log in and view all reimbursement requests and past history for all employees in the company. 
* Finance managers are authorized to approve and deny requests for expense reimbursement.
Finance Manager Login Info

## Features
### Employee User Stories 
- An Employee can login
- An Employee can view the Employee Homepage
- An Employee can logout
- An Employee can submit a reimbursement request
- An Employee can upload an image of his/her receipt as part of the reimbursement request (extra credit)
- An Employee can view their pending reimbursement requests
- An Employee can view their resolved reimbursement requests
- An Employee can view their information


### Manager User Stories
- A Manager can login
- A Manager can view the Manager Homepage
- A Manager can logout
- A Manager can approve/deny pending reimbursement requests
- A Manager can view all pending requests from all employees
- A Manager can view images of the receipts from reimbursement requests (extra credit)
- A Manager can view all resolved requests from all employees and see which manager resolved it
- A Manager can view all Employees


### To-do list
- A Manager can view reimbursement requests from a single Employee 
- An Employee receives an email when one of their reimbursement requests is resolved (optional)
- An Employee can update their information


## Getting Started
open git bash to directory you wish to clone to, run "git clone https://github.com/anjohnsonoh/EmployeeReimbursmentSystem.git"

BackEnd: 
1. Open with eclipse, all dependencies should import. 
2. Ensure you have port 7072 available to run on.
3. In eclipse run com.revature.project1.Project1Application.java as a java application.
4. This will launch springboot and start running all pages for requests.

FrontEnd: 
1. Open a terminal/cmd prompt
2. cd into the git cloned project
3. cd into frontend/employeereimbursementapplication
4. run "npm install" in this location
5. run "ng serve" in this location
6. Go to localhost:4200/register

DataBase is connected through AWS RDS so it should be accessible anywhere

## Usage
- At localhost:4200/register you can create a username and password for yourself to login with
- At localhost:4200/login you can login with you account info | You can login to a manager account using username: Tokala password: 123
- At localhost:4200/employee you can view your employee information | If logged in as a manager you can view all users
- At localhost:4200/submit you can submit a new reimbursement
- At localhost:4200/resolved you can view all resolved reimbursements
- At localhost:4200/pending you can view all pending reimbursements | If logged in as a manager, selecting the reimbursement button will approve the reimbursement
- At localhost:4200/manager you can view a page for navigating to different manager responsibilities



## License

