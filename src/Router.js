import React, { Suspense, lazy, useEffect } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import Spinner from "./components/@vuexy/spinner/Loading-spinner"
import knowledgeBaseCategory from "./views/pages/knowledge-base/Category"
import knowledgeBaseQuestion from "./views/pages/knowledge-base/Questions"
import { ContextLayout } from "./utility/context/Layout"
import Deals from "./views/crypto/Deals"
import Reports from "./views/crypto/Reports"
import UserCreate from "./views/dashboard/users/UserCreate"
import UserEdit from "./views/dashboard/users/UserEdit"
import DealCreate from "./views/crypto/Deals/DealCreate"
import DealEdit from "./views/crypto/Deals/DealEdit"
import ReportCreate from "./views/crypto/Reports/ReportCreate"
import ReportEdit from "./views/crypto/Reports/ReportEdit"
import AdminCreate from "./views/dashboard/admin/AdminCreate"
import AdminEdit from "./views/dashboard/admin/AdminEdit"
import Admins from "./views/dashboard/admin/Admin"
import axios from "axios"

// Route-based code splitting
const analyticsDashboard = lazy(() =>
  import("./views/dashboard/users")
)
const ecommerceDashboard = lazy(() =>
  import("./views/dashboard/ecommerce/EcommerceDashboard")
)
const email = lazy(() => import("./views/apps/email/Email"))
const chat = lazy(() => import("./views/apps/chat/Chat"))
const todo = lazy(() => import("./views/apps/todo/Todo"))
const calendar = lazy(() => import("./views/apps/calendar/Calendar"))
const shop = lazy(() => import("./views/apps/ecommerce/shop/Shop"))
const wishlist = lazy(() => import("./views/apps/ecommerce/wishlist/Wishlist"))
const checkout = lazy(() => import("./views/apps/ecommerce/cart/Cart"))
const productDetail = lazy(() => import("./views/apps/ecommerce/detail/Detail"))
const grid = lazy(() => import("./views/ui-elements/grid/Grid"))
const typography = lazy(() =>
  import("./views/ui-elements/typography/Typography")
)
const textutilities = lazy(() =>
  import("./views/ui-elements/text-utilities/TextUtilities")
)
const syntaxhighlighter = lazy(() =>
  import("./views/ui-elements/syntax-highlighter/SyntaxHighlighter")
)
const colors = lazy(() => import("./views/ui-elements/colors/Colors"))
const reactfeather = lazy(() =>
  import("./views/ui-elements/icons/FeatherIcons")
)
const basicCards = lazy(() => import("./views/ui-elements/cards/basic/Cards"))
const statisticsCards = lazy(() =>
  import("./views/ui-elements/cards/statistics/StatisticsCards")
)
const analyticsCards = lazy(() =>
  import("./views/ui-elements/cards/analytics/Analytics")
)
const actionCards = lazy(() =>
  import("./views/ui-elements/cards/actions/CardActions")
)
const Alerts = lazy(() => import("./components/reactstrap/alerts/Alerts"))
const Buttons = lazy(() => import("./components/reactstrap/buttons/Buttons"))
const Breadcrumbs = lazy(() =>
  import("./components/reactstrap/breadcrumbs/Breadcrumbs")
)
const Carousel = lazy(() => import("./components/reactstrap/carousel/Carousel"))
const Collapse = lazy(() => import("./components/reactstrap/collapse/Collapse"))
const Dropdowns = lazy(() =>
  import("./components/reactstrap/dropdowns/Dropdown")
)
const ListGroup = lazy(() =>
  import("./components/reactstrap/listGroup/ListGroup")
)
const Modals = lazy(() => import("./components/reactstrap/modal/Modal"))
const Pagination = lazy(() =>
  import("./components/reactstrap/pagination/Pagination")
)
const NavComponent = lazy(() =>
  import("./components/reactstrap/navComponent/NavComponent")
)
const Navbar = lazy(() => import("./components/reactstrap/navbar/Navbar"))
const Tabs = lazy(() => import("./components/reactstrap/tabs/Tabs"))
const TabPills = lazy(() => import("./components/reactstrap/tabPills/TabPills"))
const Tooltips = lazy(() => import("./components/reactstrap/tooltips/Tooltips"))
const Popovers = lazy(() => import("./components/reactstrap/popovers/Popovers"))
const Badge = lazy(() => import("./components/reactstrap/badge/Badge"))
const BadgePill = lazy(() =>
  import("./components/reactstrap/badgePills/BadgePill")
)
const Progress = lazy(() => import("./components/reactstrap/progress/Progress"))
const Media = lazy(() => import("./components/reactstrap/media/MediaObject"))
const Spinners = lazy(() => import("./components/reactstrap/spinners/Spinners"))
const Toasts = lazy(() => import("./components/reactstrap/toasts/Toasts"))
const avatar = lazy(() => import("./components/@vuexy/avatar/Avatar"))
const AutoComplete = lazy(() =>
  import("./components/@vuexy/autoComplete/AutoComplete")
)
const chips = lazy(() => import("./components/@vuexy/chips/Chips"))
const divider = lazy(() => import("./components/@vuexy/divider/Divider"))
const vuexyWizard = lazy(() => import("./components/@vuexy/wizard/Wizard"))
const listView = lazy(() => import("./views/ui-elements/data-list/ListView"))
const thumbView = lazy(() => import("./views/ui-elements/data-list/ThumbView"))
const select = lazy(() => import("./views/forms/form-elements/select/Select"))
const switchComponent = lazy(() =>
  import("./views/forms/form-elements/switch/Switch")
)
const checkbox = lazy(() =>
  import("./views/forms/form-elements/checkboxes/Checkboxes")
)
const radio = lazy(() => import("./views/forms/form-elements/radio/Radio"))
const input = lazy(() => import("./views/forms/form-elements/input/Input"))
const group = lazy(() =>
  import("./views/forms/form-elements/input-groups/InputGoups")
)
const numberInput = lazy(() =>
  import("./views/forms/form-elements/number-input/NumberInput")
)
const textarea = lazy(() =>
  import("./views/forms/form-elements/textarea/Textarea")
)
const pickers = lazy(() =>
  import("./views/forms/form-elements/datepicker/Pickers")
)
const inputMask = lazy(() =>
  import("./views/forms/form-elements/input-mask/InputMask")
)
const layout = lazy(() => import("./views/forms/form-layouts/FormLayouts"))
const formik = lazy(() => import("./views/forms/formik/Formik"))
const tables = lazy(() => import("./views/tables/reactstrap/Tables"))
const ReactTables = lazy(() =>
  import("./views/tables/react-tables/ReactTables")
)
const Aggrid = lazy(() => import("./views/tables/aggrid/Aggrid"))
const DataTable = lazy(() => import("./views/tables/data-tables/DataTables"))
const profile = lazy(() => import("./views/pages/profile/Profile"))
const faq = lazy(() => import("./views/pages/faq/FAQ"))
const knowledgeBase = lazy(() =>
  import("./views/pages/knowledge-base/KnowledgeBase")
)
const search = lazy(() => import("./views/pages/search/Search"))
const accountSettings = lazy(() =>
  import("./views/pages/account-settings/AccountSettings")
)
const invoice = lazy(() => import("./views/pages/invoice/Invoice"))
const comingSoon = lazy(() => import("./views/pages/misc/ComingSoon"))
const error404 = lazy(() => import("./views/pages/misc/error/404"))
const error500 = lazy(() => import("./views/pages/misc/error/500"))
const authorized = lazy(() => import("./views/pages/misc/NotAuthorized"))
const maintenance = lazy(() => import("./views/pages/misc/Maintenance"))
const apex = lazy(() => import("./views/charts/apex/ApexCharts"))
const chartjs = lazy(() => import("./views/charts/chart-js/ChartJS"))
const extreme = lazy(() => import("./views/charts/recharts/Recharts"))
const leafletMaps = lazy(() => import("./views/maps/Maps"))
const toastr = lazy(() => import("./extensions/toastify/Toastify"))
const sweetAlert = lazy(() => import("./extensions/sweet-alert/SweetAlert"))
const rcSlider = lazy(() => import("./extensions/rc-slider/Slider"))
const uploader = lazy(() => import("./extensions/dropzone/Dropzone"))
const editor = lazy(() => import("./extensions/editor/Editor"))
const drop = lazy(() => import("./extensions/drag-and-drop/DragAndDrop"))
const tour = lazy(() => import("./extensions/tour/Tour"))
const clipboard = lazy(() =>
  import("./extensions/copy-to-clipboard/CopyToClipboard")
)
const menu = lazy(() => import("./extensions/contexify/Contexify"))
const swiper = lazy(() => import("./extensions/swiper/Swiper"))
const i18n = lazy(() => import("./extensions/i18n/I18n"))
const reactPaginate = lazy(() => import("./extensions/pagination/Pagination"))
const tree = lazy(() => import("./extensions/treeview/TreeView"))
const Import = lazy(() => import("./extensions/import-export/Import"))
const Export = lazy(() => import("./extensions/import-export/Export"))
const ExportSelected = lazy(() =>
  import("./extensions/import-export/ExportSelected")
)
const userList = lazy(() => import("./views/apps/user/list/List"))
const userEdit = lazy(() => import("./views/apps/user/edit/Edit"))
const userView = lazy(() => import("./views/apps/user/view/View"))

