// via https://declann.github.io/fondue/playground.html

/*
The following code was inserted automatically by fondue to collect information
about the execution of all the JavaScript on this page or in this program.

If you're using Brackets, this is caused by the Theseus extension, which you
can disable by unchecking File > Enable Theseus.

https://github.com/adobe-research/fondue
https://github.com/adobe-research/theseus
*/

/*
 * Copyright (c) 2012 Massachusetts Institute of Technology, Adobe Systems
 * Incorporated, and other contributors. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*
The source of source-map is included below on the line beginning with "var sourceMap",
and its license is as follows:

Copyright (c) 2009-2011, Mozilla Foundation and contributors
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the names of the Mozilla Foundation nor the names of project
  contributors may be used to endorse or promote products derived from this
  software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

if (typeof __tracer === "undefined") {
  __tracer = new (function () {
    var sourceMap = (function () {
      function define(e, t, n) {
        if (typeof e != "string")
          throw new TypeError("Expected string, got: " + e);
        arguments.length == 2 && (n = t);
        if (e in define.modules)
          throw new Error("Module already defined: " + e);
        define.modules[e] = n;
      }
      function Domain() {
        (this.modules = {}), (this._currentModule = null);
      }
      (define.modules = {}),
        (function () {
          function e(e) {
            var t = e.split("/"),
              n = 1;
            while (n < t.length)
              t[n] === ".."
                ? t.splice(n - 1, 1)
                : t[n] === "."
                ? t.splice(n, 1)
                : n++;
            return t.join("/");
          }
          function t(e, t) {
            return (
              (e = e.trim()),
              (t = t.trim()),
              /^\//.test(t) ? t : e.replace(/\/*$/, "/") + t
            );
          }
          function n(e) {
            var t = e.split("/");
            return t.pop(), t.join("/");
          }
          (Domain.prototype.require = function (e, t) {
            if (Array.isArray(e)) {
              var n = e.map(function (e) {
                return this.lookup(e);
              }, this);
              return t && t.apply(null, n), undefined;
            }
            return this.lookup(e);
          }),
            (Domain.prototype.lookup = function (r) {
              /^\./.test(r) && (r = e(t(n(this._currentModule), r)));
              if (r in this.modules) {
                var i = this.modules[r];
                return i;
              }
              if (r in define.modules) {
                var i = define.modules[r];
                if (typeof i == "function") {
                  var s = {},
                    o = this._currentModule;
                  (this._currentModule = r),
                    i(this.require.bind(this), s, { id: r, uri: "" }),
                    (this._currentModule = o),
                    (i = s);
                }
                return (this.modules[r] = i), i;
              }
              throw new Error("Module not defined: " + r);
            });
        })(),
        (define.Domain = Domain),
        (define.globalDomain = new Domain());
      var require = define.globalDomain.require.bind(define.globalDomain);
      define(
        "source-map/source-map-generator",
        [
          "require",
          "exports",
          "module",
          "source-map/base64-vlq",
          "source-map/util",
          "source-map/array-set",
        ],
        function (e, t, n) {
          function o(e) {
            (this._file = i.getArg(e, "file")),
              (this._sourceRoot = i.getArg(e, "sourceRoot", null)),
              (this._sources = new s()),
              (this._names = new s()),
              (this._mappings = []),
              (this._sourcesContents = null);
          }
          function u(e, t) {
            var n = (e && e.line) - (t && t.line);
            return n ? n : (e && e.column) - (t && t.column);
          }
          function a(e, t) {
            return (e = e || ""), (t = t || ""), (e > t) - (e < t);
          }
          function f(e, t) {
            return (
              u(e.generated, t.generated) ||
              u(e.original, t.original) ||
              a(e.source, t.source) ||
              a(e.name, t.name)
            );
          }
          var r = e("./base64-vlq"),
            i = e("./util"),
            s = e("./array-set").ArraySet;
          (o.prototype._version = 3),
            (o.fromSourceMap = function (t) {
              var n = t.sourceRoot,
                r = new o({ file: t.file, sourceRoot: n });
              return (
                t.eachMapping(function (e) {
                  var t = {
                    generated: {
                      line: e.generatedLine,
                      column: e.generatedColumn,
                    },
                  };
                  e.source &&
                    ((t.source = e.source),
                    n && (t.source = i.relative(n, t.source)),
                    (t.original = {
                      line: e.originalLine,
                      column: e.originalColumn,
                    }),
                    e.name && (t.name = e.name)),
                    r.addMapping(t);
                }),
                t.sources.forEach(function (e) {
                  var n = t.sourceContentFor(e);
                  n && r.setSourceContent(e, n);
                }),
                r
              );
            }),
            (o.prototype.addMapping = function (t) {
              var n = i.getArg(t, "generated"),
                r = i.getArg(t, "original", null),
                s = i.getArg(t, "source", null),
                o = i.getArg(t, "name", null);
              this._validateMapping(n, r, s, o),
                s && !this._sources.has(s) && this._sources.add(s),
                o && !this._names.has(o) && this._names.add(o),
                this._mappings.push({
                  generated: n,
                  original: r,
                  source: s,
                  name: o,
                });
            }),
            (o.prototype.setSourceContent = function (t, n) {
              var r = t;
              this._sourceRoot && (r = i.relative(this._sourceRoot, r)),
                n !== null
                  ? (this._sourcesContents || (this._sourcesContents = {}),
                    (this._sourcesContents[i.toSetString(r)] = n))
                  : (delete this._sourcesContents[i.toSetString(r)],
                    Object.keys(this._sourcesContents).length === 0 &&
                      (this._sourcesContents = null));
            }),
            (o.prototype.applySourceMap = function (t, n) {
              n || (n = t.file);
              var r = this._sourceRoot;
              r && (n = i.relative(r, n));
              var o = new s(),
                u = new s();
              this._mappings.forEach(function (e) {
                if (e.source === n && e.original) {
                  var s = t.originalPositionFor({
                    line: e.original.line,
                    column: e.original.column,
                  });
                  s.source !== null &&
                    (r
                      ? (e.source = i.relative(r, s.source))
                      : (e.source = s.source),
                    (e.original.line = s.line),
                    (e.original.column = s.column),
                    s.name !== null && e.name !== null && (e.name = s.name));
                }
                var a = e.source;
                a && !o.has(a) && o.add(a);
                var f = e.name;
                f && !u.has(f) && u.add(f);
              }, this),
                (this._sources = o),
                (this._names = u),
                t.sources.forEach(function (e) {
                  var n = t.sourceContentFor(e);
                  n &&
                    (r && (e = i.relative(r, e)), this.setSourceContent(e, n));
                }, this);
            }),
            (o.prototype._validateMapping = function (t, n, r, i) {
              if (
                t &&
                "line" in t &&
                "column" in t &&
                t.line > 0 &&
                t.column >= 0 &&
                !n &&
                !r &&
                !i
              )
                return;
              if (
                t &&
                "line" in t &&
                "column" in t &&
                n &&
                "line" in n &&
                "column" in n &&
                t.line > 0 &&
                t.column >= 0 &&
                n.line > 0 &&
                n.column >= 0 &&
                r
              )
                return;
              throw new Error("Invalid mapping.");
            }),
            (o.prototype._serializeMappings = function () {
              var t = 0,
                n = 1,
                i = 0,
                s = 0,
                o = 0,
                u = 0,
                a = "",
                l;
              this._mappings.sort(f);
              for (var c = 0, h = this._mappings.length; c < h; c++) {
                l = this._mappings[c];
                if (l.generated.line !== n) {
                  t = 0;
                  while (l.generated.line !== n) (a += ";"), n++;
                } else if (c > 0) {
                  if (!f(l, this._mappings[c - 1])) continue;
                  a += ",";
                }
                (a += r.encode(l.generated.column - t)),
                  (t = l.generated.column),
                  l.source &&
                    l.original &&
                    ((a += r.encode(this._sources.indexOf(l.source) - u)),
                    (u = this._sources.indexOf(l.source)),
                    (a += r.encode(l.original.line - 1 - s)),
                    (s = l.original.line - 1),
                    (a += r.encode(l.original.column - i)),
                    (i = l.original.column),
                    l.name &&
                      ((a += r.encode(this._names.indexOf(l.name) - o)),
                      (o = this._names.indexOf(l.name))));
              }
              return a;
            }),
            (o.prototype.toJSON = function () {
              var t = {
                version: this._version,
                file: this._file,
                sources: this._sources.toArray(),
                names: this._names.toArray(),
                mappings: this._serializeMappings(),
              };
              return (
                this._sourceRoot && (t.sourceRoot = this._sourceRoot),
                this._sourcesContents &&
                  (t.sourcesContent = t.sources.map(function (e) {
                    return (
                      t.sourceRoot && (e = i.relative(t.sourceRoot, e)),
                      Object.prototype.hasOwnProperty.call(
                        this._sourcesContents,
                        i.toSetString(e)
                      )
                        ? this._sourcesContents[i.toSetString(e)]
                        : null
                    );
                  }, this)),
                t
              );
            }),
            (o.prototype.toString = function () {
              return JSON.stringify(this);
            }),
            (t.SourceMapGenerator = o);
        }
      ),
        define(
          "source-map/base64-vlq",
          ["require", "exports", "module", "source-map/base64"],
          function (e, t, n) {
            function a(e) {
              return e < 0 ? (-e << 1) + 1 : (e << 1) + 0;
            }
            function f(e) {
              var t = (e & 1) === 1,
                n = e >> 1;
              return t ? -n : n;
            }
            var r = e("./base64"),
              i = 5,
              s = 1 << i,
              o = s - 1,
              u = s;
            (t.encode = function (t) {
              var n = "",
                s,
                f = a(t);
              do (s = f & o), (f >>>= i), f > 0 && (s |= u), (n += r.encode(s));
              while (f > 0);
              return n;
            }),
              (t.decode = function (t) {
                var n = 0,
                  s = t.length,
                  a = 0,
                  l = 0,
                  c,
                  h;
                do {
                  if (n >= s)
                    throw new Error(
                      "Expected more digits in base 64 VLQ value."
                    );
                  (h = r.decode(t.charAt(n++))),
                    (c = !!(h & u)),
                    (h &= o),
                    (a += h << l),
                    (l += i);
                } while (c);
                return { value: f(a), rest: t.slice(n) };
              });
          }
        ),
        define(
          "source-map/base64",
          ["require", "exports", "module"],
          function (e, t, n) {
            var r = {},
              i = {};
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
              .split("")
              .forEach(function (e, t) {
                (r[e] = t), (i[t] = e);
              }),
              (t.encode = function (t) {
                if (t in i) return i[t];
                throw new TypeError("Must be between 0 and 63: " + t);
              }),
              (t.decode = function (t) {
                if (t in r) return r[t];
                throw new TypeError("Not a valid base 64 digit: " + t);
              });
          }
        ),
        define(
          "source-map/util",
          ["require", "exports", "module"],
          function (e, t, n) {
            function r(e, t, n) {
              if (t in e) return e[t];
              if (arguments.length === 3) return n;
              throw new Error('"' + t + '" is a required argument.');
            }
            function s(e) {
              var t = e.match(i);
              return t
                ? {
                    scheme: t[1],
                    auth: t[3],
                    host: t[4],
                    port: t[6],
                    path: t[7],
                  }
                : null;
            }
            function o(e) {
              var t = e.scheme + "://";
              return (
                e.auth && (t += e.auth + "@"),
                e.host && (t += e.host),
                e.port && (t += ":" + e.port),
                e.path && (t += e.path),
                t
              );
            }
            function u(e, t) {
              var n;
              return t.match(i)
                ? t
                : t.charAt(0) === "/" && (n = s(e))
                ? ((n.path = t), o(n))
                : e.replace(/\/$/, "") + "/" + t;
            }
            function a(e) {
              return "$" + e;
            }
            function f(e) {
              return e.substr(1);
            }
            function l(e, t) {
              e = e.replace(/\/$/, "");
              var n = s(e);
              return t.charAt(0) == "/" && n && n.path == "/"
                ? t.slice(1)
                : t.indexOf(e + "/") === 0
                ? t.substr(e.length + 1)
                : t;
            }
            t.getArg = r;
            var i = /([\w+\-.]+):\/\/((\w+:\w+)@)?([\w.]+)?(:(\d+))?(\S+)?/;
            (t.urlParse = s),
              (t.urlGenerate = o),
              (t.join = u),
              (t.toSetString = a),
              (t.fromSetString = f),
              (t.relative = l);
          }
        ),
        define(
          "source-map/array-set",
          ["require", "exports", "module", "source-map/util"],
          function (e, t, n) {
            function i() {
              (this._array = []), (this._set = {});
            }
            var r = e("./util");
            (i.fromArray = function (t) {
              var n = new i();
              for (var r = 0, s = t.length; r < s; r++) n.add(t[r]);
              return n;
            }),
              (i.prototype.add = function (t) {
                if (this.has(t)) return;
                var n = this._array.length;
                this._array.push(t), (this._set[r.toSetString(t)] = n);
              }),
              (i.prototype.has = function (t) {
                return Object.prototype.hasOwnProperty.call(
                  this._set,
                  r.toSetString(t)
                );
              }),
              (i.prototype.indexOf = function (t) {
                if (this.has(t)) return this._set[r.toSetString(t)];
                throw new Error('"' + t + '" is not in the set.');
              }),
              (i.prototype.at = function (t) {
                if (t >= 0 && t < this._array.length) return this._array[t];
                throw new Error("No element indexed by " + t);
              }),
              (i.prototype.toArray = function () {
                return this._array.slice();
              }),
              (t.ArraySet = i);
          }
        ),
        define(
          "source-map/source-map-consumer",
          [
            "require",
            "exports",
            "module",
            "source-map/util",
            "source-map/binary-search",
            "source-map/array-set",
            "source-map/base64-vlq",
          ],
          function (e, t, n) {
            function u(e) {
              var t = e;
              typeof e == "string" &&
                (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
              var n = r.getArg(t, "version"),
                i = r.getArg(t, "sources"),
                o = r.getArg(t, "names"),
                u = r.getArg(t, "sourceRoot", null),
                a = r.getArg(t, "sourcesContent", null),
                f = r.getArg(t, "mappings"),
                l = r.getArg(t, "file", null);
              if (n !== this._version)
                throw new Error("Unsupported version: " + n);
              (this._names = s.fromArray(o)),
                (this._sources = s.fromArray(i)),
                (this.sourceRoot = u),
                (this.sourcesContent = a),
                (this.file = l),
                (this._generatedMappings = []),
                (this._originalMappings = []),
                this._parseMappings(f, u);
            }
            var r = e("./util"),
              i = e("./binary-search"),
              s = e("./array-set").ArraySet,
              o = e("./base64-vlq");
            (u.prototype._version = 3),
              Object.defineProperty(u.prototype, "sources", {
                get: function () {
                  return this._sources.toArray().map(function (e) {
                    return this.sourceRoot ? r.join(this.sourceRoot, e) : e;
                  }, this);
                },
              }),
              (u.prototype._parseMappings = function (t, n) {
                var r = 1,
                  i = 0,
                  s = 0,
                  u = 0,
                  a = 0,
                  f = 0,
                  l = /^[,;]/,
                  c = t,
                  h,
                  p;
                while (c.length > 0)
                  if (c.charAt(0) === ";") r++, (c = c.slice(1)), (i = 0);
                  else if (c.charAt(0) === ",") c = c.slice(1);
                  else {
                    (h = {}),
                      (h.generatedLine = r),
                      (p = o.decode(c)),
                      (h.generatedColumn = i + p.value),
                      (i = h.generatedColumn),
                      (c = p.rest);
                    if (c.length > 0 && !l.test(c.charAt(0))) {
                      (p = o.decode(c)),
                        (h.source = this._sources.at(a + p.value)),
                        (a += p.value),
                        (c = p.rest);
                      if (c.length === 0 || l.test(c.charAt(0)))
                        throw new Error(
                          "Found a source, but no line and column"
                        );
                      (p = o.decode(c)),
                        (h.originalLine = s + p.value),
                        (s = h.originalLine),
                        (h.originalLine += 1),
                        (c = p.rest);
                      if (c.length === 0 || l.test(c.charAt(0)))
                        throw new Error(
                          "Found a source and line, but no column"
                        );
                      (p = o.decode(c)),
                        (h.originalColumn = u + p.value),
                        (u = h.originalColumn),
                        (c = p.rest),
                        c.length > 0 &&
                          !l.test(c.charAt(0)) &&
                          ((p = o.decode(c)),
                          (h.name = this._names.at(f + p.value)),
                          (f += p.value),
                          (c = p.rest));
                    }
                    this._generatedMappings.push(h),
                      typeof h.originalLine == "number" &&
                        this._originalMappings.push(h);
                  }
                this._originalMappings.sort(this._compareOriginalPositions);
              }),
              (u.prototype._compareOriginalPositions = function (t, n) {
                if (t.source > n.source) return 1;
                if (t.source < n.source) return -1;
                var r = t.originalLine - n.originalLine;
                return r === 0 ? t.originalColumn - n.originalColumn : r;
              }),
              (u.prototype._compareGeneratedPositions = function (t, n) {
                var r = t.generatedLine - n.generatedLine;
                return r === 0 ? t.generatedColumn - n.generatedColumn : r;
              }),
              (u.prototype._findMapping = function (t, n, r, s, o) {
                if (t[r] <= 0)
                  throw new TypeError(
                    "Line must be greater than or equal to 1, got " + t[r]
                  );
                if (t[s] < 0)
                  throw new TypeError(
                    "Column must be greater than or equal to 0, got " + t[s]
                  );
                return i.search(t, n, o);
              }),
              (u.prototype.originalPositionFor = function (t) {
                var n = {
                    generatedLine: r.getArg(t, "line"),
                    generatedColumn: r.getArg(t, "column"),
                  },
                  i = this._findMapping(
                    n,
                    this._generatedMappings,
                    "generatedLine",
                    "generatedColumn",
                    this._compareGeneratedPositions
                  );
                if (i) {
                  var s = r.getArg(i, "source", null);
                  return (
                    s && this.sourceRoot && (s = r.join(this.sourceRoot, s)),
                    {
                      source: s,
                      line: r.getArg(i, "originalLine", null),
                      column: r.getArg(i, "originalColumn", null),
                      name: r.getArg(i, "name", null),
                    }
                  );
                }
                return { source: null, line: null, column: null, name: null };
              }),
              (u.prototype.sourceContentFor = function (t) {
                if (!this.sourcesContent) return null;
                this.sourceRoot && (t = r.relative(this.sourceRoot, t));
                if (this._sources.has(t))
                  return this.sourcesContent[this._sources.indexOf(t)];
                var n;
                if (this.sourceRoot && (n = r.urlParse(this.sourceRoot))) {
                  var i = t.replace(/^file:\/\//, "");
                  if (n.scheme == "file" && this._sources.has(i))
                    return this.sourcesContent[this._sources.indexOf(i)];
                  if ((!n.path || n.path == "/") && this._sources.has("/" + t))
                    return this.sourcesContent[this._sources.indexOf("/" + t)];
                }
                throw new Error('"' + t + '" is not in the SourceMap.');
              }),
              (u.prototype.generatedPositionFor = function (t) {
                var n = {
                  source: r.getArg(t, "source"),
                  originalLine: r.getArg(t, "line"),
                  originalColumn: r.getArg(t, "column"),
                };
                this.sourceRoot &&
                  (n.source = r.relative(this.sourceRoot, n.source));
                var i = this._findMapping(
                  n,
                  this._originalMappings,
                  "originalLine",
                  "originalColumn",
                  this._compareOriginalPositions
                );
                return i
                  ? {
                      line: r.getArg(i, "generatedLine", null),
                      column: r.getArg(i, "generatedColumn", null),
                    }
                  : { line: null, column: null };
              }),
              (u.GENERATED_ORDER = 1),
              (u.ORIGINAL_ORDER = 2),
              (u.prototype.eachMapping = function (t, n, i) {
                var s = n || null,
                  o = i || u.GENERATED_ORDER,
                  a;
                switch (o) {
                  case u.GENERATED_ORDER:
                    a = this._generatedMappings;
                    break;
                  case u.ORIGINAL_ORDER:
                    a = this._originalMappings;
                    break;
                  default:
                    throw new Error("Unknown order of iteration.");
                }
                var f = this.sourceRoot;
                a.map(function (e) {
                  var t = e.source;
                  return (
                    t && f && (t = r.join(f, t)),
                    {
                      source: t,
                      generatedLine: e.generatedLine,
                      generatedColumn: e.generatedColumn,
                      originalLine: e.originalLine,
                      originalColumn: e.originalColumn,
                      name: e.name,
                    }
                  );
                }).forEach(t, s);
              }),
              (t.SourceMapConsumer = u);
          }
        ),
        define(
          "source-map/binary-search",
          ["require", "exports", "module"],
          function (e, t, n) {
            function r(e, t, n, i, s) {
              var o = Math.floor((t - e) / 2) + e,
                u = s(n, i[o]);
              return u === 0
                ? i[o]
                : u > 0
                ? t - o > 1
                  ? r(o, t, n, i, s)
                  : i[o]
                : o - e > 1
                ? r(e, o, n, i, s)
                : e < 0
                ? null
                : i[e];
            }
            t.search = function (t, n, i) {
              return n.length > 0 ? r(-1, n.length, t, n, i) : null;
            };
          }
        ),
        define(
          "source-map/source-node",
          [
            "require",
            "exports",
            "module",
            "source-map/source-map-generator",
            "source-map/util",
          ],
          function (e, t, n) {
            function s(e, t, n, r, i) {
              (this.children = []),
                (this.sourceContents = {}),
                (this.line = e === undefined ? null : e),
                (this.column = t === undefined ? null : t),
                (this.source = n === undefined ? null : n),
                (this.name = i === undefined ? null : i),
                r != null && this.add(r);
            }
            var r = e("./source-map-generator").SourceMapGenerator,
              i = e("./util");
            (s.fromStringWithSourceMap = function (t, n) {
              function f(e, t) {
                e === null || e.source === undefined
                  ? r.add(t)
                  : r.add(
                      new s(
                        e.originalLine,
                        e.originalColumn,
                        e.source,
                        t,
                        e.name
                      )
                    );
              }
              var r = new s(),
                i = t.split("\n"),
                o = 1,
                u = 0,
                a = null;
              return (
                n.eachMapping(function (e) {
                  if (a === null) {
                    while (o < e.generatedLine) r.add(i.shift() + "\n"), o++;
                    if (u < e.generatedColumn) {
                      var t = i[0];
                      r.add(t.substr(0, e.generatedColumn)),
                        (i[0] = t.substr(e.generatedColumn)),
                        (u = e.generatedColumn);
                    }
                  } else if (o < e.generatedLine) {
                    var n = "";
                    do (n += i.shift() + "\n"), o++, (u = 0);
                    while (o < e.generatedLine);
                    if (u < e.generatedColumn) {
                      var t = i[0];
                      (n += t.substr(0, e.generatedColumn)),
                        (i[0] = t.substr(e.generatedColumn)),
                        (u = e.generatedColumn);
                    }
                    f(a, n);
                  } else {
                    var t = i[0],
                      n = t.substr(0, e.generatedColumn - u);
                    (i[0] = t.substr(e.generatedColumn - u)),
                      (u = e.generatedColumn),
                      f(a, n);
                  }
                  a = e;
                }, this),
                f(a, i.join("\n")),
                n.sources.forEach(function (e) {
                  var t = n.sourceContentFor(e);
                  t && r.setSourceContent(e, t);
                }),
                r
              );
            }),
              (s.prototype.add = function (t) {
                if (Array.isArray(t))
                  t.forEach(function (e) {
                    this.add(e);
                  }, this);
                else {
                  if (!(t instanceof s || typeof t == "string"))
                    throw new TypeError(
                      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " +
                        t
                    );
                  t && this.children.push(t);
                }
                return this;
              }),
              (s.prototype.prepend = function (t) {
                if (Array.isArray(t))
                  for (var n = t.length - 1; n >= 0; n--) this.prepend(t[n]);
                else {
                  if (!(t instanceof s || typeof t == "string"))
                    throw new TypeError(
                      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " +
                        t
                    );
                  this.children.unshift(t);
                }
                return this;
              }),
              (s.prototype.walk = function (t) {
                this.children.forEach(function (e) {
                  e instanceof s
                    ? e.walk(t)
                    : e !== "" &&
                      t(e, {
                        source: this.source,
                        line: this.line,
                        column: this.column,
                        name: this.name,
                      });
                }, this);
              }),
              (s.prototype.join = function (t) {
                var n,
                  r,
                  i = this.children.length;
                if (i > 0) {
                  n = [];
                  for (r = 0; r < i - 1; r++)
                    n.push(this.children[r]), n.push(t);
                  n.push(this.children[r]), (this.children = n);
                }
                return this;
              }),
              (s.prototype.replaceRight = function (t, n) {
                var r = this.children[this.children.length - 1];
                return (
                  r instanceof s
                    ? r.replaceRight(t, n)
                    : typeof r == "string"
                    ? (this.children[this.children.length - 1] = r.replace(
                        t,
                        n
                      ))
                    : this.children.push("".replace(t, n)),
                  this
                );
              }),
              (s.prototype.setSourceContent = function (t, n) {
                this.sourceContents[i.toSetString(t)] = n;
              }),
              (s.prototype.walkSourceContents = function (t) {
                this.children.forEach(function (e) {
                  e instanceof s && e.walkSourceContents(t);
                }, this),
                  Object.keys(this.sourceContents).forEach(function (e) {
                    t(i.fromSetString(e), this.sourceContents[e]);
                  }, this);
              }),
              (s.prototype.toString = function () {
                var t = "";
                return (
                  this.walk(function (e) {
                    t += e;
                  }),
                  t
                );
              }),
              (s.prototype.toStringWithSourceMap = function (t) {
                var n = { code: "", line: 1, column: 0 },
                  i = new r(t),
                  s = !1;
                return (
                  this.walk(function (e, t) {
                    (n.code += e),
                      t.source !== null && t.line !== null && t.column !== null
                        ? (i.addMapping({
                            source: t.source,
                            original: { line: t.line, column: t.column },
                            generated: { line: n.line, column: n.column },
                            name: t.name,
                          }),
                          (s = !0))
                        : s &&
                          (i.addMapping({
                            generated: { line: n.line, column: n.column },
                          }),
                          (s = !1)),
                      e.split("").forEach(function (e) {
                        e === "\n" ? (n.line++, (n.column = 0)) : n.column++;
                      });
                  }),
                  this.walkSourceContents(function (e, t) {
                    i.setSourceContent(e, t);
                  }),
                  { code: n.code, map: i }
                );
              }),
              (t.SourceNode = s);
          }
        );
      return {
        SourceMapConsumer: require("source-map/source-map-consumer")
          .SourceMapConsumer,
        SourceMapGenerator: require("source-map/source-map-generator")
          .SourceMapGenerator,
        SourceNode: require("source-map/source-node").SourceNode,
      };
    })();

    var TRACER_ID = String(Math.random());

    var globalThis = undefined;

    var sourceByPath = {};
    var nodes = []; // objects describing functions, branches, call sites, etc
    var nodeById = {}; // id(string) -> node
    var invocationStack = [];
    var invocationById = {}; // id(string) -> invocation
    var invocationsByNodeId = {}; // id(string) -> array of invocations
    var exceptionsByNodeId = {}; // nodeId -> array of { exception: ..., invocationId: ... }
    var uncaughtExceptionsByNodeId = {}; // nodeId -> array of { exception: ..., invocationId: ... }
    var nodeHitCounts = {}; // { query-handle: { nodeId: hit-count } }
    var exceptionCounts = {}; // { query-handle: { nodeId: exception-count } }
    var logEntries = {}; // { query-handle: [invocation id] }
    var anonFuncParentInvocation,
      lastException,
      lastExceptionThrownFromInvocation; // yucky globals track state between trace* calls
    var nextInvocationId = 0;
    var _hitQueries = [];
    var _exceptionQueries = [];
    var _logQueries = [];
    var _fileCallGraph = [];
    var _sourceMaps = {};

    var _connected = false;

    // epochs
    var _lastEpochID = 0;
    var _lastEmitterID = 0;
    var _epochsById = []; // int -> epoch (only epochs that end up as part of the call graph are saved)
    var _epochsByName = {}; // string -> [epoch] (only epochs that end up as part of the call graph are saved)
    var _topLevelEpochsByName = {}; // string -> [epoch]
    var _epochStack = [];
    var _epochInvocationDepth = []; // stack of how deep into the invocation stack of each epoch we are
    var _topLevelInvocationsByEventName = {};

    // bail
    var _bailedTick = false;
    var _invocationsThisTick = 0;
    var _invocationStackSize = 0;
    var _explainedBails = false;

    function _consoleLog() {
      if (typeof console !== "undefined") {
        console.log.apply(console, arguments);
      }
    }

    function _resetTrace() {
      _consoleLog("[fondue] resetting trace data...");

      invocationStack = [];
      invocationById = {}; // id(string) -> invocation
      invocationsByNodeId = {}; // id(string) -> array of invocations
      exceptionsByNodeId = {}; // nodeId -> array of { exception: ..., invocationId: ... }
      uncaughtExceptionsByNodeId = {}; // nodeId -> array of { exception: ..., invocationId: ... }
      nodeHitCounts = {}; // { query-handle: { nodeId: hit-count } }
      exceptionCounts = {}; // { query-handle: { nodeId: exception-count } }
      logEntries = {}; // { query-handle: [invocation id] }
      (anonFuncParentInvocation = undefined),
        (lastException = undefined),
        (lastExceptionThrownFromInvocation = undefined); // yucky globals track state between trace* calls
      _hitQueries = [];
      _exceptionQueries = [];
      _logQueries = [];
      _fileCallGraph = [];

      // epochs
      _epochsById = []; // int -> epoch (only epochs that end up as part of the call graph are saved)
      _epochsByName = {}; // string -> [epoch] (only epochs that end up as part of the call graph are saved)
      _topLevelEpochsByName = {}; // string -> [epoch]
      _epochStack = [];
      _epochInvocationDepth = []; // stack of how deep into the invocation stack of each epoch we are
      _topLevelInvocationsByEventName = {};

      // bail
      _bailedTick = false;
      _invocationsThisTick = 0;
      _invocationStackSize = 0;
      _explainedBails = false;

      nodeTracker.reset();
      epochTracker.reset();
      fileCallGraphTracker.reset();
    }

    /*
    Fetching data from fondue happens by requesting a handle for the data you
    want, then calling another function to get the latest data from that handle.
    Typically, the first call to that function returns all the historical data
    and subsequent calls return the changes since the last call.
  
    The bookkeeping was the same in all the cases. Now this 'base class' handles
    it. Just make a new instance and override backfill() and updateSingle().
    */
    function Tracker(handlePrefix) {
      this.lastHandleID = 0;
      this.handlePrefix = handlePrefix;
      this.queries = {}; // handle -> query
      this.data = {}; // handle -> data
    }
    Tracker.prototype = {
      track: function (query) {
        var handleID = ++this.lastHandleID;
        var handle = this.handlePrefix + "-" + handleID;
        this.queries[handle] = query;
        this.data[handle] = this.backfill(query);
        return handle;
      },
      untrack: function (handle) {
        this._checkHandle(handle);

        delete this.queries[handle];
        delete this.data[handle];
      },
      /** return the data to be returned from the first call to delta() */
      backfill: function (query) {
        // override this
        return {};
      },
      update: function () {
        for (var handle in this.data) {
          var data = this.data[handle];
          var args = [data].concat(Array.prototype.slice.apply(arguments));
          this.data[handle] = this.updateSingle.apply(this, args);
        }
      },
      /**
      data: the previous data for this query
      arguments passed to update() will be passed after the data argument.
      */
      updateSingle: function (data, extraData1, extraData2) {
        // override this
        data["foo"] = "bar";
        return data;
      },
      delta: function (handle) {
        this._checkHandle(handle);

        var result = this.data[handle];
        this.data[handle] = this.emptyData(handle);
        return result;
      },
      /** after a call to delta(), the data for a handle is reset to this */
      emptyData: function (handle) {
        return {};
      },
      reset: function () {
        this.queries = {}; // handle -> query
        this.data = {}; // handle -> data
      },
      _checkHandle: function (handle) {
        if (!(handle in this.queries)) {
          throw new Error("unrecognized query");
        }
      },
    };

    var nodeTracker = new Tracker("node");
    nodeTracker.emptyData = function () {
      return [];
    };
    nodeTracker.backfill = function () {
      return nodes.slice();
    };
    nodeTracker.updateSingle = function (data, newNodes) {
      data.push.apply(data, newNodes);
      return data;
    };

    var epochTracker = new Tracker("epoch");
    epochTracker.backfill = function () {
      var data = {};
      for (var epochName in _topLevelEpochsByName) {
        data[epochName] = { hits: _topLevelEpochsByName[epochName].length };
      }
      return data;
    };
    epochTracker.updateSingle = function (data, epoch) {
      if (!(epoch.eventName in data)) {
        data[epoch.eventName] = { hits: 0 };
      }
      data[epoch.eventName].hits++;
      return data;
    };

    var fileCallGraphTracker = new Tracker("file-call-graph");
    fileCallGraphTracker.emptyData = function () {
      return [];
    };
    fileCallGraphTracker.backfill = function () {
      return _fileCallGraph.slice();
    };
    fileCallGraphTracker.updateSingle = function (data, item) {
      data.push(item);
      return data;
    };

    function _addSpecialNodes() {
      var node = {
        path: "[built-in]",
        start: { line: 0, column: 0 },
        end: { line: 0, column: 0 },
        id: "log",
        type: "function",
        childrenIds: [],
        parentId: undefined,
        name: "[log]",
        params: [],
      };
      nodes.push(node);
      nodeById[node.id] = node;
    }
    _addSpecialNodes();

    // helpers

    // adds keys from options to defaultOptions, overwriting on conflicts & returning defaultOptions
    function mergeInto(options, defaultOptions) {
      for (var key in options) {
        defaultOptions[key] = options[key];
      }
      return defaultOptions;
    }

    /**
     * calls callback with (collect, item, index) where collect is a function
     * whose argument should be one of the strings to be de-duped.
     * returns an array where each string appears only once.
     */
    function dedup(collection, callback) {
      var o = {};
      var collect = function (str) {
        o[str] = true;
      };
      for (var i in collection) {
        callback(collect, collection[i], i);
      }
      var arr = [];
      for (var str in o) {
        arr.push(str);
      }
      return arr;
    }

    function count(collection, callback) {
      var o = {};
      var collect = function (str) {
        if (str in o) {
          o[str]++;
        } else {
          o[str] = 1;
        }
      };
      for (var i in collection) {
        callback(collect, collection[i], i);
      }
      return o;
    }

    function flattenmap(collection, callback) {
      var arr = [];
      var collect = function (o) {
        arr.push(o);
      };
      for (var i in collection) {
        callback(collect, collection[i], i, collection);
      }
      return arr;
    }

    /**
     * behaves like de-dup, but collect takes a second, 'value' argument.
     * returns an object whose keys are the first arguments to collect,
     * and values are arrays of all the values passed with that key
     */
    function cluster(collection, callback) {
      var o = {};
      var collect = function (key, value) {
        if (key in o) {
          o[key].push(value);
        } else {
          o[key] = [value];
        }
      };
      for (var i in collection) {
        callback(collect, collection[i], i);
      }
      return o;
    }

    /**
     * returns a version of an object that's safe to JSON,
     * and is very conservative
     *
     *   undefined -> { type: 'undefined', value: undefined }
     *   null -> { type: 'undefined', value: null }
     *   true -> { type: 'boolean', value: true }
     *   4 -> { type: 'number', value: 4 }
     *   "foo" -> { type: 'string', value: "foo" }
     *   (function () { }) -> { type: 'object' }
     *   { a: "b" } -> { type: 'object' }
     */
    function marshalForTransmission(val, maxDepth) {
      if (maxDepth === undefined) {
        maxDepth = 1;
      }

      var o = { type: typeof val };
      if (
        ["undefined", "boolean", "number", "string"].indexOf(o.type) !== -1 ||
        val === null
      ) {
        if (typeof val === "undefined" && val !== undefined) {
          // special case: document.all claims to be undefined http://stackoverflow.com/questions/10350142/why-is-document-all-falsy
          o.type = "object";
          o.preview = "" + val;
        } else if (val === null) {
          o.type = "null";
          o.preview = "null";
        } else {
          o.value = val;
        }
      } else if (o.type === "object") {
        var newDepth = maxDepth - 1;

        if (val instanceof Array) {
          var len = val.length;
          if (val.__theseusTruncated && val.__theseusTruncated.length) {
            len += val.__theseusTruncated.length;
          }
          o.preview = "[Array:" + len + "]";
          newDepth = maxDepth - 0.5; // count for half
        } else if (typeof Buffer === "function" && val instanceof Buffer) {
          var len = val.length;
          if (val.__theseusTruncated && val.__theseusTruncated.length) {
            len += val.__theseusTruncated.length;
          }
          o.preview = "[Buffer:" + len + "]";
        } else {
          try {
            o.preview = String(val);
          } catch (e) {
            o.preview = "[Object]";
          }
        }

        if (maxDepth > 0) {
          o.ownProperties = {};
          for (var key in val) {
            if (val.hasOwnProperty(key) && !/^__theseus/.test(key)) {
              o.ownProperties[key] = marshalForTransmission(val[key], newDepth);
            }
          }
        }

        if ("__theseusTruncated" in val) {
          o.truncated = {};
          if ("length" in val.__theseusTruncated) {
            o.truncated.length = {
              amount: val.__theseusTruncated.length,
            };
          }
          if ("keys" in val.__theseusTruncated) {
            o.truncated.keys = {
              amount: val.__theseusTruncated.keys,
            };
          }
        }
      }
      return o;
    }

    function scrapeObject(object, depth) {
      var MAX_BUFFER_LENGTH = 32;
      var MAX_TOTAL_SIZE = 512;

      /**
      It's everyone's favorite game: bin packing!
  
      There's a big bin: total memory
      There's a smaller bin: the memory used by this scraped object
      There's smaller bins: the memory used by each child of this scraped object
  
      Our job is to copy as much useful information we can without overflowing
      the big bin (total memory). For now, we pretend that bin is bottomless.
  
      So our job is really to copy as much useful information as we can into
      the MAX_TOTAL_SIZE "bytes" allocated to this scraped object. We do this
      by performing a deep copy, and any time we encounter an object that's
      sufficiently large to put us over the limit, we store a reference to it
      instead of copying it.
  
      In this function, the "size" of a copy is approximated by summing the
      lengths of all strings, the lengths of all keys, and the count of
      objects of any other type, ignoring the overhead of array/object storage.
      **/

      // returns array: [approx size of copy, copy]
      var scrape = function (o, depth) {
        if (typeof o === "string") return [o.length, o]; // don't worry about retaining strings > MAX_TOTAL_SIZE, for now

        if (depth <= 0) return [1, o]; // XXX: even if there's a ton there, count it as 1
        if (o === null || typeof o !== "object") return [1, o];

        // return only the first MAX_BUFFER_LENGTH bytes of a Buffer
        if (typeof Buffer === "function" && o instanceof Buffer) {
          var len = Math.min(o.length, MAX_BUFFER_LENGTH);
          var o2 = new Buffer(len);
          if (o.length > MAX_BUFFER_LENGTH) {
            o2.__theseusTruncated = { length: o.length - MAX_BUFFER_LENGTH };
          }
          try {
            o.copy(o2, 0, 0, len);
          } catch (e) {}
          return [len, o2];
        }

        try {
          var size = 0;
          var o2 = o instanceof Array ? [] : {};
          for (var key in o) {
            if (
              o.__lookupGetter__ instanceof Function &&
              o.__lookupGetter__(key)
            )
              continue;
            if (
              !(o.hasOwnProperty instanceof Function) ||
              !o.hasOwnProperty(key)
            )
              continue;
            var scraped = scrape(o[key], depth - 1);
            var childSize = key.length + scraped[0];
            if (size + childSize <= MAX_TOTAL_SIZE) {
              size += childSize;
              o2[key] = scraped[1];
            } else {
              // XXX: if it's an array and this is a numeric key, count it as truncating the length instead
              if (!("__theseusTruncated" in o2)) {
                o2.__theseusTruncated = { keys: 0 };
              }
              o2.__theseusTruncated.keys++;
              o2[key] = o[key];
            }
          }
          return [size, o2];
        } catch (e) {
          _consoleLog("[fondue] couldn't scrape", o, e);
          return [1, o];
        }
      };

      return scrape(object, 1)[1];
    }

    function Invocation(info, type) {
      this.tick = nextInvocationId++;
      this.id = TRACER_ID + "-" + this.tick;
      this.timestamp = new Date().getTime();
      this.type = type;
      this.f = nodeById[info.nodeId];
      this.childLinks = [];
      this.parentLinks = [];
      this.returnValue = undefined;
      this.exception = undefined;
      this.topLevelInvocationId = undefined;
      this.epochID = undefined;
      this.epochDepth = undefined;
      this.args = {};
      this.arguments = info.arguments
        ? info.arguments.map(function (a) {
            return scrapeObject(a);
          })
        : undefined;
      this.this =
        info.this && info.this !== globalThis
          ? scrapeObject(info.this)
          : undefined;

      invocationById[this.id] = this;
    }
    Invocation.prototype.equalToInfo = function (info) {
      return this.f.id === info.nodeId;
    };
    Invocation.prototype.linkToChild = function (child, linkType) {
      this.childLinks.push(new InvocationLink(child.id, linkType));
      child.parentLinks.push(new InvocationLink(this.id, linkType));
      if (["call", "branch-enter"].indexOf(linkType) !== -1) {
        child.topLevelInvocationId = this.topLevelInvocationId;
      }
    };
    Invocation.prototype.getChildren = function (linkFilter) {
      var links = this.childLinks;
      if (linkFilter) {
        links = links.filter(linkFilter);
      }
      return links.map(function (link) {
        return invocationById[link.id];
      });
    };
    Invocation.prototype.getParents = function () {
      return this.parentLinks.map(function (link) {
        return invocationById[link.id];
      });
    };
    Invocation.prototype.getParentLinks = function () {
      return this.parentLinks;
    };
    /**
    calls iter(invocation) for all children in sub-graph; if iter returns true,
    treats that invocation as a leaf and continues
    **/
    Invocation.prototype.walk = function (iter) {
      this.getChildren().forEach(function (child) {
        if (iter(child) !== true) {
          child.walk(iter);
        }
      });
    };

    function InvocationLink(destId, type) {
      this.id = destId;
      this.type = type;
    }

    function Epoch(id, emitterID, eventName) {
      this.id = id;
      this.emitterID = emitterID;
      this.eventName = eventName;
    }

    function nextEpoch(emitterID, eventName) {
      var epochID = ++_lastEpochID;
      var epoch = new Epoch(epochID, emitterID, eventName);
      return epoch;
    }

    function hit(invocation) {
      var id = invocation.f.id;
      for (var handle in nodeHitCounts) {
        var hits = nodeHitCounts[handle];
        hits[id] = (hits[id] || 0) + 1;
      }

      // if this is console.log, we'll want the call site in a moment
      var callSite;
      if (invocation.f.id === "log") {
        callSite = invocation.getParents().filter(function (inv) {
          return inv.type === "callsite";
        })[0];
      }

      // add this invocation to all the relevant log queries
      for (var handle in _logQueries) {
        var query = _logQueries[handle];
        if (query.logs && invocation.f.id === "log") {
          if (callSite) {
            addLogEntry(handle, callSite.id);
          } else {
            _consoleLog("no call site! I needed one!", invocation.getParents());
          }
        }
        if (query.ids && query.ids.indexOf(id) !== -1) {
          addLogEntry(handle, invocation.id);
        }
      }
    }

    function calculateHitCounts() {
      var hits = {};
      nodes.forEach(function (n) {
        if (n.id in invocationsByNodeId) {
          hits[n.id] = invocationsByNodeId[n.id].length;
        }
      });
      return hits;
    }

    function calculateExceptionCounts() {
      var counts = {};
      nodes.forEach(function (n) {
        if (n.id in exceptionsByNodeId) {
          counts[n.id] = exceptionsByNodeId[n.id].length;
        }
      });
      return counts;
    }

    /** return ordered list of invocation ids for the given log query */
    function backlog(query) {
      var seenIds = {};
      var ids = [];

      function addIfUnseen(id) {
        if (!(id in seenIds)) {
          ids.push(id);
          seenIds[id] = true;
        }
      }

      var getId = function (invocation) {
        return invocation.id;
      };

      if (query.ids) {
        query.ids.forEach(function (nodeId) {
          var invocations = invocationsByNodeId[nodeId] || [];
          invocations.map(getId).forEach(addIfUnseen);

          // add logs that are called directly from this function
          invocations.forEach(function (invocation) {
            invocation.walk(function (child) {
              var isFunction = child.type === "function";
              if (isFunction && child.f.id === "log") {
                var callSite = child.getParents().filter(function (inv) {
                  return inv.type === "callsite";
                })[0];
                if (callSite) {
                  addIfUnseen(callSite.id);
                }
              }
              return isFunction;
            });
          });
        });
      }

      if (query.eventNames) {
        query.eventNames.forEach(function (name) {
          (_topLevelInvocationsByEventName[name] || [])
            .map(getId)
            .forEach(addIfUnseen);
        });
      }

      if (query.exceptions) {
        for (var nodeId in uncaughtExceptionsByNodeId) {
          uncaughtExceptionsByNodeId[nodeId]
            .map(function (o) {
              return o.invocationId;
            })
            .forEach(addIfUnseen);
        }
      }

      if (query.logs) {
        (invocationsByNodeId["log"] || []).forEach(function (invocation) {
          var callSite = invocation.getParents().filter(function (inv) {
            return inv.type === "callsite";
          })[0];
          if (callSite) {
            addIfUnseen(callSite.id);
          }
        });
      }

      ids = ids.sort(function (a, b) {
        return invocationById[a].tick - invocationById[b].tick;
      });
      return { entries: ids, seenIds: seenIds };
    }

    function addLogEntry(handle, invocationId) {
      if (!(invocationId in logEntries[handle].seenIds)) {
        logEntries[handle].entries.push(invocationId);
        logEntries[handle].seenIds[invocationId] = true;
      }
    }

    // instrumentation

    function bailThisTick(fromNode) {
      _bailedTick = true;
      invocationStack = [];
      _epochStack = [];
      _epochInvocationDepth = [];
      anonFuncParentInvocation = undefined;
      lastException = undefined;
      lastExceptionThrownFromInvocation = undefined;

      if (fromNode) {
        _consoleLog(
          "[fondue] bailing from " +
            (fromNode.name ? fromNode.name + " at " : "") +
            fromNode.path +
            " line " +
            fromNode.start.line +
            ", character " +
            fromNode.start.column
        );
      } else {
        _consoleLog("[fondue] bailing! trace collection will resume next tick");
      }
      if (!_explainedBails) {
        _consoleLog(
          "[fondue] (fondue is set to automatically bail after 4000096 invocations within a single tick. If you are using node-theseus, you can use the --theseus-max-invocations-per-tick=XXX option to raise the limit, but it will require more memory)"
        );
        _explainedBails = true;
      }
    }

    function endBail() {
      _bailedTick = false;
      _invocationsThisTick = 0;

      _consoleLog("[fondue] resuming trace collection after bailed tick");
    }

    function pushNewInvocation(info, type) {
      if (_bailedTick) {
        _invocationStackSize++;
        return;
      }

      var invocation = new Invocation(info, type);
      pushInvocation(invocation);
      return invocation;
    }

    function pushInvocation(invocation) {
      _invocationStackSize++;

      if (_bailedTick) return;

      _invocationsThisTick++;
      if (_invocationsThisTick === 4000096) {
        bailThisTick(invocation.f);
        return;
      }

      // associate with epoch, if there is one
      if (_epochStack.length > 0) {
        var epoch = _epochStack[_epochStack.length - 1];
        var depth = _epochInvocationDepth[_epochInvocationDepth.length - 1];
        invocation.epochID = epoch.id;
        invocation.epochDepth = depth;

        _epochInvocationDepth[_epochInvocationDepth.length - 1]++;

        // hang on to the epoch now that it's part of the call graph
        _epochsById[epoch.id] = epoch;

        if (!(epoch.eventName in _epochsByName)) {
          _epochsByName[epoch.eventName] = [];
        }
        _epochsByName[epoch.eventName].push(epoch);

        if (depth === 0) {
          epochTracker.update(epoch);

          if (!(epoch.eventName in _topLevelEpochsByName)) {
            _topLevelEpochsByName[epoch.eventName] = [];
            _topLevelInvocationsByEventName[epoch.eventName] = [];
          }
          _topLevelEpochsByName[epoch.eventName].push(epoch);
          _topLevelInvocationsByEventName[epoch.eventName].push(invocation);

          for (var handle in _logQueries) {
            var query = _logQueries[handle];
            if (
              query.eventNames &&
              query.eventNames.indexOf(epoch.eventName) !== -1
            ) {
              addLogEntry(handle, invocation.id);
            }
          }
        }
      }

      // add to invocationsByNodeId
      if (!invocationsByNodeId[invocation.f.id]) {
        invocationsByNodeId[invocation.f.id] = [];
      }
      invocationsByNodeId[invocation.f.id].push(invocation); // DN this where to add to crossfilter, if we added everything? [old idea?]

      // associate with caller, if there is one; otherwise, save as a top-level invocation
      var top = invocationStack[invocationStack.length - 1];
      if (top) {
        top.linkToChild(invocation, "call");
      } else {
        invocation.topLevelInvocationId = invocation.id;
      }

      // associate with the invocation where this anonymous function was created
      if (anonFuncParentInvocation) {
        anonFuncParentInvocation.linkToChild(invocation, "async");
        anonFuncParentInvocation = undefined;
      }

      // update hit counts
      hit(invocation);

      invocationStack.push(invocation);
    }

    function popInvocation(info) {
      _invocationStackSize--;
      if (_bailedTick && _invocationStackSize === 0) {
        endBail();
        return;
      }

      if (_bailedTick) return;

      var top = invocationStack.pop();

      // if the tick was bailed or something, there might not be an invocation
      if (top) {
        top.endTimestamp = new Date().getTime();
        top.duration = top.endTimestamp - top.timestamp;

        // if there was an exception before, but this function didn't throw
        // it as well, then it must have been caught.
        // only functions track exceptions.
        if (
          top.type === "function" &&
          lastException !== undefined &&
          top.exception !== lastException
        ) {
          // traceExceptionThrown sets lastException, but this is where we clear it
          if (top.exception === undefined) {
            lastException = undefined;
            lastExceptionThrownFromInvocation = undefined;
          }
        }
      }

      if (invocationStack.length === 0) {
        // check for uncaught exceptions
        if (
          lastException !== undefined &&
          lastExceptionThrownFromInvocation !== undefined
        ) {
          var id = lastExceptionThrownFromInvocation.f.id;

          if (!uncaughtExceptionsByNodeId[id]) {
            uncaughtExceptionsByNodeId[id] = [];
          }
          uncaughtExceptionsByNodeId[id].push({
            exception: lastException,
            invocationId: lastExceptionThrownFromInvocation.id,
          });

          for (var handle in _logQueries) {
            if (_logQueries[handle].exceptions) {
              // BUG: we're adding this at the end of the tick, which
              //      means it's technically out-of-order relative to
              //      the other log entries in this tick.
              addLogEntry(handle, lastExceptionThrownFromInvocation.id);
            }
          }
        }

        _invocationsThisTick = 0;
        lastException = undefined;
        lastExceptionThrownFromInvocation = undefined;

        // make the file call graph for this tick

        // if the tick was bailed or something, there might not be an invocation
        if (top) {
          function makeSubgraph(invocation, node) {
            if (!node) {
              node = {
                path: invocation.f.path,
                nodeId: invocation.f.id,
                eventNames: [],
                children: [],
              };
            } else if (node.path !== invocation.f.path) {
              var parent = node;
              node = {
                path: invocation.f.path,
                nodeId: invocation.f.id,
                eventNames: [],
                children: [],
              };
              parent.children.push(node);
            }
            if (invocation.epochID) {
              var epoch = _epochsById[invocation.epochID];
              if (
                epoch.eventName !== undefined &&
                node.eventNames.indexOf(epoch.eventName) === -1
              ) {
                node.eventNames.push(epoch.eventName);
              }
            }
            invocation
              .getChildren(function (link) {
                return link.type === "call";
              })
              .forEach(function (child) {
                makeSubgraph(child, node);
              });
            return node;
          }

          var item = makeSubgraph(top);
          _fileCallGraph.push(item);
          fileCallGraphTracker.update(item);
        }
      }

      if (_epochStack.length > 0) {
        _epochInvocationDepth[_epochInvocationDepth.length - 1]--;
      }
    }

    /**
     * called from the top of every script processed by the rewriter
     */
    this.add = function (path, source, options) {
      sourceByPath[path] = source;
      nodes.push.apply(nodes, options.nodes);
      options.nodes.forEach(function (n) {
        nodeById[n.id] = n;
      });

      nodeTracker.update(options.nodes);

      _sendNodes(options.nodes);
    };

    this.addSourceMap = function (path, mapJSON) {
      _sourceMaps[path] = _sourceMaps[path + ".fondue"] =
        new sourceMap.SourceMapConsumer(mapJSON);
    };

    this.traceFileEntry = function (info) {
      pushNewInvocation(info, "toplevel");
    };

    this.traceFileExit = function (info) {
      popInvocation(info);
    };

    this.setGlobal = function (gthis) {
      globalThis = gthis;
    };

    /**
     * the rewriter wraps every anonymous function in a call to traceFunCreate.
     * a new function is returned that's associated with the parent invocation.
     */
    this.traceFunCreate = function (f, src) {
      var creatorInvocation = invocationStack[invocationStack.length - 1];
      var creatorInvocationId = creatorInvocation
        ? creatorInvocation.id
        : undefined;
      var newF;

      // Some code changes its behavior depending on the arity of the callback.
      // Therefore, we construct a replacement function that has the same arity.
      // The most direct route seems to be to use eval() (as opposed to
      // new Function()), so that creatorInvocation can be accessed from the
      // closure.

      var arglist = "";
      for (var i = 0; i < f.length; i++) {
        arglist += (i > 0 ? ", " : "") + "v" + i;
      }

      var sharedBody = "return f.apply(this, arguments);";

      if (creatorInvocation) {
        // traceEnter checks anonFuncParentInvocation and creates
        // an edge in the graph from the creator to the new invocation.
        // Look up by ID instead of using creatorInvocation directly in case
        // the trace has been cleared and the original invocation no longer
        // exists.
        var asyncBody =
          "anonFuncParentInvocation = invocationById[creatorInvocationId];";
        var newSrc =
          "(function (" + arglist + ") { " + asyncBody + sharedBody + "})";
        newF = eval(newSrc);
      } else {
        var newSrc = "(function (" + arglist + ") { " + sharedBody + "})";
        newF = eval(newSrc);
      }
      newF.toString = function () {
        return src;
      };
      return newF;
    };

    /** helper for traceFunCall below */
    var _traceLogCall = function (info) {
      var queryMatchesInvocation = function (handle, invocation) {
        var query = _logQueries[handle];
        var epoch = _epochsById[invocation.epochID];
        if (query.logs && invocation.f.id === "log") {
          return true;
        } else if (query.exceptions && invocation.exception) {
          return true;
        } else if (query.ids && query.ids.indexOf(invocation.f.id) !== -1) {
          return true;
        } else if (
          query.eventNames &&
          epoch &&
          query.eventNames.indexOf(epoch.eventName) !== -1
        ) {
          return true;
        }
        return false;
      };
      var matchingQueryHandles = function (invocation) {
        return Object.keys(_logQueries).filter(function (handle) {
          return queryMatchesInvocation(handle, invocation);
        });
      };

      return function () {
        _consoleLog.apply(console, arguments);

        var callerInvocation = invocationStack[invocationStack.length - 1];

        info.arguments = Array.prototype.slice.apply(arguments); // XXX: mutating info may not be okay, but we want the arguments

        var callSiteInvocation = pushNewInvocation(info, "callsite");
        pushNewInvocation(
          { nodeId: "log", arguments: info.arguments },
          "function"
        );
        popInvocation();
        popInvocation();

        // if called directly from an invocation that's in the query, add
        // this log statement invocation as well
        // (callSiteInvocation might be falsy if this tick was bailed)
        if (callerInvocation && callSiteInvocation) {
          matchingQueryHandles(callerInvocation).forEach(function (handle) {
            addLogEntry(handle, callSiteInvocation.id);
          });
        }
      };
    };

    /**
     * the rewriter wraps the callee portion of every function call with a call
     * to traceFunCall like this:
     *
     *   a.b('foo') -> (traceFunCall({ this: a, property: 'b', nodeId: '...', vars: {}))('foo')
     *   b('foo') -> (traceFunCall({ func: b, nodeId: '...', vars: {}))('foo')
     */
    this.traceFunCall = function (info) {
      var customThis = false,
        fthis,
        func;

      if ("func" in info) {
        func = info.func;
      } else {
        customThis = true;
        fthis = info.this;
        func = fthis[info.property];
      }

      // if it doesn't look like a function, it's faster not to wrap it with
      // all of the cruft below
      if (!func) {
        return func;
      }

      if (typeof console !== "undefined") {
        var logFunctions = [
          console.log,
          console.info,
          console.warn,
          console.error,
          console.trace,
        ];
        if (logFunctions.indexOf(func) !== -1) {
          return _traceLogCall(info);
        }
      }

      return function () {
        info.arguments = Array.prototype.slice.apply(arguments); // XXX: mutating info may not be okay, but we want the arguments
        var invocation = pushNewInvocation(info, "callsite");

        try {
          // this used to be func.apply(t, arguments), but not all functions
          // have apply. so we apply Function.apply instead.
          var t = customThis ? fthis : this;
          return Function.apply.apply(func, [t].concat(arguments));
        } finally {
          popInvocation();
        }
      };
    };

    /**
     * the rewriter calls traceEnter from just before the try clause it wraps
     * function bodies in. info is an object like:
     *
     *   {
     *     start: { line: ..., column: ... },
     *     end: { line: ..., column: ... },
     *     vars: { a: a, b: b, ... }
     *   }
     */
    this.traceEnter = function (info) {
      pushNewInvocation(info, "function");
    };

    /**
     * the rewriter calls traceExit from the finally clause it wraps function
     * bodies in. info is an object like:
     *
     *   {
     *     start: { line: ..., column: ... },
     *     end: { line: ..., column: ... }
     *   }
     *
     * in the future, traceExit will be passed an object with all the
     * local variables of the instrumented function.
     */
    this.traceExit = function (info) {
      popInvocation(info);
    };

    this.traceReturnValue = function (value) {
      if (_bailedTick) return value;

      var top = invocationStack[invocationStack.length - 1];
      if (!top) {
        throw new Error("value returned with nothing on the stack");
      }
      top.returnValue = scrapeObject(value);
      return value;
    };

    /**
     * the rewriter calls traceExceptionThrown from the catch clause it wraps
     * function bodies in. info is an object like:
     *
     *   {
     *     start: { line: ..., column: ... },
     *     end: { line: ..., column: ... }
     *   }
     */
    this.traceExceptionThrown = function (info, exception) {
      if (_bailedTick) return;

      lastException = exception;

      var parsedStack;
      if (exception.stack) {
        var mapFrame = function (frame) {
          if (frame.path in _sourceMaps) {
            var pos = _sourceMaps[frame.path].originalPositionFor({
              line: frame.line,
              column: frame.column,
            });
            frame.path = pos.source;
            frame.line = pos.line;
            frame.column = pos.column;
          }
          return frame;
        };

        var shouldIgnoreFrame = function (frame) {
          return (
            /node-theseus\.js/.test(frame.path) ||
            /^Module\.(load|_compile)$/.test(frame.at)
          );
        };

        parsedStack = [];
        var match,
          match2,
          wholeMatchRegexp = /\n    at ([^(]+) \((.*):(\d+):(\d+)\)/g; // TODO: match lines without column numbers
        partialMatchRegexp = /at ([^(]+) \((.*):(\d+):(\d+)\)/g;
        while ((match = wholeMatchRegexp.exec(exception.stack))) {
          var frame = mapFrame({
            at: match[1],
            path: match[2],
            line: parseInt(match[3]),
            column: parseInt(match[4]),
          });
          if (
            /^eval at /.test(match[2]) &&
            (match2 = partialMatchRegexp.exec(match[2]))
          ) {
            frame.evalFrame = mapFrame({
              at: match2[1],
              path: match2[2],
              line: parseInt(match2[3]),
              column: parseInt(match2[4]),
            });
          }
          if (
            !shouldIgnoreFrame(frame) &&
            (!frame.evalFrame || !shouldIgnoreFrame(frame.evalFrame))
          ) {
            parsedStack.push(frame);
          }
        }
      }

      var top = invocationStack[invocationStack.length - 1];
      if (!top || !top.equalToInfo(info)) {
        throw new Error("exception thrown from a non-matching enter");
      }
      top.exception = exception;
      top.rawStack = exception.stack;
      if (parsedStack) top.exceptionStack = parsedStack;

      if (lastExceptionThrownFromInvocation === undefined) {
        lastExceptionThrownFromInvocation = top;
      }

      var id = top.f.id;
      if (!exceptionsByNodeId[id]) {
        exceptionsByNodeId[id] = [];
      }
      exceptionsByNodeId[id].push({
        exception: exception,
        invocationId: top.id,
      });

      for (var handle in exceptionCounts) {
        var hits = exceptionCounts[handle];
        hits[id] = (hits[id] || 0) + 1;
      }
    };

    /** cease collecting trace information until the next tick **/
    this.bailThisTick = bailThisTick;

    this.pushEpoch = function (epoch) {
      _epochStack.push(epoch);
      _epochInvocationDepth.push(0);
    };

    this.popEpoch = function () {
      _epochStack.pop();
      _epochInvocationDepth.pop();
    };

    if (true) {
      if (typeof require !== "undefined") {
        // override EventEmitter.emit() to automatically begin epochs when events are thrown
        var EventEmitter = require("events").EventEmitter;
        var oldEmit = EventEmitter.prototype.emit;
        EventEmitter.prototype.emit = function (ev) {
          // give this emitter an identifier if it doesn't already have one
          if (!this._emitterID) {
            this._emitterID = ++_lastEmitterID;
          }

          // start an epoch & emit the event
          var epoch = nextEpoch(this._emitterID, ev);
          __tracer.pushEpoch(epoch);
          try {
            return oldEmit.apply(this, arguments);
          } finally {
            __tracer.popEpoch();
          }
        };
      }
    }

    this.augmentjQuery = function ($) {
      var trigger = $.event.trigger,
        triggerHandler = $.event.triggerHandler;
      var core_hasOwn = {}.hasOwnProperty;
      $.event.trigger = function (event) {
        var type = core_hasOwn.call(event, "type") ? event.type : event;
        var epoch = nextEpoch(-1 /* emitterID */, type);

        __tracer.pushEpoch(epoch);
        try {
          return trigger.apply($.event, arguments);
        } finally {
          __tracer.popEpoch();
        }
      };
      $.event.triggerHandler = function (event) {
        var type = core_hasOwn.call(event, "type") ? event.type : event;
        var epoch = nextEpoch(-1 /* emitterID */, type);

        __tracer.pushEpoch(epoch);
        try {
          return triggerHandler.apply($.event, arguments);
        } finally {
          __tracer.popEpoch();
        }
      };
    };

    // remote prebuggin' (from Brackets)

    var _sendNodes = function (nodes) {
      if (_connected) {
        _sendBracketsMessage("scripts-added", JSON.stringify({ nodes: nodes }));
      }
    };

    function _sendBracketsMessage(name, value) {
      var key = "data-__tracer-" + name;
      document.body.setAttribute(key, value);
      window.setTimeout(function () {
        document.body.removeAttribute(key);
      });
    }

    this.version = function () {
      return "0.7.0";
    };

    // deprecated
    this.connect = function () {
      if (typeof console !== "undefined")
        _consoleLog(
          "Opening the Developer Console will break the connection with Brackets!"
        );
      _connected = true;
      _sendNodes(nodes);
      return this;
    };

    this.resetTrace = _resetTrace;

    // accessors

    // this is mostly here for unit tests, and not necessary or encouraged
    // use trackNodes instead
    this.nodes = function () {
      return nodes;
    };

    this.trackNodes = function () {
      return nodeTracker.track();
    };

    this.untrackNodes = function (handle) {
      return nodeTracker.untrack(handle);
    };

    this.newNodes = function (handle) {
      return nodeTracker.delta(handle);
    };

    this.trackHits = function () {
      var handle = _hitQueries.push(true) - 1;
      nodeHitCounts[handle] = calculateHitCounts();
      return handle;
    };

    this.trackExceptions = function () {
      var handle = _exceptionQueries.push(true) - 1;
      exceptionCounts[handle] = calculateExceptionCounts();
      return handle;
    };

    this.trackLogs = function (query) {
      var handle = _logQueries.push(query) - 1;
      logEntries[handle] = backlog(query);
      return handle;
    };

    this.trackEpochs = function () {
      return epochTracker.track();
    };

    this.untrackEpochs = function (handle) {
      return epochTracker.untrack(handle);
    };

    this.trackFileCallGraph = function () {
      return fileCallGraphTracker.track();
    };

    this.untrackFileCallGraph = function (handle) {
      return fileCallGraphTracker.untrack(handle);
    };

    this.fileCallGraphDelta = function (handle) {
      return fileCallGraphTracker.delta(handle);
    };

    this.hitCountDeltas = function (handle) {
      if (!(handle in _hitQueries)) {
        throw new Error("unrecognized query");
      }
      var result = nodeHitCounts[handle];
      nodeHitCounts[handle] = {};
      return result;
    };

    this.newExceptions = function (handle) {
      if (!(handle in _exceptionQueries)) {
        throw new Error("unrecognized query");
      }
      var result = exceptionCounts[handle];
      exceptionCounts[handle] = {};
      return { counts: result };
    };

    this.epochDelta = function (handle) {
      return epochTracker.delta(handle);
    };

    // okay, the second argument is kind of a hack
    function makeLogEntry(invocation, parents) {
      parents = parents || [];
      var entry = {
        timestamp: invocation.timestamp,
        tick: invocation.tick,
        invocationId: invocation.id,
        topLevelInvocationId: invocation.topLevelInvocationId,
        nodeId: invocation.f.id,
      };
      if (invocation.epochID !== undefined) {
        var epoch = _epochsById[invocation.epochID];
        entry.epoch = {
          id: epoch.id,
          emitterID: epoch.emitterID,
          eventName: epoch.eventName,
        };
        entry.epochDepth = invocation.epochDepth;
      }
      if (invocation.returnValue !== undefined) {
        entry.returnValue = marshalForTransmission(invocation.returnValue);
      }
      if (invocation.exception !== undefined) {
        entry.exception = marshalForTransmission(invocation.exception);
      }
      entry.formula = nodeById[entry.nodeId].name;
      if (invocation.f.params || invocation.arguments) {
        entry.arguments = [];
        entry.args = {};
        var params = invocation.f.params || [];
        for (var i = 0; i < params.length; i++) {
          var param = params[i];
          entry.arguments.push({
            name: param.name,
            value: marshalForTransmission(invocation.arguments[i]),
          });
          entry.args[param.name] = marshalForTransmission(
            invocation.arguments[i]
          ).value;
        }
        for (var i = params.length; i < invocation.arguments.length; i++) {
          entry.arguments.push({
            value: marshalForTransmission(invocation.arguments[i]),
          });
        }
      }
      if (invocation.this !== undefined) {
        entry.this = marshalForTransmission(invocation.this);
      }
      if (parents.length > 0) {
        entry.parents = parents; // DN parentLinks and childLinks (created by linkToChild) worth putting in entry too? (global, not limited to query) only direct parents?
      }
      return entry;
    }

    this.logCount = function (handle) {
      if (!(handle in _logQueries)) {
        throw new Error("unrecognized query");
      }

      return logEntries[handle].entries.length;
    };

    this.logDelta = function (handle, maxResults) {
      if (!(handle in _logQueries)) {
        throw new Error("unrecognized query");
      }

      maxResults = maxResults || 10;

      var ids = logEntries[handle].entries.splice(0, maxResults);
      var results = ids.map(function (invocationId, i) {
        var invocation = invocationById[invocationId];
        return makeLogEntry(
          invocation,
          findParentsInQuery(invocation, _logQueries[handle])
        );
      });

      return results;
    };

    this.backtrace = function (options) {
      options = mergeInto(options, {
        range: [0, 10],
      });

      var invocation = invocationById[options.invocationId];
      if (!invocation) {
        throw new Error("invocation not found");
      }

      var stack = [];
      if (options.range[0] <= 0) {
        stack.push(invocation);
      }

      function search(invocation, depth) {
        // stop if we're too deep
        if (depth + 1 >= options.range[1]) {
          return;
        }

        var callers = findCallers(invocation);
        var directCallers = callers.filter(function (c) {
          return c.type === "call";
        });
        var caller = directCallers[0];

        if (caller) {
          var parent = invocationById[caller.invocationId];
          if (options.range[0] <= depth + 1) {
            stack.push(parent);
          }
          search(parent, depth + 1);
        }
      }
      search(invocation, 0);
      var results = stack.map(function (invocation) {
        return makeLogEntry(invocation);
      });
      return results;
    };

    function findParentsInQuery(invocation, query) {
      if (!query.ids || query.ids.length === 0) {
        return [];
      }

      var matches = {}; // invocation id -> link
      var seen = {}; // invocation id -> true
      var types = ["async", "call", "branch-enter"]; // in priority order
      function promoteType(type, newType) {
        if (types.indexOf(type) === -1 || types.indexOf(newType) === -1) {
          throw new Exception("invocation link type not known");
        }
        if (types.indexOf(newType) < types.indexOf(type)) {
          return newType;
        }
        return type;
      }
      function search(link, type) {
        if (link.id in seen) {
          return;
        }
        seen[link.id] = true;

        var targetInvocation = invocationById[link.id];
        if (query.ids.indexOf(targetInvocation.f.id) !== -1) {
          // if the called function is in the query
          if (link.id in matches) {
            // if we've already found this one
            if (link.type === "call" && matches[link.id].type === "async") {
              // if we found an async one before but this one is synchronous
              // overwrite the previous match
              matches[link.id] = {
                invocationId: link.id,
                type: type,
                inbetween: [],
              };
            }
          } else {
            // if we haven't found this link before, store it
            matches[link.id] = {
              invocationId: link.id,
              type: type,
              inbetween: [],
            };
          }
        } else {
          targetInvocation.getParentLinks().forEach(function (link) {
            search(link, promoteType(type, link.type));
          });
        }
      }
      invocation.getParentLinks().forEach(function (link) {
        search(link, link.type);
      });

      // convert matches to an array
      var matchesArr = [];
      for (var id in matches) {
        matchesArr.push(matches[id]);
      }
      return matchesArr;
    }

    function findCallers(invocation) {
      var matches = {}; // invocation id -> link
      var seen = {}; // invocation id -> true
      var types = ["async", "call", "branch-enter"]; // in priority order
      function promoteType(type, newType) {
        if (types.indexOf(type) === -1 || types.indexOf(newType) === -1) {
          throw new Exception("invocation link type not known");
        }
        if (types.indexOf(newType) < types.indexOf(type)) {
          return newType;
        }
        return type;
      }
      function search(link, type) {
        if (link.id in seen) {
          return;
        }
        seen[link.id] = true;

        if (invocationById[link.id].f.type === "function") {
          if (link.id in matches) {
            if (link.type === "call" && matches[link.id].type === "async") {
              matches[link.id] = {
                invocationId: link.id,
                type: type,
              };
            }
          } else {
            matches[link.id] = {
              invocationId: link.id,
              type: type,
            };
          }
          return; // search no more down this path
        }
        invocationById[link.id].getParentLinks().forEach(function (link) {
          search(link, promoteType(type, link.type));
        });
      }
      invocation.getParentLinks().forEach(function (link) {
        search(link, link.type);
      });

      // convert matches to an array
      var matchesArr = [];
      for (var id in matches) {
        matchesArr.push(matches[id]);
      }
      return matchesArr;
    }

    this.Array = Array;
  })();
}
(function () {
  __tracer.setGlobal(this);
})();
/*
  The following code has been modified by fondue to collect information about its
  execution.
  
  https://github.com/adobe-research/fondue
  */

