import { useState } from "react";

export default function App() {
  return (
    <main>
      <Navbar />
    </main>
  );
}
function Navbar() {
  return (
    <header>
      <div>
        <p>
          این یک برنامه برنامه روزانه قدرتمند و کارا است. شما می توانید از این
          برنامه جهت استفاده روزانه بهره ببرید
        </p>
      </div>
      <div className='img-container'>
        <img src='./src/todo.svg' alt='todolist' />
      </div>
      <nav>
        <ul className='list-container'>
          <li className='list-item'>اطلاعات بیشتر</li>
          <li className='list-item'>درباره ما</li>
        </ul>
      </nav>
    </header>
  );
}
