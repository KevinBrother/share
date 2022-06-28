import ClassModel from "./pages/01-class-function/ClassModel";
import FunctionModel from "./pages/01-class-function/FunctionModel";
import HooksModel from "./pages/01-class-function/HooksModel";

import LifeCycle from "./pages/02-lifecycle/LifeCycle";
import UseEffect from "./pages/02-lifecycle/UseEffect";
import UnMount from "./pages/02-lifecycle/UnMount";

import FilterList1 from "./pages/03-state/FilterList1";
import FilterList2 from "./pages/03-state/FilterList2";

import Default from "./pages/04-components/Default";
import SplitComponent from "./pages/04-components/SplitComponent";

import Last1 from "./pages/last/Request"
import Last2 from "./pages/last/Request2"

const menuRouter = [
  {
    path: '/01-ClassModel',
    element: <ClassModel />
  },
  {
    path: '/01-FunctionModel',
    element: <FunctionModel />
  },
  {
    path: '/01-HooksModel',
    element: <HooksModel />
  },

  {
    path: '/02-LifeCycle',
    element: <LifeCycle id={0} />
  },
  {
    path: '/02-UseEffect',
    element: <UseEffect />
  },
  {
    path: '/02-UnMount',
    element: <UnMount id={0} />
  },

  {
    path: '/03-FilterList1',
    element: <FilterList1 />
  },
  {
    path: '/03-FilterList2',
    element: <FilterList2 />
  },
  {
    path: '/04-Default',
    element: <Default />
  },
  {
    path: '/04-SplitComponent',
    element: <SplitComponent />
  },
  {
    path: '/Last1',
    element: <Last1 />
  },
  {
    path: '/Last12',
    element: <Last2 />
  },
];

const baseRouter = [
  {
    path: '*',
    element: <>Welcome to hooks</>
  }
];

export { menuRouter, baseRouter };
