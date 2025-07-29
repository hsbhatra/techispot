# TechISpot - Frontend Application

A modern React-based social platform for tech enthusiasts, featuring community interactions, news sharing, meme galleries, and project collaboration tools.

## 🚀 Features

### Core Functionality
- **Community Hub**: Social media-style feed with posts, comments, and interactions
- **News Section**: Tech news and articles with sidebar navigation
- **Meme Gallery**: Share and discover tech-related memes with upload functionality
- **Project Workspace**: Note-taking and project management with mentor integration
- **User Authentication**: Complete login/signup system with password recovery

### Key Components
- **Responsive Design**: Mobile-friendly interface using CSS modules
- **Real-time Interactions**: Like, comment, and share functionality
- **File Upload**: Support for images and videos in posts
- **Emoji Integration**: Built-in emoji picker for enhanced communication
- **Team Collaboration**: Display team members and project contributors

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.2.0
- **Routing**: React Router DOM 6.22.1
- **UI Components**: Material-UI (MUI) 5.15.12
- **Styling**: CSS Modules + Bootstrap 5.3.3
- **File Handling**: React Dropzone 14.2.3
- **Emoji Support**: Emoji Picker React 4.8.0
- **Social Sharing**: React Share 5.1.0
- **Icons**: Material-UI Icons
- **Build Tool**: Create React App 5.0.1

## 📁 Project Structure

```
src/
├── component/           # Reusable UI components
│   ├── Auth.module.css
│   ├── ForgotPassword.jsx
│   ├── Login.jsx
│   ├── NavBar.jsx
│   ├── NavBar.module.css
│   ├── SideBar.jsx
│   ├── SideBar.module.css
│   └── Signup.jsx
├── home/               # Main community features
│   ├── community/      # Community management
│   ├── Home.jsx        # Main landing page
│   ├── post/          # Post creation and display
│   └── team/          # Team member display
├── news/              # News and articles section
│   ├── News.jsx
│   ├── NewsPost.jsx
│   └── NewsSideBar/
├── memes/             # Meme gallery and sharing
│   ├── Meme.jsx
│   ├── MemesData.js
│   └── SideNavMeme.jsx
├── projects/          # Project workspace
│   ├── Mentors/       # Mentor integration
│   └── project/       # Notes and workspace
├── assets/            # Static assets
└── App.js            # Main application component
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend-techispot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎯 Key Features Explained

### Authentication System
- Local storage-based user management
- Login, signup, and password recovery
- Session persistence across browser sessions

### Community Feed
- Create posts with text, images, and videos
- Like, comment, and share functionality
- Real-time post updates
- User profile integration

### News Section
- Browse tech news and articles
- Sidebar navigation for categories
- Responsive article display

### Meme Gallery
- Upload and share memes
- Browse existing meme collection
- Social interaction features
- File upload with drag-and-drop support

### Project Workspace
- Note-taking functionality
- Project management tools
- Mentor integration for guidance
- Collaborative workspace features

## 🎨 UI/UX Features

- **Modern Design**: Clean, intuitive interface
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Dark/Light Mode**: Theme support (if implemented)
- **Accessibility**: Keyboard navigation and screen reader support
- **Performance**: Optimized rendering and lazy loading

## 🔧 Configuration

The application uses standard Create React App configuration. Key configuration files:

- `package.json` - Dependencies and scripts
- `public/index.html` - HTML template
- `src/index.js` - Application entry point

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload build files to S3 bucket
- **Heroku**: Use the buildpack for Create React App

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔮 Future Enhancements

- Real-time messaging
- Advanced search functionality
- Mobile app development
- API integration with backend services
- Enhanced analytics and insights
- Advanced project management features

---

**TechISpot** - Connecting tech enthusiasts through community, creativity, and collaboration.
