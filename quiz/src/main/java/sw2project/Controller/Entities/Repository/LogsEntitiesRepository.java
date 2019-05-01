package sw2project.Controller.Entities.Repository;

import org.springframework.data.repository.CrudRepository;

import sw2project.Controller.Entities.HistoryLogs;


public interface LogsEntitiesRepository extends CrudRepository<HistoryLogs,Integer> {

}
