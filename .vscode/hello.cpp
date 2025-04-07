

//lesson 9


/*
  Varibales Baisic Knolesge
    Data Container With Unique Name "Indentifier"
    Declare With Value + Change Later

  Syntax
    [Data_Type]v[Varibale_Name] = [Value]
*/
/*
#include <iostream>
using namespace std;

int main()
{
    int price = 200;
    cout << "Price Is: " << price;
    cout << "\n price after adding 15 Is: " << price + 15;
    cout << "\n price after adding 50 IS: " << price + 50;
    price = 200;
    cout << "\nthe new price is: " << price - 50;
    return 0;
}
*/


// lesson 10



/*
  Variables Naming Rules & Best Practices

  - Naming Rules
  --- Must Be Unique
  --- Case Sensitive
  --- Cannot Start With Numbers
  --- Nums Or Letters Or Underscore
  --- No White Space Or Special Characters
  --- Reserved Keywords "Class, Public"

  - Best Practices
  --- Related Names
  --- Writing Style
*/

#include <iostream>
using namespace std;

int main()
{
  int price = 100; // Declare A New Variable
  price = 200;     // Update The Value
  int Price = 400;
  cout << price;
  cout << "\n===============\n";
  int n1um1111 = 10;
  cout << n1um1111;
  cout << "\n===============\n";
  int _num_bers_ = 100;
  cout << _num_bers_;
  cout << "\n===============\n";
  int publics = 1000;
  cout << publics;
  cout << "\n===============\n";
  int OSAMA = 500; // Bad Style
  cout << OSAMA;
  cout << "\n===============\n";
  int x = 1000;
  cout << x;
  return 0;
}


/*
  Vector
  - Use Iterator To:
  --- Sort
  --- Count
  --- Reverse
*/