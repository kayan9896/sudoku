From javascript

WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]
