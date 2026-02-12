let userRole = "admin";
let isLoggedIn = true;
let userType = "subscriber";
let isAuthenticated = true;
let userMessage
let accessLevel;
let userCategory;
let person = "guest";
let dietaryServices;

if(person === 'employee'){
    dietaryServices = "You are authorized to have access to our Dietary Services!";
} else if(person==='enrolled member'){
    dietaryServices = 'You are authorized to have access to our Dietary Services and one-on-one interaction with a dietician!';
} else if(person==='subscriber'){
    dietaryServices = 'You are authorized to have a partial access to facilitate our Dietary Services!';
}else{
    dietaryServices = 'Please enroll or at least subscribe first to avail this facility!';
}



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
console.log("Dietary Services:", dietaryServices);