import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Information from "./pages/Information";
import {Quizselection} from "./pages/Quizselection";
import { Logout } from "./pages/Logout";
import Layout from "./components/Layout";
import { Quiz } from "./pages/Quiz";


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/quiz-selection" element={<Quizselection />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/info" element={<Information />} />
                        <Route path="/quiz/:sub/:no" element={<Quiz />} />

                        <Route path="*" element={<h1 className="d-flex justify-content-center align-items-center bg-dark vh-100 text-white">Page not found</h1>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;