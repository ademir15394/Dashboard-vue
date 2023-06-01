<template>

    <div class="sidebar">
        <div class=top>
        <div class="avatar">
            <span><i class="fi fi-rr-user"></i></span>
        
    </div>

    <div class="info">
        <p class="name">Ademir</p>
        <span class="status">online</span>
    </div>
</div>


<div class="menu">

<ul class="lista"><!--colocar icones-->
    <li><router-link :to="{name: 'home'}"><i class="fi fi-sr-home"></i>  Inicio</router-link></li>
    <li><router-link :to="{name: 'clients'}"><i class="fi fi-rs-users"></i>  Clientes</router-link></li>
    <li><router-link :to="{name: 'products'}"><i class="fi fi-rr-shopping-bag"></i>  Produtos</router-link></li>
    <li><router-link :to="{name: 'home'}"><i class="fi fi-ts-coins"></i>  Vendas</router-link></li>
    <li><router-link :to="{name: 'home'}"><i class="fi fi-rs-chat-arrow-grow"></i>  Relatorio</router-link></li>
</ul>

</div>
</div>

</template>
        
<script>
export default {
    name: 'SideBarComponent'

}
</script>

<style lang="scss">
@import '@/assets/scss/_main';

.sidebar{
    color: #ffff;

        .top{
            width: 100%;
            display:flex;
            justify-content: center;
            align-items: center;
            margin-top: 30px;

            .avatar{

                margin-right: 20px;

                span{
                    font-size: 27px;
                    background-color: $text;
                    display:block;
                    width:50px;
                    height:50px;
                    border-radius: 50%;
                    display:flex;
                    justify-content: center;
                    align-items: center;

                }
            }
        }
            .info{

                p{
                    margin: 0;
                    color: #ffff;
                }
                .name{
                    font-size: 23px;
                }

                .status{
                    font-size: 16px;
                }
            }
            .menu{
                padding:10px 20px;
                margin-top:40px;


                ul  li{
                    list-style:none;
                    margin:15px 0;
                    font-size:20px;

                    a{
                        color: #ffffff;
                        text-decoration:none;
                        i{
                            margin-left:15px
                        }
                    }
                }

            }


        

}
        
</style>
    