package com.cloudingenieur.gateway;

import com.nimbusds.oauth2.sdk.token.AccessToken;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.WebSession;
import reactor.core.publisher.Mono;

@SpringBootApplication
//@EnableConfigurationProperties(UriConfiguration.class)
@RestController
public class GatewayApplication {


	private static final Logger LOGGER = LoggerFactory.getLogger(GatewayApplication.class);

	@GetMapping(value = "/token")
	public Mono<String> getHome(@RegisteredOAuth2AuthorizedClient OAuth2AuthorizedClient authorizedClient) {
		System.out.println("Authorized client: " + authorizedClient.getAccessToken().getScopes());
		return Mono.just(authorizedClient.getAccessToken().getTokenValue());
	}


	@GetMapping("/users")
	public String users() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		return authentication.getName();

	}
	@GetMapping("/session")
	public Mono<String> index(WebSession session) {
		return Mono.just(session.getId());
	}

	/*@Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder, UriConfiguration uriConfiguration) {
		String httpUri = uriConfiguration.getHttpbin();
		return builder.routes()
            .route(r -> r
					.path("/callme/ping")
					.filters(f -> f.addRequestHeader("Hello", "World"))
					.uri(httpUri))
            .build();
    } */

	public static void main(String[] args) {
		SpringApplication.run(GatewayApplication.class, args);
	}
}


/*@ConfigurationProperties
class UriConfiguration {

	// private String httpbin = "https://eventsservice.victoriousgrass-90628d5f.australiaeast.azurecontainerapps.io";
	private String httpbin = "http://localhost:8060";
	public String getHttpbin() {
		return httpbin;
	}

	public void setHttpbin(String httpbin) {
		this.httpbin = httpbin;
	}
}*/
