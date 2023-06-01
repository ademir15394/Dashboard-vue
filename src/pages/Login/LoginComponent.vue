<template>

<div class="main">

    <div class="login">

        <div class="content-login">

            <header>

                <h1>Login do Sistema</h1>

            </header>

            <div class="form">

            <form>
              <div class="mb-5 col-md-11 ">
                <label for="exampleInputEmail1" class="form-label text-light">E-mail</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              </div>
              <div class="mb-5 col-md-11">
                <label for="exampleInputPassword1" class="form-label text-light">Senha</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
              </div>
              <button type="submit" class="btn btn-primary" @click.prevent="login">Confimar</button>
            </form> 

            </div>

        </div>

    </div>

</div>

</template>

<script>
export default {

  name:'LoginComponent',
  data(){

  return

  },

  methods:{
    login(){
      this.$router.push({name:'home'});
    }
  }

}
</script>
<style lang="scss" src="./style.scss" scoped />
