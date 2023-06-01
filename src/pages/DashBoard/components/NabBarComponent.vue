<template>

    <div class="navbar">
       <h3 class="logo"> <i class="fi fi-rr-home"></i> logo</h3>

       <a href="" @click.prevent="logout" class="logout" ><i class="fi fi-rs-exit"></i> Sair</a>
    </div>

</template>
        
<script>
export default {
    name: 'NabBarComponent',
    methods: {
        logout(){
            this.$router.push({name: 'login'})
        }
    }

}
</script>

<style lang="scss">
@import '@/assets/scss/_main';

.navbar{
    color:#fff;
    .logo{
        margin-top:13px;
    }

    .logout{
        color:#fff;
        font-size:24px;
        text-decoration:none;
    }
}

</style>
    