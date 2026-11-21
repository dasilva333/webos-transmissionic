"use strict";
(self["webpackChunktransmissionic"] = self["webpackChunktransmissionic"] || []).push([[99], { 3099: function(e, t, i) {
  i.r(t), i.d(t, { pwa_camera: function() {
    return c;
  } });
  var n = i(6696), r = i(5108), o = function(e2, t2, i2, n2) {
    function r2(e3) {
      return e3 instanceof i2 ? e3 : new i2((function(t3) {
        t3(e3);
      }));
    }
    return new (i2 || (i2 = Promise))((function(i3, o2) {
      function a2(e3) {
        try {
          c2(n2.next(e3));
        } catch (t3) {
          o2(t3);
        }
      }
      function s2(e3) {
        try {
          c2(n2["throw"](e3));
        } catch (t3) {
          o2(t3);
        }
      }
      function c2(e3) {
        e3.done ? i3(e3.value) : r2(e3.value).then(a2, s2);
      }
      c2((n2 = n2.apply(e2, t2 || [])).next());
    }));
  }, a = function(e2, t2) {
    var i2, n2, r2, o2, a2 = { label: 0, sent: function() {
      if (1 & r2[0]) throw r2[1];
      return r2[1];
    }, trys: [], ops: [] };
    return o2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" === typeof Symbol && (o2[Symbol.iterator] = function() {
      return this;
    }), o2;
    function s2(e3) {
      return function(t3) {
        return c2([e3, t3]);
      };
    }
    function c2(o3) {
      if (i2) throw new TypeError("Generator is already executing.");
      while (a2) try {
        if (i2 = 1, n2 && (r2 = 2 & o3[0] ? n2["return"] : o3[0] ? n2["throw"] || ((r2 = n2["return"]) && r2.call(n2), 0) : n2.next) && !(r2 = r2.call(n2, o3[1])).done) return r2;
        switch (n2 = 0, r2 && (o3 = [2 & o3[0], r2.value]), o3[0]) {
          case 0:
          case 1:
            r2 = o3;
            break;
          case 4:
            return a2.label++, { value: o3[1], done: false };
          case 5:
            a2.label++, n2 = o3[1], o3 = [0];
            continue;
          case 7:
            o3 = a2.ops.pop(), a2.trys.pop();
            continue;
          default:
            if (r2 = a2.trys, !(r2 = r2.length > 0 && r2[r2.length - 1]) && (6 === o3[0] || 2 === o3[0])) {
              a2 = 0;
              continue;
            }
            if (3 === o3[0] && (!r2 || o3[1] > r2[0] && o3[1] < r2[3])) {
              a2.label = o3[1];
              break;
            }
            if (6 === o3[0] && a2.label < r2[1]) {
              a2.label = r2[1], r2 = o3;
              break;
            }
            if (r2 && a2.label < r2[2]) {
              a2.label = r2[2], a2.ops.push(o3);
              break;
            }
            r2[2] && a2.ops.pop(), a2.trys.pop();
            continue;
        }
        o3 = t2.call(e2, a2);
      } catch (s3) {
        o3 = [6, s3], n2 = 0;
      } finally {
        i2 = r2 = 0;
      }
      if (5 & o3[0]) throw o3[1];
      return { value: o3[0] ? o3[1] : void 0, done: true };
    }
  }, s = window.ImageCapture;
  "undefined" === typeof s && (s = (function() {
    function e2(e3) {
      var t2 = this;
      if ("video" !== e3.kind) throw new DOMException("NotSupportedError");
      this._videoStreamTrack = e3, "readyState" in this._videoStreamTrack || (this._videoStreamTrack.readyState = "live"), this._previewStream = new MediaStream([e3]), this.videoElement = document.createElement("video"), this.videoElementPlaying = new Promise((function(e4) {
        t2.videoElement.addEventListener("playing", e4);
      })), HTMLMediaElement ? this.videoElement.srcObject = this._previewStream : this.videoElement.src = URL.createObjectURL(this._previewStream), this.videoElement.muted = true, this.videoElement.setAttribute("playsinline", ""), this.videoElement.play(), this.canvasElement = document.createElement("canvas"), this.canvas2dContext = this.canvasElement.getContext("2d");
    }
    return Object.defineProperty(e2.prototype, "videoStreamTrack", { get: function() {
      return this._videoStreamTrack;
    }, enumerable: true, configurable: true }), e2.prototype.getPhotoCapabilities = function() {
      return new Promise((function(e3, t2) {
        var i2 = { current: 0, min: 0, max: 0 };
        e3({ exposureCompensation: i2, exposureMode: "none", fillLightMode: ["none"], focusMode: "none", imageHeight: i2, imageWidth: i2, iso: i2, redEyeReduction: false, whiteBalanceMode: "none", zoom: i2 }), t2(new DOMException("OperationError"));
      }));
    }, e2.prototype.setOptions = function(e3) {
      return void 0 === e3 && (e3 = {}), new Promise((function(e4, t2) {
      }));
    }, e2.prototype.takePhoto = function() {
      var e3 = this;
      return new Promise((function(t2, i2) {
        if ("live" !== e3._videoStreamTrack.readyState) return i2(new DOMException("InvalidStateError"));
        e3.videoElementPlaying.then((function() {
          try {
            e3.canvasElement.width = e3.videoElement.videoWidth, e3.canvasElement.height = e3.videoElement.videoHeight, e3.canvas2dContext.drawImage(e3.videoElement, 0, 0), e3.canvasElement.toBlob(t2);
          } catch (n2) {
            i2(new DOMException("UnknownError"));
          }
        }));
      }));
    }, e2.prototype.grabFrame = function() {
      var e3 = this;
      return new Promise((function(t2, i2) {
        if ("live" !== e3._videoStreamTrack.readyState) return i2(new DOMException("InvalidStateError"));
        e3.videoElementPlaying.then((function() {
          try {
            e3.canvasElement.width = e3.videoElement.videoWidth, e3.canvasElement.height = e3.videoElement.videoHeight, e3.canvas2dContext.drawImage(e3.videoElement, 0, 0), t2(window.createImageBitmap(e3.canvasElement));
          } catch (n2) {
            i2(new DOMException("UnknownError"));
          }
        }));
      }));
    }, e2;
  })()), window.ImageCapture = s;
  var c = (function() {
    function e2(e3) {
      var t2 = this;
      (0, n.r)(this, e3), this.facingMode = "user", this.noDevicesText = "No camera found", this.noDevicesButtonText = "Choose image", this.showShutterOverlay = false, this.flashIndex = 0, this.hasCamera = null, this.rotation = 0, this.deviceError = null, this.hasMultipleCameras = false, this.hasFlash = false, this.flashModes = [], this.flashMode = "off", this.handlePickFile = function(e4) {
      }, this.handleShutterClick = function(e4) {
        r.debug("shutter click"), t2.capture();
      }, this.handleRotateClick = function(e4) {
        t2.rotate();
      }, this.handleClose = function(e4) {
        t2.handlePhoto && t2.handlePhoto(null);
      }, this.handleFlashClick = function(e4) {
        t2.cycleFlash();
      }, this.handleCancelPhoto = function(e4) {
        var i2 = t2.stream && t2.stream.getTracks()[0], n2 = i2 && i2.getConstraints();
        t2.photo = null, t2.photoSrc = null, n2 ? t2.initCamera({ video: { facingMode: n2.facingMode } }) : t2.initCamera();
      }, this.handleAcceptPhoto = function(e4) {
        t2.handlePhoto && t2.handlePhoto(t2.photo);
      }, this.handleFileInputChange = function(e4) {
        return o(t2, void 0, void 0, (function() {
          var t3, i2, n2;
          return a(this, (function(o2) {
            switch (o2.label) {
              case 0:
                t3 = e4.target, i2 = t3.files[0], o2.label = 1;
              case 1:
                return o2.trys.push([1, 3, , 4]), [4, this.getOrientation(i2)];
              case 2:
                return n2 = o2.sent(), r.debug("Got orientation", n2), this.photoOrientation = n2, [3, 4];
              case 3:
                return o2.sent(), [3, 4];
              case 4:
                return this.handlePhoto && this.handlePhoto(i2), [2];
            }
          }));
        }));
      }, this.handleVideoMetadata = function(e4) {
        r.debug("Video metadata", e4);
      }, this.isServer = (0, n.d)(this, "isServer");
    }
    return e2.prototype.componentDidLoad = function() {
      return o(this, void 0, void 0, (function() {
        return a(this, (function(e3) {
          switch (e3.label) {
            case 0:
              return this.isServer ? [2] : (this.defaultConstraints = { video: { facingMode: this.facingMode } }, [4, this.queryDevices()]);
            case 1:
              return e3.sent(), [4, this.initCamera()];
            case 2:
              return e3.sent(), [2];
          }
        }));
      }));
    }, e2.prototype.componentDidUnload = function() {
      this.stopStream(), this.photoSrc && URL.revokeObjectURL(this.photoSrc);
    }, e2.prototype.hasImageCapture = function() {
      return "ImageCapture" in window;
    }, e2.prototype.queryDevices = function() {
      return o(this, void 0, void 0, (function() {
        var e3, t2, i2;
        return a(this, (function(n2) {
          switch (n2.label) {
            case 0:
              return n2.trys.push([0, 2, , 3]), [4, navigator.mediaDevices.enumerateDevices()];
            case 1:
              return e3 = n2.sent(), t2 = e3.filter((function(e4) {
                return "videoinput" == e4.kind;
              })), this.hasCamera = !!t2.length, this.hasMultipleCameras = t2.length > 1, [3, 3];
            case 2:
              return i2 = n2.sent(), this.deviceError = i2, [3, 3];
            case 3:
              return [2];
          }
        }));
      }));
    }, e2.prototype.initCamera = function(e3) {
      return o(this, void 0, void 0, (function() {
        var t2, i2;
        return a(this, (function(n2) {
          switch (n2.label) {
            case 0:
              e3 || (e3 = this.defaultConstraints), n2.label = 1;
            case 1:
              return n2.trys.push([1, 3, , 4]), [4, navigator.mediaDevices.getUserMedia(Object.assign({ video: true, audio: false }, e3))];
            case 2:
              return t2 = n2.sent(), this.initStream(t2), [3, 4];
            case 3:
              return i2 = n2.sent(), this.deviceError = i2, this.handleNoDeviceError && this.handleNoDeviceError(i2), [3, 4];
            case 4:
              return [2];
          }
        }));
      }));
    }, e2.prototype.initStream = function(e3) {
      return o(this, void 0, void 0, (function() {
        return a(this, (function(t2) {
          switch (t2.label) {
            case 0:
              return this.stream = e3, this.videoElement.srcObject = e3, this.hasImageCapture() ? (this.imageCapture = new window.ImageCapture(e3.getVideoTracks()[0]), [4, this.initPhotoCapabilities(this.imageCapture)]) : [3, 2];
            case 1:
              return t2.sent(), [3, 3];
            case 2:
              this.deviceError = "No image capture", this.handleNoDeviceError && this.handleNoDeviceError(), t2.label = 3;
            case 3:
              return this.el.forceUpdate(), [2];
          }
        }));
      }));
    }, e2.prototype.initPhotoCapabilities = function(e3) {
      return o(this, void 0, void 0, (function() {
        var t2;
        return a(this, (function(i2) {
          switch (i2.label) {
            case 0:
              return [4, e3.getPhotoCapabilities()];
            case 1:
              return t2 = i2.sent(), t2.fillLightMode && t2.fillLightMode.length > 1 && (this.flashModes = t2.fillLightMode.map((function(e4) {
                return e4;
              })), this.flashMode ? (this.flashMode = this.flashModes[this.flashModes.indexOf(this.flashMode)] || "off", this.flashIndex = this.flashModes.indexOf(this.flashMode) || 0) : this.flashIndex = 0), [2];
          }
        }));
      }));
    }, e2.prototype.stopStream = function() {
      this.videoElement && (this.videoElement.srcObject = null), this.stream && this.stream.getTracks().forEach((function(e3) {
        return e3.stop();
      }));
    }, e2.prototype.capture = function() {
      return o(this, void 0, void 0, (function() {
        var e3, t2;
        return a(this, (function(i2) {
          switch (i2.label) {
            case 0:
              if (!this.hasImageCapture()) return [3, 5];
              i2.label = 1;
            case 1:
              return i2.trys.push([1, 4, , 5]), [4, this.imageCapture.takePhoto({ fillLightMode: this.flashModes.length > 1 ? this.flashMode : void 0 })];
            case 2:
              return e3 = i2.sent(), [4, this.flashScreen()];
            case 3:
              return i2.sent(), this.promptAccept(e3), [3, 5];
            case 4:
              return t2 = i2.sent(), r.error("Unable to take photo!", t2), [3, 5];
            case 5:
              return this.stopStream(), [2];
          }
        }));
      }));
    }, e2.prototype.promptAccept = function(e3) {
      return o(this, void 0, void 0, (function() {
        var t2;
        return a(this, (function(i2) {
          switch (i2.label) {
            case 0:
              return this.photo = e3, [4, this.getOrientation(e3)];
            case 1:
              if (t2 = i2.sent(), r.debug("Got orientation", t2), this.photoOrientation = t2, t2) switch (t2) {
                case 1:
                case 2:
                  this.rotation = 0;
                  break;
                case 3:
                case 4:
                  this.rotation = 180;
                  break;
                case 5:
                case 6:
                  this.rotation = 90;
                  break;
                case 7:
                case 8:
                  this.rotation = 270;
                  break;
              }
              return this.photoSrc = URL.createObjectURL(e3), [2];
          }
        }));
      }));
    }, e2.prototype.getOrientation = function(e3) {
      return new Promise((function(t2) {
        var i2 = new FileReader();
        i2.onload = function(e4) {
          var i3 = new DataView(e4.target.result);
          if (65496 !== i3.getUint16(0, false)) return t2(-2);
          var n2 = i3.byteLength, r2 = 2;
          while (r2 < n2) {
            var o2 = i3.getUint16(r2, false);
            if (r2 += 2, 65505 === o2) {
              if (1165519206 !== i3.getUint32(r2 += 2, false)) return t2(-1);
              var a2 = 18761 === i3.getUint16(r2 += 6, false);
              r2 += i3.getUint32(r2 + 4, a2);
              var s2 = i3.getUint16(r2, a2);
              r2 += 2;
              for (var c2 = 0; c2 < s2; c2++) if (274 === i3.getUint16(r2 + 12 * c2, a2)) return t2(i3.getUint16(r2 + 12 * c2 + 8, a2));
            } else {
              if (65280 !== (65280 & o2)) break;
              r2 += i3.getUint16(r2, false);
            }
          }
          return t2(-1);
        }, i2.readAsArrayBuffer(e3.slice(0, 65536));
      }));
    }, e2.prototype.rotate = function() {
      this.stopStream();
      var e3 = this.stream && this.stream.getTracks()[0];
      if (e3) {
        var t2 = e3.getConstraints(), i2 = t2.facingMode;
        if (!i2) {
          var n2 = e3.getCapabilities();
          n2.facingMode && (i2 = n2.facingMode[0]);
        }
        "environment" === i2 ? this.initCamera({ video: { facingMode: "user" } }) : this.initCamera({ video: { facingMode: "environment" } });
      }
    }, e2.prototype.setFlashMode = function(e3) {
      r.debug("New flash mode: ", e3), this.flashMode = e3;
    }, e2.prototype.cycleFlash = function() {
      this.flashModes.length > 0 && (this.flashIndex = (this.flashIndex + 1) % this.flashModes.length, this.setFlashMode(this.flashModes[this.flashIndex]));
    }, e2.prototype.flashScreen = function() {
      return o(this, void 0, void 0, (function() {
        var e3 = this;
        return a(this, (function(t2) {
          return [2, new Promise((function(t3, i2) {
            e3.showShutterOverlay = true, setTimeout((function() {
              e3.showShutterOverlay = false, t3();
            }), 100);
          }))];
        }));
      }));
    }, e2.prototype.iconExit = function() {
      return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M402.2,134L378,109.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L139.6,109.8 c-1.6-1.6-4.1-1.6-5.7,0L109.8,134c-1.6,1.6-1.6,4.1,0,5.7l113.5,113.5c1.6,1.6,1.6,4.1,0,5.7L109.8,372.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l113.5-113.5c1.6-1.6,4.1-1.6,5.7,0l113.5,113.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l113.5-113.5C403.7,138.1,403.7,135.5,402.2,134z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
    }, e2.prototype.iconPhotos = function() {
      return (0, n.h)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "512", height: "512", viewBox: "0 0 512 512" }, (0, n.h)("path", { d: "M450.29,112H142c-34,0-62,27.51-62,61.33V418.67C80,452.49,108,480,142,480H450c34,0,62-26.18,62-60V173.33C512,139.51,484.32,112,450.29,112Zm-77.15,61.34a46,46,0,1,1-46.28,46A46.19,46.19,0,0,1,373.14,173.33Zm-231.55,276c-17,0-29.86-13.75-29.86-30.66V353.85l90.46-80.79a46.54,46.54,0,0,1,63.44,1.83L328.27,337l-113,112.33ZM480,418.67a30.67,30.67,0,0,1-30.71,30.66H259L376.08,333a46.24,46.24,0,0,1,59.44-.16L480,370.59Z" }), (0, n.h)("path", { d: "M384,32H64A64,64,0,0,0,0,96V352a64.11,64.11,0,0,0,48,62V152a72,72,0,0,1,72-72H446A64.11,64.11,0,0,0,384,32Z" }));
    }, e2.prototype.iconConfirm = function() {
      return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%232CD865' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_1_'%3E%3Cg%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M208,301.4l-55.4-55.5c-1.5-1.5-4-1.6-5.6-0.1l-23.4,22.3c-1.6,1.6-1.7,4.1-0.1,5.7l81.6,81.4 c3.1,3.1,8.2,3.1,11.3,0l171.8-171.7c1.6-1.6,1.6-4.2-0.1-5.7l-23.4-22.3c-1.6-1.5-4.1-1.5-5.6,0.1L213.7,301.4 C212.1,303,209.6,303,208,301.4z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
    }, e2.prototype.iconReverseCamera = function() {
      return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M352,0H160C72,0,0,72,0,160v192c0,88,72,160,160,160h192c88,0,160-72,160-160V160C512,72,440,0,352,0z M356.7,365.8l-3.7,3.3c-27,23.2-61.4,35.9-96.8,35.9c-72.4,0-135.8-54.7-147-125.6c-0.3-1.9-2-3.3-3.9-3.3H64 c-3.3,0-5.2-3.8-3.2-6.4l61.1-81.4c1.6-2.1,4.7-2.1,6.4-0.1l63.3,81.4c2,2.6,0.2,6.5-3.2,6.5h-40.6c-2.5,0-4.5,2.4-3.9,4.8 c11.5,51.5,59.2,90.6,112.4,90.6c26.4,0,51.8-9.7,73.7-27.9l3.1-2.5c1.6-1.3,3.9-1.1,5.3,0.3l18.5,18.6 C358.5,361.6,358.4,364.3,356.7,365.8z M451.4,245.6l-61,83.5c-1.6,2.2-4.8,2.2-6.4,0.1l-63.3-83.3c-2-2.6-0.1-6.4,3.2-6.4h40.8 c2.5,0,4.4-2.3,3.9-4.8c-5.1-24.2-17.8-46.5-36.5-63.7c-21.2-19.4-48.2-30.1-76-30.1c-26.5,0-52.6,9.7-73.7,27.3l-3.1,2.5 c-1.6,1.3-3.9,1.2-5.4-0.3l-18.5-18.5c-1.6-1.6-1.5-4.3,0.2-5.9l3.5-3.1c27-23.2,61.4-35.9,96.8-35.9c38,0,73.9,13.7,101.2,38.7 c23.2,21.1,40.3,55.2,45.7,90.1c0.3,1.9,1.9,3.4,3.9,3.4h41.3C451.4,239.2,453.3,243,451.4,245.6z'/%3E%3C/g%3E%3C/svg%3E";
    }, e2.prototype.iconRetake = function() {
      return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%23727A87' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M394.2,142L370,117.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L147.6,117.8 c-1.6-1.6-4.1-1.6-5.7,0L117.8,142c-1.6,1.6-1.6,4.1,0,5.7l105.5,105.5c1.6,1.6,1.6,4.1,0,5.7L117.8,364.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l105.5-105.5c1.6-1.6,4.1-1.6,5.7,0l105.5,105.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l105.5-105.5C395.7,146.1,395.7,143.5,394.2,142z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
    }, e2.prototype.iconFlashOff = function() {
      return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M498,483.7L42.3,28L14,56.4l149.8,149.8L91,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9c1.6,0,2.7,1.3,2.4,2.7 L197.6,507c-1,4.4,5.8,6.9,8.9,3.2l118.6-142.8L469.6,512L498,483.7z'/%3E%3Cpath class='st0' d='M449,218.2c2.5-3,0.1-7.2-3.9-7.2H301.2c-1.6,0-2.7-1.3-2.4-2.7L342.4,5c1-4.4-5.8-6.9-8.9-3.2L214.9,144.6 l161.3,161.3L449,218.2z'/%3E%3C/g%3E%3C/svg%3E";
    }, e2.prototype.iconFlashOn = function() {
      return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3C/svg%3E";
    }, e2.prototype.iconFlashAuto = function() {
      return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3Cg%3E%3Cpath class='st0' d='M321.3,186l74-186H438l74,186h-43.5l-11.9-32.5h-80.9l-12,32.5H321.3z M415.8,47.9l-27.2,70.7h54.9l-27.2-70.7 H415.8z'/%3E%3C/g%3E%3C/svg%3E";
    }, e2.prototype.render = function() {
      var e3 = this, t2 = {};
      return (0, n.h)("div", { class: "camera-wrapper" }, (0, n.h)("div", { class: "camera-header" }, (0, n.h)("section", { class: "items" }, (0, n.h)("div", { class: "item close", onClick: function(t3) {
        return e3.handleClose(t3);
      } }, (0, n.h)("img", { src: this.iconExit() })), (0, n.h)("div", { class: "item flash", onClick: function(t3) {
        return e3.handleFlashClick(t3);
      } }, this.flashModes.length > 0 && (0, n.h)("div", null, "off" == this.flashMode ? (0, n.h)("img", { src: this.iconFlashOff() }) : "", "auto" == this.flashMode ? (0, n.h)("img", { src: this.iconFlashAuto() }) : "", "flash" == this.flashMode ? (0, n.h)("img", { src: this.iconFlashOn() }) : "")))), (false === this.hasCamera || !!this.deviceError) && (0, n.h)("div", { class: "no-device" }, (0, n.h)("h2", null, this.noDevicesText), (0, n.h)("label", { htmlFor: "_pwa-elements-camera-input" }, this.noDevicesButtonText), (0, n.h)("input", { type: "file", id: "_pwa-elements-camera-input", onChange: this.handleFileInputChange, accept: "image/*", class: "select-file-button" })), this.photoSrc ? (0, n.h)("div", { class: "accept" }, (0, n.h)("div", { class: "accept-image", style: Object.assign({ backgroundImage: "url(" + this.photoSrc + ")" }, t2) })) : (0, n.h)("div", { class: "camera-video" }, this.showShutterOverlay && (0, n.h)("div", { class: "shutter-overlay" }), this.hasImageCapture() ? (0, n.h)("video", { ref: function(t3) {
        return e3.videoElement = t3;
      }, onLoadedMetaData: this.handleVideoMetadata, autoplay: true, playsinline: true }) : (0, n.h)("canvas", { ref: function(t3) {
        return e3.canvasElement = t3;
      }, width: "100%", height: "100%" }), (0, n.h)("canvas", { class: "offscreen-image-render", ref: function(t3) {
        return e3.offscreenCanvas = t3;
      }, width: "100%", height: "100%" })), this.hasCamera && (0, n.h)("div", { class: "camera-footer" }, this.photo ? (0, n.h)("section", { class: "items" }, (0, n.h)("div", { class: "item accept-cancel", onClick: function(t3) {
        return e3.handleCancelPhoto(t3);
      } }, (0, n.h)("img", { src: this.iconRetake() })), (0, n.h)("div", { class: "item accept-use", onClick: function(t3) {
        return e3.handleAcceptPhoto(t3);
      } }, (0, n.h)("img", { src: this.iconConfirm() }))) : [(0, n.h)("div", { class: "pick-image", onClick: this.handlePickFile }, (0, n.h)("label", { htmlFor: "_pwa-elements-file-pick" }, this.iconPhotos()), (0, n.h)("input", { type: "file", id: "_pwa-elements-file-pick", onChange: this.handleFileInputChange, accept: "image/*", class: "pick-image-button" })), (0, n.h)("div", { class: "shutter", onClick: this.handleShutterClick }, (0, n.h)("div", { class: "shutter-button" })), (0, n.h)("div", { class: "rotate", onClick: this.handleRotateClick }, (0, n.h)("img", { src: this.iconReverseCamera() }))]));
    }, Object.defineProperty(e2, "assetsDirs", { get: function() {
      return ["icons"];
    }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "el", { get: function() {
      return (0, n.g)(this);
    }, enumerable: true, configurable: true }), Object.defineProperty(e2, "style", { get: function() {
      return ":host{--header-height:4em;--footer-height:9em;--header-height-landscape:3em;--footer-height-landscape:6em;--shutter-size:6em;--icon-size-header:1.5em;--icon-size-footer:2.5em;--margin-size-header:1.5em;--margin-size-footer:2.0em;font-family:-apple-system,BlinkMacSystemFont,\u201CSegoe UI\u201D,\u201CRoboto\u201D,\u201CDroid Sans\u201D,\u201CHelvetica Neue\u201D,sans-serif;display:block}.items,:host{width:100%;height:100%}.items{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.items .item{-ms-flex:1;flex:1;text-align:center}.items .item:first-child{text-align:left}.items .item:last-child{text-align:right}.camera-wrapper{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.camera-header{color:#fff;background-color:#000;height:var(--header-height)}.camera-header .items{padding:var(--margin-size-header)}.camera-footer{position:relative;color:#fff;background-color:#000;height:var(--footer-height)}.camera-footer .items{padding:var(--margin-size-footer)}@media (max-height:375px){.camera-header{--header-height:var(--header-height-landscape)}.camera-footer{--footer-height:var(--footer-height-landscape)}.camera-footer .shutter{--shutter-size:4em}}.camera-video{position:relative;-ms-flex:1;flex:1;overflow:hidden}.camera-video,video{background-color:#000}video{width:100%;height:100%;max-height:100%;min-height:100%;-o-object-fit:cover;object-fit:cover}.pick-image{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;left:var(--margin-size-footer);top:0;height:100%;width:var(--icon-size-footer);color:#fff}.pick-image input{visibility:hidden}.pick-image svg{cursor:pointer;fill:#fff;width:var(--icon-size-footer);height:var(--icon-size-footer)}.shutter{position:absolute;left:50%;top:50%;width:var(--shutter-size);height:var(--shutter-size);margin-top:calc(var(--shutter-size) / -2);margin-left:calc(var(--shutter-size) / -2);border-radius:100%;background-color:#c6cdd8;padding:12px;-webkit-box-sizing:border-box;box-sizing:border-box}.shutter:active .shutter-button{background-color:#9da9bb}.shutter-button{background-color:#fff;border-radius:100%;width:100%;height:100%}.rotate{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;right:var(--margin-size-footer);top:0;height:100%;color:#fff}.rotate,.rotate img{width:var(--icon-size-footer)}.rotate img{height:var(--icon-size-footer)}.shutter-overlay{z-index:5;position:absolute;width:100%;height:100%;background-color:#000}.error{width:100%;height:100%;-ms-flex-pack:center;-ms-flex-align:center}.error,.no-device{color:#fff;display:-ms-flexbox;display:flex;justify-content:center;align-items:center}.no-device{background-color:#000;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;-ms-flex-pack:center}.no-device label{cursor:pointer;background:#fff;border-radius:6px;padding:6px 8px;color:#000}.no-device input{visibility:hidden;height:0;margin-top:16px}.accept{background-color:#000;-ms-flex:1;flex:1;overflow:hidden}.accept .accept-image{width:100%;height:100%;max-height:100%;background-position:50%;background-size:cover;background-repeat:no-repeat}.close img{cursor:pointer}.close img,.flash img{width:var(--icon-size-header);height:var(--icon-size-header)}.accept-cancel img,.accept-use img{width:var(--icon-size-footer);height:var(--icon-size-footer)}.offscreen-image-render{top:0;left:0;visibility:hidden;pointer-events:none;width:100%;height:100%}";
    }, enumerable: true, configurable: true }), e2;
  })();
} }]);
