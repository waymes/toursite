import { Form } from 'react-final-form';

import Input from '../../../../components/input';
import Button from '../../../../components/button';

import { subscribeToTrip } from '../../../../store/actions/trips';

import './style.styl';

const SubscribeForm = () => (
  <Form onSubmit={subscribeToTrip}>
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
