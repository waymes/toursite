import Link from 'next/link';

import './style.styl';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="footer__socials col-12 col-md-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
        <div className="footer__contactInfo col-12 col-md-4">
          <a href="tel:380937625988"><strong>+380937625988</strong></a>
          <a href="mailto:trpadvntr@gmail.com">trpadvntr@gmail.com</a>
        </div>
        <div className="col-12 col-md-4 d-flex">
          <ul className="footer__links">
            <li><Link href="/articles">Статьи</Link></li>
            <li><Link href="/reviews">Отзывы</Link></li>
            <li><Link href="/private-tours">Индивидуальные туры</Link></li>
            <li><Link href="/photos">Фотоотчеты</Link></li>
            <li><Link href="/contacts">Контакты</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
