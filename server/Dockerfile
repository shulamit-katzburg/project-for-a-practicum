# שלב 1: שימוש בתמונה של Node
FROM node:18

# שלב 2: יצירת תיקייה באפליקציה
WORKDIR /app

# שלב 3: העתקת הקבצים
COPY package*.json ./
RUN npm install

COPY . .

# שלב 4: פתיחת פורט
EXPOSE 5000

# שלב 5: פקודת ההרצה
CMD ["npm", "start"]

