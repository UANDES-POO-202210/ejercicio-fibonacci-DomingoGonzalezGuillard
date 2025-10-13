// C++ program to illustrate the
// iterators in vector

//The auto keyword is a simple way to declare a variable that has a complicated type. For example, you can use auto to declare a variable where the initialization expression involves templates, 
//pointers to functions, or pointers to members

//Constant iterator vs Normal iterator
//The main difference between a constant iterator and a normal iterator in C++ is that a constant iterator does not allow you to change the value 
//of the object it is pointing to, while a normal iterator does 


// Porque usar rbegin o end
//rbegin() and end() are both iterators in C++, but they serve different purposesrbegin() returns a reverse iterator to the last element of a container, while end() returns an iterator to the element 
//following the last element of the container 1. This means that end() does not point to an actual element, and it is not safe to read from it
// Sirve para decirle cuando parar al contador for
#include <iostream>
#include <vector>

using namespace std;

int main()
{
	vector<int> g1;

	for (int i = 1; i <= 5; i++)
		g1.push_back(i);

	cout << "Output of begin and end: ";
	for (auto i = g1.begin(); i != g1.end(); ++i)
		cout << *i << " ";

	cout << "\nOutput of cbegin and cend: ";
	for (auto i = g1.cbegin(); i != g1.cend(); ++i)
		cout << *i << " ";

	cout << "\nOutput of rbegin and rend: ";
	for (auto ir = g1.rbegin(); ir != g1.rend(); ++ir)
		cout << *ir << " ";

	cout << "\nOutput of crbegin and crend : ";
	for (auto ir = g1.crbegin(); ir != g1.crend(); ++ir)
		cout << *ir << " ";


    auto i = g1.cbegin();
    cout << endl << *(i+1) << endl;

    cout << "Size : " << g1.size();
    cout << "\nCapacity : " << g1.capacity();
    cout << "\nMax_Size : " << g1.max_size();

	return 0;
}
