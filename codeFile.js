// Food class
class Food {
    static totalFoodItems = 0;
  
    constructor(name, price) {
      this.name = name; 
      this.price = price; 
      Food.totalFoodItems++; 
    }
  
    getDetails() {
      return `Food: ${this.name}, Price: ₦${this.price}`;
    }
  
    static getTotalFoodItems() {
      return `Total food items available: ${this.totalFoodItems}`;
    }
  }
  
  // Order class
  class Order {
    static totalOrders = 0;
  
    constructor(customerName) {
      this.customerName = customerName; 
      this.foodItems = [];
      Order.totalOrders++; 
    }
  
    
    addFood(food) {
      this.foodItems.push(food);
      console.log(`${food.name} added to the order.`);
    }
  
    static getTotalOrders() {
      return `Total orders made: ${this.totalOrders}`;
    }
  
    calculateTotal() {
      const total = this.foodItems.reduce((sum, food) => sum + food.price, 0);
      return `Total cost for ${this.customerName}'s order: ₦${total}`;
    }
  }
  
  // Testing the food ordering system
  const okpa = new Food("Okpa", 1500);
  const pepsi = new Food("Pepsi", 1000);
  const spaghetti = new Food("Spaghetti", 4000);
  const jollofrice = new Food("Jollof Rice", 3500);
  
  console.log(Food.getTotalFoodItems()); 
  
  // Create an order
  const order1 = new Order("Aku");
  order1.addFood(okpa);
  order1.addFood(pepsi);
  console.log(order1.calculateTotal()); 
  
  // Create another order
  const order2 = new Order("Ayomide");
  order2.addFood(spaghetti);
  console.log(order2.calculateTotal()); 
  
  console.log(Order.getTotalOrders());