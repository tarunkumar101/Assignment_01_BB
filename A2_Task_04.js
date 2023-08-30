// Sample CRUD Operations
const person = {
    id: 1,
    firstName: " Tarun Kumar ",
    lastName: " Mutthi ",
    age: 21,
    email: " tarunkumarkopuravuri576@gmail.com "
};

// Create Method
person.city = "Hyderabad";

// Read Method
console.log("Read:", person);

// Update Method
person.age = 22;

// Display Method
console.log("Update:", person);

// Delete Method
delete person.city;

// Display Method
console.log("Delete:", person);