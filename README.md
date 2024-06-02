# A2-StudentName-StudentID

## General Instruction

1. Clone this repository on your local repository straight away, so you can modify the code in your local repository.
2. Ensure that every commit made in your local repository is pushed to your GitHub repository.
3. Your commits should accurately reflect your assignment progress and serve as a reference for tracking your work.

## General Deadline

1. Deadline Task 1: Monday week 8 / 29th April 2024 (5 marks) - **Database Model**

2. Deadline Task 2: Monday week 10 / 13rd May 2024 (25 marks) - **Database and REST API**

3. Deadline Task 3: Monday week 12 / 27th May 2024 (30 marks) - **User Interface using React Component**

4. Deadline Task 4: Monday week 12 / 27th May 2024 (40 marks) - **Innovation**.
   For this case (Task 4 - Innovation, you should be able
   to create a new design using new models -
   not phone and contact). This effort should be initiated from the early phase. Need to be consulted by me.

By following the procedure Task 1 - Task 3, you can reach maximum marks of 60. To get the bonus (Task 4), you need to design the new schema, using different database platfrom, applying the update button, and much more functionalities. You need to consult with the lecturer to apply this.
## Task 1 - Define the model (5 Marks)
### Marking Criteria ###

1. Provide the GitHub username and clone to your local repository following this link (1 mark)

2. Complete the creation of js files under the model's folder (4 mark) - subject to Documentation (explanation)

3. Your elaboration is not limited to expalanation of:

   a. What is the purpose of this Sequelize model?

   b. How postgresql is created inside the docker container? In which part of code?

### Explanation about the Contact and Phone Model (Adjust the model if you decided to do up to Task 4) ###


**Contact Model Code**
```javascript
// You need to put your code contact.model.js here
//and explain as much as you can
module.exports = (sequelize, Sequelize) => {
   const Contact = sequelize.define("contact", {
      id: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         primaryKey: true,
      },
      name : {
         type: Sequelize.STRING
      },
      address: {
         type: Sequelize.STRING
      },
   });

   return Contact;
};
```

> Explanation: Your explanation
>
> Something that you can consider:
> What does each attribute in the Contact model represent?
> The contact name represent the first
>
> What type of data does each attribute hold?
> What are the constraints applied to each attribute?
> What is the significance of the autoIncrement: true property for the id attribute?
> - Point 1
> - Point 2
> -
>End of Explanation



**Phone Model Code**


```javascript
// You need to put your code contact.model.js here
//and explain as much as you can
module.exports = (sequelize, Sequelize) => {
   const Phone = sequelize.define("phone", {
      id: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         primaryKey: true,
      },
      phonetype: {
         type: Sequelize.STRING
      },
      number: {
         type: Sequelize.STRING
      },
      contactId: {
         type: Sequelize.INTEGER,
         references: {
            model: 'contacts',
            key: 'id',
         }
      }
   });

   return Phone;
};
```

> Explanation: Your explanation
>
> Something that you can consider:
> What does each attribute in the Phone model represent?
>
> What type of data does each attribute hold?
>
> What are the constraints applied to each attribute?
>
> What is the significance of the autoIncrement: true property for the id attribute?
erty for the id attribute?
>
>End of Explanation



## Task 2 - Database and REST API (25 Marks)

### Marking Criteria ### 

**Controllers Code (15 Marks)**

```javascript
// You need to put your code contact.controller.js here
import React, { useState } from 'react';

function AddContact({ onAdd }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, address });
    setName('');
    setAddress('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default AddContact;

// Contact.js
import React from 'react';

function Contact({ contacts }) {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;


```

```javascript
// You need to put your code phones.controller.js here

```


```javascript

```


1. **Understanding of Controller Functions (6 Marks)**
   - Explain the purpose of each controller function (create, findAll, findOne, update, delete).
   - Explanations of what each function does.

   > Explanation: Your explanation
   :>
   > - 1. Create - It creates or adds new resources to the system
   > - 
   > - receives new data
     - validates the given data
     - responds to the required query
   2. FindAll- To find all the resources
    - uses GET response to find the resources
    - Returns the response containing all the list data
    3. FindOne - To find any one particular single resource by using its identifier
    - GET request with parameters
    - validates
    4. Update -  to change the existing resources
    5. Delete - to remove the resources from the system or list
    

   >
   > End of Explanation


2. **Understanding of Sequelize Usage (6 Marks)**
   - Describes the usage of Sequelize for database operations.
   - Explains the significance of `Contacts`, `Phones`, and Sequelize's `Op`.
   - Sequelize is a Node.js ORM (Object-Relational Mapping) tool that simplifies database operations by allowing developers to interact with SQL databases using JavaScript objects. It abstracts the database interactions, enabling developers to perform CRUD (Create, Read, Update, Delete) operations without writing raw SQL queries.
   - 
