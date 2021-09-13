// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../dependencies/arrays/sidebarArr.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bottom2 = exports.bottom1 = exports.fifth = exports.fourth = exports.third = exports.second = exports.first = exports.headerLinks = exports.openSidebar = void 0;
//I included some arrays in the header here
//buttons on the sidebar
var openSidebar = [{
  id: "menu-btn",
  uniqueClass: "menu-btn",
  spanName: "menu"
}, {
  id: "home-btn",
  uniqueClass: "home-btn",
  spanName: "home",
  title: "Home",
  link: "../home/index.html"
}, {
  id: "explore-btn",
  uniqueClass: "explore-btn",
  spanName: "explore",
  title: "Explore",
  link: "../explore/index.html"
}, {
  id: "sub-btn",
  uniqueClass: "sub-btn",
  spanName: "subscriptions",
  title: "Subscriptions",
  link: "../subscriptions/index.html"
}, {
  id: "lib-btn",
  uniqueClass: "library-btn",
  spanName: "video_library",
  title: "Library",
  link: "../library/index.html"
}];
exports.openSidebar = openSidebar;
var headerLinks = [{
  spanName: "search"
}, {
  spanName: "mic"
}, {
  spanName: "video_call"
}, {
  spanName: "apps"
}, {
  spanName: "notifications"
}, {
  spanName: null,
  imgSrc: "../../media/imgs/profile.jpg"
}]; //buttons on the sidebar when you click the menu (1st part)

exports.headerLinks = headerLinks;
var first = [{
  id: "offHomeBtn",
  spanName: "home",
  title: "Home",
  link: "../home/index.html"
}, {
  id: "offExploreBtn",
  spanName: "explore",
  title: "Explore",
  link: "../explore/index.html"
}, {
  id: "offSubscriptionsBtn",
  spanName: "subscriptions",
  title: "Subscriptions",
  link: "../subscriptions/index.html"
}]; //buttons on the sidebar when you click the menu (2nd part)

exports.first = first;
var second = [{
  id: "offLibraryBtn",
  spanName: "video_library",
  title: "Library",
  link: "../library/index.html"
}, {
  id: "offHistoryBtn",
  spanName: "history",
  title: "History",
  link: "#"
}, {
  id: "offYourVideosBtn",
  spanName: "slideshow",
  title: "Your Videos",
  link: "#"
}, {
  id: "offWatchLaterBtn",
  spanName: "schedule",
  title: "Watch Later",
  link: "#"
}, {
  id: "offLikedBtn",
  spanName: "thumb_up",
  title: "Liked Videos",
  link: "#"
}]; //buttons on the sidebar when you click the menu (3rd part)

exports.second = second;
var third = [{
  id: "scrimbaPage",
  img: "imgs/scrimba.jpg",
  title: "Scrimba"
}, {
  id: "synapsePage",
  img: "imgs/synapse.jpg",
  title: "Synapse"
}, {
  id: "webDevSimplifiedPage",
  img: "imgs/webdevsimplified.jpg",
  title: "Web Dev Simplified"
}, {
  id: "sneakyPage",
  img: "imgs/sneaky.jpg",
  title: "Sneaky"
}, {
  id: "kevinPowellPage",
  img: "imgs/kevinPowell.jpg",
  title: "Kevin Powell"
}, {
  id: "doubleliftPage",
  img: "imgs/doublelift.jpg",
  title: "Doublelift"
}, {
  id: "offlinetvPage",
  img: "imgs/offlinetv.png",
  title: "OfflineTV"
}]; //buttons on the sidebar when you click the menu (4th part)

exports.third = third;
var fourth = [{
  id: "filmsBtn",
  spanName: "theaters",
  title: "Films"
}, {
  id: "gamingBtn",
  spanName: "sports_esports",
  title: "Gaming"
}, {
  id: "liveBtn",
  spanName: "sensors",
  title: "Live"
}, {
  id: "fashionBtn",
  spanName: "dry_cleaning",
  title: "Fashion & Beauty"
}, {
  id: "sportsBtn",
  spanName: "emoji_events",
  title: "Sport"
}]; //buttons on the sidebar when you click the menu (5th part)

