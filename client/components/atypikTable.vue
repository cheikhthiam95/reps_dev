<template lang="">
<div>
    <div class="row">
        <div class="row">
          
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    props: {
        texts: {
            default: function () {
                return {
                    title: "DEFAULT_TITLE"
                };
            },
            type: Object
        },
        titles: {
            type: Object,
            default: function () {
                return {};
            }
        },
        items: {
            type: Array,
            default: function () {
                return [];
            }
        },
        fields: {
            type: Array,
            default: function () {
                return [{

                }]

            }
        }

    },
    methods: {

        async deleteELement(id) {
            try {
                const res = await this.$axios.$delete("/users/" + id);
                console.log(res);
                this.getHotes();
            } catch (error) {
                console.log(error);
            }
        },

        async getHotes() {
            try {
                this.items = await this.$axios.$get("/users/findAllBy/" + this.texts.title);
                console.log(this.items);
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
 