// --- Used Routes ---
const Login = lazy(() => import("./views/pages/authentication/login/Login"))
const forgotPassword = lazy(() =>import("./views/pages/authentication/ForgotPassword"))
const lockScreen = lazy(() => import("./views/pages/authentication/LockScreen"))
const resetPassword = lazy(() =>import("./views/pages/authentication/ResetPassword"))
const register = lazy(() => import("./views/pages/authentication/register/Register"))
// const addBlog = lazy(() => import("./views/blog/addBlog"))
// const allBlogs = lazy(() => import("./views/blog/allBlogs"))
const editBlog = lazy(() => import("./views/crypto/editBlog"))
const addPage = lazy(() => import("./views/page/addPage"))
const allPage = lazy(() => import("./views/page/allPages"))
const editPage = lazy(() => import("./views/page/editPage"))
// --- End Used Routes ---
const accessControl = lazy(() =>import("./extensions/access-control/AccessControl"))
// Set Layout and Component Using App Route
const RouteConfig = ({ component: Component, privateRoute,
  path, fullLayout, ...rest }) => {

  const userIfo = JSON.parse(
    localStorage.getItem(process.env.REACT_APP_USER_DATA)
  );

  useEffect(() => {
    if (!userIfo) {
      if (privateRoute) {
        history.push("/login");
      }
      return;
    }
    axios.defaults.headers.common = {
      token: `${userIfo.accessToken}`,
    };

  }, [path, privateRoute]);

  return(
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout
            return (
              <LayoutTag {...props} permission={props.user}>
                <Suspense fallback={<Spinner />}>
                  <Component {...props} />
                </Suspense>
              </LayoutTag>
            )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)}
