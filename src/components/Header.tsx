type HeaderProps = {
  logo: string;
};

function Header({ logo }: HeaderProps) {
  const openAdmin = () => {
    const password = prompt("관리자 비밀번호를 입력하세요.");

    if (password === "728072") {
      sessionStorage.setItem("admin", "ok");
      window.location.href = "/admin";
    } else if (password !== null) {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <img src={logo} alt="라이프픽스 홈케어" />

          <div>
            <h1>라이프픽스 홈케어</h1>
            <p>화장실청소 · 생활수리 · 인터폰 · 통신배선</p>
          </div>
        </div>

        <div className="header-right">
          <nav className="main-nav">
            <a href="#service">서비스 안내</a>
            <a href="#price">요금 안내</a>
            <a href="#contact">문의하기</a>
          </nav>

          <button className="admin-btn" onClick={openAdmin}>
            관리자
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;