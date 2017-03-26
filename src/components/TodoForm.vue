<template>
  <form>
    <md-input-container>
      <label>Task</label>
      <md-input v-model="task"></md-input>
    </md-input-container>
    <md-input-container>
      <label>Deadline</label>
      <md-input v-model="deadline"></md-input>
    </md-input-container>
    <md-button class="md-raised md-primary">Add Task</md-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      task: '',
      deadline: ''
    }
  }
}
</script>
