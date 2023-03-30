module.exports = (app) => {
  app.post("/api/upload", (req, res) => {
    if (!res) {
      // Gérer les erreurs de téléchargement
      return res.status(500).send(err);
    }
    const file = req.files.avatar;
    const fileName =
      Date.now(req.files.avatar.name) + "_" + req.files.avatar.name;
    let uploadPath = __dirname + "../../../uploads/" + fileName;
    let routeAvatar =
      req.protocol + "://" + req.get("host") + "/uplods/" + fileName;
    file.mv(uploadPath, (err) => {
      if (err) {
        return res.send("le fichier n'a pas pus être téléchargé");
      }
    });
    const message = "Fichier téléchargé avec succès !";
    res.json({ message, data: routeAvatar });
  });
};
