package com.cloudingenieur.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableConfigurationProperties(UriConfiguration.class)
public class GatewayApplication {

	@Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder, UriConfiguration uriConfiguration) {
		String httpUri = uriConfiguration.getHttpbin();
		return builder.routes()
            .route(r -> r
					.path("/api/v1/events")
					.filters(f -> f.addRequestHeader("Hello", "World"))
					.uri(httpUri))
            .build();
    }

	public static void main(String[] args) {
		SpringApplication.run(GatewayApplication.class, args);
	}
}


@ConfigurationProperties
class UriConfiguration {

	// private String httpbin = "https://eventsservice.victoriousgrass-90628d5f.australiaeast.azurecontainerapps.io";
	private String httpbin = "http://localhost:8060";
	public String getHttpbin() {
		return httpbin;
	}

	public void setHttpbin(String httpbin) {
		this.httpbin = httpbin;
	}
}
