import {MainLayout} from 'components/layout'

const menuRouters = [{
  name: 'components',
  type: 'menuRouter',
  path: '/components',
  icon: 'smile-o',
  title: 'Components',
  component: MainLayout,
  children: [{
    name: 'button',
    path: 'button',
    title: 'Button 按钮',
    component: () => import('views/components/buttons.vue')
  }]
}]

export default menuRouters
