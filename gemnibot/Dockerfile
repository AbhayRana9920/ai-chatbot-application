# Build stage
FROM eclipse-temurin:21-jdk-alpine as builder
WORKDIR /build
COPY . .
RUN ./mvnw clean package -DskipTests

# Run stage
FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app
COPY --from=builder /build/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/app.jar"]