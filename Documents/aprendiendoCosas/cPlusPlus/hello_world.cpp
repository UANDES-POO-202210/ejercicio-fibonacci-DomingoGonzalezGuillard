#include <iostream>

using namespace std;

int main() {

    int a = 24;
	
    // print variable
    cout << "Value of a is " << a << endl;

    int b;
    int *ptr;
    ptr = &b;
    b = 10;
    cout << "b esta ubicado en   " << &b << endl;

    cout << "ptr apunta a  " << ptr << endl;
    cout << "Lo que esta guardado en b es:  " << *ptr << endl;




    return 0;
}

// Output: Value of a is 24