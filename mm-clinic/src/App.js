import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import './App.css';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg'
import logo from './images/logo.jpg'
function Home() {
  return <div>მთავარი</div>;
}

function Services() {
  return <div>სერვისები</div>;
}

function About() {
  return <div> <b>"მ.მ კლინიკა ქალთა ჯანმრთელობის სანდო ცენტრი თბილისში"</b>

  <p>კეთილი იყოს თქვენი მობრძანება <b>MM Clinic-ში</b>, რომელიც მდებარეობს ვაკეში, ტიციან ტაბიძის 43 ნომერში.<br></br> კლინიკა გამოირჩევა მაღალი კვალიფიკაციის და მრავალ წლიანი გამოცდილების მქონე ექიმებით რომლებსაც თავისუფლად შეგიძლიათ ანდოთ საკუთარი ჯანმრთელობა.</p>
  
  <p><b>მამუკა მგელიაშვილი</b> - მეან გინეკოლოგი 25 წლიანი გამოცდილებით,
  რომელიც ვალდებულია უზრუნველყოს ყველა პაციენტის კეთილდღეობა.
  მისი ცოდნისა და გამოცდილების სიმდიდრე, რომელიც დაგროვდა წლების განმავლობაში,
  ადასტურებს ერთგულებას საქმის მიმართ ,როდესაც ირჩევთ MM Clinic-ს,
  თქვენ ანდობთ თქვენს თავს გამოცდილ პრაქტიკოსს,
  რომლის მთავარი მიზანიც თქვენი ფიზიკური და ემოციური კეთილდღეობაა.</p>

      <img src={img1} alt="გინეკოლოგი მამუკა მგელიაშვილი ფოტო" />

  <p>ქალთა ჯანმრთელობის ყოვლისმომცველი მომსახურება:
  პროფესიონალი ექიმების გუნდში მამუკა მგელიაშვილთან ერთად,თქვენს ჯანმრთელობაზე იზრუნებს მაია ჭეიშვილი.</p>
  
   <p><b>მაია ჭეიშვილი</b> - ენდოკრინოლოგი:
  მაია ჭეიშვილი - ჩვენი წარმატებული ენდოკრინოლოგი,
   დამატებით გამოცდილებას მატებს ჩვენს კლინიკას.
    ჰორმონალური ჯანმრთელობის სპეციალიზებული ცოდნით მაია პროფესიონალურ დონეზე უზრუნველყოფს თქვენს ჯანმრთელობას</p>

    <img src={img2}></img>
  
  <p>თანამედროვე საშუალებები და მზრუნველი პერსონალი:<br></br><br></br>
  MM Clinic აღჭურვილია უახლესი ტექნიკით, აქ დაგხვდებათ სასიამოვნო ატმოსფერო და რაღა თქმა უნდა მეგობრული ჩვენი მეგობრული გუნდი რომელიც ეცდება ყველანაირად დააკმაყოფილოს თქვენი მოთხოვნილებები.</p>
  
  <i>თქვენი ჯანმრთელობა ჩვენი პრიორიტეტია</i>
  
  
  </div>;
}

function Contact() {
  return <div>ვაკე,ტიციან ტაბიძის N43</div>;
}



function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="navigation">
          <NavLink to={"/home"}>
        <img  src={logo} alt="Logo" className="logo" />
          </NavLink>
          <NavLink to="/home" activeClassName="active" exact>
          <i class="fa-solid fa-house-chimney-medical"></i>
          მთავარი
          </NavLink>
          <NavLink to="/services" activeClassName="active">
          <i class="fa-solid fa-stethoscope"></i>
          სერვისები
          </NavLink>
          <NavLink to="/about" activeClassName="active">
          <i class="fa-solid fa-people-group"></i>
          ჩვენს შესახებ
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
          <i class="fa-solid fa-phone"></i>
          კონტაქტი
          </NavLink>
        </div>

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
