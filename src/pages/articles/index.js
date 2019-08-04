import Router from 'next/router';

import GeneralLayout from '../../layouts/general';
import Section from '../../components/section';
import Title from '../../components/title';
import ShortInfo from '../../components/short-info';

export default () => (
  <GeneralLayout title="Статьи">
    <Section className="container px-3">
      <Title>Статьи</Title>
      <ShortInfo
        img="/static/articles/iran/photo-1.jpg"
        title="Почему нужно ехать в Иран?"
        onClick={() => Router.push('/article?id=1', '/article/1')}
        className="pointer"
      >
        Иран - одна из самых волшебных и недооцененных стран на нашей планете!
        Это красивая и безопасная страна, открытая для туристов со всего мира.
        Чрезвычайно разнообразная природа, местный колорит, впечатляющие исторические
        места и самый душевный народ - все это вы встретите в Иране.
      </ShortInfo>
    </Section>
  </GeneralLayout>
);
