<template>
  <md-list>
    <md-list-item v-for="task in tasks">
      <md-checkbox md-theme="orange">{{ task.name }}</md-checkbox>
      <span class="deadline">{{ task.deadline }}</span>
    </md-list-item>
  </md-list>
</template>

<script>
export default {
  data() {
    let tasks = []
    return {
      tasks: [
        { name: 'タスク1', deadline: '2017-03-15' },
        { name: 'タスク2', deadline: '2017-03-16' }
      ]
    }
  }
}
</script>
