import Link from '../../components/common/link';

import './style.styl';

const Footer = () => (
  <footer className="footer container">
    <div className="footer__contactInfo">
      <div>
        <i className="fas fa-phone" />
        <Link href="tel:380937625988">+38(093)-76-25-988</Link>
      </div>
      <div>
        <i className="fas fa-envelope" />
        <Link href="mailto:trpadvntr@gmail.com">trpadvntr@gmail.com</Link>
      </div>
    </div>
    <div>
      <ul className="footer__links">
        <li><Link href="/private-tours">Индивидуальные туры</Link></li>
        <li><Link href="/photos">Фотоотчеты</Link></li>
        <li><Link href="/contacts">Контакты</Link></li>
        <li><Link href="/reviews">Отзывы</Link></li>
        <li><Link href="/articles">Статьи</Link></li>
      </ul>
    </div>
    <div className="footer__socials">
      <Link href="https://facebook.com" blank>
        <i className="fab fa-facebook-f" />
      </Link>
      <Link href="https://instagram.com" blank>
        <i className="fab fa-instagram" />
      </Link>
    </div>
  </footer>
);

export default Footer;
