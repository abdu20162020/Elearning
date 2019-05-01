package sw2project.Controller.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class HistoryLogs {
@Id
@GeneratedValue(strategy= GenerationType.AUTO)
private int primaryy;
@NotNull
private int person_id;
@NotNull
private String person_Action;



public HistoryLogs() {
	super();
}

public HistoryLogs(int person_id, String person_Action, int primary) {
	super();
	this.person_id = person_id;
	this.person_Action = person_Action;
	this.primaryy = primary;
}
public int getPrimary() {
	return primaryy;
}
public void setPrimary(int primary) {
	this.primaryy = primary;
}
public int getPerson_id() {
	return person_id;
}
public void setPerson_id(int person_id) {
	this.person_id = person_id;
}
public String getPerson_Action() {
	return person_Action;
}
public void setPerson_Action(String person_Action) {
	this.person_Action = person_Action;
}

public HistoryLogs(int person_id, String person_Action) {
	super();
	this.person_id = person_id;
	this.person_Action = person_Action;
}
@Override
public String toString() {
	return "Logss [person_id=" + person_id + ", person_Action=" + person_Action + "]";
}



}
