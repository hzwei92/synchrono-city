FROM clojure:temurin-21-lein-jammy

WORKDIR /app

# Copy project files for dependency resolution first
COPY project.clj .

# Download dependencies separately to take advantage of Docker caching
RUN lein deps

# Create certs directory
RUN mkdir -p /app/certs

# Copy source code
COPY src src
COPY resources resources
COPY test test

# Build the application
RUN lein uberjar

# Use a smaller runtime image
FROM eclipse-temurin:21-jre-jammy

WORKDIR /app

# Copy only the built jar from the previous stage
COPY --from=0 /app/target/uberjar/synchrono-0.1.0-standalone.jar ./app.jar

# Run the application
CMD ["java", "-jar", "app.jar"] 