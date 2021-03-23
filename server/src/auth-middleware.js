const firebase = require("./firebase/admin");

function authMiddleware(request, response, next) {
  const headerToken = request.headers.authorization;
  if (!headerToken) {
    return response.send({ message: "No token provided" }).status(401);
  }

  if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
    response.send({ message: "Invalid token" }).status(401);
  }

  const token = headerToken.split(" ")[1];

  firebase
    .auth()
    .verifyIdToken(token)
    .then((decodeToken) => {
      const uid = decodeToken.uid;
      firebase
        .auth()
        .getUser(uid)
        .then((userRecord) => {
          if (!userRecord.emailVerified){
            //throw 'prova';
            return response.status(401).json({ message: "Email is not verified" });
          }

          next();
        })
        .catch(() => response.status(403).json({ message: "Could not authorize" }));
    })
    .catch(() => response.status(403).json({ message: "Could not authorize" }));
}

module.exports = authMiddleware;