if (typeof __tracer === "undefined") {
  __tracer = {};
  var methods = [
    "add",
    "addSourceMap",
    "traceFileEntry",
    "traceFileExit",
    "setGlobal",
    "traceFunCreate",
    "traceEnter",
    "traceExit",
    "traceReturnValue",
    "traceExceptionThrown",
    "bailThisTick",
    "pushEpoch",
    "popEpoch",
    "augmentjQuery",
    "version",
    "connect",
    "nodes",
    "trackNodes",
    "untrackNodes",
    "newNodes",
    "trackHits",
    "trackExceptions",
    "trackLogs",
    "trackEpochs",
    "untrackEpochs",
    "trackFileCallGraph",
    "untrackFileCallGraph",
    "fileCallGraphDelta",
    "hitCountDeltas",
    "newExceptions",
    "epochDelta",
    "logCount",
    "logDelta",
    "backtrace",
  ];
  for (var i = 0; i < methods.length; i++) {
    __tracer[methods[i]] = function () {
      return arguments[0];
    };
  }

  __tracer.traceFunCall = function (info) {
    var customThis = false,
      fthis,
      func;

    if ("func" in info) {
      func = info.func;
    } else {
      customThis = true;
      fthis = info.this;
      func = fthis[info.property];
    }

    return function () {
      return func.apply(customThis ? fthis : this, arguments);
    };
  };

  __tracer.Array = Array;
}
__tracer.add(
  "script1",
  'var exports = {};\n\t\t\t"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.fund_value_0 = exports.fund_value = exports.emper_contribution_rate = exports.emper_contribution = exports.empee_contribution_tax_relief = exports.empee_contribution_rate = exports.empee_contribution = exports.contribution_charge = exports.age_0 = exports.age = exports.accumulated_empee_contributions = exports.accumulated_empee_contribution_tax_relief = void 0;Object.defineProperty(exports, "income_tax", { enumerable: true, get: function get() {return _cul_scope_.income_tax;} });exports.unit_price = exports.unit_growth_rate = exports.unit_balance = exports.unit_allocation = exports.salary_inflation_rate = exports.salary_0 = exports.salary = exports.salaries_per_projected_fund = exports.retirement_age = exports.projected_fund_value = exports.pension_tax_relief_ratio = void 0;\n\n\n\n\n\nvar _cul_scope_ = require("./cul_scope_1.mjs"); // disclaimer: This is a work-in-progress model released for some calculang/tooling demonstration purposes and numbers shouldn\'t be relied upon; there are known model issues.\n// this model should prob. be broken into some modular pieces, but it isn\'t because it definitely needs memoisation, which is currently only working for non-modular models\n// todo add timing comments\nvar fund_value = function fund_value(_ref) {var age_in = _ref.age_in,age_0_in = _ref.age_0_in,fund_value_0_in = _ref.fund_value_0_in,unit_growth_rate_in = _ref.unit_growth_rate_in,retirement_age_in = _ref.retirement_age_in,salary_0_in = _ref.salary_0_in,salary_inflation_rate_in = _ref.salary_inflation_rate_in,empee_contribution_rate_in = _ref.empee_contribution_rate_in,emper_contribution_rate_in = _ref.emper_contribution_rate_in,contribution_charge_in = _ref.contribution_charge_in;return unit_balance({ age_in: age_in, age_0_in: age_0_in, fund_value_0_in: fund_value_0_in, unit_growth_rate_in: unit_growth_rate_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in, emper_contribution_rate_in: emper_contribution_rate_in, contribution_charge_in: contribution_charge_in }) * unit_price({ age_in: age_in, age_0_in: age_0_in, unit_growth_rate_in: unit_growth_rate_in });}; // not allowing for multiple funds now\nexports.fund_value = fund_value;\nvar unit_balance = function unit_balance(_ref2) {var age_in = _ref2.age_in,age_0_in = _ref2.age_0_in,fund_value_0_in = _ref2.fund_value_0_in,unit_growth_rate_in = _ref2.unit_growth_rate_in,retirement_age_in = _ref2.retirement_age_in,salary_0_in = _ref2.salary_0_in,salary_inflation_rate_in = _ref2.salary_inflation_rate_in,empee_contribution_rate_in = _ref2.empee_contribution_rate_in,emper_contribution_rate_in = _ref2.emper_contribution_rate_in,contribution_charge_in = _ref2.contribution_charge_in;\n  if (age({ age_in: age_in }) <= age_0({ age_0_in: age_0_in }) - 1) return fund_value_0({ fund_value_0_in: fund_value_0_in }) / unit_price({ age_in: age_in, age_0_in: age_0_in, unit_growth_rate_in: unit_growth_rate_in });else\n  return unit_balance({ age_0_in: age_0_in, fund_value_0_in: fund_value_0_in, unit_growth_rate_in: unit_growth_rate_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in, emper_contribution_rate_in: emper_contribution_rate_in, contribution_charge_in: contribution_charge_in, age_in: age({ age_in: age_in }) - 1 }) + unit_allocation({ age_in: age_in, age_0_in: age_0_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in, emper_contribution_rate_in: emper_contribution_rate_in, contribution_charge_in: contribution_charge_in, unit_growth_rate_in: unit_growth_rate_in });\n  // timing = premium received at start of year and allocated immediately\n};exports.unit_balance = unit_balance;\n\nvar unit_allocation = function unit_allocation(_ref3) {var age_in = _ref3.age_in,age_0_in = _ref3.age_0_in,retirement_age_in = _ref3.retirement_age_in,salary_0_in = _ref3.salary_0_in,salary_inflation_rate_in = _ref3.salary_inflation_rate_in,empee_contribution_rate_in = _ref3.empee_contribution_rate_in,emper_contribution_rate_in = _ref3.emper_contribution_rate_in,contribution_charge_in = _ref3.contribution_charge_in,unit_growth_rate_in = _ref3.unit_growth_rate_in;return (\n    (empee_contribution({ age_in: age_in, age_0_in: age_0_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in }) + emper_contribution({ age_in: age_in, age_0_in: age_0_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, emper_contribution_rate_in: emper_contribution_rate_in })) * (\n    1 - contribution_charge({ contribution_charge_in: contribution_charge_in })) /\n    unit_price({ age_in: age_in, age_0_in: age_0_in, unit_growth_rate_in: unit_growth_rate_in }));}; // todo, AVCs?\nexports.unit_allocation = unit_allocation;\nvar unit_price = function unit_price(_ref4) {var age_in = _ref4.age_in,age_0_in = _ref4.age_0_in,unit_growth_rate_in = _ref4.unit_growth_rate_in;\n  if (age({ age_in: age_in }) <= age_0({ age_0_in: age_0_in })) return 1;else\n  return unit_price({ age_0_in: age_0_in, unit_growth_rate_in: unit_growth_rate_in, age_in: age({ age_in: age_in }) - 1 }) * (1 + unit_growth_rate({ unit_growth_rate_in: unit_growth_rate_in }));\n};exports.unit_price = unit_price;\n\nvar empee_contribution = function empee_contribution(_ref5) {var age_in = _ref5.age_in,age_0_in = _ref5.age_0_in,retirement_age_in = _ref5.retirement_age_in,salary_0_in = _ref5.salary_0_in,salary_inflation_rate_in = _ref5.salary_inflation_rate_in,empee_contribution_rate_in = _ref5.empee_contribution_rate_in;\n  if (age({ age_in: age_in }) <= age_0({ age_0_in: age_0_in }) - 1 || age({ age_in: age_in }) == retirement_age({ retirement_age_in: retirement_age_in })) return 0;else\n  return salary({ age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, age_in: age({ age_in: age_in }) - 1 }) * empee_contribution_rate({ empee_contribution_rate_in: empee_contribution_rate_in });\n};exports.empee_contribution = empee_contribution;\n\nvar accumulated_empee_contributions = function accumulated_empee_contributions(_ref6) {var age_in = _ref6.age_in,age_0_in = _ref6.age_0_in,retirement_age_in = _ref6.retirement_age_in,salary_0_in = _ref6.salary_0_in,salary_inflation_rate_in = _ref6.salary_inflation_rate_in,empee_contribution_rate_in = _ref6.empee_contribution_rate_in;\n  if (age({ age_in: age_in }) == age_0({ age_0_in: age_0_in }) - 1) return 0;else\n\n  return (\n    accumulated_empee_contributions({ age_0_in: age_0_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in, age_in: age({ age_in: age_in }) - 1 }) +\n    empee_contribution({ age_in: age_in, age_0_in: age_0_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in }));\n\n};exports.accumulated_empee_contributions = accumulated_empee_contributions;\n\nvar accumulated_empee_contribution_tax_relief = function accumulated_empee_contribution_tax_relief(_ref7) {var age_in = _ref7.age_in,age_0_in = _ref7.age_0_in,paye_band_id_in = _ref7.paye_band_id_in,gross_salary_in = _ref7.gross_salary_in,pension_contribution_in = _ref7.pension_contribution_in,tax_credits_in = _ref7.tax_credits_in,usc_band_id_in = _ref7.usc_band_id_in,salary_0_in = _ref7.salary_0_in,retirement_age_in = _ref7.retirement_age_in,salary_inflation_rate_in = _ref7.salary_inflation_rate_in,empee_contribution_rate_in = _ref7.empee_contribution_rate_in;\n  if (age({ age_in: age_in }) == age_0({ age_0_in: age_0_in }) - 1) return 0;else\n\n  return (\n    accumulated_empee_contribution_tax_relief({ age_0_in: age_0_in, paye_band_id_in: paye_band_id_in, gross_salary_in: gross_salary_in, pension_contribution_in: pension_contribution_in, tax_credits_in: tax_credits_in, usc_band_id_in: usc_band_id_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in, age_in: age({ age_in: age_in }) - 1 }) +\n    empee_contribution_tax_relief({ age_in: age_in, age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in }));\n\n};exports.accumulated_empee_contribution_tax_relief = accumulated_empee_contribution_tax_relief;\n\nvar pension_tax_relief_ratio = function pension_tax_relief_ratio(_ref8) {var age_in = _ref8.age_in,age_0_in = _ref8.age_0_in,salary_0_in = _ref8.salary_0_in,retirement_age_in = _ref8.retirement_age_in,salary_inflation_rate_in = _ref8.salary_inflation_rate_in,empee_contribution_rate_in = _ref8.empee_contribution_rate_in;return (\n    empee_contribution_tax_relief({ age_in: age_in, age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in }) / empee_contribution({ age_in: age_in, age_0_in: age_0_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in }));};exports.pension_tax_relief_ratio = pension_tax_relief_ratio;\n\nvar empee_contribution_tax_relief = function empee_contribution_tax_relief(_ref9) {var age_in = _ref9.age_in,age_0_in = _ref9.age_0_in,salary_0_in = _ref9.salary_0_in,retirement_age_in = _ref9.retirement_age_in,salary_inflation_rate_in = _ref9.salary_inflation_rate_in,empee_contribution_rate_in = _ref9.empee_contribution_rate_in;return (\n    (0, _cul_scope_.income_tax)({ age_in: age_in,\n      gross_salary_in: salary({ age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, age_in: age({ age_in: age_in }) - 1 }),\n      tax_credits_in: 3000,\n      pension_contribution_in: 0 }) -\n\n    (0, _cul_scope_.income_tax)({ age_in: age_in,\n      gross_salary_in: salary({ age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, age_in: age({ age_in: age_in }) - 1 }),\n      tax_credits_in: 3000,\n      pension_contribution_in: empee_contribution({ age_in: age_in, age_0_in: age_0_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in }) }));};\n\n\n// affected by bug: depends on gross_salary_in, for some reason\n// issue #102\n/*export const accumulated_empee_contribution_tax_relief = () => {\n  if (age() == age_0() - 1) return 0;\n  else\n    return (\n      accumulated_empee_contribution_tax_relief({ age_in: age() - 1 }) +\n      empee_contribution_tax_relief()\n    );\n};*/exports.empee_contribution_tax_relief = empee_contribution_tax_relief;\n\nvar emper_contribution = function emper_contribution(_ref10) {var age_in = _ref10.age_in,age_0_in = _ref10.age_0_in,retirement_age_in = _ref10.retirement_age_in,salary_0_in = _ref10.salary_0_in,salary_inflation_rate_in = _ref10.salary_inflation_rate_in,emper_contribution_rate_in = _ref10.emper_contribution_rate_in;\n  if (age({ age_in: age_in }) <= age_0({ age_0_in: age_0_in }) - 1 || age({ age_in: age_in }) == retirement_age({ retirement_age_in: retirement_age_in })) return 0;else\n  return salary({ age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, age_in: age({ age_in: age_in }) - 1 }) * emper_contribution_rate({ emper_contribution_rate_in: emper_contribution_rate_in });\n};exports.emper_contribution = emper_contribution;\n\nvar salary = function salary(_ref11) {var age_in = _ref11.age_in,age_0_in = _ref11.age_0_in,salary_0_in = _ref11.salary_0_in,retirement_age_in = _ref11.retirement_age_in,salary_inflation_rate_in = _ref11.salary_inflation_rate_in;\n  // at end of year\n  if (age({ age_in: age_in }) <= age_0({ age_0_in: age_0_in }) - 1) return salary_0({ salary_0_in: salary_0_in });else\n  if (age({ age_in: age_in }) >= retirement_age({ retirement_age_in: retirement_age_in })) return 0;else\n  return salary({ age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, age_in: age({ age_in: age_in }) - 1 }) * (1 + salary_inflation_rate({ salary_inflation_rate_in: salary_inflation_rate_in })); // < age_0 = undefined, any way/use to capture this statically?\n};exports.salary = salary;\n\nvar projected_fund_value = function projected_fund_value(_ref12) {var age_0_in = _ref12.age_0_in,fund_value_0_in = _ref12.fund_value_0_in,unit_growth_rate_in = _ref12.unit_growth_rate_in,retirement_age_in = _ref12.retirement_age_in,salary_0_in = _ref12.salary_0_in,salary_inflation_rate_in = _ref12.salary_inflation_rate_in,empee_contribution_rate_in = _ref12.empee_contribution_rate_in,emper_contribution_rate_in = _ref12.emper_contribution_rate_in,contribution_charge_in = _ref12.contribution_charge_in;return (\n    // at retirement:\n    fund_value({ age_0_in: age_0_in, fund_value_0_in: fund_value_0_in, unit_growth_rate_in: unit_growth_rate_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in, emper_contribution_rate_in: emper_contribution_rate_in, contribution_charge_in: contribution_charge_in, age_in: retirement_age({ retirement_age_in: retirement_age_in }) }));};exports.projected_fund_value = projected_fund_value;\n\nvar salaries_per_projected_fund = function salaries_per_projected_fund(_ref13) {var age_0_in = _ref13.age_0_in,fund_value_0_in = _ref13.fund_value_0_in,unit_growth_rate_in = _ref13.unit_growth_rate_in,retirement_age_in = _ref13.retirement_age_in,salary_0_in = _ref13.salary_0_in,salary_inflation_rate_in = _ref13.salary_inflation_rate_in,empee_contribution_rate_in = _ref13.empee_contribution_rate_in,emper_contribution_rate_in = _ref13.emper_contribution_rate_in,contribution_charge_in = _ref13.contribution_charge_in;return (\n    projected_fund_value({ age_0_in: age_0_in, fund_value_0_in: fund_value_0_in, unit_growth_rate_in: unit_growth_rate_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in, emper_contribution_rate_in: emper_contribution_rate_in, contribution_charge_in: contribution_charge_in }) / salary({ age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, age_in: retirement_age({ retirement_age_in: retirement_age_in }) - 1 }));};\n\n// explicit inputs ::\n\n// using age and age_0 (starting age) as inputs, rather than year/time and age_0.\nexports.salaries_per_projected_fund = salaries_per_projected_fund;var age = function age(_ref14) {var age_in = _ref14.age_in;return age_in;}; // input\nexports.age = age;var age_0 = function age_0(_ref15) {var age_0_in = _ref15.age_0_in;return age_0_in;};exports.age_0 = age_0;\n\nvar retirement_age = function retirement_age(_ref16) {var retirement_age_in = _ref16.retirement_age_in;return retirement_age_in;};exports.retirement_age = retirement_age;\nvar salary_0 = function salary_0(_ref17) {var salary_0_in = _ref17.salary_0_in;return salary_0_in;};exports.salary_0 = salary_0;\nvar salary_inflation_rate = function salary_inflation_rate(_ref18) {var salary_inflation_rate_in = _ref18.salary_inflation_rate_in;return salary_inflation_rate_in;};exports.salary_inflation_rate = salary_inflation_rate;\nvar empee_contribution_rate = function empee_contribution_rate(_ref19) {var empee_contribution_rate_in = _ref19.empee_contribution_rate_in;return empee_contribution_rate_in;};exports.empee_contribution_rate = empee_contribution_rate;\nvar emper_contribution_rate = function emper_contribution_rate(_ref20) {var emper_contribution_rate_in = _ref20.emper_contribution_rate_in;return emper_contribution_rate_in;};exports.emper_contribution_rate = emper_contribution_rate;\n\nvar unit_growth_rate = function unit_growth_rate(_ref21) {var unit_growth_rate_in = _ref21.unit_growth_rate_in;return unit_growth_rate_in;};exports.unit_growth_rate = unit_growth_rate;\n\nvar fund_value_0 = function fund_value_0(_ref22) {var fund_value_0_in = _ref22.fund_value_0_in;return fund_value_0_in;};exports.fund_value_0 = fund_value_0;\n\nvar contribution_charge = function contribution_charge(_ref23) {var contribution_charge_in = _ref23.contribution_charge_in;return contribution_charge_in;};exports.contribution_charge = contribution_charge;\n\n//# sourceMappingURL=cul_scope_0-babeled.js.map\n',
  {
    nodes: [
      {
        path: "script1",
        start: { line: 2, column: 16 },
        end: { line: 2, column: 77 },
        id: "script1-callsite-2-16-2-77",
        type: "callsite",
        name: "Object.defineProperty",
        nameStart: { line: 2, column: 23 },
        nameEnd: { line: 2, column: 37 },
      },
      {
        path: "script1",
        start: { line: 2, column: 519 },
        end: { line: 2, column: 566 },
        id: "script1-function-2-519-2-566",
        type: "function",
        name: "get",
        params: [],
      },
      {
        path: "script1",
        start: { line: 2, column: 449 },
        end: { line: 2, column: 569 },
        id: "script1-callsite-2-449-2-569",
        type: "callsite",
        name: "Object.defineProperty",
        nameStart: { line: 2, column: 456 },
        nameEnd: { line: 2, column: 470 },
      },
      {
        path: "script1",
        start: { line: 8, column: 18 },
        end: { line: 8, column: 46 },
        id: "script1-callsite-8-18-8-46",
        type: "callsite",
        name: "require",
        nameStart: { line: 8, column: 18 },
        nameEnd: { line: 8, column: 25 },
      },
      {
        path: "script1",
        start: { line: 11, column: 493 },
        end: { line: 11, column: 897 },
        id: "script1-callsite-11-493-11-897",
        type: "callsite",
        name: "unit_balance",
        nameStart: { line: 11, column: 493 },
        nameEnd: { line: 11, column: 505 },
      },
      {
        path: "script1",
        start: { line: 11, column: 900 },
        end: { line: 11, column: 992 },
        id: "script1-callsite-11-900-11-992",
        type: "callsite",
        name: "unit_price",
        nameStart: { line: 11, column: 900 },
        nameEnd: { line: 11, column: 910 },
      },
      {
        path: "script1",
        start: { line: 11, column: 17 },
        end: { line: 11, column: 994 },
        id: "script1-function-11-17-11-994",
        type: "function",
        name: "fund_value",
        params: [
          {
            name: "_ref",
            start: { line: 11, column: 37 },
            end: { line: 11, column: 41 },
          },
        ],
      },
      {
        path: "script1",
        start: { line: 14, column: 6 },
        end: { line: 14, column: 29 },
        id: "script1-callsite-14-6-14-29",
        type: "callsite",
        name: "age",
        nameStart: { line: 14, column: 6 },
        nameEnd: { line: 14, column: 9 },
      },
      {
        path: "script1",
        start: { line: 14, column: 33 },
        end: { line: 14, column: 62 },
        id: "script1-callsite-14-33-14-62",
        type: "callsite",
        name: "age_0",
        nameStart: { line: 14, column: 33 },
        nameEnd: { line: 14, column: 38 },
      },
      {
        path: "script1",
        start: { line: 14, column: 75 },
        end: { line: 14, column: 125 },
        id: "script1-callsite-14-75-14-125",
        type: "callsite",
        name: "fund_value_0",
        nameStart: { line: 14, column: 75 },
        nameEnd: { line: 14, column: 87 },
      },
      {
        path: "script1",
        start: { line: 14, column: 128 },
        end: { line: 14, column: 220 },
        id: "script1-callsite-14-128-14-220",
        type: "callsite",
        name: "unit_price",
        nameStart: { line: 14, column: 128 },
        nameEnd: { line: 14, column: 138 },
      },
      {
        path: "script1",
        start: { line: 15, column: 404 },
        end: { line: 15, column: 427 },
        id: "script1-callsite-15-404-15-427",
        type: "callsite",
        name: "age",
        nameStart: { line: 15, column: 404 },
        nameEnd: { line: 15, column: 407 },
      },
      {
        path: "script1",
        start: { line: 15, column: 9 },
        end: { line: 15, column: 434 },
        id: "script1-callsite-15-9-15-434",
        type: "callsite",
        name: "unit_balance",
        nameStart: { line: 15, column: 9 },
        nameEnd: { line: 15, column: 21 },
      },
      {
        path: "script1",
        start: { line: 15, column: 437 },
        end: { line: 15, column: 810 },
        id: "script1-callsite-15-437-15-810",
        type: "callsite",
        name: "unit_allocation",
        nameStart: { line: 15, column: 437 },
        nameEnd: { line: 15, column: 452 },
      },
      {
        path: "script1",
        start: { line: 13, column: 19 },
        end: { line: 17, column: 1 },
        id: "script1-function-13-19-17-1",
        type: "function",
        name: "unit_balance",
        params: [
          {
            name: "_ref2",
            start: { line: 13, column: 41 },
            end: { line: 13, column: 46 },
          },
        ],
      },
      {
        path: "script1",
        start: { line: 20, column: 5 },
        end: { line: 20, column: 235 },
        id: "script1-callsite-20-5-20-235",
        type: "callsite",
        name: "empee_contribution",
        nameStart: { line: 20, column: 5 },
        nameEnd: { line: 20, column: 23 },
      },
      {
        path: "script1",
        start: { line: 20, column: 238 },
        end: { line: 20, column: 468 },
        id: "script1-callsite-20-238-20-468",
        type: "callsite",
        name: "emper_contribution",
        nameStart: { line: 20, column: 238 },
        nameEnd: { line: 20, column: 256 },
      },
      {
        path: "script1",
        start: { line: 21, column: 8 },
        end: { line: 21, column: 79 },
        id: "script1-callsite-21-8-21-79",
        type: "callsite",
        name: "contribution_charge",
        nameStart: { line: 21, column: 8 },
        nameEnd: { line: 21, column: 27 },
      },
      {
        path: "script1",
        start: { line: 22, column: 4 },
        end: { line: 22, column: 96 },
        id: "script1-callsite-22-4-22-96",
        type: "callsite",
        name: "unit_price",
        nameStart: { line: 22, column: 4 },
        nameEnd: { line: 22, column: 14 },
      },
      {
        path: "script1",
        start: { line: 19, column: 22 },
        end: { line: 22, column: 99 },
        id: "script1-function-19-22-22-99",
        type: "function",
        name: "unit_allocation",
        params: [
          {
            name: "_ref3",
            start: { line: 19, column: 47 },
            end: { line: 19, column: 52 },
          },
        ],
      },
      {
        path: "script1",
        start: { line: 25, column: 6 },
        end: { line: 25, column: 29 },
        id: "script1-callsite-25-6-25-29",
        type: "callsite",
        name: "age",
        nameStart: { line: 25, column: 6 },
        nameEnd: { line: 25, column: 9 },
      },
      {
        path: "script1",
        start: { line: 25, column: 33 },
        end: { line: 25, column: 62 },
        id: "script1-callsite-25-33-25-62",
        type: "callsite",
        name: "age_0",
        nameStart: { line: 25, column: 33 },
        nameEnd: { line: 25, column: 38 },
      },
      {
        path: "script1",
        start: { line: 26, column: 92 },
        end: { line: 26, column: 115 },
        id: "script1-callsite-26-92-26-115",
        type: "callsite",
        name: "age",
        nameStart: { line: 26, column: 92 },
        nameEnd: { line: 26, column: 95 },
      },
      {
        path: "script1",
        start: { line: 26, column: 9 },
        end: { line: 26, column: 122 },
        id: "script1-callsite-26-9-26-122",
        type: "callsite",
        name: "unit_price",
        nameStart: { line: 26, column: 9 },
        nameEnd: { line: 26, column: 19 },
      },
      {
        path: "script1",
        start: { line: 26, column: 130 },
        end: { line: 26, column: 192 },
        id: "script1-callsite-26-130-26-192",
        type: "callsite",
        name: "unit_growth_rate",
        nameStart: { line: 26, column: 130 },
        nameEnd: { line: 26, column: 146 },
      },
      {
        path: "script1",
        start: { line: 24, column: 17 },
        end: { line: 27, column: 1 },
        id: "script1-function-24-17-27-1",
        type: "function",
        name: "unit_price",
        params: [
          {
            name: "_ref4",
            start: { line: 24, column: 37 },
            end: { line: 24, column: 42 },
          },
        ],
      },
      {
        path: "script1",
        start: { line: 30, column: 6 },
        end: { line: 30, column: 29 },
        id: "script1-callsite-30-6-30-29",
        type: "callsite",
        name: "age",
        nameStart: { line: 30, column: 6 },
        nameEnd: { line: 30, column: 9 },
      },
      {
        path: "script1",
        start: { line: 30, column: 33 },
        end: { line: 30, column: 62 },
        id: "script1-callsite-30-33-30-62",
        type: "callsite",
        name: "age_0",
        nameStart: { line: 30, column: 33 },
        nameEnd: { line: 30, column: 38 },
      },
      {
        path: "script1",
        start: { line: 30, column: 70 },
        end: { line: 30, column: 93 },
        id: "script1-callsite-30-70-30-93",
        type: "callsite",
        name: "age",
        nameStart: { line: 30, column: 70 },
        nameEnd: { line: 30, column: 73 },
      },
      {
        path: "script1",
        start: { line: 30, column: 97 },
        end: { line: 30, column: 153 },
        id: "script1-callsite-30-97-30-153",
        type: "callsite",
        name: "retirement_age",
        nameStart: { line: 30, column: 97 },
        nameEnd: { line: 30, column: 111 },
      },
      {
        path: "script1",
        start: { line: 31, column: 162 },
        end: { line: 31, column: 185 },
        id: "script1-callsite-31-162-31-185",
        type: "callsite",
        name: "age",
        nameStart: { line: 31, column: 162 },
        nameEnd: { line: 31, column: 165 },
      },
      {
        path: "script1",
        start: { line: 31, column: 9 },
        end: { line: 31, column: 192 },
        id: "script1-callsite-31-9-31-192",
        type: "callsite",
        name: "salary",
        nameStart: { line: 31, column: 9 },
        nameEnd: { line: 31, column: 15 },
      },
      {
        path: "script1",
        start: { line: 31, column: 195 },
        end: { line: 31, column: 278 },
        id: "script1-callsite-31-195-31-278",
        type: "callsite",
        name: "empee_contribution_rate",
        nameStart: { line: 31, column: 195 },
        nameEnd: { line: 31, column: 218 },
      },
      {
        path: "script1",
        start: { line: 29, column: 25 },
        end: { line: 32, column: 1 },
        id: "script1-function-29-25-32-1",
        type: "function",
        name: "empee_contribution",
        params: [
          {
            name: "_ref5",
            start: { line: 29, column: 53 },
            end: { line: 29, column: 58 },
          },
        ],
      },
      {
        path: "script1",
        start: { line: 35, column: 6 },
        end: { line: 35, column: 29 },
        id: "script1-callsite-35-6-35-29",
        type: "callsite",
        name: "age",
        nameStart: { line: 35, column: 6 },
        nameEnd: { line: 35, column: 9 },
      },
      {
        path: "script1",
        start: { line: 35, column: 33 },
        end: { line: 35, column: 62 },
        id: "script1-callsite-35-33-35-62",
        type: "callsite",
        name: "age_0",
        nameStart: { line: 35, column: 33 },
        nameEnd: { line: 35, column: 38 },
      },
      {
        path: "script1",
        start: { line: 38, column: 238 },
        end: { line: 38, column: 261 },
        id: "script1-callsite-38-238-38-261",
        type: "callsite",
        name: "age",
        nameStart: { line: 38, column: 238 },
        nameEnd: { line: 38, column: 241 },
      },
      {
        path: "script1",
        start: { line: 38, column: 4 },
        end: { line: 38, column: 268 },
        id: "script1-callsite-38-4-38-268",
        type: "callsite",
        name: "accumulated_empee_contributions",
        nameStart: { line: 38, column: 4 },
        nameEnd: { line: 38, column: 35 },
      },
      {
        path: "script1",
        start: { line: 39, column: 4 },
        end: { line: 39, column: 234 },
        id: "script1-callsite-39-4-39-234",
        type: "callsite",
        name: "empee_contribution",
        nameStart: { line: 39, column: 4 },
        nameEnd: { line: 39, column: 22 },
      },
      {
        path: "script1",
        start: { line: 34, column: 38 },
        end: { line: 41, column: 1 },
        id: "script1-function-34-38-41-1",
        type: "function",
        name: "accumulated_empee_contributions",
        params: [
          {
            name: "_ref6",
            start: { line: 34, column: 79 },
            end: { line: 34, column: 84 },
          },
        ],
      },
      {
        path: "script1",
        start: { line: 44, column: 6 },
        end: { line: 44, column: 29 },
        id: "script1-callsite-44-6-44-29",
        type: "callsite",
        name: "age",
        nameStart: { line: 44, column: 6 },
        nameEnd: { line: 44, column: 9 },
      },
      {
        path: "script1",
        start: { line: 44, column: 33 },
        end: { line: 44, column: 62 },
        id: "script1-callsite-44-33-44-62",
        type: "callsite",
        name: "age_0",
        nameStart: { line: 44, column: 33 },
        nameEnd: { line: 44, column: 38 },
      },
      {
        path: "script1",
        start: { line: 47, column: 430 },
        end: { line: 47, column: 453 },
        id: "script1-callsite-47-430-47-453",
        type: "callsite",
        name: "age",
        nameStart: { line: 47, column: 430 },
        nameEnd: { line: 47, column: 433 },
      },
      {
        path: "script1",
        start: { line: 47, column: 4 },
        end: { line: 47, column: 460 },
        id: "script1-callsite-47-4-47-460",
        type: "callsite",
        name: "accumulated_empee_contribution_tax_relief",
        nameStart: { line: 47, column: 4 },
        nameEnd: { line: 47, column: 45 },
      },
      {
        path: "script1",
        start: { line: 48, column: 4 },
        end: { line: 48, column: 245 },
        id: "script1-callsite-48-4-48-245",
        type: "callsite",
        name: "empee_contribution_tax_relief",
        nameStart: { line: 48, column: 4 },
        nameEnd: { line: 48, column: 33 },
      },
      {
        path: "script1",
        start: { line: 43, column: 48 },
        end: { line: 50, column: 1 },
        id: "script1-function-43-48-50-1",
        type: "function",
        name: "accumulated_empee_contribution_tax_relief",
        params: [
          {
            name: "_ref7",
            start: { line: 43, column: 99 },
            end: { line: 43, column: 104 },
          },
        ],
      },
      {
        path: "script1",
        start: { line: 53, column: 4 },
        end: { line: 53, column: 245 },
        id: "script1-callsite-53-4-53-245",
        type: "callsite",
        name: "empee_contribution_tax_relief",
        nameStart: { line: 53, column: 4 },
        nameEnd: { line: 53, column: 33 },
      },
      {
        path: "script1",
        start: { line: 53, column: 248 },
        end: { line: 53, column: 478 },
        id: "script1-callsite-53-248-53-478",
        type: "callsite",
        name: "empee_contribution",
        nameStart: { line: 53, column: 248 },
        nameEnd: { line: 53, column: 266 },
      },
      {
        path: "script1",
        start: { line: 52, column: 31 },
        end: { line: 53, column: 481 },
        id: "script1-function-52-31-53-481",
        type: "function",
        name: "pension_tax_relief_ratio",
        params: [
          {
            name: "_ref8",
            start: { line: 52, column: 65 },
            end: { line: 52, column: 70 },
          },
        ],
      },
      {
        path: "script1",
        start: { line: 57, column: 176 },
        end: { line: 57, column: 199 },
        id: "script1-callsite-57-176-57-199",
        type: "callsite",
        name: "age",
        nameStart: { line: 57, column: 176 },
        nameEnd: { line: 57, column: 179 },
      },
      {
        path: "script1",
        start: { line: 57, column: 23 },
        end: { line: 57, column: 206 },
        id: "script1-callsite-57-23-57-206",
        type: "callsite",
        name: "salary",
        nameStart: { line: 57, column: 23 },
        nameEnd: { line: 57, column: 29 },
      },
      {
        path: "script1",
        start: { line: 56, column: 4 },
        end: { line: 59, column: 35 },
        id: "script1-callsite-56-4-59-35",
        type: "callsite",
        name: "0, _cul_scope_.income_tax",
        nameStart: { line: 56, column: 5 },
        nameEnd: { line: 56, column: 30 },
      },
      {
        path: "script1",
        start: { line: 62, column: 176 },
        end: { line: 62, column: 199 },
        id: "script1-callsite-62-176-62-199",
        type: "callsite",
        name: "age",
        nameStart: { line: 62, column: 176 },
        nameEnd: { line: 62, column: 179 },
      },
      {
        path: "script1",
        start: { line: 62, column: 23 },
        end: { line: 62, column: 206 },
        id: "script1-callsite-62-23-62-206",
        type: "callsite",
        name: "salary",
        nameStart: { line: 62, column: 23 },
        nameEnd: { line: 62, column: 29 },
      },
      {
        path: "script1",
        start: { line: 64, column: 31 },
        end: { line: 64, column: 261 },
        id: "script1-callsite-64-31-64-261",
        type: "callsite",
        name: "empee_contribution",
        nameStart: { line: 64, column: 31 },
        nameEnd: { line: 64, column: 49 },
      },
      {
        path: "script1",
        start: { line: 61, column: 4 },
        end: { line: 64, column: 264 },
        id: "script1-callsite-61-4-64-264",
        type: "callsite",
        name: "0, _cul_scope_.income_tax",
        nameStart: { line: 61, column: 5 },
        nameEnd: { line: 61, column: 30 },
      },
      {
        path: "script1",
        start: { line: 55, column: 36 },
        end: { line: 64, column: 267 },
        id: "script1-function-55-36-64-267",
        type: "function",
        name: "empee_contribution_tax_relief",
        params: [
          {
            name: "_ref9",
            start: { line: 55, column: 75 },
            end: { line: 55, column: 80 },
          },
        ],
      },
      {
        path: "script1",
        start: { line: 79, column: 6 },
        end: { line: 79, column: 29 },
        id: "script1-callsite-79-6-79-29",
        type: "callsite",
        name: "age",
        nameStart: { line: 79, column: 6 },
        nameEnd: { line: 79, column: 9 },
      },
      {
        path: "script1",
        start: { line: 79, column: 33 },
        end: { line: 79, column: 62 },
        id: "script1-callsite-79-33-79-62",
        type: "callsite",
        name: "age_0",
        nameStart: { line: 79, column: 33 },
        nameEnd: { line: 79, column: 38 },
      },
      {
        path: "script1",
        start: { line: 79, column: 70 },
        end: { line: 79, column: 93 },
        id: "script1-callsite-79-70-79-93",
        type: "callsite",
        name: "age",
        nameStart: { line: 79, column: 70 },
        nameEnd: { line: 79, column: 73 },
      },
      {
        path: "script1",
        start: { line: 79, column: 97 },
        end: { line: 79, column: 153 },
        id: "script1-callsite-79-97-79-153",
        type: "callsite",
        name: "retirement_age",
        nameStart: { line: 79, column: 97 },
        nameEnd: { line: 79, column: 111 },
      },
      {
        path: "script1",
        start: { line: 80, column: 162 },
        end: { line: 80, column: 185 },
        id: "script1-callsite-80-162-80-185",
        type: "callsite",
        name: "age",
        nameStart: { line: 80, column: 162 },
        nameEnd: { line: 80, column: 165 },
      },
      {
        path: "script1",
        start: { line: 80, column: 9 },
        end: { line: 80, column: 192 },
        id: "script1-callsite-80-9-80-192",
        type: "callsite",
        name: "salary",
        nameStart: { line: 80, column: 9 },
        nameEnd: { line: 80, column: 15 },
      },
      {
        path: "script1",
        start: { line: 80, column: 195 },
        end: { line: 80, column: 278 },
        id: "script1-callsite-80-195-80-278",
        type: "callsite",
        name: "emper_contribution_rate",
        nameStart: { line: 80, column: 195 },
        nameEnd: { line: 80, column: 218 },
      },
      {
        path: "script1",
        start: { line: 78, column: 25 },
        end: { line: 81, column: 1 },
        id: "script1-function-78-25-81-1",
        type: "function",
        name: "emper_contribution",
        params: [
          {
            name: "_ref10",
            start: { line: 78, column: 53 },
            end: { line: 78, column: 59 },
          },
        ],
      },
      {
        path: "script1",
        start: { line: 85, column: 6 },
        end: { line: 85, column: 29 },
        id: "script1-callsite-85-6-85-29",
        type: "callsite",
        name: "age",
        nameStart: { line: 85, column: 6 },
        nameEnd: { line: 85, column: 9 },
      },
      {
        path: "script1",
        start: { line: 85, column: 33 },
        end: { line: 85, column: 62 },
        id: "script1-callsite-85-33-85-62",
        type: "callsite",
        name: "age_0",
        nameStart: { line: 85, column: 33 },
        nameEnd: { line: 85, column: 38 },
      },
      {
        path: "script1",
        start: { line: 85, column: 75 },
        end: { line: 85, column: 113 },
        id: "script1-callsite-85-75-85-113",
        type: "callsite",
        name: "salary_0",
        nameStart: { line: 85, column: 75 },
        nameEnd: { line: 85, column: 83 },
      },
      {
        path: "script1",
        start: { line: 86, column: 6 },
        end: { line: 86, column: 29 },
        id: "script1-callsite-86-6-86-29",
        type: "callsite",
        name: "age",
        nameStart: { line: 86, column: 6 },
        nameEnd: { line: 86, column: 9 },
      },
      {
        path: "script1",
        start: { line: 86, column: 33 },
        end: { line: 86, column: 89 },
        id: "script1-callsite-86-33-86-89",
        type: "callsite",
        name: "retirement_age",
        nameStart: { line: 86, column: 33 },
        nameEnd: { line: 86, column: 47 },
      },
      {
        path: "script1",
        start: { line: 87, column: 162 },
        end: { line: 87, column: 185 },
        id: "script1-callsite-87-162-87-185",
        type: "callsite",
        name: "age",
        nameStart: { line: 87, column: 162 },
        nameEnd: { line: 87, column: 165 },
      },
      {
        path: "script1",
        start: { line: 87, column: 9 },
        end: { line: 87, column: 192 },
        id: "script1-callsite-87-9-87-192",
        type: "callsite",
        name: "salary",
        nameStart: { line: 87, column: 9 },
        nameEnd: { line: 87, column: 15 },
      },
      {
        path: "script1",
        start: { line: 87, column: 200 },
        end: { line: 87, column: 277 },
        id: "script1-callsite-87-200-87-277",
        type: "callsite",
        name: "salary_inflation_rate",
        nameStart: { line: 87, column: 200 },
        nameEnd: { line: 87, column: 221 },
      },
      {
        path: "script1",
        start: { line: 83, column: 13 },
        end: { line: 88, column: 1 },
        id: "script1-function-83-13-88-1",
        type: "function",
        name: "salary",
        params: [
          {
            name: "_ref11",
            start: { line: 83, column: 29 },
            end: { line: 83, column: 35 },
          },
        ],
      },
      {
        path: "script1",
        start: { line: 92, column: 397 },
        end: { line: 92, column: 453 },
        id: "script1-callsite-92-397-92-453",
        type: "callsite",
        name: "retirement_age",
        nameStart: { line: 92, column: 397 },
        nameEnd: { line: 92, column: 411 },
      },
      {
        path: "script1",
        start: { line: 92, column: 4 },
        end: { line: 92, column: 456 },
        id: "script1-callsite-92-4-92-456",
        type: "callsite",
        name: "fund_value",
        nameStart: { line: 92, column: 4 },
        nameEnd: { line: 92, column: 14 },
      },
      {
        path: "script1",
        start: { line: 90, column: 27 },
        end: { line: 92, column: 459 },
        id: "script1-function-90-27-92-459",
        type: "function",
        name: "projected_fund_value",
        params: [
          {
            name: "_ref12",
            start: { line: 90, column: 57 },
            end: { line: 90, column: 63 },
          },
        ],
      },
      {
        path: "script1",
        start: { line: 95, column: 4 },
        end: { line: 95, column: 400 },
        id: "script1-callsite-95-4-95-400",
        type: "callsite",
        name: "projected_fund_value",
        nameStart: { line: 95, column: 4 },
        nameEnd: { line: 95, column: 24 },
      },
      {
        path: "script1",
        start: { line: 95, column: 556 },
        end: { line: 95, column: 612 },
        id: "script1-callsite-95-556-95-612",
        type: "callsite",
        name: "retirement_age",
        nameStart: { line: 95, column: 556 },
        nameEnd: { line: 95, column: 570 },
      },
      {
        path: "script1",
        start: { line: 95, column: 403 },
        end: { line: 95, column: 619 },
        id: "script1-callsite-95-403-95-619",
        type: "callsite",
        name: "salary",
        nameStart: { line: 95, column: 403 },
        nameEnd: { line: 95, column: 409 },
      },
      {
        path: "script1",
        start: { line: 94, column: 34 },
        end: { line: 95, column: 622 },
        id: "script1-function-94-34-95-622",
        type: "function",
        name: "salaries_per_projected_fund",
        params: [
          {
            name: "_ref13",
            start: { line: 94, column: 71 },
            end: { line: 94, column: 77 },
          },
        ],
      },
      {
        path: "script1",
        start: { line: 100, column: 76 },
        end: { line: 100, column: 140 },
        id: "script1-function-100-76-100-140",
        type: "function",
        name: "age",
        params: [
          {
            name: "_ref14",
            start: { line: 100, column: 89 },
            end: { line: 100, column: 95 },
          },
        ],
      },
      {
        path: "script1",
        start: { line: 101, column: 30 },
        end: { line: 101, column: 102 },
        id: "script1-function-101-30-101-102",
        type: "function",
        name: "age_0",
        params: [
          {
            name: "_ref15",
            start: { line: 101, column: 45 },
            end: { line: 101, column: 51 },
          },
        ],
      },
      {
        path: "script1",
        start: { line: 103, column: 21 },
        end: { line: 103, column: 129 },
        id: "script1-function-103-21-103-129",
        type: "function",
        name: "retirement_age",
        params: [
          {
            name: "_ref16",
            start: { line: 103, column: 45 },
            end: { line: 103, column: 51 },
          },
        ],
      },
      {
        path: "script1",
        start: { line: 104, column: 15 },
        end: { line: 104, column: 99 },
        id: "script1-function-104-15-104-99",
        type: "function",
        name: "salary_0",
        params: [
          {
            name: "_ref17",
            start: { line: 104, column: 33 },
            end: { line: 104, column: 39 },
          },
        ],
      },
      {
        path: "script1",
        start: { line: 105, column: 28 },
        end: { line: 105, column: 164 },
        id: "script1-function-105-28-105-164",
        type: "function",
        name: "salary_inflation_rate",
        params: [
          {
            name: "_ref18",
            start: { line: 105, column: 59 },
            end: { line: 105, column: 65 },
          },
        ],
      },
      {
        path: "script1",
        start: { line: 106, column: 30 },
        end: { line: 106, column: 174 },
        id: "script1-function-106-30-106-174",
        type: "function",
        name: "empee_contribution_rate",
        params: [
          {
            name: "_ref19",
            start: { line: 106, column: 63 },
            end: { line: 106, column: 69 },
          },
        ],
      },
      {
        path: "script1",
        start: { line: 107, column: 30 },
        end: { line: 107, column: 174 },
        id: "script1-function-107-30-107-174",
        type: "function",
        name: "emper_contribution_rate",
        params: [
          {
            name: "_ref20",
            start: { line: 107, column: 63 },
            end: { line: 107, column: 69 },
          },
        ],
      },
      {
        path: "script1",
        start: { line: 109, column: 23 },
        end: { line: 109, column: 139 },
        id: "script1-function-109-23-109-139",
        type: "function",
        name: "unit_growth_rate",
        params: [
          {
            name: "_ref21",
            start: { line: 109, column: 49 },
            end: { line: 109, column: 55 },
          },
        ],
      },
      {
        path: "script1",
        start: { line: 111, column: 19 },
        end: { line: 111, column: 119 },
        id: "script1-function-111-19-111-119",
        type: "function",
        name: "fund_value_0",
        params: [
          {
            name: "_ref22",
            start: { line: 111, column: 41 },
            end: { line: 111, column: 47 },
          },
        ],
      },
      {
        path: "script1",
        start: { line: 113, column: 26 },
        end: { line: 113, column: 154 },
        id: "script1-function-113-26-113-154",
        type: "function",
        name: "contribution_charge",
        params: [
          {
            name: "_ref23",
            start: { line: 113, column: 55 },
            end: { line: 113, column: 61 },
          },
        ],
      },
      {
        path: "script1",
        start: { line: 1, column: 0 },
        end: { line: 116, column: 0 },
        id: "script1-toplevel-1-0-116-0",
        type: "toplevel",
        name: "(script1 toplevel)",
      },
    ],
  }
);

