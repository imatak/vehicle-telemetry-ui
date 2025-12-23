# Vehicle Telemetry Frontend

A simple Angular 21+ frontend application for interacting with the Vehicle Telemetry API. This app allows users to:

- Send telemetry data for a vehicle.
- Fetch and display the latest telemetry data.
- Display backend validation or error messages in a user-friendly manner.

The frontend uses **Angular standalone components** and **Angular Material** for styling and responsive UI.

---

## Features

- Vehicle telemetry input form:
    - Device ID (auto-generated UUID)
    - Engine RPM
    - Fuel Level (%)
    - Latitude & Longitude
- Send telemetry data to the backend.
- Retrieve the latest telemetry for a specific Device ID.
- Displays validation errors (400), not found errors (404), and server errors.
- Nicely formatted telemetry data card.
- Fully responsive and Material Design styled.

---

## Tech Stack

- **Angular 21+**
- **Angular Material** (Cards, Buttons, Form Fields)
- **RxJS** for HTTP observables
- **Standalone Components** (no NgModules required)
- **ChangeDetectorRef** for reactive UI updates

---

## Prerequisites

- Node.js >= 20
- npm >= 10
- Angular CLI 21+

---

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd vehicle-telemetry-ui
```

Install dependencies:
```bash
npm install
```

Make sure your backend API is running at:

http://localhost:5000/api/v1/telemetry

---
## Running the App

Start the Angular development server:
```bash
ng serve
```

Open your browser at http://localhost:4200

---
## Usage

- Fill in the telemetry form (Device ID is auto-generated).

- Click 'Send Telemetry' to send the data to the backend.

- Click 'Get Latest' to fetch the most recent telemetry data for the current Device ID.

- Any errors (validation, not found, server errors) will display in a red error card.

- Latest telemetry will display in a nicely formatted card below the form.