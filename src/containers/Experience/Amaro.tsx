import Heading from './Heading';
import Item from './Item';

export default function Amaro(): JSX.Element {
  return (
    <>
      <Heading period="Sep 2016 - Nov 2020" title="Front-end Tech Lead @ AMARO" />
      <Item>
        Research, design and implementation of the ecommerce front-end application with React and
        Redux with caching, offline support and pre-rendering for SEO and sharing.
      </Item>
      <Item>
        Orchestrate large-scale software integrations and deployments, including automated
        cross-browsing tests and page speed.
      </Item>
      <Item>
        Work closely with product and marketing teams to implement customer-oriented
        functionalities.
      </Item>
      <Item>Develop integrations with multiple vendors using serverless functions.</Item>
    </>
  );
}
