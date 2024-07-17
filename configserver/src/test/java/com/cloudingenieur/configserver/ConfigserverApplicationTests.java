package com.cloudingenieur.configserver;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
class ConfigserverApplicationTests {


	@Test
	void contextLoads() {
		Assertions.assertDoesNotThrow(() -> {
			ConfigServerApplication.main(new String[] {});
    });
	}

}
