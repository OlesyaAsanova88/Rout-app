<template>
<div class="authors">
    <div class="container">
        <div class="row">
            <div class="col-4 pt-5">
                <img src="data:image/jpeg;base64,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">
            </div>
            <div class="col-8 pt-2">
                <h2>Выбрать автора:</h2>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-info" type="submit">Search</button>
                </form>

                <div class="container pt-3">
                    <div class="row">
                        <div class="col-6">
                            <ul>
                                <li>Михаил Булгаков</li>
                                <li>Николай Гоголь </li>
                                <li>Илья Ильф, Евгений Петров</li>
                                <li>Федор Достоевский</li>
                                <li>Лев Толстой</li>
                                <li>Александр Пушкин</li>
                                <li>Иван Тургенев</li>
                                <li>Антон Чехов</li>
                                <li>Александр Грибоедов </li>
                                <li>Борис Васильев</li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul>
                                <li>Михаил Лермонтов</li>
                                <li>Михаил Шолохов </li>
                                <li>Григорий Белых, Л. Пантелеев </li>
                                <li>Вениамин Каверин</li>
                                <li>Иван Гончаров</li>
                                <li>Леонид Филатов </li>
                                <li>Владимир Обручев</li>
                                <li>Аркадий и Борис Стругацкие</li>
                                <li>Александр Беляев</li>
                                <li>Александр Грин </li>
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
.authors {
    height: 70vh;
    background-color: #7e8f84;
}

.list-grup {
    display: flex;
    flex-wrap: wrap;
}
</style>
