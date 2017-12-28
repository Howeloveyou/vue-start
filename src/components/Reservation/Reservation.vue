<template>
  <div>
    <Header />
    <TmeReservation v-if="active == 0"/>
    <RoomChoose v-if="active == 1"/>
  </div>
</template>

<script type="es6">
  import Header from './Header'
  import TmeReservation from './TimeReservation'
  import RoomChoose from './RoomChoose'
  import { mapState } from 'vuex';
  export default {
    name: 'Reservation',
    components: {Header, TmeReservation,RoomChoose},
    computed: {
      ...mapState({
        active: state => state.Reservation.active,
      })
    },
  }
</script>

<style>

</style>
