import "../css/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <div className="system-name">IMS</div>
      <div className="profile-section">
        <div className="profile-icon">Profile</div>
        <button className="logout-button">Logout</button>
      </div>
    </header>
  );
};

export default Header;
