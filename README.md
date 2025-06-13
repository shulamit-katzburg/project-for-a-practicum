# AI-Driven Learning Platform – Mini MVP

## תיאור הפרויקט

פלטפורמה לימודית מונחית בינה מלאכותית, בה המשתמש נרשם/מתחבר באמצעות שם וטלפון, בוחר נושא ותת-קטגוריה, שולח שאלה (prompt), ומקבל תשובה ממערכת GPT. בנוסף, נשמרת היסטוריית השאלות והתשובות.

## טכנולוגיות בשימוש

- **Frontend**: React, Axios, React Router DOM
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **AI Integration**: OpenAI API

## הנחות והערות

- לא למדתי מראש Docker, ניסיתי לשלב אותו תוך כדי התקדמות בפרויקט. לאחר מאמצים מרובים, נאלצתי להסיר אותו כי הוא גרם לבעיות תלויות בפרוקסי אינטרנט (נטפרי), במיוחד בהורדת קבצי Prisma.
- הגישה שלי לפרויקט הייתה פרקטית: בניתי כל שלב תוך כדי הבנה מתקדמת של הצרכים והחיבורים, דאגתי שהכול יעבוד מקומית בצורה פשוטה ויעילה.

## הוראות התקנה והרצה

### דרישות מוקדמות

- Node.js מותקן
- PostgreSQL מותקן ורץ (ברירת מחדל פורט 5432)

### הגדרת מסד נתונים

1. יצירת מסד נתונים בשם `practicum`
2. בקובץ `.env`:

```
DATABASE_URL="postgresql://postgres:1234@localhost:5432/practicum"
OPENAI_API_KEY="..."
```

### התקנת תלויות

```bash
cd server
npm install
npx prisma generate
npx prisma migrate dev --name init

cd ../client
npm install
```

### הרצה

```bash
# הרצת צד שרת
cd server
npm run dev

# הרצת צד לקוח
cd ../client
npm start
```

### הכנסת נתוני דמו (Seed) לקטגוריות ותתי קטגוריות

לאחר הרצת המיגרציות, יש להריץ את הפקודה הבאה בתיקיית ה-server כדי להכניס קטגוריות ותתי קטגוריות אוטומטית:

```bash
npm run seed
```

הפקודה תריץ את הסקריפט `prisma/seed.js` ותכניס נתוני דמו לדאטהבייס.

### כתובות שימושיות

- שרת: `http://localhost:5000`
- קליינט: `http://localhost:3000`
- דף התחברות/הרשמה: נטען ראשון כברירת מחדל

## שלבי MVP שהושלמו

-

בהצלחה בהמשך 🎓