Contacts:
Represents a table/model in the database that stores information about individuals.
Typically includes fields like name, email, phone number, etc.
They are used to manage and organize contact information within the application.
Phones:
It often represents a related table/model that stores multiple phone numbers for a single contact.
Illustrates a one-to-many relationship where one contact can have multiple phone numbers.
Helps in managing complex data relationships within the application.

Sequelize's Op:
A module providing a set of operators for constructing complex query conditions.
Enables advanced SQL operations like comparisons, logical operations, and pattern matching.
   >
   > End of Explanation
3. **Error Handling (3 Marks)**
   - Explains the error handling mechanism used in each controller function.
   - Demonstrates understanding of error responses and status codes.
   > Explanation: Your explanation
Error Handling Mechanism:
Each controller function should include mechanisms to catch and handle errors gracefully.
Common approaches include using try-catch blocks and middleware to intercept and manage errors.

   >
   > End of Explanation

**Routes Code (10 Marks)**

1. **Understanding of Route Setup (2 Marks)**
   - Correctly explains the purpose of each route setup.
   - Describes how routes are mapped to controller functions.
   > Explanation: Your explanation
   :> Purpose of Each Route Setup:
Routes define the endpoints of an API and determine how requests are handled.
Each route corresponds to a specific URL path and HTTP method (GET, POST, PUT, DELETE), determining the type of operation (fetch, create, update, delete) to be performed.
   >
   > End of Explanation

2. **RESTful API Endpoints (3 Marks)**
   - Demonstrates understanding of RESTful principles in defining endpoints.
   - Explains the HTTP methods used for each endpoint (POST, GET, PUT, DELETE).
   > Explanation: Your explanation
   :>   Each Route Setup:
Routes define the endpoints of an API and determine how requests are handled.
Each route corresponds to a specific URL path and HTTP method (GET, POST, PUT, DELETE), determining the type of operation (fetch, create, update, delete) to be performed.
   >
   > End of Explanation

3. **Explain the use of each method (POST, DELETE, UPDATE, CREATE in sequelize) (5 Marks)**
   - Demonstrates understanding of RESTful principles in defining endpoints.
   - Explains the HTTP methods used for each endpoint (POST, GET, PUT, DELETE).
   > Explanation: Your explanation
   :> 1. POST (Create):
Purpose: To create a new resource.
Usage in REST: Defines an endpoint where new data can be submitted to the server.
Sequelize Method: create()

2. GET (Read):
Purpose: To retrieve resources.
Usage in REST: Defines endpoints for fetching data.
Sequelize Methods: findAll(), findOne(), findByPk()

3. PUT (Update):
Purpose: To update an existing resource entirely.
Usage in REST: Defines an endpoint where a resource can be updated with new data.
Sequelize Method: update()

4. PATCH (Partial Update):
Purpose: To update part of an existing resource.
Usage in REST: Defines an endpoint for making partial updates to a resource.
Sequelize Method: update()

5. DELETE (Delete):
Purpose: To remove a resource.
Usage in REST: Defines an endpoint for deleting data.
Sequelize Method: destroy()









   >
   > End of Explanation

## Task 3 - User Interface using React Component and explain how the docker work (30 Marks)

```javascript
// You need to put every code of js here e.g. Contact js

//import React, { useState } from 'react';

function AddContact({ onAdd }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, address });
    setName('');
    setAddress('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default AddContact;

// Contact.js
import React from 'react';

function Contact({ contacts }) {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
```

```javascript
// You need to put every code of js here

//
```
---

## Marking Criteria

### React Component Structure and Functionality (10 Marks)

1. **Understanding of React Component Structure (5 Marks)**
   - Identifies and explains the basic structure of a React functional component.
   - Describes the purpose of each section of the component (state, functions, JSX rendering).
   > Explanation: Your explanation
   :> Function Definition:
Purpose: Define the functional component, which acts as a blueprint for the UI element. The component name should start with an uppercase letter to distinguish it from regular HTML elements.
State Management:
   Purpose: Use the useState hook to declare state variables and their corresponding setter functions. This allows the component to manage and respond to changes in data.
Event Handlers and Functions:
    Purpose: Define functions that handle user interactions or perform component-specific logic. Event handlers (like onClick, and onSubmit) manage user input and interactions.
JSX Rendering:
    Purpose: Return a JSX structure that describes the UI to be rendered. JSX is a syntax extension that allows writing 
     HTML-like code within JavaScript, making it easier to visualize the UI structure.
   > End of Explanation

2. **Functionality and Interaction (5 Marks)**
   - Explains the purpose and functionality of the `AddContact` component.
   - Describes how state variables (`name` and `address`) are used and updated.
   - Demonstrates understanding of the form submission process and interaction with the backend API.
   > Explanation: Your explanation
   :> The AddContact component in a React application allows users to input and submit new contact information (name and address). It contains a form with fields for the contact's name and address, and a submit button. When the form is submitted, the component passes the entered contact information to a parent component or directly interacts with an API to store the new contact.
    > State Variables (name and address)
