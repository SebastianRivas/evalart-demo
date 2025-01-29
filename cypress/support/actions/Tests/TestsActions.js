import TestsPage from "../../page_objects/Tests/TestsPage";
import { CommonActions } from "../Common/CommonActions";

export class Actions {
    fill_character_occurrence(expect_character) {
        cy.get(TestsPage.question_one_p).eq(1).invoke('text').then((val) => { 
            let evaluated_string = String(val);
            let occurrence = (evaluated_string.match(new RegExp(expect_character, "g")) || []).length;

            cy.get(TestsPage.question_one_answer_input).type(occurrence);
        });
    }

    select_multiples_of(a_number) {
        cy.get(TestsPage.question_two_inputs).each((element, index, list) => {
            cy.wrap(element).invoke("val").then((val) => {
                let element_value = parseInt(val);
                
                if ((element_value % a_number) == 0) { 
                    cy.wrap(element).check(); 
                }
            });
        });
    }

    send_answers() {
        cy.get(TestsPage.send_answers_button).click();
    }
}

export const TestsActions = new Actions();