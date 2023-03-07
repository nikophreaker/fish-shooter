/**
 * Copyright 2022 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getCountFromServer } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";

// CONFIGURASI FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBdFMZoNwEWNqCOfUezoSB-TewpOBUfX98",
  authDomain: "mgoalindo---app.firebaseapp.com",
  databaseURL: "https://mgoalindo---app-default-rtdb.firebaseio.com",
  projectId: "mgoalindo---app",
  storageBucket: "mgoalindo---app.appspot.com",
  messagingSenderId: "909481590933",
  appId: "1:909481590933:web:a0626d75765bd850a5db9c",
  measurementId: "G-RLCM7JVYFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app, "asia-southeast2");

async function invokeFunctionCall(name) {
  const callable = httpsCallable(functions, name);
  callable({})
    .then((result) => {
    console.log(result);
  });
}

export async function fetchLeaderboardCount() {
  const db = getFirestore(app);
  const coll = collection(db, "scores");
  const snapshot = await getCountFromServer(coll);
  console.log('count: ', snapshot.data().count);
}

export async function addScores() {
  invokeFunctionCall("addScores");
}

export async function addScore(user, score) {
  const callable = httpsCallable(functions, "addScore");
  callable({playerID: user, score: score})
    .then((result) => {
    console.log(result);
  });
}

export async function deleteScores() {
  invokeFunctionCall("deleteScores");
}

export async function getRank(user) {
  const callable = httpsCallable(functions, "getRank");
  callable({playerID: user})
    .then((result) => {
    console.log(result);
  });
}

export async function updateScore(user, score) {
  const callable = httpsCallable(functions, "updateScore");
  callable({playerID: user, newScore: score})
    .then((result) => {
    console.log(result);
  });
}

export function codelab() {
  console.log("Welcome to the leaderboards codelab!");
}
