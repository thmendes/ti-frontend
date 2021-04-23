<template>
  <component
    :is="layout"
  />
</template>

<script>
// TODO  Remove unused files
import Dashboard from '@/layouts/Dashboard'
import Public from '@/layouts/Public'
export default {
  name: 'app',
  components: {
    'dashboard': Dashboard,
    'public': Public
  },
  computed: {
    layout () {
      let layout = 'dashboard'

      if(this.$route.name === "Login")
        layout = 'public'

      return layout
    }
  }
}
</script>
