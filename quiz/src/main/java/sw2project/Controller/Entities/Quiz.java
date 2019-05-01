package sw2project.Controller.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;


@Entity
public class Quiz {
	@Id
    @GeneratedValue(strategy= GenerationType.AUTO)
	private int ID;
	@NotNull
	private int pass_score;
	@NotNull
	private int num_quistions;
	@NotNull
	private String title;
	private String duration;

	private String Skill_type;
	public Quiz(){}
	public Quiz(int iD, int pass_score, int num_quistions, String title, String duration,
			String skill_type) {
		super();
		ID = iD;
		
		this.pass_score = pass_score;
		this.num_quistions = num_quistions;
		this.title = title;
		this.duration = duration;
		this.Skill_type = skill_type;
	}
	
	
	public Quiz(int pass_score, int num_quistions, String title, String skill_type) {
		super();
		this.pass_score = pass_score;
		this.num_quistions = num_quistions;
		this.title = title;
		this.Skill_type = skill_type;
	}
	public int getID() {
		return ID;
	}
	public void setID(int iD) {
		ID = iD;
	}
	public int getPass_score() {
		return pass_score;
	}
	public void setPass_score(int pass_score) {
		this.pass_score = pass_score;
	}
	public int getnum_quistions() {
		return num_quistions;
	}
	public void setnum_quistions(int num_quistions) {
		this.num_quistions = num_quistions;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public String getSkill_type() {
		return Skill_type;
	}
	public void setSkill_type(String skill_type) {
		this.Skill_type = skill_type;
	}
	
}
