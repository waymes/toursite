import Link from '../../../components/common/link';

import './style.styl';

const Footer = () => (
  <footer className="footer container">
    <div className="footer__wrapper">
      <div>
        <ul className="footer__links">
          <li><Link href="/private-tours">Индивидуальные туры</Link></li>
          <li><Link href="/photos">Фотоотчеты</Link></li>
          <li><Link href="/contacts">Контакты</Link></li>
          <li><Link href="/reviews">Отзывы</Link></li>
          <li><Link href="/articles">Статьи</Link></li>
        </ul>
      </div>
      <div className="footer__contactInfo">
        <Link href="https://www.facebook.com/alex.zhossan" blank>
          <i className="fab fa-facebook-f" />
        </Link>
        <Link href="https://www.instagram.com/lifetripadventure/" blank>
          <i className="fab fa-instagram" />
        </Link>
        <Link href="tel:380937625988">
          <i className="fas fa-phone" />
          <span>+38(093)-76-25-988</span>
        </Link>
        <Link href="mailto:trpadvntr@gmail.com">
          <i className="fas fa-envelope" />
          <span>trpadvntr@gmail.com</span>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
