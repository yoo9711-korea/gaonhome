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
        </nav>

      </div>
    </header>
  );
}

export default Header;