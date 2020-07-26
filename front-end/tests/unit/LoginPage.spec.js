import Vue from 'vue'
import LoginPage from '@/views/LoginPage'

describe('LoginPage.vue', () => {
  it('should render correct contents', () => {
    const Contructor = Vue.extend(LoginPage)
    const vm = new Contructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
    .toEqual('TaskAgile')
  }, 10000)
})
