import Heading from './Heading';
import Item from './Item';

export default function Verios(): JSX.Element {
  return (
    <>
      <Heading period="Dec 2014 - Aug 2026" title="Front-end Developer @ Vérios" />
      <Item>
        Develop the client-side app with React and Flux using Web Workers to offload data processing
        and D3 to render sophisticated visualizations.
      </Item>
      <Item>Migrate R algorithms to JavaScript.</Item>
      <Item>
        Collect, define and translate user requirements into project designs and implementation
        plans.
      </Item>
      <Item>Develop the company website with a highly customized WordPress theme.</Item>
    </>
  );
}
