type HeaderProps = {
  logo: string;
};

function Header({ logo }: HeaderProps) {
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

        <nav>
          <a href="#service">서비스 안내</a>
          <a href="#price">요금 안내</a>
          <a href="#contact">문의하기</a>

          <button
            onClick={() => {
              const password = prompt("관리자 비밀번호를 입력하세요.");

              if (password === "728072") {
                sessionStorage.setItem("admin", "ok");
                window.location.href = "/admin";
              } else {
                alert("비밀번호가 틀렸습니다.");
              }
            }}
            style={{
              background: "#1976d2",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              padding: "8px 16px",
              marginLeft: "20px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            관리자
          </button>

        </nav>

      </div>
    </header>
  );
}

export default Header;