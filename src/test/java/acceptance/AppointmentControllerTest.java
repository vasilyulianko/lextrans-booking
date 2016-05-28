package acceptance;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lextrans.LextransApplication;
import com.lextrans.service.model.Appointment;
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
public class AppointmentControllerTest {

	@Test
	public void createAppointment() throws JsonProcessingException {
		Appointment appointment = new Appointment();


		appointment.setName("Name");
		appointment.setContactFullName("Vasily Ulianko");
		appointment.setContactAddressLine1("Address 1");
		appointment.setContactPostCode("FR345");
		appointment.setContactMobile("23467844");
		appointment.setContactEmail("email@gmail.com");

		Entity<Appointment> entity = Entity.entity(appointment, MediaType.APPLICATION_JSON_TYPE);
		Response response = new ResteasyClientBuilder().build()
				.target("http://localhost:8090/control/appointment/").request(MediaType.APPLICATION_JSON_TYPE).post(entity);

		String output = response.readEntity(String.class);

		System.out.println(output);

	}

}
