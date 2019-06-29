import { useSelector } from 'react-redux';
import { Form } from 'react-final-form';

import Modal from '../../../../components/common/modal';
import Input from '../../../../components/common/input';
import Textarea from '../../../../components/common/textarea';
import Button from '../../../../components/common/button';

import { closeRegisterToTripModal, registerToTrip } from '../../../../store/actions/trips';
import { isRegisterToTripModalOpenSelector } from '../../../../store/selectors/trips';

import './style.styl';

export default () => {
  const isRegisterToTripModalOpen = useSelector(isRegisterToTripModalOpenSelector);
  return (
    <Modal isOpen={isRegisterToTripModalOpen} onClose={closeRegisterToTripModal}>
      <Form onSubmit={registerToTrip}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="register-to-trip-modal">
            <h2>Хотите поехать в это путешествие?</h2>
            <h5>Отправьте заявку:</h5>
            <Input name="email" placeholder="E-mail" type="email" required />
            <Input name="name" placeholder="Имя" required />
            <Input name="phone" placeholder="Телефон" />
            <Textarea name="question" placeholder="Задайте свой вопрос, если есть" />
            <Button type="submit">Отправить</Button>
            <Button onClick={closeRegisterToTripModal} color="secondary">Отмена</Button>
            <small>Мы не передаем информацию третьим сторонам.</small>
          </form>
        )}
      </Form>
    </Modal>
  );
};
