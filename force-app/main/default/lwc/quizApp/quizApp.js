import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected={} //for storing answers
    correctAnswers = 0; //to show the result
    myQuestions=[
        {
            id:"Question1",
            question: "Which of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question: "Which of the following is an invalid file in a LWC component?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question: "Which of the following is not a directive?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]

    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length);
    }

    changeHandler(event) {
        console.log("name: ", event.target.name);
        console.log("value: ", event.target.value);
        const {name, value} = event.target;

        this.selected={...this.selected, [name]:value};

    }

    submitHandler(event){
        // event.stopImmediatePropagation();
        event.preventDefault();
        let correct = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer);
        this.correctAnswers = correct.length;
        console.log("this.correctAnswers", this.correctAnswers);
    }
    resetHandler(){
        this.selected = {}
        this.correctAnswers = 0;
    }
}