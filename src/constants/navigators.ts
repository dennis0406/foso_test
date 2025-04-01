import Overview from '../screens/Overview';
import Orders from '../screens/Orders';
import GanttChart from '../screens/GanttChart';
import ProductionOrder from '../screens/ProductionOrder';
import Explore from '../screens/Explore';

import OverviewIcon from '../assets/icons/overview.svg';
import OrderIcon from '../assets/icons/order.svg';
import GanttCharttIcon from '../assets/icons/gantt-chart.svg';
import ProductionOrderIcon from '../assets/icons/production-order.svg';
import ExploreIcon from '../assets/icons/explore.svg';
import OverviewActiveIcon from '../assets/icons/overview-active.svg';
import OrderActiveIcon from '../assets/icons/order-active.svg';
import GanttCharttActiveIcon from '../assets/icons/gantt-chart-active.svg';
import ProductionOrderActiveIcon from '../assets/icons/production-order-active.svg';
import ExploreActiveIcon from '../assets/icons/explore-active.svg';

export const BOTTOM_TAB_ROUTES = [
  {
    label: 'Tổng quan',
    headerLabel: '',
    name: 'Overview',
    svgComponent: OverviewIcon,
    svgComponentActive: OverviewActiveIcon,
    component: Overview,
  },
  {
    label: 'Đơn hàng',
    headerLabel: 'Đơn Hàng',
    name: 'Orders',
    svgComponent: OrderIcon,
    svgComponentActive: OrderActiveIcon,
    component: Orders,
  },
  {
    label: 'Sơ đồ Gantt',
    headerLabel: '',
    name: 'GanttChart',
    svgComponent: GanttCharttIcon,
    svgComponentActive: GanttCharttActiveIcon,
    component: GanttChart,
  },
  {
    label: 'Lệnh SX',
    headerLabel: 'Lệnh Sản Xuất',
    name: 'ProductionOrder',
    svgComponent: ProductionOrderIcon,
    svgComponentActive: ProductionOrderActiveIcon,
    component: ProductionOrder,
  },
  {
    label: 'Xem thêm',
    headerLabel: '',
    name: 'Explore',
    svgComponent: ExploreIcon,
    svgComponentActive: ExploreActiveIcon,
    component: Explore,
  },
];
