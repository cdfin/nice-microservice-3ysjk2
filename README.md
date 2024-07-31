# Digital Dash

## Project Summary
Digital Dash is a React-based dashboard application designed to display various metrics and data visualizations. The project uses Material-UI for styling, Redux for state management, and Recharts for data visualization.

# Key Features Implemented:

Basic project structure and routing
Theme setup using Material-UI
Redux integration for state management
KPI cards displaying key metrics
Line chart showing revenue trend
Bar chart displaying category distribution
Interactive buttons to update data in real-time
User Authentication (Login/Register)
Email Verification
Password Reset Functionality
Role-Based Access Control
User Profile Management
Protected Routes
Dashboard with KPI Cards
Data Visualization (Line and Bar Charts)
Real-time Data Updates
Error Handling and Loading States

# Tech Stack

React
Redux (Redux Toolkit)
React Router
Material-UI
Recharts
ApexCharts
Axios
SWR
Lodash


Project Structure
Copysrc/
├── components/
│   ├── Admin/
│   │   └── AdminDashboard.js
│   ├── Analytics/
│   │   └── AnalyticsPage.js
│   ├── Auth/
│   │   ├── EmailVerification.js
│   │   ├── ForgotPassword.js
│   │   ├── Login.js
│   │   ├── ProtectedRoute.js
│   │   ├── Register.js 
│   │   ├── ResetPassword.js 
│   │   └── RoleBasedRoute.js 
│   ├── Dashboard/
│   │   ├── ApexAreaChart.js
│   │   ├── ApexMixedChart.js
│   │   ├── BarChartCard.js
│   │   ├── ChartCard.js
│   │   ├── DateRangeSelector.js
│   │   ├── DashboardHome.js
│   │   └── KPICard.js
│   ├── Email/
│   │   └── EmailPage.js
│   ├── Layout/
│   │   ├── Header.js
│   │   └── Sidebar.js
│   ├── Profile/
│   │   └── UserProfile.js
│   └── ErrorBoundary.js
├── hooks/
│   ├── useDashboardData.js
│   └── UseDataRefresh.js
├── redux/
│   ├── authSlice.js
│   ├── dashboardSlice.js
│   └── store.js
├── services/
│   ├── authService.js
│   └── api.js
├── styles/
│   └── theme.js
├── App.js
└── index.js


 ## Progress
- [x] Project setup
- [x] Routing implemented
- [x] Redux state management integrated
- [x] Basic dashboard layout created
- [x] KPI cards implemented
- [x] Line chart for revenue trend added
- [x] Bar chart for category distribution added
- [x] Interactive data updates implemented
- [x] API data fetching implemented
- [x] Loading and error states handled
- [x] Error Boundary added for robust error handling
- [x] User authentication implemented   
- [x] Protected routes added
- [x] Email verification implemented
- [x] Password reset functionality added
- [x] User profile Managment implemented
- [x] Role-based access control implemented
- [x] Date range selector functionality implemented
- [x] ApexCharts integration for advanced visualizations
- [x] Interactive area chart with donut chart added
- [x] Mixed chart (line and bar) component created
- [x] Data refresh mechanism implemented     
- [x] Analytics page added with additional charts
- [x] Implemented Axios for API calls
- [x] Created API service with Axios
- [x] Updated Redux slice to use new API service
- [x] Updated useDashboardData hook to work with new Redux actions
- [x] Maintained existing DashboardHome component structure
  
## Next Steps
- [ ] Add more advanced chart types
- [ ] Create additional dashboard pages for detailed analytics
- [ ] Implement real-time analytics
- [ ] Add data refresh mechanism
- [ ] Implement caching strategies
- [ ] Add unit and integration tests
- [ ] Enhance responsive design
- [ ] Enhance chart interactivity (click events, tooltips)
- [ ] Implement real-time data updates with websockets
- [ ] Connect with backened API (when available) 
- [ ] Incorporate Lodash for data manipulation
- [ ] Utlizie SWR for data fetching and caching
- [ ] Improve responsive design

## Setup
1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file in the root directory and add your API URL: [REACT_APP_API_URL=https://your-api-url.com]
4. Run `npm start` to start the development server

## Available Scripts
- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production

## Learn More
To learn more about the technologies used in this project, check out the following resources:
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/introduction/getting-started)
- [Material-UI Documentation](https://material-ui.com/getting-started/installation/)
- [Recharts Documentation](https://recharts.org/en-US/guide)
- [Lodash Documentation](https://lodash.com/docs/)
- [SWR Documentation](https://swr.vercel.app/)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [ApexCharts Documentaion](https://apexcharts.com/docs/react-charts/)
