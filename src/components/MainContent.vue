<template>
  <div class="main-content">
    <todo-form></todo-form>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'

export default {
  name: 'main',
  components: {
    'todo-form': TodoForm,
    'todo-list': TodoList
  }
}
</script>
