(function (global, factory) {
    if(typeof define === 'function' && (define.amd || define.cmd)){
        define(factory)
    }else if(typeof module === 'object' && typeof module.exports === 'object'){
        module.exports = factory()
    }else{
        global.Emmiter = factory()
    }
})(this, function () {

    function Emmiter() {
        this._store = {}
        this._onceStore = {}
    }

    Emmiter.fn = Emmiter.prototype

    Emmiter._addStore = function (evtName, fn, store) {
        if (!evtName || !fn) return

        if (!store.hasOwnProperty(evtName)) {
            store[evtName] = []
        }

        store[evtName].push(fn)
    }

    Emmiter.fn.once = function (evtName, fn) {
        Emmiter._addStore(evtName, fn, this._onceStore)
    }

    Emmiter.fn.on = function (evtName, fn) {
        Emmiter._addStore(evtName, fn, this._store)
    }

    Emmiter.fn.emit = function (evtName) {
        var storeEvtName, onceStoreEvtName
        var arg = [].slice.call(arguments, 1)
        var that = this

        function emitFn(storeEvtName, cb) {
            if (!storeEvtName || storeEvtName.length === 0) {
                return
            }

            for (var i = 0, l = storeEvtName.length; i < l; i++) {
                storeEvtName[i].apply(null, arg)
            }
            cb && cb()
        }

        if (!this._store.hasOwnProperty(evtName) && !this._onceStore.hasOwnProperty(evtName)) {
            return
        }

        storeEvtName = this._store[evtName]
        onceStoreEvtName = this._onceStore[evtName]

        emitFn(storeEvtName)
        emitFn(onceStoreEvtName, function () {
            delete that._onceStore[evtName]
        })
    }

    Emmiter.fn.removeListener = function (evtName, fn) {
        var storeEvtName, onceStoreEvtName

        function removeFn(storeEvtName) {
            if (!storeEvtName || storeEvtName.length === 0) {
                return
            }

            for (var i = 0, l = storeEvtName.length; i < l; i++) {
                if (storeEvtName[i] === fn) {
                    storeEvtName.splice(i, 1)
                    break
                }
            }
        }

        if (!this._store.hasOwnProperty(evtName) && !this._store.hasOwnProperty(evtName)) {
            return
        }

        storeEvtName = this._store[evtName]
        onceStoreEvtName = this._onceStore[evtName]

        if (!fn) {
            if (storeEvtName) {
                delete this._store[evtName]
            }

            if (onceStoreEvtName) {
                delete this._onceStore[evtName]
            }
            return
        }

        removeFn(storeEvtName)
        removeFn(onceStoreEvtName)
    }

    return Emmiter
})
