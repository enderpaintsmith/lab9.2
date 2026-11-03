# Lab 9.2: Props and State — Interactive Character Counter

## Project Overview

For this lab, I developed an interactive character counter using React and TypeScript. The purpose of the project was to practice creating reusable components, managing state, handling user events, and passing information between components through props.

The application allows users to enter text and receive real-time feedback on their character count, word count, and estimated reading time. It also includes configurable writing goals, a progress bar, and messages indicating whether the user has reached or exceeded their word-count targets.

## Technologies Used

The project was developed using React, TypeScript, Vite, HTML, and CSS. React manages the component structure and updates to the interface, while TypeScript provides type checking through interfaces. Vite was used for project setup, development, and production builds.

CSS was used to create a responsive layout with a forest-green and sage color palette, styled input fields, statistics cards, and writing-goal indicators.

## Component Structure

I organized the application into three reusable components: `TextInput`, `StatsDisplay`, and `CharacterCounter`.

**TextInput** manages the textarea and responds to user input through an `onChange` event handler. It uses local state to track the current input and a callback prop to communicate changes to its parent component.

**StatsDisplay** receives the calculated statistics through props and displays the character count, word count, and estimated reading time. Keeping this component separate allows it to focus on presenting information rather than calculating it.

**CharacterCounter** manages the main application state and calculations. It determines the word count by trimming unnecessary whitespace and separating words using a regular expression. Reading time is estimated using an average of 200 words per minute. The component also manages writing goals, calculates progress toward the maximum word count, and displays conditional feedback messages.

## Props, State, and Event Handling

One of the primary objectives of this lab was understanding how React components communicate through props and manage changing information through state.

I used TypeScript interfaces to define the expected properties for each component, including optional values and callback functions. Props allow the parent component to pass information to its children, while callbacks allow child components to notify their parents when an event occurs.

The `useState` hook manages the text entered by the user. Whenever the textarea changes, an event handler updates the state, causing React to re-render the component and recalculate the displayed statistics.

This helped me understand how React handles changes to the interface differently from traditional DOM manipulation.

## Styling and Responsive Design

I used CSS classes to organize the application's styling and maintain consistency between components. The interface includes a centered layout, rounded containers, a styled textarea, and separate sections for writing statistics and goals.

CSS Grid was used to arrange the statistics into columns, while media queries adjust the layout for smaller screens. Conditional messages provide additional visual feedback when users reach or exceed their writing goals.

## Challenges and Reflection

One of the main challenges was understanding how props, state, and callback functions work together. I spent additional time reviewing JavaScript object destructuring, TypeScript interfaces, and how functions can be passed between components.

I also worked through the differences between JSX syntax and regular JavaScript, particularly the use of curly braces, function parameters, and type annotations. Debugging a missing closing brace in the `CharacterCounter` component helped reinforce the importance of understanding how functions and JSX return statements are structured.

This project helped me better understand how React builds on JavaScript concepts while introducing a component-based approach to application development. I gained more experience organizing code into reusable components, managing state, and using TypeScript to establish consistent data structures.

Overall, the lab strengthened my understanding of React fundamentals and gave me a better foundation for developing more complex applications.

## Running the Application

After cloning the repository, navigate into the project directory and install the dependencies
npm install

Open the local URL provided by Vite to view the application in dev server.
npm install

To generate a production build:
npm run build



## Future Improvements

Future improvements could include allowing users to customize their writing goals directly through the interface, adding progress tracking for reading-time targets, and using `localStorage` to preserve text between sessions. These features would provide additional opportunities to practice React state management and data persistence.