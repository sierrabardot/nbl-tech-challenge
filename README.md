# The Corner Store

This web application - <b>The Corner Store</b> - was developed using React.js and JavaScript and deployed on Vercel. The purpose of the challenge was to fetch a list of items from the [Dummy JSON Items API](https://dummyjson.com/docs), allowing users to view the product list and details of the selected item. The aim of this challenge was to demonstrate understanding of basic web development, state management and API integration.

### [➡️ View the Live Demo](https://nbl-tech-challenge-2p7ybo5la-sierras-projects-733a4379.vercel.app/)

## Installation and Setup

[Click here](https://nbl-tech-challenge-2p7ybo5la-sierras-projects-733a4379.vercel.app/) to view the live demo, or install using the simple steps below:

1. Clone the repository: `git clone https://github.com/sierrabardot/nbl-tech-challenge.git`
2. Navigate to the project directory: `cd nbl-tech-challenge`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and navigate to `http://localhost:5173` to view the application in action.

## My Approach

My approach to this challenge was methodical and organised, ensuring that each phase was carefully planned and executed to produce a high-quality MVP.

### Stage 1: Planning

This stage involved brainstorming the structure of the app and hierarchy of components. I researched options for state management and developed a logical process to complete the tasks necessary for the MVP. By the end of this stage, I was ready to start coding.

### Stage 2: Developing

I chose Vite with React.js due to my familiarity with their functionalities and their performance benefits. Vite offers a fast and efficient development environment, which is ideal for building React applications and, from my experience, a powerful alternative to `create-react-app`.

Key steps taken to develop the app:

-   <b>Routing:</b> I used React Router to create dynamic nested URLs (e.g., https://www.example.com/details/3).

-   <b>State Management:</b> State was managed globally by using React's built-in Context option with the `useContext()` hook. Initially, I considered creating a separate function for API calls for individual products. However, after reviewing the JSON data, I realised that by managing state globally, I would eliminate the need for additional API calls and avoid prop-drilling.

-   <b>Error Handling:</b> Basic error handling was implemented by initialising a catch-all route `(*)` using React Router and by adding an ErrorBoundary. Small changes were made thoughout the development process to add conditional rendering of components based on the state of loading.

### Stage 3: Testing

I used Vitest as an alternative to Jest, which has compatability issues with Vite. Comprehensive unit tests were undertaken on several key components, resulting in the identification and resolution of the following issues:

1.  <b>Issue: State Initialisation</b>

    The `products` state was initially set to an empty array `[]` but later changed to `null` due to rendering errors in the product list and individual product components.

    <b>Solution:</b>
    I tested how components handled both empty arrays and `null` values. Using null as the initial state value caused errors, so I reverted to initialising products with an empty array. Additionally, I implemented conditional rendering based on the length of the products array to handle cases where the array is empty.

2.  <b>Issue: Error Handling for Invalid Product IDs</b>

    While testing `Details.jsx`, using an invalid product ID triggered the error boundary.

    <b>Solution:</b>
    I used the `find` method on the `products` array to check for the existence of a product before attempting to render its details. This approach, combined with conditional rendering to display an error message if the product does not exist, resolved the issue.

### Stage 4: UX/UI & Accessibility

I kept the design simple, utilising Bootstrap's classes to ensure responsiveness across devices. CSS Modules were used to style similar elements differently and a global styles file was created at the root to manage background colors and other common styles.

To ensure accessibility, the following measures were taken:

-   Added ARIA labels and roles.
-   Improved font colors to ensure sufficient contrast and readability.
-   Included altervative text for all images to support users with visual impairments.

By implementing these accessibility best practices, I ensured that the application is usable by people with disabilities, enhancing the overall user experience and inclusivity of the application.

### Stage 5: Performance Optimisation

I used Lighthouse in Chrome DevTools to assess the performance of the app. Initially, I was surprised by the low score of 47, as I had limited experience with performance optimization. After extensive research, I focused on reducing the Cumulative Layout Shift (CLS), which was the primary issue affecting the score. To improve the performance, I implemented the following optimisations:

1. Using Lazy Loading of Images and Blurring of Images Out of the Viewport in ProductList.jsx

2. Setting Defined Dimensions for Images and Layout to Avoid Content Shifting

#### Outcomes

By implementing these changes, I was able to increase the Lighthouse performance score from 47 to 83. While this is not a perfect score, it is a significant improvement. I plan to continue researching and implementing additional performance enhancements to further improve the app's performance and UX.

These optimisations not only improved the Lighthouse score but also enhanced the overall usability of the application, providing a smoother and more responsive experience.

## Tech Stack

-   React.js
-   JavaScript
-   Bootstrap
-   [Dummy JSON Items API](https://dummyjson.com/docs)
-   Vercel
-   HTML/CSS
