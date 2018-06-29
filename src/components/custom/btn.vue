<template>
    <v-touch :tag="tag" class="btn" :class="el_class" v-on="listenner">
        <slot></slot>
    </v-touch>
</template>

<script>
    export default {
        name: 'btn',
        props: {
            tag: {
                type: String,
                default: "button"
            },
            'tap-class': {
                type: String,
                default: null
            }
        },
        data() {

            const self = this

            return {

                el_class: {},

                listenner: {

                    tap() {

                        self.$emit('tap')
                    }
                }
            }
        }
    }
</script>

<style scoped>

    .btn.faded:before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fff;
        opacity: 0.2;
    }

    .btn.circle{
        width: 30px;
        height: 30px;
        padding: 6px 0px;
        border-radius: 15px;
        text-align: center;
        font-size: 12px;
        line-height: 1.42857;
    }

    .btn.circle.lg{
        width: 50px;
        height: 50px;
        padding: 8px 6px;
        border-radius: 35px;
        font-size: 20px;
        line-height: 1.73;
    }

    .btn.circle.xl{
        width: 70px;
        height: 70px;
        padding: 10px 16px;
        border-radius: 35px;
        font-size: 24px;
        line-height: 1.33;
    }

    .btn.red {
        color: #f44336;
        background-color: transparent;
        border-color: #ccc
    }

    .btn.red.outline {
        color: #f44336;
        background-color: transparent;
        border: 1px solid #f44336
    }

    .btn.red.full {
        color: #fff;
        background-color: #f44336;
        border: 1px solid #f44336
    }

    .btn.theme {
        color: #1de4ae;
        background-color: transparent;
        border-color: #181e35
    }

    .btn.theme.outline {
        color: #1de4ae;
        background-color: transparent;
        border: 1px solid #1de4ae
    }

    .btn.theme.full {
        color: #181e35;
        background-color: #1de4ae;
        border: 1px solid #1de4ae
    }

</style>
