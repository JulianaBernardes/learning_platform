<template>
    <div class="intro">
        <div class="intro-text">
            <h1><font-awesome-icon :icon="['fas', 'book-open']" /> Matérias</h1>
            <p>Lista das suas matérias</p>
        </div>

        <div class="container-intro">
            <div class="card-content">
                <div v-for="card in cards" :key="card.id" class="card">
                    <div class="card-image">
                        <img :src="card.image" alt="">
                    </div>
                    <div class="card-info">
                        <h3>{{ card.title }}</h3>
                        <p>{{ card.description }}</p>
                    </div>
                </div>
            </div>

            <div class="pagination">
                <li class="page-item previous-page disable"><a class="page-link" href="#">Prev</a></li>
                <li class="page-item current-page active"><a class="page-link" href="#">1</a></li>
                <li class="page-item current-page"><a class="page-link" href="#">2</a></li>
                <li class="page-item next-page"><a class="page-link" href="#">Next</a></li>
            </div>
        </div>

        
        <div class="intro-text">
            <h1><font-awesome-icon :icon="['fas', 'newspaper']" /> Conteúdos</h1>
            <p>Lista dos novos conteúdos publicados</p>
        </div>

        <div class="container-intro">
            <div class="card-content">
                <div v-for="content in contents" :key="content.id" class="card">
                    <div class="card-image">
                        <img :src="content.image" alt="">
                    </div>
                    <div class="card-info">
                        <h3>{{ content.title }}</h3>
                        <p>{{ content.description }}</p>
                    </div>
                </div>
            </div>

            <div class="pagination">
                <li class="page-item previous-page disable"><a class="page-link" href="#">Prev</a></li>
                <li class="page-item current-page active"><a class="page-link" href="#">1</a></li>
                <li class="page-item current-page"><a class="page-link" href="#">2</a></li>
                <li class="page-item next-page"><a class="page-link" href="#">Next</a></li>
            </div>
        </div>

    </div>
</template>
    
<style scoped lang="css" src="../styles/intro.css"></style>
    
<script>
export default {
    name: 'Intro',
    components: {
    },
    data() {
        return {
            cards: [
                {
                    id: 1,
                    title: 'Física',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                    image: 'https://picsum.photos/300/150?random' + Math.random()
                },
                {
                    id: 2,
                    title: 'Matemática',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                    image: 'https://picsum.photos/300/150?random' + Math.random()
                },
                {
                    id: 3,
                    title: 'Química',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                    image: 'https://picsum.photos/300/150?random' + Math.random()
                },
                {
                    id: 4,
                    title: 'Biologia',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                    image: 'https://picsum.photos/300/150?random' + Math.random()
                }
            ],
            contents: [
                {
                    id: 1,
                    title: 'Movimento retilíneo uniforme',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                    image: 'https://picsum.photos/300/150?random' + Math.random()
                },
                {
                    id: 2,
                    title: 'Regressão linear',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                    image: 'https://picsum.photos/300/150?random' + Math.random()
                },
                {
                    id: 3,
                    title: 'Introdução a química orgânica',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                    image: 'https://picsum.photos/300/150?random' + Math.random()
                },
                {
                    id: 4,
                    title: 'Introdução a biologia molecular',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                    image: 'https://picsum.photos/300/150?random' + Math.random()
                }
            ],
            limitPerPage: 3,
            totalPages: 2,
            paginationSize: 7,
            currentPage: 1,
            visibleCards: [],
            pagination: []
        }
    },
    methods: {

        methods: {
            getPageList: function (totalPages, page, maxLength) {
                function range(start, end) {
                    return Array.from(Array(end - start + 1), (_, i) => i + start);
                }

                var sideWidth = maxLength < 9 ? 1 : 2;
                var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
                var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

                if (totalPages <= maxLength) {
                    return range(1, totalPages);
                }

                if (page <= maxLength - sideWidth - 1 - rightWidth) {
                    return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
                }

                if (page >= totalPages - sideWidth - 1 - rightWidth) {
                    return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
                }

                return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
            },

            showPage: function (whichPage) {
                if (whichPage < 1 || whichPage > this.totalPages) return false;

                this.currentPage = whichPage;

                const start = (this.currentPage - 1) * this.limitPerPage;
                const end = this.currentPage * this.limitPerPage;
                this.visibleCards = this.cards.slice(start, end);

                this.pagination.splice(1, this.pagination.length - 2);

                this.getPageList(this.totalPages, this.currentPage, this.paginationSize).forEach(item => {
                    this.pagination.push({
                        page: item,
                        active: item === this.currentPage,
                        isDots: !item
                    });
                });

                return true;
            },

            nextPage: function () {
                this.showPage(this.currentPage + 1);
            },

            previousPage: function () {
                this.showPage(this.currentPage - 1);
            }
        }

    },
    mounted: function () {
        this.totalPages = Math.ceil(this.cards.length / this.limitPerPage);
        this.pagination = [
            { page: "Prev", active: false, isDots: false },
            { page: "Next", active: false, isDots: false }
        ];
        // this.showPage(1);
    },
    unmounted: function () {

    }
};
</script>