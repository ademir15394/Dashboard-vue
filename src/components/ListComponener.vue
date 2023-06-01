<template>

<div class="list">

    <div class="top">

        <p><strong>{{ description }}</strong> <span class="badge text-bg-light">{{ data.length }}</span></p>

    </div>

    <div class="content">

      <table class="table table-stiped my_table text-light">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">{{ coluns[0] }}</th>
      <th scope="col">{{ coluns[1] }}</th>
     <!-- <th scope="col">Contato</th>-->
    </tr>
  </thead>
  <tbody>
    <tr  v-for="item in  data" :key="item.id">
      <th scope="row"><p  class="clientes"> {{ item.id }}</p></th>
      <td><p  class="clientes"> {{ item.name }}</p></td>
      <td> <p  class="clientes">{{  (description == 'Clientes') ? item.email : item.valor }}</p></td>
     <!-- <td class="clientes">{{ user.phone }}</td>-->
    </tr>

  </tbody>
</table>

    </div>

    </div>


</template>

<script>

export default{
  name:'ListsComponent',

  props:{
    data:Array,
    description: String,
    coluns: {},
  }

}

</script>

<style lang="scss" scoped>
@import '@/assets/scss/_main';

.list {
  color:$white;
  width:100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius:3px;
  background-color: $cor_de_fundo;
  color:#fff;
}

.clientes{
  font-size: 15px;
}

</style>

