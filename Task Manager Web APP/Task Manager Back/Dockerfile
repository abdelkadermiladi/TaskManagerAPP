# Use an official OpenJDK runtime as a base image
FROM openjdk:17-oracle

# Set the working directory in the container
WORKDIR /app

# Copy the packaged JAR file into the container
COPY target/TaskListApp-0.0.1-SNAPSHOT.jar /app/app.jar

# Expose the port the app runs on
EXPOSE 8090

# Specify the command to run on container start
CMD ["java", "-jar", "app.jar"]
