# Customer Dashboard

This project is a Customer Dashboard application built using Angular within an NX workspace. It follows a monolithic architecture approach and demonstrates seamless integration between frontend and backend systems.

## Features

### Customer Page:
- Dynamically fetches customer data using Node.js and Express.js APIs.
- Implements pagination, search, and sorting for enhanced data navigation:
  - **Pagination and Sorting by Date:** Managed through backend APIs for optimized performance.
  - **Sorting by Name and Country:** Implemented on the frontend, applicable to the dataset of the current page.
- APIs are designed to deliver only the necessary data for the requested page, enhancing performance.

### Dynamic Pages:
- Features a generic setup for dynamic pages to accommodate various content requirements for non-customer-specific pages.
- Simplifies the addition of new pages without significant code duplication.

### 404 Page Routing:
- Custom routing to handle 404 - Page Not Found scenarios.

### Service Layer:
- A well-organized service layer for managing API calls with two distinct functions:
  - **Fetch Data:** Handles pagination and sorting requests.
  - **Search Data:** Focuses on search functionality.
- Promotes separation of concerns for improved readability and maintainability.
**Tech Stack**

**Frontend:**
- Angular (with NX Workspace)
- TypeScript

**Backend:**
- Node.js
- Express.js

**Other Tools:**
- HTML5
- CSS3
- RxJS

**Installation Instructions**

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd customer-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:

   **Backend:**
 - Backend Repository: https://github.com/Amit2648Singh/DashboardServer.git
 - My Backend is hosted at https://dashboardclient-2zci.onrender.com. Use this BASE_URL: "https://dashboardclient-2zci.onrender.com/api/users" or clone the repo and use localhost for API calls.

   **Frontend:**
   ```bash
   nx serve
   ```

5. Access the application by opening http://localhost:4200 in your browser also hosted on vercel https://dashboard-client-drab.vercel.app/customer.
