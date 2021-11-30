import { useLoaderData, json, Link } from 'remix';

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader = () => {
  let data = {
    resources: [
      {
        name: 'Remix Docs',
        url: 'https://remix.run/docs'
      }
    ],
    demos: [
      {
        to: 'demos/about',
        name: 'Nested Routes, CSS loading/unloading'
      }
    ]
  };

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export let meta = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!'
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData();

  return (
    <div className='remix__page'>
      <main>
        <h2>Welcome to Remix!</h2>
        <p>Hello World 🥳</p>
      </main>
    </div>
  );
}
