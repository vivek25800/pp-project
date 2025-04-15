// middleware/auth.js
// const jwt = require('jsonwebtoken');
// const jwt = require('jsonwebtoken');

// exports.protect = async (req, res, next) => {
//   try {
//     let token;

//     // Check for token in Authorization header
//     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//       token = req.headers.authorization.split(' ')[1];
//     }

//     // Check if token exists
//     if (!token) {
//       return res.status(401).json({
//         success: false,
//         error: 'Not authorized to access this route'
//       });
//     }

//     try {
//       // Verify token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
//       // Add user ID to request
//       req.user = { _id: decoded.id };
      
//       next();
//     } catch (err) {
//       return res.status(401).json({
//         success: false,
//         error: 'Not authorized to access this route'
//       });
//     }
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       error: 'Server Error'
//     });
//   }
// };


// middleware/auth.js
// middleware/auth.js
const jwt = require('jsonwebtoken');

// TEMPORARY SOLUTION - replace with proper environment variable
const JWT_SECRET = process.env.JWT_SECRET || 'your_temporary_secret_key';

exports.protect = async (req, res, next) => {
  try {
    let token;

    // Check for token in Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    // Check if token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        error: 'Not authorized to access this route'
      });
    }

    try {
      // Verify token with the secret
      const decoded = jwt.verify(token, JWT_SECRET);
      
      // Add user ID to request
      req.user = { _id: decoded.id || decoded._id };
      
      next();
    } catch (err) {
      console.error('Token verification failed:', err.message);
      return res.status(401).json({
        success: false,
        error: 'Invalid token or not authorized'
      });
    }
  } catch (error) {
    console.error('Auth middleware error:', error);
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// const authMiddleware = (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split(' ')[1];
//     if (!token) {
//       return res.status(401).json({ message: 'Authentication required' });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };

// module.exports = authMiddleware;


// middleware/auth.js
// const jwt = require('jsonwebtoken');

// Create one consistent middleware
// const authMiddleware = (req, res, next) => {
//   try {
//     // Check for token in Authorization header
//     let token;
//     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//       token = req.headers.authorization.split(' ')[1];
//     }

//     // Check if token exists
//     if (!token) {
//       return res.status(401).json({
//         success: false,
//         error: 'Not authorized to access this route'
//       });
//     }

//     // Verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
//     // Set user data consistently with _id property
//     req.user = { 
//       _id: decoded.id || decoded._id,
//       ...decoded 
//     };
    
//     next();
//   } catch (error) {
//     return res.status(401).json({
//       success: false,
//       error: 'Invalid token or not authorized'
//     });
//   }
// };

// module.exports = { authMiddleware };