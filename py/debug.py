import sys


def debug_trace(frame, event, asd):
    print(frame,event,asd)

sys.settrace(debug_trace)

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
