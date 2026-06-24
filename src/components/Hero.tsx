type HeroProps = {
  mainBanner: string;
};

function Hero({ mainBanner }: HeroProps) {
  return (
    <section className="hero">

      <div className="container">

        <div className="main-banner">
          <img
            src={mainBanner}
            alt="라이프픽스 홈케어 메인배너"
          />
        </div>

        <div className="hero-service-line">
          🚽 화장실청소 · 🔧 생활수리 · 📺 인터폰설치 · 🌐 인터넷배선
        </div>

        <div className="hero-buttons">

          <a
            href="tel:01024107492"
            className="btn btn-primary"
          >
            📞 주간 상담
            <br />
            010-2410-7492
          </a>

          <a
            href="https://open.kakao.com/o/sp7bixzi"
            className="btn btn-kakao"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/kakao-talk.jpg"
              alt="카카오톡 상담"
              className="kakao-icon"
            />

            <strong>카카오톡 상담</strong>

            <span>야간 문의 가능</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;