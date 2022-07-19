import { ReactNode } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { useAppContext } from 'modules/context';
import { theme } from 'modules/theme';

interface Props {
  align: 'left' | 'right';
  children: ReactNode;
  name: string;
  url: string;
}

const Anchor = styled.a<Pick<Props, 'align'> & { isMobile: boolean }>(props => {
  const { align, isMobile } = props;

  return css`
    flex-shrink: 0;
    width: 440px;
    ${align === 'left' && `margin-right: ${theme.spacing.xl}`};
    ${align === 'right' && `margin-left: ${theme.spacing.xl}`};

    ${isMobile &&
    css`
      margin-bottom: ${theme.spacing.md};
      margin-left: 0;
      margin-right: 0;
      width: 100%;
    `};
  `;
});

export default function ImageLink({ align, children, name, url }: Props): JSX.Element {
  const {
    state: { isMobile },
  } = useAppContext();

  return (
    <Anchor
      align={align}
      aria-label={`Open ${name}`}
      data-component-name="ImageLink"
      href={url}
      isMobile={isMobile}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </Anchor>
  );
}
