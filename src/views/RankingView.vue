<template>
    <div class="ranking">
        <div class="container_ranking">
            <div class="topLeadersList">
                <div v-for="(leader, index) in dados" :key="leader.id" class="leader">
                    <div v-if="index + 1 <= 3" class="containerImage">
                        <img class="image" :src="leader.image" />
                        <div class="crown">
                            <svg id="crown1" fill="#0f74b5" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 100 50">
                                <polygon class="cls-1" points="12.7 50 87.5 50 100 0 75 25 50 0 25.6 25 0 0 12.7 50" />
                            </svg>
                        </div>
                        <div class="leaderName">{{ leader.name }}</div>
                    </div>
                </div>
            </div>

            <div class="playerslist">
                <div class="table">
                    <div>#</div>
                    <div>Name</div>
                    <div>Turma</div>
                    <div>Pontuação</div>
                    <div>Data Entrega</div>
                    <div>Status</div>
                </div>
                <div class="list">
                    <div v-for="(leader, index) in dados" :key="leader.id" class="player">
                        <span>{{ index + 1 }}</span>
                        <div class="user">
                            <img class="image" :src="leader.image" />
                            <span>{{ leader.name }}</span>
                        </div>
                        <span>{{ leader.class }}</span>
                        <span>{{ leader.points }}</span>
                        <span>{{ leader.end_date }}</span>
                        <span>{{ leader.status }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<style scoped lang="css" src="../styles/ranking.css"></style>
    
<script>
export default {
    name: 'Ranking',
    components: {
    },
    data() {
        return {
            dados: [
                {
                    id: 1,
                    name: 'Laura',
                    image: './src/assets/avatar.png',
                    class: '2º ano',
                    points: 100,
                    end_date: '2023-06-10',
                    status: 'Completo',
                },
                {
                    id: 2,
                    name: 'Ana',
                    image: "./src/assets/avatar.png",
                    class: '2º ano',
                    points: 97,
                    end_date: '2023-06-10',
                    status: 'Completo',
                },
                {
                    id: 3,
                    name: 'Sofia',
                    image: './src/assets/avatar.png',
                    class: '2º ano',
                    points: 96,
                    end_date: '2023-06-10',
                    status: 'Completo',
                },
                {
                    id: 4,
                    name: 'Pedro',
                    image: './src/assets/avatar.png',
                    class: '2º ano',
                    points: 89,
                    end_date: '2023-06-10',
                    status: 'Completo',
                },
            ]
        }
    },
    methods: {

    },
    mounted: function () {

    },
    unmounted: function () {

    }
};
</script>