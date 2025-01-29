# HNG API Project

## Description
This is a simple Node.js-Express API that returns:
- Registered email address
- Current datetime in ISO 8601 format (UTC)
- GitHub URL of the codebase

## API Documentation

### Endpoint
#### `GET /`

### Response Format
- **Status Code**: `200 OK`
- **Response Body**:

```json
{
  "email": "chibuezemicahe@gmail.com",
  "current_datetime": "ISO-8601-UTC-timestamp",
  "github_url": "https://github.com/chibuezemicahe/Api-to-retrieve-Basic-information.git"
}
```

## Setup Instructions

### Prerequisites
- Node.js (>= 16.x)
- npm (Node Package Manager)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/chibuezemicahe/Api-to-retrieve-Basic-information.git
  cd Api-to-retrieve-Basic-information
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Access the API at:
   ```
   http://localhost:3000
   ```

## Links

- [Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)