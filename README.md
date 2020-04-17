# Two Factor Authentication CLI

This project implements one-time passcode (OTP) generation using open standards developed by [Initiative for Open Authentication (OATH)](http://www.openauthentication.org/)

![2FA CLI](documentation/console.png?raw=true "2FA Command Line")
![2FA Webpage](documentation/website.png?raw=true "2FA Webpage")

## Getting Started

#### 1. Clone and install dependencies
```
git clone https://github.com/SkyTradeInc/Two-Factor-Authentication.git
cd Two-Factor-Authentication
npm i
```

#### 2. Configure
Create a file named `secrets.json`. This will contain our back-up secrets we receive when enabling two factor authentication

*Example configuration file*
```
[
  {
    "website": "Google",
    "secret": "KNPHN3Q6IK5X9ZPY",
    "email": "example@gmail.com"
  },
  {
    "website": "Github",
    "secret": "CRDJ6INNLA5CAMPP",
    "email": "example@gmail.com"
  }
]
```

### 3. Run

```
node index
```

If there is no errors in your `secrets.json` file, your OTP will display in your console



And if you go to http://localhost:6060
