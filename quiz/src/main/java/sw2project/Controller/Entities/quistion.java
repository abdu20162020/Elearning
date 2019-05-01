package sw2project.Controller.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class quistion {
	@Id
    @GeneratedValue(strategy= GenerationType.AUTO)
	private int ID;
	@NotNull
	private String quistionStatement;
	@NotNull
	private String answer_1;
	@NotNull
	private String answer_2;
	@NotNull
	private String answer_3;
	@NotNull
    private int num_of_correct_answer;
	@NotNull
	private int quiz_id;
	public int getID() {
		return ID;
	}
	public void setID(int iD) {
		ID = iD;
	}
	public String getQuistionStatement() {
		return quistionStatement;
	}
	public void setQuistionStatement(String quistionStatement) {
		this.quistionStatement = quistionStatement;
	}
	public String getAnswer_1() {
		return answer_1;
	}
	public void setAnswer_1(String answer_1) {
		this.answer_1 = answer_1;
	}
	public String getAnswer_2() {
		return answer_2;
	}
	public void setAnswer_2(String answer_2) {
		this.answer_2 = answer_2;
	}
	public String getAnswer_3() {
		return answer_3;
	}
	public void setAnswer_3(String answer_3) {
		this.answer_3 = answer_3;
	}
	public int getNum_of_correct_answer() {
		return num_of_correct_answer;
	}
	public void setNum_of_correct_answer(int num_of_correct_answer) {
		this.num_of_correct_answer = num_of_correct_answer;
	}
	public int getQuiz_id() {
		return quiz_id;
	}
	public void setQuiz_id(int quiz_id) {
		this.quiz_id = quiz_id;
	}
	public quistion() {
		super();
	}
	public quistion(int iD, String quistionStatement, String answer_1, String answer_2, String answer_3,
			int num_of_correct_answer, int quiz_id) {
		super();
		ID = iD;
		this.quistionStatement = quistionStatement;
		this.answer_1 = answer_1;
		this.answer_2 = answer_2;
		this.answer_3 = answer_3;
		this.num_of_correct_answer = num_of_correct_answer;
		this.quiz_id = quiz_id;
	}
	
}
