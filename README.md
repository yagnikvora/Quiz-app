# QuizMaster

QuizMaster is an online quiz platform built as a B.Tech Semester 4 project. It allows students to test their knowledge on programming topics through interactive multiple-choice quizzes, while giving administrators full control over the content and users on the platform.

---

## What Is This Project?

Imagine walking into a digital exam hall — you choose the subject you want to be tested on, decide how many questions you want to attempt, and the system instantly generates a fresh set of questions just for you. You answer each question one by one, get immediate feedback on whether you were right or wrong, and finally see your total score at the end. That is exactly what QuizMaster does, delivered entirely through a website you open in your browser.

The platform has two types of people who use it:

- **Students / Users** — People who create an account, log in, and take quizzes on Java, Python, or Data Structures.
- **Administrators** — Trusted people who manage the platform behind the scenes. They can add or remove quiz questions, manage user accounts, and read messages sent through the contact form.

---

## Who Is It For?

QuizMaster is designed for students who want to practise and self-assess their understanding of core programming subjects. It is particularly useful for:

- Students preparing for semester exams or viva.
- Anyone who wants to track how well they know a subject by taking repeated randomised tests.
- Teachers or instructors who want a simple tool to manage a question bank and let students self-evaluate.

---

## How the Website Is Organised

The website has two distinct areas:

### 1. The Public Area (what visitors see)
Anyone visiting the website (without an account) lands on an **Information page** that explains what the platform offers. From there, they can sign up or log in. There is also an **About** page and a **Contact** page where anyone can send a message to the team.

### 2. The Member Area (for logged-in students)
Once a student logs in, they get access to the main experience:

- A personalised **Home page** that greets them by name.
- A **Quiz Selection page** where they choose their subject and how many questions they want.
- The **Quiz itself**, which presents one question at a time with four answer choices.
- A **Score page** at the end, showing how many questions they got right.

### 3. The Admin Area (for administrators only)
Administrators have a separate, hidden section of the website that regular users cannot access. Inside it, they can:

- See a list of all registered users and edit or remove accounts.
- Read all messages that users have sent through the contact form.
- Add brand-new quiz questions to any subject.
- Edit existing questions if there is a mistake or if they need updating.
- Delete questions that are no longer relevant.

---

## Key Features Explained Simply

### Account System
Every person who wants to take a quiz must first create an account with their name, email, phone number, and a password. Passwords are protected — they are scrambled before being saved so that even the system administrators cannot read them. When you log in, the system gives you a digital pass (invisible to you) that keeps you logged in as you move between pages. When you log out, that pass is destroyed.

### Quiz Selection
Before starting a quiz, you pick:
- **Subject** — Java, Python, or Data Structures.
- **Number of questions** — Anywhere from 5 to 30.

The system then picks questions completely at random from its question bank, so you never get the same quiz twice. This randomisation happens on the server, not just in the browser, which makes it fair and unpredictable.

### Taking the Quiz
Each question appears one at a time with four possible answers. When you click an answer:
- If you are **correct**, your choice turns green.
- If you are **wrong**, your choice turns red and the correct answer is highlighted in green automatically.

You must select an answer before you can move to the next question — the "Next" button will not work otherwise. Once you have gone through all the questions, you see your final score displayed clearly.

### Contact Form
Any visitor to the website can send a message through the Contact page. These messages are stored and can be reviewed by administrators in their admin panel.

### Admin Question Management
Administrators can manage the entire question bank through an easy-to-use interface without touching any code. Each quiz question consists of:
- The question text.
- Four possible answer options.
- An indication of which option is the correct one (option 1, 2, 3, or 4).

Admins can create new questions, fix existing ones, or delete outdated ones at any time.

---

## How Information Is Stored

The platform stores three kinds of information in its database:

**User Accounts**
Each account stores the person's name, email address, phone number, and a scrambled (unreadable) version of their password. There is also a flag that marks whether the account belongs to an administrator or a regular student.

**Quiz Questions**
Questions are stored separately for each subject (Java, Python, Data Structures). Every question record contains the question itself, four answer choices, and a number indicating which choice is correct.

**Contact Messages**
Every message submitted through the contact form is saved in the database so administrators can read and respond to them later.

---

## How the System Is Built (Big Picture)

The project is split into two main parts that work together:

**The Frontend (what you see in your browser)**
This is the website itself — all the pages, buttons, forms, and visual effects you interact with. It runs entirely inside your browser. When you click something, the browser communicates with the backend to get or send information, then updates what you see without refreshing the whole page.

**The Backend (the engine behind the scenes)**
This part runs on a server (a computer that is always on and listening). It receives requests from the browser — like "give me 10 random Python questions" or "check if this password is correct" — processes them, talks to the database, and sends back the answer. The backend is split into two services:
- One handles everything related to **users and administration** (accounts, login, admin panel).
- One handles everything related to **quiz questions** (fetching, adding, editing, deleting questions).

**The Database**
This is where all the data lives permanently — user accounts, quiz questions, and contact messages. It stores information in an organised way so the backend can find exactly what it needs quickly.

---

## Security & Trust

The platform is built with several layers of protection to keep user data safe:

- **Passwords are never readable** — they are transformed into an unrecognisable string before being saved. Even if someone accessed the database, they could not read any password.
- **Only logged-in users can take quizzes** — if you are not logged in, the website will not let you access the quiz pages.
- **Only administrators can access the admin panel** — regular user accounts simply cannot reach those pages, even if they try typing the address directly.
- **All messages between the browser and server are validated** — the system checks that every piece of information it receives is in the correct format before doing anything with it, preventing bad data from causing problems.
- **The website only accepts requests from its own address** — the backend is configured to reject any request coming from an unknown source, protecting against outside interference.

---

## Summary

QuizMaster is a complete, working web application that demonstrates the full journey of building a modern website — from the design of what a user sees, to the logic that runs behind the scenes, to the database that stores everything. It covers user authentication, role-based access control, dynamic content generation, and administrative management, all tied together in one cohesive platform focused on making learning through quizzes simple, fair, and engaging.
