import { initializeApp } from "https://www.gstatic.com/firebasejs/9.x/firebase-app.js";
import { getFirestore, collection, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/9.x/firebase-firestore.js";

// Firebaseの設定（コンソールからコピー）
const firebaseConfig = { apiKey: "AIzaSyBNA0j_vbplmYBnWKdwBlEslLux69MvHE8",
  authDomain: "kadaikenkyu-e3b1.firebaseapp.com",
  projectId: "kadaikenkyu-e3b1",
  storageBucket: "kadaikenkyu-e3b1.firebasestorage.app",
  messagingSenderId: "1005409966843",
  appId: "1:1005409966843:web:dca5fc41b5f55f86bf6e5e",
  measurementId: "G-GL7BWPSWXT" };
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
