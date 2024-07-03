//Wed Jul 03 2024 03:38:37 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
!function () {
  var _0x1517a0 = function () {
      var _0x102d22 = true;
      return function (_0x29d538, _0x9284da) {
        var _0x5acb03 = _0x102d22 ? function () {
          if (_0x9284da) {
            var _0x3a5c19 = _0x9284da.apply(_0x29d538, arguments);
            _0x9284da = null;
            return _0x3a5c19;
          }
        } : function () {};
        _0x102d22 = false;
        return _0x5acb03;
      };
    }(),
    _0x1262c3 = _0x1517a0(this, function () {
      var _0x42d846 = function () {
        var _0x2f2904 = _0x42d846.constructor("return /\" + this + \"/")().constructor("^([^ ]+( +[^ ]+)+)+[^ ]}");
        return !_0x2f2904.test(_0x1262c3);
      };
      return _0x42d846();
    });
  _0x1262c3();
  function _0x123d36() {
    this.mode = 1;
    this.sk = new Array(32);
    this.isPadding = !0;
  }
  function _0x2916a0(_0x5557e9, _0x2a02f6) {
    return (255 & _0x5557e9[_0x2a02f6]) << 24 | (255 & _0x5557e9[_0x2a02f6 + 1]) << 16 | (255 & _0x5557e9[_0x2a02f6 + 2]) << 8 | 255 & _0x5557e9[_0x2a02f6 + 3];
  }
  function _0x5b65b6(_0x4f3580, _0x241e6a, _0x5bae00) {
    _0x241e6a[_0x5bae00] = 255 & _0x4f3580 >> 24;
    _0x241e6a[_0x5bae00 + 1] = 255 & _0x4f3580 >> 16;
    _0x241e6a[_0x5bae00 + 2] = 255 & _0x4f3580 >> 8;
    _0x241e6a[_0x5bae00 + 3] = 255 & _0x4f3580;
  }
  function _0x4bb945(_0x40e48f, _0x179dd7) {
    return function (_0x132e5b, _0xf75d80) {
      return _0x132e5b << _0xf75d80;
    }(_0x40e48f, _0x179dd7) | _0x40e48f >> 32 - _0x179dd7;
  }
  var _0x3252b4 = [214, 145, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5, 43, 103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153, 156, 66, 80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98, 228, 179, 28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166, 71, 7, 167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168, 104, 107, 129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53, 30, 36, 14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135, 212, 0, 70, 87, 159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158, 234, 191, 138, 210, 64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161, 224, 174, 93, 164, 155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227, 29, 246, 226, 46, 130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111, 213, 219, 55, 69, 222, 253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81, 141, 27, 175, 146, 187, 221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216, 10, 193, 49, 136, 165, 205, 123, 189, 45, 116, 208, 18, 184, 229, 180, 176, 137, 105, 151, 74, 12, 150, 119, 126, 101, 185, 241, 9, 197, 110, 198, 132, 24, 240, 125, 236, 58, 220, 77, 32, 121, 238, 95, 62, 215, 203, 57, 73],
    _0x1586d9 = [462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617, 2830087869, 3301692121, 3773296373, 4228057617, 404694573, 876298825, 1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337, 4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545, 2695343797, 3166948049, 3638552301, 4110090761, 269950501, 741554753, 1213159005, 1684763264];
  function _0x1bb85d(_0x5af03e) {
    return _0x3252b4[255 & _0x5af03e];
  }
  function _0x4bb41b(_0x1e84ff, _0x187630) {
    var _0x20a9c0,
      _0x1de98a,
      _0x18aa83,
      _0x5f2f42,
      _0x773d79 = new Array(4),
      _0x41d1b8 = new Array(36),
      _0x3c5877 = 0;
    for (_0x773d79[0] = _0x2916a0(_0x187630, 0), _0x773d79[1] = _0x2916a0(_0x187630, 4), _0x773d79[2] = _0x2916a0(_0x187630, 8), _0x773d79[3] = _0x2916a0(_0x187630, 12), _0x41d1b8[0] = _0x773d79[0] ^ 2746333894, _0x41d1b8[1] = _0x773d79[1] ^ 1453994832, _0x41d1b8[2] = _0x773d79[2] ^ 1736282519, _0x41d1b8[3] = _0x773d79[3] ^ 2993693405; _0x3c5877 < 32; _0x3c5877++) {
      _0x41d1b8[_0x3c5877 + 4] = _0x41d1b8[_0x3c5877] ^ (_0x20a9c0 = _0x41d1b8[_0x3c5877 + 1] ^ _0x41d1b8[_0x3c5877 + 2] ^ _0x41d1b8[_0x3c5877 + 3] ^ _0x1586d9[_0x3c5877], void 0, void 0, _0x5f2f42 = void 0, _0x18aa83 = new Array(4), _0x5f2f42 = new Array(4), _0x5b65b6(_0x20a9c0, _0x18aa83, 0), _0x5f2f42[0] = _0x1bb85d(_0x18aa83[0]), _0x5f2f42[1] = _0x1bb85d(_0x18aa83[1]), _0x5f2f42[2] = _0x1bb85d(_0x18aa83[2]), _0x5f2f42[3] = _0x1bb85d(_0x18aa83[3]), (_0x1de98a = _0x2916a0(_0x5f2f42, 0)) ^ _0x4bb945(_0x1de98a, 13) ^ _0x4bb945(_0x1de98a, 23));
      _0x1e84ff[_0x3c5877] = _0x41d1b8[_0x3c5877 + 4];
    }
  }
  function _0x46c93d(_0xf38bf4, _0x31ceb7, _0x497fef) {
    for (i = 0, ulbuf = new Array(36), ulbuf[0] = _0x2916a0(_0x31ceb7, 0), ulbuf[1] = _0x2916a0(_0x31ceb7, 4), ulbuf[2] = _0x2916a0(_0x31ceb7, 8), ulbuf[3] = _0x2916a0(_0x31ceb7, 12); i < 32;) {
      ulbuf[i + 4] = (_0x29823c = ulbuf[i], _0x525507 = ulbuf[i + 1], _0x3fd608 = ulbuf[i + 2], _0x27d46c = ulbuf[i + 3], _0x4e2309 = _0xf38bf4[i], _0x37467e = void 0, _0x23f72d = void 0, _0x330b57 = void 0, _0x2d5ae4 = void 0, _0x29823c ^ (_0x37467e = _0x525507 ^ _0x3fd608 ^ _0x27d46c ^ _0x4e2309, _0x330b57 = new Array(4), _0x2d5ae4 = new Array(4), _0x5b65b6(_0x37467e, _0x330b57, 0), _0x2d5ae4[0] = _0x1bb85d(_0x330b57[0]), _0x2d5ae4[1] = _0x1bb85d(_0x330b57[1]), _0x2d5ae4[3] = _0x1bb85d(_0x330b57[2]), _0x2d5ae4[2] = _0x1bb85d(_0x330b57[3]), (_0x23f72d = _0x2916a0(_0x2d5ae4, 0)) ^ _0x4bb945(_0x23f72d, 2) ^ _0x4bb945(_0x23f72d, 10) ^ _0x4bb945(_0x23f72d, 18) ^ _0x4bb945(_0x23f72d, 24)));
      i++;
    }
    var _0x29823c, _0x525507, _0x3fd608, _0x27d46c, _0x4e2309, _0x37467e, _0x23f72d, _0x330b57, _0x2d5ae4;
    _0x5b65b6(ulbuf[35], _0x497fef, 0);
    _0x5b65b6(ulbuf[34], _0x497fef, 4);
    _0x5b65b6(ulbuf[33], _0x497fef, 8);
    _0x5b65b6(ulbuf[32], _0x497fef, 12);
  }
  function _0x2bd34(_0x5626f2, _0x1c6c42) {
    if (null == _0x5626f2) {
      return null;
    }
    var _0xae042e = [];
    if (_0xae042e = _0xae042e.concat(_0x5626f2), 1 == _0x1c6c42) {
      var _0x475c50 = 16 - _0x5626f2.length % 16;
      for (i = 0; i < _0x475c50; i++) {
        _0xae042e[_0x5626f2.length + i] = _0x475c50;
      }
    } else {
      _0x475c50 = _0x5626f2[_0x5626f2.length - 1];
      for (var _0x3b67d2 = 0; _0x3b67d2 < _0x475c50; _0x3b67d2++) {
        _0xae042e.pop();
      }
    }
    return _0xae042e;
  }
  function _0x77573f(_0x11f115, _0x24d6f1) {
    null == _0x24d6f1 | "" == _0x24d6f1 && Error("input is null!");
    _0x11f115.isPadding && 1 == _0x11f115.mode && (_0x24d6f1 = _0x2bd34(_0x24d6f1, 1));
    for (var _0x1d3a77 = _0x24d6f1.length, _0x5f4f34 = [], _0x5dfa69 = 0; _0x5dfa69 < _0x1d3a77; _0x5dfa69 += 16) {
      var _0x17972b = [],
        _0x380dc2 = [];
      _0x17972b.push(_0x24d6f1[_0x5dfa69 + 0], _0x24d6f1[_0x5dfa69 + 1], _0x24d6f1[_0x5dfa69 + 2], _0x24d6f1[_0x5dfa69 + 3], _0x24d6f1[_0x5dfa69 + 4], _0x24d6f1[_0x5dfa69 + 5], _0x24d6f1[_0x5dfa69 + 6], _0x24d6f1[_0x5dfa69 + 7], _0x24d6f1[_0x5dfa69 + 8], _0x24d6f1[_0x5dfa69 + 9], _0x24d6f1[_0x5dfa69 + 10], _0x24d6f1[_0x5dfa69 + 11], _0x24d6f1[_0x5dfa69 + 12], _0x24d6f1[_0x5dfa69 + 13], _0x24d6f1[_0x5dfa69 + 14], _0x24d6f1[_0x5dfa69 + 15]);
      _0x46c93d(_0x11f115.sk, _0x17972b, _0x380dc2);
      _0x5f4f34 = _0x5f4f34.concat(_0x380dc2);
    }
    _0x11f115.isPadding && 0 == _0x11f115.mode && (_0x5f4f34 = _0x2bd34(_0x5f4f34, 0));
    return _0x5f4f34;
  }
  function _0x92504a(_0x48e3c6) {
    var _0x3f9115,
      _0x4d538d,
      _0x4590e3 = new Array();
    _0x3f9115 = _0x48e3c6.length;
    for (var _0x49daf9 = 0; _0x49daf9 < _0x3f9115; _0x49daf9++) {
      (_0x4d538d = _0x48e3c6.charCodeAt(_0x49daf9)) >= 65536 && _0x4d538d <= 1114111 ? (_0x4590e3.push(_0x4d538d >> 18 & 7 | 240), _0x4590e3.push(_0x4d538d >> 12 & 63 | 128), _0x4590e3.push(_0x4d538d >> 6 & 63 | 128), _0x4590e3.push(63 & _0x4d538d | 128)) : _0x4d538d >= 2048 && _0x4d538d <= 65535 ? (_0x4590e3.push(_0x4d538d >> 12 & 15 | 224), _0x4590e3.push(_0x4d538d >> 6 & 63 | 128), _0x4590e3.push(63 & _0x4d538d | 128)) : _0x4d538d >= 128 && _0x4d538d <= 2047 ? (_0x4590e3.push(_0x4d538d >> 6 & 31 | 192), _0x4590e3.push(63 & _0x4d538d | 128)) : _0x4590e3.push(255 & _0x4d538d);
    }
    return _0x4590e3;
  }
  window.CaData_KXC = function (_0x2a9f50, _0x13ed87) {
    var _0x3f814b = new _0x123d36();
    if (_0x3f814b.isPadding = !0, _0x3f814b.mode = 1, void 0 !== _0x13ed87) {
      var _0x583225 = _0x92504a(_0x13ed87);
    } else {
      _0x583225 = _0x92504a("11HDESaAhiHHugDz");
    }
    !function (_0x53d439, _0xb2eb7f) {
      null == _0x53d439 && Error("ctx is null!");
      null != _0xb2eb7f && 16 == _0xb2eb7f.length || Error("yh error!");
      _0x53d439.mode = 1;
      _0x4bb41b(_0x53d439.sk, _0xb2eb7f);
    }(_0x3f814b, _0x583225);
    var _0xf82aae = _0x77573f(_0x3f814b, _0x92504a(_0x2a9f50)),
      _0x5e2ba8 = base64js.fromByteArray(_0xf82aae);
    null != _0x5e2ba8 && _0x5e2ba8.trim().length > 0 && _0x5e2ba8.replace(/(\s*|\t|\r|\n)/g, "");
    return _0x5e2ba8;
  };
  window.MuData_KXC = function (_0x5e66aa, _0x43f5ba) {
    try {
      var _0x21fbad = new _0x123d36();
      if (_0x21fbad.isPadding = !0, _0x21fbad.mode = 0, void 0 !== _0x43f5ba) {
        var _0x1f5250 = _0x92504a(_0x43f5ba);
      } else {
        _0x1f5250 = _0x92504a("11HDESaAhiHHugDz");
      }
      (function (_0x3ca6b6, _0x42649f) {
        null == _0x3ca6b6 && Error("ctx is null!");
        null != _0x42649f && 16 == _0x42649f.length || Error("yh error!");
        _0x3ca6b6.mode = 0;
        _0x4bb41b(_0x3ca6b6.sk, _0x42649f);
        _0x3ca6b6.sk = _0x3ca6b6.sk.reverse();
      })(_0x21fbad, _0x1f5250);
      return function (_0x5329c3) {
        for (var _0x5c03f8 = "", _0x184bf1 = new Uint8Array(_0x5329c3), _0x196644 = _0x184bf1.byteLength, _0x186cc1 = 0; _0x186cc1 < _0x196644; _0x186cc1++) {
          _0x5c03f8 += String.fromCharCode(_0x184bf1[_0x186cc1]);
        }
        return decodeURIComponent(escape(_0x5c03f8));
      }(_0x77573f(_0x21fbad, base64js.toByteArray(_0x5e66aa)));
    } catch (_0x32b20a) {
      Error(_0x32b20a.message);
      return null;
    }
  };
}();
function loadAESDecryptStr(str) {
  var result = MuData_KXC(str, "FHcre0YRfbfcUiLv");
  return result;
}