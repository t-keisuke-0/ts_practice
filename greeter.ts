interface Person2 {
    firstName: string;
    lastName: string;
}

function greeter(person: Person2) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "Doe" };

document.body.textContent = greeter(user);