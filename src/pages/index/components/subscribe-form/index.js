import { useState } from 'react';

import Input from '../../../../components/common/input';
import Button from '../../../../components/common/button';

import './style.styl';

const SubscribeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form className="subscribeForm">
      <Input placeholder="Имя" value={name} onChange={e => setName(e.target.value)} />
      <Input placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
      <Button type="submit">Подписаться</Button>
    </form>
  );
};

export default SubscribeForm;
