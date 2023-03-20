import { MainContainer } from './SelFocalPointElements';
import { InsightGrid } from '../Insight/InsightGrid';
/* import { Sidebar } from '../../components/PageComponents/Sidebar'; */
/* import { useState } from 'react'; */
//import Footer from '../PageComponents/Footer/Footer';
export function SelFocalPoint() {
  /* const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }; */
  return (
    <MainContainer>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <InsightGrid />
    </MainContainer>
  );
}
