/*        WEEK   (1)     */
// week1 - example 1

/*
#include <iostream>
using namespace std;

int main()
{
    string name;
    cin >> name;
    cout<< "Hello, "+name;
    return 0;
}*/

// week 1 - example 2

/*
#include <iostream>
using namespace std;

int main()
{
    int val1=5;
    long long val2=310000093939;
    float val3=5.34;
    double val4=31.000124;
    char val5='h';
    string val6="ali";
    bool val7=false;

    cout<<val1<<val2<<val3<<val4<<val<<val5<<val6<<val7<<endl;
}*/

// week 1 - example 3

/*
#include <iostream>
using namespace std;

int main()
{
    cout<<123%10<<" "<<123%11<<" "<<123%2;
    return 0;
}*/

// week 1 - example 4

/*
#include <iostream>
using namespace std;

int main()
{
    int x;
    cin>>x;
    int y;
    cin>> y;
    cout <<x+y;
}
*/

/*        WEEK   (2)          */
/*week 2 -example 1 */
/*
#include <bits/stdc++.h>
using namespace std;
int main()
{
   int res;
   for(int i=1; i<100; i++){
       if (i % 3 ==0 && i % 5 ==0){
           res+=i;
       }
   }
   cout << res;
}
 */

// week 2 - example 2

/*
#include <iostream>
#include <iomanip>
#include <bits/stdc++.h>
using namespace std;
int main()
{

    int t;
    cin>>t;
    for(int i=0;i<t;i++){
    int n;
    cin >> n;
    long long res=1;
        for(int y=1; y<=n; y++){
        res *= y;
    }
    cout <<res<<'\n';

    }
}
*/

/*   WEEk    (3)  */

/* week 3 -  example 1*/

/*
#include <bits/stdc++.h>
using namespace std;

int main()
{
    char x[1005];
    int n;
    cin >>n;
    for (int i = 0; i < n; i++)
    {
        cin >> x[i];
        if (x[i] >= 'A' && x[i] <= 'Z')
        cout << char (x[i] + 32) << endl;
        else if (x[i] >= 'a' && x[i] <= 'z')
            cout << char (x[i] - 32) << endl;
    }
    return 0;
}*/

/*     week 3 - example 2 */
/*
#include <bits/stdc++.h>
using namespace std;
int main()
{
    int x[1005];
    int n;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        cin >> x[i];
    }
    for (int j = 0; j < n - 1; j++)
    {
        for (int f = 0; f < n - 1; f++)
        {
            if (x[f] > x[f + 1])
                swap(x[f], x[f + 1]);
        }
    }
    for (int k = 0; k < n; k++)
    {
        cout << x[k] << endl;
    }
    return 0;
}
*/

/*    week3 - example3    */
/*
#include <bits/stdc++.h>
using namespace std;
int main()
{
    int x[105][105];
    int n, sume = 0, sumo = 0;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cin >> x[i][j];
        }
    }
    for (int i = 0; i < n; i++)
    {
        sume=0,sumo=0;
        for (int j = 0; j < n; j++)
        {
            if (x[i][j] % 2 == 0)
                sume += x[i][j];
            else if (x[i][j] % 2 == 1)
                sumo += x[i][j];
        }
        cout << sume << " " << sumo << endl;
    }

    return 0;
}*/

/*   WEEK    (4)  */
/*  week 4 - example 1 */

/*#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL);
    int n;
    cin >> n;
    int x[100];
    int y[100]={0};
    for (int i = 0; i<n; i++)
    {
        cin >> x[i];
        y[x[i]]++;
    }
    for (int i = 0; i<; i++)
    {
        cout << y[i]<<" ";
    }
    return 0;
}*/

/*#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL);
    int n;
    cin >> n;
    string s;
    cin >>s;
    int y[150]={0};
    for (int i = 0; i<n; i++)
    {
        y[s[i]]++;
    }
    for (int i = 97; i<=124; i++)
    {
    cout << y[i]<<" ";
    }
    return 0;
}*/



                                                            //o1  A
/*#include <bits/stdc++.h>
using namespace std;

#define IOS ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL);
#define nl '\n'
#define ll long long
int main()
{
    IOS 
    int n;
    cin >> n;
    ll a[n];
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }
    ll lcm_value = a[0];
    for (int i = 1; i < n; i++)
    {
        lcm_value = (lcm_value * a[i]) / gcd(lcm_value, a[i]);
    }
    cout << lcm_value + 1 << nl;
    return 0;
}*/