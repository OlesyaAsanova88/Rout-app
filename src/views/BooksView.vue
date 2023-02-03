<script setup>

</script>

<template>
<div class="books">
    <div class="container">
        <div class="row">
            <div class="col-4 pt-5">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd2RBcWhYMS0Yqo0A_94Rm3Sip6B0N7fqEemRbQGxGU9H50vTnmWycws8xyvbbZRaCDNA&usqp=CAU">
            </div>
            <div class="col-8 pt-2">
                <h2>Выбратькнигу:</h2>
                <form class="d-flex">
                    <input class="form-control me-2" v-model.trim="search" type="text" placeholder="Serch...">
                    <button class="btn btn-outline-info" type="submit">Search</button>
                </form>

                <div class="container pt-3">
                    <div class="row">
                        <div class="col-6">
                            <ul>
                                <li>Мастер и Маргарита</li>
                                <li>Мёртвые души </li>
                                <li>Золотой теленок</li>
                                <li>Преступление и наказание</li>
                                <li>Война и мир</li>
                                <li>Евгений Онегин</li>
                                <li>Отцы и дети</li>
                                <li>Палата № 6</li>
                                <li>Горе от ума</li>
                                <li>А зори здесь тихие</li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul>
                                <li>Герой нашего времени</li>
                                <li>Тихий Дон</li>
                                <li>Республика ШКИД</li>
                                <li>Два капитана</li>
                                <li>Обломов</li>
                                <li>Про Федота-стрельца, удалого молодца</li>
                                <li>Земля Санникова</li>
                                <li>Пикник на обочине</li>
                                <li>Человек-амфибия</li>
                                <li>Алые паруса</li>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.books {
    height: 70vh;
    background-color: #84b685;
}
</style>
