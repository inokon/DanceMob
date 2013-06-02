forge.logging.info("Add JavaScript to js/main.js!");
App.launchCamera = function launchCamera() {
    var options = {
      "source": "camera"
    };

    var success = function success(file) {
      var displayImageEl = $("#faces"),
        filePath = file.uri,
        width = 120;

      logger('success');
      logger(file);

      displayImageEl.addClass("added-faces");
      displayImageEl.append('<img alt="camera" width="' + width + '" src="' + filePath + '" />');
    };

    var error = function error(content) {
      logger('error');
      logger(content);
    };

    logger('launch camera');
    forge.file.getImage(options, success, error);
  };

  App.launchVideo = function launchCamera() {
    var options = {
      "source": "camera"
    };

    var success = function success(file) {
      var filePath = file.uri;

      logger('success');
      logger(file);
    };

    var error = function error(content) {
      logger('error');
      logger(content);
    };

    logger('launch video');
    forge.file.getVideo(options, success, error);
  };
