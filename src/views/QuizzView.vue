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
            text: "Em um movimento oblíquo, qual das seguintes afirmações é verdadeira sobre a trajetória do objeto?",
            options: [
              "A trajetória é uma linha reta.", "A trajetória é uma parábola.", "A trajetória é uma circunferência.", "A trajetória é uma elipse."
            ],
            answer: "A trajetória é uma parábola.",
          },
          {
            id: 2,
            text: "Durante um movimento oblíquo, qual das seguintes afirmações é verdadeira sobre a velocidade do objeto?",
            options: [
              "A velocidade é constante ao longo de toda a trajetória.",
              "A velocidade varia apenas na direção vertical.",
              "A velocidade varia apenas na direção horizontal.",
              "A velocidade varia tanto na direção vertical quanto na direção horizontal."
            ],
            answer: "A velocidade varia tanto na direção vertical quanto na direção horizontal.",
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