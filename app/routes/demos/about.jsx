import { Outlet } from 'remix';

import stylesUrl from '~/styles/demos/about.css';

export let meta = () => {
  return {
    title: 'About Remix'
  };
};

export let links = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export default function Index() {
  return (
    <div className='about'>
      <div className='about__intro'>
        <h2>About Us</h2>
        <p>
          Ok, so this page isn't really <em>about us</em>, but we did want to
          show you a few more things Remix can do.
        </p>
        <hr />
        <Outlet />
      </div>
    </div>
  );
}
