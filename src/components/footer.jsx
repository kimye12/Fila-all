import logoImg from "../assets/logo.png";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-center">
        <img src={logoImg} alt="fila logo" />
        <div className="footer-center-middle">
          <p>Misto Hoildings IR</p>
          <ul className="footer-li">
            <li>
              <a href="#">매장안내</a>
            </li>
            <li>
              <a href="#">공지사항</a>
            </li>
            <li>
              <a href="#">MEMBERSHIP</a>
            </li>
            <li>
              <a href="#">단체 판매</a>
            </li>
            <li>
              <a href="#">대리점 개설 문의</a>
            </li>
            <li>
              <a href="#">입찰 참여 안내</a>
            </li>
          </ul>
          <div className="text-box">
            <p>
              서울특별시 성북구 보문로 35 미스토코리아(주)     대표이사 : 김지헌
            </p>
            <p>
              사업자등록번호 : 716-81-01573  사업자정보확인    통신판매업신고 :
              제 2024-서울성북-0914 호
            </p>
            <p>개인정보 보호책임자 : 이학우</p>
            <p>
              본 사이트의 상품이미지 저작권은 미스토코리아(주)에 있으며, 내용의
              무단복제를 금합니다.
            </p>
            <p>콘텐츠산업진흥법에 의한 콘텐츠보호안내</p>
          </div>
        </div>
        <div className="footer-center-right">
          <ul className="icon-box">
            <li className="ir_pm instargram">
              <a href="#">instargram</a>
            </li>
            <li className="ir_pm facebook">
              <a href="#">facebook</a>
            </li>
            <li className="ir_pm youtube">
              <a href="#">youtube</a>
            </li>
            <li className="ir_pm kakao">
              <a href="#">kakaotalk</a>
            </li>
          </ul>
          <ul className="footer-li-2">
            <li>
              <a href="#">통합회원 이용약관</a>
            </li>
            <li>
              <a href="#">개인정보 처리방침</a>
            </li>
            <li>
              <a href="#">제보센터</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
