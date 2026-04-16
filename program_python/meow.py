
def main():
    number = get_number()

    meow(number)

def get_number():
    while True:
        n = int(input("whats the number of meows?"))
        if n > 2:
            continue
        return n  
      


def meow(n):
    for _ in range(n):
        print("meow")    

main()