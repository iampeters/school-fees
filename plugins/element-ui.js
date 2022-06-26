import Vue from 'vue'
import {
  Pagination,
  Steps,
  Step,
  Select,
  Option,
  Dialog,
  Input,
  Icon,
  Table,
  TableColumn,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Form,
  FormItem,
  Tooltip,
  Button,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Radio,
  RadioGroup,
  RadioButton,
  Switch,
  Loading,
  Notification,
  Upload,
  Tabs,
  TabPane,
  DatePicker,
} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale'

export default () => {
  // configure language
  locale.use(lang)

  Vue.prototype.$notify = Notification

  // import components
  Vue.use(Steps)
  Vue.use(Step)
  Vue.use(Select)
  Vue.use(Option)
  Vue.use(Dialog)
  Vue.use(Input)
  Vue.use(Icon)
  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.use(Dropdown)
  Vue.use(DropdownMenu)
  Vue.use(DropdownItem)
  Vue.use(Pagination)
  Vue.use(Form)
  Vue.use(FormItem)
  Vue.use(Tooltip)
  Vue.use(Button)
  Vue.use(Checkbox)
  Vue.use(CheckboxButton)
  Vue.use(CheckboxGroup)
  Vue.use(Radio)
  Vue.use(RadioGroup)
  Vue.use(RadioButton)
  Vue.use(Switch)
  Vue.use(Loading)
  Vue.use(Upload)
  Vue.use(Tabs)
  Vue.use(TabPane)
  Vue.use(DatePicker)
}
