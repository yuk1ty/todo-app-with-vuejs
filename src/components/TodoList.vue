<template>
  <md-list>
    <md-list-item v-for="t in storedTasks" :key="t.task">
      <md-checkbox md-theme="orange">{{ t.task }}</md-checkbox>
      <span class="deadline">{{ t.deadline }}</span>
    </md-list-item>
  </md-list>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    storedTasks: 'availableTasks'
  })
}
</script>