exports.fourth = fourth;
var fifth = [{
  id: "offSettingsBtn",
  spanName: "settings",
  title: "Settings"
}, {
  id: "reportBtn",
  spanName: "outlined_flag",
  title: "Report History"
}, {
  id: "helpBtn",
  spanName: "help_outline",
  title: "Help"
}, {
  id: "feedbackBtn",
  spanName: "announcement",
  title: "Send Feedback"
}]; //all the links at the bottom of the hidden-menu bar (1st part)

exports.fifth = fifth;
var bottom1 = [{
  link: "#",
  title: "About"
}, {
  link: "#",
  title: "Press"
}, {
  link: "#",
  title: "Copyright"
}, {
  link: "#",
  title: "Contact"
}, {
  link: "#",
  title: "Creator"
}, {
  link: "#",
  title: "Advertise"
}, {
  link: "#",
  title: "Developers"
}]; //all the links at the bottom of the hidden-menu bar (2nd part)

exports.bottom1 = bottom1;
var bottom2 = [{
  link: "#",
  title: "Terms"
}, {
  link: "#",
  title: "Privacy"
}, {
  link: "#",
  title: "Policy & Safety"
}, {
  link: "#",
  title: "How YouTube works"
}, {
  link: "#",
  title: "Test new features"
}];
exports.bottom2 = bottom2;
},{}],"../dependencies/elements/sidebar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startUp = startUp;

var _sidebarArr = require("../arrays/sidebarArr.js");

