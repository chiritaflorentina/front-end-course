let userRole="admin";
let accesLevel;
if(userRole=="admin")
{
    accesLevel="Full acces granted";
}else if (userRole==="manager")
{
    accesLevel="Limited acces granted";
}else{
    accesLevel="No acces granted";
}
console.log("Access Level:", accesLevel);
let isLoggedIn = true;
let userMessage;
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);
let userType = "subscriber";
let userCategory;
switch(userType)
{
    case "admin":
        userCategory="Administrator";
        break;
    case "manager":
        userCategory="Manager";
        break;
    case "subscriber":
        userCategory="Subscriber";
        break;
    default:
        userCategory="Unknown";
}
console.log("User Category:", userCategory);
let isAuthenticated = true;
//let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
let authenticationStatus= isAuthenticated?"Authenticated":"Not authenticated";
console.log("Authentication Status:", authenticationStatus);
var person="Enrolled Member";
var acces;
switch(person)
{
    case "Employee":
        acces="Dietary Services";
        break;
    case "Enrolled Member":
        acces="Dietary Services and one-on-one interaction with a dietician";
        break;
    case "Subscriber":
        acces="partial access to facilitate Dietary Services";
        break;
    case "Non-Subscriber":
        acces="No acces. Need to enroll/ subscribe";
        break;

}
console.log("Your acces is "+acces);
