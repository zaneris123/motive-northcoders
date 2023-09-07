<div align="center">

![Logo](./src/assets/1.svg)

</div>

# MOTIVE APP

## Description

This is a Mobile/Web social application that helps people to find the best hidden gems throughout the UK.

Using this app, a user is able to:

```
- Navigate through a map to check the hidden gems.
- Navigate through a list to achieve the same thing.
- Filter that list by categories.
- View individual hotspots/activities with their details such as images, description, categories, price, location, comments, and so on.
- Get the direction to that location.
- Sign up with Google, Twitter or Facebook.
```

A logged user, besides the previous features, is also ablte to:

```
- Log out.
- Comment on a secret hotspot.
- Add rating to that secret location.
- Report innapropiate content.
- Post new locations as long as the user is in the same location as the added place.
```

**_NOTE:_** The app can be deployed for mobile, however the styling is not currently responsive, it will be fixed ASAP since it is still in development and more features are coming soon.

<div align="center">

## Demo (Web)

![screenshot](https://firebasestorage.googleapis.com/v0/b/motive-media.appspot.com/o/motive-web-media%2FScreenshot%202023-05-23%20at%2022.46.19.png?alt=media&token=75b95056-cb5a-47aa-9e95-7683ecd16422)
![screenshot](https://firebasestorage.googleapis.com/v0/b/motive-media.appspot.com/o/motive-web-media%2FScreenshot%202023-05-23%20at%2022.47.07.png?alt=media&token=5aecb052-afdc-48b8-9ddd-1e9786e0d4d7)
![screenshot](https://firebasestorage.googleapis.com/v0/b/motive-media.appspot.com/o/motive-web-media%2FScreenshot%202023-05-23%20at%2022.45.23.png?alt=media&token=1d462b7b-c11c-487b-b8e4-8eb1db333f10)
![screenshot](https://firebasestorage.googleapis.com/v0/b/motive-media.appspot.com/o/motive-web-media%2FScreenshot%202023-05-23%20at%2022.47.39.png?alt=media&token=1396a452-7801-465d-9332-c975ab086099)
![screenshot](https://firebasestorage.googleapis.com/v0/b/motive-media.appspot.com/o/motive-web-media%2FScreenshot%202023-05-23%20at%2022.48.06.png?alt=media&token=f14a21d7-1dd3-4c80-ade4-5d58d78e84f8)
![screenshot](https://firebasestorage.googleapis.com/v0/b/motive-media.appspot.com/o/motive-web-media%2FScreenshot%202023-05-23%20at%2022.48.22.png?alt=media&token=b5e8fd3a-f745-4cf2-88fa-303e963638fb)
![screenshot](https://firebasestorage.googleapis.com/v0/b/motive-media.appspot.com/o/motive-web-media%2FScreenshot%202023-05-23%20at%2022.48.31.png?alt=media&token=b0f9e64c-4c8f-493a-a80f-13a364627e4e)
![screenshot](https://firebasestorage.googleapis.com/v0/b/motive-media.appspot.com/o/motive-web-media%2FScreenshot%202023-05-23%20at%2022.48.55.png?alt=media&token=baa33643-d1e6-4acb-bf8a-bbb37120d85a)
![screenshot](https://firebasestorage.googleapis.com/v0/b/motive-media.appspot.com/o/motive-web-media%2FScreenshot%202023-05-23%20at%2022.49.31.png?alt=media&token=4eb5e902-2bff-42d2-9b92-8dac3af11284)

## Demo (Mobile)

![screenshot](https://firebasestorage.googleapis.com/v0/b/motive-media.appspot.com/o/motive-mobile-media%2FScreenshot%202023-05-23%20at%2023.03.54.png?alt=media&token=819a547b-978b-4b27-8a15-619915aa865a)
![screenshot](https://firebasestorage.googleapis.com/v0/b/motive-media.appspot.com/o/motive-mobile-media%2FScreenshot%202023-05-23%20at%2023.04.10.png?alt=media&token=62ce864b-7241-48f6-8c71-d81a0488acda)
![screenshot](https://firebasestorage.googleapis.com/v0/b/motive-media.appspot.com/o/motive-mobile-media%2FScreenshot%202023-05-23%20at%2023.04.23.png?alt=media&token=94074afb-4603-45a0-8a1d-47264d3cd8cc)
![screenshot](https://firebasestorage.googleapis.com/v0/b/motive-media.appspot.com/o/motive-mobile-media%2FScreenshot%202023-05-23%20at%2023.04.30.png?alt=media&token=97ee1a7f-b1bc-46b5-bc00-ad7e098419f1)
![screenshot](https://firebasestorage.googleapis.com/v0/b/motive-media.appspot.com/o/motive-mobile-media%2FScreenshot%202023-05-23%20at%2023.04.50.png?alt=media&token=ad7aa1e2-e042-4842-b070-6825ef1c986a)
![screenshot](https://firebasestorage.googleapis.com/v0/b/motive-media.appspot.com/o/motive-mobile-media%2FScreenshot%202023-05-23%20at%2023.05.01.png?alt=media&token=7a5e1d7c-a461-4c5f-915e-22b5e9b56f2e)
![screenshot](https://firebasestorage.googleapis.com/v0/b/motive-media.appspot.com/o/motive-mobile-media%2FScreenshot%202023-05-23%20at%2023.05.07.png?alt=media&token=aea67ebe-802e-4a2b-bbb6-33be31f10f10)

</div>

## Demo video (Web)

You can watch the demo video of this app [here](https://www.linkedin.com/feed/update/urn:li:activity:7067189428439392256/).

## Installation and Set-up

To run the project locally follow these steps:

1. Fork [this](https://github.com/zaneris123/motive-northcoders.git) repository.

2. Clone your forked copy of repo

```
git clone https://github.com/<your-github-username>/motive-northcoders.git
```

3. Install ionic CLI

```
npm install -g @ionic/cli@latest
```

4. Install dependencies

```
npm i
```

or

```
npm install
```

5. Setup Firebase configuration file

```
/// /src/firebaseConfig.js

export const firebaseConfig = {
  apiKey: // API KEY HERE,
  authDomain: // AUTHDOMAIN,
  projectId: // PROJECT_ID,
  storageBucket: // PROJECT_ID.appspot.com
 };
```

Once done, you will have the following scripts to run and deploy the app.

## Available Scripts

1. Run

```
ionic serve
```

2. Build

```
ionic build
```

## Tech Stack

- [Vue](https://vuejs.org/): JavaScript framework for building user interfaces.
- [Ionic](https://ionicframework.com/): An open source mobile UI toolkit for building modern, high quality cross-platform mobile apps from a single code base.
- [Capacitor](https://capacitorjs.com/): An open source native runtime for building Web Native apps. Create cross-platform iOS, Android, and Progressive Web Apps with JavaScript, HTML, and CSS.
- [Firebase Cloud Firestore](https://firebase.google.com/docs/firestore): Flexible, scalable database for mobile, web, and server development.
- [Firebase Authentication](https://firebase.google.com/docs/auth): To authenticate users to the app using identity providers in this case like Google, Twitter and Facebook.
- [Firebase Cloud Storage](https://firebase.google.com/docs/storage): A powerful, simple, and cost-effective object storage service.
- [Google Maps API](https://developers.google.com/maps): To display the interactive map view with the corresponding markers.
- [Pinia state management]([https://developers.google.com/maps](https://pinia.vuejs.org/)): To handle user login data persistence.

## Team members

- [Bobby Nagra](https://github.com/bobbynagra92)
- [Roisin Long](https://github.com/Roisinlo)
- [Akashdeep Singh Kaur](https://github.com/akashdeep931)
- [Inna Chtej](https://github.com/xtej4ik)
- [Zain Shah](https://github.com/zaneris123)
