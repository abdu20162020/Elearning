package sw2project.Controller.Entities.Repository;



import org.springframework.data.repository.CrudRepository;


import sw2project.Controller.Entities.Quiz;


public interface QuizEntitiesRepository extends CrudRepository<Quiz,Integer> {
	

	Quiz findByTitle(String title);
	
	


}
