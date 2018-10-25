import React, { Component } from 'react'
import {
  AppRegistry,
  View,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Linking
} from 'react-native'
import { StackNavigator } from 'react-navigation'

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imageStyle} source={require('../img/riddle.jpg')}>
          <View style={styles.backdropView}>
            <View style={{ height: 60, backgroundColor: '#2196F3' }}>
              <Text style={styles.titleText}>אודות</Text>
            </View>
            <ScrollView>
              <Text style={styles.lineText}>
                אפליקציה זאת נכתבה על פי הספר "אביעה חידות מני קדם" שאותו כתב
                וערך הבה''ח דוד צברדלינג ז''ל ומוקדשת לעילוי נשמתו.
              </Text>
              <Text style={styles.lineText2}>
                {'\n'}
                {'\n'}
                בספרו הוא מציין:
                {'\n'}
                אביעה חידות מני קדם הוא הוא חיבור של 1188 חידות בחרוזים על ספרי
                נביאים ראשונים, דניאל, עזרה ונחמיה. החיבור מחלק את ספרי הנביאים
                ל54 פרשיות - כמניין פרשיות התורה בכדי שבכל שבוע יהיה אפשר ללמוד
                לצד פרשת השבוע גם חלק מהנביא ואחר כך לענות על החידון ועל ידי כך
                להיות בקיאים יותר בנביא.
                {'\n'}
                {'\n'}
                בנוסף כותב הוא בקדמה לספרו:
                {'\n'}
                ברוך שבחר בנביאים טובים, וזיכני לכתוב חידונים, שכולם בחרוזים,
                למען נהיה בהם בקיאים. והתחלתי לעשות זאת יען כי הרגשתי שברוך ה'
                אני די בקיא בתורתו הקדושה, לדעת היכן נמצא פסוק פלוני ומי אמר למי
                פסוק אלמוני, אך הרגשתי שאין אני בקיא כן בנביא, ועל-כן לקחתי את
                הנביאים, המלמדים את קורות עם ישראל מכניסתם לארץ ועד שיבת ציון
                (יהושע, שופטים, שמואל, מלכים, דניאל, עזרא ונחמיה), וחלקתים ל-54
                חלקים כמניין פרשיות התורה, ולכל חלק נתתי שם, כמו השמות של פרשיות
                התורה (כדי לזכור כל דיבור באיזו "פרשה" הוא נמצא), וסידרתי אותם
                מול פרשיות התורה למען אלמד בהם במשך השנה במקביל לפרשיות השבוע
                וכך אשלים מחזור בשמחת תורה ואתחיל מהתחלה כל שנה ואולי על-ידי כך
                אזכה לרכוש בקיאות בנביא, על-ידי החזרה כמו המחזור השנתי של קריאת
                התורה.
                {'\n'}
                {'\n'}
                והנה כמעט בכל שבוע מתכנסים חברֵי חדרי מישיבת "קול יעקב" המעטירה,
                לשמוע מפי חידון על פרשת השבוע שערך אותו הרב יהודה צימרוט בספרו
                "להתענג", וחברַי מראים שליטה ובקיאות נפלאה בפרשה ולכן הוסיף לי
                חברי היקר הבה"ח שלמה יוסף רווח שאולי כדי שאכתוב חידונים על הנביא
                כמו החידונים על הפרשה, והחידונים גם יעזרו לעשות חזרה על החומר
                וגם לחדד את השכל בבקיאות הנביא וכך השתדלתי לעשות.
                {'\n'}
                {'\n'}
                החידונים ערוכים לפי הא"ב כך שכל תשובה מתחילה באות אחרת לפי סדר
                הא"ב, וכמעט כל תשובות הן בעצם מילים מהפסוקים עצמם.
                {'\n'}
                {'\n'}
                חשוב להדגיש שיש ללמוד את כל ה"פרשה" לכל הפחות עם רש"י ומצודות
                ואחר כך ניתן לענות על החידות בקלות.
                {'\n'}
                {'\n'}
                קראתי לספר אביעה חידות מני קדם על שם הפסוק בתהלים עח,ב ששם מסביר
                המצודה: אומר דברים סתומים שנעשו בימי קדם.
                {'\n'}
                {'\n'}
                תודתי נתונה לבוחר בנביאים טובים ותפילתי אליו שאזכה לדעת את
                דבריהם של הנביאים ולהיות בקיא בהם, וכמובן תודה להוריי שנתנו לי
                את האמצעיים לעסוק בתורה ולישיבה הנפלאה שבה עליתי עוד ועוד, ישיבת
                "קול יעקב". תודה לרב יהודה צימרוט על ספרו הנפלא "להתענג" שכשמו
                כן הוא ומשם נולד הרעיון, וכן תודה לחברי היקר שהגה את הרעיון
                הנפלא שלמה יוסף רווח (וגם לחברֵי החדר שבאים לשמוע את חידון כמיטב
                המסורת של החדר). ולסיום חשוב להודות למי שהיו חברותות נהדרות
                בנביא, הרב חיים זוהר, והבה"ח עזרא עדס, שיזכו להמשיך ולעלות בתורה
                ובנביאים.
                {'\n'}
                {'\n'}
                דוד בן שלמה זלמן צברדלינג
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                משחק זה פותח באמצעות React-Native והוא מוגדר כקוד פתוח,
                {'\n'}
                כמו כן המשחק נבנה על ידי Guy Zwerdling בשיתוף פעולה עם צוות
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('https://rumors.io')
                }}
              >
                <Text style={styles.lineLink}>rumors.io</Text>
              </TouchableOpacity>
              <Text style={styles.lineText2}>
                {'\n'}
                אנו מקווים שתהנו שתפיקו את מייטב היידע וההנאה מהמשחק.
                {'\n'}
                {'\n'}
              </Text>
              <Text style={styles.lineText}>
                לתגובות, בקשות, שאלות, הערות או הארות נא לשלוח דוא"ל לכתובת
                הבאה:
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    'mailto:guy.zwerdling@gmail.com?subject=אביעה_חידות_מני_קדם&body='
                  )
                }}
              >
                <Text style={styles.lineLink}>Guy.Zwerdling@gmail.com</Text>
              </TouchableOpacity>
              <Text style={styles.lineText}>
                {'\n'}
                {'\n'}
                למעוניינים לקבל את הספר המקורי במחיר סמלי ניתן ליצור קשר דרך
                הדוא"ל הנ"ל ולציין בכותרת "אביעה חידות מני קדם".
                {'\n'}
              </Text>
              <Text style={styles.lineText2}>{'\n'}</Text>
              <Image
                style={styles.imageStyle2}
                source={require('../img/the_original_book.png')}
              />
              <Text style={styles.lineText2}>
                {'\n'}
                {'\n'}
                {'\n'}
                לפרטים נוספים:
                {'\n'}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('http://zwerd.com/NachRiddles')
                }}
              >
                <Text style={styles.lineLink}>
                  http://zwerd.com/NachRiddles
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center'
  },
  imageStyle: {
    resizeMode: 'stretch',
    width: null,
    height: null
  },
  backdropView: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255, 0.9)'
  },
  titleText: {
    color: 'white',
    fontSize: 60,
    textAlign: 'center',
    fontFamily: 'nrkis'
  },
  lineText: {
    padding: 5,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  lineText2: {
    padding: 5,
    color: 'black',
    fontSize: 20
  },
  imageStyle2: {
    resizeMode: 'stretch',
    width: 300,
    height: 300
  },
  lineLink: {
    textAlign: 'center',
    color: 'blue',
    fontSize: 20
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('About', () => About)
