FROM gradle:7.0.0-jdk8
COPY --chown=gralde:gradle . .
WORKDIR .
RUN gradle build -x test --no-daemon
EXPOSE 8081
CMD ["gradle","bootRun"]