Initialization: The component initializes two state variables, name, and address, using the useState hook. These variables hold the current values of the form fields.
Updating State: The state variables are updated through onChange event handlers attached to the respective input fields. As the user types into the fields, the setName and setAddress functions update the state to reflect the current input values.
   >
   > End of Explanation

### HTML and JS  Interaction (7 Marks)

1. **Understanding of HTML and JS (4 Marks)**
   - Identifies and explains the JS elements used in the component.
   - Describes the role of JS in rendering HTML-like elements within the React component.
   > Explanation: Your explanation
   JS Elements Used in the Component
Imports: import React, { useState } from 'react';

Explanation: Imports the React library and the useState hook for managing state within the functional component.
Functional Component Definition: function AddContact({ onAdd }) { ... }

Explanation: Defines the AddContact component as a function that takes onAdd as a prop, which is a function passed from a parent component to handle adding a new contact.
State Management: const [name, setName] = useState(''); and const [address, setAddress] = useState('');
>    Event Handlers - onChange={(e) => setName(e.target.value)}: Updates the name state variable when the user types in the name input field.
onChange={(e) => setAddress(e.target.value)}: Updates the address state variable when the user types in the address input field.
onSubmit={handleSubmit}: Handles the form submission, preventing the default behavior and calling the onAdd function with the current state values.

   >
   > End of Explanation

2. **Form Input Handling (3 Marks)**
   - Explains how form inputs (`<input>`) are handled in the component.
   - Demonstrates understanding of controlled components and event handling (`onChange`).
   > Explanation: Your explanation
   :> In the AddContact component, form inputs are controlled using controlled components and event handling (onChange). State variables (name and address) hold the current input values, which are updated in real-time as the user types. This approach ensures synchronization between the input value and the component's state, providing a dynamic user experience with easier validation and error handling.
   >
   > End of Explanation

### Backend Interaction and Data Handling (7 Marks)

1. **Backend API Interaction (4 Marks)**
   - Describes the process of sending a POST request to the backend API (`http://localhost/api/contacts`).
   - Explains the structure of the request (method, headers, body) and how data is sent.
   > Explanation: Your explanation
   :> The AddContact component sends a POST request to the backend API (http://localhost/api/contacts) to add a new contact. This request includes JSON-formatted data representing the contact's name and address in its body. The server processes this data, typically storing it in a database, and responds accordingly. The client-side code then handles the response, updating the UI as needed to reflect the success or failure of the operation.
   > End of Explanation

2. **Data Handling and State Management (3 Marks)**
   - Explains how the response from the backend API is handled (`data.id`).
   - Describes how the component state (`contacts`, `setContacts`, `name`, `setName`, `address`, `setAddress`) is managed and updated.
   > Explanation: Your explanation
   v
   >
   > End of Explanation



The response from the backend API typically includes the unique identifier (data.id) of the newly added contact. This id can be used for further interactions.

State management involves managing the list of contacts (contacts) and input values (name and address). These states are updated using their corresponding setter functions (setContacts, setName, setAddress) based on user input or API responses.z
   > End of Explanation
3. Containerization of Components.
   Explains how Docker containers are used to encapsulate different components such as the React app, database, and API.
   Interactions between Components (2 Marks)
   > Explanation: Your explanation
   :>
   > -  Docker containers are used to encapsulate components like the React app, database, and API. Each component is packaged into a Docker image for consistency and isolation. The React app communicates with the API container via HTTP requests, while the API container interacts with the database container for data operations. This modular setup enables scalable and maintainable architectures.
   >
   > End of Explanation
3. Describes how Docker enables communication between components.
   Discusses networking and linking mechanisms used to connect the React app with the API and database. (2 Marks)
   > Explanation: Your explanation
   :>The React app container and the API container are placed in the same Docker network.
      The React app sends HTTP requests to the API container using its container name or IP address.
Similarly, the API container communicates with the database container within the same Docker network.
Docker's networking mechanisms ensure seamless communication between containers, facilitating the interaction between different application components.
  
   >
   > End of Explanation

---

### Additional Notes:
- Marks will be awarded based on the clarity, accuracy, and depth of explanations provided by the student.
- The explanations should demonstrate a solid understanding of React component structure, JS, state management, and interaction with backend APIs.
- Use of appropriate technical terminology and clarity of expression will be considered in assessment.
- Maximum marks for each criterion may be divided among sub-criteria based on the depth of understanding demonstrated.
- **Marks for each task will be allocated based on how much of the required functionalities the students have successfully implemented. If a student only partially implements the required features, their marks will reflect the proportion of the code that was successfully applied.**

---
