'use client';

import { SyntheticEvent, useRef, useState } from 'react';
import { Button, Input, Textarea } from '@heroui/react';

import Section from '~/components/Section';
import SectionTitle from '~/components/SectionTitle';

type Status = 'error' | 'idle' | 'pending' | 'success';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const message = data.get('message') as string;

    if (message.length < 10) {
      setError('The message must be at least 10 characters long.');

      return;
    }

    setError('');
    setStatus('pending');

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '6fa699ee-2e11-4e57-9f0a-cddaa0ce8e0c',
          name: data.get('name'),
          email: data.get('email'),
          message,
        }),
      });
      setStatus('success');
      formRef.current?.reset();
    } catch {
      setError('Failed to send. Try again.');
      setStatus('error');
    }
  };

  return (
    <Section id="contact">
      <SectionTitle>Contact</SectionTitle>
      <p className="mb-8 text-lg">
        Fill out the fields below and I'll get back to you as soon as possible.
      </p>
      <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 md:flex-row">
          <Input isRequired name="name" placeholder="Your name" />
          <Input isRequired name="email" placeholder="Your email" type="email" />
        </div>
        <Textarea isRequired minRows={4} name="message" placeholder="Your message" />
        <div className="flex items-center gap-4">
          <Button color="primary" isLoading={status === 'pending'} type="submit">
            Send
          </Button>
          {error && <p className="text-sm text-danger">{error}</p>}
          {status === 'success' && (
            <p className="text-sm text-success">Message sent successfully</p>
          )}
        </div>
      </form>
    </Section>
  );
}
