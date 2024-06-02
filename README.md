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
   > - Point 1
   > - Point 2
   >
   > End of Explanation



2. **Understanding of Sequelize Usage (6 Marks)**
   - Describes the usage of Sequelize for database operations.
   - Explains the significance of `Contacts`, `Phones`, and Sequelize's `Op`.
   > Explanation: Your explanation
   :>
   > - Point 1
   > - Point 2
   >
   > End of Explanation
3. **Error Handling (3 Marks)**
   - Explains the error handling mechanism used in each controller function.
   - Demonstrates understanding of error responses and status codes.
   > Explanation: Your explanation
   :>
   > - Point 1
   > - Point 2
   >
   > End of Explanation

**Routes Code (10 Marks)**

1. **Understanding of Route Setup (2 Marks)**
   - Correctly explains the purpose of each route setup.
   - Describes how routes are mapped to controller functions.
   > Explanation: Your explanation
   :>
   > - Point 1
   > - Point 2
   >
   > End of Explanation

2. **RESTful API Endpoints (3 Marks)**
   - Demonstrates understanding of RESTful principles in defining endpoints.
   - Explains the HTTP methods used for each endpoint (POST, GET, PUT, DELETE).
   > Explanation: Your explanation
   :>
   > - Point 1
   > - Point 2
   >
   > End of Explanation

3. **Explain the use of each method (POST, DELETE, UPDATE, CREATE in sequelize) (5 Marks)**
   - Demonstrates understanding of RESTful principles in defining endpoints.
   - Explains the HTTP methods used for each endpoint (POST, GET, PUT, DELETE).
   > Explanation: Your explanation
   :>
   > - Point 1
   > - Point 2
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

export default Contact;za
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
   :>
   > - Point 1
   > - Point 2
   >
   > End of Explanation

2. **Functionality and Interaction (5 Marks)**
   - Explains the purpose and functionality of the `AddContact` component.
   - Describes how state variables (`name` and `address`) are used and updated.
   - Demonstrates understanding of the form submission process and interaction with the backend API.
   > Explanation: Your explanation
   :>
   > - Point 1
   > - Point 2
   >
   > End of Explanation

### HTML and JS  Interaction (7 Marks)

1. **Understanding of HTML and JS (4 Marks)**
   - Identifies and explains the JS elements used in the component.
   - Describes the role of JS in rendering HTML-like elements within the React component.
   > Explanation: Your explanation
   :>
   > - Point 1
   > - Point 2
   >
   > End of Explanation

2. **Form Input Handling (3 Marks)**
   - Explains how form inputs (`<input>`) are handled in the component.
   - Demonstrates understanding of controlled components and event handling (`onChange`).
   > Explanation: Your explanation
   :>
   > - Point 1
   > - Point 2
   >
   > End of Explanation

### Backend Interaction and Data Handling (7 Marks)

1. **Backend API Interaction (4 Marks)**
   - Describes the process of sending a POST request to the backend API (`http://localhost/api/contacts`).
   - Explains the structure of the request (method, headers, body) and how data is sent.
   > Explanation: Your explanation
   :>
   > - Point 1
   > - Point 2
   >
   > End of Explanation

2. **Data Handling and State Management (3 Marks)**
   - Explains how the response from the backend API is handled (`data.id`).
   - Describes how the component state (`contacts`, `setContacts`, `name`, `setName`, `address`, `setAddress`) is managed and updated.
   > Explanation: Your explanation
   :>
   > - Point 1
   > - Point 2
   >
   > End of Explanation



### Docker Integration Explanation (6 Marks)
1. Provides a basic explanation of Docker and its role in containerization (2 Marks)
   > Explanation: Your explanation
   :>
   > - Point 1
   > - Point 2
   >
   > End of Explanation
3. Containerization of Components.
   Explains how Docker containers are used to encapsulate different components such as the React app, database, and API.
   Interactions between Components (2 Marks)
   > Explanation: Your explanation
   :>
   > - Point 1
   > - Point 2
   >
   > End of Explanation
3. Describes how Docker enables communication between components.
   Discusses networking and linking mechanisms used to connect the React app with the API and database. (2 Marks)
   > Explanation: Your explanation
   :>
   > - Point 1
   > - Point 2
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