// sidebarArray
function startUp(page) {
  var sidebar = document.getElementById("sidebar-nav");
  var sidebarAnimation = document.getElementById("menu-section-sidebar");

  _sidebarArr.openSidebar.forEach(function (objs) {
    var btn = document.createElement("button");
    btn.classList.add("sidebar-btn", objs.uniqueClass);
    btn.setAttribute("id", objs.id);
    sidebar.appendChild(btn);
    var btnIcon = document.createElement("span");
    btnIcon.classList.add("side-icon");

    if (page === objs.title) {
      btnIcon.classList.add("material-icons");
    } else {
      btnIcon.classList.add("material-icons-outlined");
    }

    btnIcon.textContent = objs.spanName;
    btn.appendChild(btnIcon);
    var btnText = document.createElement("span");
    btnText.classList.add("label");
    btnText.textContent = objs.title;
    btn.appendChild(btnText); // event listener for each

    if (objs.spanName !== "menu") {
      btn.addEventListener("click", function () {
        location.href = objs.link;
      });
    } // this is to not add an event listener to the menu button

  }); //these are the icons on the top right corner of every page


  var topRightLinksContainer = document.getElementById("others-section");

  _sidebarArr.headerLinks.forEach(function (link) {
    if (link.spanName === "search") {
      var container = document.createElement("button");
      container.setAttribute("id", "search-btn-850px");
      topRightLinksContainer.appendChild(container);
      var linkIcon = document.createElement("span");
      linkIcon.classList.add("material-icons-outlined");
      linkIcon.textContent = link.spanName;
      container.appendChild(linkIcon);
    } else if (link.spanName === "mic") {
      var _container = document.createElement("div");

      _container.classList.add("microphone");

      _container.setAttribute("id", "microphone-850px");

      topRightLinksContainer.appendChild(_container);

      var _linkIcon = document.createElement("span");

      _linkIcon.classList.add("material-icons-outlined");

      _linkIcon.textContent = link.spanName;

      _container.appendChild(_linkIcon);
    } else if (link.spanName === null) {
      var _container2 = document.createElement("a");

      _container2.addEventListener("click", function () {
        location.href = "http://youtube.com";
      });

      _container2.classList.add("head-link", "profile-link");

      topRightLinksContainer.appendChild(_container2);
      var img = document.createElement("img");
      img.src = link.imgSrc;

      _container2.appendChild(img);
    } else {
      var _container3 = document.createElement("a");

      _container3.href = "http://youtube.com";

      _container3.classList.add("head-link");

      topRightLinksContainer.appendChild(_container3);

      var _linkIcon2 = document.createElement("span");

      _linkIcon2.classList.add("material-icons-outlined");

      _linkIcon2.textContent = link.spanName;

      _container3.appendChild(_linkIcon2);
    }
  });

  var offMenuBtn = document.querySelectorAll(".close-menu");
  var menuBtn = document.getElementById("menu-btn");
  var menuEl = document.getElementById("menu-section");
  menuBtn.addEventListener("click", function () {
    sidebarAnimation.classList.add("sidebar-ani");
    menuEl.style.display = "block";
    setTimeout(function () {
      sidebarAnimation.classList.remove("sidebar-ani");
    }, 150);
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; // if any scroll is attempted, set this to the previous value

    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  });
  offMenuBtn.forEach(function (closemenu) {
    closemenu.addEventListener("click", function () {
      sidebarAnimation.classList.add("sidebar-ani-rev");
      setTimeout(function () {
        sidebarAnimation.classList.remove("sidebar-ani-rev");
        menuEl.style.display = "none";
      }, 150); // overrides the function window.onscroll with a blank one so that it can allow scrolling again

      window.onscroll = function () {};
    });
  });
  var searchBtn = document.getElementById("search-btn");
  var microphoneBtn = document.getElementById("microphone");
  var searchBtnSmall = document.getElementById("search-btn-850px");
  var microphoneBtnSmall = document.getElementById("microphone-850px");
  searchBtn.addEventListener("click", function () {
    location.href = "#"; // videosEl.forEach(div => {
    //     div.classList.add("video-el-animation");
    // })
    // This is a test for hover effect using eventlistener of "mouseover"
  }); //clicking the microphone

  microphoneBtn.addEventListener("click", function () {
    location.href = "#";
  }); //clicking the searchButton

  searchBtnSmall.addEventListener("click", function () {
    location.href = "#";
  }); //clicking the microphone

  microphoneBtnSmall.addEventListener("click", function () {
    location.href = "#";
  }); //opensidebar dom inputs
  //This part is hidden, only shows when you click menu button top-left

  var firstDivision = document.getElementById("first-division");
  var secondDivision = document.getElementById("second-division");
  var thirdDivision = document.getElementById("third-division");
  var fourthDivision = document.getElementById("fourth-division");
  var fifthDivision = document.getElementById("fifth-division");
  var bottomUpper = document.getElementById("sixth-bottom-1");
  var bottomLower = document.getElementById("sixth-bottom-2");

  _sidebarArr.first.forEach(function (objs) {
    //buttoncreation with their respective classes
    var offBtn = document.createElement("button");
    offBtn.classList.add("off-sidebar", "off-btn");
    offBtn.setAttribute("id", objs.id);
    firstDivision.appendChild(offBtn); //icon inside the buttons

    var offBtnIcon = document.createElement("span");
    offBtnIcon.classList.add("off-side-icon");

    if (page === objs.title) {
      offBtnIcon.classList.add("material-icons");
      offBtn.classList.add("off-current");
    } else {
      offBtnIcon.classList.add("material-icons-outlined");
    }

    if (objs.title === "Home") {
      offBtnIcon.classList.add("off-home-icon");
    }

    offBtnIcon.textContent = objs.spanName;
    offBtn.appendChild(offBtnIcon); //text inside the buttons

    var offBtnText = document.createElement("span");
    offBtnText.classList.add("off-btn-text");
    offBtnText.textContent = objs.title;
    offBtn.appendChild(offBtnText); //button event listeners

    offBtn.addEventListener("click", function () {
      location.href = objs.link;
    });
  });

  _sidebarArr.second.forEach(function (objs) {
    var offBtn = document.createElement("button");
    offBtn.classList.add("off-sidebar", "off-btn");
    offBtn.setAttribute("id", objs.id);
    secondDivision.appendChild(offBtn); //icon inside the buttons

    var offBtnIcon = document.createElement("span");
    offBtnIcon.classList.add("off-side-icon", "material-icons-outlined");

    if (page === objs.title) {
      offBtn.classList.add("off-current");
      offBtnIcon.classList.add("material-icons");
    }

    offBtnIcon.textContent = objs.spanName;
    offBtn.appendChild(offBtnIcon); //text inside the buttons

    var offBtnText = document.createElement("span");
    offBtnText.classList.add("off-btn-text");
    offBtnText.textContent = objs.title;
    offBtn.appendChild(offBtnText); //button event listeners

    offBtn.addEventListener("click", function () {
      location.href = objs.link;
    });
  });

  addSeeMoreInSecond();

  _sidebarArr.third.forEach(function (objs) {
    var offBtn = document.createElement("div");
    offBtn.classList.add("off-sidebar", "off-btn");
    offBtn.setAttribute("id", objs.id);
    thirdDivision.appendChild(offBtn); //div for shaping the image

    var circle = document.createElement("div");
    circle.classList.add("off-btn-image-subs");
    offBtn.appendChild(circle); //img

    var img = document.createElement("img");
    img.src = "../".concat(objs.img);
    circle.appendChild(img); //channel names

    var offBtnText = document.createElement("span");
    offBtnText.classList.add("off-btn-text");
    offBtnText.textContent = objs.title;
    offBtn.appendChild(offBtnText);
  }); //will add the see more here since its a button while others consist of different things like
  //img and others are div instead of a button


  addSeeMoreInThird();

  _sidebarArr.fourth.forEach(function (objs) {
    var offBtn = document.createElement("button");
    offBtn.classList.add("off-sidebar", "off-btn");
    offBtn.setAttribute("id", objs.id);
    fourthDivision.appendChild(offBtn);
    var offBtnIcon = document.createElement("span");
    offBtnIcon.classList.add("off-side-icon", "material-icons-outlined");
    offBtnIcon.textContent = objs.spanName;
    offBtn.appendChild(offBtnIcon);
    var offBtnText = document.createElement("span");
    offBtnText.classList.add("off-btn-text");
    offBtnText.textContent = objs.title;
    offBtn.appendChild(offBtnText);
  });

  _sidebarArr.fifth.forEach(function (objs) {
    var offBtn = document.createElement("button");
    offBtn.classList.add("off-sidebar", "off-btn");
    offBtn.setAttribute("id", objs.id);
    fifthDivision.appendChild(offBtn);
    var offBtnIcon = document.createElement("span");
    offBtnIcon.classList.add("off-side-icon", "material-icons-outlined");
    offBtnIcon.textContent = objs.spanName;
    offBtn.appendChild(offBtnIcon);
    var offBtnText = document.createElement("span");
    offBtnText.classList.add("off-btn-text");
    offBtnText.textContent = objs.title;
    offBtn.appendChild(offBtnText);
  });

  _sidebarArr.bottom1.forEach(function (links) {
    var link = document.createElement("a");
    link.href = links.link;
    link.textContent = links.title;
    bottomUpper.appendChild(link);
  });

  _sidebarArr.bottom2.forEach(function (links) {
    var link = document.createElement("a");
    link.href = links.link;
    link.textContent = links.title;
    bottomLower.appendChild(link);
  });

  function addSeeMoreInSecond() {
    var offBtn = document.createElement("button");
    offBtn.classList.add("off-sidebar", "off-btn");
    offBtn.setAttribute("id", "offArrowDown1Btn");
    secondDivision.appendChild(offBtn);
    var offBtnIcon = document.createElement("span");
    offBtnIcon.classList.add("off-side-icon", "material-icons-outlined");
    offBtnIcon.textContent = "keyboard_arrow_down";
    offBtn.appendChild(offBtnIcon);
    var offBtnText = document.createElement("span");
    offBtnText.classList.add("off-btn-text");
    offBtnText.textContent = "Show more";
    offBtn.appendChild(offBtnText);
  }

  function addSeeMoreInThird() {
    var offBtn = document.createElement("button");
    offBtn.classList.add("off-sidebar", "off-btn");
    offBtn.setAttribute("id", "offArrowDown2Btn");
    thirdDivision.appendChild(offBtn);
    var offBtnIcon = document.createElement("span");
    offBtnIcon.classList.add("off-side-icon", "material-icons-outlined");
    offBtnIcon.textContent = "keyboard_arrow_down";
    offBtn.appendChild(offBtnIcon);
    var offBtnText = document.createElement("span");
    offBtnText.classList.add("off-btn-text");
    offBtnText.textContent = "Show more";
    offBtn.appendChild(offBtnText);
  }
}
},{"../arrays/sidebarArr.js":"../dependencies/arrays/sidebarArr.js"}],"subscriptions/index.js":[function(require,module,exports) {
"use strict";

var _sidebar = require("../../dependencies/elements/sidebar.js");

// this is the whole sidebar
(0, _sidebar.startUp)("Subscriptions");
},{"../../dependencies/elements/sidebar.js":"../dependencies/elements/sidebar.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63011" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","subscriptions/index.js"], null)
//# sourceMappingURL=/subscriptions.b43271bf.js.map