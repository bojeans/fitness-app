# Components

## File for brainstorming functionality

### Login/Register

#### Input/Form component
- 2 input fields, for username and password
- 2 buttons, for login and register. 

#### Register
- React Form (check next.js docs first re forms)
- 6 inputs: firstName, lastName, date of birth, username, password, email.
- respective data types: string, string, string? (research date of birth selector APIs 3rd party), string (unique, research this), string (research password criteria), string
- 1x toggle button. Boolean. if 'true' > event handler for email confirmation. Again see react/nextjs docs, formspree etc. 
- 1x submit button. event handler redirects to login page but drops the 'register' button. 

#### Login
- Error Handling Component. Redirects back to initial page. 
- Successful redirect to landing page/welcome page. 

---------

### Landing Page (Welcome Page)

#### Mobile View
##### Navigation Bar
- Hamburger Menu. involves use state/effect. 
- Navigatable links to other pages, such as logout. 
##### Search Bar
- Next to Hamburger Menu
- Once '3' characters have been entered, only the user details containing characters mentioned should be displayed. 
- Pagination features should update to relevant Page number, for example Page 1 of 2, based on number of search results
- functionality to display dynamic number of results? for example 'displaying 6 of 15 results'
- error message when 0 results are displayed. 
##### Sort/Filter By functionality
- components for each one. 
- displayed horizontally.
- Filter by: admin, gender.
- Sort by: alphabetical first name, alphabetical last name, alphabetical username, oldest, youngest. 
##### User Details Card
- Includes all fields from form (except password), aligned horizontally as per wireframe.
- styled with tailwindcss
- 2 components. One to update user details. One to delete user. 
- components will link to backend put/patch, delete requests.
- admin mock user, won't be able to edit or delete other admin users. Just newly created regular users. 
- I will create a role for myself to edit or delete any admin users. Newly created users will be regular users, this will prevent database from exploding for demo purposes. 
##### Pagination
- dynamic update to replace 'x' in wireframe. 
- When on page 1, user should be unable to click the left arrow (ie no negative numbers). Appropriately styling to reflect this such as dimmed out arrow.
- Same logic on the right arrow for the final page. The 'final' page will be dynamic based off number of entries and/or search params. 
##### Footer
- tbc, prob my details and link to my portfolio. 

#### Tablet/Desktop View
##### Navigation Bar
- Home Page icon/logo in top left
- Expanded Nav Bar aligned to right of screen with appropriate spacing. 
##### Search Bar
- Below expanded Nav Bar Menu. Aligned to the right.
- Otherwise same as mobile details above.   
##### Sort/Filter By functionality
- displayed next to each other. 
- Otherwise same as mobile details above.  
##### User Details Card
- grid alignment as per wireframe, still displaying up to 6 per page. 
- Otherwise same as mobile details above.
##### Pagination
- same as above
##### Footer
- same as above 
