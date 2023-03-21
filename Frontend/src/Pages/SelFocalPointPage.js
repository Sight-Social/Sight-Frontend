import { SelFocalPoint } from '../components/SelFocalPoint/SelFocalPoint';
import WebAppNav from '../components/WebAppNav';
import styled from 'styled-components';

export function SelFocalPointPage() {

  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    background-color: var(--clr-black); /* nav and base */
  `;

  return (
    <>
      <Wrapper>
        <WebAppNav />
        <SelFocalPoint />
      </Wrapper>
    </>
  );
}