{
  try {
    {
      __tracer.traceFileEntry({ nodeId: "script1-toplevel-1-0-116-0" });
      var exports = {};
      ("use strict");
      __tracer.traceFunCall({
        this: Object,
        property: "defineProperty",
        nodeId: "script1-callsite-2-16-2-77",
      })(exports, "__esModule", { value: true });
      exports.fund_value_0 =
        exports.fund_value =
        exports.emper_contribution_rate =
        exports.emper_contribution =
        exports.empee_contribution_tax_relief =
        exports.empee_contribution_rate =
        exports.empee_contribution =
        exports.contribution_charge =
        exports.age_0 =
        exports.age =
        exports.accumulated_empee_contributions =
        exports.accumulated_empee_contribution_tax_relief =
          void 0;
      __tracer.traceFunCall({
        this: Object,
        property: "defineProperty",
        nodeId: "script1-callsite-2-449-2-569",
      })(exports, "income_tax", {
        enumerable: true,
        get: __tracer.traceFunCreate(function get() {
          try {
            {
              __tracer.traceEnter({
                nodeId: "script1-function-2-519-2-566",
                arguments: __tracer.Array.prototype.slice.apply(arguments),
                this: this,
              });
              {
                return __tracer.traceReturnValue(_cul_scope_.income_tax);
              }
            }
          } catch (__e) {
            __tracer.traceExceptionThrown(
              { nodeId: "script1-function-2-519-2-566" },
              __e
            );
            throw __e;
          } finally {
            __tracer.traceExit({ nodeId: "script1-function-2-519-2-566" });
          }
        }, "function get() {return _cul_scope_.income_tax;}"),
      });
      exports.unit_price =
        exports.unit_growth_rate =
        exports.unit_balance =
        exports.unit_allocation =
        exports.salary_inflation_rate =
        exports.salary_0 =
        exports.salary =
        exports.salaries_per_projected_fund =
        exports.retirement_age =
        exports.projected_fund_value =
        exports.pension_tax_relief_ratio =
          void 0;

      var _cul_scope_ = require("./cul_scope_1.mjs"); // disclaimer: This is a work-in-progress model released for some calculang/tooling demonstration purposes and numbers shouldn't be relied upon; there are known model issues.
      // this model should prob. be broken into some modular pieces, but it isn't because it definitely needs memoisation, which is currently only working for non-modular models
      // todo add timing comments
      var fund_value = __tracer.traceFunCreate(function fund_value(_ref) {
        try {
          {
            __tracer.traceEnter({
              nodeId: "script1-function-11-17-11-994",
              arguments: __tracer.Array.prototype.slice.apply(arguments),
              this: this,
            });
            {
              var age_in = _ref.age_in,
                age_0_in = _ref.age_0_in,
                fund_value_0_in = _ref.fund_value_0_in,
                unit_growth_rate_in = _ref.unit_growth_rate_in,
                retirement_age_in = _ref.retirement_age_in,
                salary_0_in = _ref.salary_0_in,
                salary_inflation_rate_in = _ref.salary_inflation_rate_in,
                empee_contribution_rate_in = _ref.empee_contribution_rate_in,
                emper_contribution_rate_in = _ref.emper_contribution_rate_in,
                contribution_charge_in = _ref.contribution_charge_in;
              return __tracer.traceReturnValue(
                __tracer.traceFunCall({
                  func: unit_balance,
                  nodeId: "script1-callsite-11-493-11-897",
                })({
                  age_in: age_in,
                  age_0_in: age_0_in,
                  fund_value_0_in: fund_value_0_in,
                  unit_growth_rate_in: unit_growth_rate_in,
                  retirement_age_in: retirement_age_in,
                  salary_0_in: salary_0_in,
                  salary_inflation_rate_in: salary_inflation_rate_in,
                  empee_contribution_rate_in: empee_contribution_rate_in,
                  emper_contribution_rate_in: emper_contribution_rate_in,
                  contribution_charge_in: contribution_charge_in,
                }) *
                  __tracer.traceFunCall({
                    func: unit_price,
                    nodeId: "script1-callsite-11-900-11-992",
                  })({
                    age_in: age_in,
                    age_0_in: age_0_in,
                    unit_growth_rate_in: unit_growth_rate_in,
                  })
              );
            }
          }
        } catch (__e) {
          __tracer.traceExceptionThrown(
            { nodeId: "script1-function-11-17-11-994" },
            __e
          );
          throw __e;
        } finally {
          __tracer.traceExit({ nodeId: "script1-function-11-17-11-994" });
        }
      }, "function fund_value(_ref) {var age_in = _ref.age_in,age_0_in = _ref.age_0_in,fund_value_0_in = _ref.fund_value_0_in,unit_growth_rate_in = _ref.unit_growth_rate_in,retirement_age_in = _ref.retirement_age_in,salary_0_in = _ref.salary_0_in,salary_inflation_rate_in = _ref.salary_inflation_rate_in,empee_contribution_rate_in = _ref.empee_contribution_rate_in,emper_contribution_rate_in = _ref.emper_contribution_rate_in,contribution_charge_in = _ref.contribution_charge_in;return unit_balance({ age_in: age_in, age_0_in: age_0_in, fund_value_0_in: fund_value_0_in, unit_growth_rate_in: unit_growth_rate_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in, emper_contribution_rate_in: emper_contribution_rate_in, contribution_charge_in: contribution_charge_in }) * unit_price({ age_in: age_in, age_0_in: age_0_in, unit_growth_rate_in: unit_growth_rate_in });}"); // not allowing for multiple funds now
      exports.fund_value = fund_value;
      var unit_balance = __tracer.traceFunCreate(function unit_balance(_ref2) {
        try {
          {
            __tracer.traceEnter({
              nodeId: "script1-function-13-19-17-1",
              arguments: __tracer.Array.prototype.slice.apply(arguments),
              this: this,
            });
            {
              var age_in = _ref2.age_in,
                age_0_in = _ref2.age_0_in,
                fund_value_0_in = _ref2.fund_value_0_in,
                unit_growth_rate_in = _ref2.unit_growth_rate_in,
                retirement_age_in = _ref2.retirement_age_in,
                salary_0_in = _ref2.salary_0_in,
                salary_inflation_rate_in = _ref2.salary_inflation_rate_in,
                empee_contribution_rate_in = _ref2.empee_contribution_rate_in,
                emper_contribution_rate_in = _ref2.emper_contribution_rate_in,
                contribution_charge_in = _ref2.contribution_charge_in;
              if (
                __tracer.traceFunCall({
                  func: age,
                  nodeId: "script1-callsite-14-6-14-29",
                })({ age_in: age_in }) <=
                __tracer.traceFunCall({
                  func: age_0,
                  nodeId: "script1-callsite-14-33-14-62",
                })({ age_0_in: age_0_in }) -
                  1
              )
                return __tracer.traceReturnValue(
                  __tracer.traceFunCall({
                    func: fund_value_0,
                    nodeId: "script1-callsite-14-75-14-125",
                  })({ fund_value_0_in: fund_value_0_in }) /
                    __tracer.traceFunCall({
                      func: unit_price,
                      nodeId: "script1-callsite-14-128-14-220",
                    })({
                      age_in: age_in,
                      age_0_in: age_0_in,
                      unit_growth_rate_in: unit_growth_rate_in,
                    })
                );
              else
                return __tracer.traceReturnValue(
                  __tracer.traceFunCall({
                    func: unit_balance,
                    nodeId: "script1-callsite-15-9-15-434",
                  })({
                    age_0_in: age_0_in,
                    fund_value_0_in: fund_value_0_in,
                    unit_growth_rate_in: unit_growth_rate_in,
                    retirement_age_in: retirement_age_in,
                    salary_0_in: salary_0_in,
                    salary_inflation_rate_in: salary_inflation_rate_in,
                    empee_contribution_rate_in: empee_contribution_rate_in,
                    emper_contribution_rate_in: emper_contribution_rate_in,
                    contribution_charge_in: contribution_charge_in,
                    age_in:
                      __tracer.traceFunCall({
                        func: age,
                        nodeId: "script1-callsite-15-404-15-427",
                      })({ age_in: age_in }) - 1,
                  }) +
                    __tracer.traceFunCall({
                      func: unit_allocation,
                      nodeId: "script1-callsite-15-437-15-810",
                    })({
                      age_in: age_in,
                      age_0_in: age_0_in,
                      retirement_age_in: retirement_age_in,
                      salary_0_in: salary_0_in,
                      salary_inflation_rate_in: salary_inflation_rate_in,
                      empee_contribution_rate_in: empee_contribution_rate_in,
                      emper_contribution_rate_in: emper_contribution_rate_in,
                      contribution_charge_in: contribution_charge_in,
                      unit_growth_rate_in: unit_growth_rate_in,
                    })
                );
              // timing = premium received at start of year and allocated immediately
            }
          }
        } catch (__e) {
          __tracer.traceExceptionThrown(
            { nodeId: "script1-function-13-19-17-1" },
            __e
          );
          throw __e;
        } finally {
          __tracer.traceExit({ nodeId: "script1-function-13-19-17-1" });
        }
      }, "function unit_balance(_ref2) {var age_in = _ref2.age_in,age_0_in = _ref2.age_0_in,fund_value_0_in = _ref2.fund_value_0_in,unit_growth_rate_in = _ref2.unit_growth_rate_in,retirement_age_in = _ref2.retirement_age_in,salary_0_in = _ref2.salary_0_in,salary_inflation_rate_in = _ref2.salary_inflation_rate_in,empee_contribution_rate_in = _ref2.empee_contribution_rate_in,emper_contribution_rate_in = _ref2.emper_contribution_rate_in,contribution_charge_in = _ref2.contribution_charge_in;\n  if (age({ age_in: age_in }) <= age_0({ age_0_in: age_0_in }) - 1) return fund_value_0({ fund_value_0_in: fund_value_0_in }) / unit_price({ age_in: age_in, age_0_in: age_0_in, unit_growth_rate_in: unit_growth_rate_in });else\n  return unit_balance({ age_0_in: age_0_in, fund_value_0_in: fund_value_0_in, unit_growth_rate_in: unit_growth_rate_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in, emper_contribution_rate_in: emper_contribution_rate_in, contribution_charge_in: contribution_charge_in, age_in: age({ age_in: age_in }) - 1 }) + unit_allocation({ age_in: age_in, age_0_in: age_0_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in, emper_contribution_rate_in: emper_contribution_rate_in, contribution_charge_in: contribution_charge_in, unit_growth_rate_in: unit_growth_rate_in });\n  // timing = premium received at start of year and allocated immediately\n}");
      exports.unit_balance = unit_balance;

      var unit_allocation = __tracer.traceFunCreate(function unit_allocation(
        _ref3
      ) {
        try {
          {
            __tracer.traceEnter({
              nodeId: "script1-function-19-22-22-99",
              arguments: __tracer.Array.prototype.slice.apply(arguments),
              this: this,
            });
            {
              var age_in = _ref3.age_in,
                age_0_in = _ref3.age_0_in,
                retirement_age_in = _ref3.retirement_age_in,
                salary_0_in = _ref3.salary_0_in,
                salary_inflation_rate_in = _ref3.salary_inflation_rate_in,
                empee_contribution_rate_in = _ref3.empee_contribution_rate_in,
                emper_contribution_rate_in = _ref3.emper_contribution_rate_in,
                contribution_charge_in = _ref3.contribution_charge_in,
                unit_growth_rate_in = _ref3.unit_growth_rate_in;
              return __tracer.traceReturnValue(
                ((__tracer.traceFunCall({
                  func: empee_contribution,
                  nodeId: "script1-callsite-20-5-20-235",
                })({
                  age_in: age_in,
                  age_0_in: age_0_in,
                  retirement_age_in: retirement_age_in,
                  salary_0_in: salary_0_in,
                  salary_inflation_rate_in: salary_inflation_rate_in,
                  empee_contribution_rate_in: empee_contribution_rate_in,
                }) +
                  __tracer.traceFunCall({
                    func: emper_contribution,
                    nodeId: "script1-callsite-20-238-20-468",
                  })({
                    age_in: age_in,
                    age_0_in: age_0_in,
                    retirement_age_in: retirement_age_in,
                    salary_0_in: salary_0_in,
                    salary_inflation_rate_in: salary_inflation_rate_in,
                    emper_contribution_rate_in: emper_contribution_rate_in,
                  })) *
                  (1 -
                    __tracer.traceFunCall({
                      func: contribution_charge,
                      nodeId: "script1-callsite-21-8-21-79",
                    })({ contribution_charge_in: contribution_charge_in }))) /
                  __tracer.traceFunCall({
                    func: unit_price,
                    nodeId: "script1-callsite-22-4-22-96",
                  })({
                    age_in: age_in,
                    age_0_in: age_0_in,
                    unit_growth_rate_in: unit_growth_rate_in,
                  })
              );
            }
          }
        } catch (__e) {
          __tracer.traceExceptionThrown(
            { nodeId: "script1-function-19-22-22-99" },
            __e
          );
          throw __e;
        } finally {
          __tracer.traceExit({ nodeId: "script1-function-19-22-22-99" });
        }
      },
      "function unit_allocation(_ref3) {var age_in = _ref3.age_in,age_0_in = _ref3.age_0_in,retirement_age_in = _ref3.retirement_age_in,salary_0_in = _ref3.salary_0_in,salary_inflation_rate_in = _ref3.salary_inflation_rate_in,empee_contribution_rate_in = _ref3.empee_contribution_rate_in,emper_contribution_rate_in = _ref3.emper_contribution_rate_in,contribution_charge_in = _ref3.contribution_charge_in,unit_growth_rate_in = _ref3.unit_growth_rate_in;return (\n    (empee_contribution({ age_in: age_in, age_0_in: age_0_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in }) + emper_contribution({ age_in: age_in, age_0_in: age_0_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, emper_contribution_rate_in: emper_contribution_rate_in })) * (\n    1 - contribution_charge({ contribution_charge_in: contribution_charge_in })) /\n    unit_price({ age_in: age_in, age_0_in: age_0_in, unit_growth_rate_in: unit_growth_rate_in }));}"); // todo, AVCs?
      exports.unit_allocation = unit_allocation;
      var unit_price = __tracer.traceFunCreate(function unit_price(_ref4) {
        try {
          {
            __tracer.traceEnter({
              nodeId: "script1-function-24-17-27-1",
              arguments: __tracer.Array.prototype.slice.apply(arguments),
              this: this,
            });
            {
              var age_in = _ref4.age_in,
                age_0_in = _ref4.age_0_in,
                unit_growth_rate_in = _ref4.unit_growth_rate_in;
              if (
                __tracer.traceFunCall({
                  func: age,
                  nodeId: "script1-callsite-25-6-25-29",
                })({ age_in: age_in }) <=
                __tracer.traceFunCall({
                  func: age_0,
                  nodeId: "script1-callsite-25-33-25-62",
                })({ age_0_in: age_0_in })
              )
                return __tracer.traceReturnValue(1);
              else
                return __tracer.traceReturnValue(
                  __tracer.traceFunCall({
                    func: unit_price,
                    nodeId: "script1-callsite-26-9-26-122",
                  })({
                    age_0_in: age_0_in,
                    unit_growth_rate_in: unit_growth_rate_in,
                    age_in:
                      __tracer.traceFunCall({
                        func: age,
                        nodeId: "script1-callsite-26-92-26-115",
                      })({ age_in: age_in }) - 1,
                  }) *
                    (1 +
                      __tracer.traceFunCall({
                        func: unit_growth_rate,
                        nodeId: "script1-callsite-26-130-26-192",
                      })({ unit_growth_rate_in: unit_growth_rate_in }))
                );
            }
          }
        } catch (__e) {
          __tracer.traceExceptionThrown(
            { nodeId: "script1-function-24-17-27-1" },
            __e
          );
          throw __e;
        } finally {
          __tracer.traceExit({ nodeId: "script1-function-24-17-27-1" });
        }
      }, "function unit_price(_ref4) {var age_in = _ref4.age_in,age_0_in = _ref4.age_0_in,unit_growth_rate_in = _ref4.unit_growth_rate_in;\n  if (age({ age_in: age_in }) <= age_0({ age_0_in: age_0_in })) return 1;else\n  return unit_price({ age_0_in: age_0_in, unit_growth_rate_in: unit_growth_rate_in, age_in: age({ age_in: age_in }) - 1 }) * (1 + unit_growth_rate({ unit_growth_rate_in: unit_growth_rate_in }));\n}");
      exports.unit_price = unit_price;

      var empee_contribution = __tracer.traceFunCreate(
        function empee_contribution(_ref5) {
          try {
            {
              __tracer.traceEnter({
                nodeId: "script1-function-29-25-32-1",
                arguments: __tracer.Array.prototype.slice.apply(arguments),
                this: this,
              });
              {
                var age_in = _ref5.age_in,
                  age_0_in = _ref5.age_0_in,
                  retirement_age_in = _ref5.retirement_age_in,
                  salary_0_in = _ref5.salary_0_in,
                  salary_inflation_rate_in = _ref5.salary_inflation_rate_in,
                  empee_contribution_rate_in = _ref5.empee_contribution_rate_in;
                if (
                  __tracer.traceFunCall({
                    func: age,
                    nodeId: "script1-callsite-30-6-30-29",
                  })({ age_in: age_in }) <=
                    __tracer.traceFunCall({
                      func: age_0,
                      nodeId: "script1-callsite-30-33-30-62",
                    })({ age_0_in: age_0_in }) -
                      1 ||
                  __tracer.traceFunCall({
                    func: age,
                    nodeId: "script1-callsite-30-70-30-93",
                  })({ age_in: age_in }) ==
                    __tracer.traceFunCall({
                      func: retirement_age,
                      nodeId: "script1-callsite-30-97-30-153",
                    })({ retirement_age_in: retirement_age_in })
                )
                  return __tracer.traceReturnValue(0);
                else
                  return __tracer.traceReturnValue(
                    __tracer.traceFunCall({
                      func: salary,
                      nodeId: "script1-callsite-31-9-31-192",
                    })({
                      age_0_in: age_0_in,
                      salary_0_in: salary_0_in,
                      retirement_age_in: retirement_age_in,
                      salary_inflation_rate_in: salary_inflation_rate_in,
                      age_in:
                        __tracer.traceFunCall({
                          func: age,
                          nodeId: "script1-callsite-31-162-31-185",
                        })({ age_in: age_in }) - 1,
                    }) *
                      __tracer.traceFunCall({
                        func: empee_contribution_rate,
                        nodeId: "script1-callsite-31-195-31-278",
                      })({
                        empee_contribution_rate_in: empee_contribution_rate_in,
                      })
                  );
              }
            }
          } catch (__e) {
            __tracer.traceExceptionThrown(
              { nodeId: "script1-function-29-25-32-1" },
              __e
            );
            throw __e;
          } finally {
            __tracer.traceExit({ nodeId: "script1-function-29-25-32-1" });
          }
        },
        "function empee_contribution(_ref5) {var age_in = _ref5.age_in,age_0_in = _ref5.age_0_in,retirement_age_in = _ref5.retirement_age_in,salary_0_in = _ref5.salary_0_in,salary_inflation_rate_in = _ref5.salary_inflation_rate_in,empee_contribution_rate_in = _ref5.empee_contribution_rate_in;\n  if (age({ age_in: age_in }) <= age_0({ age_0_in: age_0_in }) - 1 || age({ age_in: age_in }) == retirement_age({ retirement_age_in: retirement_age_in })) return 0;else\n  return salary({ age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, age_in: age({ age_in: age_in }) - 1 }) * empee_contribution_rate({ empee_contribution_rate_in: empee_contribution_rate_in });\n}"
      );
      exports.empee_contribution = empee_contribution;

      var accumulated_empee_contributions = __tracer.traceFunCreate(
        function accumulated_empee_contributions(_ref6) {
          try {
            {
              __tracer.traceEnter({
                nodeId: "script1-function-34-38-41-1",
                arguments: __tracer.Array.prototype.slice.apply(arguments),
                this: this,
              });
              {
                var age_in = _ref6.age_in,
                  age_0_in = _ref6.age_0_in,
                  retirement_age_in = _ref6.retirement_age_in,
                  salary_0_in = _ref6.salary_0_in,
                  salary_inflation_rate_in = _ref6.salary_inflation_rate_in,
                  empee_contribution_rate_in = _ref6.empee_contribution_rate_in;
                if (
                  __tracer.traceFunCall({
                    func: age,
                    nodeId: "script1-callsite-35-6-35-29",
                  })({ age_in: age_in }) ==
                  __tracer.traceFunCall({
                    func: age_0,
                    nodeId: "script1-callsite-35-33-35-62",
                  })({ age_0_in: age_0_in }) -
                    1
                )
                  return __tracer.traceReturnValue(0);
                else
                  return __tracer.traceReturnValue(
                    __tracer.traceFunCall({
                      func: accumulated_empee_contributions,
                      nodeId: "script1-callsite-38-4-38-268",
                    })({
                      age_0_in: age_0_in,
                      retirement_age_in: retirement_age_in,
                      salary_0_in: salary_0_in,
                      salary_inflation_rate_in: salary_inflation_rate_in,
                      empee_contribution_rate_in: empee_contribution_rate_in,
                      age_in:
                        __tracer.traceFunCall({
                          func: age,
                          nodeId: "script1-callsite-38-238-38-261",
                        })({ age_in: age_in }) - 1,
                    }) +
                      __tracer.traceFunCall({
                        func: empee_contribution,
                        nodeId: "script1-callsite-39-4-39-234",
                      })({
                        age_in: age_in,
                        age_0_in: age_0_in,
                        retirement_age_in: retirement_age_in,
                        salary_0_in: salary_0_in,
                        salary_inflation_rate_in: salary_inflation_rate_in,
                        empee_contribution_rate_in: empee_contribution_rate_in,
                      })
                  );
              }
            }
          } catch (__e) {
            __tracer.traceExceptionThrown(
              { nodeId: "script1-function-34-38-41-1" },
              __e
            );
            throw __e;
          } finally {
            __tracer.traceExit({ nodeId: "script1-function-34-38-41-1" });
          }
        },
        "function accumulated_empee_contributions(_ref6) {var age_in = _ref6.age_in,age_0_in = _ref6.age_0_in,retirement_age_in = _ref6.retirement_age_in,salary_0_in = _ref6.salary_0_in,salary_inflation_rate_in = _ref6.salary_inflation_rate_in,empee_contribution_rate_in = _ref6.empee_contribution_rate_in;\n  if (age({ age_in: age_in }) == age_0({ age_0_in: age_0_in }) - 1) return 0;else\n\n  return (\n    accumulated_empee_contributions({ age_0_in: age_0_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in, age_in: age({ age_in: age_in }) - 1 }) +\n    empee_contribution({ age_in: age_in, age_0_in: age_0_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in }));\n\n}"
      );
      exports.accumulated_empee_contributions = accumulated_empee_contributions;

      var accumulated_empee_contribution_tax_relief = __tracer.traceFunCreate(
        function accumulated_empee_contribution_tax_relief(_ref7) {
          try {
            {
              __tracer.traceEnter({
                nodeId: "script1-function-43-48-50-1",
                arguments: __tracer.Array.prototype.slice.apply(arguments),
                this: this,
              });
              {
                var age_in = _ref7.age_in,
                  age_0_in = _ref7.age_0_in,
                  paye_band_id_in = _ref7.paye_band_id_in,
                  gross_salary_in = _ref7.gross_salary_in,
                  pension_contribution_in = _ref7.pension_contribution_in,
                  tax_credits_in = _ref7.tax_credits_in,
                  usc_band_id_in = _ref7.usc_band_id_in,
                  salary_0_in = _ref7.salary_0_in,
                  retirement_age_in = _ref7.retirement_age_in,
                  salary_inflation_rate_in = _ref7.salary_inflation_rate_in,
                  empee_contribution_rate_in = _ref7.empee_contribution_rate_in;
                if (
                  __tracer.traceFunCall({
                    func: age,
                    nodeId: "script1-callsite-44-6-44-29",
                  })({ age_in: age_in }) ==
                  __tracer.traceFunCall({
                    func: age_0,
                    nodeId: "script1-callsite-44-33-44-62",
                  })({ age_0_in: age_0_in }) -
                    1
                )
                  return __tracer.traceReturnValue(0);
                else
                  return __tracer.traceReturnValue(
                    __tracer.traceFunCall({
                      func: accumulated_empee_contribution_tax_relief,
                      nodeId: "script1-callsite-47-4-47-460",
                    })({
                      age_0_in: age_0_in,
                      paye_band_id_in: paye_band_id_in,
                      gross_salary_in: gross_salary_in,
                      pension_contribution_in: pension_contribution_in,
                      tax_credits_in: tax_credits_in,
                      usc_band_id_in: usc_band_id_in,
                      salary_0_in: salary_0_in,
                      retirement_age_in: retirement_age_in,
                      salary_inflation_rate_in: salary_inflation_rate_in,
                      empee_contribution_rate_in: empee_contribution_rate_in,
                      age_in:
                        __tracer.traceFunCall({
                          func: age,
                          nodeId: "script1-callsite-47-430-47-453",
                        })({ age_in: age_in }) - 1,
                    }) +
                      __tracer.traceFunCall({
                        func: empee_contribution_tax_relief,
                        nodeId: "script1-callsite-48-4-48-245",
                      })({
                        age_in: age_in,
                        age_0_in: age_0_in,
                        salary_0_in: salary_0_in,
                        retirement_age_in: retirement_age_in,
                        salary_inflation_rate_in: salary_inflation_rate_in,
                        empee_contribution_rate_in: empee_contribution_rate_in,
                      })
                  );
              }
            }
          } catch (__e) {
            __tracer.traceExceptionThrown(
              { nodeId: "script1-function-43-48-50-1" },
              __e
            );
            throw __e;
          } finally {
            __tracer.traceExit({ nodeId: "script1-function-43-48-50-1" });
          }
        },
        "function accumulated_empee_contribution_tax_relief(_ref7) {var age_in = _ref7.age_in,age_0_in = _ref7.age_0_in,paye_band_id_in = _ref7.paye_band_id_in,gross_salary_in = _ref7.gross_salary_in,pension_contribution_in = _ref7.pension_contribution_in,tax_credits_in = _ref7.tax_credits_in,usc_band_id_in = _ref7.usc_band_id_in,salary_0_in = _ref7.salary_0_in,retirement_age_in = _ref7.retirement_age_in,salary_inflation_rate_in = _ref7.salary_inflation_rate_in,empee_contribution_rate_in = _ref7.empee_contribution_rate_in;\n  if (age({ age_in: age_in }) == age_0({ age_0_in: age_0_in }) - 1) return 0;else\n\n  return (\n    accumulated_empee_contribution_tax_relief({ age_0_in: age_0_in, paye_band_id_in: paye_band_id_in, gross_salary_in: gross_salary_in, pension_contribution_in: pension_contribution_in, tax_credits_in: tax_credits_in, usc_band_id_in: usc_band_id_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in, age_in: age({ age_in: age_in }) - 1 }) +\n    empee_contribution_tax_relief({ age_in: age_in, age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in }));\n\n}"
      );
      exports.accumulated_empee_contribution_tax_relief =
        accumulated_empee_contribution_tax_relief;

      var pension_tax_relief_ratio = __tracer.traceFunCreate(
        function pension_tax_relief_ratio(_ref8) {
          try {
            {
              __tracer.traceEnter({
                nodeId: "script1-function-52-31-53-481",
                arguments: __tracer.Array.prototype.slice.apply(arguments),
                this: this,
              });
              {
                var age_in = _ref8.age_in,
                  age_0_in = _ref8.age_0_in,
                  salary_0_in = _ref8.salary_0_in,
                  retirement_age_in = _ref8.retirement_age_in,
                  salary_inflation_rate_in = _ref8.salary_inflation_rate_in,
                  empee_contribution_rate_in = _ref8.empee_contribution_rate_in;
                return __tracer.traceReturnValue(
                  __tracer.traceFunCall({
                    func: empee_contribution_tax_relief,
                    nodeId: "script1-callsite-53-4-53-245",
                  })({
                    age_in: age_in,
                    age_0_in: age_0_in,
                    salary_0_in: salary_0_in,
                    retirement_age_in: retirement_age_in,
                    salary_inflation_rate_in: salary_inflation_rate_in,
                    empee_contribution_rate_in: empee_contribution_rate_in,
                  }) /
                    __tracer.traceFunCall({
                      func: empee_contribution,
                      nodeId: "script1-callsite-53-248-53-478",
                    })({
                      age_in: age_in,
                      age_0_in: age_0_in,
                      retirement_age_in: retirement_age_in,
                      salary_0_in: salary_0_in,
                      salary_inflation_rate_in: salary_inflation_rate_in,
                      empee_contribution_rate_in: empee_contribution_rate_in,
                    })
                );
              }
            }
          } catch (__e) {
            __tracer.traceExceptionThrown(
              { nodeId: "script1-function-52-31-53-481" },
              __e
            );
            throw __e;
          } finally {
            __tracer.traceExit({ nodeId: "script1-function-52-31-53-481" });
          }
        },
        "function pension_tax_relief_ratio(_ref8) {var age_in = _ref8.age_in,age_0_in = _ref8.age_0_in,salary_0_in = _ref8.salary_0_in,retirement_age_in = _ref8.retirement_age_in,salary_inflation_rate_in = _ref8.salary_inflation_rate_in,empee_contribution_rate_in = _ref8.empee_contribution_rate_in;return (\n    empee_contribution_tax_relief({ age_in: age_in, age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in }) / empee_contribution({ age_in: age_in, age_0_in: age_0_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in }));}"
      );
      exports.pension_tax_relief_ratio = pension_tax_relief_ratio;

      var empee_contribution_tax_relief = __tracer.traceFunCreate(
        function empee_contribution_tax_relief(_ref9) {
          try {
            {
              __tracer.traceEnter({
                nodeId: "script1-function-55-36-64-267",
                arguments: __tracer.Array.prototype.slice.apply(arguments),
                this: this,
              });
              {
                var age_in = _ref9.age_in,
                  age_0_in = _ref9.age_0_in,
                  salary_0_in = _ref9.salary_0_in,
                  retirement_age_in = _ref9.retirement_age_in,
                  salary_inflation_rate_in = _ref9.salary_inflation_rate_in,
                  empee_contribution_rate_in = _ref9.empee_contribution_rate_in;
                return __tracer.traceReturnValue(
                  __tracer.traceFunCall({
                    func: (0, _cul_scope_.income_tax),
                    nodeId: "script1-callsite-56-4-59-35",
                  })({
                    age_in: age_in,
                    gross_salary_in: __tracer.traceFunCall({
                      func: salary,
                      nodeId: "script1-callsite-57-23-57-206",
                    })({
                      age_0_in: age_0_in,
                      salary_0_in: salary_0_in,
                      retirement_age_in: retirement_age_in,
                      salary_inflation_rate_in: salary_inflation_rate_in,
                      age_in:
                        __tracer.traceFunCall({
                          func: age,
                          nodeId: "script1-callsite-57-176-57-199",
                        })({ age_in: age_in }) - 1,
                    }),
                    tax_credits_in: 3000,
                    pension_contribution_in: 0,
                  }) -
                    __tracer.traceFunCall({
                      func: (0, _cul_scope_.income_tax),
                      nodeId: "script1-callsite-61-4-64-264",
                    })({
                      age_in: age_in,
                      gross_salary_in: __tracer.traceFunCall({
                        func: salary,
                        nodeId: "script1-callsite-62-23-62-206",
                      })({
                        age_0_in: age_0_in,
                        salary_0_in: salary_0_in,
                        retirement_age_in: retirement_age_in,
                        salary_inflation_rate_in: salary_inflation_rate_in,
                        age_in:
                          __tracer.traceFunCall({
                            func: age,
                            nodeId: "script1-callsite-62-176-62-199",
                          })({ age_in: age_in }) - 1,
                      }),
                      tax_credits_in: 3000,
                      pension_contribution_in: __tracer.traceFunCall({
                        func: empee_contribution,
                        nodeId: "script1-callsite-64-31-64-261",
                      })({
                        age_in: age_in,
                        age_0_in: age_0_in,
                        retirement_age_in: retirement_age_in,
                        salary_0_in: salary_0_in,
                        salary_inflation_rate_in: salary_inflation_rate_in,
                        empee_contribution_rate_in: empee_contribution_rate_in,
                      }),
                    })
                );
              }
            }
          } catch (__e) {
            __tracer.traceExceptionThrown(
              { nodeId: "script1-function-55-36-64-267" },
              __e
            );
            throw __e;
          } finally {
            __tracer.traceExit({ nodeId: "script1-function-55-36-64-267" });
          }
        },
        "function empee_contribution_tax_relief(_ref9) {var age_in = _ref9.age_in,age_0_in = _ref9.age_0_in,salary_0_in = _ref9.salary_0_in,retirement_age_in = _ref9.retirement_age_in,salary_inflation_rate_in = _ref9.salary_inflation_rate_in,empee_contribution_rate_in = _ref9.empee_contribution_rate_in;return (\n    (0, _cul_scope_.income_tax)({ age_in: age_in,\n      gross_salary_in: salary({ age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, age_in: age({ age_in: age_in }) - 1 }),\n      tax_credits_in: 3000,\n      pension_contribution_in: 0 }) -\n\n    (0, _cul_scope_.income_tax)({ age_in: age_in,\n      gross_salary_in: salary({ age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, age_in: age({ age_in: age_in }) - 1 }),\n      tax_credits_in: 3000,\n      pension_contribution_in: empee_contribution({ age_in: age_in, age_0_in: age_0_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in }) }));}"
      );

      // affected by bug: depends on gross_salary_in, for some reason
      // issue #102
      /*export const accumulated_empee_contribution_tax_relief = () => {
    if (age() == age_0() - 1) return 0;
    else
      return (
        accumulated_empee_contribution_tax_relief({ age_in: age() - 1 }) +
        empee_contribution_tax_relief()
      );
  };*/ exports.empee_contribution_tax_relief = empee_contribution_tax_relief;

      var emper_contribution = __tracer.traceFunCreate(
        function emper_contribution(_ref10) {
          try {
            {
              __tracer.traceEnter({
                nodeId: "script1-function-78-25-81-1",
                arguments: __tracer.Array.prototype.slice.apply(arguments),
                this: this,
              });
              {
                var age_in = _ref10.age_in,
                  age_0_in = _ref10.age_0_in,
                  retirement_age_in = _ref10.retirement_age_in,
                  salary_0_in = _ref10.salary_0_in,
                  salary_inflation_rate_in = _ref10.salary_inflation_rate_in,
                  emper_contribution_rate_in =
                    _ref10.emper_contribution_rate_in;
                if (
                  __tracer.traceFunCall({
                    func: age,
                    nodeId: "script1-callsite-79-6-79-29",
                  })({ age_in: age_in }) <=
                    __tracer.traceFunCall({
                      func: age_0,
                      nodeId: "script1-callsite-79-33-79-62",
                    })({ age_0_in: age_0_in }) -
                      1 ||
                  __tracer.traceFunCall({
                    func: age,
                    nodeId: "script1-callsite-79-70-79-93",
                  })({ age_in: age_in }) ==
                    __tracer.traceFunCall({
                      func: retirement_age,
                      nodeId: "script1-callsite-79-97-79-153",
                    })({ retirement_age_in: retirement_age_in })
                )
                  return __tracer.traceReturnValue(0);
                else
                  return __tracer.traceReturnValue(
                    __tracer.traceFunCall({
                      func: salary,
                      nodeId: "script1-callsite-80-9-80-192",
                    })({
                      age_0_in: age_0_in,
                      salary_0_in: salary_0_in,
                      retirement_age_in: retirement_age_in,
                      salary_inflation_rate_in: salary_inflation_rate_in,
                      age_in:
                        __tracer.traceFunCall({
                          func: age,
                          nodeId: "script1-callsite-80-162-80-185",
                        })({ age_in: age_in }) - 1,
                    }) *
                      __tracer.traceFunCall({
                        func: emper_contribution_rate,
                        nodeId: "script1-callsite-80-195-80-278",
                      })({
                        emper_contribution_rate_in: emper_contribution_rate_in,
                      })
                  );
              }
            }
          } catch (__e) {
            __tracer.traceExceptionThrown(
              { nodeId: "script1-function-78-25-81-1" },
              __e
            );
            throw __e;
          } finally {
            __tracer.traceExit({ nodeId: "script1-function-78-25-81-1" });
          }
        },
        "function emper_contribution(_ref10) {var age_in = _ref10.age_in,age_0_in = _ref10.age_0_in,retirement_age_in = _ref10.retirement_age_in,salary_0_in = _ref10.salary_0_in,salary_inflation_rate_in = _ref10.salary_inflation_rate_in,emper_contribution_rate_in = _ref10.emper_contribution_rate_in;\n  if (age({ age_in: age_in }) <= age_0({ age_0_in: age_0_in }) - 1 || age({ age_in: age_in }) == retirement_age({ retirement_age_in: retirement_age_in })) return 0;else\n  return salary({ age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, age_in: age({ age_in: age_in }) - 1 }) * emper_contribution_rate({ emper_contribution_rate_in: emper_contribution_rate_in });\n}"
      );
      exports.emper_contribution = emper_contribution;

      var salary = __tracer.traceFunCreate(function salary(_ref11) {
        try {
          {
            __tracer.traceEnter({
              nodeId: "script1-function-83-13-88-1",
              arguments: __tracer.Array.prototype.slice.apply(arguments),
              this: this,
            });
            {
              var age_in = _ref11.age_in,
                age_0_in = _ref11.age_0_in,
                salary_0_in = _ref11.salary_0_in,
                retirement_age_in = _ref11.retirement_age_in,
                salary_inflation_rate_in = _ref11.salary_inflation_rate_in;
              // at end of year
              if (
                __tracer.traceFunCall({
                  func: age,
                  nodeId: "script1-callsite-85-6-85-29",
                })({ age_in: age_in }) <=
                __tracer.traceFunCall({
                  func: age_0,
                  nodeId: "script1-callsite-85-33-85-62",
                })({ age_0_in: age_0_in }) -
                  1
              )
                return __tracer.traceReturnValue(
                  __tracer.traceFunCall({
                    func: salary_0,
                    nodeId: "script1-callsite-85-75-85-113",
                  })({ salary_0_in: salary_0_in })
                );
              else if (
                __tracer.traceFunCall({
                  func: age,
                  nodeId: "script1-callsite-86-6-86-29",
                })({ age_in: age_in }) >=
                __tracer.traceFunCall({
                  func: retirement_age,
                  nodeId: "script1-callsite-86-33-86-89",
                })({ retirement_age_in: retirement_age_in })
              )
                return __tracer.traceReturnValue(0);
              else
                return __tracer.traceReturnValue(
                  __tracer.traceFunCall({
                    func: salary,
                    nodeId: "script1-callsite-87-9-87-192",
                  })({
                    age_0_in: age_0_in,
                    salary_0_in: salary_0_in,
                    retirement_age_in: retirement_age_in,
                    salary_inflation_rate_in: salary_inflation_rate_in,
                    age_in:
                      __tracer.traceFunCall({
                        func: age,
                        nodeId: "script1-callsite-87-162-87-185",
                      })({ age_in: age_in }) - 1,
                  }) *
                    (1 +
                      __tracer.traceFunCall({
                        func: salary_inflation_rate,
                        nodeId: "script1-callsite-87-200-87-277",
                      })({
                        salary_inflation_rate_in: salary_inflation_rate_in,
                      }))
                ); // < age_0 = undefined, any way/use to capture this statically?
            }
          }
        } catch (__e) {
          __tracer.traceExceptionThrown(
            { nodeId: "script1-function-83-13-88-1" },
            __e
          );
          throw __e;
        } finally {
          __tracer.traceExit({ nodeId: "script1-function-83-13-88-1" });
        }
      }, "function salary(_ref11) {var age_in = _ref11.age_in,age_0_in = _ref11.age_0_in,salary_0_in = _ref11.salary_0_in,retirement_age_in = _ref11.retirement_age_in,salary_inflation_rate_in = _ref11.salary_inflation_rate_in;\n  // at end of year\n  if (age({ age_in: age_in }) <= age_0({ age_0_in: age_0_in }) - 1) return salary_0({ salary_0_in: salary_0_in });else\n  if (age({ age_in: age_in }) >= retirement_age({ retirement_age_in: retirement_age_in })) return 0;else\n  return salary({ age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, age_in: age({ age_in: age_in }) - 1 }) * (1 + salary_inflation_rate({ salary_inflation_rate_in: salary_inflation_rate_in })); // < age_0 = undefined, any way/use to capture this statically?\n}");
      exports.salary = salary;

      var projected_fund_value = __tracer.traceFunCreate(
        function projected_fund_value(_ref12) {
          try {
            {
              __tracer.traceEnter({
                nodeId: "script1-function-90-27-92-459",
                arguments: __tracer.Array.prototype.slice.apply(arguments),
                this: this,
              });
              {
                var age_0_in = _ref12.age_0_in,
                  fund_value_0_in = _ref12.fund_value_0_in,
                  unit_growth_rate_in = _ref12.unit_growth_rate_in,
                  retirement_age_in = _ref12.retirement_age_in,
                  salary_0_in = _ref12.salary_0_in,
                  salary_inflation_rate_in = _ref12.salary_inflation_rate_in,
                  empee_contribution_rate_in =
                    _ref12.empee_contribution_rate_in,
                  emper_contribution_rate_in =
                    _ref12.emper_contribution_rate_in,
                  contribution_charge_in = _ref12.contribution_charge_in;
                return (
                  // at retirement:
                  __tracer.traceReturnValue(
                    __tracer.traceFunCall({
                      func: fund_value,
                      nodeId: "script1-callsite-92-4-92-456",
                    })({
                      age_0_in: age_0_in,
                      fund_value_0_in: fund_value_0_in,
                      unit_growth_rate_in: unit_growth_rate_in,
                      retirement_age_in: retirement_age_in,
                      salary_0_in: salary_0_in,
                      salary_inflation_rate_in: salary_inflation_rate_in,
                      empee_contribution_rate_in: empee_contribution_rate_in,
                      emper_contribution_rate_in: emper_contribution_rate_in,
                      contribution_charge_in: contribution_charge_in,
                      age_in: __tracer.traceFunCall({
                        func: retirement_age,
                        nodeId: "script1-callsite-92-397-92-453",
                      })({ retirement_age_in: retirement_age_in }),
                    })
                  )
                );
              }
            }
          } catch (__e) {
            __tracer.traceExceptionThrown(
              { nodeId: "script1-function-90-27-92-459" },
              __e
            );
            throw __e;
          } finally {
            __tracer.traceExit({ nodeId: "script1-function-90-27-92-459" });
          }
        },
        "function projected_fund_value(_ref12) {var age_0_in = _ref12.age_0_in,fund_value_0_in = _ref12.fund_value_0_in,unit_growth_rate_in = _ref12.unit_growth_rate_in,retirement_age_in = _ref12.retirement_age_in,salary_0_in = _ref12.salary_0_in,salary_inflation_rate_in = _ref12.salary_inflation_rate_in,empee_contribution_rate_in = _ref12.empee_contribution_rate_in,emper_contribution_rate_in = _ref12.emper_contribution_rate_in,contribution_charge_in = _ref12.contribution_charge_in;return (\n    // at retirement:\n    fund_value({ age_0_in: age_0_in, fund_value_0_in: fund_value_0_in, unit_growth_rate_in: unit_growth_rate_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in, emper_contribution_rate_in: emper_contribution_rate_in, contribution_charge_in: contribution_charge_in, age_in: retirement_age({ retirement_age_in: retirement_age_in }) }));}"
      );
      exports.projected_fund_value = projected_fund_value;

      var salaries_per_projected_fund = __tracer.traceFunCreate(
        function salaries_per_projected_fund(_ref13) {
          try {
            {
              __tracer.traceEnter({
                nodeId: "script1-function-94-34-95-622",
                arguments: __tracer.Array.prototype.slice.apply(arguments),
                this: this,
              });
              {
                var age_0_in = _ref13.age_0_in,
                  fund_value_0_in = _ref13.fund_value_0_in,
                  unit_growth_rate_in = _ref13.unit_growth_rate_in,
                  retirement_age_in = _ref13.retirement_age_in,
                  salary_0_in = _ref13.salary_0_in,
                  salary_inflation_rate_in = _ref13.salary_inflation_rate_in,
                  empee_contribution_rate_in =
                    _ref13.empee_contribution_rate_in,
                  emper_contribution_rate_in =
                    _ref13.emper_contribution_rate_in,
                  contribution_charge_in = _ref13.contribution_charge_in;
                return __tracer.traceReturnValue(
                  __tracer.traceFunCall({
                    func: projected_fund_value,
                    nodeId: "script1-callsite-95-4-95-400",
                  })({
                    age_0_in: age_0_in,
                    fund_value_0_in: fund_value_0_in,
                    unit_growth_rate_in: unit_growth_rate_in,
                    retirement_age_in: retirement_age_in,
                    salary_0_in: salary_0_in,
                    salary_inflation_rate_in: salary_inflation_rate_in,
                    empee_contribution_rate_in: empee_contribution_rate_in,
                    emper_contribution_rate_in: emper_contribution_rate_in,
                    contribution_charge_in: contribution_charge_in,
                  }) /
                    __tracer.traceFunCall({
                      func: salary,
                      nodeId: "script1-callsite-95-403-95-619",
                    })({
                      age_0_in: age_0_in,
                      salary_0_in: salary_0_in,
                      retirement_age_in: retirement_age_in,
                      salary_inflation_rate_in: salary_inflation_rate_in,
                      age_in:
                        __tracer.traceFunCall({
                          func: retirement_age,
                          nodeId: "script1-callsite-95-556-95-612",
                        })({ retirement_age_in: retirement_age_in }) - 1,
                    })
                );
              }
            }
          } catch (__e) {
            __tracer.traceExceptionThrown(
              { nodeId: "script1-function-94-34-95-622" },
              __e
            );
            throw __e;
          } finally {
            __tracer.traceExit({ nodeId: "script1-function-94-34-95-622" });
          }
        },
        "function salaries_per_projected_fund(_ref13) {var age_0_in = _ref13.age_0_in,fund_value_0_in = _ref13.fund_value_0_in,unit_growth_rate_in = _ref13.unit_growth_rate_in,retirement_age_in = _ref13.retirement_age_in,salary_0_in = _ref13.salary_0_in,salary_inflation_rate_in = _ref13.salary_inflation_rate_in,empee_contribution_rate_in = _ref13.empee_contribution_rate_in,emper_contribution_rate_in = _ref13.emper_contribution_rate_in,contribution_charge_in = _ref13.contribution_charge_in;return (\n    projected_fund_value({ age_0_in: age_0_in, fund_value_0_in: fund_value_0_in, unit_growth_rate_in: unit_growth_rate_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in, emper_contribution_rate_in: emper_contribution_rate_in, contribution_charge_in: contribution_charge_in }) / salary({ age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, age_in: retirement_age({ retirement_age_in: retirement_age_in }) - 1 }));}"
      );

      // explicit inputs ::

      // using age and age_0 (starting age) as inputs, rather than year/time and age_0.
      exports.salaries_per_projected_fund = salaries_per_projected_fund;
      var age = __tracer.traceFunCreate(function age(_ref14) {
        try {
          {
            __tracer.traceEnter({
              nodeId: "script1-function-100-76-100-140",
              arguments: __tracer.Array.prototype.slice.apply(arguments),
              this: this,
            });
            {
              var age_in = _ref14.age_in;
              return __tracer.traceReturnValue(age_in);
            }
          }
        } catch (__e) {
          __tracer.traceExceptionThrown(
            { nodeId: "script1-function-100-76-100-140" },
            __e
          );
          throw __e;
        } finally {
          __tracer.traceExit({ nodeId: "script1-function-100-76-100-140" });
        }
      }, "function age(_ref14) {var age_in = _ref14.age_in;return age_in;}"); // input
      exports.age = age;
      var age_0 = __tracer.traceFunCreate(function age_0(_ref15) {
        try {
          {
            __tracer.traceEnter({
              nodeId: "script1-function-101-30-101-102",
              arguments: __tracer.Array.prototype.slice.apply(arguments),
              this: this,
            });
            {
              var age_0_in = _ref15.age_0_in;
              return __tracer.traceReturnValue(age_0_in);
            }
          }
        } catch (__e) {
          __tracer.traceExceptionThrown(
            { nodeId: "script1-function-101-30-101-102" },
            __e
          );
          throw __e;
        } finally {
          __tracer.traceExit({ nodeId: "script1-function-101-30-101-102" });
        }
      }, "function age_0(_ref15) {var age_0_in = _ref15.age_0_in;return age_0_in;}");
      exports.age_0 = age_0;

      var retirement_age = __tracer.traceFunCreate(function retirement_age(
        _ref16
      ) {
        try {
          {
            __tracer.traceEnter({
              nodeId: "script1-function-103-21-103-129",
              arguments: __tracer.Array.prototype.slice.apply(arguments),
              this: this,
            });
            {
              var retirement_age_in = _ref16.retirement_age_in;
              return __tracer.traceReturnValue(retirement_age_in);
            }
          }
        } catch (__e) {
          __tracer.traceExceptionThrown(
            { nodeId: "script1-function-103-21-103-129" },
            __e
          );
          throw __e;
        } finally {
          __tracer.traceExit({ nodeId: "script1-function-103-21-103-129" });
        }
      },
      "function retirement_age(_ref16) {var retirement_age_in = _ref16.retirement_age_in;return retirement_age_in;}");
      exports.retirement_age = retirement_age;
      var salary_0 = __tracer.traceFunCreate(function salary_0(_ref17) {
        try {
          {
            __tracer.traceEnter({
              nodeId: "script1-function-104-15-104-99",
              arguments: __tracer.Array.prototype.slice.apply(arguments),
              this: this,
            });
            {
              var salary_0_in = _ref17.salary_0_in;
              return __tracer.traceReturnValue(salary_0_in);
            }
          }
        } catch (__e) {
          __tracer.traceExceptionThrown(
            { nodeId: "script1-function-104-15-104-99" },
            __e
          );
          throw __e;
        } finally {
          __tracer.traceExit({ nodeId: "script1-function-104-15-104-99" });
        }
      }, "function salary_0(_ref17) {var salary_0_in = _ref17.salary_0_in;return salary_0_in;}");
      exports.salary_0 = salary_0;
      var salary_inflation_rate = __tracer.traceFunCreate(
        function salary_inflation_rate(_ref18) {
          try {
            {
              __tracer.traceEnter({
                nodeId: "script1-function-105-28-105-164",
                arguments: __tracer.Array.prototype.slice.apply(arguments),
                this: this,
              });
              {
                var salary_inflation_rate_in = _ref18.salary_inflation_rate_in;
                return __tracer.traceReturnValue(salary_inflation_rate_in);
              }
            }
          } catch (__e) {
            __tracer.traceExceptionThrown(
              { nodeId: "script1-function-105-28-105-164" },
              __e
            );
            throw __e;
          } finally {
            __tracer.traceExit({ nodeId: "script1-function-105-28-105-164" });
          }
        },
        "function salary_inflation_rate(_ref18) {var salary_inflation_rate_in = _ref18.salary_inflation_rate_in;return salary_inflation_rate_in;}"
      );
      exports.salary_inflation_rate = salary_inflation_rate;
      var empee_contribution_rate = __tracer.traceFunCreate(
        function empee_contribution_rate(_ref19) {
          try {
            {
              __tracer.traceEnter({
                nodeId: "script1-function-106-30-106-174",
                arguments: __tracer.Array.prototype.slice.apply(arguments),
                this: this,
              });
              {
                var empee_contribution_rate_in =
                  _ref19.empee_contribution_rate_in;
                return __tracer.traceReturnValue(empee_contribution_rate_in);
              }
            }
          } catch (__e) {
            __tracer.traceExceptionThrown(
              { nodeId: "script1-function-106-30-106-174" },
              __e
            );
            throw __e;
          } finally {
            __tracer.traceExit({ nodeId: "script1-function-106-30-106-174" });
          }
        },
        "function empee_contribution_rate(_ref19) {var empee_contribution_rate_in = _ref19.empee_contribution_rate_in;return empee_contribution_rate_in;}"
      );
      exports.empee_contribution_rate = empee_contribution_rate;
      var emper_contribution_rate = __tracer.traceFunCreate(
        function emper_contribution_rate(_ref20) {
          try {
            {
              __tracer.traceEnter({
                nodeId: "script1-function-107-30-107-174",
                arguments: __tracer.Array.prototype.slice.apply(arguments),
                this: this,
              });
              {
                var emper_contribution_rate_in =
                  _ref20.emper_contribution_rate_in;
                return __tracer.traceReturnValue(emper_contribution_rate_in);
              }
            }
          } catch (__e) {
            __tracer.traceExceptionThrown(
              { nodeId: "script1-function-107-30-107-174" },
              __e
            );
            throw __e;
          } finally {
            __tracer.traceExit({ nodeId: "script1-function-107-30-107-174" });
          }
        },
        "function emper_contribution_rate(_ref20) {var emper_contribution_rate_in = _ref20.emper_contribution_rate_in;return emper_contribution_rate_in;}"
      );
      exports.emper_contribution_rate = emper_contribution_rate;

      var unit_growth_rate = __tracer.traceFunCreate(function unit_growth_rate(
        _ref21
      ) {
        try {
          {
            __tracer.traceEnter({
              nodeId: "script1-function-109-23-109-139",
              arguments: __tracer.Array.prototype.slice.apply(arguments),
              this: this,
            });
            {
              var unit_growth_rate_in = _ref21.unit_growth_rate_in;
              return __tracer.traceReturnValue(unit_growth_rate_in);
            }
          }
        } catch (__e) {
          __tracer.traceExceptionThrown(
            { nodeId: "script1-function-109-23-109-139" },
            __e
          );
          throw __e;
        } finally {
          __tracer.traceExit({ nodeId: "script1-function-109-23-109-139" });
        }
      },
      "function unit_growth_rate(_ref21) {var unit_growth_rate_in = _ref21.unit_growth_rate_in;return unit_growth_rate_in;}");
      exports.unit_growth_rate = unit_growth_rate;

      var fund_value_0 = __tracer.traceFunCreate(function fund_value_0(_ref22) {
        try {
          {
            __tracer.traceEnter({
              nodeId: "script1-function-111-19-111-119",
              arguments: __tracer.Array.prototype.slice.apply(arguments),
              this: this,
            });
            {
              var fund_value_0_in = _ref22.fund_value_0_in;
              return __tracer.traceReturnValue(fund_value_0_in);
            }
          }
        } catch (__e) {
          __tracer.traceExceptionThrown(
            { nodeId: "script1-function-111-19-111-119" },
            __e
          );
          throw __e;
        } finally {
          __tracer.traceExit({ nodeId: "script1-function-111-19-111-119" });
        }
      }, "function fund_value_0(_ref22) {var fund_value_0_in = _ref22.fund_value_0_in;return fund_value_0_in;}");
      exports.fund_value_0 = fund_value_0;

      var contribution_charge = __tracer.traceFunCreate(
        function contribution_charge(_ref23) {
          try {
            {
              __tracer.traceEnter({
                nodeId: "script1-function-113-26-113-154",
                arguments: __tracer.Array.prototype.slice.apply(arguments),
                this: this,
              });
              {
                var contribution_charge_in = _ref23.contribution_charge_in;
                return __tracer.traceReturnValue(contribution_charge_in);
              }
            }
          } catch (__e) {
            __tracer.traceExceptionThrown(
              { nodeId: "script1-function-113-26-113-154" },
              __e
            );
            throw __e;
          } finally {
            __tracer.traceExit({ nodeId: "script1-function-113-26-113-154" });
          }
        },
        "function contribution_charge(_ref23) {var contribution_charge_in = _ref23.contribution_charge_in;return contribution_charge_in;}"
      );
      exports.contribution_charge = contribution_charge;

      //# sourceMappingURL=cul_scope_0-babeled.js.map
    }
  } finally {
    __tracer.traceFileExit({ nodeId: "script1-toplevel-1-0-116-0" });
  }
}
module.exports = exports; // DN
module.exports.__tracer = __tracer;
