From javaserver:latest

WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]
