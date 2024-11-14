Overview
This is a simple interactive webpage built using HTML, CSS, and JavaScript. The website showcases an image of Beyoncé, along with a floating button. When you click the button, a Grammy award image pops up. If you click anywhere else on the page, another pop-up appears with a photo of P Diddy and a humorous "RIP You" message.

Features
Beyoncé Image: Displayed on the main page.
Floating Button: When clicked, shows a Grammy award image in a pop-up.
Click Anywhere Else: Clicking outside the button triggers a pop-up showing P Diddy's photo and a “RIP You” message.
Responsive Design: The layout adjusts for different screen sizes, with images scaling as needed.
Technologies Used
HTML: For structuring the webpage and embedding images.
CSS: For styling the page, including layout, colors, and positioning.
JavaScript: For interactive features like pop-ups and event handling.
Project Structure
plaintext
Copy code
project-folder/
├── index.html        # HTML file containing the structure of the webpage
├── styles.css        # CSS file for styling the webpage
└── script.js         # JavaScript file for handling the interactive features
File Breakdown:
index.html:

Contains the main structure of the page.
Includes links to the external image URLs of Beyoncé and P Diddy.
Displays a floating button and two pop-up sections (one for the Grammy image and one for the RIP message).
styles.css:

Provides the visual design of the webpage.
Includes styles for the floating button, pop-ups, and responsive adjustments.
script.js:

Handles the functionality of the page.
Manages showing and hiding the pop-up images when the button is clicked or when you click elsewhere on the page.
How to Use
Clone or Download:

Clone or download this repository to your local machine.
Open index.html:

Open the index.html file in any web browser.
Interact with the Page:

Click on the floating button to display the Grammy image in a pop-up.
Click anywhere else on the page (excluding the button) to see the pop-up with P Diddy's photo and the "RIP You" message.
How it Works
HTML Structure:

The HTML file is divided into several sections:
A container that holds the Beyoncé image and the floating button.
Two pop-up divs: one for the Grammy award image and one for P Diddy’s photo.
CSS Styling:

The CSS file is responsible for positioning the images, styling the floating button, and making sure that the pop-ups appear centered on the page.
Pop-ups are hidden initially (display: none) and shown via JavaScript when triggered.
JavaScript Functionality:

The JavaScript listens for user interactions:
If the button is clicked, it shows the Grammy pop-up and hides the RIP pop-up.
If anywhere else on the page is clicked, it shows the RIP pop-up and hides the Grammy one.
Clicking outside of either pop-up will hide both of them.
The event listeners ensure that the pop-ups behave dynamically and interactively.
Image Sources
Beyoncé Image: Beyoncé Image URL
P Diddy Image: P Diddy Image URL
Customization
You can easily replace the pop-up images with your own by changing the image URLs in the HTML file. For example, you can replace https://people.com/... with the URL of your preferred image.

License
This project is open-source. Feel free to clone, fork, or modify the project as needed.

Additional Notes:
Ensure your browser allows pop-ups or has JavaScript enabled for full functionality.
This is a fun, interactive webpage meant for learning basic front-end web development concepts, including HTML structure, CSS design, and JavaScript interactivity.
