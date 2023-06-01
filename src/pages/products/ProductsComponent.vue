<template>

<DashBoardComponent>
        <div slot="slot-pages" class="component-pages">

            <header class="title-pages">
                <p>produto</p>
            </header>

        </div>

</DashBoardComponent>
    
    </template>
    
    <script>
import DashBoardComponent from '../DashBoard/DashBoardComponent.vue';

    export default {
        components:{
            DashBoardComponent,
        }

    }
    </script>

<style lang="scss" src="./style.scss" scoped />
