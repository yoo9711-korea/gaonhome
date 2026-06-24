import mainBanner from "./assets/main-banner.png";
import "./App.css";
import logo from "./assets/대표이미지.png";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import kakaoIcon from "./assets/kakao-talk.jpg";
import cmSong from "./assets/cm-song.mp3";

function App() {
  return (
    <div className="app">

     <Header logo={logo} />

      <Hero mainBanner={mainBanner} />

      <section id="service" className="section">

        <div className="container">

          <h2>서비스 안내</h2>

          <p className="section-desc">
            전문적인 기술과 친절한 서비스로 고객님의 공간을 케어합니다
          </p>

         <div className="cards">

  <div className="card">
    <h3>🚽 화장실 청소</h3>
    <ul>
      <li>변기 청소</li>
      <li>세면대 청소</li>
      <li>물때 제거</li>
      <li>곰팡이 제거</li>
      </ul>
  </div>

  <div className="card">
    <h3>🔧 생활수리</h3>
<ul>
  <li>수전 교체</li>
  <li>샤워기 교체</li>
  <li>문고리 교체</li>
  <li>도어클로저 교체</li>
   <li>선반 설치</li>
</ul>
  </div>

  <div className="card">
    <h3>💡 전기설비</h3>
    <ul>
      <li>LED 등 교체</li>
      <li>콘센트 교체</li>
      <li>스위치 교체</li>
      <li>환풍기 교체</li>
      </ul>
  </div>

  <div className="card">
    <h3>📺 인터폰 설치</h3>
    <ul>
      <li>인터폰 교체</li>
      <li>비디오폰 교체</li>
      <li>CCTV 설치(가정용)</li>
      </ul>
  </div>

  <div className="card">
    <h3>🌐 통신배선</h3>
    <ul>
      <li>인터넷 랜선 설치</li>
      <li>랜포트 작업</li>
      <li>공유기 위치 변경</li>
      <li>배선 정리</li>
      </ul>
  </div>

</div> 

</div>

</section>

          <section id="price" className="price-section">

        <div className="container">

        <h2>요금 안내</h2>

      <div className="price-table-box">

  <table className="price-table">

    <thead>
      <tr>
        <th>분류</th>
        <th>작업내용</th>
        <th>가격</th>
      </tr>
    </thead>

    <tbody>

      <tr>
        <td rowSpan={10}>🚽 화장실 청소 / 부품교체</td>
        <td>기본 화장실 청소</td>
        <td>50,000원~</td>
      </tr>
      
       <tr>
        <td>벽걸이 선풍기 설치</td>
        <td>30,000원~ + 자재비 별도</td>
      </tr>
        <tr>
        <td>곰팡이 제거</td>
        <td>30,000원~</td>
      </tr>
      <tr>
        <td>샤워기 교체</td>
        <td>30,000원 ~ + 자재비 별도</td>
      </tr>
       <tr>
        <td>세면대 수전 교체</td>
        <td>30,000원 ~ + 자재비 별도</td>
      </tr>
      <tr>
        <td>변기 부속 교체</td>
        <td>50,000원 ~ + 자재비 별도</td>
      </tr>
       <tr>
        <td>문고리 교체</td>
        <td>30,000원 ~ + 자재비 별도</td>
      </tr>
      <tr>
        <td>도어클로저 교체</td>
        <td>50,000원 ~ + 자재비 별도</td>
      </tr>
        <tr>
        <td>싱크대 수전 교체</td>
        <td>30,000원 ~ + 자재비 별도</td>
        </tr>

       <tr>
        <td>하수구 뚫음(가정집)</td>
        <td>80,000원 ~ </td>
       </tr>
      <tr>
        <td rowSpan={5}>💡 전기설비</td>
        <td>LED 등 교체</td>
        <td>30,000원 ~ + 자재비 별도</td>
      </tr>
      <tr>
        <td>스위치 교체</td>
        <td>20,000원 ~ + 자재비 별도</td>
      </tr>
      <tr>
        <td>콘센트 교체</td>
        <td>20,000원 ~ + 자재비 별도</td>
      </tr>
      <tr>
        <td>센서등 교체</td>
        <td>50,000원 ~ + 자재비 별도</td>
      </tr>
      <tr>
        <td>환풍기 교체</td>
        <td>별도 견적</td>
      </tr>

      <tr>
        <td rowSpan={3}>📺 인터폰 · CCTV</td>
        <td>인터폰 교체</td>
        <td>현 장 견 적</td>
      </tr>
      <tr>
        <td>비디오폰 교체</td>
        <td>현 장 견 적</td>
      </tr>
      <tr>
        <td>CCTV 설치</td>
        <td>별도 견적</td>
      </tr>

      <tr>
        <td rowSpan={4}>🌐 통신배선</td>
        <td>인터넷 랜선 설치</td>
        <td>50,000원~</td>
      </tr>
      <tr>
        <td>랜포트 작업</td>
        <td>50,000원~ + 자재비 별도</td>
      </tr>
      <tr>
        <td>공유기 위치 변경</td>
        <td>50,000원~ + 자재비 별도</td>
      </tr>
      <tr>
        <td>배선 정리</td>
        <td>30,000원~ + 자재비 별도</td>
      </tr>

    </tbody>

  </table>

</div>

<p className="price-notice">
  ※ 교체 작업의 경우 자재비는 별도입니다.
  ※ 고객이 직접 구매한 제품도 설치 가능합니다.
  ※ 현장 상황에 따라 금액은 변동될 수 있습니다.
</p>   

     <div className="travel-fee-box">

  <h3>🚚 출장비 안내</h3>

  <table className="travel-fee-table">

    <thead>
      <tr>
        <th>지역</th>
        <th>출장비</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>광명시</td>
        <td>무료 또는 기본요금 포함</td>
      </tr>

      <tr>
        <td>구로구 · 금천구 · 영등포구 · 관악구 · 안양시 · 부천시</td>
        <td>20,000원</td>
      </tr>

      <tr>
        <td>서울 기타 지역</td>
        <td>20,000원 ~ 30,000원</td>
      </tr>

      <tr>
        <td>성남 · 하남 · 남양주 · 의정부 · 고양 일부</td>
        <td>30,000원 ~</td>
      </tr>

      <tr>
        <td>파주 · 양주 · 포천 · 가평 등 경기 외곽</td>
        <td>별도 협의</td>
      </tr>

       </tbody>

        </table>
    
          <p className="price-notice">
  ※ 작업 난이도, 주차환경, 이동거리 등에 따라 출장비는 변동될 수 있습니다.
</p>

</div>

  </div>
   
  
</section>

<section id="contact" className="contact-section">
        <div className="container contact-grid">

          <div className="contact-box">
            <h3>📞 주간 전화 상담</h3>
            <h2>010-2410-7492</h2>
            <p>상담시간 08:00 ~ 22:00</p>
          </div>

   <a
  href="https://open.kakao.com/o/sp7bixzi"
  className="mobile-kakao"
  target="_blank"
  rel="noreferrer"
>
  <img
    src={kakaoIcon}
    alt="카카오톡"
    className="kakao-icon"
  />
  카카오톡 상담 야간 문의 가능
</a>

          <div className="contact-box">
            <h3>📍 서울 · 경기 지역</h3>
            <h2>출장 가능</h2>
            <p>언제든 편하게 문의주세요!</p>
          </div>

        </div>

      </section>
      <section className="cm-song-section">

  <div className="container">

    <h2>🎵 라이프픽스 홈케어 CM송</h2>

    <p>
      생활수리 · 부분청소 · 홈케어 전문
    </p>

    <audio controls>
      <source src={cmSong} type="audio/mpeg" />
      브라우저가 오디오를 지원하지 않습니다.
    </audio>

  </div>

</section>

      <div className="mobile-contact">
  <a
  href="https://open.kakao.com/o/sp7bixzi"
  className="mobile-kakao"
  target="_blank"
  rel="noreferrer"
>
  <img
    src={kakaoIcon}
    alt="카카오톡"
    className="kakao-icon"
  />

  <div className="kakao-text">
    <div>카카오톡 상담</div>
    <div>야간 문의 가능</div>
  </div>
</a>
</div>

<Footer />

      <button
        onClick={() => {
          const password = prompt("관리자 비밀번호를 입력하세요");

          if (password === "728072") {
            sessionStorage.setItem("admin", "ok");
            window.location.href = "/admin";
          } else {
            alert("비밀번호가 틀렸습니다.");
          }
        }}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "10px 15px",
          cursor: "pointer",
          zIndex: 9999,
        }}
      >
        관리자
      </button>

    </div>
  );
}

  export default App;