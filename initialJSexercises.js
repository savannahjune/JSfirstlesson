# sum = 0
# for i in range(1000):
#     if i % 3 == 0 or i % 5 == 0:
#         sum += i
# print sum


#Javascript

# var sum = 0;

# for (var n=0; n < 1000; n++) {
# if (n % 3 === 0 || n % 5 ===0) {
#     sum += n; }
# }
# console.log(sum);



# def fibonacci_set(max):
#     if max > 1:
#         fib_list = [1]
#         current_fib = 1
#         while current_fib < max:
#             fib_list.append(current_fib)
#             current_fib = fib_list[-1] + fib_list[-2]

#         return fib_list
#     else:
#         return [1, 1]

# ## Tell me if a number is even
# def even(n):
#     return n % 2 == 0

# print sum(filter(even,fibonacci_set(4000000)))
# print fibonacci_set(4000000)

## SECOND JAVASCRIPT
# var fibonacci_set = function (max) {
#    if (max > 1) {
#     var fib_list = [1];
#     var current_fib = 1;
    
#         while (current_fib < max) {
#             fib_list.push(current_fib);
#             current_fib = (fib_list[fib_list.length - 1] + fib_list[fib_list.length - 2]);
#         }
#         return fib_list;        
#     }
    
#     else {
#         return [1,1];
#     }

     
# };

# var even = function (n) {
#     if (n % 2 === 0) {
#         return true;
#     }
#     return false;
# };
    


# var filter = function (fib_list) {
#     var list_even = [];
#     # console.log(list_even);
#     # console.log(fib_list.length);
#     for (var i = 0; i < fib_list.length; i++) {
#         if (even(fib_list[i])) {
#             list_even.push(fib_list[i]);
#             console.log(list_even);
#         }
#     }
#     return list_even;
# };

# var sum = function sum(list) {
#     var total = 0;
#     for (var item in list) {
#         total += list[item];
#     }   
#     return total;
# };

# # console.log (sum(filter(fibonacci_set(4000000))));


# # console.log (filter(fibonacci_set(4000000)));

# console.log (fibonacci_set(4000000));

# var cat = {
#         tiredness: 20,
#         hunger: 20,
#         lonliness: 30,
#         happiness: 15,
#         obedientness: -5000,
#         feed: function(food){
#             if (food == "fish"){
#                 x = 10;
#             }
#             else if (food == "treat"){
#                 x = 3;
#             }
#             else if (food == "milk"){
#                 x = 4;
#             }    
#             else { 
#                 x = 3;
#             }
            
#             console.log("Om nom nom");
#             this.hunger = this.hunger - x;
#             console.log("Cat hunger is " + this.hunger);
#         },
#         sleep: function(){
#             console.log("Zzzzzzz");
#             this.tiredness = this.tiredness - 5;
#             console.log("Cat tiredness is " + this.tiredness);
#         },
#         hangout: function(n) {
#             this.lonliness = this.lonliness - n;
#             console.log("Cat lonliness is " + this.lonliness); 
            
#         },
        
#         play: function(n){
#             catCrankiness = Math.random();
#             if (catCrankiness > 0.5) {
#                 console.log("Cat wants you to go away");
#             }
#             else {
            
#                 console.log("Throw ball, playtime");
#                 this.happiness = this.happiness - n* 2;
#                 console.log("and Cat happiness is " + this.happiness);
#             }
#             },
            
#         interact: function(n) {
#             if (n == "pet"){
#                 this.happiness = this.happiness + 5;
#             }
#             else if (n == "laser") {
#                 this.happiness = this.happiness + 7;
#                 this.hunger = this.hunger + 9;
#                 this.tiredness = this.tiredness + 2;
#                 console.log("Laser play resulted in " +this.happiness +" happiness level and " + this.hunger + " hungerness level and " + this.tiredness + " tiredness level.");
#             }
            
            
#         },    
            
#         scold: function(){
#             console.log("Bad cat!");
#             this.obedientness = this.obedientness + 1000;
#         }
            
        
# }; 

# // cat.feed();

# // cat.sleep();

# // cat.feed("fish");
# // cat.play(3);
# cat.interact("laser");