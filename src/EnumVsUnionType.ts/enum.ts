enum UserRole {
  Admin,
  Manager,
  Employee
}

function checkAccess(role: UserRole) {
  if (role === UserRole.Admin) {
    console.log("Full Access");
  } else {
    console.log("Limited Access");
  }
}

checkAccess(UserRole.Admin);

console.log("===================ex2============");

enum Status {
  Pending = 1,
  Approved = 2,
  Rejected = 3
}

let orderStatus: Status = Status.Rejected

console.log(orderStatus); // 2