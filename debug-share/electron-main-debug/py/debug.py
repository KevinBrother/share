import sys


def trace_dispatch(frame, event, arg):
    """Dispatch a trace function for debugged frames based on the event.

    This function is installed as the trace function for debugged
    frames. Its return value is the new trace function, which is
    usually itself. The default implementation decides how to
    dispatch a frame, depending on the type of event (passed in as a
    string) that is about to be executed.

    The event can be one of the following:
        line: A new line of code is going to be executed.
        call: A function is about to be called or another code block
                is entered.
        return: A function or other code block is about to return.
        exception: An exception has occurred.
        c_call: A C function is about to be called.
        c_return: A C function has returned.
        c_exception: A C function has raised an exception.

    For the Python events, specialized functions (see the dispatch_*()
    methods) are called.  For the C events, no action is taken.

    The arg parameter depends on the previous event.
    """
    # if self.quitting:
    #     return # None
    print('frame.f_code: ' ,frame.f_code,'f_lineno: ', frame.f_lineno, '==========co_filename: ', frame.f_code.co_filename,
          'co_name: ', frame.f_code.co_name,
          'f_code.co_firstlineno: ', frame.f_code.co_firstlineno)
    if event == 'line':
        input()
        print('line')
        # print(frame, event, arg)
    elif event == 'call':
        print('call')
    elif event == 'return':
        print('return')
    elif event == 'exception':
        print('exception')
    elif event == 'c_call':
        print('c_call')
    elif event == 'c_exception':
        print('c_exception')
    elif event == 'c_return':
        print('c_return')
    else:
        print('bdb.Bdb.dispatch: unknown debugging event:', repr(event))
    return trace_dispatch


sys.settrace(trace_dispatch)

exec(compile("""
a = 1
fruits = ["apple", "banana", "orange"]

def abc(c):
    b = 12 + c
    return b

abc_value = abc(12)
print(abc_value)
""", 'asd', 'exec'))

# for fruit in fruits:
#     print(globals())
#     print(locals())
