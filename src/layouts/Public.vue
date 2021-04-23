<template>
  <v-app class="app-wrapper">
    <v-main>
      <div >
        <router-view />
      </div>
    </v-main>
    <Snackbar/>
  </v-app>
</template>

<script>
export default {
  components: {
    Snackbar: () => import('@/components/Alerts/Snackbar')
  },
  data() {
    return {
      
    }
  },

}
</script>

<style>

</style>
