package sw2project.Controller;


import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import antlr.collections.List;
import sw2project.Controller.Entities.Quiz;
import sw2project.Controller.Entities.quistion;
import sw2project.Controller.Entities.Repository.QuistionEntitiesRepository;
import sw2project.Controller.Entities.Repository.QuizEntitiesRepository;

@RestController
@CrossOrigin(origins = "*")
public class QuizController {
	@Autowired
	private QuizEntitiesRepository quizRepo;
	@Autowired
	private QuistionEntitiesRepository quistionRepo;
	public QuizController(QuizEntitiesRepository quizRepo) {
		this.quizRepo = quizRepo;
	}
	public QuizController(){}

	
	@RequestMapping(value = "/addquiz", method = RequestMethod.POST)
	@ResponseBody
	public int addquiz(@RequestBody Quiz quiz) {
	
	Quiz q=	quizRepo.save(quiz);		
			if(q.getID()>0){
			return q.getID();			
		}
		return -1;
		
	}
	@RequestMapping("/addmcq")
	@ResponseBody
	public int addmcq(@RequestBody quistion mcq) {
		
		quistion q=	quistionRepo.save(mcq);		
				if(q.getID()>0){
				return q.getID();			
			}
			return -1;
			
		}
	@RequestMapping("/quiz")
	@ResponseBody
	public ArrayList<Quiz> quizes() {
		Iterable<Quiz> quizes = quizRepo.findAll();
		ArrayList<Quiz> quizess = new ArrayList<Quiz>();

		for (Quiz b : quizes) {
			quizess.add(b);
		}
		return quizess;
	}
	@RequestMapping(value = "/deletequiz/{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public boolean deletequiz(@PathVariable("id") int id){
		Quiz qq=quizRepo.findOne(id);
		
		if(qq!=null){
			quizRepo.delete(qq);
			return true;
		}
		return false;
		
		
	}
	@RequestMapping(value = "/deletequistion/{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public boolean deletequistion(@PathVariable("id") int id){
		Iterable<quistion> quistions=quistionRepo.findAll();
		ArrayList<quistion> allquistion = new ArrayList<quistion>();

		for (quistion b : quistions) {
			allquistion.add(b);
		}
		ArrayList<quistion> filterquistion = new ArrayList<quistion>();
		for (quistion b : allquistion) {
		if(b.getQuiz_id()==id){
			filterquistion.add(b);
			
		}
		}
		if(filterquistion.size()==0){
			
			return false;
			
		}	
		for(quistion b : filterquistion) {
			quistionRepo.delete(b);
			
		}
		return true;
	}
	@RequestMapping(value = "/findquiz/{title}", method = RequestMethod.GET)
	@ResponseBody
	public Quiz findquiz(@PathVariable("title") String title){
		Quiz quizess=quizRepo.findByTitle(title);
		return quizess;
		
	}
	@RequestMapping(value = "/findquizbyid/{id}", method = RequestMethod.GET)
	@ResponseBody
	public Quiz findQuizbyID(@PathVariable("id") int id){
		Quiz quizess=quizRepo.findOne(id);
		return quizess;
		
	}
	@RequestMapping(value = "/findquistion/{quiz_id}", method = RequestMethod.PUT)
	@ResponseBody
	public ArrayList<quistion> findquistion(@PathVariable("quiz_id") int quiz_id,@Valid @RequestBody ArrayList<quistion> quistions){
		
		Iterable<quistion> quistionss=quistionRepo.findAll();
		ArrayList<quistion> allquistion = new ArrayList<quistion>();

		for (quistion b : quistionss) {
			allquistion.add(b);
		}
		ArrayList<quistion> filterquistion = new ArrayList<quistion>();
		for (quistion b : allquistion) {
		if(b.getQuiz_id()==quiz_id){
			filterquistion.add(b);	
		}
		
		}
		ArrayList<quistion> filterquistion2 = new ArrayList<quistion>();
		for(int i=0;i<quistions.size();i++)	{
			quistion b=filterquistion.get(i);
			b.setQuistionStatement(quistions.get(i).getQuistionStatement());
			b.setAnswer_1(quistions.get(i).getAnswer_1());
			b.setAnswer_2(quistions.get(i).getAnswer_2());
			b.setAnswer_3(quistions.get(i).getAnswer_3());
			b.setNum_of_correct_answer(quistions.get(i).getNum_of_correct_answer());
		
			filterquistion2.add(quistionRepo.save(b));
			
			
		}
		return filterquistion2;
		
	}
	@RequestMapping(value = "/findQuistionByQuizId/{quiz_id}", method = RequestMethod.GET)
	@ResponseBody
	public ArrayList<quistion> findQuistionsByQuizID(@PathVariable("quiz_id") int quiz_id){
		Iterable<quistion> quistionss=quistionRepo.findAll();
		ArrayList<quistion> allquistion = new ArrayList<quistion>();

		for (quistion b : quistionss) {
			allquistion.add(b);
		}
		ArrayList<quistion> filterquistion = new ArrayList<quistion>();
		for (quistion b : allquistion) {
		if(b.getQuiz_id()==quiz_id){
			filterquistion.add(b);	
		}
		
		}
		
		return filterquistion;
		
	}
	@RequestMapping(value = "/updatequiz/{id}", method = RequestMethod.PUT)
	@ResponseBody
	public Quiz updatequiz(@PathVariable("id") int id,@Valid @RequestBody Quiz quizz){
		Quiz quiz = quizRepo.findOne(id);
		quiz.setPass_score(quizz.getPass_score());
		quiz.setSkill_type(quizz.getSkill_type());
		quiz.setTitle(quizz.getTitle());		
		Quiz updatequiz = quizRepo.save(quiz);
		return quiz;
		
	}
	@RequestMapping("/category")
	@ResponseBody
	public Set<String> category() {
		Iterable<Quiz> quizes = quizRepo.findAll();
		ArrayList<String> quizess = new ArrayList<String>();
		Set<String> set = new LinkedHashSet(); 
		for (Quiz b : quizes) {
			quizess.add(b.getSkill_type());
		}
		
		set.addAll(quizess);
		
		return set;
	}
	@RequestMapping(value = "/Quiz/category/{skill}", method = RequestMethod.GET)
	@ResponseBody
	public ArrayList<Quiz> findQuizByQuizCat(@PathVariable("skill") String skill){
		Iterable<Quiz> quizes = quizRepo.findAll();
		ArrayList<Quiz> quizess = new ArrayList<Quiz>();
		ArrayList<Quiz> filter = new ArrayList<Quiz>();

		for (Quiz b : quizes) {
			quizess.add(b);
		}
		for (Quiz b : quizess) {
			if(b.getSkill_type().equals(skill)){
			filter.add(b);}
		}
		return filter;
		
	}
	@RequestMapping(value = "/findCorrectByQuizId/{quiz_id}", method = RequestMethod.GET)
	@ResponseBody
	public  ArrayList<Integer> findCorrectByQuizId(@PathVariable("quiz_id") int quiz_id){
		Iterable<quistion> quistionss=quistionRepo.findAll();
		ArrayList<quistion> allquistion = new ArrayList<quistion>();

		for (quistion b : quistionss) {
			allquistion.add(b);
		}
		ArrayList<quistion> filterquistion = new ArrayList<quistion>();
		for (quistion b : allquistion) {
		if(b.getQuiz_id()==quiz_id){
			filterquistion.add(b);	
		}
		
		}
		ArrayList<Integer> arl = new ArrayList<Integer>();
		for (quistion b : filterquistion) {
			arl.add(b.getNum_of_correct_answer());
			
			}
		
		
		return arl;
		
	}

}
	