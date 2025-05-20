FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app
RUN mkdir -p target
COPY target/*.jar target/
RUN ls -la target/
RUN mv target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/app.jar"]