FROM jelastic/maven:3.9.5-openjdk-22.ea-b19
WORKDIR /app
COPY target/frontenddriver-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 9000
ENTRYPOINT ["java", "-jar", "app.jar"]
