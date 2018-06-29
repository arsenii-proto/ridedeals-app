<template>
    <v-touch @swipe="swipe" class="page row full-fixed flex-column">

        <div v-if="hasHeader" class="col-auto header-slot pt30i">
            
            <slot name="header"></slot>

        </div>

        <div class="col content-slot">
            
            <slot name="content"></slot>

        </div>

        <div class="footer-slot col-auto" :style="{ 'padding-bottom': ($stiller.navbar.height.y / 2) + 'px' }">

            <slot name="footer"></slot>

        </div>

    </v-touch>
</template>

<script>
    export default {
        
        name: 'Page',

        data() {

            var hasSlot = n => !!this.$slots[n];
            
            return {

                get hasHeader() {

                    return hasSlot('header')
                },

                get hasContent() {

                    return hasSlot('content')
                },

                get hasFooter() {

                    return hasSlot('footer')
                },

            }
        },

        methods: {

            swipe(e) {

                this.$emit(
                    (
                        (e.direction == 2   ? 'swipeRight'  : null) ||
                        (e.direction == 4   ? 'swipeLeft'   : null) ||
                        (e.direction == 8   ? 'swipeTop'    : null) ||
                        (e.direction == 16  ? 'swipeBottom' : null) 
                    ),
                    e
                )
            }

        }

    }
</script>