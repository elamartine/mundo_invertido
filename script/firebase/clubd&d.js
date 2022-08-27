import app from "./app.js"
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js'
export async function inscricaoAoClube(inscricao){
  const banco = getFirestore(app);
  const clubddCollection = collection(banco, "clubd&d")
  const doc = await addDoc(clubddCollection, inscricao)
  return doc.id
}