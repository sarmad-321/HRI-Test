db.users.find(
  {
    mail: { $regex: /@example\.org$/i },
    "lastLogin.coord.0": { $gte: -90, $lte: 0 },
    "lastLogin.coord.1": { $gte: -180, $lte: 0 },
    unsuccessfulAttempts: { $gte: 1 },
    role: { $nin: ["admin", "client"] },
    activeSessions: {
      $elemMatch: { duration: { $gte: 8 } },
    },
    activeSessions: { $size: { $gte: 2 } },
  },
  {
    _id: 1,
    name: 1,
    role: 1,
    "lastLogin.coord": 1,
    unsuccessfulAttempts: 1,
    "activeSessions.deviceName": 1,
    "activeSessions.duration": 1,
  }
);
