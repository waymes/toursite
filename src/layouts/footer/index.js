import Link from '../../components/common/link';

import './style.styl';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__socials">
        <Link href="https://facebook.com" blank>Facebook</Link>
        <Link href="https://instagram.com" blank>Instagram</Link>
      </div>
      <div className="footer__contactInfo">
        <a href="tel:380937625988"><strong>+380937625988</strong></a>
        <a href="mailto:trpadvntr@gmail.com">trpadvntr@gmail.com</a>
      </div>
      <div>
        <ul className="footer__links">
          <li><Link href="/articles">Статьи</Link></li>
          <li><Link href="/reviews">Отзывы</Link></li>
          <li><Link href="/private-tours">Индивидуальные туры</Link></li>
          <li><Link href="/photos">Фотоотчеты</Link></li>
          <li><Link href="/contacts">Контакты</Link></li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
