import { FormEvent, useRef } from 'react';
import { useSetState } from 'react-use';
import {
  Button,
  FormGroup,
  Icon,
  Input,
  Paragraph,
  Spacer,
  Text,
  Textarea,
} from '@gilbarbara/components';
import { ASYNC_STATUS, request } from '@gilbarbara/helpers';
import { AsyncStatus, StringOrNull } from '@gilbarbara/types';

import Block from 'components/Block';
import Section from 'components/Section';

interface FormElements extends HTMLFormElement {
  day: HTMLInputElement;
  month: HTMLInputElement;
  year: HTMLInputElement;
}

interface State {
  errorMessage: string;
  messageLengthError: StringOrNull;
  status: AsyncStatus;
}

export default function Contact(): JSX.Element {
  const formRef = useRef<HTMLFormElement>(null);
  const [{ errorMessage, messageLengthError, status }, setState] = useSetState<State>({
    errorMessage: '',
    messageLengthError: null,
    status: ASYNC_STATUS.IDLE,
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, message } = event.target as FormElements;

    if (message.value.length < 10) {
      setState({
        messageLengthError: 'The message must be at least 10 characters long.',
      });

      return;
    }

    if (process.env.NODE_ENV === 'development') {
      setState({
        messageLengthError: null,
        status: ASYNC_STATUS.SUCCESS,
      });

      return;
    }

    setState({ messageLengthError: null, status: ASYNC_STATUS.PENDING });

    try {
      await request('https://submit-form.com/dopxII1I', {
        method: 'POST',
        body: { email: email.value, message: message.value },
      });
      setState({ status: ASYNC_STATUS.SUCCESS });

      formRef.current?.reset();
    } catch {
      setState({ errorMessage: 'Failed to send. Try again.', status: ASYNC_STATUS.ERROR });
    }
  };

  return (
    <Section data-component-name="contact">
      <Block title="Get In Touch">
        <Paragraph mb="xl" size="large">
          If you want to contact me or have a question, fill out the fields below and I'll get back
          to you as soon as possible.
        </Paragraph>
        <form ref={formRef} onSubmit={handleSubmit}>
          <FormGroup label="Your e-mail">
            <Input name="email" required type="email" />
          </FormGroup>
          <FormGroup label="Your message">
            <Textarea name="message" required />
          </FormGroup>
          <Spacer wrap={false}>
            <Button busy={status === ASYNC_STATUS.PENDING} type="submit">
              Send
            </Button>
            {messageLengthError && (
              <Spacer wrap={false}>
                <Icon name="info" size={20} />
                <Text>{messageLengthError}</Text>
              </Spacer>
            )}
            {errorMessage && (
              <Spacer wrap={false}>
                <Icon name="close-o" size={20} />
                <Text>{errorMessage}</Text>
              </Spacer>
            )}
            {status === ASYNC_STATUS.SUCCESS && (
              <Spacer wrap={false}>
                <Icon name="check-o" size={20} />
                <Text>Message sent successfully</Text>
              </Spacer>
            )}
          </Spacer>
        </form>
      </Block>
    </Section>
  );
}
