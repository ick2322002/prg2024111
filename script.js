import { initializeApp } from "https://www.gstatic.com/firebasejs/9.x/firebase-app.js";
import { getFirestore, collection, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/9.x/firebase-firestore.js";

// Firebaseの設定（コンソールからコピー）
const firebaseConfig = { ... };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// データのリアルタイム監視
const q = query(collection(db, "attendance_logs"), orderBy("timestamp", "desc"));
onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
            const data = change.doc.data();
            console.log("新しい出席者:", data.card_id);
            // ここでHTMLを書き換えてiPadの画面にリスト表示する
        }
    });
});
