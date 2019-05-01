package sw2project.Controller.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Grade_user {
	@NotNull
	private int user_id;
	@NotNull
	private int Quiz_id;
	public Grade_user(int quiz_id) {
		super();
		Quiz_id = quiz_id;
	}

	public int getQuiz_id() {
		return Quiz_id;
	}

	public void setQuiz_id(int quiz_id) {
		Quiz_id = quiz_id;
	}
	@NotNull
	private int user_grade;
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private int user_grade_key;
	
	
	public Grade_user() {
		super();
	}
	public Grade_user(int user_id, int user_grade) {
		super();
		this.user_id = user_id;
		this.user_grade = user_grade;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public int getUser_grade() {
		return user_grade;
	}
	public void setUser_grade(int user_grade) {
		this.user_grade = user_grade;
	}
	@Override
	public String toString() {
		return "Grade_user [user_id=" + user_id + ", user_grade=" + user_grade + "]";
	}
}
