import ClassModel from "./pages/01-class-function/ClassModel";
import FunctionModel from "./pages/01-class-function/FunctionModel";
import HooksModel from "./pages/01-class-function/HooksModel";
import FilterList1 from "./pages/03-state/FilterList1";
import FilterList2 from "./pages/03-state/FilterList2";
import Request from "./pages/last/Request";
import MoDelList from "./pages/04-components";

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
];

const baseRouter = [
  {
    path: '*',
    element: <>Welcome to hooks</>
  }
];

export { menuRouter, baseRouter };
