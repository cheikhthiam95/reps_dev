<template lang="">
  <div>
    <div class="row">
      <div class="row">
        Admin > {{ this.texts.title }}
        <table class="table" style="width:100%">
          <tr>
            <th>Client</th>
          </tr>
          <tr>
            <td>Client</td>
           
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    texts: {
      default: function() {
        return {
          title: "DEFAULT_TITLE"
        };
      },
      type: Object
    },
    titles: {
      type: Object,
      default: function() {
        return {};
      }
    },
    data: {
      type: Object,
      default: function() {
        return {};
      }
    },
    btnActions: {
      type: Object,
      default: function() {
        return {
          delete: "",
          update: "",
          new: ""
        };
      }
    },
    methods: {
      type: Object,
      default: function() {
        return {
          delete: "",
          update: "",
          new: ""
        };
      }
    }
  }
};
</script>
<style lang=""></style>
