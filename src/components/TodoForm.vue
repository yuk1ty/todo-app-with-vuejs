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
    <md-button class="md-raised md-primary" @click.native="add({ task: task, deadline: deadline })">Add Task</md-button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      task: '',
      deadline: ''
    }
  },
  methods: mapMutations([
      'add'
    ])
}
</script>