const mapStateToProps = state => {
  return {
    user: state.auth.login.userRole
  }
}

const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          {/* --- Used Components ---*/}
          <AppRoute exact path="/" component={Login} fullLayout/>
          <AppRoute path="/login" component={Login} fullLayout />
          <AppRoute path="/register" component={register} fullLayout />
          <AppRoute path="/forgot-password" component={forgotPassword} fullLayout/>
          <AppRoute path="/dashboard" component={analyticsDashboard} privateRoute/>
          <AppRoute path="/user-create" component={UserCreate} privateRoute/>
          <AppRoute path="/user-edit" component={UserEdit} privateRoute />
          <AppRoute path="/admin/deals" component={Deals} privateRoute/>
          <AppRoute path="/deal-create" component={DealCreate} privateRoute />
          <AppRoute path="/deal-edit/:id" component={DealCreate} privateRoute />
          <AppRoute path="/admin/reports" component={Reports} privateRoute />
          <AppRoute path="/report-create" component={ReportCreate} privateRoute />
          <AppRoute path="/report-edit" component={ReportEdit} privateRoute />
          <AppRoute path="/admin" component={Admins} privateRoute />
          <AppRoute path="/admin-create" component={AdminCreate} privateRoute />
          <AppRoute path="/admin-edit" component={AdminCreate} privateRoute />
          <AppRoute path="/admin/edit-blog/:id" component={editBlog} privateRoute />
          <AppRoute path="/admin/add-page" component={addPage} privateRoute />
          <AppRoute path="/admin/all-pages" component={allPage} privateRoute />
          <AppRoute path="/admin/edit-page/:id" component={editPage} privateRoute />
          {/* --- End Used Components ---*/}

          {/*<AppRoute exact path="/" component={analyticsDashboard} />*/}
          <AppRoute
            path="/ecommerce-dashboard"
            component={ecommerceDashboard}
          />
          <AppRoute
            path="/email"
            exact
            component={() => <Redirect to="/email/inbox" />}
          />
          <AppRoute path="/email/:filter" component={email} />
          <AppRoute path="/chat" component={chat} />
          <AppRoute
            path="/todo"
            exact
            component={() => <Redirect to="/todo/all" />}
          />
          <AppRoute path="/todo/:filter" component={todo} />
          <AppRoute path="/calendar" component={calendar} />
          <AppRoute path="/ecommerce/shop" component={shop} />
          <AppRoute path="/ecommerce/wishlist" component={wishlist} />
          <AppRoute
            path="/ecommerce/product-detail"
            component={productDetail}
          />
          <AppRoute
            path="/ecommerce/checkout"
            component={checkout}
            permission="admin"
          />
          <AppRoute path="/data-list/list-view" component={listView} />
          <AppRoute path="/data-list/thumb-view" component={thumbView} />
          <AppRoute path="/ui-element/grid" component={grid} />
          <AppRoute path="/ui-element/typography" component={typography} />
          <AppRoute
            path="/ui-element/textutilities"
            component={textutilities}
          />
          <AppRoute
            path="/ui-element/syntaxhighlighter"
            component={syntaxhighlighter}
          />
          <AppRoute path="/colors/colors" component={colors} />
          <AppRoute path="/icons/reactfeather" component={reactfeather} />
          <AppRoute path="/cards/basic" component={basicCards} />
          <AppRoute path="/cards/statistics" component={statisticsCards} />
          <AppRoute path="/cards/analytics" component={analyticsCards} />
          <AppRoute path="/cards/action" component={actionCards} />
          <AppRoute path="/components/alerts" component={Alerts} />
          <AppRoute path="/components/buttons" component={Buttons} />
          <AppRoute path="/components/breadcrumbs" component={Breadcrumbs} />
          <AppRoute path="/components/carousel" component={Carousel} />
          <AppRoute path="/components/collapse" component={Collapse} />
          <AppRoute path="/components/dropdowns" component={Dropdowns} />
          <AppRoute path="/components/list-group" component={ListGroup} />
          <AppRoute path="/components/modals" component={Modals} />
          <AppRoute path="/components/pagination" component={Pagination} />
          <AppRoute path="/components/nav-component" component={NavComponent} />
          <AppRoute path="/components/navbar" component={Navbar} />
          <AppRoute path="/components/tabs-component" component={Tabs} />
          <AppRoute path="/components/pills-component" component={TabPills} />
          <AppRoute path="/components/tooltips" component={Tooltips} />
          <AppRoute path="/components/popovers" component={Popovers} />
          <AppRoute path="/components/badges" component={Badge} />
          <AppRoute path="/components/pill-badges" component={BadgePill} />
          <AppRoute path="/components/progress" component={Progress} />
          <AppRoute path="/components/media-objects" component={Media} />
          <AppRoute path="/components/spinners" component={Spinners} />
          <AppRoute path="/components/toasts" component={Toasts} />
          <AppRoute
            path="/extra-components/auto-complete"
            component={AutoComplete}
          />
          <AppRoute path="/extra-components/avatar" component={avatar} />
          <AppRoute path="/extra-components/chips" component={chips} />
          <AppRoute path="/extra-components/divider" component={divider} />
          <AppRoute path="/forms/wizard" component={vuexyWizard} />
          <AppRoute path="/forms/elements/select" component={select} />
          <AppRoute path="/forms/elements/switch" component={switchComponent} />
          <AppRoute path="/forms/elements/checkbox" component={checkbox} />
          <AppRoute path="/forms/elements/radio" component={radio} />
          <AppRoute path="/forms/elements/input" component={input} />
          <AppRoute path="/forms/elements/input-group" component={group} />
          <AppRoute
            path="/forms/elements/number-input"
            component={numberInput}
          />
          <AppRoute path="/forms/elements/textarea" component={textarea} />
          <AppRoute path="/forms/elements/pickers" component={pickers} />
          <AppRoute path="/forms/elements/input-mask" component={inputMask} />
          <AppRoute path="/forms/layout/form-layout" component={layout} />
          <AppRoute path="/forms/formik" component={formik} />{" "}
          <AppRoute path="/tables/reactstrap" component={tables} />
          <AppRoute path="/tables/react-tables" component={ReactTables} />
          <AppRoute path="/tables/agGrid" component={Aggrid} />
          <AppRoute path="/tables/data-tables" component={DataTable} />
          <AppRoute path="/pages/profile" component={profile} />
          <AppRoute path="/pages/faq" component={faq} />
          <AppRoute
            path="/pages/knowledge-base"
            component={knowledgeBase}
            exact
          />
          <AppRoute
            path="/pages/knowledge-base/category"
            component={knowledgeBaseCategory}
            exact
          />
          <AppRoute
            path="/pages/knowledge-base/category/questions"
            component={knowledgeBaseQuestion}
          />
          <AppRoute path="/pages/search" component={search} />
          <AppRoute
            path="/pages/account-settings"
            component={accountSettings}
          />
          <AppRoute path="/pages/invoice" component={invoice} />
          <AppRoute
            path="/misc/coming-soon"
            component={comingSoon}
            fullLayout
          />
          <AppRoute path="/misc/error/404" component={error404} fullLayout />
          {/*<AppRoute path="/pages/login" component={Login} fullLayout />*/}
          {/*<AppRoute path="/pages/register" component={register} fullLayout />*/}
          {/*<AppRoute*/}
          {/*  path="/pages/forgot-password"*/}
          {/*  component={forgotPassword}*/}
          {/*  fullLayout*/}
          {/*/>*/}
          <AppRoute
            path="/pages/lock-screen"
            component={lockScreen}
            fullLayout
          />
          <AppRoute
            path="/pages/reset-password"
            component={resetPassword}
            fullLayout
          />
          <AppRoute path="/misc/error/500" component={error500} fullLayout />
          <AppRoute
            path="/misc/not-authorized"
            component={authorized}
            fullLayout
          />
          <AppRoute
            path="/misc/maintenance"
            component={maintenance} 
            fullLayout
          />
          <AppRoute path="/app/user/list" component={userList} />
          <AppRoute path="/app/user/edit" component={userEdit} />
          <AppRoute path="/app/user/view" component={userView} />
          <AppRoute path="/charts/apex" component={apex} />
          <AppRoute path="/charts/chartjs" component={chartjs} />
          <AppRoute path="/charts/recharts" component={extreme} />
          <AppRoute path="/maps/leaflet" component={leafletMaps} />
          <AppRoute path="/extensions/sweet-alert" component={sweetAlert} />
          <AppRoute path="/extensions/toastr" component={toastr} />
          <AppRoute path="/extensions/slider" component={rcSlider} />
          <AppRoute path="/extensions/file-uploader" component={uploader} />
          <AppRoute path="/extensions/wysiwyg-editor" component={editor} />
          <AppRoute path="/extensions/drag-and-drop" component={drop} />
          <AppRoute path="/extensions/tour" component={tour} />
          <AppRoute path="/extensions/clipboard" component={clipboard} />
          <AppRoute path="/extensions/context-menu" component={menu} />
          <AppRoute path="/extensions/swiper" component={swiper} />
          <AppRoute
            path="/extensions/access-control"
            component={accessControl}
          />
          <AppRoute path="/extensions/i18n" component={i18n} />
          <AppRoute path="/extensions/tree" component={tree} />
          <AppRoute path="/extensions/import" component={Import} />
          <AppRoute path="/extensions/export" component={Export} />
          <AppRoute
            path="/extensions/export-selected"
            component={ExportSelected}
          />
          <AppRoute path="/extensions/pagination" component={reactPaginate} />
          <AppRoute component={error404} fullLayout />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
