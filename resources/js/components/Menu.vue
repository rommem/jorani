<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="#/">
        <img src="assets/images/brand.png" class="d-inline-block align-top" alt="Jorani">
        Jorani
      </b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Calendars" right>
            <b-dropdown-item to="#/calendars/individual" router-tag="span">My Calendar</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
      
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      menus: [
        {
          name: 'Requests',
          href: '/leaves/my/'
        },
        {
          name: 'Calendars',
          href: '/calendars/',
          submenus: [
            {
              name: 'My Calendar',
              href: '/calendars/individual'
            }
          ]
        }
      ]
    };
  },
  props: {
    active: {
      type: String,
      required: true,
      default: 'Requests'
    }
  },
  methods: {
    logout: function() {
      sessionStorage.removeItem('username');
      this.$forceUpdate();
      this.$router.push('//calendars/individual');
    },
    isAdmin() {
      return (sessionStorage.getItem('username') !== null);
    },
    isParentMenu(menu) {
      let isParent = false;
      menu.submenus.forEach(submenu => {
        if (submenu.name === this.active) {
          isParent = true;
        }
      });
      return isParent;
    }
  }
};
</script>
