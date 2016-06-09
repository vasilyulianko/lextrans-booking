package com.lextrans;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import static org.springframework.core.Ordered.HIGHEST_PRECEDENCE;

@Configuration
@ComponentScan
@EnableAutoConfiguration
@Order(HIGHEST_PRECEDENCE)
public class LextransApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(LextransApplication.class, args);
	}
/*
	*//* Used for running in "embedded" mode *//*
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

	*//* https://github.com/spring-projects/spring-boot/issues/2825#issuecomment-93479758 *//*
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
	}*/



	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		ObjectMapper mapper = new ObjectMapper();
		mapper.findAndRegisterModules();
		return application.sources(LextransApplication.class);
	}

}
