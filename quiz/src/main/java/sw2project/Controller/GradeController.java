package sw2project.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import sw2project.Controller.Entities.Grade_user;
import sw2project.Controller.Entities.Quiz;
import sw2project.Controller.Entities.Repository.GradeEntitiesRepository;

@RestController
@CrossOrigin(origins = "*")
public class GradeController {
	@Autowired
	private GradeEntitiesRepository GRepo;
	public GradeController(){}
	public GradeController(GradeEntitiesRepository gRepo) {
		super();
		GRepo = gRepo;
	}

	public GradeEntitiesRepository getGRepo() {
		return GRepo;
	}

	public void setGRepo(GradeEntitiesRepository gRepo) {
		GRepo = gRepo;
	}
	@RequestMapping(value = "/addgrade", method = RequestMethod.POST)
	@ResponseBody
	public int  addquiz(@RequestBody Grade_user grade_user) {
			
			if(GRepo.save(grade_user)!=null){
			return 200;			
		}
		return 404;
		
	}
}
