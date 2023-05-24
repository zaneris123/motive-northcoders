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

![screenshot](./motive-app-media/Screenshot%202023-05-23%20at%2022.46.19.png)
![screenshot](./motive-app-media/Screenshot%202023-05-23%20at%2022.47.07.png)
![screenshot](./motive-app-media/Screenshot%202023-05-23%20at%2022.45.23.png)
![screenshot](./motive-app-media/Screenshot%202023-05-23%20at%2022.47.39.png)
![screenshot](./motive-app-media/Screenshot%202023-05-23%20at%2022.48.06.png)
![screenshot](./motive-app-media/Screenshot%202023-05-23%20at%2022.48.22.png)
![screenshot](./motive-app-media/Screenshot%202023-05-23%20at%2022.48.31.png)
![screenshot](./motive-app-media/Screenshot%202023-05-23%20at%2022.48.55.png)
![screenshot](./motive-app-media/Screenshot%202023-05-23%20at%2022.49.31.png)

## Demo (Mobile)

![screenshot](./motive-app-media-mobile/Screenshot%202023-05-23%20at%2023.03.54.png)
![screenshot](./motive-app-media-mobile/Screenshot%202023-05-23%20at%2023.04.10.png)
![screenshot](./motive-app-media-mobile/Screenshot%202023-05-23%20at%2023.04.23.png)
![screenshot](./motive-app-media-mobile/Screenshot%202023-05-23%20at%2023.04.30.png)
![screenshot](./motive-app-media-mobile/Screenshot%202023-05-23%20at%2023.04.50.png)
![screenshot](./motive-app-media-mobile/Screenshot%202023-05-23%20at%2023.05.01.png)
![screenshot](./motive-app-media-mobile/Screenshot%202023-05-23%20at%2023.05.07.png)

</div>

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
