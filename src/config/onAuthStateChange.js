"use client";

import { usePathname, useRouter } from "next/navigation";
import { addUser, removeUser } from "../store/Slices/userSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const onAuthStateChange = () => {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        if (pathname === "/login") {
          navigate.push("/");
        }
      } else {
        -(
          // User is signed out
          dispatch(removeUser())
        );
        navigate.push("/login");
      }
    });

    // Unsusbscribe when component unmounts
    return () => unsubscribe();
  }, []);
};

export default onAuthStateChange;
