<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-badge variant="primary">Planned</b-badge>
        <b-badge variant="success">Accepted</b-badge>
        <b-badge variant="warning">Requested</b-badge>
        <b-badge variant="danger">Rejected</b-badge>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div id="calendar"></div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>

import { Calendar } from '@fullcalendar/core';
import allLocales from '@fullcalendar/core/locales-all';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

export default {
  name: 'IndividualCalendar',
  data() {
    return {
      calendar: null
    };
  },
  created: function() {
    
  },
  mounted: function() {
    const calendarEl = document.getElementById('calendar');
    this.calendar = new Calendar(calendarEl, {
      locales: allLocales,
      locale: this.$languageCode,
      plugins: [ dayGridPlugin, timeGridPlugin ],
      defaultView: 'dayGridMonth',
      weekNumbers: true,
      height: 'auto',
      header: {
        left: 'prev,next today nonWorkingDays',
        center: 'title',
        right: 'month,agendaWeek'
      },
      loading: bool => {
        this.$emit('loader', bool);
      },
      displayEventTime: false,
      customButtons: {
        nonWorkingDays: {
          text: 'non working days',
          click: function() {
            alert('clicked the custom button!');
          }
        }
      }
    });
    this.calendar.render();
  },
};
</script>

<style scoped>

</style>
