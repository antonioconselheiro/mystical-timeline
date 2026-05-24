FROM node:20

RUN npm install husky eslint typescript @angular/cli sass-lint sassdoc -g
RUN npm install npx -g --force

WORKDIR /mystical-timeline

ENV LANG=C.UTF-8
ENV LANGUAGE=C.UTF-8
ENV LC_ALL=C.UTF-8
ENV TZ=America/Sao_Paulo
ENV DEBUG_COLORS=true
ENV FORCE_COLOR=true

EXPOSE 4207

# The run the start script
CMD [ "/bin/bash" ]
