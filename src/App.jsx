import { useState } from "react";

export default function App() {
  const [work, setWork] = useState(() => {
    const savedWork = localStorage.getItem("work");
    return savedWork ? JSON.parse(savedWork) : [];
  });
  function handleAddWork(newWork) {
    setWork((work) => {
      const updatedWork = [...work, newWork];
      localStorage.setItem("work", JSON.stringify(updatedWork));
      return updatedWork;
    });
  }
  function handleRemoveWork(deleteSub) {
    const newArr = work.filter((wo) => wo.id !== deleteSub.id);
    localStorage.setItem("work", JSON.stringify(newArr));
    setWork(newArr);
  }
  return (
    <main>
      <Navbar>
        <NavMenu />
        <Search />
      </Navbar>
      <Todo>
        <NewTodo onAddWork={handleAddWork} />
        <TodoItems work={work} onDeleteItem={handleRemoveWork} />
      </Todo>
    </main>
  );
}
function Navbar({ children }) {
  return (
    <header>
      <section>
        <div>
          <p>
            این یک برنامه برنامه روزانه قدرتمند و کارا است. شما می توانید از این
            برنامه جهت استفاده روزانه بهره ببرید
          </p>
        </div>
        <div className='img-container'>
          <img src='./src/todo.svg' alt='todolist' />
        </div>
      </section>
      <nav>{children}</nav>
    </header>
  );
}
function Search() {
  return (
    <form>
      <input type='text' placeholder='جستجو ...' />
    </form>
  );
}
function NavMenu() {
  return (
    <ul className='nav-list-container'>
      <li className='nav-list-item'>
        <a href=''>اطلاعات بیشتر</a>
      </li>
      <li className='nav-list-item'>
        <a href=''>درباره ما</a>
      </li>
    </ul>
  );
}
function Todo({ children }) {
  return (
    <section className='todo'>
      <div className='app'>{children}</div>
    </section>
  );
}
function NewTodo({ onAddWork }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("بانک");
  const [time, setTime] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const newChore = {
      title,
      category,
      time,
      id: Date.now(),
    };
    onAddWork(newChore);
  }
  return (
    <form className='new-todo' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='عنوان'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className='category'>
        <label htmlFor='select'>دسته بندی</label>
        <select
          name='select'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value='بانک'>بانک</option>
          <option value='خرید'>خرید</option>
          <option value='دوستانه'>دورهمی با دوستان</option>
          <option value='نظافت شخصی'>نظافت شخصی</option>
        </select>
      </div>
      <div className='time'>
        <label htmlFor='time'>ساعت</label>
        <input
          type='time'
          name='time'
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button className='btn btn-sumbit' type='submit'>
        تایید
      </button>
    </form>
  );
}
function TodoItems({ work, onDeleteItem }) {
  return (
    <ul className='item-list'>
      {work.map((wo, i) => (
        <TodoItem key={i} work={wo} onDeleteItem={onDeleteItem} />
      ))}
    </ul>
  );
}
function TodoItem({ work, onDeleteItem }) {
  return (
    <li className='item'>
      <div>
        <span className='title'>عنوان: {work.title}</span>
        <span className='category'>دسته بندی: {work.category}</span>
        <span className='time'>زمان تعیین شده: {work.time}</span>
      </div>
      <button className='btn btn-delete' onClick={() => onDeleteItem(work)}>
        حذف
      </button>
    </li>
  );
}
