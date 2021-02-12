<template lang="">
    <div>
        La liste des users 

    <div>
         <table class="table">
            <tr v-for="user in users" :key="user.id">
                <td>
                {{user.lastName}}
                </td>
                <td>
                {{user.firstName}}
                </td>
                <td>
                {{user.id}}
                </td>
            </tr>
        </table>
    </div>

    </div>
</template>
<script>
export default {
  data() {
    return {
      users: {},
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      try {
        this.users = await this.$axios.$get("http://localhost:5000/api/users/");
        console.log(this.users);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang="">
</style>