import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Information from "./pages/Information";
import { Quizselection } from "./pages/Quizselection";
import { Logout } from "./pages/Logout";
import { Quiz } from "./pages/Quiz";
import Layout2 from "./components/Layouts/Layout2";
import { AdminUsers } from "./pages/AdminUsers";
import { AdminContacts } from "./pages/AdminContacta";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AdminUpdate } from "./pages/AdminUpdate";
// import AdminQuiz from "./pages/AdminQuiz";
import Demo from "./pages/css/Demo";


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/quiz-selection" element={<Quizselection />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/info" element={<Information />} />
                    <Route path="/quiz/:sub/:no" element={<Quiz />} />
                    <Route path="/admin" element={<Layout2 />}>
                        <Route path="users" element={<AdminUsers />}/>
                        <Route path="users/edit/:id" element={<AdminUpdate />}/>
                        <Route path="contacts" element={<AdminContacts />}/>
                        <Route path="quiz" element={<Demo />}/>
                    </Route>
                    <Route path="*" element={<h1 className="d-flex justify-content-center align-items-center bg-dark vh-100 text-white">Page not found</h1>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default App;