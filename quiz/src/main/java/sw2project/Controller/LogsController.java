package sw2project.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import sw2project.Controller.Entities.HistoryLogs;
import sw2project.Controller.Entities.Repository.LogsEntitiesRepository;
@RestController
@CrossOrigin(origins = "*")
public class LogsController {
	@Autowired
	private LogsEntitiesRepository LRepo;
	public LogsController(){}
	public LogsController(LogsEntitiesRepository lRepo) {
		super();
		LRepo = lRepo;
	}

	public LogsEntitiesRepository getGRepo() {
		return LRepo;
	}

	public void setGRepo(LogsEntitiesRepository gRepo) {
		LRepo = gRepo;
	}
	@RequestMapping(value = "/addlog", method = RequestMethod.POST)
	@ResponseBody
	public int  addquiz(@RequestBody HistoryLogs Logs_INFO) {
			
			if(LRepo.save(Logs_INFO)!=null){
			return 200;			
		}
		return 404;
		
	}
}
