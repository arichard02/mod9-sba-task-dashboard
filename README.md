React Dashboard Application

Overview
In this assessment, you will apply the skills you have developed throughout your React training to build a functional, real-world dashboard application. This project will test your understanding of React components, state management, TypeScript integration, form handling, and component composition.

You will create a Task Management Dashboard using React and TypeScript. The final deliverable will include a GitHub repository with your project and a written reflection on your approach and the challenges you faced.


Instructions
Initialize Your Project
Create a new React TypeScript project using Vite:


npm create vite@latest task-dashboard -- --template react-ts
cd task-dashboard
npm install
Install additional dependencies as needed:


npm install @heroicons/react tailwindcss postcss autoprefixer
npx tailwindcss init -p
Above is simply an example, you will need to install the dependencies you need for your project.

Organize Your Folder Structure
Your project should have the following structure:


task-dashboard/
    ├── src/
    │   ├── components/
    │   │   ├── TaskList/
    │   │   │   ├── TaskList.tsx
    │   │   │   └── TaskItem.tsx
    │   │   ├── TaskForm/
    │   │   │   └── TaskForm.tsx
    │   │   ├── TaskFilter/
    │   │   │   └── TaskFilter.tsx
    │   │   └── Dashboard/
    │   │       └── Dashboard.tsx
    │   ├── types/
    │   │   └── index.ts
    │   ├── utils/
    │   │   └── taskUtils.ts
    │   ├── App.tsx
    ├── main.tsx
    └── package.json


Project Planning

Requirements Analysis
Review the requirements below and plan your implementation approach.
Create a project plan outlining the components, state management strategy, and TypeScript interfaces you’ll need.
Consider how you’ll handle form validation, state updates, and component communication.

Component Planning
Plan the hierarchy and communication between components.
Design the TypeScript interfaces for your components and data structures.
Consider how you’ll implement the filtering and sorting functionality.

Implementation

Type Definitions (types/index.ts)

Define TypeScript interfaces for:
Task data structure
Component props
Form data
Filter options

Task Management Components

TaskList Component:
Implement list rendering with proper key management
Handle task status updates
Implement task addition
Implement task deletion
Add sorting functionality

Add a search bar to search for tasks

TaskForm Component:
Create a controlled form for adding/editing tasks
Implement form validation
Handle form submission

Show validation feedback

TaskFilter Component:
Implement filtering by status and priority
Add search functionality

Show active filter indicators

Dashboard Component:
Compose all components into a cohesive dashboard
Implement responsive layout
Add task statistics

Handle component communication

Utility Functions

Implement task filtering logic
Add sorting functions
Create validation helpers
Add date formatting utilities
Data Persistence
Add localStorage integration
Implement data export/import
Enhanced UI
Implement task reordering
Integrating a drag and drop library could be a fun challenge for this feature
Add support for both light and dark mode
Add a toggle switch to the UI for changing the theme
Pass the theme state down to the components that need it
Add animations and/or transitions for state changes
Testing and Finalizing
Test Your Application:

Test all form validations
Verify filtering and sorting functionality
Check responsive design
Test component interactions
Code Review:

Ensure TypeScript types are properly implemented
Check for proper component composition
Verify state management approach
Review error handling
Documentation:

Add comments to components and functions
Create a README.md with setup instructions
Document component props and usage
Deliverables
You must submit the following items via Canvas:

GitHub Repository:

Link to your GitHub repository with the complete project code
Ensure your repository is publicly accessible
Reflection Document:

Write a reflection addressing:
How you implemented React and TypeScript features
The challenges you encountered and how you overcame them
Your approach to component composition and state management
Submission Guidelines
GitHub Repository: Submit the link to your repository on Canvas.
Reflection Document: Upload your written reflection as a separate file or include it in your repository as a Markdown file.
Ensure that your submission is complete and follows all instructions.