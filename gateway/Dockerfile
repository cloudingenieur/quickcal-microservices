FROM jelastic/maven:3.9.5-openjdk-22.ea-b19
WORKDIR /app
COPY target/gateway-0.0.5-SNAPSHOT.jar app.jar
EXPOSE 844
ENTRYPOINT ["java", "-jar", "app.jar"]
