Name of Project: Mentor Connect
Dev Team Members: Sarah Teklemariam, Martha Quintanilla-Ramirez, Tanesha Brester, Vida Powell
Version: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

Deployment Links: 
- Client (Netlify): https://mentor-connect.netlify.app/ (VP) 
- Server (Heroku):https://mentor-connect-server.herokuapp.com/ (MQR)

Project start date: 6-14-2022
Summary of idea:
An app that connects minority children with an interest in a particular career path to a mentor. We would create our own database and seed it with mentors we identify through our tech networks!

What problem or pain point does it solve? a. Keep it high level without going into too much detail. (3-4 sentences is enough) “If you can’t see it, you can’t be it” - Many children in communities of color are not able to associate personally with someone in high-tech, or less prevalent careers. This app helps resolve this pain point by giving more transparency to the world beyond the child’s immediate experience.

Minimum Viable Product (MVP) definition. What is the minimum required for you to present on your demo day?

The app would have to display an authenticated user profile as well as match options from our database. Mentors previously worked with will be displayed upon login.

Getting Started
In order to build this app on their own machine and get it running, user should:

clone the github repo locally
create a .env and seed it with a MongoDB connection link and password
npm install
npm start (to launch)
npm i mongoose
npm seed.js (to send seed data for testing)
Architecture
Technologies used: JSx, JavaScript, React-Bootstrap, Localhost, GitHub, Netlify (client deployment), Heroku (server deployment), expressJS, node.js, MongoDB, Mongoose, axios.

User Stories
Title - One
User Story sentence - As a parental user I want to ensure the safety of my child.
Feature Tasks - We will implement kid friendly avatars instead of photographs on user profile.
Acceptance Tests - Ensure that API supplied avatars are rending properly on the profile.
Title - Two
User Story sentence - As a user I want to see my past sessions when I log into my app.
Feature Tasks - Implement Auth0 so that user only sees their information from the data base on login.
Acceptance Tests - Dev team members log into authenticated sessions and confirm theyre only seeing relevent information.
Title - Three
User Story sentence - As a user I want to be able to schedule future sessions with a mentor.
Feature Tasks - Implement scheduling solution - TBD. That allows user to select from mentors availibility times.
Acceptance Tests - Dev team members logging in.
Title - Four
User Story sentence - As a user I would to be able to select my mentor from a listing of available mentors and time schedules.
Feature Tasks - Implement accordion containing mentor avatar, name and next avaliable session.
Acceptance Tests - Dev member schedle sessions with dummy seed data.
Title - Five
User Story sentence - As a user I would like to encounter an aesthetically pleasing app environment
Feature Tasks - Implement attractive bootstrap styling
Acceptance Tests - Collect feedback from our practice sessions, and adjust accordingly.
Wireframe, Data, and Domain Models
Wireframe

Data Schema Draft 2

Domain Model Frontend

Domain Model Backend

Change Log
6/14/2022: initiated project, started wireframing, data, and domain modeling 6/15/2022: created client repo and initiated setup, collaborated on design, color, and accessibility goals 6/16/2022: created server, started coding frontend


Time Estimates
For each of the lab features, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

Name of feature: Frontend - Basic Page Rendering Approximate Time to "feature complete": one day.

Name of feature: Backend - API calls Approximate Time to "feature complete": still working

Name of feature: Backend - CRUD Approximate Time to "feature complete":

Name of feature: Approximate Time to "feature complete":


### Credit, Collaborations, and Resources
Unsplash
Hexx King - special thanks for helping us resolve Git issues and questions
