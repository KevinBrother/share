var startDebug = {
  command: "initialize",
  arguments: {
    clientID: "vscode",
    clientName: "Visual Studio Code",
    adapterID: "debugpy",
    pathFormat: "path",
    linesStartAt1: true,
    columnsStartAt1: true,
    supportsVariableType: true,
    supportsVariablePaging: true,
    supportsRunInTerminalRequest: true,
    locale: "en",
    supportsProgressReporting: true,
    supportsInvalidatedEvent: true,
    supportsMemoryReferences: true,
    supportsArgsCanBeInterpretedByShell: true,
    supportsMemoryEvent: true,
    supportsStartDebuggingRequest: true,
  },
  type: "request",
  seq: 1,
};


var addBreakPoint = {
    command: "setBreakpoints",
    arguments: {
      source: {
        name: "chrome.debguger.js",
        path:
          "/Users/caojunjie/workspace/datagrand/share/debug-share/js/chrome.debguger.js",
      },
      lines: [1, 3, 4],
      breakpoints: [{ line: 1 }, { line: 3 }, { line: 4 }],
      sourceModified: false,
    },
    type: "request",
    seq: 20,
  };

var removeBreakpoints = {
  command: "setBreakpoints",
  arguments: {
    source: {
      name: "chrome.debguger.js",
      path:
        "/Users/caojunjie/workspace/datagrand/share/debug-share/js/chrome.debguger.js",
    },
    lines: [1, 4],
    breakpoints: [{ line: 1 }, { line: 4 }],
    sourceModified: false,
  },
  type: "request",
  seq: 21,
};

var responseAddBreakpoints = {
  seq: 31,
  type: "response",
  request_seq: 21,
  success: true,
  command: "setBreakpoints",
  body: {
    breakpoints: [
      {
        verified: true,
        id: 13,
        source: {
          name: "chrome.debguger.js",
          path:
            "/Users/caojunjie/workspace/datagrand/share/debug-share/js/chrome.debguger.js",
        },
        line: 1,
      },
      {
        verified: true,
        id: 14,
        source: {
          name: "chrome.debguger.js",
          path:
            "/Users/caojunjie/workspace/datagrand/share/debug-share/js/chrome.debguger.js",
        },
        line: 4,
      },
    ],
  },
};

