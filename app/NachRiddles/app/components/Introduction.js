import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native'

export default class Introduction extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imageStyle} source={require('../img/riddle.jpg')}>
          <View style={styles.backdropView}>
            <View style={{ height: 60, backgroundColor: '#2196F3' }}>
              <Text style={styles.titleText}>הוראות</Text>
            </View>
            <ScrollView contentContainerStyle={styles.contentContainer}>
              <Text style={styles.lineText}>
                ברוכים הבאים למשחק "אביע חידות מני קדם"
                {'\n'}
                המשחק מבוסס על פי ספרו של דוד צברדלינג ז''ל.
                {'\n'}
                {'\n'}
                מטרת המשחק:
                {'\n'}לצבור כמה שיותר יהלומים.
                {'\n'}
                {'\n'}
                מטרה לימודית:
                {'\n'}לרכוש יידע בבקיאות על הפרשה עליה החידון מורכב.
                {'\n'}
                {'\n'}
                מבנה המשחק:
                {'\n'}
                בפיתוח המשחק ניסינו להיות כמה שיותר נאמנים למקור ועל כן חשוב לתת
                מספר דגשים למשחק.
                {'\n'}
                המשחק מכיל 54 חידונים כאשר כל חידון מכיל 22 חידות.
                {'\n'}
                כל החידות כתובות בחרוזים והתשובות עליהן הינם מילים הכתובים באותה
                פרשה עליהן מבוססות החידות,
                {'\n'}
                לכן מומלץ ללמוד את הפרשה עם רש''י ומצודות לפני שמתחילים לענות על
                החידות (כפי שמציין זאת המחבר בספרו).
                {'\n'}
                {'\n'}
                בכותרת של מסך החידה מצויין שם הספר בנ''ך עליו מבוסס החידון,
                לדוגמא:
                {'\n'}
              </Text>
              <View>
                <Image source={require('../img/book_for_riddle.png')} />
              </View>
              <Text style={styles.lineText}>
                {'\n'}
                {'\n'}
                מתחת לכותרת מצויינים נתוני החידון הבאים:
                {'\n'}
                1. מספר החידה.
                {'\n'}
                2. פרשה מקבילה.
                {'\n'}
                3. שם החידון.
                {'\n'}
                {'\n'}
              </Text>
              <View>
                <Image source={require('../img/listA.png')} />
              </View>
              <Text style={styles.lineText}>
                {'\n'}
                {'\n'}
                {'\n'}
                מספר חידה - זהו המספר של החידה המוצגת, ככל שתתקדמו יותר במשחק
                המספר הזה יעלה.
                {'\n'}
                {'\n'}
                פרשה מקבילה - הספר "אביעה חידות מני קדם" נכתב במקור כדי לעודד
                לימוד על פרשיות הנ''ך המלמדים את קורות עם ישראל מכניסתם לארץ ועד
                שיבת ציון,החלוקה נעשתה על פי פרשיות השבוע כדי ליצור מחזור שיהיה
                ניתן להשלים כל שנה בשמחת תורה, על כן לכל פרשה יש את הפרשה
                המקבילה לה, לדוגמא פרשת "יהושע" מקבילה לפרשת "בראשית", פרשת
                "יריחו" מקבילה לפרשת "נח" וכן הלאה.
                {'\n'}
                {'\n'}
                החידון - שם החידון והפרקים של הפרשה אותם יש ללמוד כדי לענות
                נכונה על החידון. לחיצה על כפתור זה תחשוף את הפרשה שיש ללמוד לחידון זה.
                {'\n'}
                {'\n'}
                {'\n'}
                מתחת לנתוני החידון מצויינת טבלת כלים לשחקן:
                {'\n'}
                1. הוראות.
                {'\n'}
                2. חנות הצלה.
                {'\n'}
                3. מספר יהלומים.
                {'\n'}
                {'\n'}
              </Text>
              <View>
                <Image source={require('../img/listB.png')} />
              </View>
              <Text style={styles.lineText}>
                {'\n'}
                {'\n'}
                הוראות - בלחיצה על כפתור זה יפתח חלון אשר יציג את דף הוראות זה.
                {'\n'}
                חנות הצלה - חנות ההצלה מכילה רמזים על התשובה בכל חידון, רכישת
                רמז תגרור הפסד ביהלומים, ישנם שלושה סוגי רמזים:
                {'\n'}
                - רמז השווה יהלום אחד.
                {'\n'}
                - רמז השווה שני יהלומים.
                {'\n'}
                - מעבר לחידה הבאה, שווה לשלושה יהלומים.
                {'\n'}
                * במידה ולשחקן אין מספיק יהלומים הוא לא יוכל לרכוש נתונים מחנות
                ההצלה.
                {'\n'}
                {'\n'}
                מספר יהלומים - יציג את סכום היהלומים המצטבר לכל אורך המשחק.
                {'\n'}
                {'\n'}
                {'\n'}
                מתחת לטבלת הכלים תופיע החידה, מענה נכון על החידה תעביר אתכם
                לחידה הבאה.
                {'\n'}
              </Text>
              <View>
                <Image source={require('../img/DaRiddle.png')} />
              </View>
              <Text style={styles.lineText}>
                {'\n'}
                {'\n'}
                מתחת החידה תופיע מגילת התשובה עליה יש להקיש את התשובה.
                {'\n'}
                {'\n'}
              </Text>
              <View>
                <Image source={require('../img/DaAnswer.png')} />
              </View>
              <Text style={styles.lineText}>
                {'\n'}
                {'\n'}
                מתחת למגילת התשובה יופיעו שני כפתורים:
                {'\n'}
                1. בדוק - בודק את הפתרון שהוכנס במגילת התשובה.
                {'\n'}
                2. מחק - מסיר את הפתרון שהוכנס במגילת התשובה.
                {'\n'}
                {'\n'}
              </Text>
              <View>
                <Image source={require('../img/buttons.png')} />
              </View>
              <Text style={styles.lineText}>
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
              <Text style={styles.lineText}>
                {'\n'}
                אנו מקווים שתהנו שתפיקו את המייטב היידע וההנאה מהמשחק.
                {'\n'}
                {'\n'}
                נודה לכם להשארת תגובות, הערות או הארות בדף של האפליקציה
                ב-Google-Store,
                {'\n'}
                או בשליחת דוא''ל לכתובת:
                {'\n'}
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
                תהנו.
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
              </Text>
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
    fontSize: 20
  },
  ImageLine: {
    resizeMode: 'stretch'
  },
  lineLink: {
    textAlign: 'center',
    color: 'blue',
    fontSize: 20
  }
})
