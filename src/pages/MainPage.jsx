import Header from "../components/Header";
import Search from "../components/Search";
import Document from "../components/Document";
import "../css/mainPage.css";

const MainPage = () => {
  return (
    <div className="app">
      <Header />
      <Search />
      <Document />
    </div>
  );
};

export default MainPage;
