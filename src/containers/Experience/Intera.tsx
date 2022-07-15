import Heading from './Heading';
import Item from './Item';

export default function Intera(): JSX.Element {
  return (
    <>
      <Heading period="Mar 2021 - Apr 2022" title="Tech Lead @ Intera" />
      <Item>
        Research, design, and implement a multi-tenant serverless system for the Pre-ATS SaaS.
      </Item>
      <Item>
        Implement the web app and Chrome extension with React/Redux for the aforementioned SaaS.
      </Item>
      <Item>
        Refactor the existing microservices system to TypeScript with functional and integration
        tests.
      </Item>
      <Item>Rewrite the B2B front-end using React using XState with functional tests.</Item>
    </>
  );
}
