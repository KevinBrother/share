import ClassModel from "./pages/Demo1/ClassModel";
import FunctionModel from "./pages/Demo1/FunctionModel";
import HooksModel from "./pages/Demo1/HooksModel";
import FilterList1 from "./pages/Demo3/FilterList1";
import FilterList2 from "./pages/Demo3/FilterList2";
import Request from "./pages/Demo4/Request";
import MoDelList from "./pages/Demo5-model";
import NiceModalExample from "./pages/Demo6-model";

const menuRouter = [
  {
    path: '/ClassModel',
    element: <ClassModel />
  },
  {
    path: '/FunctionModel',
    element: <FunctionModel />
  },
  {
    path: '/HooksModel',
    element: <HooksModel />
  },
  {
    path: '/FilterList1',
    element: <FilterList1 />
  },
  {
    path: '/FilterList2',
    element: <FilterList2 />
  },
  {
    path: '/MoDelList',
    element: <MoDelList />
  },
  {
    path: '/NiceModalExample',
    element: <NiceModalExample />
  },
];

const baseRouter = [
  {
    path: '*',
    element: <>Welcome to hooks</>
  }
];

export { menuRouter, baseRouter };
