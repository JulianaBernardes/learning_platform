<template>
    <div class="quizz">
      <div class="main">
          <div class="question_left"></div>
          <div class="question_right">
          <div class="intro">Responde as perguntas do Quizz</div>
          <div v-for="(question, i) in questions" :key="i">
            <div class="question" v-if="question.id == current_question">
              <div class="question_count">
                <span class="number">{{ question.id }}</span><span class="number total"> / {{ questions.length }}</span>
              </div>
              <!-- <span class="number">{{ question.id }}</span> -->
              <div class="text">{{ question.text }}</div>
            </div>
          </div>
          <div class="options">
            <span v-for="(option, i) in questions[current_question-1].options" :key="i*10">
              <button @click="checkAnswer(option, $event)" v-text="option"></button>
            </span>
          </div>
        </div>
      </div>
      
      <ButtonControls :class="{show_button: selected_answer.length}" @click="nextQuestion()" buttonType="next"/>
    
    </div>
  </template>
  
  <style scoped lang="css" src="../styles/quizz.css"></style>
  
  
  <script>
  import ButtonControls from '../components/ButtonControls.vue'

  export default {
    name: "Quizz",
    components: {
      ButtonControls,            
    },
    data() {
      return {
        current_question: 1,
        right_count: 0,
        selected_answer: [],
        questions: [
          {
            id: 1,
            text: "Movimento oblíquo é:",
            options: [
              "o movimento uniforme.", "estudado na física.", "um teste de velocidade.", "o estudo dos corpos em MRU."
            ],
            answer: "estudado na física.",
          },
          {
            id: 2,
            text: "Movimento oblíquo pode ser:",
            options: [
              "dividido em dois vetores.", "estudado na física.", "um teste de velocidade.", "o estudo dos corpos em MRU."
            ],
            answer: "dividido em dois vetores.",
          },

        ],
      };
    },
    
    methods: {
      checkAnswer: function (given_answer,e) {
        this.selected_answer.push(given_answer);
        const self = this;
        this.resetButtons();
        e.target.classList.add('selected_answer');
      },
      nextQuestion: function () {
        if (this.current_question == this.questions.length) {
          // save quizz answers
          this.$router.push('experiment');
        } else {
          this.current_question++;
          this.resetButtons();
        }
      },
      resetButtons: function(){
        const buttons = document.querySelectorAll('.options button');    
        buttons.forEach(function(button){
          button.classList.remove('selected_answer');
        })
      }
    },
  };
  </script>