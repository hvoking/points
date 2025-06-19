// App imports
import { Left } from './left';
import { Maps } from './maps';
import { Right } from './right';
import './styles.scss';

// Context imports
import { MainProvider } from 'context';

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

export const Main = () => (
  <MainProvider>
    <div className="main">
      <Left/>
      <Maps/>
      <Right/>
    </div>
  </MainProvider>
)

Main.displayName="Main";