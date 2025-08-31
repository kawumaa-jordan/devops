print('jenkins works')
#write a function to add numbers in an array and if the number apears more than once, add skip the number 
def sum_array(arr):
    total = 0
    obj = {}
    for num in arr:
        obj[num]= obj.get(num,0)+1
    for num , count in obj.items():
        if count == 1: 
            total += num
    return total
   
print(sum_array([1, 1, 2, 3]))  # Output: 5