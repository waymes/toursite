import Link from 'next/link';

import GeneralLayout from '../../layouts/general';
import Input from '../../components/common/input';
import Button from '../../components/common/button';

import { tempAdventures, factList } from './constants';

import './style.styl';

const Home = () => (
  <GeneralLayout className="homepage">
    <section className="homepage__section1">
      <header className="container">
        <div className="homepage__logo">
          Trip
          <span>Adventure</span>
        </div>
        <nav>
          <ul>
            <li><Link href="/">Путешествия</Link></li>
            <li><Link href="/calendar">Календарь</Link></li>
            <li><Link href="/about">О нас</Link></li>
          </ul>
        </nav>
      </header>
    </section>
    <section className="homepage__section2 container">
      <h2 className="homepage__title">Выбери приключение:</h2>
      <div className="row">
        {tempAdventures.map(adventure => (
          <figure className="col-12 col-sm-6 col-lg-4" key={adventure.id}>
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
          <li className="fact">
            <div className="fact__number">{id + 1}</div>
            <div>
              <h4 className="fact__title">{fact.title}</h4>
              <p className="fact__details">{fact.details}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
    <section className="homepage__section4">
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

export default Home;
