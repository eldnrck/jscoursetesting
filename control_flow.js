let userRole = "admin";
let isLoggedIn = true;
let userType = "subscriber";
let isAuthenticated = true;
let userMessage
let accessLevel;
let userCategory;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

if (isLoggedIn){
    if(userRole === "admin"){
        userMessage = "Welcome Admin!"
    }else{
        userMessage = "Welcome User!"
    }
}else{
    userMessage = "Please log in to the system.";
}

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated"

console.log("Access Level:", accessLevel);
console.log("User Message:",userMessage);
console.log("User Category:", userCategory);
console.log("Authentication Status:",authenticationStatus);