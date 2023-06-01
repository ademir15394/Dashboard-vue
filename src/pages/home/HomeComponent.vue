<template>

<DashBoardComponent>
        <div slot="slot-pages" class="component-pages">
            <header class="title-pages">
                <p>home</p>
            </header>


            <div>
                <div class="row">
                    <div class="col-12 col-md-3">
                        <CardsComponenet :type="'Clientes'" :porcentage="'7%'" :icon="'fi fi-rs-users'" :qtd="clients.length"/>
            </div>
                    <div class="col-12 col-md-3">
                        <CardsComponenet :type="'Produtos'" :porcentage="'8%'" :icon="'fi fi-rr-shopping-bag'" :qtd="clients.length"/>
            </div>


                    <div class="col-12 col-md-3">
                        <CardsComponenet :type="'Vendas'" :porcentage="'8%'" :icon="'fi fi-ts-coins'" :qtd="'40'"/>
                    </div>

                    <div class="col-12 col-md-3">
                        <CardsComponenet :type="'Relatorio'" :porcentage="'8%'" :icon="'fi fi-rs-chat-arrow-grow'" :qtd="'4'"/>
                    </div>

                </div>
            </div>

            <div class="mt-5">
                <div class="row">
                    <div class="n col-12 col-md-6">
                       <ListsComponent :data="clients" :description="'Clientes'" :coluns="['Nome', 'E-mail']" />
                    </div>

                    <div class="col-12 col-md-6">
                      <ListsComponent :data="products" :description="'Produtos'" :coluns="['Nome', 'Valor']"/>
                    </div>
                </div>
            </div>

        </div>

</DashBoardComponent>
    
    </template>
    
    <script>

/* eslint-disable */

import DashBoardComponent from '../DashBoard/DashBoardComponent.vue';
import CardsComponenet from '../../components/CardsComponent.vue';
import ListsComponent from '../../components/ListComponener.vue';
const axios = require('axios');

export default {
        name:'HomeComponenet',

        data(){
            return{
                clients:[],
                products:[],
            }
        },
        mounted(){
            this.getUsers();
        },

        methods:{
            async getUsers(){
                const response = await axios.get('http://localhost:8000/api');

                if(response.status == 200){
                    //console.log(response.data);
                    this.clients = response.data.clients;
                    this.products = response.data.products;
                }else{
                    console.error("teve erro");
                }

            }
        },

        components:{

            DashBoardComponent,
            CardsComponenet,
            ListsComponent,
        }

    }
    </script>

<style lang="scss" src="./style.scss" scoped />
