import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import ReactGA from 'react-ga';
import ReactUserFocus from 'react-user-focus';

// This files styles - need to import before anything else to get the css first.
import styles from './index.css';

// Screens
import Home from './Home';
import Copyright from './Copyright';
import Now from './Now';
import Footer from './Footer';
import Contact from './Contact';
import Portfolio from './Portfolio';
import About from './About';
import NotFound from './NotFound';

// Console functions
import { devtoolsWelcome } from './console.js';


// Accept hot module reloading during development
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept();
  }
}

// Initialize Google Analytics
ReactGA.initialize(process.env.GA_ID);

// Log Page View Function
function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

window.help = function () {
  console.log('Curious how long you\'ve been browsing? Call howLongHaveIBeenHere()');
  console.log('Need a breather? Call helpMeRelax()');
  console.log('Want to check out my Resume? Call resume()');
  console.log('Want to see the status of this website? Call status()');
  console.log('Want to see the code on Github? Call letMeSeeThisCode()');
  console.log('Check out the Heatmap of your current session! Call heatMap()');
  console.log('Want to say hi? Call sayHi(\'name\', \'email\', \'message\' )');

  return '-----------------------------------------';
};

window.amIFocused = function () {

};

window.howLongHaveIBeenHere = function () {
  console.log('Work in Progress!');
  return '-----------------------------------------';
};

window.helpMeRelax = function () {
  console.log('Work in Progress!');
  return '-----------------------------------------';
};

window.resume = function () {
  console.log('Work in Progress!');
  return '-----------------------------------------';
};

window.status = function () {
  console.log('Work in Progress!');
  return '-----------------------------------------';
};

window.letMeSeeThisCode = function () {
  console.log('Work in Progress!');
  return '-----------------------------------------';
};

window.heatMap = function () {
  console.log('Work in Progress!');
  return '-----------------------------------------';
};

window.sayHi = function () {
  console.log('Work in Progress!');
  return '-----------------------------------------';
};


devtoolsWelcome();

// const MatchWithProps = ({ component: Comp, passProps, ...props }) => (
//   <Match {...props} render={(matchedProps) => <Comp {...passProps} {...matchedProps} />} />
// );

// <MatchWithProps pattern="/foo" component={Foo} passProps={{ bar: 1 }} />

function onFocusChange(isHidden) {
  console.log(`Is hidden?:${isHidden}`);
}

function onIdleChange(isIdle) {
  console.log(`Is Idle?:${isIdle}`);
}
render(
  <BrowserRouter onUpdate={logPageView}>
    <div className={styles.container}>
      <div className={styles.content}>
        <ReactUserFocus
          onFocusChange={onFocusChange}
          onIdleChange={onIdleChange}
          idleTime={2}
        />
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/Copyright" component={Copyright} />
        <Match pattern="/Now" component={Now} />
        <Match pattern="/Contact" component={Contact} />
        <Match pattern="/Portfolio" component={Portfolio} />
        <Match pattern="/About" component={About} />
        <Miss component={NotFound} />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  </BrowserRouter>,
document.getElementById('app')
);
