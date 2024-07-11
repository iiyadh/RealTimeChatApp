import Chat from "./components/chat/Chat";
import Details from "./components/details/Details";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { useEffect, useContext } from "react";
import { ContextU } from "./context/UserContext";
import { auth } from './lib/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from './lib/firebase';

function App() {
  const { userData, setUserData } = useContext(ContextU);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data: ", error);
        }
      } else {
        setUserData(null);
      }
    });

    return () => {
      unSub();
    };
  }, [setUserData]);

  return (
    <div className='container'>
      {userData ? (
        <>
          <List />
          <Chat />
          <Details
            auth={auth}
            setUserData={setUserData}
          />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
}

export default App;