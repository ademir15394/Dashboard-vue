<template>

<div class="my-card">

    <div class="content top">

        <h3>{{ type }}</h3>

        <p class="porcentage"><i class="fi fi-rr-arrow-small-up"></i>{{ porcentage }}</p>

    </div>

    <div class="content footer">

        <i :class="['fi', icon,]"></i>

        <p class="qtd">{{ qtd }}</p>


    </div>
</div>

</template>


<script>
export default{

    name:'CardsComponent',
    props:{
        type: String,
        porcentage: String,
        icon: String,
        qtd: String,
    }

}


</script>

<style lang="scss" scoped>
@import '@/assets/scss/_main';

.my-card{
    display:flex;
    flex-direction: column;
    width: 300px;
    padding: 15px;
    background-color: $cor_de_fundo;
    color: $white;
    border-radius: 8px;
}

.porcentage{
    color:rgb(47, 237, 57);
    font-size: 18px;
}

.content{
    display:flex;
    justify-content: space-between;
}

.footer{

    .fi{
        font-size: 30px;
    }

    .qtd{
        font-size: 24px;
    }

}

</style>
 