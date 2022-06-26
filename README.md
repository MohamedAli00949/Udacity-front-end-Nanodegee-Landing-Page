# Landing Page Project

### This is the First project for Udacity Front End Web Development Professional Nanodegree Program.



## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## Important Thing at my code

I have try creating the scroll functionality using scrollIntoView() method. And i have made this Function   
```
    function scrollToElement(event){
        if(event.target.nodeName === 'A'){
            const sectionId = event.target.getAttribute('id');
            const section = document.getElementById(sectionId);
            section.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        }
    };
``` 

I made some modifications to the HTML file and the CSS file and wrote all the codes for building the Navebar and the required variables and functions in the app .js file. 

I hope that my project will satisfy you.
Thank You
