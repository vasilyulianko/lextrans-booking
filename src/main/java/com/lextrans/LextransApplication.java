package com.lextrans;

import com.lextrans.service.model.Appointment;
import org.apache.catalina.Container;
import org.apache.catalina.Context;
import org.apache.catalina.Wrapper;
import org.lightadmin.api.config.LightAdmin;
import org.lightadmin.core.config.LightAdminWebApplicationInitializer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.context.embedded.ServletContextInitializer;
import org.springframework.boot.context.embedded.tomcat.TomcatContextCustomizer;
import org.springframework.boot.context.embedded.tomcat.TomcatEmbeddedServletContainerFactory;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;

import static org.springframework.core.Ordered.HIGHEST_PRECEDENCE;

@Configuration
@ComponentScan
@EnableAutoConfiguration
@Order(HIGHEST_PRECEDENCE)
public class LextransApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(LextransApplication.class, args);
	}

	/* Used for running in "embedded" mode */
	@Bean
	public ServletContextInitializer servletContextInitializer() {
		return new ServletContextInitializer() {
			@Override
			public void onStartup(ServletContext servletContext) throws ServletException {
				LightAdmin.configure(servletContext)
						.basePackage("com.lextrans.administration")
						.baseUrl("/admin")
						.security(true)
						.backToSiteUrl("http://lightadmin.org");

				new LightAdminWebApplicationInitializer().onStartup(servletContext);
			}
		};
	}

	/* https://github.com/spring-projects/spring-boot/issues/2825#issuecomment-93479758 */
	@Bean
	public EmbeddedServletContainerCustomizer servletContainerCustomizer() {
		return new EmbeddedServletContainerCustomizer() {

			@Override
			public void customize(ConfigurableEmbeddedServletContainer container) {
				if (container instanceof TomcatEmbeddedServletContainerFactory) {
					customizeTomcat((TomcatEmbeddedServletContainerFactory)container);
				}
			}

			private void customizeTomcat(TomcatEmbeddedServletContainerFactory tomcatFactory) {
				tomcatFactory.addContextCustomizers(new TomcatContextCustomizer() {

					@Override
					public void customize(Context context) {
						Container jsp = context.findChild("jsp");
						if (jsp instanceof Wrapper) {
							((Wrapper)jsp).addInitParameter("development", "false");
						}

					}

				});
			}

		};
	}


	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(LextransApplication.class);
	}

}
