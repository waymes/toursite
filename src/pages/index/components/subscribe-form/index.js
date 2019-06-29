import { useState } from 'react';
import { Form } from 'react-final-form';

import Input from '../../../../components/common/input';
import Button from '../../../../components/common/button';

import './style.styl';

const SubscribeForm = () => (
  <Form onSubmit={console.log}>
    {({ handleSubmit }) => (
      <form className="subscribeForm" onSubmit={handleSubmit}>
        <Input name="name" placeholder="Имя" required />
        <Input name="email" placeholder="E-mail" type="email" required />
        <Button type="submit">Подписаться</Button>
      </form>
    )}
  </Form>
);

export default SubscribeForm;
