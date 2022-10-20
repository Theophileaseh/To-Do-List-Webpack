/** *** */ (() => { // webpackBootstrap
/** *** */ 	const __webpack_modules__ = ({

    /***/ './src/index.js':
    /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ const _modules_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/storage */ './src/modules/storage.js');
      /* harmony import */ const _modules_formsubmit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/formsubmit */ './src/modules/formsubmit.js');
      /***/ }),

    /***/ './src/modules/formsubmit.js':
    /*! ***********************************!*\
  !*** ./src/modules/formsubmit.js ***!
  \********************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ const _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ './src/modules/storage.js');

      const list = document.querySelector('#list');
      const formSubmit = document.querySelector('.form');
      function alerts(message) {
        // eslint-disable-next-line no-alert
        alert(message);
      }
      formSubmit.addEventListener('submit', (event) => {
        const listInput = {
          list: list.value,
          isCompleted: false,
        };
        const result = _storage__WEBPACK_IMPORTED_MODULE_0__.listArray.filter((elem) => elem.list === listInput.list);
        if (list.value === '') {
          event.preventDefault();
        } else if (result.length !== 0) {
          alerts('Sorry Task already exists');
        } else {
          _storage__WEBPACK_IMPORTED_MODULE_0__.listArray.push(listInput);
          (0, _storage__WEBPACK_IMPORTED_MODULE_0__.addList)();
          list.value = '';
          alerts('Congratulations. Task successfully added!');
        }
      });
      /***/ }),

    /***/ './src/modules/storage.js':
    /*! ********************************!*\
  !*** ./src/modules/storage.js ***!
  \******************************* */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ addList: () => (/* binding */ addList),
        /* harmony export */ listArray: () => (/* binding */ listArray),
        /* harmony export */ });
      const listsList = document.querySelector('.today-lists');
