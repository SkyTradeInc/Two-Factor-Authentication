# Two Factor Authentication CLI

This project implements one-time passcode generation using open standards developed by [Initiative for Open Authentication (OATH)](http://www.openauthentication.org/)


## Getting Started

#### 1. Clone and install dependencies
```
git clone https://github.com/SkyTradeInc/Two-Factor-Authentication.git
cd Two-Factor-Authentication
npm i
```

#### 2. Configure
Create a file named `secrets.json`. This will contain our back-up secrets we receive when enabling two factor authentication

An example configuration file:

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
