import About from '../src/pages';
import Contact from '../src/pages';
import Home from '../src/pages';

const routes = [
	{
	  path: "/",
	  exact: true,
	  main: () => Home
	},
	{
	  path: "/about",
	  main: () => About
	},
	{
	  path: "/contact",
	  main: () => Contact
	}
  ];
  
export default routes;