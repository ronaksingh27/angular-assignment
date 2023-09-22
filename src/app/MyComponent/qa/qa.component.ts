import { Component } from '@angular/core';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QAComponent {
  values=[
      {
        "question": "What is REST API?",
        "answer": "REST API stands for Representational State Transfer Application Programming Interface. It is an architectural style for designing networked applications. REST APIs use HTTP requests to perform CRUD (Create, Read, Update, Delete) operations on resources, which are represented as URLs. They are known for being stateless, meaning each request from a client to a server must contain all the information needed to understand and process the request. REST APIs often return data in formats like JSON or XML."
    },
    {
        "question": "What are HTTP and HTTPS protocols? Explain in detail the following HTTP methods: GET, POST, PUT, DELETE.",
        "answer": "HTTP (Hypertext Transfer Protocol) and HTTPS (HTTP Secure) are protocols used for communication between a client (usually a web browser) and a server. HTTP is not secure, while HTTPS encrypts data for secure communication.\n\n1. GET: GET is used to request data from a server. It retrieves data from a specified resource without modifying it.\n\n2. POST: POST is used to send data to a server to create a new resource. It can also be used to submit form data to be processed.\n\n3. PUT: PUT is used to update an existing resource on the server. It replaces the current representation of the resource with the new one.\n\n4. DELETE: DELETE is used to request the removal of a resource on the server. It deletes the specified resource."
    },
    {
        "question": "Explain the following with a component diagram (PNG image): 3-tier architecture",
        "answer": "I cannot provide images, but I can describe a 3-tier architecture. A 3-tier architecture consists of three layers: the presentation layer, the application layer, and the data layer. These layers are interconnected, with each layer having a specific role:\n\n1. Presentation Layer: This is the top layer and is responsible for the user interface. It interacts with users and displays information. Examples include web browsers or mobile app interfaces.\n\n2. Application Layer: The middle layer handles business logic and processing. It receives requests from the presentation layer, processes them, and interacts with the data layer. This layer contains application servers or services.\n\n3. Data Layer: The bottom layer manages data storage and retrieval. It stores data in databases and responds to requests for data from the application layer. Examples include databases like MySQL or PostgreSQL.",
        "imagePath" : "https://www.researchgate.net/profile/Santi-Caballe/publication/277187696/figure/fig1/AS:613958725672966@1523390575480/3-tier-architecture.png"
    },
    {
        "question": "What are different array methods in JavaScript? Explain with examples.",
        "answer": "JavaScript provides various array methods to manipulate arrays. Some common array methods include:\n\n1. `push()`: Adds one or more elements to the end of an array.\nExample:\n```javascript\nlet fruits = ['apple', 'banana'];\nfruits.push('cherry');\n// Result: ['apple', 'banana', 'cherry']\n```\n\n2. `pop()`: Removes the last element from an array and returns it.\nExample:\n```javascript\nlet fruits = ['apple', 'banana', 'cherry'];\nlet removedFruit = fruits.pop();\n// Result: removedFruit = 'cherry', fruits = ['apple', 'banana']\n```\n\n3. `map()`: Creates a new array by applying a function to each element of the original array.\nExample:\n```javascript\nlet numbers = [1, 2, 3, 4, 5];\nlet doubled = numbers.map(num => num * 2);\n// Result: doubled = [2, 4, 6, 8, 10]\n```\n\nThese are just a few examples of array methods in JavaScript."
    },
    {
        "question": "What is the difference between 'let,' 'var,' and 'const' in JavaScript?",
        "answer": "In JavaScript, 'let,' 'var,' and 'const' are used to declare variables, but they differ in terms of scope and mutability:\n\n1. 'var': Variables declared with 'var' have function-level scope. They are hoisted to the top of their containing function or global scope. 'var' variables can be redeclared within the same scope, and they are not block-scoped.\n\n2. 'let': 'let' introduced block-level scoping. Variables declared with 'let' are only accessible within the block or function where they are defined. They cannot be redeclared in the same scope.\n\n3. 'const': 'const' is used to declare constants. Like 'let,' it is block-scoped, but 'const' variables cannot be reassigned after they are assigned a value. However, if a 'const' variable holds an object or array, the properties or elements of that object or array can be modified.\n\nExample:\n```javascript\nvar x = 10;\nlet y = 20;\nconst z = 30;\n\nif (true) {\n    var x = 50; // This reassigns the 'x' declared outside the block.\n    let y = 40; // This creates a new 'y' variable within the block.\n    const z = 60; // This creates a new 'z' variable within the block.\n}\n\nconsole.log(x); // Result: 50\nconsole.log(y); // Result: 20 (not affected by the block)\nconsole.log(z); // Result: 30 (not affected by the block)\n```\n"
    },
    {
        "question": "What is AJAX? Explain with examples.",
        "answer": "AJAX (Asynchronous JavaScript and XML) is a set of web development techniques that allows web applications to send and receive data from a server without having to refresh the entire page. It enables asynchronous communication with the server, which means that data can be retrieved or sent in the background without disrupting the user's experience.\n\nExample of using AJAX with JavaScript and the XMLHttpRequest object:\n```javascript\nlet xhr = new XMLHttpRequest();\n\nxhr.onreadystatechange = function () {\n    if (xhr.readyState === 4 && xhr.status === 200) {\n        let response = JSON.parse(xhr.responseText);\n        console.log(response);\n    }\n};\n\nxhr.open('GET', 'https://api.example.com/data', true);\nxhr.send();\n```\nIn this example, an AJAX request is made to retrieve data from a server asynchronously, and the response is processed when it's received.\n"
    },
    {
        "question": "What is a single-page application?",
        "answer": "A single-page application (SPA) is a web application or website that loads a single HTML page and dynamically updates the content as the user interacts with it. SPAs use JavaScript to fetch data from the server and manipulate the DOM to provide a smoother and more responsive user experience. Navigation within an SPA typically occurs without full page reloads, making it feel more like a desktop application.\n\nFrameworks like React, Angular, and Vue.js are commonly used to build SPAs."
    },
    {
        "question": "What is a component in Angular?",
        "answer": "In Angular, a component is a fundamental building block of the user interface (UI). It is a self-contained and reusable unit that encapsulates a part of the application's functionality and UI. Angular components consist of three main parts:\n\n1. Template: The HTML markup that defines the component's view or UI structure.\n\n2. Class: The TypeScript class that defines the component's behavior, properties, and methods.\n\n3. Metadata: Decorators and metadata that provide information about the component, such as its selector and any dependencies.\n\nComponents are used to create a modular and organized structure for Angular applications, making it easier to manage and maintain complex UIs."
    },
    {
        "question": "Explain with syntax the following directives: ngFor, ngIf",
        "answer": "In Angular, directives are special markers in the HTML that tell Angular to do something to a DOM element. Two commonly used directives are 'ngFor' and 'ngIf.' Here's how they are used with syntax:\n\n1. ngFor: It is used for repeating elements in the HTML based on an iterable data source, like an array. It is often used for creating lists or tables.\nSyntax:\n```html\n<ul>\n    <li *ngFor=\"let item of items\">{{ item }}</li>\n</ul>\n```\nIn this example, 'ngFor' iterates over the 'items' array and creates a list item for each element in the array.\n\n2. ngIf: It is used for conditionally rendering elements in the HTML based on a Boolean expression.\nSyntax:\n```html\n<div *ngIf=\"condition\">This element is displayed if the condition is true.</div>\n```\nIn this example, 'ngIf' displays the div element only if the 'condition' is true."
    }
  ];
}
