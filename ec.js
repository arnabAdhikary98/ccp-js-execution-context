let age = 30;

function displayAge() {
    console.log(`Age: ${age}`);
}

function changeAge() {
    age = 45;
    console.log(`Age changed to: ${age}`);
}


displayAge(); // Output: Age: 30
changeAge(); // Output: Age changed to: 45
displayAge(); // Output: Age: 45