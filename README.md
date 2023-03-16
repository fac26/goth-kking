How to access:

https://goth-kking.vercel.app/
Deployment on main has the latest changes

Functionality:  

- Create an account, log in.
- Create a space and enter the space through dynamic routes
- Cool side bar and site logo
- Create a task and display it on the page (not added to db yet)
- If you're not currently in a space: members, tasks and leaderboard will be locked
- View space members and their points on the leaderboards (just trust us)

![image](https://user-images.githubusercontent.com/105356599/225071421-2ba73199-43d1-44e2-a982-c679911bd7b2.png)


- On the members page, you can invite people through a magic link, but that is a bit of a diversion. It's only signing in and out.
- Some components are not being used.

<details>
<summary>Project Documentation</summary>

## **User journey**

1. The user logs in and is redirected to the user profile page.

2. The user profile page gives the user the right to update their data, such as adding an avatar and adding or updating a username.

3. The left menu

- Home
- Spaces
- User Profile
- Members (disabled until the user selects a space)
- Tasks (disabled until the user selects a space)
- Leaderboard (disabled until the user selects a space)
 
4. Spaces

- Add space (user can add a new space)
- User can see all spaces he created or is part of
- When the user clicks on a space all the left menu bar’s links are unlocke, and the user is able to:
  *access the members page specific to the space where they can add new members,
  *access the tasks page and add new tasks to the space
  *access the leaderbord
 
5. Members

User can add a new member to the chosen space
 
6. Tasks

User can add a new task to the chosen space
User can assign a member of the space to the task
User can delete the task

### Introduction

 We are building a web app that allows members of a household or communal space receive automated fair rotations for tasks they want to share between them, mark them us Done so other people know that they have completed them and compete for a the first position on a Leaderboard based on points they assign to tasks on their own, according to their own criteria.
 
### Project scope

 The scope of this project is to help users create their own spaces, add members in said spaces, and rotate tasks fairly between them.
 We have decided to let users create Weekly rotations for tasks is the feature we want to provide as part of the MVP, and later on we plan to let them create daily rotations, as well.

### Project plan

User research informed our plan from the beginning. We had a Design Week, where we decided on features and constraints based on user research and usability testing on a clickable Figma prototype. Our first sprint was focused on building the skeleton on the website, linking all the pages together and deploying the website to a live environment. Our second sprint was focused on adding functionality such as adding tasks, deleting tasks, creating spaces and making sure our MVP is met.

### Requirement analysis

We will ensure our project is accessible to as many users as possible by spreading the word about it in coworking or other communal spaces we are active, like Space4 in London. 
There are no legal or regulatory requirements to consider in this project.

### Project learnings

Our team worked effectively for this project.
What we would do differently next time is work earlier on certain important features e.g. rotation.

### Research and findings

We had many findings from user testing. Users gave us opinions that we have considered on certain elements and their appearance (drop down menu, share link) as well as on what they want from a task rotation app and what data they want to view on the dashboard, the leaderboard etc. and how.

### Project outcomes

Our assumptions were mostly right. One user tester was neutral about the need for automatic rotations for teams in place of a paper rotation, which falsified our assuption that users would be positive about the need for automated task rotations.

### Recommendations and conclusions

The features we prioritise to build next, are a monthly rotation option and refactoring rotation.
Overall, the project was a success, and we learned a lot (about Supabase,Vercel etc)

### Software Development Lifecycle stages

With regards to planning, our team took on roles. These were Scrum Facilitator (Iman), DevOps (Karol), QA (Natalia and Georgia) and UX Lead (Konstantina).

Explain the roles and responsibilities of all people working within the software development lifecycle, and how they relate to the project (K2)

### Did these roles help your team work effectively?

Outline how teams work effectively to produce software and how to contribute appropriately 
(K6) Compare and contrast the requirements of a software development team, and how they would ensure that each member (including themselves) were able to make a contribution.

Analysis

What might be the intended and unintended consequences of building this product?......................
One unintended consequence might be competition between roommates.

Design

We planned user experience based on the user research and user testing.

What technical decisions did we make?
Server-render vs client-render vs both
Relational or non-relational or no DB
Self-hosted or platform-as-a-service
Frontend first vs DB first
Did you create a technical specification? No.

Review methods of software design with reference to functional/technical specifications and apply a justified approach to software development (K11, S11, S12)

Implementation/Build

We frequently checked code using Next.js to ensure it was good, and frequently consoled logged, with an aim of

creating logical and maintainable code to deliver project outcomes, explaining our choice of approach. (S1)

What interesting technical problems did you have to solve?

Outline and apply the rationale and use of algorithms, logic and data structures. (K9, S16)

How did you debug issues that arose?

Apply structured techniques to problem solving to identify and resolve issues and debug basic flaws in code (S7)


### Clone Repo

First, `clone` this repo to your local machine

Then, run `npm install` to install all dependencies

Now, just run `npm run dev` to run the app

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deploy

You can view a deployment of the application [here](https://goth-kking-oajofl86l-gothikk.vercel.app/)  

Review and justify their contribution to building, managing and deploying code into the relevant environment in accordance with the project specification (S10)

What problems did you encounter during deployment?

Maintain

Is it easy for someone make changes to the codebase.
A new person could quickly be onboarded to contribute.

</details>
