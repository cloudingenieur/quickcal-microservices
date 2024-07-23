package com.cloudingenieur.booking;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.jwt;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
class BookingApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	@Test
	void whenLackingScopeThenForbidden() throws Exception {
		this.mockMvc.perform(get("/bookings/v1/customers").with(jwt())).andExpect(status().isForbidden());
	}

	@Test
	void whenHavingScopeThenOk() throws Exception {
		this.mockMvc.perform(get("/bookings/v1/customers").with(jwt().authorities(List.of(new SimpleGrantedAuthority("SCOPE_TEST"))))).andExpect(status().isOk());
	}

}
