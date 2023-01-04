import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAnalytics, logEvent, type Analytics } from 'firebase/analytics';

const FIREBASE_CONFIG = {
	apiKey: 'AIzaSyAP25Qy_Hy9DpWnCQSQULpkl7c0l3__NxA',
	authDomain: 'bryanmylee-com.firebaseapp.com',
	projectId: 'bryanmylee-com',
	storageBucket: 'bryanmylee-com.appspot.com',
	messagingSenderId: '1001639288314',
	appId: '1:1001639288314:web:18c4fe47c2538bb2181843',
	measurementId: 'G-XJLV4W6DZ0',
};

export const initializeFirebase = () => {
	const app = initializeApp(FIREBASE_CONFIG);
	return app;
};

export interface Logger {
	analytics: Analytics;
	log: (eventName: string, eventParams?: Record<string, string>) => void;
}

export const initializeLogger = (app: FirebaseApp): Logger => {
	const analytics = getAnalytics(app);
	const log = (eventName: string, eventParams?: Record<string, string>) => {
		logEvent(analytics, eventName, eventParams);
	};
	return { analytics, log };
};
