package acceptance;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lextrans.LextransApplication;
import com.lextrans.service.model.Appointment;
import com.lextrans.tests.TestHelper;
import org.jboss.resteasy.client.jaxrs.ResteasyClientBuilder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import javax.ws.rs.client.Entity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

//@RunWith(SpringJUnit4ClassRunner.class)
//@SpringApplicationConfiguration(classes = LextransApplication.class)
//@WebAppConfiguration
public class AppointmentControllerTest extends TestHelper {

	private static final String SERVER_URL = "http://localhost:8090";
    private static final MediaType JSON_TYPE = MediaType.APPLICATION_JSON_TYPE;

    @Test
	public void createAppointment() throws JsonProcessingException {

		Entity<Appointment> entity = Entity.entity(defaultAppointment(), JSON_TYPE);
		Response response = new ResteasyClientBuilder().build()
				.target(SERVER_URL + "/control/appointment/").request(JSON_TYPE).post(entity);

		String output = response.readEntity(String.class);

		System.out.println(output);

	}

}
