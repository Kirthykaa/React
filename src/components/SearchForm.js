import './SearchForm.css';

export default function SearchForm() {
  return (
    <form action="" id="search-form">
      <input type="search" placeholder="Search here..." name="search-box" id="search-box" />
      <label htmlFor="search-box" className="fas fa-search"></label>
      <i className="fas fa-times" id="close"></i>
    </form>
  );
}
