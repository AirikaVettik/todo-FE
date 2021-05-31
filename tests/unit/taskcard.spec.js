import { mount } from '@vue/test-utils'
import TaskCard from '@/components/TaskCard.vue'

describe('TaskCard.vue', () => {

  it('should set correct classes for task', async () => {
    const wrapper = mount(TaskCard, {
      propsData: {
        task: {
          color: "BLACK"
        }
      }
    })
  
  expect(wrapper.find('.color')).toBe('BLACK') 
});


  it('should display date in correct format', async () => {
    const wrapper = mount(TaskCard, {
      propsData: { 
        task: {
          date: new Date('2021-05-31T10:04:39.264+00:00').toISOString().slice(0,10)
        }
      }
    })
  expect(wrapper.find('.date').text()).toBe('31 May 2021')
  })
})
