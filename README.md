✨ תיאור הפרויקט
פרויקט זה הוא אפליקציית שאלות ותשובות מבוססת על OpenAI, שמאפשרת למשתמשים להירשם, לבחור נושא ותת־קטגוריה, לשלוח שאלות ולקבל תשובות, תוך שמירה על היסטוריית השימוש שלהם.

📦 טכנולוגיות בשימוש
Frontend: React, Axios, React Router

Backend: Node.js, Express

Database: PostgreSQL

ORM: Prisma

OpenAI API

סביבת פיתוח: Visual Studio Code

⚙️ הוראות התקנה והרצה
1. התקנת הפרויקט
bash
Copy
Edit
git clone <repository-url>
cd project-for-a-practicum
2. התקנת התלויות
bash
Copy
Edit
# התקנת תלויות השרת
cd server
npm install

# התקנת תלויות ה-Client
cd ../client
npm install
3. הגדרת משתני סביבה
בצד השרת, צרי קובץ בשם .env בתיקיית server עם השורה הבאה:

env
Copy
Edit
DATABASE_URL="postgresql://postgres:1234@localhost:5432/practicum"
OPENAI_API_KEY=your-openai-key-here
4. הפעלת מסד נתונים
וודאי שה-PostgreSQL רץ אצלך מקומית, עם מסד נתונים בשם practicum:

אם עדיין לא יצרת אותו: התחברי ל-PostgreSQL עם pgAdmin או דרך CLI וצרי מסד נתונים practicum.

5. הרצת Prisma
bash
Copy
Edit
cd server
npx prisma migrate dev --name init
npx prisma generate
6. הרצת השרת
bash
Copy
Edit
cd server
npm start
7. הרצת ה-Client
bash
Copy
Edit
cd client
npm start
🚧 הנחות ודיוקים חשובים
הפרויקט נבנה כחלק מהדרכה, ולא היה לי רקע קודם בעבודה עם Docker.

ניסיתי לשלב את Docker בפרויקט לפי הדרישות, למרות שלא למדתי את החומר הזה כלל - ניסיתי לחפס חומרים ולקבל הוראות איך להשתמש בו אך לא הצלחתי

לכן, בשלב מסוים הסרתי את השימוש ב-Docker, חזרתי להרצה רגילה של שרת ו־Client מקומיים, ואולי בגלל הזמן שהשקעתי הפרויקט לא גמור😉.
