<template>
<div class="form-books">
  <div class="container pt-5">
    <div class="row justify-content-center">
      <div class="col-7">
        <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Ваш Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Название книги</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        
        <button type="submit" class="btn btn-primary">Добавить</button>
    </form>
      </div>
    </div>
  </div>
</div>
</template>

  
<style scoped>
.form-books {
  height: 100vh;
  background-color: #925166cb;
}

  </style>
