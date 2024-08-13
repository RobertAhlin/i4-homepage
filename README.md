# i4 Solutions AB Website

This project is a simple webpage for i4 Solutions AB. The page is designed to provide information about the company, offer contact details, and display customer testimonials. The design uses HTML, CSS, and JavaScript to create a responsive layout that adapts to different screen sizes.

## Project Structure

### Files

- **index.html**: Contains the HTML structure of the webpage.
- **styles.css**: Contains the CSS styles used for the layout and design.
- **scripts.js**: Contains JavaScript code to handle modal interactions.

### Directory Structure


```
│  
├── assets/  
│   ├── css/  
│   │   └── styles.css  
│   ├── js/  
│   │   └── scripts.js  
│   └── images/  
│       ├── Logo-v4-shadow.png  
│       └── bg.jpg  
│  
└── index.html  
```

## Features

- **Responsive Design**: The webpage layout is responsive and adapts to different screen sizes using CSS Flexbox and media queries.
- **Logo Display**: A centrally positioned logo that adjusts size based on the device screen size.
- **Information Sections**: 
  - **OM OSS**: Provides an overview of the company's services and mission.
  - **KONTAKT**: Displays contact information for reaching out to the company.
  - **OMDÖMEN**: Shares testimonials from clients about their experiences.
  - **VI ERBJUDER**: Describes the services offered by the company.
- **Background Image**: A fixed background image that covers the entire screen, providing an immersive visual effect.
- **Modals**: Interactive pop-up modals for "OM OSS", "OMDÖMEN", and "VI ERBJUDER" sections with additional information.


### 1. Modal Implementation
- **Modals Added**: Added interactive modals for the "OM OSS", "OMDÖMEN", and "VI ERBJUDER" sections to display additional information when users click "Läs mer...".
- **JavaScript Functionality**: Implemented JavaScript to open and close modals, including clicking outside the modal or on the close button (`&times;`).

We have improved the user experience of the modals on the website by implementing animations and transitions. These changes make interactions smoother and visually appealing, creating a more engaging interface for users.

1. **Slide-Down Entrance Animation**:
   - When a modal is opened, the content now slides up into view from above.
   - This effect is achieved using CSS keyframes (`slideDown`) and a smooth transition with an easing function.

2. **Slide-Left Exit Animation**:
   - When a modal is closed, the content slides out to the left, providing a dynamic exit effect.
   - A new CSS keyframe animation (`slideLeft`) is used to achieve this motion, enhancing the overall user experience.

3. **Synchronized Transitions**:
   - The opening and closing animations are synchronized with opacity transitions, ensuring a cohesive appearance.
   - JavaScript manages the animation states and timing, using `setTimeout` to ensure the modal hides only after the exit animation completes.

4. **Responsive and Accessible**:
   - These animations are designed to work across various devices and screen sizes, maintaining a consistent experience.
   - The animations add visual feedback without hindering accessibility or performance.

#### Technical Implementation

- **CSS Keyframes**: Defined two keyframe animations (`slideDown` for entrance and `slideLeft` for exit) to control the movement of the modal content.
  
- **JavaScript Logic**: Updated the modal logic to apply the appropriate animations on open and close events:
  - `slideDown` animation is applied when a modal is shown.
  - `slideLeft` animation is triggered when the modal is closed, with a delay before removing the modal to allow the animation to finish.

### 2. CSS Enhancements
- **Modal Styling**: Added styling for modals to ensure they are visually distinct and centered on the screen.
- **Responsive Adjustments**: Improved CSS for better alignment and responsiveness across different devices and screen sizes.

### 3. Code Refactoring
- **Code Organization**: Moved JavaScript code to a separate `scripts.js` file for better organization and maintainability.
- **Cleaned HTML Structure**: Updated the HTML structure to ensure semantic and accessible markup.




## How to Run

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/i4-solutions-website.git


2. **Open the Project**: 
Navigate to the project directory and open index.html in your web browser to view the webpage.

## Future Enhancements  
- Add more detailed content to each section and modals.  
- Implement additional pages for services and portfolio.  
- Integrate a contact form for inquiries.  
- Add animations and transitions for modals to enhance user experience.  