var listArray = []; // eslint-disable-line

      /* eslint-disable no-unused-vars */

      var addList = function addList() {
        const allLists = listArray.map((_ref, index) => {
          const { list } = _ref;
          const { isCompleted } = _ref;
          return '<div class="single-list div-style" id='.concat(index, '  isCompleted=').concat(isCompleted, '  draggable="true">\n          <form class="single-list-form">\n            <input type="checkbox" class="checkbox">\n            <input type="text" class="single-list-input main-inputs" value="').concat(list, "\" >\n          </form>\n          <div class=\"single-list-action-button\">\n          <button class = \"delete-btn\" onClick=\"removeList('").concat(list, "')\">\n           <i class=\"fa-solid fa-trash-can\"></i></button>\n            <button class = \"move-btn\" >\n            <i class=\"fa-solid fa-ellipsis-vertical\"></i></button>\n          </div>\n        </div>");
        });
        if (listArray.length === 0) {
          listsList.innerHTML = '<h3 class="no-books-notification">Sorry there are no tasks available</h3>';
        } else {
          listsList.innerHTML = allLists;
        }
        localStorage.setItem('listData', JSON.stringify(listArray));
      };

      /* eslint-disable no-unused-vars */

      window.removeList = function (list) {
        listArray = listArray.filter((elem) => elem.list !== list);
        addList();
        // console.log('removed');
      };

      window.addEventListener('DOMContentLoaded', (e) => {
        const lists = JSON.parse(localStorage.getItem('listData'));
        if (lists === null) {
          listArray = [{
            list: 'wash the dishes',
          }, {
            list: 'complete To Do list project',
          }];
        } else {
          listArray = lists;
        }
        addList();
      });

      // input field of list clicked event

      listsList.addEventListener('focusin', (e) => {});
      listsList.addEventListener('focusout', (e) => {
        const inputValue = e.target.value;
        const { id } = e.target.parentNode.parentNode;
        listArray.forEach((listItem, index) => {
          listArray[id].list = inputValue;
        });
        localStorage.setItem('listData', JSON.stringify(listArray));
      });

      // load window event

      window.addEventListener('load', (e) => {
        const allTexts = document.querySelectorAll('[isCompleted=true]');
        allTexts.forEach((items) => {
          items.childNodes[1][0].setAttribute('checked', 'true');
          items.childNodes[1][1].setAttribute('disabled', 'true');
          items.childNodes[1][1].classList.add('line-through');
        });
      });

      // checkbox event
      const checkbox = document.querySelector('.checkbox');
      listsList.addEventListener('change', (e) => {
        if (e.target.className.includes('checkbox')) {
          const { checked } = e.target;
          const text = e.target.parentNode.querySelector('.single-list-input');
          const listValue = e.target.parentNode.querySelector('.single-list-input').value;
          const { id } = e.target.parentNode.parentNode;
          if (checked) {
            listArray[id].isCompleted = true;
            //  listArray[id].list = listValue;
            text.classList.add('line-through');
            text.setAttribute('disabled', 'true');
          } else {
            text.classList.remove('line-through');
            listArray[id].isCompleted = false;
            text.setAttribute('disabled', 'false');
            //  listArray[id].list = listValue;
          }

          localStorage.setItem('listData', JSON.stringify(listArray));
        }
      });

      // Remove completed list

      window.removeIsCompleted = function () {
        listArray = listArray.filter((elem) => elem.isCompleted !== true);
        addList();
      };

      // Refresh window

      window.refresh = function () {
        window.history.go(0);
      };

      // draggable
      /***/ }),

    /***/ './node_modules/babel-regenerator-runtime/runtime.js':
    /*! ***********************************************************!*\
  !*** ./node_modules/babel-regenerator-runtime/runtime.js ***!
  \********************************************************** */
    /***/ (function (module, __unused_webpack_exports, __webpack_require__) {
      /**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

      !(function (global) {
        const hasOwn = Object.prototype.hasOwnProperty;
        let undefined; // More compressible than void 0.
        const iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator || '@@iterator';

        const inModule = 'object' === 'object';
        let runtime = global.regeneratorRuntime;
        if (runtime) {
          if (inModule) {
            // If regeneratorRuntime is defined globally and we're in a module,
            // make the exports object identical to regeneratorRuntime.
            module.exports = runtime;
          }
          // Don't bother evaluating the rest of this file if the runtime was
          // already defined globally.
          return;
        }

        // Define the runtime globally (as expected by generated code) as either
        // module.exports (if we're in a module) or a new, empty object.
        runtime = global.regeneratorRuntime = inModule ? module.exports : {};

        function wrap(innerFn, outerFn, self, tryLocsList) {
          // If outerFn provided, then outerFn.prototype instanceof Generator.
          const generator = Object.create((outerFn || Generator).prototype);
          const context = new Context(tryLocsList || []);

          // The ._invoke method unifies the implementations of the .next,
          // .throw, and .return methods.
          generator._invoke = makeInvokeMethod(innerFn, self, context);

          return generator;
        }
        runtime.wrap = wrap;

        // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.
        function tryCatch(fn, obj, arg) {
          try {
            return { type: 'normal', arg: fn.call(obj, arg) };
          } catch (err) {
            return { type: 'throw', arg: err };
          }
        }

        const GenStateSuspendedStart = 'suspendedStart';
        const GenStateSuspendedYield = 'suspendedYield';
        const GenStateExecuting = 'executing';
        const GenStateCompleted = 'completed';

        // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.
        const ContinueSentinel = {};

        // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}

        const Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunction.displayName = 'GeneratorFunction';

        // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.
        function defineIteratorMethods(prototype) {
          ['next', 'throw', 'return'].forEach((method) => {
            prototype[method] = function (arg) {
              return this._invoke(method, arg);
            };
          });
        }

        runtime.isGeneratorFunction = function (genFun) {
          const ctor = typeof genFun === 'function' && genFun.constructor;
          return ctor
            ? ctor === GeneratorFunction
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        || (ctor.displayName || ctor.name) === 'GeneratorFunction'
            : false;
        };

        runtime.mark = function (genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype;
          }
          genFun.prototype = Object.create(Gp);
          return genFun;
        };

        // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `value instanceof AwaitArgument` to determine if the yielded value is
        // meant to be awaited. Some may consider the name of this method too
        // cutesy, but they are curmudgeons.
        runtime.awrap = function (arg) {
          return new AwaitArgument(arg);
        };

        function AwaitArgument(arg) {
          this.arg = arg;
        }

        function AsyncIterator(generator) {
          // This invoke function is written in a style that assumes some
          // calling function (or Promise) will handle exceptions.
          function invoke(method, arg) {
            const result = generator[method](arg);
            const { value } = result;
            return value instanceof AwaitArgument
              ? Promise.resolve(value.arg).then(invokeNext, invokeThrow)
              : Promise.resolve(value).then((unwrapped) => {
                // When a yielded Promise is resolved, its final value becomes
                // the .value of the Promise<{value,done}> result for the
                // current iteration. If the Promise is rejected, however, the
                // result for this iteration will be rejected with the same
                // reason. Note that rejections of yielded Promises are not
                // thrown back into the generator function, as is the case
                // when an awaited Promise is rejected. This difference in
                // behavior between yield and await is important, because it
                // allows the consumer to decide what to do with the yielded
                // rejection (swallow it and continue, manually .throw it back
                // into the generator, abandon iteration, whatever). With
                // await, by contrast, there is no opportunity to examine the
                // rejection reason outside the generator function, so the
                // only option is to throw it from the await expression, and
                // let the generator function handle the exception.
                result.value = unwrapped;
                return result;
              });
          }

          if (typeof process === 'object' && process.domain) {
            invoke = process.domain.bind(invoke);
          }

          var invokeNext = invoke.bind(generator, 'next');
          var invokeThrow = invoke.bind(generator, 'throw');
          const invokeReturn = invoke.bind(generator, 'return');
          let previousPromise;

          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return invoke(method, arg);
            }

            return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg,
        ) : new Promise((resolve) => {
          resolve(callInvokeWithMethodAndArg());
        });
          }

          // Define the unified helper method that is used to implement .next,
          // .throw, and .return (see defineIteratorMethods).
          this._invoke = enqueue;
        }

        defineIteratorMethods(AsyncIterator.prototype);

        // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.
        runtime.async = function (innerFn, outerFn, self, tryLocsList) {
          const iter = new AsyncIterator(
            wrap(innerFn, outerFn, self, tryLocsList),
          );

          return runtime.isGeneratorFunction(outerFn)
            ? iter // If outerFn is a generator, return the full iterator.
            : iter.next().then((result) => (result.done ? result.value : iter.next()));
        };

        function makeInvokeMethod(innerFn, self, context) {
          let state = GenStateSuspendedStart;

          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error('Generator is already running');
            }

            if (state === GenStateCompleted) {
              if (method === 'throw') {
                throw arg;
              }

              // Be forgiving, per 25.3.3.3.3 of the spec:
              // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
              return doneResult();
            }

            while (true) {
              const { delegate } = context;
              if (delegate) {
                if (method === 'return'
              || (method === 'throw' && delegate.iterator[method] === undefined)) {
                  // A return or throw (when the delegate iterator has no throw
                  // method) always terminates the yield* loop.
                  context.delegate = null;

                  // If the delegate iterator has a return method, give it a
                  // chance to clean up.
                  const returnMethod = delegate.iterator.return;
                  if (returnMethod) {
                    var record = tryCatch(returnMethod, delegate.iterator, arg);
                    if (record.type === 'throw') {
                      // If the return method threw an exception, let that
                      // exception prevail over the original return or throw.
                      method = 'throw';
                      arg = record.arg;
                      continue;
                    }
                  }

                  if (method === 'return') {
                    // Continue with the outer return, now that the delegate
                    // iterator has been terminated.
                    continue;
                  }
                }

                var record = tryCatch(
                  delegate.iterator[method],
                  delegate.iterator,
                  arg,
                );

                if (record.type === 'throw') {
                  context.delegate = null;

                  // Like returning generator.throw(uncaught), but without the
                  // overhead of an extra function call.
                  method = 'throw';
                  arg = record.arg;
                  continue;
                }

                // Delegate generator ran and handled its own exceptions so
                // regardless of what the method was, we continue as if it is
                // "next" with an undefined arg.
                method = 'next';
                arg = undefined;

                var info = record.arg;
                if (info.done) {
                  context[delegate.resultName] = info.value;
                  context.next = delegate.nextLoc;
                } else {
                  state = GenStateSuspendedYield;
                  return info;
                }

                context.delegate = null;
              }

              if (method === 'next') {
                context._sent = arg;

                if (state === GenStateSuspendedYield) {
                  context.sent = arg;
                } else {
                  context.sent = undefined;
                }
              } else if (method === 'throw') {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw arg;
                }

                if (context.dispatchException(arg)) {
                  // If the dispatched exception was caught by a catch block,
                  // then let that catch block handle the exception normally.
                  method = 'next';
                  arg = undefined;
                }
              } else if (method === 'return') {
                context.abrupt('return', arg);
              }

              state = GenStateExecuting;

              var record = tryCatch(innerFn, self, context);
              if (record.type === 'normal') {
                // If an exception is thrown from innerFn, we leave state ===
                // GenStateExecuting and loop back for another invocation.
                state = context.done
                  ? GenStateCompleted
                  : GenStateSuspendedYield;

                var info = {
                  value: record.arg,
                  done: context.done,
                };

                if (record.arg === ContinueSentinel) {
                  if (context.delegate && method === 'next') {
                    // Deliberately forget the last sent value so that we don't
                    // accidentally pass it on to the delegate.
                    arg = undefined;
                  }
                } else {
                  return info;
                }
              } else if (record.type === 'throw') {
                state = GenStateCompleted;
                // Dispatch the exception by looping back around to the
                // context.dispatchException(arg) call above.
                method = 'throw';
                arg = record.arg;
              }
            }
          };
        }

        // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.
        defineIteratorMethods(Gp);

        Gp[iteratorSymbol] = function () {
          return this;
        };

        Gp.toString = function () {
          return '[object Generator]';
        };

        function pushTryEntry(locs) {
          const entry = { tryLoc: locs[0] };

          if (1 in locs) {
            entry.catchLoc = locs[1];
          }

          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }

          this.tryEntries.push(entry);
        }

        function resetTryEntry(entry) {
          const record = entry.completion || {};
          record.type = 'normal';
          delete record.arg;
          entry.completion = record;
        }

        function Context(tryLocsList) {
          // The root entry object (effectively a try statement without a catch
          // or a finally block) gives us a place to store values thrown from
          // locations where there is no enclosing try statement.
          this.tryEntries = [{ tryLoc: 'root' }];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }

        runtime.keys = function (object) {
          const keys = [];
          for (const key in object) {
            keys.push(key);
          }
          keys.reverse();

          // Rather than returning an object with a next method, we keep
          // things simple and return the next function itself.
          return function next() {
            while (keys.length) {
              const key = keys.pop();
              if (key in object) {
                next.value = key;
                next.done = false;
                return next;
              }
            }

            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
          };
        };

        function values(iterable) {
          if (iterable) {
            const iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) {
              return iteratorMethod.call(iterable);
            }

            if (typeof iterable.next === 'function') {
              return iterable;
            }

            if (!isNaN(iterable.length)) {
              let i = -1; const
                next = function next() {
                  while (++i < iterable.length) {
                    if (hasOwn.call(iterable, i)) {
                      next.value = iterable[i];
                      next.done = false;
                      return next;
                    }
                  }

                  next.value = undefined;
                  next.done = true;

                  return next;
                };

              return next.next = next;
            }
          }

          // Return an iterator with no values.
          return { next: doneResult };
        }
        runtime.values = values;

        function doneResult() {
          return { value: undefined, done: true };
        }

        Context.prototype = {
          constructor: Context,

          reset(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            this.sent = undefined;
            this.done = false;
            this.delegate = null;

            this.tryEntries.forEach(resetTryEntry);

            if (!skipTempReset) {
              for (const name in this) {
                // Not sure about the optimal order of these conditions:
                if (name.charAt(0) === 't'
              && hasOwn.call(this, name)
              && !isNaN(+name.slice(1))) {
                  this[name] = undefined;
                }
              }
            }
          },

          stop() {
            this.done = true;

            const rootEntry = this.tryEntries[0];
            const rootRecord = rootEntry.completion;
            if (rootRecord.type === 'throw') {
              throw rootRecord.arg;
            }

            return this.rval;
          },

          dispatchException(exception) {
            if (this.done) {
              throw exception;
            }

            const context = this;
            function handle(loc, caught) {
              record.type = 'throw';
              record.arg = exception;
              context.next = loc;
              return !!caught;
            }

            for (let i = this.tryEntries.length - 1; i >= 0; --i) {
              const entry = this.tryEntries[i];
              var record = entry.completion;

              if (entry.tryLoc === 'root') {
                // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle('end');
              }

              if (entry.tryLoc <= this.prev) {
                const hasCatch = hasOwn.call(entry, 'catchLoc');
                const hasFinally = hasOwn.call(entry, 'finallyLoc');

                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  } if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else {
                  throw new Error('try statement without catch or finally');
                }
              }
            }
          },

          abrupt(type, arg) {
            for (let i = this.tryEntries.length - 1; i >= 0; --i) {
              const entry = this.tryEntries[i];
              if (entry.tryLoc <= this.prev
            && hasOwn.call(entry, 'finallyLoc')
            && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }

            if (finallyEntry
          && (type === 'break'
           || type === 'continue')
          && finallyEntry.tryLoc <= arg
          && arg <= finallyEntry.finallyLoc) {
              // Ignore the finally entry if control is not jumping to a
              // location outside the try/catch block.
              finallyEntry = null;
            }

            const record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;

            if (finallyEntry) {
              this.next = finallyEntry.finallyLoc;
            } else {
              this.complete(record);
            }

            return ContinueSentinel;
          },

          complete(record, afterLoc) {
            if (record.type === 'throw') {
              throw record.arg;
            }

            if (record.type === 'break'
          || record.type === 'continue') {
              this.next = record.arg;
            } else if (record.type === 'return') {
              this.rval = record.arg;
              this.next = 'end';
            } else if (record.type === 'normal' && afterLoc) {
              this.next = afterLoc;
            }
          },

          finish(finallyLoc) {
            for (let i = this.tryEntries.length - 1; i >= 0; --i) {
              const entry = this.tryEntries[i];
              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },

          catch(tryLoc) {
            for (let i = this.tryEntries.length - 1; i >= 0; --i) {
              const entry = this.tryEntries[i];
              if (entry.tryLoc === tryLoc) {
                const record = entry.completion;
                if (record.type === 'throw') {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }
                return thrown;
              }
            }

            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error('illegal catch attempt');
          },

          delegateYield(iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName,
              nextLoc,
            };

            return ContinueSentinel;
          },
        };
      }(
        // Among the various tricks for obtaining a reference to the global
        // object, this seems to be the most reliable technique that does not
        // use indirect eval (which violates Content Security Policy).
        typeof __webpack_require__.g === 'object' ? __webpack_require__.g
          : typeof window === 'object' ? window
            : typeof self === 'object' ? self : this,
      ));
      /***/ }),

    /** *** */ 	});
  /** ********************************************************************* */
  /** *** */ 	// The module cache
  /** *** */ 	const __webpack_module_cache__ = {};
  /** *** */
  /** *** */ 	// The require function
  /** *** */ 	function __webpack_require__(moduleId) {
    /** *** */ 		// Check if module is in cache
    /** *** */ 		const cachedModule = __webpack_module_cache__[moduleId];
    /** *** */ 		if (cachedModule !== undefined) {
      /** *** */ 			return cachedModule.exports;
      /** *** */ 		}
    /** *** */ 		// Create a new module (and put it into the cache)
    /** *** */ 		const module = __webpack_module_cache__[moduleId] = {
      /** *** */ 			// no module.id needed
      /** *** */ 			// no module.loaded needed
      /** *** */ 			exports: {},
      /** *** */ 		};
    /** *** */
    /** *** */ 		// Execute the module function
    /** *** */ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /** *** */
    /** *** */ 		// Return the exports of the module
    /** *** */ 		return module.exports;
    /** *** */ 	}
  /** *** */
  /** ********************************************************************* */
  /** *** */ 	/* webpack/runtime/define property getters */
  /** *** */ 	(() => {
    /** *** */ 		// define getter functions for harmony exports
    /** *** */ 		__webpack_require__.d = (exports, definition) => {
      /** *** */ 			for (const key in definition) {
        /** *** */ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /** *** */ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /** *** */ 				}
        /** *** */ 			}
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/global */
  /** *** */ 	(() => {
    /** *** */ 		__webpack_require__.g = (function () {
      /** *** */ 			if (typeof globalThis === 'object') return globalThis;
      /** *** */ 			try {
        /** *** */ 				return this || new Function('return this')();
        /** *** */ 			} catch (e) {
        /** *** */ 				if (typeof window === 'object') return window;
        /** *** */ 			}
      /** *** */ 		}());
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/hasOwnProperty shorthand */
  /** *** */ 	(() => {
    /** *** */ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/make namespace object */
  /** *** */ 	(() => {
    /** *** */ 		// define __esModule on exports
    /** *** */ 		__webpack_require__.r = (exports) => {
      /** *** */ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /** *** */ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /** *** */ 			}
      /** *** */ 			Object.defineProperty(exports, '__esModule', { value: true });
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** ********************************************************************* */
  /** *** */
  /** *** */ 	// startup
  /** *** */ 	// Load entry module and return exports
  /** *** */ 	// This entry module is referenced by other modules so it can't be inlined
  /** *** */ 	__webpack_require__('./node_modules/babel-regenerator-runtime/runtime.js');
  /** *** */ 	const __webpack_exports__ = __webpack_require__('./src/index.js');
/** *** */
/** *** */ })();

// # sourceMappingURL=main.bundle.js.map