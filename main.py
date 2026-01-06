import nfc
import firebase_admin
from firebase_admin import credentials, firestore

# Firebaseの初期設定
cred = credentials.Certificate("path/to/serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

def on_connect(tag):
    # タグのIDを取得
    id_m = tag.identifier.hex().upper()
    print(f"カードを検知しました: {id_m}")

    # Firestoreに打刻データを追加
    doc_ref = db.collection('attendance_logs').document()
    doc_ref.set({
        'card_id': id_m,
        'timestamp': firestore.SERVER_TIMESTAMP,
        'status': 'entered'
    })
    print("データをFirestoreに送信しました。")

# USB接続のリーダーを待機
with nfc.ContactlessFrontend('usb') as clf:
    print("NFCカードをかざしてください...")
    clf.connect(rdwr={'on-connect': on_connect})
