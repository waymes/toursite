import React, { PureComponent } from 'react';

import GeneralLayout from '../../layouts/general';
import Input from '../../components/common/input';
import Button from '../../components/common/button';
import EButton from '../../components/common/element-button';
import Link from '../../components/common/link';
import Slider from './components/slider';

import { tempAdventures, factList } from './constants';

import './style.styl';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.toursRef = React.createRef();
    this.subscribeFormRef = React.createRef();
  }

  scrollIntoView = (ref) => {
    if (!ref) return false;
    ref.scrollIntoView({ behavior: 'smooth' });
    return true;
  }

  scrollToTours = () => {
    this.scrollIntoView(this.toursRef.current);
  }

  scrollToSubscribeForm = () => {
    this.scrollIntoView(this.subscribeFormRef.current);
  }

  renderMenu() {
    return (
      <nav className="homepage__menu">
        <ul className="menulist">
          <li>
            <EButton className="link" onClick={this.scrollToTours}>
              Путешествия
            </EButton>
          </li>
          <li><Link href="/calendar">Календарь</Link></li>
          <li><Link href="/about">О нас</Link></li>
          <li>
            <EButton className="menulist__subscribeButton" onClick={this.scrollToSubscribeForm}>
              Подписаться
            </EButton>
          </li>
        </ul>
      </nav>
    );
  }

  render() {
    return (
      <GeneralLayout className="homepage">
        <section className="homepage__section1">
          <Slider />
          <div className="background__content">
            <div className="homepage__headerHolder">
              <header className="container">
                <Link href="/" className="homepage__logo">
                  Trip
                  <span>Adventure</span>
                </Link>
                {this.renderMenu()}
              </header>
            </div>
            <div className="container">
              <h1 className="homepage__moto">Живи. Люби. Путешествуй.</h1>
            </div>
            <div className="homepage__scrolldown" onMouseEnter={this.scrollToTours}>
              <i />
              <i />
            </div>
          </div>
        </section>
        <section className="homepage__section2 container" ref={this.toursRef}>
          <h2 className="homepage__title">Выбери приключение:</h2>
          <div className="homepage__adventures">
            {tempAdventures.map(adventure => (
              <figure key={adventure.id} draggable>
                <img src={adventure.img} alt={adventure.title} />
                <figcaption>{adventure.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>
        <section className="homepage__section3 container">
          <h2 className="homepage__title">10 фактов:</h2>
          <ol>
            {factList.map((fact, id) => (
              <li className="fact" key={fact.title}>
                <div className="fact__number">{id + 1}</div>
                <div>
                  <h4 className="fact__title">{fact.title}</h4>
                  <p className="fact__details">{fact.details}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <section className="homepage__section4" ref={this.subscribeFormRef}>
          <h2 className="homepage__title homepage__title_secondary">
            Новые приключения - в Вашем почтовом ящике:
          </h2>
          <form className="homepage__subscriptionForm">
            <Input placeholder="Ваше имя" />
            <Input placeholder="Ваше e-mail" />
            <Button type="submit">Подписаться</Button>
          </form>
        </section>
      </GeneralLayout>
    );
  }
}

export default Home;
