<template>
  <div>
    <Header />
    <TimeReservation v-if="active === 0"/>
    <RoomChoose v-if="active === 1"/>
    <SeatChoose v-if="active === 2"/>
    <Confirm v-if="active===3"/>
  </div>
</template>

<script type="es6">
  import Header from './Header'
  import TimeReservation from './TimeReservation'
  import RoomChoose from './RoomChoose'
  import SeatChoose from './SeatChoose'
  import Confirm from './Confirm'
  import { mapState } from 'vuex';
  export default {
    name: 'Reservation',
    components: {Header, TimeReservation,RoomChoose,SeatChoose,Confirm},
    computed: {
      ...mapState({
        active: state => state.Reservation.active,
      })
    },
  }
</script>

<style>
</style>
